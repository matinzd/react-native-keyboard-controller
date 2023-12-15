"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8219],{9033:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"1.6.0","label":"1.6.0","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-1.6.0","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Installation","href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/installation","docId":"installation"},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"First animation","href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/guides/first-animation","docId":"guides/first-animation"},{"type":"link","label":"Building own hook","href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/guides/building-own-hook","docId":"guides/building-own-hook"},{"type":"link","label":"Interactive Keyboard","href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/guides/interactive-keyboard","docId":"guides/interactive-keyboard"},{"type":"link","label":"Compatibility","href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/guides/compatibility","docId":"guides/compatibility"}],"href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/category/guides"},{"type":"category","label":"Recipes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Architecture","href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/recipes/architecture","docId":"recipes/architecture"},{"type":"link","label":"Platforms capabilities and limitations","href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/recipes/platform-differences","docId":"recipes/platform-differences"},{"type":"link","label":"Jest testing guide","href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/recipes/jest-testing-guide","docId":"recipes/jest-testing-guide"}],"href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/category/recipes"},{"type":"category","label":"API Reference","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Hooks","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"useKeyboardAnimation","href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/api/hooks/use-keyboard-animation","docId":"api/hooks/use-keyboard-animation"},{"type":"link","label":"useKeyboardHandler","href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/api/hooks/use-keyboard-handler/","docId":"api/hooks/use-keyboard-handler/index"},{"type":"link","label":"useReanimatedKeyboardAnimation","href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/api/hooks/use-reanimated-keyboard-animation","docId":"api/hooks/use-reanimated-keyboard-animation"}]},{"type":"link","label":"KeyboardProvider","href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/api/keyboard-provider","docId":"api/keyboard-provider"},{"type":"link","label":"KeyboardControllerView","href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/api/keyboard-controller-view","docId":"api/keyboard-controller-view"},{"type":"link","label":"KeyboardGestureArea","href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/api/keyboard-gesture-area","docId":"api/keyboard-gesture-area"},{"type":"link","label":"KeyboardController","href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/api/keyboard-controller","docId":"api/keyboard-controller"},{"type":"link","label":"KeyboardEvents","href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/api/keyboard-events","docId":"api/keyboard-events"}],"href":"/react-native-keyboard-controller/pr-preview/pr-299/docs/1.6.0/category/api-reference"}]},"docs":{"api/hooks/use-keyboard-animation":{"id":"api/hooks/use-keyboard-animation","title":"useKeyboardAnimation","description":"useKeyboardAnimation is a hook which gives access to two animated values:","sidebar":"tutorialSidebar"},"api/hooks/use-keyboard-handler/index":{"id":"api/hooks/use-keyboard-handler/index","title":"useKeyboardHandler","description":"useKeyboardHandler is a hook that offers low-level but more powerful API in comparison to useKeyboardAnimation. Using this hook you are getting an access to keyboard lifecycle events and you can easily determine the moment of the beginning animation, the end of the animation and get keyboard position in every frame of the animation.","sidebar":"tutorialSidebar"},"api/hooks/use-reanimated-keyboard-animation":{"id":"api/hooks/use-reanimated-keyboard-animation","title":"useReanimatedKeyboardAnimation","description":"useReanimatedKeyboardAnimation is a hook which gives access to two reanimated values:","sidebar":"tutorialSidebar"},"api/keyboard-controller":{"id":"api/keyboard-controller","title":"KeyboardController","description":"KeyboardController is an object which has two functions:","sidebar":"tutorialSidebar"},"api/keyboard-controller-view":{"id":"api/keyboard-controller-view","title":"KeyboardControllerView","description":"A plain react-native View with some additional methods and props. Used internally in KeyboardProvider","sidebar":"tutorialSidebar"},"api/keyboard-events":{"id":"api/keyboard-events","title":"KeyboardEvents","description":"This library exposes 4 events which are available on all platforms:","sidebar":"tutorialSidebar"},"api/keyboard-gesture-area":{"id":"api/keyboard-gesture-area","title":"KeyboardGestureArea","description":"KeyboardGestureArea allows you to define a region on the screen, where gestures will control the keyboard position.","sidebar":"tutorialSidebar"},"api/keyboard-provider":{"id":"api/keyboard-provider","title":"KeyboardProvider","description":"KeyboardProvider should wrap your app. Underhood it works with KeyboardControllerView to receive events during keyboard movements, maps these events to Animated/Reanimated values and store them in context.","sidebar":"tutorialSidebar"},"guides/building-own-hook":{"id":"guides/building-own-hook","title":"Building own hook","description":"Default hooks may not perfectly fit in your app, because it changes/restores softInputMode on mount/unmount of the component where it\'s used. Though in deep stacks sometimes it may be important to have different softInputMode per screen, but by default react-navigation keeps previous screens mounted, so if you are using default useKeyboardAnimation hook, then all following screens will have softInputMode=adjustResize.","sidebar":"tutorialSidebar"},"guides/compatibility":{"id":"guides/compatibility","title":"Compatibility","description":"Compatibility of library with different react-native versions and architectures","sidebar":"tutorialSidebar"},"guides/first-animation":{"id":"guides/first-animation","title":"First animation","description":"To build your first animation you will need to use two hooks: useKeyboardAnimation or useReanimatedKeyboardAnimation.","sidebar":"tutorialSidebar"},"guides/interactive-keyboard":{"id":"guides/interactive-keyboard","title":"Interactive Keyboard","description":"This guide focuses on adding an ability to dismiss keyboard interactively. Below you can see a step by step guide which will explain how different pieces of the code work together.","sidebar":"tutorialSidebar"},"installation":{"id":"installation","title":"Installation","description":"Guide dedicated to installation process","sidebar":"tutorialSidebar"},"recipes/architecture":{"id":"recipes/architecture","title":"Architecture","description":"This library requires to wrap an app with KeyboardProvider component. It\'s needed because it stores animated values in context.","sidebar":"tutorialSidebar"},"recipes/jest-testing-guide":{"id":"recipes/jest-testing-guide","title":"Jest testing guide","description":"A testing-guide showing how to write unit-tests using jest","sidebar":"tutorialSidebar"},"recipes/platform-differences":{"id":"recipes/platform-differences","title":"Platforms capabilities and limitations","description":"This library relies on WindowInsetsCompat API on Android and keyboard listeners (NotificationCenter) on iOS.","sidebar":"tutorialSidebar"}}}')}}]);