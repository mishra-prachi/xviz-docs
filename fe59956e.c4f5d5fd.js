(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{102:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return f}));var r=i(0),a=i.n(r);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l({},t,{},e)),i},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(i),h=r,f=p["".concat(o,".").concat(h)]||p[h]||d[h]||n;return i?a.a.createElement(f,l({ref:t},s,{components:i})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<n;s++)o[s]=i[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},96:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return u}));var r=i(1),a=i(6),n=(i(0),i(102)),o={id:"HierarchicalFilter",title:"Hierarchical Filter"},l={unversionedId:"filters/HierarchicalFilter",id:"filters/HierarchicalFilter",isDocsHomePage:!1,title:"Hierarchical Filter",description:'<iframe id="tag-cloud-iframe" src="https://app.powerbi.com/view?r=eyJrIjoiZDExMjBkOGMtMTdiMS00ODJmLTliMGYtMDE4Nzc0MjQ5ZTkxIiwidCI6ImJjZGYyMGNhLWRkZWMtNGY0OC1hN2Y0LWRjYzExMGY3NTdmNSIsImMiOjN9"',source:"@site/docs\\filters\\HierarchicalFilter.mdx",slug:"/filters/HierarchicalFilter",permalink:"/docs/filters/HierarchicalFilter",version:"current",sidebar:"sideBar",previous:{title:"Parallel Coordinates",permalink:"/docs/utils/ParallelCoordinates"},next:{title:"Hierarchy Variance Table",permalink:"/docs/tables/HierarchyVarianceTable"}},c=[{value:"Conditional Formatting",id:"conditional-formatting",children:[]},{value:"Search capability",id:"search-capability",children:[]},{value:"Tool-tips",id:"tool-tips",children:[]},{value:"Single select/Multi-select node selection",id:"single-selectmulti-select-node-selection",children:[]},{value:"Category Display settings",id:"category-display-settings",children:[]},{value:"Customization of appearance",id:"customization-of-appearance",children:[]},{value:"Use Cases",id:"use-cases",children:[]}],s={rightToc:c};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("iframe",{id:"tag-cloud-iframe",src:"https://app.powerbi.com/view?r=eyJrIjoiZDExMjBkOGMtMTdiMS00ODJmLTliMGYtMDE4Nzc0MjQ5ZTkxIiwidCI6ImJjZGYyMGNhLWRkZWMtNGY0OC1hN2Y0LWRjYzExMGY3NTdmNSIsImMiOjN9",allowfullscreen:"allowfullscreen",frameborder:"0"}),Object(n.b)("p",null,"The Hierarchical Filter for Power BI is a selector component like a slicer, just that it can display multiple category values in an expandable tree view used to displayed hierarchical nodes for filtering.\nEach node in the custom visual can be expanded and collapsed for optimal navigation through the hierarchy and single/ multiple selections can be made to select the desired nodes.\nAdvanced customization options include conditional formatting, customization of appearance settings for better styling and interaction capabilities."),Object(n.b)("h3",{id:"conditional-formatting"},"Conditional Formatting"),Object(n.b)("p",null,"This excel like feature helps you to assign color to both font and the background and highlight data that meets specific conditions"),Object(n.b)("h3",{id:"search-capability"},"Search capability"),Object(n.b)("p",null,"The Hierarchical filter provides search functionality, which allows users to search for a value across the complete hierarchy"),Object(n.b)("h3",{id:"tool-tips"},"Tool-tips"),Object(n.b)("p",null,"The tooltip option in Hierarchical Filter displays additional information for each of the category fields."),Object(n.b)("h3",{id:"single-selectmulti-select-node-selection"},"Single select/Multi-select node selection"),Object(n.b)("p",null,"While using the Hierarchical Filter for Power BI, the user can either configure the filter to act as a single or multi-select option."),Object(n.b)("h3",{id:"category-display-settings"},"Category Display settings"),Object(n.b)("p",null,"The default category level to be displayed along with the number of hierarchical attributes to be displayed can be configured"),Object(n.b)("h3",{id:"customization-of-appearance"},"Customization of appearance"),Object(n.b)("p",null,"The appearance setting can be configured for better styling and interaction capabilities in the custom visual"),Object(n.b)("h3",{id:"use-cases"},"Use Cases"),Object(n.b)("p",null,"Display sales values for the hierarchical filter and conditional format them based on whether it has met the target or not."),Object(n.b)("p",null,"This allows you to get a quick snapshot of the most important KPI for each category."),Object(n.b)("p",null,"Helps you filter complex hierarchical data categorically that can be analyzed through selections from the filter"),Object(n.b)("p",null,"Visually engage hierarchical folder structure along with its sub-elements"))}u.isMDXComponent=!0}}]);