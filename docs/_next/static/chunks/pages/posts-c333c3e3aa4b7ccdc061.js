_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/6uY":function(e,n,t){e.exports={layout:"layout_GvkLX",hasTopMenu:"hasTopMenu_1WVP3"}},"52dC":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return t("gnXo")}])},MVNz:function(e,n,t){e.exports={hamburger:"hamburger_1KX_H",menu:"menu_2G6rj",showMenu:"showMenu_1uTIy",name:"name_10dbC",menuItems:"menuItems_26ie3",topMenuItems:"topMenuItems_3Vx-y",menuItem:"menuItem_5m-L2",email:"email_3kN3h",social:"social_3_hb2",topMenu:"topMenu_3pGJ_"}},TSYQ:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function c(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var s=c.apply(null,r);s&&e.push(s)}else if("object"===a)for(var o in r)t.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(n,[]))||(e.exports=r)}()},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),c=t("284h");n.__esModule=!0,n.default=void 0;var a=c(t("q1tI")),s=t("elyg"),o=t("nOHt"),i=t("vNVm"),l={};function u(e,n,t,r){if(e&&(0,s.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(c?"%"+c:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,o.useRouter)(),c=t&&t.pathname||"/",f=a.default.useMemo((function(){var n=(0,s.resolveHref)(c,e.href,!0),t=r(n,2),a=t[0],o=t[1];return{href:a,as:e.as?(0,s.resolveHref)(c,e.as):o||a}}),[c,e.href,e.as]),d=f.href,h=f.as,j=e.children,m=e.replace,b=e.shallow,p=e.scroll,O=e.locale;"string"===typeof j&&(j=a.default.createElement("a",null,j));var v=a.Children.only(j),g=v&&"object"===typeof v&&v.ref,x=(0,i.useIntersection)({rootMargin:"200px"}),y=r(x,2),_=y[0],w=y[1],M=a.default.useCallback((function(e){_(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,_]);(0,a.useEffect)((function(){var e=w&&n&&(0,s.isLocalURL)(d),r="undefined"!==typeof O?O:t&&t.locale,c=l[d+"%"+h+(r?"%"+r:"")];e&&!c&&u(t,d,h,{locale:r})}),[h,d,w,O,n,t]);var N={ref:M,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,n,t,r,c,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(t))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),n[c?"replace":"push"](t,r,{shallow:a,locale:i,scroll:o}).then((function(e){e&&o&&document.body.focus()})))}(e,t,d,h,m,b,p,O)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),u(t,d,h,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var I="undefined"!==typeof O?O:t&&t.locale,k=(0,s.getDomainLocale)(h,I,t&&t.locales,t&&t.domainLocales);N.href=k||(0,s.addBasePath)((0,s.addLocale)(h,I,t&&t.defaultLocale))}return a.default.cloneElement(v,N)};n.default=f},gnXo:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),c=t("okHz");n.default=function(e){return Object(r.jsx)(c.a,{children:Object(r.jsx)("div",{children:"hello world"})})}},okHz:function(e,n,t){"use strict";var r=t("nKUr"),c=t("rePB"),a=t("TSYQ"),s=t.n(a),o=t("q1tI"),i=t("YFqc"),l=t.n(i),u=t("MVNz"),f=t.n(u),d=function(e){var n,t=e.topMenu,a=Object(o.useState)(!1),i=a[0],u=a[1];Object(o.useEffect)((function(){var e;"undefined"!==typeof document&&null!==(e=document.body)&&void 0!==e&&e.style&&(document.body.style.overflow=i?"hidden":"")}),[i]);var d=function(e){return u(!1)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("nav",{className:s()((n={},Object(c.a)(n,f.a.menu,!0),Object(c.a)(n,f.a.showMenu,i),Object(c.a)(n,f.a.topMenu,t),n)),children:[Object(r.jsxs)("h2",{className:f.a.name,children:["suhan ",Object(r.jsx)("br",{}),"wijaya"]}),Object(r.jsxs)("ul",{className:f.a.menuItems,children:[Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(l.a,{href:"/#intro",children:Object(r.jsx)("a",{onClick:d,children:"INTRO"})})}),Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(l.a,{href:"/#about",children:Object(r.jsx)("a",{onClick:d,children:"ABOUT"})})}),Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(l.a,{href:"/#blog",children:Object(r.jsx)("a",{onClick:d,children:"BLOG"})})}),Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(l.a,{href:"/#projects",children:Object(r.jsx)("a",{onClick:d,children:"PROJECTS"})})}),Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(l.a,{href:"/#contact",children:Object(r.jsx)("a",{onClick:d,children:"CONTACT"})})}),Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(l.a,{href:"/#technologies",children:Object(r.jsx)("a",{onClick:d,children:"TECHNOLOGIES"})})})]}),Object(r.jsx)("a",{href:"mailto:suhanw@gmail.com",target:"_blank",className:f.a.email,children:"suhanw@gmail.com"}),Object(r.jsxs)("div",{className:f.a.social,children:[Object(r.jsx)("a",{href:"https://www.linkedin.com/in/suhanwijaya/",target:"_blank",children:Object(r.jsx)("img",{src:"/images/linked-in.png"})}),Object(r.jsx)("a",{href:"https://twitter.com/suhanw",target:"_blank",children:Object(r.jsx)("img",{src:"/images/twitter.png"})}),Object(r.jsx)("a",{href:"https://github.com/suhanw",target:"_blank",children:Object(r.jsx)("img",{src:"/images/github.png"})})]}),Object(r.jsx)("ul",{className:f.a.topMenuItems,children:Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(l.a,{href:"/#blog",children:Object(r.jsx)("a",{children:"BACK TO HOME"})})})})]}),Object(r.jsx)("button",{className:f.a.hamburger,onClick:function(e){return u((function(e){return!e}))},children:Object(r.jsx)("img",{src:"/images/hamburger.png"})})]})},h=t("/6uY"),j=t.n(h);n.a=function(e){var n,t=e.children,a=e.topMenu;return Object(r.jsxs)("div",{className:s()((n={},Object(c.a)(n,j.a.layout,!0),Object(c.a)(n,j.a.hasTopMenu,a),n)),children:[Object(r.jsx)(d,{topMenu:a}),t]})}},rePB:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return r}))},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),c=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,c=(0,a.useRef)(),l=(0,a.useState)(!1),u=r(l,2),f=u[0],d=u[1],h=(0,a.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),t||f||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:c,elements:r}),t}(t),c=r.id,a=r.observer,s=r.elements;return s.set(e,n),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),i.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,a.useEffect)((function(){o||f||(0,s.default)((function(){return d(!0)}))}),[f]),[h,f]};var a=t("q1tI"),s=c(t("0G5g")),o="undefined"!==typeof IntersectionObserver;var i=new Map}},[["52dC",0,1,2,3]]]);