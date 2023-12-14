"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,y=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={keywords:["react-native-keyboard-controller","useReanimatedKeyboardAnimation","react-native-reanimated","react hook"]},i="useReanimatedKeyboardAnimation",s={unversionedId:"api/hooks/use-reanimated-keyboard-animation",id:"version-1.5.0/api/hooks/use-reanimated-keyboard-animation",title:"useReanimatedKeyboardAnimation",description:"useReanimatedKeyboardAnimation is a hook which gives access to two reanimated values:",source:"@site/versioned_docs/version-1.5.0/api/hooks/use-reanimated-keyboard-animation.md",sourceDirName:"api/hooks",slug:"/api/hooks/use-reanimated-keyboard-animation",permalink:"/react-native-keyboard-controller/pr-preview/pr-296/docs/1.5.0/api/hooks/use-reanimated-keyboard-animation",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.5.0/api/hooks/use-reanimated-keyboard-animation.md",tags:[],version:"1.5.0",frontMatter:{keywords:["react-native-keyboard-controller","useReanimatedKeyboardAnimation","react-native-reanimated","react hook"]},sidebar:"tutorialSidebar",previous:{title:"useKeyboardHandler",permalink:"/react-native-keyboard-controller/pr-preview/pr-296/docs/1.5.0/api/hooks/use-keyboard-handler/"},next:{title:"KeyboardProvider",permalink:"/react-native-keyboard-controller/pr-preview/pr-296/docs/1.5.0/api/keyboard-provider"}},l={},d=[{value:"Example",id:"example",level:2},{value:"Using with class component",id:"using-with-class-component",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usereanimatedkeyboardanimation"},"useReanimatedKeyboardAnimation"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useReanimatedKeyboardAnimation")," is a hook which gives access to two reanimated values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"height")," - value which changes between ",(0,a.kt)("strong",{parentName:"li"},"0")," and ",(0,a.kt)("strong",{parentName:"li"},"keyboardHeight"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"progress")," - value which changes between ",(0,a.kt)("strong",{parentName:"li"},"0")," (keyboard closed) and ",(0,a.kt)("strong",{parentName:"li"},"1")," (keyboard opened).")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useReanimatedKeyboardAnimation } from "react-native-keyboard-controller";\n\nconst { height, progress } = useReanimatedKeyboardAnimation();\n')),(0,a.kt)("p",null,"Also have a look on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/example"},"example")," app for more comprehensive usage."),(0,a.kt)("h2",{id:"using-with-class-component"},"Using with class component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  KeyboardController,\n  KeyboardContext,\n  AndroidSoftInputModes,\n} from "react-native-keyboard-controller";\n\nclass KeyboardAnimation extends React.PureComponent {\n  // 1. use context value\n  static contextType = KeyboardContext;\n\n  componentDidMount() {\n    // 2. set input mode for android to `adjustResize`\n    // (can be omitted if you already have `adjustResize` in `AndroidManifest.xml`)\n    KeyboardController.setInputMode(AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);\n  }\n\n  componentWillUnmount() {\n    // 2. return to default input mode (for Android)\n    // in order not to break other part of your app\n    KeyboardController.setDefaultMode();\n  }\n\n  render() {\n    // 3. consume reanimated values \ud83d\ude0a\n    const { reanimated } = this.context;\n  }\n}\n')))}p.isMDXComponent=!0}}]);