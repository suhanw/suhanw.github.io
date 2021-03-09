---
title: Decouple SDK Code From Core React Code
description: And reduce the size of your future PRs with the Open/Closed Principle
tags: softwaredesign,react,webdev,javascript
canonical_url: https://medium.com/javascript-in-plain-english/decouple-external-services-from-your-core-ui-code-dd490f91ae49
date: '2020-11-30'
---
#### And reduce the size of your future PRs with the Open/Closed Principle

![](https://cdn-images-1.medium.com/max/1024/1*p37cH3mNXH_Z2wtXprcT2Q.jpeg)<figcaption>KNOW YOUR ENEMY<br /> (image by <a href="https://unsplash.com/photos/CatcixzdUcg">Klara Kulikova</a>, meme from <a href="https://programming-memes.com/spaghetti-code-know-your-enemy/">Programming Memes</a>)</figcaption>
***

Suppose I use an external service provider to process payments for my E-commerce app, and I need to embed some external SDK code to integrate the payment service into my app.

In this oversimplified example, let’s say the payment service is responsible for checking whether a given payment method (e.g, Apple Pay and Google Pay) is available based on the customer’s device, region, etc. While my “core” UI component `PaymentOptions` is responsible for rendering the available payment methods as options. Lastly, I want the flexibility of adding new payment methods in the future (for 📈💰reasons).

I can write it this way.

{% gist https://gist.github.com/suhanw/1cb50a75844ae43cc3ff9b24d8ffefb7 %}

However, the UI code is tightly coupled with the external code from the payment service, i.e., **I have to modify the**  **`PaymentOptions` component in order to add a new payment method or to make SDK updates.**
***

I can perhaps break out the SDK code into a separate hook.

{% gist https://gist.github.com/suhanw/05b0dabbd467a37ec410c8efc6b6f94f %}

**However, I _still_ have to modify**  **`PaymentOptions`**  **and any other components that share the**  **`usePaymentMethods` hook if I wanted to add, for example,**  **`isPaypalAvailable`.**
***

To minimize the size of future PRs, I’ve been thinking about the Open/Closed Principle, the “O” in SOLID (check out this excellent [explainer](https://medium.com/better-programming/revisiting-solid-927e6a5202d3)): “_A software artifact should be open for extension but closed for modification.”_

In my own words: _I should design this feature in such a way that I don’t have to touch any of the original code I wrote (closed for modification) if I were to add new payment methods in the future (open for extension)._

Here’s my take on this principle. Let’s separate the payment service into its own module: a simple object where each key represents a payment method. Every payment method key points to an object with an `isAvailable` property (a function that uses the SDK code) and a `component` property (the UI component for the payment option).

{% gist https://gist.github.com/suhanw/7a3365d6e85f1d236fca12fcc4bba348 %}

Import `paymentServiceModule` into the `PaymentOptions` component.

{% gist https://gist.github.com/suhanw/b24d91ae215e6b4ba839a0f9bf9ba462 %}

`PaymentOptions` is now decoupled from the SDK implementation details, and is ignorant of the particular payment methods.

When I want to extend this feature with a new payment method (i.e., PayPal), **I simply slot in a new key/value pair to `paymentServiceModule` without having to modify either the `PaymentOptions` component or the original payment methods**.

{% gist https://gist.github.com/suhanw/1b7d7ac0a6faf4838a169be094cba14a %}

The UI code should in theory also be protected against modification if I were to change payment service providers (for 💸 reasons) as long as the payment method’s duck typing remains unchanged.

Am I applying the Open/Closed Principle correctly? Curious to learn other React or JavaScript patterns in the wild that follow this principle.

***
### Bonus
In `paymentServiceModule`, lazy load each payment option using the [`React.lazy`](https://reactjs.org/docs/code-splitting.html#reactlazy) API.

{% gist https://gist.github.com/suhanw/3b3055a9ad84e5bc1b12d423fc2bad6b %} 

In `PaymentOptions`, wrap each payment option in `Suspense`, to lazy load the component based on availability.
{% gist https://gist.github.com/suhanw/3f68acc8c449c430a83109ede199a44f %}

***
### Resources

- [A First Step to Improve Your Code Before Diving into Domain Driven Design or the Clean Architecture](https://medium.com/javascript-in-plain-english/a-first-step-to-improve-your-code-before-diving-into-domain-driven-design-or-the-clean-architecture-90da4a80d863) by [Andréas Hanss](https://medium.com/u/57de27e2974f)
- [Revisiting SOLID](https://medium.com/better-programming/revisiting-solid-927e6a5202d3) by [Matthew Lucas](https://medium.com/u/12cc371abade)

***
### Read More

- [Intro to React Server Side Rendering](https://medium.com/javascript-in-plain-english/intro-to-react-server-side-rendering-3c2af3782d08)
- [Decouple Data from UI with React Hooks](https://dev.to/suhanw/decouple-data-from-ui-with-react-hooks-3amn)
- [Decouple Data from UI in React Part 2: A further exploration of the Hooks, Render Props, and HOC patterns](https://medium.com/javascript-in-plain-english/how-to-decouple-data-from-ui-in-react-d6b1516f4f0b)

***
📫 _Let’s connect on_ [_LinkedIn_](https://www.linkedin.com/in/suhanwijaya/) _or_ [_Twitter_](https://twitter.com/suhanw)_!_