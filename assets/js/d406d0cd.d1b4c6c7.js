"use strict";(self.webpackChunkconnect_docs=self.webpackChunkconnect_docs||[]).push([[158],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,o(o({ref:e},s),{},{components:n})):a.createElement(k,o({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[d]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},425:(t,e,n)=>{n.d(e,{Z:()=>o});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(t){let{children:e,hidden:n,className:o}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},e)}},3992:(t,e,n)=>{n.d(e,{Z:()=>y});var a=n(7462),r=n(7294),l=n(6010),o=n(2957),i=n(6550),u=n(5238),p=n(3609),s=n(2560);function d(t){return function(t){return r.Children.map(t,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(t).map((t=>{let{props:{value:e,label:n,attributes:a,default:r}}=t;return{value:e,label:n,attributes:a,default:r}}))}function m(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??d(n);return function(t){const e=(0,p.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function c(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function k(t){let{queryString:e=!1,groupId:n}=t;const a=(0,i.k6)(),l=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(a.location.search);e.set(l,t),a.replace({...a.location,search:e.toString()})}),[l,a])]}function g(t){const{defaultValue:e,queryString:n=!1,groupId:a}=t,l=m(t),[o,i]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=n.find((t=>t.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:l}))),[u,p]=k({queryString:n,groupId:a}),[d,g]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,l]=(0,s.Nk)(n);return[a,(0,r.useCallback)((t=>{n&&l.set(t)}),[n,l])]}({groupId:a}),N=(()=>{const t=u??d;return c({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{N&&i(N)}),[N]);return{selectedValue:o,selectValue:(0,r.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);i(t),p(t),g(t)}),[p,g,l]),tabValues:l}}var N=n(1048);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(t){let{className:e,block:n,selectedValue:i,selectValue:u,tabValues:p}=t;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=t=>{const e=t.currentTarget,n=s.indexOf(e),a=p[n].value;a!==i&&(d(e),u(a))},c=t=>{let e=null;switch(t.key){case"Enter":m(t);break;case"ArrowRight":{const n=s.indexOf(t.currentTarget)+1;e=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(t.currentTarget)-1;e=s[n]??s[s.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},e)},p.map((t=>{let{value:e,label:n,attributes:o}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,key:e,ref:t=>s.push(t),onKeyDown:c,onClick:m},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":i===e})}),n??e)})))}function f(t){let{lazy:e,children:n,selectedValue:a}=t;if(n=Array.isArray(n)?n:[n],e){const t=n.find((t=>t.props.value===a));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function v(t){const e=g(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(b,(0,a.Z)({},t,e)),r.createElement(f,(0,a.Z)({},t,e)))}function y(t){const e=(0,N.Z)();return r.createElement(v,(0,a.Z)({key:String(e)},t))}},929:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(7294),r=n(7325);let l="";function o(){window.open(l).print()}function i(t){let{path:e}=t;return l=e,a.createElement("div",null,a.createElement("button",{class:"button button--secondary",onClick:o}," ",a.createElement(r.Z,null,"Print this scheme")," \u2934\ufe0f"))}},1079:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(7294),r=n(7325);let l="";function o(){window.print()}function i(t){let{path:e}=t;return l=e,a.createElement("div",null,a.createElement("button",{class:"button button--secondary",onClick:o}," \ud83d\udcc3 ",a.createElement(r.Z,null,"Print / Download PDF Datasheet")))}},140:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>u,metadata:()=>s,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),l=n(3992),o=n(425),i=(n(929),n(1079));const u={},p="DI4 OC Open collector inputs",s={unversionedId:"blocks/di4oc",id:"blocks/di4oc",title:"DI4 OC Open collector inputs",description:"Four-channel digital open-collector / open-drain inputs block",source:"@site/docs/blocks/di4oc.md",sourceDirName:"blocks",slug:"/blocks/di4oc",permalink:"/docs/blocks/di4oc",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DI4 Digital inputs",permalink:"/docs/blocks/di4"},next:{title:"DMX Interface",permalink:"/docs/blocks/dmx"}},d={},m=[{value:"\ud83d\udc8e Possibilities",id:"-possibilities",level:3},{value:"\u2753 Description",id:"-description",level:2},{value:"\ud83d\udd27 Technical data",id:"-technical-data",level:3},{value:"\ud83d\udc41\u200d\ud83d\udde8 How to connect",id:"-how-to-connect",level:2},{value:"\ud83d\udd0c API for integration into third-party systems",id:"-api-for-integration-into-third-party-systems",level:2}],c={toc:m},k="wrapper";function g(t){let{components:e,...u}=t;return(0,r.kt)(k,(0,a.Z)({},c,u,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"di4-oc-open-collector-inputs"},"DI4 OC Open collector inputs"),(0,r.kt)("p",null,"Four-channel digital open-collector / open-drain inputs block "),(0,r.kt)(i.Z,{mdxType:"PrintPage"}," "),(0,r.kt)("h3",{id:"-possibilities"},"\ud83d\udc8e Possibilities"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Works with any open collector or open drain switches, sensors etc."),(0,r.kt)("li",{parentName:"ul"},"Easy 2-wire connection"),(0,r.kt)("li",{parentName:"ul"},"Low delay - just 2 ms")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DI4 OC",src:n(3200).Z,width:"6006",height:"3996"})),(0,r.kt)("h2",{id:"-description"},"\u2753 Description"),(0,r.kt)("p",null,"DI4 digital open collector or open drain inputs block intended for receiving signals from switches, sensors etc. in automated control systems in the fields of industry, housing and communal services and household services."),(0,r.kt)("h3",{id:"-technical-data"},"\ud83d\udd27 Technical data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"General"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Design"),(0,r.kt)("td",{parentName:"tr",align:null},"Universal housing for mounting on a DIN rail (width 2 din)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Degree of protection housing"),(0,r.kt)("td",{parentName:"tr",align:null},"IP20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Supply voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"20\u202625 VDC (24 V nominal)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Power consumption, no more"),(0,r.kt)("td",{parentName:"tr",align:null},"2.5 W")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number of digital inputs"),(0,r.kt)("td",{parentName:"tr",align:null},"4 (for open collector or open drain connections)")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Interfaces"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"USB"),(0,r.kt)("td",{parentName:"tr",align:null},"Service connection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RS485**"),(0,r.kt)("td",{parentName:"tr",align:null},"YoctoBUS or Modbus RTU")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ethernet**"),(0,r.kt)("td",{parentName:"tr",align:null},"IEEE 802.3 10/100BASE-T (http, UDP)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WiFi**"),(0,r.kt)("td",{parentName:"tr",align:null},"IEEE 802.11 (http, UDP)")))),(0,r.kt)("p",null,"** Depending on unit configuration."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"YoctoBUS")," blocks: the default exchange protocol type is ",(0,r.kt)("inlineCode",{parentName:"li"},"YoctoBUS"),", initial configuration is not required."),(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"YoctoLAN")," units: when connecting to the network via ",(0,r.kt)("inlineCode",{parentName:"li"},"Ethernet"),", initial configuration is not required, when connected via WiFi, you must set the ",(0,r.kt)("strong",{parentName:"li"},"SSID and Password")," using the ",(0,r.kt)("inlineCode",{parentName:"li"},"CONNECT Configurator")," software."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To integrate the unit into third-party systems, the protocol and RS485 exchange rate, as well as network settings, are set through the free, cross-platform ",(0,r.kt)("inlineCode",{parentName:"p"},"CONNECT Configurator")," software.")),(0,r.kt)("h2",{id:"-how-to-connect"},"\ud83d\udc41\u200d\ud83d\udde8 How to connect"),(0,r.kt)("p",null,"Soon..."),(0,r.kt)("h2",{id:"-api-for-integration-into-third-party-systems"},"\ud83d\udd0c API for integration into third-party systems"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"General block control registers")),(0,r.kt)("p",null,"The block is controlled by setting and reading the values of the block registers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Register ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Register description"),(0,r.kt)("th",{parentName:"tr",align:null},"Write"),(0,r.kt)("th",{parentName:"tr",align:null},"Read"),(0,r.kt)("th",{parentName:"tr",align:null},"Range of values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Channel 1 state"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"0, 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Channel 2 state"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"0, 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Channel 3 state"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"0, 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Channel 4 state"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"0, 1")))),(0,r.kt)("hr",null),(0,r.kt)(l.Z,{values:[{label:"RS485 ModbusRTU",value:"rs485_modbus"},{label:"RS485 YoctoBUS",value:"rs485_yocto"},{label:"LAN",value:"lan"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"rs485_modbus",mdxType:"TabItem"},(0,r.kt)("p",null,"RS485 setting registers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Register ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Register description"),(0,r.kt)("th",{parentName:"tr",align:null},"Write"),(0,r.kt)("th",{parentName:"tr",align:null},"Read"),(0,r.kt)("th",{parentName:"tr",align:null},"Range of values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"203**"),(0,r.kt)("td",{parentName:"tr",align:null},"BaudRate RS485"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"3-9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"206"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the Modbus block"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"1-247")))),(0,r.kt)("p",null,"** Correspondence of RS485 speed and value in register 203:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Speed, baud/s"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"4800")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"9600")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"19200")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"38400")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"57600")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"74880")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"115200")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is recommended to configure the RS485 parameters using the CONNECT Configurator software")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ModbusRTU mode")),(0,r.kt)("p",null,"The unit supports standard exchange via the ModbusRTU protocol."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reading")," the state of the register is carried out by the command ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Record")," of value in the register is carried out by the command ",(0,r.kt)("inlineCode",{parentName:"li"},"6"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://wikipedia.org/wiki/Modbus"},"More about the protocol ModbusRTU")))),(0,r.kt)(o.Z,{value:"rs485_yocto",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is recommended to configure the RS485 parameters using the CONNECT Configurator software")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"YoctoBUS mode")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"YoctoBUS")," protocol commands are in text form."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Writing a value to a register:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"I_aaa_set_rrr_vvvvv\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Register value request:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"I_aaa_state_rrr\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Block response to write value:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"O_aaa_set_rrr_vvvvv\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Block response to a value request:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"O_aaa_state_rrr_vvvvv\n")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"aaa")," - bus block address"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"rrr")," - register number"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"vvvvv")," - register value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Read register value"))),(0,r.kt)("p",null,"An example of requesting state 5 of a block register (block address is 15):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"I_15_state_5\n/or/\nI_015_state_00005\n")),(0,r.kt)("p",null,"An example of block response with value 1 in register 5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"O_015_state_005_00001\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Receiving the changing value in the register"))),(0,r.kt)("p",null,"An example of receiving message from block when in the 2th register value was changed  to 1 (block address is 11):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"A_011_state_002_00001\n"))),(0,r.kt)(o.Z,{value:"lan",mdxType:"TabItem"},"Block outputs are controlled by sending an HTTP GET request.",(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The network parameters of the unit are configured using the CONNECT Configurator software")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Structure of HTTP ",(0,r.kt)("inlineCode",{parentName:"strong"},"GET")," requests for reading block register value"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Header"),(0,r.kt)("th",{parentName:"tr",align:null},"Ip address of the block"),(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Separator"),(0,r.kt)("th",{parentName:"tr",align:null},"Register number"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http://"),(0,r.kt)("td",{parentName:"tr",align:null},"192.168.130.150"),(0,r.kt)("td",{parentName:"tr",align:null},"/state"),(0,r.kt)("td",{parentName:"tr",align:null},"_"),(0,r.kt)("td",{parentName:"tr",align:null},"13")))),(0,r.kt)("p",null,"In the example shown ",(0,r.kt)("inlineCode",{parentName:"p"},"http://192.168.130.150/state_13"),", the block register value 13 is requested."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The structure of the block response page to a ",(0,r.kt)("inlineCode",{parentName:"strong"},"GET")," request")),(0,r.kt)("p",null,"The body of the page (between the ",(0,r.kt)("inlineCode",{parentName:"p"},"<body>")," tags) contains:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Control=\u203313\u2033 Value=\u20331\u2033\n")),(0,r.kt)("p",null,"In the example shown, the block returned an HTML page with the text content ",(0,r.kt)("inlineCode",{parentName:"p"},"Control=\u203313\u2033 Value=\u20331\u2033"),", which means that register 13 of the block is set to '1'."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Structure of UDP package transmitted by block when the value in the register is changing"))),(0,r.kt)("p",null,"The text of the UDP package contains:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Control=\u20332\u2033 Value=\u20331\u2033\n")),(0,r.kt)("p",null,"In the example shown, the block sent an UDP package with the text content ",(0,r.kt)("inlineCode",{parentName:"p"},"Control=\u20332\u2033 Value=\u20331\u2033"),", which means that value in the register 2 was changed to '1'."))),(0,r.kt)(i.Z,{mdxType:"PrintPage"}," "))}g.isMDXComponent=!0},3200:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/DI4OC_L-41e06a2a26a29c31b54b31173054473d.jpg"}}]);