_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/6uY":function(e,n,t){e.exports={layout:"layout_GvkLX",hasTopMenu:"hasTopMenu_1WVP3"}},L5PM:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/index-old",function(){return t("MAHH")}])},MAHH:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),a=t("okHz");n.default=function(e){return Object(r.jsx)(a.a,{children:Object(r.jsx)("div",{children:"hello world"})})}},MVNz:function(e,n,t){e.exports={hamburger:"hamburger_1KX_H",menu:"menu_2G6rj",showMenu:"showMenu_1uTIy",name:"name_10dbC",menuItems:"menuItems_26ie3",topMenuItems:"topMenuItems_3Vx-y",menuItem:"menuItem_5m-L2",email:"email_3kN3h",social:"social_3_hb2",topMenu:"topMenu_3pGJ_"}},TSYQ:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===c)for(var o in r)t.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),a=t("284h");n.__esModule=!0,n.default=void 0;var c=a(t("q1tI")),s=t("elyg"),o=t("nOHt"),i=t("vNVm"),l={};function u(e,n,t,r){if(e&&(0,s.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,o.useRouter)(),a=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,s.resolveHref)(a,e.href,!0),t=r(n,2),c=t[0],o=t[1];return{href:c,as:e.as?(0,s.resolveHref)(a,e.as):o||c}}),[a,e.href,e.as]),h=f.href,d=f.as,j=e.children,m=e.replace,b=e.shallow,p=e.scroll,O=e.locale;"string"===typeof j&&(j=c.default.createElement("a",null,j));var v=c.Children.only(j),x=v&&"object"===typeof v&&v.ref,g=(0,i.useIntersection)({rootMargin:"200px"}),y=r(g,2),_=y[0],w=y[1],M=c.default.useCallback((function(e){_(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,_]);(0,c.useEffect)((function(){var e=w&&n&&(0,s.isLocalURL)(h),r="undefined"!==typeof O?O:t&&t.locale,a=l[h+"%"+d+(r?"%"+r:"")];e&&!a&&u(t,h,d,{locale:r})}),[d,h,w,O,n,t]);var N={ref:M,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,c,o,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(t))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:c,locale:i,scroll:o}).then((function(e){e&&o&&document.body.focus()})))}(e,t,h,d,m,b,p,O)},onMouseEnter:function(e){(0,s.isLocalURL)(h)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),u(t,h,d,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var I="undefined"!==typeof O?O:t&&t.locale,k=(0,s.getDomainLocale)(d,I,t&&t.locales,t&&t.domainLocales);N.href=k||(0,s.addBasePath)((0,s.addLocale)(d,I,t&&t.defaultLocale))}return c.default.cloneElement(v,N)};n.default=f},okHz:function(e,n,t){"use strict";var r=t("nKUr"),a=t("rePB"),c=t("TSYQ"),s=t.n(c),o=t("q1tI"),i=t("YFqc"),l=t.n(i),u=t("MVNz"),f=t.n(u),h=function(e){var n,t=e.topMenu,c=Object(o.useState)(!1),i=c[0],u=c[1];Object(o.useEffect)((function(){var e;"undefined"!==typeof document&&null!==(e=document.body)&&void 0!==e&&e.style&&(document.body.style.overflow=i?"hidden":"")}),[i]);var h=function(e){return u(!1)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("nav",{className:s()((n={},Object(a.a)(n,f.a.menu,!0),Object(a.a)(n,f.a.showMenu,i),Object(a.a)(n,f.a.topMenu,t),n)),children:[Object(r.jsxs)("h2",{className:f.a.name,children:["suhan ",Object(r.jsx)("br",{}),"wijaya"]}),Object(r.jsxs)("ul",{className:f.a.menuItems,children:[Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(l.a,{href:"/#intro",children:Object(r.jsx)("a",{onClick:h,children:"INTRO"})})}),Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(l.a,{href:"/#about",children:Object(r.jsx)("a",{onClick:h,children:"ABOUT"})})}),Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(l.a,{href:"/#blog",children:Object(r.jsx)("a",{onClick:h,children:"BLOG"})})}),Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(l.a,{href:"/#projects",children:Object(r.jsx)("a",{onClick:h,children:"PROJECTS"})})}),Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(l.a,{href:"/#contact",children:Object(r.jsx)("a",{onClick:h,children:"CONTACT"})})}),Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(l.a,{href:"/#technologies",children:Object(r.jsx)("a",{onClick:h,children:"TECHNOLOGIES"})})})]}),Object(r.jsx)("a",{href:"mailto:suhanw@gmail.com",target:"_blank",className:f.a.email,children:"suhanw@gmail.com"}),Object(r.jsxs)("div",{className:f.a.social,children:[Object(r.jsx)("a",{href:"https://www.linkedin.com/in/suhanwijaya/",target:"_blank",children:Object(r.jsx)("img",{src:"/images/linked-in.png",alt:"Suhan's LinkedIn profile"})}),Object(r.jsx)("a",{href:"https://twitter.com/suhanw",target:"_blank",children:Object(r.jsx)("img",{src:"/images/twitter.png",alt:"Suhan's Twitter profile"})}),Object(r.jsx)("a",{href:"https://github.com/suhanw",target:"_blank",children:Object(r.jsx)("img",{src:"/images/github.png",alt:"Suhan's GitHub profile"})})]}),Object(r.jsx)("ul",{className:f.a.topMenuItems,children:Object(r.jsx)("li",{className:f.a.menuItem,children:Object(r.jsx)(l.a,{href:"/#blog",children:Object(r.jsx)("a",{children:"BACK TO HOME"})})})})]}),Object(r.jsx)("button",{className:f.a.hamburger,onClick:function(e){return u((function(e){return!e}))},children:Object(r.jsx)("img",{src:"/images/hamburger.png"})})]})},d=t("/6uY"),j=t.n(d);n.a=function(e){var n,t=e.children,c=e.topMenu;return Object(r.jsxs)("div",{className:s()((n={},Object(a.a)(n,j.a.layout,!0),Object(a.a)(n,j.a.hasTopMenu,c),n)),children:[Object(r.jsx)(h,{topMenu:c}),t]})}},rePB:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return r}))},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),a=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,a=(0,c.useRef)(),l=(0,c.useState)(!1),u=r(l,2),f=u[0],h=u[1],d=(0,c.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),t||f||e&&e.tagName&&(a.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,c=r.observer,s=r.elements;return s.set(e,n),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),i.delete(a))}}(e,(function(e){return e&&h(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){o||f||(0,s.default)((function(){return h(!0)}))}),[f]),[d,f]};var c=t("q1tI"),s=a(t("0G5g")),o="undefined"!==typeof IntersectionObserver;var i=new Map}},[["L5PM",0,1,2,3]]]);