"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[158],{76032:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=o(85893),r=o(11151),a=o(74072);const i={slug:"release-1-12",title:"Announcing upcoming release \ud83d\udce3",authors:["kirill"],tags:["react-native","keyboard","bridgeless"],keywords:["react-native-keyboard-controller","keyboard","bridgeless","keyboard toolbar"]},s=void 0,l={permalink:"/react-native-keyboard-controller/pr-preview/pr-508/blog/release-1-12",editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/blog/2024-05-13-release-1-12/index.mdx",source:"@site/blog/2024-05-13-release-1-12/index.mdx",title:"Announcing upcoming release \ud83d\udce3",description:"I'm excited to announce the latest release, version 1.12.0, of react-native-keyboard-controller!",date:"2024-05-13T00:00:00.000Z",formattedDate:"May 13, 2024",tags:[{label:"react-native",permalink:"/react-native-keyboard-controller/pr-preview/pr-508/blog/tags/react-native"},{label:"keyboard",permalink:"/react-native-keyboard-controller/pr-preview/pr-508/blog/tags/keyboard"},{label:"bridgeless",permalink:"/react-native-keyboard-controller/pr-preview/pr-508/blog/tags/bridgeless"}],readingTime:2.745,hasTruncateMarker:!0,authors:[{name:"Kirill Zyusko",title:"Library author",url:"https://github.com/kirillzyusko",imageURL:"https://github.com/kirillzyusko.png",key:"kirill"}],frontMatter:{slug:"release-1-12",title:"Announcing upcoming release \ud83d\udce3",authors:["kirill"],tags:["react-native","keyboard","bridgeless"],keywords:["react-native-keyboard-controller","keyboard","bridgeless","keyboard toolbar"]},unlisted:!1,nextItem:{title:"New KeyboardToolbar component \ud83d\ude0d",permalink:"/react-native-keyboard-controller/pr-preview/pr-508/blog/keyboard-toolbar"}},c={authorsImageUrls:[void 0]},d=[{value:"Bridgeless support",id:"bridgeless-support",level:2},{value:"Selection tracking",id:"selection-tracking",level:2},{value:"<code>KeyboardToolbar</code> enhancements",id:"keyboardtoolbar-enhancements",level:2},{value:"<code>blur</code> effect",id:"blur-effect",level:3},{value:"Button callbacks",id:"button-callbacks",level:3},{value:"Synchronous <code>onMove</code> handler on iOS",id:"synchronous-onmove-handler-on-ios",level:2},{value:"No need to patch <code>react-native-text-input-mask</code> anymore",id:"no-need-to-patch-react-native-text-input-mask-anymore",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"I'm excited to announce the latest release, version 1.12.0, of react-native-keyboard-controller!"}),"\n",(0,t.jsx)(n.p,{children:"Although this release may not seem monumental, it's significant, and I'm thrilled to share it with you. \ud83d\ude0d"}),"\n",(0,t.jsxs)(n.p,{children:["The key features of this release are: ",(0,t.jsx)(n.strong,{children:"bridgeless"})," support, selection tracking, enhanced ",(0,t.jsx)(n.code,{children:"KeyboardToolbar"})," component and synchronous ",(0,t.jsx)(n.code,{children:"onMove"})," handler on iOS among other bug fixes and improvements."]}),"\n",(0,t.jsx)(n.h2,{id:"bridgeless-support",children:"Bridgeless support"}),"\n",(0,t.jsxs)(n.p,{children:["This library starting from ",(0,t.jsx)(n.code,{children:"1.12.0"})," is now compatible RN 0.74 and fully supports bridgeless mode, offering improved performance and streamlined communication between native and JavaScript layers."]}),"\n",(0,t.jsx)(n.h2,{id:"selection-tracking",children:"Selection tracking"}),"\n",(0,t.jsxs)(n.p,{children:["In the previous version, ",(0,t.jsx)(n.code,{children:"react-native-keyboard-controller"})," was not able to track selection changes in the text input fields. Starting from ",(0,t.jsx)(n.code,{children:"1.12.0"})," this library exposes a new event and handlers making it possible to track selection changes."]}),"\n",(0,t.jsxs)(n.p,{children:["In addition to duplicating the react-native API, this event provides information not only about the ",(0,t.jsx)(n.code,{children:"start"})," and ",(0,t.jsx)(n.code,{children:"end"})," positions but also the ",(0,t.jsx)(n.code,{children:"x"})," and ",(0,t.jsx)(n.code,{children:"y"})," coordinates for the top-left and bottom-right corners of the selection."]}),"\n",(0,t.jsx)(n.p,{children:"These details allow you to draw elements behind the cursor, making interaction with focused inputs more intuitive:"}),"\n","\n","\n",(0,t.jsx)(a.Z,{src:"/video/selection-demo.mov",width:65}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.p,{children:["Later on I'm planning to extend ",(0,t.jsx)(n.code,{children:"KeyboardAwareScrollView"})," to react on selection tracking, so if your selection is overlapped with keyboard then ",(0,t.jsx)(n.code,{children:"KeyboardAwareScrollView"})," will automatically scroll and avoid an overlap."]}),"\n",(0,t.jsxs)(n.h2,{id:"keyboardtoolbar-enhancements",children:[(0,t.jsx)(n.code,{children:"KeyboardToolbar"})," enhancements"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"KeyboardToolbar"})," component was initially introduced in version ",(0,t.jsx)(n.code,{children:"1.10.0"}),". In this release, I've added new features to make it even more customizable and HID compatible."]}),"\n",(0,t.jsxs)(n.h3,{id:"blur-effect",children:[(0,t.jsx)(n.code,{children:"blur"})," effect"]}),"\n",(0,t.jsxs)(n.p,{children:["Starting with version ",(0,t.jsx)(n.code,{children:"1.12.0"}),", you can apply a blur effect to the ",(0,t.jsx)(n.code,{children:"KeyboardToolbar"})," component by using the ",(0,t.jsx)(n.code,{children:"blur"})," prop. You can use any compatible component, such as ",(0,t.jsx)(n.code,{children:"react-native-blur"})," or ",(0,t.jsx)(n.code,{children:"expo-blur"}),". Since iOS 16, the keyboard itself is translucent with a blur effect, which causes all components behind it to be blurred too."]}),"\n",(0,t.jsxs)(n.p,{children:["With the new version of ",(0,t.jsx)(n.code,{children:"react-native-keyboard-controller"}),", you can extend this effect to the ",(0,t.jsx)(n.code,{children:"KeyboardToolbar"})," component! \ud83d\ude0e"]}),"\n",(0,t.jsx)(n.h3,{id:"button-callbacks",children:"Button callbacks"}),"\n",(0,t.jsxs)(n.p,{children:["From version ",(0,t.jsx)(n.code,{children:"1.12.0"}),", the ",(0,t.jsx)(n.code,{children:"KeyboardToolbar"})," component supports various callbacks for specific events, such as ",(0,t.jsx)(n.code,{children:"onNextCallback"}),", ",(0,t.jsx)(n.code,{children:"onPrevCallback"}),", and ",(0,t.jsx)(n.code,{children:"onDoneCallback"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["These callbacks let you add ",(0,t.jsx)(n.strong,{children:"haptic"})," feedback, ",(0,t.jsx)(n.strong,{children:"play sounds"}),", or implement other creative responses based on your needs."]}),"\n",(0,t.jsxs)(n.h2,{id:"synchronous-onmove-handler-on-ios",children:["Synchronous ",(0,t.jsx)(n.code,{children:"onMove"})," handler on iOS"]}),"\n",(0,t.jsxs)(n.p,{children:["Since version ",(0,t.jsx)(n.code,{children:"1.4.0"}),", when the ",(0,t.jsx)(n.code,{children:"useKeyboardHandler"})," hook was introduced, the ",(0,t.jsx)(n.code,{children:"onMove"})," handler was always a frame behind."]}),"\n",(0,t.jsx)(n.p,{children:"As a result, it created a parallax effect that prevented elements from precisely following the keyboard."}),"\n",(0,t.jsxs)(n.p,{children:["With a new release this problem is solved, and the ",(0,t.jsx)(n.code,{children:"onMove"})," handler is now synchronized with the keyboard animation. \ud83d\ude0a"]}),"\n",(0,t.jsxs)(n.h2,{id:"no-need-to-patch-react-native-text-input-mask-anymore",children:["No need to patch ",(0,t.jsx)(n.code,{children:"react-native-text-input-mask"})," anymore"]}),"\n",(0,t.jsxs)(n.p,{children:["If you used ",(0,t.jsx)(n.code,{children:"react-native-text-input-mask"})," alongside ",(0,t.jsx)(n.code,{children:"useFocusedInputHandler"})," or ",(0,t.jsx)(n.code,{children:"KeyboardAwareScrollView"}),", you might have needed to patch it to ensure that the ",(0,t.jsx)(n.code,{children:"onChangeText"})," event was triggered."]}),"\n",(0,t.jsxs)(n.p,{children:["With the new release of ",(0,t.jsx)(n.code,{children:"react-native-keyboard-controller"}),", you can now safely remove this patch and keep your existing code intact. \ud83d\udc4d"]}),"\n",(0,t.jsx)(n.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,t.jsxs)(n.p,{children:["This release refines the previous version and at the same time introduces crucial improvements that will unlock the full potential of ",(0,t.jsx)(n.code,{children:"react-native-keyboard-controller"})," in future updates:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["on iOS, we now inject a delegate into ",(0,t.jsx)(n.code,{children:"TextInput"}),", providing greater control over input and keyboard events;"]}),"\n",(0,t.jsxs)(n.li,{children:["the fully synchronous ",(0,t.jsx)(n.code,{children:"onMove"})," handler will enable frame-by-frame keyboard control in the future, particularly when an interactive keyboard offset is implemented. \ud83d\udc40"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To stay tuned follow me on ",(0,t.jsx)(n.a,{href:"https://twitter.com/ziusko",children:"Twitter"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/kirillzyusko",children:"GitHub"})," for updates. Thank you for your support! \ud83d\ude0a"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},74072:(e,n,o)=>{o.d(n,{Z:()=>a});var t=o(44996),r=(o(67294),o(85893));function a(e){let{src:n,width:o=100,...a}=e;const i=(0,t.Z)(n);return(0,r.jsx)("div",{className:"center video",children:(0,r.jsx)("video",{src:i,width:`${o}%`,height:"100%",playsInline:!0,autoPlay:!0,muted:!0,loop:!0,...a})})}},11151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>i});var t=o(67294);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);