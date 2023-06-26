---
pin_order: 3
title: Decouple Data from UI with React Hooks
description: And how I “program to an interface” with JavaScript functions
image: https://cdn-images-1.medium.com/max/540/1*F1CfUAi51VQA4NJd3Fj_cA.jpeg
tags: softwaredesign,javascript,react,webdev
canonical_url: https://medium.com/javascript-in-plain-english/decouple-data-from-ui-with-react-hooks-6f7fe968c3e3
date: '2020-11-23'
---

<figure>
	<img src='https://cdn-images-1.medium.com/max/1024/1*Ysy1EpS9hF5J3qnkT5TX3A.png'>
	<figcaption>Source: <a href="https://imgur.com/gallery/CgWZFId">Imgur</a></figcaption>
</figure>

***

I‘m certain you have seen (or written) this common React pattern: (a) render a placeholder/ loader/spinner while some data is fetched via AJAX, then (b) re-render the component based on the data received. Let’s write a functional component leveraging the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to accomplish this.

<script src="https://gist.github.com/suhanw/b8aa23f97f06ddc3b068b2c2368e4ca2.js"></script>
***

Let’s say my app grows, and there are X components that use the same data fetching logic because… reasons. To avoid spamming the server with data requests, I decide to use [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to cache the data.

**OK… does that mean I need to update the data logic**  **X times? 😬😱**

Nope, let’s [DRY it up](https://medium.com/better-programming/kiss-dry-and-code-principles-every-developer-should-follow-b77d89f51d74) by writing a custom hook `useSomeData`.

<script src='https://gist.github.com/suhanw/3e948918f96a1b7680bdeb86bbbbdaa2.js'></script>

The components that share this data logic now look concise.

<script src='https://gist.github.com/suhanw/9e23e8b61dfb58db45e280124b22fe55.js'></script>
***

**OK… DRY code is great, but so what?**

Let’s say my app becomes complex, so I decide to use Redux to handle AJAX requests and maintain a global app state. I simply update the implementation of `useSomeData` _without touching the UI components_.

<script src='https://gist.github.com/suhanw/aac361c9ab4856eed2cf5d5531ce655b.js'></script>

Then GraphQL comes along and I jump on the bandwagon. Again, I simply update the implementation of `useSomeData` _without touching the UI components_.

<script src='https://gist.github.com/suhanw/eaeebbf6afd44b7b5509ec74a27656f7.js'></script>
***

**Rinse and repeat whenever I’m compelled to update the data layer with the latest/hottest state management framework or API paradigm.**

To me, this looks a lot like the classic Dependency Inversion Principle, the “D” in SOLID (check out this excellent [explainer](https://medium.com/better-programming/revisiting-solid-927e6a5202d3) by [Matthew Lucas](https://medium.com/u/12cc371abade)). While this is not OOP by any means, where we formally define an abstract `Interface` and create a concrete `Class` that implements that `Interface`, I would argue that there is a de facto “interface” that `useSomeData` provides to the various UI components using it. In this example, the UI doesn’t care how `useSomeData` works, as long as it receives `someData`, `loading`, and `error` from the hook.

**So in theory, this frees the UI from being locked into any particular implementation of the data layer, and enables migrating to new implementations (frameworks/libraries/etc) without having to update the UI code, as long as the “interface” contract is honored.**

Curious to hear your thoughts.

<figure>
	<img src='https://cdn-images-1.medium.com/max/540/1*F1CfUAi51VQA4NJd3Fj_cA.jpeg'>
	<figcaption>Source: <a href="https://www.pinterest.com/pin/333759022356307210/">Pinterest</a></figcaption>
</figure>

***

**P.S.** The [Container pattern](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0), [Render Props](https://reactjs.org/docs/render-props.html), and [HOC](https://reactjs.org/docs/higher-order-components.html) are popular options to decouple the data layer from the UI layer for classical components. This article is not meant to be a debate as to whether Hooks is better or worse. I’m simply sharing how I learned to use Hooks to apply the same separation of concerns.
***

### Read More

- [Decouple Data from UI in React Part 2](https://medium.com/javascript-in-plain-english/how-to-decouple-data-from-ui-in-react-d6b1516f4f0b)
- [Intro to React Server Side Rendering](https://medium.com/javascript-in-plain-english/intro-to-react-server-side-rendering-3c2af3782d08)
