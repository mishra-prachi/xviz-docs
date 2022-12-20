(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{101:function(e,t,r){"use strict";var n=r(0),a=r(20);t.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},102:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,f=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return r?a.a.createElement(f,c({ref:t},s,{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},103:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return o}));var n=r(101),a=r(104);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,s=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(c)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+u:u}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},104:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(6),i=(r(0),r(102)),o=(r(103),{id:"VarianceChart",title:"Variance Chart"}),c={unversionedId:"visuals/VarianceChart",id:"visuals/VarianceChart",isDocsHomePage:!1,title:"Variance Chart",description:"// Add to the top of the file below the front matter.",source:"@site/docs\\visuals\\VarianceChart.mdx",slug:"/visuals/VarianceChart",permalink:"/xviz-docs/docs/visuals/VarianceChart",version:"current",sidebar:"sideBar",previous:{title:"Marimekko Chart",permalink:"/xviz-docs/docs/visuals/MarimekkoChart"},next:{title:"Funnel Chart",permalink:"/xviz-docs/docs/visuals/FunnelChart"}},l=[{value:"Conditional Formatting",id:"conditional-formatting",children:[]},{value:"Display Average Variance",id:"display-average-variance",children:[]},{value:"Sorting",id:"sorting",children:[]},{value:"RTL (Right to Left Support)",id:"rtl-right-to-left-support",children:[]},{value:"Consolidated Tooltip",id:"consolidated-tooltip",children:[]},{value:"Enable/Disable Absolute and % Variance",id:"enabledisable-absolute-and--variance",children:[]},{value:"Width Customization of Series",id:"width-customization-of-series",children:[]},{value:"Orientation",id:"orientation",children:[]},{value:"Custom Theme",id:"custom-theme",children:[]},{value:"Use Cases",id:"use-cases",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("iframe",{id:"tag-cloud-iframe",src:"https://app.powerbi.com/view?r=eyJrIjoiNDcwOTIwODItNzhkNC00MjZlLWEyMDktMjkzMzc1YmQ3YjI5IiwidCI6ImJjZGYyMGNhLWRkZWMtNGY0OC1hN2Y0LWRjYzExMGY3NTdmNSIsImMiOjN9",allowfullscreen:"allowfullscreen",frameborder:"0"}),Object(i.b)("p",null,"The Variance Chart for Power BI provides users with the capability to compare performance and benchmark with variance visualized in both absolute & % terms.\nThe custom visual helps you to analyze comparisons of two values across three distinct visualizations (comparison chart, variance chart and variance percentage) integrated into one visual control."),Object(i.b)("h3",{id:"conditional-formatting"},"Conditional Formatting"),Object(i.b)("p",null,"The excel-like feature in Variance Chart for Power BI allows you to highlight data that meets specific conditions"),Object(i.b)("h3",{id:"display-average-variance"},"Display Average Variance"),Object(i.b)("p",null,"Display averages for performance, benchmark, absolute variance, overall average % variance"),Object(i.b)("h3",{id:"sorting"},"Sorting"),Object(i.b)("p",null,"The chart allows you to sort values by performance, comparison, absolute variance or % variance."),Object(i.b)("h3",{id:"rtl-right-to-left-support"},"RTL (Right to Left Support)"),Object(i.b)("p",null,"Leverage RTL Support to enhance readability of languages like Arabic, Hebrew and many more"),Object(i.b)("h3",{id:"consolidated-tooltip"},"Consolidated Tooltip"),Object(i.b)("p",null,"The tooltip of the custom visual is consolidated, allowing you to view all the data at once."),Object(i.b)("h3",{id:"enabledisable-absolute-and--variance"},"Enable/Disable Absolute and % Variance"),Object(i.b)("p",null,"The Variance chart visual gives you the option to hide either (or both) of these"),Object(i.b)("h3",{id:"width-customization-of-series"},"Width Customization of Series"),Object(i.b)("p",null,"Depending on the real estate, customize width for Base Series, Absolute Variance and % Variance"),Object(i.b)("h3",{id:"orientation"},"Orientation"),Object(i.b)("p",null,"The custom visual for Power BI enables you to choose between horizontal or vertical orientation."),Object(i.b)("h3",{id:"custom-theme"},"Custom Theme"),Object(i.b)("p",null,"The Variance chart custom visual allows you to switch between the Standard, Microsoft & Custom themes"),Object(i.b)("h3",{id:"use-cases"},"Use Cases"),Object(i.b)("p",null,"Comparing \u201cActual vs. Planned\u201d, \u201cForecast vs. Planned\u201d, and \u201cForecast vs. Previous Year\u201d"),Object(i.b)("p",null,"Calculation of Profit Gained by comparing Retail and Selling Price"),Object(i.b)("p",null,"Analysis of predicted and actual rainfall data over a period of time"),Object(i.b)("p",null,"Differentiation of Revenue Generated and the Overall Cost incurred for Sales."),Object(i.b)("p",null,"Track employee performance by comparing their target and achieved values"),Object(i.b)("p",null,"Comparison of different aspects of employment across regions over a specific period"))}u.isMDXComponent=!0}}]);