---
pin_order: 5
title: Decouple Data from UI in React Part 2
description: A further exploration of the Hooks, Render Props, and HOC patterns
image: https://cdn-images-1.medium.com/max/556/1*goD09hSrSRRjYBjiCrimJQ.jpeg
tags: react,javascript,webdev,softwaredesign
canonical_url: https://medium.com/javascript-in-plain-english/how-to-decouple-data-from-ui-in-react-d6b1516f4f0b
author: Suhan Wijaya
date: '2020-12-15'
---

<figure>
	<img src='https://cdn-images-1.medium.com/max/556/1*goD09hSrSRRjYBjiCrimJQ.jpeg'>
	<figcaption>c. 1512, Oil on canvas, Source: <a href="https://programming-memes.com/do-you-like-spaghetti/">programming-memes.com</a></figcaption>
</figure>

***

In [Part 1](/posts/decouple-data-from-ui-with-react-hooks), I presented an approach to decouple the data fetching/management layer from the UI, which would free us from being locked into any particular data library or framework. Let’s call this **Approach A**.

### Approach A. Custom Hook

Let’s create a custom hook — `useSomeData` — that returns the properties `someData`, `loading`, and `error` regardless of the data fetching/management logic. The following are 3 different implementations of `useSomeData`.

_With Fetch API and component state:_

<script src="https://gist.github.com/suhanw/8d1b24a42dea617288e28d767996e7cc.js"></script>

_With Redux:_

<script src="https://gist.github.com/suhanw/aac361c9ab4856eed2cf5d5531ce655b.js"></script>

_With Apollo GraphQL:_

<script src="https://gist.github.com/suhanw/eaeebbf6afd44b7b5509ec74a27656f7.js"></script>

The 3 implementations above are **interchangeable** without having to modify this UI component:

<script src="https://gist.github.com/suhanw/a08783eb6302899bb91a88572a2ac86c.js"></script>

But, as [Julius Koronci](https://medium.com/u/3efad7746b00) correctly pointed out, while the data fetching/management logic is decoupled, the `SomeComponent` UI is still coupled to the `useSomeData` hook.

In other words, even though we can reuse `useSomeData` without `SomeComponent`, **we cannot reuse**  **`SomeComponent` without**  **`useSomeData`.**

Perhaps this is where Render Props and Higher Order Components do a better job at enforcing the separation of concerns (thanks again to Julius for highlighting this).

***

### Approach B. Render Props

Instead of a custom hook that returns `someData`, `loading`, and `error`, let’s create a Render Props component — `SomeData` — that wraps around a function (i.e., children needs to be a function), implements the data logic, and passes in `someData`, `loading`, and `error` into the function.

<script src="https://gist.github.com/suhanw/263c954810fc5ab69292ed256e1494aa.js"></script>

You can replace line 4 in the snippet above with Redux, Apollo GraphQL, or any data fetching/management layer of your choice.

**We can now reuse** **`SomeComponent` (UI component) without** **`SomeData` (Render Props component). We can also reuse**  **`SomeData` without**  **`SomeComponent`.**

***

### Approach C. Higher Order Components (HOC)

Let’s create a HOC — `withSomeData` — that accepts a React component as an argument, implements the data logic, and passes `someData`, `loading`, and `error` as props into the wrapped React component.

<script src="https://gist.github.com/suhanw/106e18601dff30a7d3f73a77ab2f861c.js"></script>

You can replace line 5 in the snippet above with Redux, Apollo GraphQL, or any data fetching/management layer of your choice.

**We can now reuse** **`SomeComponent` (UI component) without** **`withSomeData` (HOC). We can also reuse**  **`withSomeData` without**  **`SomeComponent`.**

Today I learned.

Which approach do you prefer and why?

***

### Resources

- [Understanding React Render Props and HOC](https://blog.bitsrc.io/understanding-react-render-props-and-hoc-b37a9576e196) by [Aditya Agarwal](https://medium.com/u/9c555799c00e)
- [React Hooks: What’s going to happen to render props?](https://kentcdodds.com/blog/react-hooks-whats-going-to-happen-to-render-props) by [Kent C. Dodds](https://medium.com/u/db72389e89d8)
- [Higher-order components vs Render Props](https://www.richardkotze.com/coding/hoc-vs-render-props-react) by [Richard Kotze](https://medium.com/u/e503a3e5ff3e)

***

### Read More

- [Intro to React Server Side Rendering](https://medium.com/javascript-in-plain-english/intro-to-react-server-side-rendering-3c2af3782d08)
- [Decouple Data from UI with React Hooks](https://dev.to/suhanw/decouple-data-from-ui-with-react-hooks-3amn)