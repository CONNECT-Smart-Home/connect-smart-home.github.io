"use strict";(self.webpackChunkconnect_docs=self.webpackChunkconnect_docs||[]).push([[723],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):u(u({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},k="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=p(a),s=r,N=k["".concat(o,".").concat(s)]||k[s]||d[s]||l;return a?n.createElement(N,u(u({ref:e},m),{},{components:a})):n.createElement(N,u({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,u=new Array(l);u[0]=s;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[k]="string"==typeof t?t:r,u[1]=i;for(var p=2;p<l;p++)u[p]=a[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5162:(t,e,a)=>{a.d(e,{Z:()=>u});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function u(t){let{children:e,hidden:a,className:u}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,u),hidden:a},e)}},4866:(t,e,a)=>{a.d(e,{Z:()=>v});var n=a(7462),r=a(7294),l=a(6010),u=a(2466),i=a(6550),o=a(1980),p=a(7392),m=a(12);function k(t){return function(t){return r.Children.map(t,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function d(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??k(a);return function(t){const e=(0,p.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function s(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function N(t){let{queryString:e=!1,groupId:a}=t;const n=(0,i.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function c(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=d(t),[u,i]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!s({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[o,p]=N({queryString:a,groupId:n}),[k,c]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,m.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),b=(()=>{const t=o??k;return s({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:u,selectValue:(0,r.useCallback)((t=>{if(!s({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);i(t),p(t),c(t)}),[p,c,l]),tabValues:l}}var b=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(t){let{className:e,block:a,selectedValue:i,selectValue:o,tabValues:p}=t;const m=[],{blockElementScrollPositionUntilNextRender:k}=(0,u.o5)(),d=t=>{const e=t.currentTarget,a=m.indexOf(e),n=p[a].value;n!==i&&(k(e),o(n))},s=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const a=m.indexOf(t.currentTarget)+1;e=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(t.currentTarget)-1;e=m[a]??m[m.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},e)},p.map((t=>{let{value:e,label:a,attributes:u}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,key:e,ref:t=>m.push(t),onKeyDown:s,onClick:d},u,{className:(0,l.Z)("tabs__item",g.tabItem,u?.className,{"tabs__item--active":i===e})}),a??e)})))}function f(t){let{lazy:e,children:a,selectedValue:n}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function y(t){const e=c(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(h,(0,n.Z)({},t,e)),r.createElement(f,(0,n.Z)({},t,e)))}function v(t){const e=(0,b.Z)();return r.createElement(y,(0,n.Z)({key:String(e)},t))}},9657:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>N,frontMatter:()=>i,metadata:()=>p,toc:()=>k});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),u=a(5162);const i={},o="R1 \u0420\u0435\u043b\u0435",p={unversionedId:"blocks/r1",id:"blocks/r1",title:"R1 \u0420\u0435\u043b\u0435",description:"\u041e\u0434\u043d\u043e\u043a\u0430\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u043b\u0435\u0439\u043d\u044b\u0439 \u0431\u043b\u043e\u043a.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/blocks/r1.md",sourceDirName:"blocks",slug:"/blocks/r1",permalink:"/ru/docs/blocks/r1",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DT1 \u0414\u0438\u043c\u043c\u0435\u0440 \u0441\u0438\u043c\u0438\u0441\u0442\u043e\u0440\u043d\u044b\u0439",permalink:"/ru/docs/blocks/dt1"},next:{title:"R8 \u0420\u0435\u043b\u0435",permalink:"/ru/docs/blocks/r8"}},m={},k=[{value:"\ud83d\udc8e \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438",id:"-\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438",level:3},{value:"\u2753 \u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"-\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",level:2},{value:"\ud83d\udd27 \u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438",id:"-\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435-\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438",level:3},{value:"\ud83d\udc41\u200d\ud83d\udde8 \u0421\u0445\u0435\u043c\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u0431\u043b\u043e\u043a\u0430",id:"-\u0441\u0445\u0435\u043c\u044b-\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439-\u0431\u043b\u043e\u043a\u0430",level:2},{value:"\ud83d\udd0c API \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",id:"-api-\u0434\u043b\u044f-\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438-\u0432-\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435-\u0441\u0438\u0441\u0442\u0435\u043c\u044b",level:2}],d={toc:k},s="wrapper";function N(t){let{components:e,...i}=t;return(0,r.kt)(s,(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"r1-\u0440\u0435\u043b\u0435"},"R1 \u0420\u0435\u043b\u0435"),(0,r.kt)("p",null,"\u041e\u0434\u043d\u043e\u043a\u0430\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u043b\u0435\u0439\u043d\u044b\u0439 \u0431\u043b\u043e\u043a."),(0,r.kt)("h3",{id:"-\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438"},"\ud83d\udc8e \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b NC, COM, NO (\u043f\u0435\u0440\u0435\u043a\u0438\u0434\u043d\u043e\u0435 \u0440\u0435\u043b\u0435)"),(0,r.kt)("li",{parentName:"ul"},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0430\u043c\u0438 \u043f\u043e \u0442\u0438\u043f\u0443 \u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c/\u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c"),(0,r.kt)("li",{parentName:"ul"},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435\u043c, \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u0435\u0439, \u043d\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438 \u0438 \u043f\u0440\u043e\u0447\u0438\u043c\u0438 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0430\u043c\u0438"),(0,r.kt)("li",{parentName:"ul"},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043b\u0430\u0431\u043e\u0442\u043e\u0447\u043d\u044b\u043c\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 \u0441\u043e \u0432\u0445\u043e\u0434\u0430\u043c\u0438 \u0441\u0443\u0445\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"R1",src:a(1547).Z,width:"6006",height:"3996"})),(0,r.kt)("h2",{id:"-\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},"\u2753 \u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("p",null,"\u0420\u0435\u043b\u0435\u0439\u043d\u044b\u0439 \u0431\u043b\u043e\u043a R1 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043a\u043e\u043c\u043c\u0443\u0442\u0430\u0446\u0438\u0438 \u0441\u0438\u0433\u043d\u0430\u043b\u043e\u0432 \u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0446\u0435\u043f\u0435\u0439 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0441\u0432\u0435\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c, \u0442\u043e\u043a\u043e\u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435\u043c, \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c\u0438 \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0438\u0438, \u043a\u043b\u0438\u043c\u0430\u0442\u0430 \u0438 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0430\u043c\u0438, \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u044f\u0445 \u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u0436\u0438\u043b\u0438\u0449\u043d\u043e-\u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0438 \u0431\u044b\u0442\u043e\u0432\u043e\u0433\u043e \u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u0430."),(0,r.kt)("h3",{id:"-\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435-\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"},"\ud83d\udd27 \u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u041e\u0431\u0449\u0438\u0435"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u0440\u043f\u0443\u0441 \u0434\u043b\u044f \u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u044f \u043d\u0430 DIN-\u0440\u0435\u0439\u043a\u0443 (\u0448\u0438\u0440\u0438\u043d\u0430 2 din)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u0421\u0442\u0435\u043f\u0435\u043d\u044c \u0437\u0430\u0449\u0438\u0442\u044b \u043a\u043e\u0440\u043f\u0443\u0441\u0430"),(0,r.kt)("td",{parentName:"tr",align:null},"IP20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u041d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435 \u043f\u0438\u0442\u0430\u043d\u0438\u044f"),(0,r.kt)("td",{parentName:"tr",align:null},"18\u202625 \u0412 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u0442\u043e\u043a\u0430 (\u043d\u043e\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 24 \u0412)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u041f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0435\u043c\u0430\u044f \u043c\u043e\u0449\u043d\u043e\u0441\u0442\u044c, \u043d\u0435 \u0431\u043e\u043b\u0435\u0435"),(0,r.kt)("td",{parentName:"tr",align:null},"2.5 \u0412\u0442 \u043f\u0440\u0438 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0445 \u0440\u0435\u043b\u0435; ",(0,r.kt)("br",null)," 2.9 \u0412\u0442 \u043f\u0440\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0445 \u0440\u0435\u043b\u0435;")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0435\u043b\u0435\u0439\u043d\u044b\u0445 \u0432\u044b\u0445\u043e\u0434\u043e\u0432"),(0,r.kt)("td",{parentName:"tr",align:null},"1 (\u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e-\u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0435, \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e-\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043c\u043c\u0443\u0442\u0438\u0440\u0443\u0435\u043c\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435"),(0,r.kt)("td",{parentName:"tr",align:null},"30 \u0412 \u2014 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0435; ",(0,r.kt)("br",null)," 230 \u0412 \u2014 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435;")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043c\u043c\u0443\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u0442\u043e\u043a"),(0,r.kt)("td",{parentName:"tr",align:null},"16 \u0410")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RS485**"),(0,r.kt)("td",{parentName:"tr",align:null},"YoctoBUS \u0438\u043b\u0438 Modbus RTU")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ethernet**"),(0,r.kt)("td",{parentName:"tr",align:null},"IEEE 802.3 10/100BASE-T (http, UDP)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WiFi**"),(0,r.kt)("td",{parentName:"tr",align:null},"IEEE 802.11 (http, UDP)")))),(0,r.kt)("p",null,"** \u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0431\u043b\u043e\u043a\u0430."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u0414\u043b\u044f \u0431\u043b\u043e\u043a\u043e\u0432 ",(0,r.kt)("inlineCode",{parentName:"li"},"YoctoBUS"),": \u0442\u0438\u043f \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u043e\u0431\u043c\u0435\u043d\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,r.kt)("inlineCode",{parentName:"li"},"YoctoBUS"),", \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f."),(0,r.kt)("li",{parentName:"ul"},"\u0414\u043b\u044f \u0431\u043b\u043e\u043a\u043e\u0432 ",(0,r.kt)("inlineCode",{parentName:"li"},"YoctoLAN"),": \u043f\u0440\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u043a \u0441\u0435\u0442\u0438 \u043f\u043e ",(0,r.kt)("inlineCode",{parentName:"li"},"Ethernet")," \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f, \u043f\u0440\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u0447\u0435\u0440\u0435\u0437 WiFi \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u0434\u0430\u0442\u044c ",(0,r.kt)("strong",{parentName:"li"},"SSID \u0438 \u041f\u0430\u0440\u043e\u043b\u044c")," \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u041f\u041e ",(0,r.kt)("inlineCode",{parentName:"li"},"CONNECT Configurator"),". "))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u0414\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0431\u043b\u043e\u043a\u0430 \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u0438 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043e\u0431\u043c\u0435\u043d\u0430 \u043f\u043e RS485, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u0435\u0442\u0435\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0435, \u043a\u0440\u043e\u0441\u0441\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435\u043d\u043d\u043e\u0435 \u041f\u041e ",(0,r.kt)("inlineCode",{parentName:"p"},"CONNECT Configurator"),".")),(0,r.kt)("h2",{id:"-\u0441\u0445\u0435\u043c\u044b-\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439-\u0431\u043b\u043e\u043a\u0430"},"\ud83d\udc41\u200d\ud83d\udde8 \u0421\u0445\u0435\u043c\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u0431\u043b\u043e\u043a\u0430"),(0,r.kt)("p",null,"\u0421\u043a\u043e\u0440\u043e..."),(0,r.kt)("h2",{id:"-api-\u0434\u043b\u044f-\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438-\u0432-\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435-\u0441\u0438\u0441\u0442\u0435\u043c\u044b"},"\ud83d\udd0c API \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041e\u0431\u0449\u0438\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0431\u043b\u043e\u043a\u043e\u043c")),(0,r.kt)("p",null,"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0431\u043b\u043e\u043a\u043e\u043c \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u0435\u043c \u0438 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u043d\u0438\u0435\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u043e\u0432 \u0431\u043b\u043e\u043a\u0430."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Id \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0417\u0430\u043f\u0438\u0441\u044c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0427\u0442\u0435\u043d\u0438\u0435"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0440\u0435\u043b\u0435 1"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"0, 1")))),(0,r.kt)("hr",null),(0,r.kt)(l.Z,{values:[{label:"RS485 ModbusRTU",value:"rs485_modbus"},{label:"RS485 YoctoBUS",value:"rs485_yocto"},{label:"LAN",value:"lan"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"rs485_modbus",mdxType:"TabItem"},(0,r.kt)("p",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 RS485."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Id \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0417\u0430\u043f\u0438\u0441\u044c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0427\u0442\u0435\u043d\u0438\u0435"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"203**"),(0,r.kt)("td",{parentName:"tr",align:null},"BaudRate RS485"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"3-9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"206"),(0,r.kt)("td",{parentName:"tr",align:null},"Id \u0431\u043b\u043e\u043a\u0430 Modbus"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"1-247")))),(0,r.kt)("p",null,"** \u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438 RS485 \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0435 203:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c, \u0431\u043e\u0434/c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"4800")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"9600")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"19200")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"38400")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"57600")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"74880")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"115200")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 RS485 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u041f\u041e CONNECT Configurator")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0420\u0435\u0436\u0438\u043c ModbusRTU")),(0,r.kt)("p",null,"\u0411\u043b\u043e\u043a \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u043e\u0431\u043c\u0435\u043d \u043f\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0443 ModbusRTU."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u0427\u0442\u0435\u043d\u0438\u0435")," \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u0417\u0430\u043f\u0438\u0441\u044c")," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u0440\u0435\u0433\u0438\u0441\u0442\u0440 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 ",(0,r.kt)("inlineCode",{parentName:"li"},"6"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://wikipedia.org/wiki/Modbus"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0435 ModbusRTU")))),(0,r.kt)(u.Z,{value:"rs485_yocto",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 RS485 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u041f\u041e CONNECT Configurator")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0420\u0435\u0436\u0438\u043c YoctoBUS")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u041a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"YoctoBUS")," \u0438\u043c\u0435\u044e\u0442 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439 \u0432\u0438\u0434."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0438\u0441\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u0440\u0435\u0433\u0438\u0441\u0442\u0440:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"I_aaa_set_rrr_vvvvv\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0440\u043e\u0441 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"I_aaa_state_rrr\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u041e\u0442\u0432\u0435\u0442 \u0431\u043b\u043e\u043a\u0430 \u043d\u0430 \u0437\u0430\u043f\u0438\u0441\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"O_aaa_set_rrr_vvvvv\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u041e\u0442\u0432\u0435\u0442 \u0431\u043b\u043e\u043a\u0430 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"O_aaa_state_rrr_vvvvv\n")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"aaa")," - \u0430\u0434\u0440\u0435\u0441 \u0431\u043b\u043e\u043a\u0430 \u0432 \u0448\u0438\u043d\u0435"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"rrr")," - \u043d\u043e\u043c\u0435\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"vvvvv")," - \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u0427\u0442\u0435\u043d\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430"))),(0,r.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f 5 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430 \u0431\u043b\u043e\u043a\u0430 (\u0430\u0434\u0440\u0435\u0441 \u0431\u043b\u043e\u043a\u0430 \u0440\u0430\u0432\u0435\u043d 15):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"I_15_state_5 \n/\u0438\u043b\u0438/\nI_015_state_00005\n")),(0,r.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430 \u0431\u043b\u043e\u043a\u0430 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c 1 \u0432 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0435 5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"O_015_state_005_00001\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u0417\u0430\u043f\u0438\u0441\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u0440\u0435\u0433\u0438\u0441\u0442\u0440"))),(0,r.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f 0 \u0432 \u0440\u0435\u0433\u0438\u0441\u0442\u0440 16 (\u0430\u0434\u0440\u0435\u0441 \u0431\u043b\u043e\u043a\u0430 \u0440\u0430\u0432\u0435\u043d 11):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"I_11_set_16_0 \n/\u0438\u043b\u0438/ \nI_011_set_016_00000\n")),(0,r.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430 \u0431\u043b\u043e\u043a\u0430 \u043d\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f 0 \u0432 \u0440\u0435\u0433\u0438\u0441\u0442\u0440 16:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"O_011_set_016_00000\n"))),(0,r.kt)(u.Z,{value:"lan",mdxType:"TabItem"},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u044b\u0445\u043e\u0434\u0430\u043c\u0438 \u0431\u043b\u043e\u043a\u0430 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0441\u044b\u043b\u043a\u0443 HTTP GET \u0437\u0430\u043f\u0440\u043e\u0441\u0430.",(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0435\u0442\u0435\u0432\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0431\u043b\u043e\u043a\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u041f\u041e CONNECT Configurator")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 HTTP ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u0440\u0435\u0433\u0438\u0441\u0442\u0440")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),(0,r.kt)("th",{parentName:"tr",align:null},"Ip \u0430\u0434\u0440\u0435\u0441 \u0431\u043b\u043e\u043a\u0430"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041d\u043e\u043c\u0435\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http://"),(0,r.kt)("td",{parentName:"tr",align:null},"192.168.130.150"),(0,r.kt)("td",{parentName:"tr",align:null},"/set"),(0,r.kt)("td",{parentName:"tr",align:null},"_"),(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"_"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("p",null,"\u0412 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"http://192.168.150.150/set_13_1")," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \xab1\xbb \u0432 13 \u0440\u0435\u0433\u0438\u0441\u0442\u0440 \u0431\u043b\u043e\u043a\u0430."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 HTTP ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0434\u043b\u044f \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u043d\u0438\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430 \u0431\u043b\u043e\u043a\u0430")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),(0,r.kt)("th",{parentName:"tr",align:null},"Ip \u0430\u0434\u0440\u0435\u0441 \u0431\u043b\u043e\u043a\u0430"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041d\u043e\u043c\u0435\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http://"),(0,r.kt)("td",{parentName:"tr",align:null},"192.168.130.150"),(0,r.kt)("td",{parentName:"tr",align:null},"/state"),(0,r.kt)("td",{parentName:"tr",align:null},"_"),(0,r.kt)("td",{parentName:"tr",align:null},"13")))),(0,r.kt)("p",null,"\u0412 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"http://192.168.130.150/state_13")," \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 13 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430 \u0431\u043b\u043e\u043a\u0430. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043e\u0442\u0432\u0435\u0442\u0430 \u0431\u043b\u043e\u043a\u0430 \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"strong"},"GET")," \u0437\u0430\u043f\u0440\u043e\u0441")),(0,r.kt)("p",null,"\u0422\u0435\u043b\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b (\u043c\u0435\u0436\u0434\u0443 \u0442\u0435\u0433\u0430\u043c\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"<body>"),") \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Control=\u203313\u2033    Value=\u20331\u2033\n")),(0,r.kt)("p",null,"\u0412 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0431\u043b\u043e\u043a \u0432\u0435\u0440\u043d\u0443\u043b HTML \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u043c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u044b\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"Control=\u203313\u2033 Value=\u20331\u2033"),", \u0447\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0432 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0435 13 \u0431\u043b\u043e\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \xab1\xbb."))))}N.isMDXComponent=!0},1547:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/R1_L-3e8c7e8b7dc97ccd68a70cbeb91487a6.jpg"}}]);