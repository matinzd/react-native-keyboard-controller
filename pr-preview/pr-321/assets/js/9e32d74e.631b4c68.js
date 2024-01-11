"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,u(u({ref:t},l),{},{components:n})):r.createElement(f,u({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={keywords:["react-native-keyboard-controller","useReanimatedFocusedInput","react-native-reanimated","react hook","focused input","layout"]},u="useReanimatedFocusedInput",i={unversionedId:"api/hooks/input/use-reanimated-focused-input",id:"version-1.10.0/api/hooks/input/use-reanimated-focused-input",title:"useReanimatedFocusedInput",description:"Hook that returns an information about TextInput that currently has a focus. Returns null if no input has focus.",source:"@site/versioned_docs/version-1.10.0/api/hooks/input/use-reanimated-focused-input.md",sourceDirName:"api/hooks/input",slug:"/api/hooks/input/use-reanimated-focused-input",permalink:"/react-native-keyboard-controller/pr-preview/pr-321/docs/api/hooks/input/use-reanimated-focused-input",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.10.0/api/hooks/input/use-reanimated-focused-input.md",tags:[],version:"1.10.0",frontMatter:{keywords:["react-native-keyboard-controller","useReanimatedFocusedInput","react-native-reanimated","react hook","focused input","layout"]},sidebar:"tutorialSidebar",previous:{title:"useFocusedInputHandler",permalink:"/react-native-keyboard-controller/pr-preview/pr-321/docs/api/hooks/input/use-focused-input-handler"},next:{title:"useKeyboardController",permalink:"/react-native-keyboard-controller/pr-preview/pr-321/docs/api/hooks/module/use-keyboard-controller"}},p={},s=[{value:"Event structure",id:"event-structure",level:2},{value:"Example",id:"example",level:2}],l={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usereanimatedfocusedinput"},"useReanimatedFocusedInput"),(0,a.kt)("p",null,"Hook that returns an information about ",(0,a.kt)("inlineCode",{parentName:"p"},"TextInput")," that currently has a focus. Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," if no input has focus."),(0,a.kt)("p",null,"Hook will update its value in next cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"when keyboard changes its size (appears, disappears, changes size because of different input mode);"),(0,a.kt)("li",{parentName:"ul"},"when focus was changed from one ",(0,a.kt)("inlineCode",{parentName:"li"},"TextInput")," to another;"),(0,a.kt)("li",{parentName:"ul"},"when ",(0,a.kt)("inlineCode",{parentName:"li"},"layout")," of focused input was changed;"),(0,a.kt)("li",{parentName:"ul"},"when user types a text.")),(0,a.kt)("admonition",{title:"Events order",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The value from ",(0,a.kt)("inlineCode",{parentName:"p"},"useReanimatedFocusedInput")," will be always updated before keyboard events, so you can safely read values in ",(0,a.kt)("inlineCode",{parentName:"p"},"onStart")," handler and be sure they are up-to-date.")),(0,a.kt)("h2",{id:"event-structure"},"Event structure"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," property from this hook is returned as ",(0,a.kt)("inlineCode",{parentName:"p"},"SharedValue"),". The returned data has next structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type FocusedInputLayoutChangedEvent = {\n  target: number; // tag of the focused TextInput\n\n  // layout of the focused TextInput\n  layout: {\n    x: number; // `x` coordinate inside the parent component\n    y: number; // `y` coordinate inside the parent component\n    width: number; // `width` of the TextInput\n    height: number; // `height` of the TextInput\n    absoluteX: number; // `x` coordinate on the screen\n    absoluteY: number; // `y` coordinate on the screen\n  };\n};\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { input } = useReanimatedFocusedInput();\n")),(0,a.kt)("p",null,"Also have a look on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/example"},"example")," app for more comprehensive usage."))}c.isMDXComponent=!0}}]);