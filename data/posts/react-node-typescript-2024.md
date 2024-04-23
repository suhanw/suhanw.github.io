---
pin_order: 11
title: React, Node, TypeScript in 2024
description: Building a full stack React and Node web app with TypeScript and ESBuild
image: https://www.suhanwijaya.com/images/react-node-typescript-2024.jpeg
tags: javascript,webdev,typescript,react,node,esbuild
date: "2024-04-22"
---

<figure>
    <img src="/images/react-node-typescript-2024.jpeg">
</figure>

---

React and Node.js have emerged as popular choices for frontend and backend development respectively, offering developers the flexibility and performance needed to create modern web experiences. When combining these technologies in a full stack application, employing TypeScript for type safety and consistency becomes invaluable. In this guide, we'll walk through the process of setting up a full stack React and Node app with shared TypeScript configuration, transpiled using ESBuild.

---

### **Setting Up the Project Structure**

Before diving into code, let's establish a well-organized project structure. This ensures clarity and maintainability as the project grows. We'll organize our project into separate directories for the frontend and backend components. Here's a suggested structure:

```
project-root/
│
├── client/
│   ├── src/
│   │   └── index.tsx
│   ├── tsconfig.json
│   └── esbuild.mjs
│
└── server/
│   ├── src/
│   │   └── index.ts
│   ├── tsconfig.json
│   └── esbuild.mjs
│
├── tsconfig.base.json
├── esbuild.base.mjs
└── package.json
```

In this structure, the `client` directory contains the React frontend code, while the `server` directory houses the Node.js backend code. Each directory has its own `src` folder for source code, a `tsconfig.json` file for TypeScript configuration, and a file for `esbuild.mjs` esbuild configs. Further, we will use `tsconfig.base.json` and `esbuild.base.mjs` for config options that are shared by both frontend and backend code, which will be extended by the respective config files in the `client` and `server` folders.

---

### Barebones React and Node

I purposely kept the React and Node entry points simple and hopefully self-explanatory.

#### React

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

#### Node

```js
// server/index.ts

import path from "path";
import express from "express";

const PORT = 3000;
const app = express();

app.use("/public", express.static(path.join(process.cwd(), "./dist/client"))); // [A]

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <div id="root"></div>
        <script src="/public/bundle.js"></script> <!-- [A] -->
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

**[A]** Serve the bundled frontend code as a static file.

---

### TypeScript

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

### ESBuild

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

### Putting it all together

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
