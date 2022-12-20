(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{101:function(e,t,r){"use strict";var n=r(0),i=r(20);t.a=function(){var e=Object(n.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},102:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(r),p=n,b=d["".concat(o,".").concat(p)]||d[p]||f[p]||a;return r?i.a.createElement(b,c({ref:t},l,{components:r})):i.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},103:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return o}));var n=r(101),i=r(104);function a(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,c=void 0!==o&&o,u=a.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(c)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+s:s}(a,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},104:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))},67:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(1),i=r(6),a=(r(0),r(102)),o=(r(103),{id:"HierarchyTree",title:"Hierarchy Tree"}),c={unversionedId:"utils/HierarchyTree",id:"utils/HierarchyTree",isDocsHomePage:!1,title:"Hierarchy Tree",description:"// Add to the top of the file below the front matter.",source:"@site/docs\\utils\\HierarchyTree.mdx",slug:"/utils/HierarchyTree",permalink:"/xviz-docs/docs/utils/HierarchyTree",version:"current",sidebar:"sideBar",previous:{title:"Tag Cloud",permalink:"/xviz-docs/docs/utils/TagCloud"},next:{title:"Parallel Coordinates",permalink:"/xviz-docs/docs/utils/ParallelCoordinates"}},u=[{value:"Visualize Node Contribution",id:"visualize-node-contribution",children:[]},{value:"Mini Map",id:"mini-map",children:[]},{value:"Search, Find, Seek",id:"search-find-seek",children:[]},{value:"Expand on Demand",id:"expand-on-demand",children:[]},{value:"Conditional Formatting",id:"conditional-formatting",children:[]},{value:"Use Cases",id:"use-cases",children:[]}],l={rightToc:u};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("iframe",{id:"tag-cloud-iframe",src:"https://app.powerbi.com/view?r=eyJrIjoiNjM3MjgxYmItZDBmMy00ZjM5LThkZmMtOTBhMTNiODdjOTU0IiwidCI6ImJjZGYyMGNhLWRkZWMtNGY0OC1hN2Y0LWRjYzExMGY3NTdmNSIsImMiOjN9",allowfullscreen:"allowfullscreen",frameborder:"0"}),Object(a.b)("p",null,"The Hierarchical Tree for Power BI is an advanced custom visual built to showcase hierarchies in a more visually appealing manner.\nIt comes handy with a lot of features and the flexibility to customize it in such a way that it suits a lot of business requirements where we deal with Hierarchies.\nIt is different from visual in the form of a table or at times in the form of a selector."),Object(a.b)("h3",{id:"visualize-node-contribution"},"Visualize Node Contribution"),Object(a.b)("p",null,"Contribution of a particular node is displayed on the parent node that can be configured for the immediate / the parent node"),Object(a.b)("h3",{id:"mini-map"},"Mini Map"),Object(a.b)("p",null,"Easy Navigation within the Hierarchical Tree can be facilitated with the in- built mini map functionality"),Object(a.b)("h3",{id:"search-find-seek"},"Search, Find, Seek"),Object(a.b)("p",null,"Advanced Search Option in the Hierarchical Tree for Power BI lets you search and find important specific data present in the table."),Object(a.b)("h3",{id:"expand-on-demand"},"Expand on Demand"),Object(a.b)("p",null,"Expand / Decompose each node in the Hierarchal Tree for Power BI to view more insights within that categorical member"),Object(a.b)("h3",{id:"conditional-formatting"},"Conditional Formatting"),Object(a.b)("p",null,"Alerting options for the progress bar and for the nodes can be configured "),Object(a.b)("h3",{id:"use-cases"},"Use Cases"),Object(a.b)("p",null,"Analyze Performance and contribution of individual nodes to the parent Node"),Object(a.b)("p",null,"Model your business needs and create the budget for upcoming year"),Object(a.b)("p",null,"Analyze the important KPI\u2019s in a business scenario using Hierarchical Tree Node Structure"))}s.isMDXComponent=!0}}]);