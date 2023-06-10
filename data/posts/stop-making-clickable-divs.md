---
pin_order: 8
title: Stop making clickable DIVs
description: Making the web accessible one (less) DIV at a time.
image: https://www.suhanwijaya.com/images/stop-making-clickable-divs.jpeg
tags: webdev,a11y,javascript,html
date: '2020-11-09'
---

<figure>
	<img src='/images/stop-making-clickable-divs.jpeg'>
</figure>

Accessibility is a broad topic, and a subset of loftier [inclusive design](https://www.microsoft.com/design/inclusive/) principles that I won’t pretend to be an expert on. I’m just sharing one of the many a11y lessons I learned as a developer.

So let’s move on to the main topic.

We love our `div` tags. But, simply from a developer experience standpoint without even discussing the merits of [semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML) (which deserves its own article), a  `button` is _more accessible with less code_ compared to a clickable `div`. To illustrate, let’s go ahead and create a clickable div.

```html
<div>Click me</div>

<script>
  function doSomething() {
    console.log('do something'); 
  }

  document.querySelector('div').onclick = doSomething;
</script>
```

Not good enough, we need to visually indicate through the cursor type that the div is clickable (which apparently is also [debatable](https://medium.com/simple-human/buttons-shouldnt-have-a-hand-cursor-b11e99ca374b)). Let’s add some CSS.

```html
<style>
  .someDiv {
    cursor: pointer;
  }
</style>

<div class='someDiv'>Click me</div>
```

Not good enough, we need to verbally indicate through screen readers that the `div` is a clickable button, and it needs to be keyboard accessible via Tabbing navigation. Let’s add [role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role) and [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) attributes.

```html
<div class='someDiv' tabindex='0' role='button'>Click me</div>
```

Not good enough, the `div` also needs to be keyboard accessible via Enter and Space Bar keys. Let’s add more JavaScript (which may not even be 100% [cross-browser compatible](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#Whitespace_keys)).

```html
<script>
  function doSomething() {
    console.log('do something'); 
  }

  function handleKeydown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      doSomething();
    }
  }

  document.querySelector('div').onclick = doSomething;
  document.querySelector('div').onkeydown = handleKeydown;
</script>
```

So finally, we end up with this.

```html
<style>
  .someDiv {
    cursor: pointer;
  }
</style>

<div class='someDiv' tabindex='0' role='button'>Click me</div>

<script>
  function doSomething() {
    console.log('do something'); 
  }

  handleKeydown(e) {
    if (e.key === 'Enter' || e.key === 'Space Bar') {
      doSomething();
    }
  }

  document.querySelector('div').onclick = doSomething;
  document.querySelector('div').onkeydown = handleKeydown;
</script>
```

<figure>
	<img src='https://cdn-images-1.medium.com/max/894/1*mQeROU_hw38oCDgFGZnzLw.jpeg'>
	<figcaption>Source: <a href="https://www.thecoderpedia.com/blog/programming-memes/">CoderPedia</a></figcaption>
</figure>

Whereas, the `button` version that’s _equally accessible_ looks like this.

```html
<button>Click here</button>

<script>
  function doSomething() {
    console.log('do something'); 
  }

  document.querySelector('button').onclick = doSomething;
</script>
```

What’s your approach to creating clickable UI components? 

Note: I decided not to discuss aria attributes because I think they deserve their own article.

