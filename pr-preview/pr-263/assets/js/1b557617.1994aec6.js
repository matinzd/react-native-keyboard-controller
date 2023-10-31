"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8177],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,y=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2,keywords:["react-native-keyboard-controller","KeyboardProvider"]},i="KeyboardProvider",l={unversionedId:"api/keyboard-provider",id:"api/keyboard-provider",title:"KeyboardProvider",description:"KeyboardProvider should wrap your app. Underhood it works with KeyboardControllerView to receive events during keyboard movements, maps these events to Animated/Reanimated values and store them in context.",source:"@site/docs/api/keyboard-provider.md",sourceDirName:"api",slug:"/api/keyboard-provider",permalink:"/react-native-keyboard-controller/pr-preview/pr-263/docs/next/api/keyboard-provider",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/docs/api/keyboard-provider.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["react-native-keyboard-controller","KeyboardProvider"]},sidebar:"tutorialSidebar",previous:{title:"KeyboardStickyView",permalink:"/react-native-keyboard-controller/pr-preview/pr-263/docs/next/api/components/keyboard-sticky-view/"},next:{title:"KeyboardControllerView",permalink:"/react-native-keyboard-controller/pr-preview/pr-263/docs/next/api/keyboard-controller-view"}},p={},d=[{value:"Props",id:"props",level:2},{value:"<code>statusBarTranslucent</code>",id:"statusbartranslucent",level:3},{value:"<code>navigationBarTranslucent</code>",id:"navigationbartranslucent",level:3},{value:"<code>enabled</code>",id:"enabled",level:3},{value:"Example",id:"example",level:2}],s={toc:d};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"keyboardprovider"},"KeyboardProvider"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"KeyboardProvider")," should wrap your app. Underhood it works with ",(0,o.kt)("inlineCode",{parentName:"p"},"KeyboardControllerView")," to receive events during keyboard movements, maps these events to ",(0,o.kt)("inlineCode",{parentName:"p"},"Animated"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"Reanimated")," values and store them in ",(0,o.kt)("inlineCode",{parentName:"p"},"context"),"."),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"statusbartranslucent"},(0,o.kt)("inlineCode",{parentName:"h3"},"statusBarTranslucent")),(0,o.kt)("p",null,"A boolean prop to indicate whether ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," should be translucent on ",(0,o.kt)("inlineCode",{parentName:"p"},"Android")," or not."),(0,o.kt)("admonition",{title:"Important defaults",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"By default this library stretches to full screen (",(0,o.kt)("inlineCode",{parentName:"p"},"edge-to-edge")," mode) and status bar becomes translucent. But the library tries to use standard RN app behavior and automatically applies padding from top to look like a standard RN app. If you use ",(0,o.kt)("inlineCode",{parentName:"p"},"translucent")," prop for ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusBar")," component - it will not work anymore. You'll need to specify it on provider level. For more info ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/pull/30"},"see")," this PR.")),(0,o.kt)("h3",{id:"navigationbartranslucent"},(0,o.kt)("inlineCode",{parentName:"h3"},"navigationBarTranslucent")),(0,o.kt)("p",null,"A boolean prop to indicate whether ",(0,o.kt)("a",{parentName:"p",href:"https://m2.material.io/design/platform-guidance/android-bars.html#android-navigation-bar"},"NavigationBar")," should be translucent on ",(0,o.kt)("inlineCode",{parentName:"p"},"Android")," or not."),(0,o.kt)("h3",{id:"enabled"},(0,o.kt)("inlineCode",{parentName:"h3"},"enabled")),(0,o.kt)("p",null,"A boolean prop indicating whether the module is enabled. It indicate only initial state, i. e. if you try to change this prop after component mount it will not have any effect. To change the property in runtime use ",(0,o.kt)("a",{parentName:"p",href:"/react-native-keyboard-controller/pr-preview/pr-263/docs/next/api/hooks/module/use-keyboard-controller"},"useKeyboardController")," hook and ",(0,o.kt)("inlineCode",{parentName:"p"},"setEnabled")," method. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"Could be useful to set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if you want to activate the module only on specific screens."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { KeyboardProvider } from "react-native-keyboard-controller";\n\nconst App = () => {\n  return (\n    <KeyboardProvider>\n      {/* other components in your tree */}\n    </KeyboardProvider>\n  );\n}\n')))}c.isMDXComponent=!0}}]);