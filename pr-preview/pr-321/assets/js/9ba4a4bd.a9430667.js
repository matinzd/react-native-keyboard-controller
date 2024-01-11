"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2686],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=i,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:1},o="Architecture",l={unversionedId:"recipes/architecture",id:"version-1.4.0/recipes/architecture",title:"Architecture",description:"This library requires to wrap an app with KeyboardProvider component. It's needed because it stores animated values in context.",source:"@site/versioned_docs/version-1.4.0/recipes/architecture.md",sourceDirName:"recipes",slug:"/recipes/architecture",permalink:"/react-native-keyboard-controller/pr-preview/pr-321/docs/1.4.0/recipes/architecture",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.4.0/recipes/architecture.md",tags:[],version:"1.4.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Recipes",permalink:"/react-native-keyboard-controller/pr-preview/pr-321/docs/1.4.0/category/recipes"},next:{title:"Platforms capabilities and limitations",permalink:"/react-native-keyboard-controller/pr-preview/pr-321/docs/1.4.0/recipes/platform-differences"}},s={},p=[{value:"Process overview",id:"process-overview",level:2},{value:"Design principles",id:"design-principles",level:2},{value:"Why custom <code>KeyboardControllerView</code> is needed?",id:"why-custom-keyboardcontrollerview-is-needed",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"This library requires to wrap an app with ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyboardProvider")," component. It's needed because it stores animated values in ",(0,i.kt)("inlineCode",{parentName:"p"},"context"),"."),(0,i.kt)("h2",{id:"process-overview"},"Process overview"),(0,i.kt)("p",null,"Library exposes ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyboardControllerView")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"onKeyboardMove")," method. This method is fired when keyboard frame is changed. ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyboardProvider")," automatically maps these events to ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated.Value")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Reanimated.SharedValue")," and stores it in ",(0,i.kt)("inlineCode",{parentName:"p"},"context"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Underhood ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyboardControllerView")," is a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"View")," with one additional ",(0,i.kt)("inlineCode",{parentName:"p"},"onKeyboardMove")," callback method, so it inherits all props from plain ",(0,i.kt)("inlineCode",{parentName:"p"},"View"),", such as ",(0,i.kt)("inlineCode",{parentName:"p"},"style"),", etc.")),(0,i.kt)("p",null,"Thus we have a single source of truth about keyboard position. Since values are stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," we can use it in any component where we need them. Moreover, we can consume ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," values in class components as well as in hooks."),(0,i.kt)("h2",{id:"design-principles"},"Design principles"),(0,i.kt)("p",null,"The library was designed to use a ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," as a global store for animated values and have a single ",(0,i.kt)("inlineCode",{parentName:"p"},"Provider")," across the app. As of now it may be not very obvious, why it was needed to have a single source of data flow, but in future it may significantly simplify the process of the integration new features."),(0,i.kt)("h2",{id:"why-custom-keyboardcontrollerview-is-needed"},"Why custom ",(0,i.kt)("inlineCode",{parentName:"h2"},"KeyboardControllerView")," is needed?"),(0,i.kt)("p",null,"Initially I had a choice which approach to use in order to send events about keyboard frames: ",(0,i.kt)("inlineCode",{parentName:"p"},"EventEmitters")," vs ",(0,i.kt)("inlineCode",{parentName:"p"},"View")," with callbacks. I decided to use ",(0,i.kt)("inlineCode",{parentName:"p"},"View")," with callbacks because of several reasons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"react-native")," core team uses similar approach for ",(0,i.kt)("inlineCode",{parentName:"li"},"onScroll")," event from ",(0,i.kt)("inlineCode",{parentName:"li"},"ScrollView")," component (also I knew, that it's possible to map events from such callbacks to ",(0,i.kt)("inlineCode",{parentName:"li"},"Animated.Value")," and thus reduce bridge usage);"),(0,i.kt)("li",{parentName:"ul"},"to track keyboard frames on Android we need to enter to ",(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/training/gestures/edge-to-edge"},"edge-to-edge")," mode and it changes view paddings. Since it's managed through ",(0,i.kt)("inlineCode",{parentName:"li"},"View")," it's easier to change padding of this view."),(0,i.kt)("li",{parentName:"ul"},"in future it may be needed to send ",(0,i.kt)("inlineCode",{parentName:"li"},"Animated.Value")," from JS to native thread (interactive keyboard dismissing on ",(0,i.kt)("inlineCode",{parentName:"li"},"Android"),"). And in community there a lot of libraries which are accepting props as ",(0,i.kt)("inlineCode",{parentName:"li"},"Animated.Value")," (for example ",(0,i.kt)("inlineCode",{parentName:"li"},"lottie")," and its ",(0,i.kt)("inlineCode",{parentName:"li"},"progress")," prop).")))}d.isMDXComponent=!0}}]);