"use strict";(self.webpackChunkconnect_docs=self.webpackChunkconnect_docs||[]).push([[3168],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=l(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[m]="string"==typeof t?t:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4971:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="About examples",s={unversionedId:"intro",id:"intro",title:"About examples",description:"Here are the automation examples and use cases of CONNECT Smart Home.",source:"@site/docs-examples/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs-examples/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"What is FAST IMPORT?",permalink:"/docs-examples/fast-import"}},p={},l=[{value:"\ud83d\udc4c Integration of third party",id:"-integration-of-third-party",level:2},{value:"\ud83d\udd17 Integration CONNECT into third party",id:"-integration-connect-into-third-party",level:2},{value:"\ud83d\udcbb Software to work with CONNECT",id:"-software-to-work-with-connect",level:2}],c={toc:l},m="wrapper";function d(t){let{components:e,...o}=t;return(0,a.kt)(m,(0,r.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"about-examples"},"About examples"),(0,a.kt)("p",null,"Here are the automation examples and use cases of ",(0,a.kt)("strong",{parentName:"p"},"CONNECT")," Smart Home."),(0,a.kt)("p",null,"You can easily try this examples in your own project. For that make the ",(0,a.kt)("inlineCode",{parentName:"p"},"FAST IMPORT")," to your project."),(0,a.kt)("h2",{id:"-integration-of-third-party"},"\ud83d\udc4c Integration of third party"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CONNECT")," is the widely scalable system which allows to connect ",(0,a.kt)("strong",{parentName:"p"},"not only our own")," peripheral blocks but a lot of ",(0,a.kt)("strong",{parentName:"p"},"third-part devices")," and services."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CONNECT Smart home integrations",src:n(6533).Z,width:"900",height:"600"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Examples of those integrations will be added in this ",(0,a.kt)("inlineCode",{parentName:"p"},"Examples")," section of the ",(0,a.kt)("strong",{parentName:"p"},"CONNECT Docs")," website.")),(0,a.kt)("h2",{id:"-integration-connect-into-third-party"},"\ud83d\udd17 Integration CONNECT into third party"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CONNECT")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/intro/"},"devices")," can be integrated into any third party systems whitch have the possibilities to communicate with our ",(0,a.kt)("a",{parentName:"p",href:"/docs/intro/"},"devices")," via ",(0,a.kt)("inlineCode",{parentName:"p"},"API"),"."),(0,a.kt)("p",null,"Supported interfaces to communicate with our devices: ",(0,a.kt)("strong",{parentName:"p"},"RS485, Ethernet, WiFi"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Full ",(0,a.kt)("inlineCode",{parentName:"p"},"APIs")," for each ",(0,a.kt)("strong",{parentName:"p"},"CONNECT")," device are described in ",(0,a.kt)("inlineCode",{parentName:"p"},"\ud83d\udd0c API for integration into third-party systems")," paragraph in ",(0,a.kt)("a",{parentName:"p",href:"/docs/intro/"},(0,a.kt)("inlineCode",{parentName:"a"},"Products"))," section of the ",(0,a.kt)("strong",{parentName:"p"},"CONNECT Docs")," website.")),(0,a.kt)("h2",{id:"-software-to-work-with-connect"},"\ud83d\udcbb Software to work with CONNECT"),(0,a.kt)("p",null,"Free and cross-platform:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows"),(0,a.kt)("li",{parentName:"ul"},"macOS"),(0,a.kt)("li",{parentName:"ul"},"Linux")),(0,a.kt)("p",null,"Only one software you need for configuring your ",(0,a.kt)("strong",{parentName:"p"},"CONNECT")," Smart Home is ",(0,a.kt)("inlineCode",{parentName:"p"},"CONNECT Configurator"),". You can download its last version by ",(0,a.kt)("a",{parentName:"p",href:"https://yoctoconnect.com/pages/iglass-smart-home-free-software-downloads"},"this link"),". "),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"App CONNECT Smart home",src:n(7586).Z,width:"1000",height:"600"}))),(0,a.kt)("p",null,"The kernel of our ",(0,a.kt)("strong",{parentName:"p"},"CONNECT")," Smart Home algorithm engine is Node-RED. It is event-driven, ",(0,a.kt)("strong",{parentName:"p"},"low-code"),", ",(0,a.kt)("strong",{parentName:"p"},"user-friendly")," visual programming and it's easy to understand both for ",(0,a.kt)("strong",{parentName:"p"},"IT specialists")," and for ",(0,a.kt)("strong",{parentName:"p"},"electricians"),". "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Our ",(0,a.kt)("strong",{parentName:"p"},"free apps")," and ",(0,a.kt)("strong",{parentName:"p"},"free WEB Interface")," are automatically synchronized with the system you are configuring. ")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"App CONNECT Smart home",src:n(9143).Z,width:"484",height:"851"}))),(0,a.kt)("p",null,"And yes, our software is ",(0,a.kt)("strong",{parentName:"p"},"free for integrators")," and it also hasn't any simulated limitations like the count of projects, users, rooms, devices and other limits."))}d.isMDXComponent=!0},9143:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/App-9235abc477186ccb3f03c4995f72c267.png"},7586:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/Configurator-746d82dcdfa4966e393485c494680143.png"},6533:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/Integrations_w-f89fc7ac25680e58a6a31ff8ad538b31.png"}}]);