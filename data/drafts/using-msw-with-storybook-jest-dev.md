---
pin_order: 13
title: Mock Service Worker, Storybook, Jest, and React in 2024
description: Supercharging local React development, Storybook, and Jest tests with Mock Service Worker (MSW)
image: https://www.suhanwijaya.com/images/react-node-typescript-2024.jpeg
tags: javascript,webdev,typescript,storybook,jest,msw
date: "2024-10-10"
---

<figure>
    <img src="/images/using-msw-with-storybook-jest-dev-cover.jpg">
</figure>

---

In modern frontend development, creating smooth, reliable, and testable user experiences often requires interacting with various APIs. However, calling real APIs during development or tests can slow you down, introduce flakiness, and make your app reliant on services that might be out of your control.

That's where Mock Service Worker (MSW) comes in. It enables you to mock API responses efficiently, allowing seamless local development, enhanced Storybook integration, and robust Jest unit testing.

In this post, we'll explore how you can leverage MSW to supercharge your local development, make your Storybook demos more realistic, and test your app’s functionality in isolation with Jest.

We will be building upon the React/Node.js app from this [previous blog post](https://www.suhanwijaya.com/posts/react-node-typescript-2024).

---

### React hooks for API requests

I like to keep my API helper methods in separate modules. This method calls the API route `GET /user`.

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

export function useGetUser(): State {
  const [userState, dispatch] = useReducer(getUserReducer, {
    loading: true,
  });

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

  return userState;
}

type State = {
  loading: boolean;
  error?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};

type Action = {
  type: string;
  error?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
```

And finally, create the React component that uses the data fetching hook.

```tsx
// client/src/components/DataComponent.tsx

import React from "react";
import { useGetUser } from "../api/get-user";

function DataComponent() {
  const { loading, error, firstName, lastName } = useGetUser();

  return (
    <div>
      <p>This is DataComponent.</p>
      {loading && <p>LOADING</p>}
      {!loading && error && <p role="alert">{error}</p>}
      {!loading && firstName && lastName && (
        <p>{`"Yeah." -${firstName} ${lastName}`}</p>
      )}
    </div>
  );
}

export default DataComponent;
```

---

### Setting up MSW in the project

Suppose the `GET /user` endpoint is not ready at the moment, but you and your backend team agree on a JSON response data structure. Let's define a TypeScript type to codify the backend-frontend contract:

```ts
// client/src/api/get-user.ts

export type ResponseData = {
  id: string;
  firstName: string;
  lastName: string;
};
```

Now, this is where MSW unblocks the frontend work even though the backend is not ready. Let's install `msw` in your project:

```
npm install msw --save-dev
```

In a nutshell, MSW will intercept outgoing API requests, and run a resolver function to handle that intercepted request. Your job is to write that resolver function to return a mock response that follows the backend-frontend contract.

```ts
// client/src/api/get-user-mock.ts

import { http, HttpResponse } from "msw";
import { API_ROUTE, ResponseData } from "./get-user";

// Mock data enforced by the TypeScript type `ResponseData` defined above.
export const mockResponseData: ResponseData = {
  id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
  firstName: "John",
  lastName: "Wick",
};

// The resolver function that handles intercepted `GET /user` requests.
export const getUserMockHandler = http.get(API_ROUTE, function () {
  return HttpResponse.json(mockResponseData);
});
```

---

### Local development

In the browser, MSW works by registering a Service Worker responsible for request interception on the network level.

If your application registers a Service Worker, it must host and serve the worker script. The library CLI provides you with the init command to quickly copy the `./mockServiceWorker.js` worker script into your application’s public directory.

```
npx msw init PUBLIC_DIR --save
```

Once copied, navigate to the `/mockServiceWorker.js` URL of your application in your browser (e.g. if your application is running on `http://localhost:3000`, go to the `http://localhost:3000/mockServiceWorker.js` route). You should see the worker script contents. If you see a 404 or a MIME type error, make sure you are specifying the correct `PUBLIC_DIR` when running the init command, and that you adjust any potential configuration of your application that would affect serving static files.

In our case, I decided to register a specific route for the Service Worker script in the Express app:

```ts
// server/src/index.ts

import path from "path";
import express from "express";

const app = express();

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

// Only register this route in development
if (isDev) {
  app.use(
    "/mockServiceWorker.js",
    express.static(
      // I ran `npx msw init client/src/mocks --save`
      // to generate and copy the worker script.
      path.join(process.cwd(), "./client/src/mocks/mockServiceWorker.js")
    )
  );
}
```

To enable MSW on the frontend, call the [setupWorker()](https://mswjs.io/docs/api/setup-worker) function to prepare the client-worker communication channel to enable API mocking, passing in the resolver function `getUserMockHandler` defined above.

```ts
// client/src/mocks/browser.ts

import { setupWorker } from "msw/browser";
import { getUserMockHandler } from "../api/get-user-mock";

const handlers = [getUserMockHandler];

const worker = setupWorker(...handlers);

export async function enableMocking() {
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}
```

And lastly, we activate the Service Worker by calling `worker.start()`. Because activating the Service Worker is an asynchronous operation, it’s a good idea to await the `worker.start()` Promise before rendering your application. Failing to await it may result in a race condition between the worker registration and the initial requests your application makes.

```ts
// client/src/index.ts

import React from "react";
import { createRoot } from "react-dom/client";
import { enableMocking } from "./mocks/browser";

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

window.addEventListener("DOMContentLoaded", async () => {
  // Only enable API mocking in development so production traffic is unaffected.
  if (isDev) {
    await enableMocking();
  }

  const root = createRoot(document.getElementById("root"));
  root.render(<App />);
});
```

Start the app `npm run dev` and observe these logs in your browser console. 🎉

```
[MSW] Mocking enabled.
[MSW] 12:16:09 GET /user (200 OK)
```

---

### Storybook

Assuming that you've already [installed Storybook](https://storybook.js.org/docs) in your project, we start by integrating MSW by installing the Storybook addon:

```
npm install msw-storybook-addon --save-dev
```

Initialize MSW and provide the MSW loader in `.storybook/preview.ts`:

```ts
// .storybook/preview.js

import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";

initialize();

const preview: Preview = {
  // other code...

  // Provide the MSW addon loader globally.
  loaders: [mswLoader],
};

export default preview;
```

Similar to local development where your app needs to host and serve the Service Worker script, Storybook also needs to do the same. Recall that we already generated the worker script in `client/src/mocks/mockServiceWorker.js` earlier. You can add the path to the same worker script in the Storybook [static files config](https://storybook.js.org/docs/configure/integration/images-and-assets#serving-static-files-via-storybook-configuration) in `.storybook/main.ts`:

```ts
// .storybook/main.ts

import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // other code...

  // Enable Storybook to serve the MSW script
  staticDirs: ["../client/src/mocks"],
};
export default config;
```

Finally, you can use the same resolver function `getUserMockHandler` in your Story.

```tsx
// client/src/components/DataComponent.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import DataComponent from "./DataComponent";
import { getUserMockHandler } from "../api/get-user-mock";

const meta: Meta<typeof DataComponent> = {
  title: "DataComponent",
  component: DataComponent,
};

export default meta;

type Story = StoryObj<typeof DataComponent>;

// Rendered state when API request succeeds.
export const Success: Story = {
  parameters: {
    msw: {
      // Add the resolver function to intercept `GET /user` requests
      handlers: [getUserMockHandler],
    },
  },
};

// Rendered state when API request fails.
export const Error: Story = {};

// You can have multiple stories per component, each story
// capturing the rendered state of this particular component.
```

Start Storybook `npm run storybook` and observe these logs in your browser console. 🎉

```
[MSW] Mocking enabled.
[MSW] 12:16:09 GET /user (200 OK)
```

---

### Jest

Again, I will assume that you have installed [Jest](https://jestjs.io/docs/getting-started) and [Testing Library](https://testing-library.com/docs/) in your project.

Jest runs on Node.js, therefore we need to setup MSW via the [Node.js integration](https://mswjs.io/docs/integrations/node). So first, we export an MSW server to intercept outgoing traffic.

```ts
// client/src/mocks/server.ts

// Import from `msw/node` to integrate MSW in Node.js.
import { setupServer } from "msw/node";

// We will then use the `server` object in our tests to
// intercept requests and respond with mock data.
export const server = setupServer();
```

Next, let's create a test file for `DataComponent`, where we will import the MSW server and again reuse our resolver function `getUserMockHandler` to handle intercepted `GET /user` requests.

```tsx
// client/src/components/DataComponent.test.tsx

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import DataComponent from "./DataComponent";
import { server } from "../mocks/server";
import { getUserMockHandler, mockResponseData } from "../api/get-user-mock";

beforeAll(() => {
  // Register the `GET /user` resolver prior to running tests.
  server.use(getUserMockHandler);
  // Start listening for and intercepting `GET /user` requests.
  server.listen();
});

afterEach(() => {
  // This will remove any runtime request handlers
  // after each test, ensuring isolated network behavior.
  server.resetHandlers();
});

afterAll(() => {
  // Disable request interception and clean up.
  server.close();
});

describe("DataComponent", () => {
  it("should display user data", async () => {
    render(<DataComponent />);
    expect(screen.queryByText("This is DataComponent.")).toBeInTheDocument();
    expect(screen.queryByText("LOADING")).toBeInTheDocument();

    // wait until the `GET /user` request promise resolves
    await waitFor(() => {
      expect(screen.queryByText("LOADING")).not.toBeInTheDocument();
      const { firstName, lastName } = mockResponseData;
      expect(
        screen.queryByText(`"Yeah." -${firstName} ${lastName}`)
      ).toBeInTheDocument();
    });
  });
});

// other tests...
```

To test client-side React component, Jest leverages JSDOM to simulate a browser environment in Node.js without having to launch an actual browser.

At the time of this writing, there are a couple of "gotchas" caused by the fact that we're using JSDOM as our test environment while using the Node.js integration for MSW.

Gotcha #1, the `msw/node` module is not exported in a client-side environment, which includes JSDOM, i.e., `Cannot find module msw/node` throws when running the test.

Gotcha #2, `msw/node` expects and uses several Node.js globals that do not exist in the JSDOM environment, i.e., `ReferenceError: TextEncoder is not defined` throws from the `msw/node` library.

Here are the fixes:

```ts
// client/jest.config.ts

import type { Config } from "jest";

const config: Config = {
  displayName: "client",
  // To fix Gotcha #2, we set `jest-fixed-jsdom` as the test environment,
  // a superset of `jest-environment-jsdom` that includes Node.js globals
  testEnvironment: "jest-fixed-jsdom",
  testEnvironmentOptions: {
    // To fix Gotcha #1, override the exported lib version
    // which defaults to "browser" for JSDOM.
    customExportConditions: ["msw"],
  },

  //   other settings...
};
```

Run the test `npm test` and observe the green checks. 🎉

---

### Putting it all together

This blog post covers a lot of one-time setup. However, as your app grows, it will be much simpler to add new API helper modules, mocks, and MSW resolvers, and extend the MSW resolvers in your local dev, Storybook, and Jest. This offers numerous benefits, including faster development cycles, more consistent testing, easier simulation of API behaviors, and perhaps a happier collaboration with your backend teams. 🍻
Here’s [my repo](https://github.com/suhanw/blog-storybook-jest-msw) to see the whole thing come together.

---

### Resources

- [Mock API requests in Storybook with Mock Service Worker](https://storybook.js.org/addons/msw-storybook-addon)
- [Integrate MSW with test runners](https://mswjs.io/docs/integrations/node#test-runner)
- [MSW 2.0 frequent issues](https://mswjs.io/docs/migrations/1.x-to-2.x#frequent-issues)
- [Building a full stack React and Node web app with TypeScript and ESBuild](https://www.suhanwijaya.com/posts/react-node-typescript-2024)
