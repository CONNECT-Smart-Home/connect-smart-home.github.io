"use strict";(self.webpackChunkconnect_docs=self.webpackChunkconnect_docs||[]).push([[119],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(a),d=r,k=s["".concat(i,".").concat(d)]||s[d]||m[d]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[s]="string"==typeof e?e:r,o[1]=u;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),u=a(6550),i=a(1980),p=a(7392),c=a(12);function s(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??s(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,p]=k({queryString:a,groupId:n}),[s,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),v=(()=>{const e=i??s;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),p(e),b(e)}),[p,b,l]),tabValues:l}}var v=a(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:u,selectValue:i,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==u&&(s(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",N.tabItem,o?.className,{"tabs__item--active":u===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function h(e){const t=(0,v.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},651:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7294),r=a(5999);let l="";function o(){window.open(l).print()}function u(e){let{path:t}=e;return l=t,n.createElement("div",null,n.createElement("button",{class:"button button--secondary",onClick:o}," ",n.createElement(r.Z,null,"Print this scheme")," \u2934\ufe0f"))}},6290:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7294),r=a(5999);let l="";function o(){window.print()}function u(e){let{path:t}=e;return l=t,n.createElement("div",null,n.createElement("button",{class:"button button--secondary",onClick:o}," \ud83d\udcc3 ",n.createElement(r.Z,null,"Print / Download PDF Datasheet")))}},1358:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162),u=(a(651),a(6290));const i={},p="RS485 \u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 (Modbus RTU)",c={unversionedId:"blocks/rs485",id:"blocks/rs485",title:"RS485 \u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 (Modbus RTU)",description:"\u041e\u0434\u043d\u043e\u043a\u0430\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0431\u043b\u043e\u043a RS485",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/blocks/rs485.md",sourceDirName:"blocks",slug:"/blocks/rs485",permalink:"/ru/docs/blocks/rs485",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"R8 \u0420\u0435\u043b\u0435",permalink:"/ru/docs/blocks/r8"},next:{title:"W4 LED \u0434\u0440\u0430\u0439\u0432\u0435\u0440",permalink:"/ru/docs/blocks/w4"}},s={},m=[{value:"\ud83d\udc8e \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438",id:"-\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438",level:3},{value:"\u2753 \u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"-\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",level:2},{value:"\ud83d\udd27 \u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",id:"-\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435-\u0434\u0430\u043d\u043d\u044b\u0435",level:3},{value:"\ud83d\udc41\u200d\ud83d\udde8 \u0421\u0445\u0435\u043c\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u0431\u043b\u043e\u043a\u0430",id:"-\u0441\u0445\u0435\u043c\u044b-\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439-\u0431\u043b\u043e\u043a\u0430",level:2},{value:"\ud83d\udd0c API \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",id:"-api-\u0434\u043b\u044f-\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438-\u0432-\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435-\u0441\u0438\u0441\u0442\u0435\u043c\u044b",level:2}],d={toc:m},k="wrapper";function b(e){let{components:t,...i}=e;return(0,r.kt)(k,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rs485-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441-modbus-rtu"},"RS485 \u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 (Modbus RTU)"),(0,r.kt)("p",null,"\u041e\u0434\u043d\u043e\u043a\u0430\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0431\u043b\u043e\u043a RS485"),(0,r.kt)(u.Z,{mdxType:"PrintPage"}," "),(0,r.kt)("h3",{id:"-\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438"},"\ud83d\udc8e \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u043b\u044e\u0431\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 RS485 \u0434\u043e 32 \u043d\u0430 \u0431\u043b\u043e\u043a"),(0,r.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f MODBUS RTU"),(0,r.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043b\u044e\u0431\u044b\u0435 HEX \u0438\u043b\u0438 ASCII \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u044b RS485"),(0,r.kt)("li",{parentName:"ul"},"\u0418\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 RS485")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"RS485",src:a(1248).Z,width:"6006",height:"3996"})),(0,r.kt)("h2",{id:"-\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},"\u2753 \u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("p",null,"\u0411\u043b\u043e\u043a RS485 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 RS485 \u0432 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0432 \u0441\u0444\u0435\u0440\u0430\u0445 \u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u0436\u0438\u043b\u0438\u0449\u043d\u043e-\u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u0430 \u0438 \u0431\u044b\u0442\u043e\u0432\u043e\u0433\u043e \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f."),(0,r.kt)("h3",{id:"-\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435-\u0434\u0430\u043d\u043d\u044b\u0435"},"\ud83d\udd27 \u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u041e\u0431\u0449\u0438\u0435"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0414\u0438\u0437\u0430\u0439\u043d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u0440\u043f\u0443\u0441 \u0434\u043b\u044f \u043c\u043e\u043d\u0442\u0430\u0436\u0430 \u043d\u0430 DIN-\u0440\u0435\u0439\u043a\u0443 (\u0448\u0438\u0440\u0438\u043d\u0430 2 din)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0421\u0442\u0435\u043f\u0435\u043d\u044c \u0437\u0430\u0449\u0438\u0442\u044b \u043a\u043e\u0440\u043f\u0443\u0441\u0430"),(0,r.kt)("td",{parentName:"tr",align:null},"IP20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u041d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435 \u043f\u0438\u0442\u0430\u043d\u0438\u044f"),(0,r.kt)("td",{parentName:"tr",align:null},"10\u202625 \u0412 \u043f\u043e\u0441\u0442. \u0442\u043e\u043a\u0430 (\u043d\u043e\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u043e 12 \u0438\u043b\u0438 24 \u0412)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u041f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0435\u043c\u0430\u044f \u043c\u043e\u0449\u043d\u043e\u0441\u0442\u044c, \u043d\u0435 \u0431\u043e\u043b\u0435\u0435"),(0,r.kt)("td",{parentName:"tr",align:null},"2,5 \u0412\u0442")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432 RS485"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0418\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0414\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 RS485"),(0,r.kt)("td",{parentName:"tr",align:null},"32")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"USB"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0421\u0435\u0440\u0432\u0438\u0441\u043d\u044b\u0439")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RS485**"),(0,r.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b YoctoBUS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0418\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 RS485"),(0,r.kt)("td",{parentName:"tr",align:null},"\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u044b Modbus RTU, HEX \u0438\u043b\u0438 ASCII")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ethernet**"),(0,r.kt)("td",{parentName:"tr",align:null},"IEEE 802.3 10/100BASE-T (http, UDP)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Wi-Fi**"),(0,r.kt)("td",{parentName:"tr",align:null},"IEEE 802.11 (http, UDP)")))),(0,r.kt)("p",null,"** \u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u0414\u043b\u044f \u0431\u043b\u043e\u043a\u043e\u0432 ",(0,r.kt)("inlineCode",{parentName:"li"},"YoctoBUS"),": \u0442\u0438\u043f \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u043e\u0431\u043c\u0435\u043d\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u2013 ",(0,r.kt)("inlineCode",{parentName:"li"},"YoctoBUS"),", \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f."),(0,r.kt)("li",{parentName:"ul"},"\u0414\u043b\u044f \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 ",(0,r.kt)("inlineCode",{parentName:"li"},"YoctoLAN"),": \u043f\u0440\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u043a \u0441\u0435\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 ",(0,r.kt)("inlineCode",{parentName:"li"},"Ethernet")," \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f, \u043f\u0440\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u0447\u0435\u0440\u0435\u0437 WiFi \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u0434\u0430\u0442\u044c ",(0,r.kt)("strong",{parentName:"li"},"SSID \u0438 \u043f\u0430\u0440\u043e\u043b\u044c")," \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b ",(0,r.kt)("inlineCode",{parentName:"li"},"CONNECT Configurator"),"."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u0414\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0431\u043b\u043e\u043a\u0430 \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u0438 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043e\u0431\u043c\u0435\u043d\u0430 RS485, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u0435\u0442\u0435\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0437\u0430\u0434\u0430\u044e\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u0440\u043e\u0441\u0441\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u041f\u041e CONNECT Configurator.")),(0,r.kt)("h2",{id:"-\u0441\u0445\u0435\u043c\u044b-\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439-\u0431\u043b\u043e\u043a\u0430"},"\ud83d\udc41\u200d\ud83d\udde8 \u0421\u0445\u0435\u043c\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u0431\u043b\u043e\u043a\u0430"),(0,r.kt)("p",null,"\u0421\u043a\u043e\u0440\u043e..."),(0,r.kt)("h2",{id:"-api-\u0434\u043b\u044f-\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438-\u0432-\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435-\u0441\u0438\u0441\u0442\u0435\u043c\u044b"},"\ud83d\udd0c API \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b"),(0,r.kt)("p",null,"\u0411\u043b\u043e\u043a \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 API:"),(0,r.kt)("hr",null),(0,r.kt)(l.Z,{values:[{label:"RS485 YoctoBUS",value:"rs485_yocto"},{label:"LAN",value:"lan"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"rs485_yocto",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b RS485 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f CONNECT Configurator.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0420\u0435\u0436\u0438\u043c YoctoBUS")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u041a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"YoctoBUS")," \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0432 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0439 \u0444\u043e\u0440\u043c\u0435."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0438\u0441\u044c \u0441\u0442\u0440\u043e\u043a\u0438 ASCII \u0432\u043e \u0432\u043d\u0435\u0448\u043d\u0438\u0439 RS485 (\u0440\u0435\u0436\u0438\u043c RS485 ASCII):")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"I_aaa_setRS_R1A_vvvvv\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0438\u0441\u044c HEX \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u043e \u0432\u043d\u0435\u0448\u043d\u0438\u0439 RS485 (\u0440\u0435\u0436\u0438\u043c RS485 HEX):")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"I_aaa_setRS_R1H_vvvvv\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u0427\u0442\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 ASCII \u0441 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e RS485 (\u0440\u0435\u0436\u0438\u043c RS485 ASCII):")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"I_aaa_stateRS_R1A_vvvvv\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u0427\u0442\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e HEX \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0441 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e RS485 (\u0440\u0435\u0436\u0438\u043c RS485 HEX):")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"I_aaa_stateRS_R1H_vvvvv\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u041e\u0442\u0432\u0435\u0442 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0441\u0442\u0440\u043e\u043a\u0438 ASCII \u0441 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e RS485 (\u0440\u0435\u0436\u0438\u043c RS485 ASCII):")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"A_aaa_stateRS_R1A_vvvvv\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u041e\u0442\u0432\u0435\u0442 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 HEX \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0441 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e RS485 (\u0440\u0435\u0436\u0438\u043c RS485 HEX):")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"A_aaa_stateRS_R1H_vvvvv\n")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"aaa")," - \u0430\u0434\u0440\u0435\u0441 \u0431\u043b\u043e\u043a\u0430 \u0432 \u0448\u0438\u043d\u0435"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"vvvvv")," - HEX \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 / ASCII \u0441\u0442\u0440\u043e\u043a\u0430"))),(0,r.kt)(o.Z,{value:"lan",mdxType:"TabItem"},"\u0421\u043a\u043e\u0440\u043e...")),(0,r.kt)(u.Z,{mdxType:"PrintPage"}," "))}b.isMDXComponent=!0},1248:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/RS485_L-ec78030ff959633a11cf707be1a5d164.jpg"}}]);