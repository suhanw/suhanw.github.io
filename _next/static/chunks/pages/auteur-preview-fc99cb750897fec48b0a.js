_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=d.length;s<u;s++){var f=d[s];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=o.props[f],p=r[f]||new Set;"name"===f&&i||!p.has(l)?(p.add(l),r[f]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},DH9S:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auteur-preview",function(){return n("QRKp")}])},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},QRKp:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("g4pe"),a=n.n(o),i=n("bjMT"),c=n.n(i);t.default=function(){var e=Object(r.jsx)("script",{dangerouslySetInnerHTML:{__html:'\n\t\t\t\tif (typeof fetch !== "undefined") {\n\t\t\t\t\tfetch("https://auteur-app.onrender.com/scripts/bundle.js")\n\t\t\t\t\t\t.catch(err => console.error(err));\n\t\t\t\t}\n\t\t\t'}});return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:"Auteur Preview"}),e]}),Object(r.jsxs)("article",{className:c.a.contentWrapper,children:[Object(r.jsx)("h1",{children:"Auteur"}),Object(r.jsx)("a",{className:c.a.cta,href:"/auteur",children:"www.suhanwijaya.com/auteur"}),Object(r.jsx)("p",{children:"Auteur is a full-stack web application inspired by Tumblr. It utilizes Node.js on the backend, a MongoDB database, and React.js with a Redux architectural framework on the frontend."}),Object(r.jsx)("h2",{children:"Features"}),Object(r.jsx)("h3",{children:"Single Page"}),Object(r.jsx)("p",{children:"Auteur is a single page app that allows for quick navigation between its various components. As data is fetched from NodeJS, components are only updated when necessary."}),Object(r.jsx)("h3",{children:"Carousel"}),Object(r.jsx)("p",{children:"Integrated React stateful components, CSS keyframe animations, and DOM events to create a carousel that responds to arrow keys, strokes on the touchpad, and mouse clicks."}),Object(r.jsx)("figure",{children:Object(r.jsx)("img",{src:"/images/auteur-carousel.gif"})}),Object(r.jsx)("h3",{children:"Posts"}),Object(r.jsx)("p",{children:"To keep code DRY, leveraged Higher Order Components and component composition to render different types of posts and new/edit forms."}),Object(r.jsx)("figure",{children:Object(r.jsx)("img",{src:"/images/auteur-post_types.gif"})}),Object(r.jsx)("p",{children:"Incorporated AWS SDK to upload images to AWS S3 and persist image data to MongoDB"}),Object(r.jsx)("figure",{children:Object(r.jsx)("img",{src:"/images/auteur-posts.gif"})}),Object(r.jsx)("h3",{children:"Notes (Likes and Comments)"}),Object(r.jsx)("p",{children:"On the backend, designed a polymorphic and extensible MongoDB schema for different note types such as likes and comments."}),Object(r.jsx)("figure",{children:Object(r.jsx)("img",{src:"/images/auteur-notes.gif"})}),Object(r.jsx)("h3",{children:"Following Blogs"}),Object(r.jsx)("p",{children:"Integrated React and CSS3 keyframes to animate page elements and improve user experience."}),Object(r.jsx)("figure",{children:Object(r.jsx)("img",{src:"/images/auteur-following-blogs.gif"})}),Object(r.jsx)("h3",{children:"Tags and Search"}),Object(r.jsx)("p",{children:"Built a search feature with autocomplete that suggests hashtags ranked by popularity. Integrated React and CSS3 Flexbox to accomplish a \u2018masonry\u2019 layout for search results."}),Object(r.jsx)("figure",{children:Object(r.jsx)("img",{src:"/images/auteur-search.gif"})}),Object(r.jsx)("h3",{children:"Notifications"}),Object(r.jsx)("p",{children:"Leveraged WebSockets to implement the notifications feature. Likes and comments will create real-time in-app notifications for the relevant user."}),Object(r.jsx)("figure",{children:Object(r.jsx)("img",{src:"/images/auteur-notifications.gif"})}),Object(r.jsx)("h3",{children:"Chat"}),Object(r.jsx)("p",{children:"Leveraged WebSockets to implement the chat feature with an online indicator."}),Object(r.jsxs)("figure",{className:c.a.figureFlex,children:[Object(r.jsx)("img",{src:"/images/auteur-chat.gif"}),Object(r.jsx)("img",{src:"/images/auteur-online_indicator.gif"})]}),Object(r.jsx)("h3",{children:"Responsive Layout"}),Object(r.jsx)("p",{children:"Enabled selective rendering and responsive layout for mobile devices via CSS media query."}),Object(r.jsx)("figure",{children:Object(r.jsx)("img",{src:"/images/auteur-responsive.gif"})})]})]})}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}},[["DH9S",0,1,2]]]);