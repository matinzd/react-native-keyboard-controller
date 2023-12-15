"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,y=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1,keywords:["react-native-keyboard-controller","keyboard animation","keyboard handling","keyboard movement"]},i="First animation",s={unversionedId:"guides/first-animation",id:"version-1.9.0/guides/first-animation",title:"First animation",description:"To build your first animation you will need to use two hooks: useKeyboardAnimation or useReanimatedKeyboardAnimation.",source:"@site/versioned_docs/version-1.9.0/guides/first-animation.md",sourceDirName:"guides",slug:"/guides/first-animation",permalink:"/react-native-keyboard-controller/pr-preview/pr-299/docs/guides/first-animation",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.9.0/guides/first-animation.md",tags:[],version:"1.9.0",sidebarPosition:1,frontMatter:{sidebar_position:1,keywords:["react-native-keyboard-controller","keyboard animation","keyboard handling","keyboard movement"]},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/react-native-keyboard-controller/pr-preview/pr-299/docs/category/guides"},next:{title:"Building own hook",permalink:"/react-native-keyboard-controller/pr-preview/pr-299/docs/guides/building-own-hook"}},l={},p=[{value:"Example",id:"example",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"first-animation"},"First animation"),(0,o.kt)("p",null,"To build your first animation you will need to use two hooks: ",(0,o.kt)("a",{parentName:"p",href:"/react-native-keyboard-controller/pr-preview/pr-299/docs/api/hooks/keyboard/use-keyboard-animation"},"useKeyboardAnimation")," or ",(0,o.kt)("a",{parentName:"p",href:"/react-native-keyboard-controller/pr-preview/pr-299/docs/api/hooks/keyboard/use-reanimated-keyboard-animation"},"useReanimatedKeyboardAnimation"),"."),(0,o.kt)("p",null,"Both of them return an object with two properties: ",(0,o.kt)("inlineCode",{parentName:"p"},"progress")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," (depends on the hook used, values will be ",(0,o.kt)("inlineCode",{parentName:"p"},"Animated.Value")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Reanimated.SharedValue"),")."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"useKeyboardAnimation")," returns Animated values with enabled ",(0,o.kt)("strong",{parentName:"p"},"Native Driver")," (",(0,o.kt)("inlineCode",{parentName:"p"},"useNativeDriver: true"),"). Thus some properties can not be animated, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"height"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundColor"),", etc.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"useReanimatedKeyboardAnimation")," works only with ",(0,o.kt)("inlineCode",{parentName:"p"},"SharedValues"),", i.e. it is not compatible with Reanimated v1 API.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"To see how to use these hooks let's consider example below (for more comprehensive usage you may find an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/example"},"example")," app useful):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { Animated, StyleSheet, TextInput, View } from 'react-native';\nimport { useKeyboardAnimation } from 'react-native-keyboard-controller';\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'flex-end',\n  },\n  box: {\n    width: 60,\n    height: 60,\n    marginVertical: 20,\n  },\n  row: {\n    flexDirection: 'row',\n  },\n});\n\nexport default function KeyboardAnimation() {\n  // 1. we need to use hook to get an access to animated values\n  const { height, progress } = useKeyboardAnimation();\n\n  const scale = progress.interpolate({\n    inputRange: [0, 1],\n    outputRange: [1, 2],\n  });\n\n  return (\n    <View style={styles.container}>\n      <View style={styles.row}>\n        <Animated.View\n          style={{\n            width: 50,\n            height: 50,\n            backgroundColor: '#17fc03',\n            borderRadius: 15,\n            // 2. we can apply any transformations we want\n            transform: [{ translateY: height }, { scale }],\n          }}\n        />\n      </View>\n      <TextInput\n        style={{\n          width: '100%',\n          marginTop: 50,\n          height: 50,\n          backgroundColor: 'yellow',\n        }}\n      />\n    </View>\n  );\n}\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you are going to use these Animated values in class components (i.e. without hooks) - you can easily ",(0,o.kt)("a",{parentName:"p",href:"/react-native-keyboard-controller/pr-preview/pr-299/docs/api/hooks/keyboard/use-keyboard-animation"},"do")," it. Check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/blob/cf27eb00877db34b860a04cf52a026110e44b4b3/src/animated.tsx#L46-L51"},"source")," code - this hook simply changes ",(0,o.kt)("inlineCode",{parentName:"p"},"softInputMode")," and consumes ",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),". Also you may read ",(0,o.kt)("a",{parentName:"p",href:"/react-native-keyboard-controller/pr-preview/pr-299/docs/recipes/architecture"},"architecture")," deep dive to understand more about how this library works.")))}c.isMDXComponent=!0}}]);