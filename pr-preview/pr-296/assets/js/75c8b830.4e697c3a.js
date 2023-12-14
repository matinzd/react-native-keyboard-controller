"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2814],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),c=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(d.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),y=o,b=u["".concat(d,".").concat(y)]||u[y]||s[y]||a;return t?n.createElement(b,i(i({ref:r},p),{},{components:t})):n.createElement(b,i({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4309:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:5,keywords:["react-native-keyboard-controller","KeyboardController","module","windowSoftInputMode","adjustResize","adjustPan"]},i="KeyboardController",l={unversionedId:"api/keyboard-controller",id:"version-1.8.0/api/keyboard-controller",title:"KeyboardController",description:"KeyboardController is an object which has two functions:",source:"@site/versioned_docs/version-1.8.0/api/keyboard-controller.md",sourceDirName:"api",slug:"/api/keyboard-controller",permalink:"/react-native-keyboard-controller/pr-preview/pr-296/docs/1.8.0/api/keyboard-controller",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.8.0/api/keyboard-controller.md",tags:[],version:"1.8.0",sidebarPosition:5,frontMatter:{sidebar_position:5,keywords:["react-native-keyboard-controller","KeyboardController","module","windowSoftInputMode","adjustResize","adjustPan"]},sidebar:"tutorialSidebar",previous:{title:"KeyboardGestureArea",permalink:"/react-native-keyboard-controller/pr-preview/pr-296/docs/1.8.0/api/keyboard-gesture-area"},next:{title:"KeyboardEvents",permalink:"/react-native-keyboard-controller/pr-preview/pr-296/docs/1.8.0/api/keyboard-events"}},d={},c=[{value:"Example",id:"example",level:2}],p={toc:c};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"keyboardcontroller"},"KeyboardController"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"KeyboardController")," is an object which has two functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setInputMode")," - used to change ",(0,o.kt)("inlineCode",{parentName:"li"},"windowSoftInputMode")," in runtime;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setDefaultMode")," - used to restore default ",(0,o.kt)("inlineCode",{parentName:"li"},"windowSoftInputMode")," (which is declared in ",(0,o.kt)("inlineCode",{parentName:"li"},"AndroidManifest.xml"),");")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  KeyboardController,\n  AndroidSoftInputModes,\n} from "react-native-keyboard-controller";\n\nexport const useResizeMode = () => {\n  useEffect(() => {\n    KeyboardController.setInputMode(\n      AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE\n    );\n\n    return () => KeyboardController.setDefaultMode();\n  }, []);\n};\n')))}s.isMDXComponent=!0}}]);