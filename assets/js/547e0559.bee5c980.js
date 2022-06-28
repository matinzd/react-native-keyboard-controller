"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6291],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6885:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},c="Architecture",p={unversionedId:"recipes/architecture",id:"recipes/architecture",title:"Architecture",description:"This library requires to wrap an app with KeyboardProvider component. It's needed because it stores animated values in context.",source:"@site/docs/recipes/architecture.md",sourceDirName:"recipes",slug:"/recipes/architecture",permalink:"/react-native-keyboard-controller/docs/recipes/architecture",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/recipes/architecture.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Recipes",permalink:"/react-native-keyboard-controller/docs/category/recipes"},next:{title:"Platforms capabilities and limitations",permalink:"/react-native-keyboard-controller/docs/recipes/platform-differences"}},l={},d=[{value:"Process overview",id:"process-overview",level:2},{value:"Design principles",id:"design-principles",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"This library requires to wrap an app with ",(0,a.kt)("inlineCode",{parentName:"p"},"KeyboardProvider")," component. It's needed because it stores animated values in ",(0,a.kt)("inlineCode",{parentName:"p"},"context"),"."),(0,a.kt)("h2",{id:"process-overview"},"Process overview"),(0,a.kt)("p",null,"Library exposes ",(0,a.kt)("inlineCode",{parentName:"p"},"KeyboardControllerView")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"onKeyboardMove")," method. This method is fired when keyboard frame is changed. ",(0,a.kt)("inlineCode",{parentName:"p"},"KeyboardProvider")," automatically maps these events to ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.Value")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Reanimated.SharedValue")," and stores it in ",(0,a.kt)("inlineCode",{parentName:"p"},"context"),"."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Underhood ",(0,a.kt)("inlineCode",{parentName:"p"},"KeyboardControllerView")," is a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," with one additional ",(0,a.kt)("inlineCode",{parentName:"p"},"onKeyboardMove")," callback method, so it inherits all props from plain ",(0,a.kt)("inlineCode",{parentName:"p"},"View"),", such as ",(0,a.kt)("inlineCode",{parentName:"p"},"style"),", etc."))),(0,a.kt)("p",null,"Thus we have a single source of truth about keyboard position. Since values are stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," we can use it in any component where we need them. Moreover, we can consume ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," values in class components as well as in hooks."),(0,a.kt)("h2",{id:"design-principles"},"Design principles"),(0,a.kt)("p",null,"The library was designed to use a ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," as a global store for animated values and have a single ",(0,a.kt)("inlineCode",{parentName:"p"},"Provider")," across the app. As of now it may be not very obvious, why it was needed to have a single source of data flow, but in future it may significantly simplify the process of the integration new features."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TODO: view on android - easier to control styles, view positions, etc."),(0,a.kt)("li",{parentName:"ul"},"TODO: view may accept animated values.")))}m.isMDXComponent=!0}}]);