(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/6uY":function(e,t,n){e.exports={layout:"layout_GvkLX",hasTopMenu:"hasTopMenu_1WVP3"}},MVNz:function(e,t,n){e.exports={menu:"menu_2G6rj",showMenu:"showMenu_1uTIy",name:"name_10dbC",menuItems:"menuItems_26ie3",topMenuItems:"topMenuItems_3Vx-y",menuItem:"menuItem_5m-L2",email:"email_3kN3h",social:"social_3_hb2",topMenu:"topMenu_3pGJ_"}},Qi1R:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var r=n("q1tI"),c=function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.showOnPageLoad,n=Object(r.useState)(t),c=n[0],a=n[1];return Object(r.useEffect)((function(){var e=window.scrollY||document.documentElement.scrollTop,t=function(){var t=window.scrollY||document.documentElement.scrollTop,n=t<e,r=Math.abs(t-e);e=t,r>15&&a(n||t<20)};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[]),{showElement:c}}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var o=c.apply(null,r);o&&e.push(o)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r)}()},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var a=c(n("q1tI")),o=n("elyg"),s=n("nOHt"),i=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),c=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,o.resolveHref)(c,e.href,!0),n=r(t,2),a=n[0],s=n[1];return{href:a,as:e.as?(0,o.resolveHref)(c,e.as):s||a}}),[c,e.href,e.as]),h=f.href,d=f.as,m=e.children,b=e.replace,j=e.shallow,p=e.scroll,v=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var O=a.Children.only(m),g=O&&"object"===typeof O&&O.ref,x=(0,i.useIntersection)({rootMargin:"200px"}),w=r(x,2),y=w[0],M=w[1],I=a.default.useCallback((function(e){y(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,y]);(0,a.useEffect)((function(){var e=M&&t&&(0,o.isLocalURL)(h),r="undefined"!==typeof v?v:n&&n.locale,c=u[h+"%"+d+(r?"%"+r:"")];e&&!c&&l(n,h,d,{locale:r})}),[d,h,M,v,t,n]);var _={ref:I,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,a,s,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:a,locale:i,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,n,h,d,b,j,p,v)},onMouseEnter:function(e){(0,o.isLocalURL)(h)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),l(n,h,d,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var N="undefined"!==typeof v?v:n&&n.locale,k=(0,o.getDomainLocale)(d,N,n&&n.locales,n&&n.domainLocales);_.href=k||(0,o.addBasePath)((0,o.addLocale)(d,N,n&&n.defaultLocale))}return a.default.cloneElement(O,_)};t.default=f},okHz:function(e,t,n){"use strict";var r=n("nKUr"),c=n("rePB"),a=n("TSYQ"),o=n.n(a),s=n("q1tI"),i=n("YFqc"),u=n.n(i),l=n("MVNz"),f=n.n(l),h=n("pVwj"),d=n.n(h),m=n("Qi1R");var b=function(e){var t=e.toggleMenu,n=Object(m.b)({showOnPageLoad:!0}).showElement;return Object(r.jsx)("button",{className:o()(d.a.hamburger,Object(c.a)({},d.a.showHamburger,n)),onClick:t,children:Object(r.jsx)("img",{src:"/images/hamburger.png"})})},j=function(e){var t,n=e.topMenu,a=Object(s.useState)(!1),i=a[0],l=a[1],h=Object(s.useRef)();Object(s.useEffect)((function(){var e;"undefined"!==typeof document&&null!==(e=document.body)&&void 0!==e&&e.style&&(document.body.style.overflow=i?"hidden":"")}),[i]),Object(s.useEffect)((function(){var e;null!==(e=h.current)&&void 0!==e&&e.style&&(h.current.style.visibility="visible")}),[]);var d=function(e){return l(!1)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("nav",{ref:h,style:{visibility:"hidden"},className:o()((t={},Object(c.a)(t,f.a.menu,!0),Object(c.a)(t,f.a.showMenu,i),Object(c.a)(t,f.a.topMenu,n),t)),children:[Object(r.jsxs)("h2",{className:f.a.name,children:["suhan ",Object(r.jsx)("br",{}),"wijaya"]}),Object(r.jsxs)("ul",{className:f.a.menuItems,children:[Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(u.a,{href:"/#intro",children:Object(r.jsx)("a",{onClick:d,children:"INTRO"})})}),Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(u.a,{href:"/#about",children:Object(r.jsx)("a",{onClick:d,children:"ABOUT"})})}),Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(u.a,{href:"/#blog",children:Object(r.jsx)("a",{onClick:d,children:"BLOG"})})}),Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(u.a,{href:"/#projects",children:Object(r.jsx)("a",{onClick:d,children:"PROJECTS"})})}),Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(u.a,{href:"/#contact",children:Object(r.jsx)("a",{onClick:d,children:"CONTACT"})})}),Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(u.a,{href:"/#toolbox",children:Object(r.jsx)("a",{onClick:d,children:"TOOLBOX"})})})]}),Object(r.jsx)("a",{href:"mailto:suhanw@gmail.com",target:"_blank",className:f.a.email,children:"suhanw@gmail.com"}),Object(r.jsxs)("div",{className:f.a.social,children:[Object(r.jsx)("a",{href:"https://www.linkedin.com/comm/in/suhanwijaya/",target:"_blank",children:Object(r.jsx)("img",{src:"/images/linked-in.png",alt:"Suhan's LinkedIn profile"})}),Object(r.jsx)("a",{href:"https://x.com/suhanw",target:"_blank",children:Object(r.jsx)("img",{src:"/images/twitter-x.png",alt:"Suhan's Twitter profile"})}),Object(r.jsx)("a",{href:"https://github.com/suhanw",target:"_blank",children:Object(r.jsx)("img",{src:"/images/github.png",alt:"Suhan's GitHub profile"})})]}),Object(r.jsx)("ul",{className:f.a.topMenuItems,children:Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(u.a,{href:"/#blog",children:Object(r.jsx)("a",{children:"BACK TO HOME"})})})})]}),Object(r.jsx)(b,{toggleMenu:function(e){return l((function(e){return!e}))}})]})},p=n("/6uY"),v=n.n(p);t.a=function(e){var t,n=e.children,a=e.topMenu;return Object(r.jsxs)("div",{className:o()((t={},Object(c.a)(t,v.a.layout,!0),Object(c.a)(t,v.a.hasTopMenu,a),t)),children:[Object(r.jsx)(j,{topMenu:a}),n]})}},pVwj:function(e,t,n){e.exports={hamburger:"hamburger_3NkcE",showHamburger:"showHamburger_fsMIb"}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),c=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,c=(0,a.useRef)(),u=(0,a.useState)(!1),l=r(u,2),f=l[0],h=l[1],d=(0,a.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,a=r.observer,o=r.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),i.delete(c))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){s||f||(0,o.default)((function(){return h(!0)}))}),[f]),[d,f]};var a=n("q1tI"),o=c(n("0G5g")),s="undefined"!==typeof IntersectionObserver;var i=new Map}}]);