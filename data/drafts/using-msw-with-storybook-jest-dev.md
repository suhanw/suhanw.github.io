---
pin_order: 13
title: Mock Service Worker, Storybook, and Jest in 2024
description: Boosting local development, Storybook, and Jest tests with Mock Service Worker (MSW)
image: https://www.suhanwijaya.com/images/react-node-typescript-2024.jpeg
tags: javascript,webdev,typescript,storybook,jest,msw
date: "2024-10-10"
---

<figure>
    <img src="/images/react-node-typescript-2024.jpeg">
</figure>

---

In modern frontend development, creating smooth, reliable, and testable user experiences often requires interacting with various APIs. However, calling real APIs during development or tests can slow you down, introduce flakiness, and make your app reliant on services that might be out of your control.

That's where Mock Service Worker (MSW) comes in. It enables you to mock API responses efficiently, allowing seamless local development, enhanced Storybook integration, and robust Jest unit testing.

In this post, we'll explore how you can leverage MSW to supercharge your local development, make your Storybook demos more realistic, and test your app’s functionality in isolation with Jest.

---

### React hooks for API requests

I like to keep my API helper methods in separate modules.

```ts
// client/src/api/get-user.ts

export const API_ROUTE = "/user";

async function getUser(): Promise<ResponseData> {
  try {
    const { data } = await axios.get(API_ROUTE);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
```

Wrap the API call in a custom hook that leverages `useReducer` to manage the state transitions during the various stages of an API call i.e., loading, success, failure.

```ts
// client/src/api/get-user.ts

function getUserReducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOADING": {
      return {
        loading: true,
      };
    }
    case "SUCCESS": {
      return {
        loading: false,
        error: null,
        firstName: action.firstName,
        lastName: action.lastName,
      };
    }
    case "ERROR": {
      return {
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}

export function useGetUser() {
  const [{ loading, error, firstName, lastName }, dispatch] = useReducer(
    getUserReducer,
    {
      loading: true,
    }
  );

  useEffect(() => {
    getUser()
      .then((data) => {
        dispatch({
          type: "SUCCESS",
          ...data,
        });
      })
      .catch(() => {
        dispatch({
          type: "ERROR",
          error: "Uh oh. Something went wrong.",
        });
      });
  }, []);

  return {
    loading,
    error,
    firstName,
    lastName,
  };
}
```

---

### Setting up MSW in the project

```jsx
// client/index.tsx

import React from "react";
import { createRoot } from "react-dom/client";

function App({ message }: { message: string }) {
  return <h1>{message}</h1>;
}

window.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root")); // [A]
  root.render(<App message="Hello World!!" />);
});
```

**[A]** Make sure the root element ID matches that in the HTML page served by Node.

---

### Local development

When working on a full-stack project with TypeScript, using a common `tsconfig.base.json` file along with “platform-specific” configuration files can help maintain consistency while allowing flexibility for different environments. Again, I’m keeping my config files barebones for the sake of illustration.

```json
// tsconfig.base.json

{
  "compilerOptions": {
    "esModuleInterop": true,
    "noImplicitAny": true
  },
  "include": ["./**/*.ts"]
}
```

Platform-specific configuration files, that live in `client/tsconfig.json` for the frontend and `server/tsconfig.json` for the backend, inherit from `tsconfig.base.json` and override specific options. This approach allows you to customize settings without affecting the base configuration.

For example, the frontend config might include options for JSX support and set to a lower `target` (e.g. ES5) if you need to support older browsers.

```json
// client/tsconfig.json

{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "jsx": "react",
    "target": "ES5"
  },
  "include": ["./**/*.ts", "./**/*.tsx"]
}
```

Whereas you may need to specify the `module` resolution option based on the Node version your backend runs on.

```json
// server/tsconfig.json

{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "target": "ESNext",
    "module": "NodeNext"
  }
}
```

---

### Storybook

ESBuild configurations can follow a similar pattern, where a base config can contain settings common to both frontend and backend, and “platform-specific” configs can extend the base config to address unique requirements. Again, I’m keeping my configs barebones for the sake of illustration.

```js
// esbuild.mjs

import esbuildPluginTsc from "esbuild-plugin-tsc";

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

export function createBuildSettings({ tsconfigPath, tsx, ...restOptions }) {
  return {
    minify: !isDev,
    sourcemap: isDev,
    bundle: true,
    plugins: [
      esbuildPluginTsc({
        force: true,
        tsconfigPath,
        tsx,
      }),
    ],
    ...restOptions,
  };
}
```

Similarly, platform-specific configuration files that live in `client/esbuild.mjs` for the frontend and `server/esbuild.mjs` for the backend, inherit from `esbuild.base.mjs` augmented with additional options.

In the frontend, options may include targeted browser versions, plugins to handle CSS modules, SVG imports, etc.

```js
// client/esbuild.mjs

import esbuild from "esbuild";
import { createBuildSettings } from "../esbuild.base.mjs";

const settings = createBuildSettings({
  platform: "browser",
  entryPoints: ["client/src/index.tsx"],
  outfile: "dist/client/bundle.js",
  tsconfigPath: "client/tsconfig.json",
  tsx: true,
  target: ["chrome58", "firefox57", "safari11"],
});

await esbuild.build(settings);
```

In the backend, a common option is to avoid bundling `node_modules` packages. Since the backend runs in a Node environment, you might not need to bundle external dependencies, allowing Node to load them at runtime. This reduces the output size and simplifies server deployments.

```js
// server/esbuild.mjs

import esbuild from "esbuild";
import { createBuildSettings } from "../esbuild.base.mjs";

const settings = createBuildSettings({
  platform: "node",
  entryPoints: ["server/src/index.ts"],
  outfile: "dist/server/index.js",
  tsconfigPath: "server/tsconfig.json",
  packages: "external", // avoid bundling modules in node_modules folder
});

await esbuild.build(settings);
```

One important caveat about ESBuild is that it [does not include type checking](https://esbuild.github.io/content-types/#:~:text=esbuild%20does%20not%20do%20any%20type%20checking). However, you can run `tsc` in parallel with ESBuild. This allows you to leverage ESBuild’s speed for bundling while maintaining type safety through TypeScript's type checker, potentially speeding up your CI/CD performance.

---

### Jest

Here are the `scripts` defined in my `package.json`.

```json
// package.json

{
	...

  "scripts": {
    "build:client": "node client/esbuild.mjs",
    "build:server": "node server/esbuild.mjs",
    "build": "concurrently \"npm:build:client\" \"npm:build:server\"",
    "start": "node dist/server/index.js"
  },

  ...
}
```

In summary, `build:client` and `build:server` bundle frontend and backend code respectively. `build` uses the **`concurrently`** package to run both **`build:client`** and **`build:server`** in parallel. And finally, `start` launches the Node.js server to serve the application. Open up `localhost:3000` in your browser and 🎉!

Here’s [my repo](https://github.com/suhanw/blog-react-node-typescript) to see the whole thing come together.

### Putting it all together

Using Mock Service Worker (MSW) in your local development, Storybook, and Jest testing environments offers numerous benefits, including faster development cycles, more consistent testing, and easier simulation of API behaviors. By mocking your API responses, you can focus on building and testing your UI without being held back by network dependencies or external APIs.

With MSW, you get a powerful tool that scales across multiple environments, making it a must-have for modern frontend developers looking to streamline their workflows.
