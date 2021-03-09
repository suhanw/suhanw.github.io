---
title: Traditional versus Arrow functions in JavaScript Classes
date: '2020-11-04'
tags: javascript,coding,webdev,react
canonical_url: https://medium.com/javascript-in-plain-english/traditional-versus-arrow-functions-in-javascript-classes-35f958b1a492
---

![The two states of every programmer](https://miro.medium.com/max/1280/1*-IeFjTYIltNhNfNW4hE5YA.jpeg)
*Source: [Programmer Humor](https://programmerhumour.tumblr.com/image/633387776634732544)*

---
 
This is a spiritual sequel to [this article](https://medium.com/the-innovation/a-method-destructured-from-an-object-loses-its-original-context-21e73cf1451f). 

Create a class with a method using Traditional function like so. Let’s call this **Approach A**.

```javascript
// APPROACH A

class SomeClass {
    constructor() {
        this.someProp = 'someValue';
    }

    someMethod() { // Traditional function
        console.log(this.someProp);
    }
}
```

Create an instance of that class. When invoking the method on the instance, `this` refers to the instance. So far, it’s behaving as expected.

```javascript
let instance = new SomeClass();

instance.someMethod(); // logs 'someValue'
```

But, as soon as we assign the method to a variable and call that function variable, the method loses its context, and you get `Uncaught TypeError: Cannot read property ‘someProp’ of undefined`.

```javascript
let instance = new SomeClass();

let funcVariable = instance.someMethod;
funcVariable(); // logs error
```

OK.

Now, let’s create the class with a method using Arrow function like so. Let’s call this **Approach B**.

```javascript
// APPROACH B

class SomeClass {
    constructor() {
        this.someProp = 'someValue';
    }

    someMethod = () => { // Arrow function
        console.log(this.someProp);
    }
}
```

This now works.

```javascript
let instance = new SomeClass();

let funcVariable = instance.someMethod;
funcVariable(); // logs 'someValue'

const { someMethod } = instance; // destructuring also works!
someMethod(); // logs 'someValue'
```
---
##Why, JavaScript, why?##

As per [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain), “the class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based.” So if we were to write in pre-ES6 syntax, **Approach A** looks like this.

```javascript
// Equivalent to APPROACH A

'use strict';

var SomeClass = function() {
    this.someProp = 'someValue';
}

SomeClass.prototype.someMethod = function() {
    console.log(this.someProp);
}

var instance = new SomeClass();
```

The property `someMethod` is defined on the constructor function’s `prototype`.
![Chrome Dev Console](https://miro.medium.com/max/1036/1*dCPPZGSH9Qf_c7RdTFa2Ag.png)

---

But not on the `instance`.
![Chrome Dev Console](https://miro.medium.com/max/1072/1*I9XIUW-edxdWn_Y8I-8qRQ.png)

---

You can access `instance.someMethod` through [prototypal inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

**But when you assign `instance.someMethod` to another variable, the function variable loses its context.**

Further, since [“code within the `class` body's syntactic boundary is always executed in strict mode”](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Class_body_and_method_definitions), `this` will be undefined instead of defaulting to `window` or `global`.

OK.

Now, **Approach B** looks like this in pre-ES6:

```javascript
// Equivalent to APPROACH B

'use strict';

var SomeClass = function() {
    this.someProp = 'someValue';

    var _that = this;

    this.someMethod = function() {
        console.log(_that.someProp);
    }
}

var instance = new SomeClass();
```

The property `someMethod` is not defined on the constructor function’s `prototype`.
![Chrome Dev Console](https://miro.medium.com/max/648/1*Axs8fo1y575ZiMwsy5P02Q.png)

---

Instead, it is defined on the `instance`.
![Chrome Dev Console](https://miro.medium.com/max/1420/1*yUkx782Yo1M1fBe8np9mDg.png)

---

Further, an Arrow function is [bound to its surrounding lexical context by default](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Description) (where it physically sits in the code), which seems equivalent to a Traditional function having access to an outer function variable that points to `this` (i.e., [closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)).

**Hence, even when you assign `instance.someMethod` to another variable, the function variable remains bound to the instance context.**

Note: I’m not 100% sure about the actual ‘under the hood’ mechanism by which Arrow functions derive `this`, so feel free to comment if you do know.

In any case, I went down this rabbit hole because I’ve been using Arrow functions for writing methods in classical React components, instead of binding Traditional functions (i.e., `this.someMethod.bind(this)`) in the `constructor` or when passing it down as prop.

```javascript
import React from 'react';

class SomeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { /* some state */ };
    }

    someMethod = () => { // Arrow function
        // will have access to `this.state`
    }

    render() {
        // may attach `this.someMethod` as an event handler or 
        // pass it down as a prop to child components
    }
}
```

Not endorsing one approach or the other, just describing the difference. Oh, and guess [which browser](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Browser_compatibility) is completely irrelevant to this whole discussion.

---

📫 *Hit me up on [LinkedIn](https://www.linkedin.com/in/suhanwijaya/) or [Twitter](https://twitter.com/suhanw)!*


