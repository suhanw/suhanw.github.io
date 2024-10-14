---
pin_order: 13
title: Mock Service Worker, Storybook, and Jest in 2024
description: Boosting local web development, Storybook, and Jest tests with Mock Service Worker (MSW)
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

If your application registers a Service Worker it must host and serve the worker script. The library CLI provides you with the init command to quickly copy the `./mockServiceWorker.js` worker script into your application’s public directory.

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

I won't go over how to [install Storybook](https://storybook.js.org/docs) in your project.

Instead, let's start with creating a Story for the `DataComponent` created above. A story is an object that describes how to render a component, i.e., `DataComponent` in this case. You can have multiple stories per component, each story capturing the rendered state of this particular component.

```tsx
// client/src/components/DataComponent.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import DataComponent from "./DataComponent";

const meta: Meta<typeof DataComponent> = {
  title: "DataComponent",
  component: DataComponent,
};

export default meta;

type Story = StoryObj<typeof DataComponent>;

// Rendered state when API request succeeds.
export const Success: Story = {};

// Rendered state when API request fails.
export const Error: Story = {};
```

Now, we integrate MSW to leverage the mock response defined above.

---

### Jest

---

### Putting it all together

Using Mock Service Worker (MSW) in your local development, Storybook, and Jest testing environments offers numerous benefits, including faster development cycles, more consistent testing, and easier simulation of API behaviors. By mocking your API responses, you can focus on building and testing your UI without being held back by network dependencies or external APIs.
