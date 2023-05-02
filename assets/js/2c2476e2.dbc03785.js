"use strict";(self.webpackChunkconnect_docs=self.webpackChunkconnect_docs||[]).push([[488],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),p=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=p(a),k=r,c=m["".concat(u,".").concat(k)]||m[k]||d[k]||l;return a?n.createElement(c,o(o({ref:e},s),{},{components:a})):n.createElement(c,o({ref:e},s))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[m]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5162:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(t){let{children:e,hidden:a,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},e)}},4866:(t,e,a)=>{a.d(e,{Z:()=>y});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),i=a(6550),u=a(1980),p=a(7392),s=a(12);function m(t){return function(t){return r.Children.map(t,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function d(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??m(a);return function(t){const e=(0,p.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function k(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function c(t){let{queryString:e=!1,groupId:a}=t;const n=(0,i.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function g(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=d(t),[o,i]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!k({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[u,p]=c({queryString:a,groupId:n}),[m,g]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,s.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),N=(()=>{const t=u??m;return k({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{N&&i(N)}),[N]);return{selectedValue:o,selectValue:(0,r.useCallback)((t=>{if(!k({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);i(t),p(t),g(t)}),[p,g,l]),tabValues:l}}var N=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(t){let{className:e,block:a,selectedValue:i,selectValue:u,tabValues:p}=t;const s=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),d=t=>{const e=t.currentTarget,a=s.indexOf(e),n=p[a].value;n!==i&&(m(e),u(n))},k=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const a=s.indexOf(t.currentTarget)+1;e=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(t.currentTarget)-1;e=s[a]??s[s.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},e)},p.map((t=>{let{value:e,label:a,attributes:o}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,key:e,ref:t=>s.push(t),onKeyDown:k,onClick:d},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":i===e})}),a??e)})))}function f(t){let{lazy:e,children:a,selectedValue:n}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function v(t){const e=g(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(b,(0,n.Z)({},t,e)),r.createElement(f,(0,n.Z)({},t,e)))}function y(t){const e=(0,N.Z)();return r.createElement(v,(0,n.Z)({key:String(e)},t))}},3612:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={},u="W4 LED driver",p={unversionedId:"blocks/w4",id:"blocks/w4",title:"W4 LED driver",description:"Four-channel LED driver",source:"@site/docs/blocks/w4.md",sourceDirName:"blocks",slug:"/blocks/w4",permalink:"/docs/blocks/w4",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RS485 Interface",permalink:"/docs/blocks/rs485"},next:{title:"Examples",permalink:"/docs/category/examples"}},s={},m=[{value:"\ud83d\udc8e Possibilities",id:"-possibilities",level:3},{value:"\u2753 Description",id:"-description",level:2},{value:"\ud83d\udd27 Technical data",id:"-technical-data",level:3},{value:"\ud83d\udc41\u200d\ud83d\udde8 How to connect",id:"-how-to-connect",level:2},{value:"\ud83d\udd0c API for integration into third-party systems",id:"-api-for-integration-into-third-party-systems",level:2}],d={toc:m},k="wrapper";function c(t){let{components:e,...i}=t;return(0,r.kt)(k,(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"w4-led-driver"},"W4 LED driver"),(0,r.kt)("p",null,"Four-channel LED driver"),(0,r.kt)("h3",{id:"-possibilities"},"\ud83d\udc8e Possibilities"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PWM brightness control"),(0,r.kt)("li",{parentName:"ul"},"4x White, 2x Warm-Cold, 1x RGB or 1x RGBW connection"),(0,r.kt)("li",{parentName:"ul"},"Works with any loads from 12V to 24V"),(0,r.kt)("li",{parentName:"ul"},"Up to 150W load per channel")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"W4",src:a(1894).Z,width:"6006",height:"3996"})),(0,r.kt)("h2",{id:"-description"},"\u2753 Description"),(0,r.kt)("p",null,"W4 mosfet block intended for switching signals and elements of electrical circuits in automated control systems for lighting, climate and other electrical loads, in the fields of industry, housing and communal services and household services."),(0,r.kt)("h3",{id:"-technical-data"},"\ud83d\udd27 Technical data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"General"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Design"),(0,r.kt)("td",{parentName:"tr",align:null},"Universal housing for mounting on a DIN rail (width 2 din)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Degree of protection housing"),(0,r.kt)("td",{parentName:"tr",align:null},"IP20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Supply voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"10\u202625 VDC (12 or 24 V nominal)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Power consumption, no more"),(0,r.kt)("td",{parentName:"tr",align:null},"2.5 W")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number of mosfet outputs"),(0,r.kt)("td",{parentName:"tr",align:null},"4 (with PWM control)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum load power per channel"),(0,r.kt)("td",{parentName:"tr",align:null},"150 W")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum load current per channel"),(0,r.kt)("td",{parentName:"tr",align:null},"12 A (for 12 V load) ",(0,r.kt)("br",null)," 6 A (for 24 V load)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum total load current per block"),(0,r.kt)("td",{parentName:"tr",align:null},"12 A")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Interfaces"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"USB"),(0,r.kt)("td",{parentName:"tr",align:null},"Service connection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RS485**"),(0,r.kt)("td",{parentName:"tr",align:null},"YoctoBUS or Modbus RTU")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ethernet**"),(0,r.kt)("td",{parentName:"tr",align:null},"IEEE 802.3 10/100BASE-T (http, UDP)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WiFi**"),(0,r.kt)("td",{parentName:"tr",align:null},"IEEE 802.11 (http, UDP)")))),(0,r.kt)("p",null,"** Depending on unit configuration."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"YoctoBUS")," blocks: the default exchange protocol type is ",(0,r.kt)("inlineCode",{parentName:"li"},"YoctoBUS"),", initial configuration is not required."),(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"YoctoLAN")," units: when connecting to the network via ",(0,r.kt)("inlineCode",{parentName:"li"},"Ethernet"),", initial configuration is not required, when connected via WiFi, you must set the ",(0,r.kt)("strong",{parentName:"li"},"SSID and Password")," using the ",(0,r.kt)("inlineCode",{parentName:"li"},"CONNECT Configurator")," software."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To integrate the unit into third-party systems, the protocol and RS485 exchange rate, as well as network settings, are set through the free, cross-platform ",(0,r.kt)("inlineCode",{parentName:"p"},"CONNECT Configurator")," software.")),(0,r.kt)("h2",{id:"-how-to-connect"},"\ud83d\udc41\u200d\ud83d\udde8 How to connect"),(0,r.kt)("p",null,"Soon..."),(0,r.kt)("h2",{id:"-api-for-integration-into-third-party-systems"},"\ud83d\udd0c API for integration into third-party systems"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"General block control registers")),(0,r.kt)("p",null,"The block is controlled by setting and reading the values of the block registers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Register ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Register description"),(0,r.kt)("th",{parentName:"tr",align:null},"Write"),(0,r.kt)("th",{parentName:"tr",align:null},"Read"),(0,r.kt)("th",{parentName:"tr",align:null},"Range of values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Channel 1 brightness"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"0...100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Channel 2 brightness"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"0...100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Channel 3 brightness"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"0...100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Channel 4 brightness"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"0...100")))),(0,r.kt)("hr",null),(0,r.kt)(l.Z,{values:[{label:"RS485 ModbusRTU",value:"rs485_modbus"},{label:"RS485 YoctoBUS",value:"rs485_yocto"},{label:"LAN",value:"lan"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"rs485_modbus",mdxType:"TabItem"},(0,r.kt)("p",null,"RS485 setting registers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Register ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Register description"),(0,r.kt)("th",{parentName:"tr",align:null},"Write"),(0,r.kt)("th",{parentName:"tr",align:null},"Read"),(0,r.kt)("th",{parentName:"tr",align:null},"Range of values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"203**"),(0,r.kt)("td",{parentName:"tr",align:null},"BaudRate RS485"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"3-9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"206"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the Modbus block"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"1-247")))),(0,r.kt)("p",null,"** Correspondence of RS485 speed and value in register 203:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Speed, baud/s"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"4800")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"9600")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"19200")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"38400")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"57600")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"74880")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"115200")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is recommended to configure the RS485 parameters using the CONNECT Configurator software")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ModbusRTU mode")),(0,r.kt)("p",null,"The unit supports standard exchange via the ModbusRTU protocol."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reading")," the state of the register is carried out by the command ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Record")," of value in the register is carried out by the command ",(0,r.kt)("inlineCode",{parentName:"li"},"6"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://wikipedia.org/wiki/Modbus"},"More about the protocol ModbusRTU")))),(0,r.kt)(o.Z,{value:"rs485_yocto",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is recommended to configure the RS485 parameters using the CONNECT Configurator software")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"YoctoBUS mode")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"YoctoBUS")," protocol commands are in text form."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Writing a value to a register:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"I_aaa_set_rrr_vvvvv\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Register value request:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"I_aaa_state_rrr\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Block response to write value:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"O_aaa_set_rrr_vvvvv\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Block response to a value request:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"O_aaa_state_rrr_vvvvv\n")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"aaa")," - bus block address"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"rrr")," - register number"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"vvvvv")," - register value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Read register value"))),(0,r.kt)("p",null,"An example of requesting state 5 of a block register (block addres is 15):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"I_15_state_5\n/or/\nI_015_state_00005\n")),(0,r.kt)("p",null,"An example of block response with value 1 in register 5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"O_015_state_005_00001\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Write value to register"))),(0,r.kt)("p",null,"An example of setting the value 0 to register 16 (block id is 11):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"I_11_set_16_0\n/or/\nI_011_set_016_00000\n")),(0,r.kt)("p",null,"An example of a block response to setting the value 0 in register 16:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"O_011_set_016_00000\n"))),(0,r.kt)(o.Z,{value:"lan",mdxType:"TabItem"},"Block outputs are controlled by sending an HTTP GET request.",(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The network parameters of the unit are configured using the CONNECT Configurator software")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The structure of HTTP ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," requests for writing a value to a register")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Header"),(0,r.kt)("th",{parentName:"tr",align:null},"Ip address of the block"),(0,r.kt)("th",{parentName:"tr",align:null},"Team"),(0,r.kt)("th",{parentName:"tr",align:null},"Separator"),(0,r.kt)("th",{parentName:"tr",align:null},"Register number"),(0,r.kt)("th",{parentName:"tr",align:null},"Separator"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http://"),(0,r.kt)("td",{parentName:"tr",align:null},"192.168.130.150"),(0,r.kt)("td",{parentName:"tr",align:null},"/set"),(0,r.kt)("td",{parentName:"tr",align:null},"_"),(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"_"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("p",null,"In the example shown, ",(0,r.kt)("inlineCode",{parentName:"p"},"http://192.168.150.150/set_13_1"),' is set to "1" in block register 13.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Structure of HTTP ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," requests for reading block register value")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Header"),(0,r.kt)("th",{parentName:"tr",align:null},"Ip address of the block"),(0,r.kt)("th",{parentName:"tr",align:null},"Team"),(0,r.kt)("th",{parentName:"tr",align:null},"Separator"),(0,r.kt)("th",{parentName:"tr",align:null},"Register number"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http://"),(0,r.kt)("td",{parentName:"tr",align:null},"192.168.130.150"),(0,r.kt)("td",{parentName:"tr",align:null},"/state"),(0,r.kt)("td",{parentName:"tr",align:null},"_"),(0,r.kt)("td",{parentName:"tr",align:null},"13")))),(0,r.kt)("p",null,"In the example shown ",(0,r.kt)("inlineCode",{parentName:"p"},"http://192.168.130.150/state_13"),", the block register value 13 is requested."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The structure of the block response page to a ",(0,r.kt)("inlineCode",{parentName:"strong"},"GET")," request")),(0,r.kt)("p",null,"The body of the page (between the ",(0,r.kt)("inlineCode",{parentName:"p"},"<body>")," tags) contains:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Control=\u203313\u2033 Value=\u20331\u2033\n")),(0,r.kt)("p",null,"In the example shown, the block returned an HTML page with the text content ",(0,r.kt)("inlineCode",{parentName:"p"},"Control=\u203313\u2033 Value=\u20331\u2033"),", which means that register 13 of the block is set to '1'."))))}c.isMDXComponent=!0},1894:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/W4_L-ff12d6301613c9557b64e338b9580eab.jpg"}}]);