"use strict";(self.webpackChunkconnect_docs=self.webpackChunkconnect_docs||[]).push([[744],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,g=d["".concat(s,".").concat(f)]||d[f]||m[f]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=n(7462),o=(n(7294),n(4137));const r={sidebar_position:1},i="Loxone",p={unversionedId:"integration-into-third-party/loxone",id:"integration-into-third-party/loxone",title:"Loxone",description:"\ud83d\udd0cIntegration via RS485 interface",source:"@site/docs-examples/integration-into-third-party/loxone.md",sourceDirName:"integration-into-third-party",slug:"/integration-into-third-party/loxone",permalink:"/ru/docs-examples/integration-into-third-party/loxone",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Integration CONNECT into third party",permalink:"/ru/docs-examples/category/integration-connect-into-third-party"},next:{title:"Control4",permalink:"/ru/docs-examples/integration-into-third-party/control4"}},s={},l=[{value:"\ud83d\udd0cIntegration via RS485 interface",id:"integration-via-rs485-interface",level:2},{value:"\ud83d\udcbb Integration via LAN",id:"-integration-via-lan",level:2}],c={toc:l},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"loxone"},"Loxone"),(0,o.kt)("h2",{id:"integration-via-rs485-interface"},"\ud83d\udd0cIntegration via RS485 interface"),(0,o.kt)("p",null,"To integrate any ",(0,o.kt)("strong",{parentName:"p"},"CONNECT")," smart blocks into Loxone system via RS485 interface:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Plug in USB between your PC and the ",(0,o.kt)("strong",{parentName:"p"},"CONNECT")," smart block\n",(0,o.kt)("img",{alt:"CONNECT to Loxone",src:n(6562).Z,width:"1201",height:"799"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch ",(0,o.kt)("inlineCode",{parentName:"p"},"CONNECT Configurator")," app on your PC"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can download last version of  ",(0,o.kt)("inlineCode",{parentName:"p"},"CONNECT Configurator")," by ",(0,o.kt)("a",{parentName:"p",href:"/software"},"this link"))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select your ",(0,o.kt)("strong",{parentName:"p"},"CONNECT")," smart device in the list of found devices\n",(0,o.kt)("img",{alt:"CONNECT to Loxone",src:n(4675).Z,width:"1920",height:"990"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"YoctoBUS")," setting to ",(0,o.kt)("inlineCode",{parentName:"p"},"Off"),"\n",(0,o.kt)("img",{alt:"CONNECT to Loxone",src:n(6347).Z,width:"1920",height:"990"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set needed ",(0,o.kt)("inlineCode",{parentName:"p"},"Bus address")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Bus speed"),"\n",(0,o.kt)("img",{alt:"CONNECT to Loxone",src:n(6159).Z,width:"1920",height:"990"})))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Address should be the unique for each RS485 device on the bus. However the Bus speed should be the same.")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"Baudrate")," the same like in your RS485 settings of Loxone RS485 Extention\n",(0,o.kt)("img",{alt:"CONNECT to Loxone",src:n(4720).Z,width:"1920",height:"1020"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Disconnect USB and connect Loxone RS485 Extension with ",(0,o.kt)("strong",{parentName:"p"},"CONNECT")," smart block via RS485")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Loxone Config")," add new ",(0,o.kt)("inlineCode",{parentName:"p"},"sensor")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"actuator")," (depends of type of the ",(0,o.kt)("strong",{parentName:"p"},"CONNECT")," block you integrating) in RS485 Extention section\n",(0,o.kt)("img",{alt:"CONNECT to Loxone",src:n(6765).Z,width:"1920",height:"1020"}),"\n",(0,o.kt)("img",{alt:"CONNECT to Loxone",src:n(9985).Z,width:"1920",height:"1020"}),"\n",(0,o.kt)("img",{alt:"CONNECT to Loxone",src:n(7792).Z,width:"1920",height:"1020"}),"\n",(0,o.kt)("img",{alt:"CONNECT to Loxone",src:n(972).Z,width:"1920",height:"1020"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write ",(0,o.kt)("inlineCode",{parentName:"p"},"ON")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OFF")," comands in your Loxone project for each channel of ",(0,o.kt)("strong",{parentName:"p"},"CONNECT")," block"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Full API and RS485 comands are represented in ",(0,o.kt)("inlineCode",{parentName:"p"},"API")," sections for every ",(0,o.kt)("a",{parentName:"p",href:"/docs/intro/"},(0,o.kt)("strong",{parentName:"a"},"CONNECT")," smart block"))),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"That's all. Set any automation logic in your Loxone project using added ",(0,o.kt)("strong",{parentName:"li"},"CONNECT")," RS485 devices")),(0,o.kt)("h2",{id:"-integration-via-lan"},"\ud83d\udcbb Integration via LAN"),(0,o.kt)("p",null,"Soon..."))}m.isMDXComponent=!0},6562:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-a963f54ffc3e0606cc08b36fd1cdf58c.jpg"},4675:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-e5443649b0e7b0d0febcc751b3ebc957.png"},6347:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4-5f919acffff917b3dbfaef6137ccfba6.png"},6159:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/5-6cd154efbf2dbfc83d51e461ba50c2f4.png"},4720:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/6-a6e92b5a6bc4f4eb2aad5effff7df93e.png"},6765:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/8_1-f7826ff051f9370a3e4759d64fdef297.png"},9985:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/8_2-0667355a9c46ec373a8170060c321473.png"},7792:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/8_3-f5c3761855d3f79fe0c08e6a41a10e10.png"},972:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/8_4-fc9b1cfdb533f9ce25b3f514ee40ed94.png"}}]);