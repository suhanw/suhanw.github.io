---
title: Missing cookie in HTTP request when using Fetch API
date: 2020-11-02 13:02:48 UTC
tags: coding,webdev,internet,browsers
canonical_url: https://medium.com/@suhanwijaya/missing-cookie-in-http-request-when-using-fetch-api-fc0199c3dc3c
---

![](https://cdn-images-1.medium.com/max/1024/1*LNmccGUYREE_8COw-QeQqQ.jpeg)<figcaption>Image source: <a href="https://programmerhumour.tumblr.com/image/630496229395218432">Programmer Humor</a></figcaption>

Here is an [explainer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) of how cookies work. TLDR:

- Browser sends HTTP request to server.
- Server sends HTTP response with `Set-Cookie: cookie=monster` header, which sets the cookie in the browser.
- Every subsequent request the browser sends to the server will have the `Cookie: cookie=monster` header.

I store a CSRF token in a cookie, which is used by the server to validate client-side HTTP `POST` requests. The server responds with a 403 if the cookie is missing in the HTTP request.

On the client-side, I have been using the [cross-fetch](https://github.com/lquixada/cross-fetch) package via the **ponyfill** approach.

```javascript
import fetch from 'cross-fetch';

fetch('/some-route', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: { /* some payload */ }
});
```

One day, I decided to switch to the **polyfill** approach in order to use the native `window.fetch`.

```javascript
import 'cross-fetch';

fetch('/some-route', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: { /* some payload */ }
});
```

### A bunch of users started getting 403s.

![](https://cdn-images-1.medium.com/max/300/1*DNVHxZtaNDbGgbIKqEtUMQ.gif)<figcaption>Image source: <a href="https://knowyourmeme.com/photos/716245-selena-gomez-crying">Know Your Meme</a></figcaption>

After scouring Stack Overflow and the interwebs (and many tears later), the answer was in the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) all along:

![](https://cdn-images-1.medium.com/max/1024/1*bSFo0kfUKd7G4Skl96dQ-w.png)

The users getting 403s were using browsers older than the versions listed above. So this was the fix:

```javascript
import 'cross-fetch';

fetch('/some-route', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: { /* some payload */ },
    credentials: 'same-origin' // the fix
});
```

You might ask: what about Internet Explorer, your favorite problem child? Well, since [it supports nothing](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#Browser_compatibility), the polyfill kicks in with a version of fetch that sets same-origin as the default credentials policy, so no 403s.

Today I learned.

📫 _Hit me up on_ [_LinkedIn_](https://www.linkedin.com/in/suhanwijaya/) _or_ [_Twitter_](https://twitter.com/suhanw)_!_