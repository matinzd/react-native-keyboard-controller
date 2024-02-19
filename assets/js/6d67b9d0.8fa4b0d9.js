"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5832],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(o),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return o?n.createElement(f,i(i({ref:t},c),{},{components:o})):n.createElement(f,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7938:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:5,keywords:["react-native-keyboard-controller","react-native","KeyboardController","module","dismiss","dismiss keyboard","windowSoftInputMode","adjustResize","adjustPan"]},i="KeyboardController",d={unversionedId:"api/keyboard-controller",id:"api/keyboard-controller",title:"KeyboardController",description:"The KeyboardController module in React Native provides a convenient set of methods for managing the behavior of the keyboard. With seamless runtime adjustments, this module allows developers to dynamically change the windowSoftInputMode on Android and dismiss the keyboard on both platforms.",source:"@site/docs/api/keyboard-controller.md",sourceDirName:"api",slug:"/api/keyboard-controller",permalink:"/react-native-keyboard-controller/docs/next/api/keyboard-controller",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/docs/api/keyboard-controller.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,keywords:["react-native-keyboard-controller","react-native","KeyboardController","module","dismiss","dismiss keyboard","windowSoftInputMode","adjustResize","adjustPan"]},sidebar:"tutorialSidebar",previous:{title:"KeyboardGestureArea",permalink:"/react-native-keyboard-controller/docs/next/api/keyboard-gesture-area"},next:{title:"KeyboardEvents",permalink:"/react-native-keyboard-controller/docs/next/api/keyboard-events"}},l={},s=[{value:"Methods",id:"methods",level:2},{value:"<code>setInputMode</code>",id:"setinputmode",level:3},{value:"<code>setDefaultMode</code>",id:"setdefaultmode",level:3},{value:"<code>dismiss</code>",id:"dismiss",level:3},{value:"<code>setFocusTo</code>",id:"setfocusto",level:3}],c={toc:s};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"keyboardcontroller"},"KeyboardController"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyboardController")," module in React Native provides a convenient set of methods for managing the behavior of the keyboard. With seamless runtime adjustments, this module allows developers to dynamically change the ",(0,r.kt)("inlineCode",{parentName:"p"},"windowSoftInputMode")," on Android and dismiss the keyboard on both platforms."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"setinputmode"},(0,r.kt)("inlineCode",{parentName:"h3"},"setInputMode")),(0,r.kt)("p",null,"This method is used to dynamically change the ",(0,r.kt)("inlineCode",{parentName:"p"},"windowSoftInputMode")," during runtime in an Android application. It takes an argument that specifies the desired input mode. The example provided sets the input mode to ",(0,r.kt)("inlineCode",{parentName:"p"},"SOFT_INPUT_ADJUST_RESIZE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"KeyboardController.setInputMode(AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);\n")),(0,r.kt)("h3",{id:"setdefaultmode"},(0,r.kt)("inlineCode",{parentName:"h3"},"setDefaultMode")),(0,r.kt)("p",null,"This method is used to restore the default ",(0,r.kt)("inlineCode",{parentName:"p"},"windowSoftInputMode")," declared in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),". It resets the input mode to the default value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"KeyboardController.setDefaultMode();\n")),(0,r.kt)("h3",{id:"dismiss"},(0,r.kt)("inlineCode",{parentName:"h3"},"dismiss")),(0,r.kt)("p",null,"This method is used to hide the keyboard. It triggers the dismissal of the keyboard:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"KeyboardController.dismiss();\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"What is the difference comparing to ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"react-native")," implementation?"),(0,r.kt)("p",{parentName:"admonition"},"The equivalent method from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native")," relies on specific internal components, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"TextInput"),", and may not work as intended if a custom input component is used."),(0,r.kt)("p",{parentName:"admonition"},"In contrast, the described method enables keyboard dismissal for any focused input, extending functionality beyond the limitations of the default implementation.")),(0,r.kt)("h3",{id:"setfocusto"},(0,r.kt)("inlineCode",{parentName:"h3"},"setFocusTo")),(0,r.kt)("p",null,"This method sets focus to the selected field. Possible values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prev")," - set focus to the previous field;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"current")," - set focus to the last focused field (i. e. if keyboard was closed you can restore focus);"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"next")," - set focus to the next field.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'setFocusTo("next");\n')))}p.isMDXComponent=!0}}]);