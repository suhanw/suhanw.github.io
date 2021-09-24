---
pin_order: 3
title: Intro to React Server Side Rendering
description: How to build a React SSR app without any tooling or framework
image: https://cdn-images-1.medium.com/max/900/1*PXvYmj3eEqaRigoFGcJZTA.jpeg
tags: javascript,react,nodejs,webdev
canonical_url: https://medium.com/javascript-in-plain-english/intro-to-react-server-side-rendering-3c2af3782d08
date: '2021-01-11'
---

<figure>
	<img src='https://cdn-images-1.medium.com/max/900/1*PXvYmj3eEqaRigoFGcJZTA.jpeg'>
	<figcaption>Source: <a href="https://www.reddit.com/r/ProgrammerHumor/comments/5lnsko/programming_environment_dilbert_comic_strip_on/">Reddit</a> and Dilbert by Scott Adams</figcaption>
</figure>

***

This is the first in (hopefully) a series of articles to document the lessons I learned building and maintaining SSR apps.

This article does not cover the pros/cons of SSR, or the pros/cons of not using tooling or frameworks (e.g., Create React App, Next.js, etc).

I fully acknowledge that manually setting up build configs is painful. There is plenty of great tooling out there to abstract away these configs, so you probably don’t even need to touch any of this stuff to build awesome apps.

But for those ready to embrace the pain…

***

### Overview

Let’s start with the basics. We will use **React** , **webpack** , and **Express** to build an SSR app that works as follows:

1. Browser sends HTTP request to server to load a page.
2. Server receives HTTP request and turns React JSX into HTML markup.
3. Server inserts the markup into a HTML template and sends the HTML response back to the browser.
4. Browser renders the HTML, downloads the client-side JavaScript bundle, and “hydrates” the HTML.

Also, I will focus on dev mode to keep this article short. I’m saving production mode for a future(ish 😅) article.

***

### Project structure

Before diving into the code, let’s get situated with the project structure.

```
.
+-- client
| +-- components
| | +-- App
| | | +-- index.js
| | | +-- style.less
| +-- index.js
+-- server
| +-- index.js
+-- babel.config.js
+-- package.json
+-- webpack.client.config.js
+-- webpack.server.config.js
+-- webpack.shared.config.js
```

A quick rundown of the files in this project:

- `./client/components` contains React and CSS code.
- `./client/index.js` is the client-side [entry point](https://webpack.js.org/concepts/entry-points/) for webpack, where we “hydrate” the HTML rendered on the server-side.
- `./server/index.js` is the server-side [entry point](https://webpack.js.org/concepts/entry-points/) for webpack, where we define the route to serve the HTML page.
- `./babel.config.js` is the [thing](https://babeljs.io/docs/en/config-files#configuration-file-types) that enables you to use React JSX and ES6+ features in the browser and Node.js. You may have seen alternative versions of this file (.babelrc, babel.config.json, etc).
- `./webpack.shared.config.js` is the config that webpack uses for both client-side and server-side code.
- `./webpack.client.config.js` is the config specific to the client-side code.
- `./webpack.server.config.js` is the config specific to the server-side code.

***

### Dependencies

Here are the dependencies (and versions) used at the time of this writing. I will also mention which relevant dependencies to install in each of the following sections.

<script src='https://gist.github.com/suhanw/2afd2841c1beb5a107b5547b27b786be.js'></script>

Now let’s look at each file in our project in more detail.

***

### webpack

If you are accustomed to building SPAs (Single Page Apps), you may not have needed webpack to process your server-side code. But to enable SSR, the server must be able to read React code, or specifically — JSX. This means, we now need webpack to work its magic on our server-side code. Plus, you’ll also get to use ES6+ syntax that may not be natively supported in Node.js, e.g., import and export. (Sidenote: you don’t need webpack if you choose [not to write JSX](https://reactjs.org/docs/react-without-jsx.html) at all. 😬)

I won’t go through every webpack option in great detail, but here is a [great explainer](https://www.valentinog.com/blog/webpack/) if you are interested.

#### _Common webpack config for client-side and server-side_

Install the relevant dependencies:

```
npm i webpack webpack-cli babel-loader
```

<script src='https://gist.github.com/suhanw/128bbb5bdfb18b854d0ca0ed2ee5b884.js'></script>

Annotations of the code comments above:

**[A]** For our purposes, we want to explicitly set `mode` to **development**. If we go with the default value of **production** , we may lose useful console warnings/errors from libraries like React, and the error stack traces are incredibly hard to read due to code minification. Read more about **production** and **development** modes [here](https://webpack.js.org/configuration/mode/).

**[B]** This tells webpack to preprocess `.js` files with `babel-loader`, which [transpiles](https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them#:~:text=Transpilers%2C%20or%20source%2Dto%2D,are%20said%20to%20target%20JavaScript.) ES6+ and JSX code into JavaScript code that is readable by browsers and Node.js servers. This loader uses the options we specify in `babel.config.js`.

**[C]** This means I don’t have to type out `.js` or `.less` when importing files with those extensions. For example, `import App from ‘./components/App’`.

#### _Babel config_

Install the relevant dependencies:

```
npm i babel-loader @babel/core @babel/preset-env @babel/preset-react
```

<script src='https://gist.github.com/suhanw/33f2d36ef3922ebbb4ce3d425e407eaa.js'></script>

Annotations of the code comments above:

**[A]** This tells webpack to transpile ES6+ features into JS code that’s natively supported in Node.js and (most modern) browsers. Read the [docs](https://babeljs.io/docs/en/babel-preset-env) for more details.

**[B]** This tells webpack to transpile React JSX into JavaScript code. Read the [docs](https://babeljs.io/docs/en/babel-preset-react) for more details.

#### _Client-side webpack config_

Install the relevant dependencies:

```
npm i webpack webpack-cli webpack-merge webpack-dev-server mini-css-extract-plugin css-loader less-loader less
```

<script src='https://gist.github.com/suhanw/98c17ffc82967bc28a84289f9b55d54b.js'></script>

Annotations of the code comments above:

**[A]** This is the entry point for the client-side code, where we render the React app into the DOM.

**[B]** This tells webpack to save the transpiled client-side JS bundle output as `./build/client/scripts/bundle.js`. Not super important for dev mode because we are using webpack-dev-server to transpile the client-side bundle “in memory”. Per the [docs](https://webpack.js.org/guides/development/#using-webpack-dev-server):

> `webpack-dev-server` doesn’t write any output files after compiling. Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server’s root path.

**[C]** The `publicPath` option tells webpack where we will be serving the client-side bundle. Notice that we are using the same `clientPort` for `devServer`, which tells `webpack-dev-server` to serve the client-side bundle from `http://localhost:8080/`. And since the `filename` option tells webpack to nest `bundle.js` in a `scripts` folder, the client-side bundle will be served from `localhost:8080/scripts/bundle.js`.

**[D]** [CSS modules](https://css-tricks.com/css-modules-part-1-need/) and CSS preprocessors (e.g., Less, Sass) deserve an article. But in a nutshell, this piece of config tells webpack to:

- transpile `.less` files into CSS code that the browser understands,
- allow us to `import style from ‘./style.less’` which is scoped **locally** to the component importing it (i.e., we don’t have to worry about CSS class naming collisions or specificity issues as the app grows),
- generate a CSS bundle that’s served separately from the JS bundle. In this instance, the `MiniCssExtractPlugin` tells webpack to serve the CSS bundle from `localhost:8080/styles/bundle.css` in dev mode.

**[E]** Remember `webpack.shared.config.js`? This line merges `webpack.shared.config.js` with `webpack.client.config.js`.

#### _Server-side webpack config_

Hang in there, this is the last webpack config that we’ll cover.

Install the relevant dependencies (and grab a ☕️):

```
npm i webpack webpack-cli webpack-node-externals css-loader
```

<script src='https://gist.github.com/suhanw/93565516165d8225566ee0dcac854e3d.js'></script>

Annotations of the code comments above:

**[A]** The default value is **web**, so we need to explicitly set it to **node** for webpack to work its magic on the server-side code.

**[B]** This is the entry point for the server-side code.

**[C]** This tells webpack to save the transpiled server-side JS bundle output as `./build/server/bundle.js`.

**[D]** This tells webpack not to include the code from `node\_modules` in the server-side bundle.

**[E]** This tells webpack not to do any work over the CSS code on the server-side, but simply to make sure that every HTML element’s `className` matches that in the CSS code being served on the client-side.

**[F]** Remember `webpack.shared.config.js`? This line merges `webpack.shared.config.js` with `webpack.server.config.js`.

***

### React component

Install the relevant dependencies:

```
npm i react
```

Let’s create a simple React component `App`, which renders our favorite greeting with some basic styles, as well as a button that displays an alert dialog when clicked. We will render this component on the server-side and hydrate it on the client-side.

<script src='https://gist.github.com/suhanw/22786482aae23f82852b3fa15faf46e0.js'></script>

<script src='https://gist.github.com/suhanw/ff1f2997761dbec42ae3a80b7c7bdca2.js'></script>

***

### Server-side code

Install the relevant dependencies:

```
npm i express react react-dom
```

Let’s create an Express server and define a route that serves an HTML page when a user visits `http://localhost:3000/`.

<script src='https://gist.github.com/suhanw/23f6122050af076a51199a8d4b165d5b.js'></script>

Annotations of the code comments above:

**[A]** This turns the React component `App` into HTML string, which we then insert in between the `div` with the ID **“ssr-app”.**

**[B]** Remember the `devServer` option in `webpack.client.config.js` to start `webpack-dev-server` in dev mode? These script and link tags tell the browser to fetch the client-side JS and CSS bundles respectively from the webpack-dev-server running on `http://localhost:8080`.

***

### Client-side code

Install the relevant dependencies:

```
npm i react react-dom
```

In the client-side entry point, we will “[hydrate](https://reactjs.org/docs/react-dom.html#hydrate)” the React component that was SSR-ed into the root DOM container with the ID **“ssr-app”**.

<script src='https://gist.github.com/suhanw/be366494b9bf2bdbd2272c732f1bbbe8.js'></script>

Per the [docs](https://reactjs.org/docs/react-dom-server.html#rendertostring):

> If you call [_ReactDOM.hydrate()_](https://reactjs.org/docs/react-dom.html#hydrate) on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.

So in this example, the client-side code simply attaches the button’s click handler without having to re-render any markup in the `App` component.

***

### Putting it all together

Install the relevant dependencies:

```
npm i rimraf webpack webpack-cli webpack-dev-server npm-run-all nodemon
```

This is the `scripts` key in the `package.json` file, where we define several `npm` scripts to build and start the app in dev mode.

<script src='https://gist.github.com/suhanw/5c87c373511b0d2e053ebca5fde8d6aa.js'></script>

Let’s look at each of them:

- `clear` — This uses [rimraf](https://github.com/isaacs/rimraf) to delete the `./build` folder.
- `build:server` — This tells webpack to build the server-side code and save the bundle output to `./build/server/bundle.js` (as per `./webpack.server.config.js`).
- `start:server` — This starts the Express server on `http://localhost:3000`.
- `dev:server` — This uses [nodemon](https://github.com/remy/nodemon) to monitor any file changes in the working directory (minus `./build`), and [npm-run-all](https://dev.to/scottw/npm-run-all-b7e-temp-slug-8424854) to re-run `clear`, `build:server`, and `start:server` whenever there are file changes.
- `dev:client` — This tells webpack to “build” the client-side code, save the bundle output “in memory”, and serve it from `http://localhost:8080` (as per `./webpack.client.config.js`).
- `dev` — This runs all of the above with a single command.

Run `npm run dev` in the terminal to spin up the SSR app. Open up `http://localhost:3000` in your browser. 🎉🥳

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*ht6aRr0glttBE5TlouMJJQ.png'><figcaption>Server-side rendering and client-side hydration</figcaption>
</figure>

And click on the button `Say Hello Back!` 🙌🎊

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*JcnDOG4whmExaBhNoyG8Vg.png'><figcaption>Clicking the button triggers the alert dialog</figcaption>
</figure>

Now, let’s disable client-side JavaScript…

<figure>
	<img src='https://cdn-images-1.medium.com/max/722/1*43qx5zcj8QnwSjXQT-Nhsw.png'><figcaption>Disable client-side JavaScript</figcaption>
</figure>

…and refresh the page. IT’S NOT A BLANK PAGE! 🤯

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*fFgBAnbm-9c3gN6J_yA1eg.png'><figcaption>Server-side rendered page</figcaption>
</figure>

Sidenote: nothing will happen if you click on the button. That’s because the event handlers are attached by the client-side code (aka “hydration”). Recall the [docs](https://reactjs.org/docs/react-dom-server.html#rendertostring):

> If you call [_ReactDOM.hydrate()_](https://reactjs.org/docs/react-dom.html#hydrate) on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.

And since we disabled client-side JavaScript, what you see is just plain HTML.

<figure>
	<img src='https://cdn-images-1.medium.com/max/894/1*xGp1Ds4XtlabyFoGwI2G1A.jpeg'><figcaption>Source: <a href="https://www.thecoderpedia.com/blog/programming-memes/">CoderPedia</a></figcaption>
</figure>

In future(ish 😅🤞🏻) articles, I plan to cover more advanced features like routing, data fetching, caching, code-splitting, lazy-loading, and deploying a production app.

***

### Resources

- [A mostly complete guide to webpack 5](https://www.valentinog.com/blog/webpack/) by [Valentino Gagliardi](https://twitter.com/gagliardi_vale)
- [JavaScript Transpilers: What & Why](https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them#:~:text=Transpilers,%20or%20source-to-,are%20said%20to%20target%20JavaScript.) by [Peleke Sengstacke](https://medium.com/u/1baf735d9bdc)
- [What are CSS Modules and why do we need them?](https://css-tricks.com/css-modules-part-1-need/) by [Robin Rendle](https://medium.com/u/aae529a3f8b0)

***

### Read More

- [Decouple Data from UI with React Hooks](https://dev.to/suhanw/decouple-data-from-ui-with-react-hooks-3amn)
- [Decouple Data from UI in React Part 2: Hooks, Render Props, and HOC patterns](https://dev.to/suhanw/decouple-data-from-ui-in-react-part-2-4amk)
- [Accessible UI: Stop making clickable DIVs](https://dev.to/suhanw/accessible-ui-stop-making-clickable-divs-g8k)

***

📫 _Let’s connect on_ [_LinkedIn_](https://www.linkedin.com/in/suhanwijaya/) _or_ [_Twitter_](https://twitter.com/suhanw)_!_