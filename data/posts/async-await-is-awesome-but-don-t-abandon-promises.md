---
pin_order: 4
title: Async/await is awesome, but don’t abandon Promises
description: Async/await is awesome, but don’t abandon Promises
image: https://miro.medium.com/max/2746/1*vjATL-EAN7xvJf0kjMUh5Q.png
tags: ui,javascript,webdev,promises
canonical_url: https://medium.com/javascript-in-plain-english/async-await-is-awesome-but-dont-abandon-promises-f815b3df51dc
date: '2020-11-15'
---

<figure>
	<img src='https://miro.medium.com/max/2746/1*vjATL-EAN7xvJf0kjMUh5Q.png'>
	<figcaption>Shoutout to <a href="https://medium.com/u/4c5633187eea">Cassidy Williams</a> 😀</figcaption>
</figure>

***

Let’s create a button that will:

- perform an expensive synchronous operation,
- fire 2 AJAX requests, and
- update the DOM based on the AJAX responses.

Here is the markup.

<script src='https://gist.github.com/suhanw/b7d915ac044a8934d720629f4466c25e.js'></script>

Here are the functions. Let’s also measure the duration of each operation with the [Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance/measure), which visualizes when and how long each function executes on the Chrome DevTools Performance Timeline. (Thanks to [JSONPlaceholder](https://jsonplaceholder.typicode.com) for the dummy endpoints.)


<script src='https://gist.github.com/suhanw/8e984392ffc4974e3654dda7082c6aff.js'></script>
***

You’re still here? Good, here comes the interesting part: writing the `onclick` handler for the button. Since all the cool kids are doing it, let’s use `async / await`.

```javascript
async function handleClick() {
   someSyncOperation(); // Expensive sync operation 

   const postJson = await fetchPost(); // AJAX request #1

   const commentsJson = await fetchComments(); // AJAX request #2

   appendPostDOM(postJson);
   appendCommentsDOM(commentsJson);
}
```

Here is the Performance Timeline after clicking the button.

![](https://cdn-images-1.medium.com/max/1024/1*IPbydXJik0QO9KfFCcx97g.png)

Let’s take a closer look.

![](https://cdn-images-1.medium.com/max/1024/1*Afxib_uy8WZ53t31PLEX1w.png)

Makes sense, plenty of articles out there about how `async / await` turns asynchronous code into blocking code. FYI, each bar is about 2 seconds when throttling the network to “Slow 3G”.

**So a total execution time of 6 seconds.**
***

OK. The `fetchPost` and `fetchComments` can be executed in parallel, so let’s use the `await Promise.all` combo.

```javascript
async function handleClick() {
  someSyncOperation();

  const [postJson, commentsJson] = await Promise.all([
    fetchPost(), 
    fetchComments()
  ]);

  appendPostDOM(postJson);
  appendCommentsDOM(commentsJson);
}
```

![](https://cdn-images-1.medium.com/max/1010/1*37EwgrRI3pE2GHO9axxQpA.png)

**The total execution time is now 4 seconds since `fetchPost` and `fetchComments` execute in parallel.**
***

OK. Since `someSyncOperation` is not dependent on the AJAX requests, let’s see if moving it to the last line in the function speeds things up.

```javascript
async function handleClick() {
  const [postJson, commentsJson] = await Promise.all([
    fetchPost(), 
    fetchComments()
  ]);

  appendPostDOM(postJson);
  appendCommentsDOM(commentsJson);

  someSyncOperation();
}
```

![](https://cdn-images-1.medium.com/max/1024/1*LIFtuI-vycSo2BLz15jZVg.png)

**Nope, the total execution time is still 4 seconds.**
***

OK. It’s time to go “full `Promise`”.

```javascript
function handleClick() {
  Promise.all([
    fetchPost(),
    fetchComments()
  ]).then(([postJson, commentsJson]) => {
    appendPostDOM(postJson);
    appendCommentsDOM(commentsJson)
  });

  someSyncOperation();
}
```

![](https://cdn-images-1.medium.com/max/1000/1*sBJ0Vh_BHYVCzm4BF0dQoQ.png)

**Going “full `Promise`” cuts total execution time to 2 seconds.**

The reason why this works deserves its own article, but [here is an awesome explainer](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D).

Today I learned.

***

<figure>
	<img src='https://cdn-images-1.medium.com/max/720/1*-WWI7e_QvvXBYp7BPzw0PA.jpeg'>
	<figcaption>Source: <a href="https://programmerhumour.tumblr.com/post/633961754778533888/google-my-saviour">Programmer Humor</a></figcaption>
</figure>

***

### Bonus

For the die-hard `async / await` fans out there, I learned (literally on the day of writing this story) that the following snippet actually does the same thing. Credit to [this article](https://medium.com/better-programming/an-extremely-easy-tip-to-improve-web-performance-with-async-await-b609e7e65744) by [Moon](https://medium.com/u/994dcd5bc2e8).

```javascript
async function handleClick() {
  const postPromise = fetchPost();
  const commentsPromise = fetchComments();
  
  someSyncOperation();
  const postJson = await postPromise;
  const commentsJson = await commentsPromise;

  appendPostDOM(postJson);
  appendCommentsDOM(commentsJson);
}
```
***

📫 _Hit me up on_ [_LinkedIn_](https://www.linkedin.com/in/suhanwijaya/) _or_ [_Twitter_](https://twitter.com/suhanw)_!_