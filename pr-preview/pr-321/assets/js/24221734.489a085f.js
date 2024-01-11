"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9721],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>b});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(o),b=r,m=u["".concat(s,".").concat(b)]||u[b]||p[b]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7006:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=o(7462),r=(o(7294),o(3905));const a={keywords:["react-native-keyboard-controller","useKeyboardController","enabled","disabled","setEnabled"]},i="useKeyboardController",l={unversionedId:"api/hooks/module/use-keyboard-controller",id:"version-1.8.0/api/hooks/module/use-keyboard-controller",title:"useKeyboardController",description:"useKeyboardController is a hook which gives an access to the state of the react-native-keyboard-controller library. It return two values:",source:"@site/versioned_docs/version-1.8.0/api/hooks/module/use-keyboard-controller.md",sourceDirName:"api/hooks/module",slug:"/api/hooks/module/use-keyboard-controller",permalink:"/react-native-keyboard-controller/pr-preview/pr-321/docs/1.8.0/api/hooks/module/use-keyboard-controller",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.8.0/api/hooks/module/use-keyboard-controller.md",tags:[],version:"1.8.0",frontMatter:{keywords:["react-native-keyboard-controller","useKeyboardController","enabled","disabled","setEnabled"]},sidebar:"tutorialSidebar",previous:{title:"useReanimatedKeyboardAnimation",permalink:"/react-native-keyboard-controller/pr-preview/pr-321/docs/1.8.0/api/hooks/keyboard/use-reanimated-keyboard-animation"},next:{title:"KeyboardAvoidingView",permalink:"/react-native-keyboard-controller/pr-preview/pr-321/docs/1.8.0/api/components/keyboard-avoiding-view"}},s={},d=[{value:"Example",id:"example",level:2},{value:"Using with class component",id:"using-with-class-component",level:2}],c={toc:d};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usekeyboardcontroller"},"useKeyboardController"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useKeyboardController")," is a hook which gives an access to the state of the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-keyboard-controller")," library. It return two values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," - boolean value which indicates whether the library is enabled in app;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setEnabled")," - function that changes state of ",(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," property.")),(0,r.kt)("p",null,"This hook can be handy in situations when your app is relying on default window resizing behavior on Android. Once the module is enabled - it moves the app in ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/training/gestures/edge-to-edge"},"edge-to-edge")," and prevents window from being resized (works as iOS). However if you need default Android behavior you can disable this module where needed and make a gradual integration of this library into your application."),(0,r.kt)("admonition",{title:"Use it only when you really need it",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Nonetheless that you can fallback to default Android behavior I still strongly recommend you not to go with this approach just because you'll loose all attractiveness of smooth animated keyboard transitions and your app will not look as great as it possibly can."),(0,r.kt)("p",{parentName:"admonition"},"Consider to use ",(0,r.kt)("a",{parentName:"p",href:"/react-native-keyboard-controller/pr-preview/pr-321/docs/1.8.0/api/components/keyboard-avoiding-view"},"KeyboardAvoidingView")," which also resize the window, but does it with beautiful animated transitions that makes your interactions with app smooth and pleasant.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useKeyboardController } from "react-native-keyboard-controller";\n\nconst { enabled, setEnabled } = useKeyboardController();\n\nsetEnabled(false);\n')),(0,r.kt)("p",null,"Also have a look on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/example"},"example")," app for more comprehensive usage."),(0,r.kt)("h2",{id:"using-with-class-component"},"Using with class component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  KeyboardController,\n  KeyboardContext,\n  AndroidSoftInputModes,\n} from "react-native-keyboard-controller";\n\nclass KeyboardAnimation extends React.PureComponent {\n  // 1. use context value\n  static contextType = KeyboardContext;\n\n  componentDidMount() {\n    // 2. get an access to `enabled` and `setEnabled` props\n    const { enabled, setEnabled } = this.context;\n\n    // 3. disable a module on demand in your app\n    setEnabled(false);\n  }\n}\n')))}p.isMDXComponent=!0}}]);