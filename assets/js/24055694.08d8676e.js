"use strict";(self.webpackChunkconnect_docs=self.webpackChunkconnect_docs||[]).push([[497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),u=n(1980),s=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=k({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==i&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function h(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},2865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={},u="RS485 Interface (Modbus RTU)",s={unversionedId:"blocks/rs485",id:"blocks/rs485",title:"RS485 Interface (Modbus RTU)",description:"One-channel RS485 interface extention",source:"@site/docs/blocks/rs485.md",sourceDirName:"blocks",slug:"/blocks/rs485",permalink:"/docs/blocks/rs485",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"R8 Relay",permalink:"/docs/blocks/r8"},next:{title:"W4 LED driver",permalink:"/docs/blocks/w4"}},c={},p=[{value:"\ud83d\udc8e Possibilities",id:"-possibilities",level:3},{value:"\u2753 Description",id:"-description",level:2},{value:"\ud83d\udd27 Technical data",id:"-technical-data",level:3},{value:"\ud83d\udc41\u200d\ud83d\udde8 How to connect",id:"-how-to-connect",level:2},{value:"\ud83d\udd0c API for integration into third-party systems",id:"-api-for-integration-into-third-party-systems",level:2}],d={toc:p},m="wrapper";function k(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rs485-interface-modbus-rtu"},"RS485 Interface (Modbus RTU)"),(0,r.kt)("p",null,"One-channel RS485 interface extention"),(0,r.kt)("h3",{id:"-possibilities"},"\ud83d\udc8e Possibilities"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Integration any RS485 devices up to 32 per block"),(0,r.kt)("li",{parentName:"ul"},"Supported MODBUS RTU"),(0,r.kt)("li",{parentName:"ul"},"Supported any Binary or ASCII RS485 protocols"),(0,r.kt)("li",{parentName:"ul"},"Isolated RS485 interface")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"RS485",src:n(1248).Z,width:"6006",height:"3996"})),(0,r.kt)("h2",{id:"-description"},"\u2753 Description"),(0,r.kt)("p",null,"RS485 interface block intended for integration third-party RS485 devices in automated control systems in the fields of industry, housing and communal services and household services."),(0,r.kt)("h3",{id:"-technical-data"},"\ud83d\udd27 Technical data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"General"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Design"),(0,r.kt)("td",{parentName:"tr",align:null},"Universal housing for mounting on a DIN rail (width 2 din)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Degree of protection housing"),(0,r.kt)("td",{parentName:"tr",align:null},"IP20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Supply voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"10\u202625 VDC (12 or 24 V nominal)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Power consumption, no more"),(0,r.kt)("td",{parentName:"tr",align:null},"2.5 W")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number of RS485 interfaces"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Isolated interface"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max number of RS485 devices"),(0,r.kt)("td",{parentName:"tr",align:null},"32")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Interfaces"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"USB"),(0,r.kt)("td",{parentName:"tr",align:null},"Service connection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RS485**"),(0,r.kt)("td",{parentName:"tr",align:null},"YoctoBUS protocol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Isolated RS485"),(0,r.kt)("td",{parentName:"tr",align:null},"Modbus RTU or Binary or ASCII")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ethernet**"),(0,r.kt)("td",{parentName:"tr",align:null},"IEEE 802.3 10/100BASE-T (http, UDP)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WiFi**"),(0,r.kt)("td",{parentName:"tr",align:null},"IEEE 802.11 (http, UDP)")))),(0,r.kt)("p",null,"** Depending on unit configuration."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"YoctoBUS")," blocks: the default exchange protocol type is ",(0,r.kt)("inlineCode",{parentName:"li"},"YoctoBUS"),", initial configuration is not required."),(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"YoctoLAN")," units: when connecting to the network via ",(0,r.kt)("inlineCode",{parentName:"li"},"Ethernet"),", initial configuration is not required, when connected via WiFi, you must set the ",(0,r.kt)("strong",{parentName:"li"},"SSID and Password")," using the ",(0,r.kt)("inlineCode",{parentName:"li"},"CONNECT Configurator")," software."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To integrate the unit into third-party systems, the protocol and RS485 exchange rate, as well as network settings, are set through the free, cross-platform ",(0,r.kt)("inlineCode",{parentName:"p"},"CONNECT Configurator")," software.")),(0,r.kt)("h2",{id:"-how-to-connect"},"\ud83d\udc41\u200d\ud83d\udde8 How to connect"),(0,r.kt)("p",null,"Soon..."),(0,r.kt)("h2",{id:"-api-for-integration-into-third-party-systems"},"\ud83d\udd0c API for integration into third-party systems"),(0,r.kt)("p",null,"The block is controlled by next APIs:"),(0,r.kt)("hr",null),(0,r.kt)(o.Z,{values:[{label:"RS485 YoctoBUS",value:"rs485_yocto"},{label:"LAN",value:"lan"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"rs485_yocto",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is recommended to configure the RS485 parameters using the CONNECT Configurator software")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"YoctoBUS mode")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"YoctoBUS")," protocol commands are in text form."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Writing an ASCII string to external RS485 (RS485 ASCII mode):")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"I_aaa_setRS_R1A_vvvvv\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Writing HEX value to external RS485 (RS485 HEX mode):")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"I_aaa_setRS_R1H_vvvvv\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Reading last ASCII string from external RS485 (RS485 ASCII mode):")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"I_aaa_stateRS_R1A_vvvvv\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Reading last HEX value from external RS485 (RS485 HEX mode):")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"I_aaa_stateRS_R1H_vvvvv\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Response when an ASCII string is received from external RS485 (RS485 ASCII mode):")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"A_aaa_stateRS_R1A_vvvvv\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Response when HEX value is received from external RS485 (RS485 HEX mode):")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"A_aaa_stateRS_R1H_vvvvv\n")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"aaa")," - bus block address"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"vvvvv")," - HEX value / ASCII string"))),(0,r.kt)(l.Z,{value:"lan",mdxType:"TabItem"},"Soon...")))}k.isMDXComponent=!0},1248:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/RS485_L-ec78030ff959633a11cf707be1a5d164.jpg"}}]);