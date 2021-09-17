---
pin_order: 6
title: Decouple Third Party Code From Core React Code
description: And reduce the size of your future PRs with the Open/Closed Principle
image: https://www.suhanwijaya.com/images/decouple-third-party-from-react-cover.JPG
tags: softwaredesign,react,webdev,javascript
canonical_url: https://medium.com/javascript-in-plain-english/decouple-external-services-from-your-core-ui-code-dd490f91ae49
author: Suhan Wijaya
date: '2020-11-30'
---

<figure>
	<img src="https://www.suhanwijaya.com/images/decouple-third-party-from-react-cover.JPG">
	<figcaption>KNOW YOUR ENEMY<br /> (image by <a href="https://unsplash.com/photos/CatcixzdUcg">Klara Kulikova</a>, meme from <a href="https://programming-memes.com/spaghetti-code-know-your-enemy/">Programming Memes</a>)</figcaption>
</figure>

***

Suppose I use a third party service provider to process payments for my E-commerce app, and I need to embed some third party code to integrate the payment service into my app.

In this oversimplified example, let’s say the payment service is responsible for checking whether a given payment method (e.g, Apple Pay and Google Pay) is available based on the customer’s device, region, etc. While my “core” UI component `PaymentOptions` is responsible for rendering the available payment methods as options. Lastly, I want the flexibility of adding new payment methods in the future (for 📈💰reasons).

I can write it this way.

<script src="https://gist.github.com/suhanw/1cb50a75844ae43cc3ff9b24d8ffefb7.js"></script>

However, the UI code is tightly coupled with the third party code from the payment service, i.e., **I have to modify the**  **`PaymentOptions` component in order to add a new payment method or to make third party code updates.**
***

I can perhaps break out the third party code into a separate hook.

<script src="https://gist.github.com/suhanw/05b0dabbd467a37ec410c8efc6b6f94f.js"></script>

**However, I _still_ have to modify**  **`PaymentOptions`**  **and any other components that share the**  **`usePaymentMethods` hook if I wanted to add, for example,**  **`isPaypalAvailable`.**
***

To minimize the size of future PRs, I’ve been thinking about the Open/Closed Principle, the “O” in SOLID (check out this excellent [explainer](https://medium.com/better-programming/revisiting-solid-927e6a5202d3)): “_A software artifact should be open for extension but closed for modification.”_

In my own words: _I should design this feature in such a way that I don’t have to touch any of the original code I wrote (closed for modification) if I were to add new payment methods in the future (open for extension)._

Here’s my take on this principle. Let’s separate the payment service into its own module: a simple object where each key represents a payment method. Every payment method key points to an object with an `isAvailable` property (a function that uses the third party code) and a `component` property (the UI component for the payment option).

<script src="https://gist.github.com/suhanw/7a3365d6e85f1d236fca12fcc4bba348.js"></script>

Import `paymentServiceModule` into the `PaymentOptions` component.

<script src="https://gist.github.com/suhanw/b24d91ae215e6b4ba839a0f9bf9ba462.js"></script>

`PaymentOptions` is now decoupled from the third party implementation details, and is ignorant of the particular payment methods.

When I want to extend this feature with a new payment method (i.e., PayPal), **I simply slot in a new key/value pair to `paymentServiceModule` without having to modify either the `PaymentOptions` component or the original payment methods**.

<script src="https://gist.github.com/suhanw/1b7d7ac0a6faf4838a169be094cba14a.js"></script>

The UI code should in theory also be protected against modification if I were to change payment service providers (for 💸 reasons) as long as the payment method’s duck typing remains unchanged.

Am I applying the Open/Closed Principle correctly? Curious to learn other React or JavaScript patterns in the wild that follow this principle.

***
### Bonus
In `paymentServiceModule`, lazy load each payment option using the [`React.lazy`](https://reactjs.org/docs/code-splitting.html#reactlazy) API.

<script src="https://gist.github.com/suhanw/3b3055a9ad84e5bc1b12d423fc2bad6b.js"></script> 

In `PaymentOptions`, wrap each payment option in `Suspense`, to lazy load the component based on availability.
<script src="https://gist.github.com/suhanw/3f68acc8c449c430a83109ede199a44f.js"></script>

***

### Resources

- [A First Step to Improve Your Code Before Diving into Domain Driven Design or the Clean Architecture](https://medium.com/javascript-in-plain-english/a-first-step-to-improve-your-code-before-diving-into-domain-driven-design-or-the-clean-architecture-90da4a80d863) by [Andréas Hanss](https://medium.com/u/57de27e2974f)
- [Revisiting SOLID](https://medium.com/better-programming/revisiting-solid-927e6a5202d3) by [Matthew Lucas](https://medium.com/u/12cc371abade)

***

### Read More

- [Intro to React Server Side Rendering](https://www.suhanwijaya.com/posts/intro-to-react-server-side-rendering)
- [Decouple Data from UI with React Hooks](https://www.suhanwijaya.com/posts/decouple-data-from-ui-with-react-hooks)
- [Decouple Data from UI in React Part 2: Hooks, Render Props, and HOC patterns](https://www.suhanwijaya.com/posts/decouple-data-from-ui-in-react)

***
📫 _Let’s connect on_ [_LinkedIn_](https://www.linkedin.com/in/suhanwijaya/) _or _[_Twitter_](https://twitter.com/suhanw)_!_