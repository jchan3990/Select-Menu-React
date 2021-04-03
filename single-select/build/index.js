(()=>{"use strict";var e={836:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(476),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,"/******************************************************************\n                              Static\nStyles that don't need to change / Constrained by parent container.\n******************************************************************/\n.buttons-container {\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n  line-height: 36px;\n  margin: 0px 5px;\n  position: absolute;\n  width: 55px;\n}\n\n.clear-search-btn {\n  background-color: white;\n  border: none;\n  color: inherit;\n  font-size: 16px;\n}\n\n.dropdown-menu-container {\n  background-color: inherit;\n  border: 2px solid lightgrey;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px lightgrey;\n  color: inherit;\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n  position: absolute;\n  max-height: 216px;\n  left: 0px;\n  right: 0px;\n  top: 45px;\n  z-index: 10;\n}\n\n.menu-option {\n  display: flex;\n  height: 36px;\n  align-items: center;\n  justify-content: space-between;\n  line-height: 36px;\n}\n\n.menu-option:hover {\n  cursor: pointer;\n  background: lightskyblue;\n}\n\n.menu-option:focus {\n  background: lightskyblue;\n}\n\nimg {\n  height: 25px;\n  width: 25px;\n}\n\n.separator {\n  align-self: stretch;\n  background-color: lightgrey;\n  box-sizing: border-box;\n  margin: 8px 0px;\n  width: 1px;\n  height: 20px;\n}\n\n.select-menu-container input {\n  background-color: inherit;\n  border: 2px solid lightgrey;\n  border-radius: inherit;\n  color: inherit;\n  font-size: 18px;\n  height: 36px;\n  padding-left: 10px;\n  width: 100%;\n}\n\n::placeholder {\n  color: lightgrey;\n}\n\n\n/***************************************************\n                    Default\nSettings if no prop attributes are provided by user.\n***************************************************/\n.select-menu-container {\n  align-items: center;\n  background-color: white;\n  border-radius: 5px;\n  display: flex;\n  color: black;\n  justify-content: flex-end;\n  position: relative;\n  min-height: 0px;\n  max-height: 216px;\n  width: 100%;\n  min-width: 10%;\n}\n\n\n/**********************\n        Floated\n**********************/\n.select-menu-container.left.floated {\n  margin-right: auto;\n}\n.select-menu-container.right.floated {\n  margin-left: auto;\n}\n\n.select-menu-container.centered {\n  margin: 0 auto;\n}\n\n/**********************\n          Size\n**********************/\n.select-menu-container.mini.size {\n  width: 10%;\n}\n\n.select-menu-container.small.size {\n  width: 25%;\n}\n\n.select-menu-container.medium.size {\n  width: 50%;\n}\n\n.select-menu-container.full.size {\n  width: 100%;\n}\n\n/**********************\n      Disabled\n**********************/\n.select-menu-container.disabled {\n  pointer-events: none;\n  opacity: 0.45;\n}\n\n/**********************\n        Hidden\n**********************/\n.select-menu-container.hidden {\n  visibility: hidden;\n}\n\n/**********************\n      Striped Menu\n**********************/\n.menu-option.lightgrey.striped:nth-child(even) {\n  background-color: lightgrey;\n}\n.menu-option.lightgrey.striped:hover {\n  background-color: lightblue;\n}\n\n.menu-option.lightcyan.striped:nth-child(even) {\n  background-color: lightcyan;\n}\n.menu-option.lightcyan.striped:hover {\n  background-color: lightblue;\n}\n\n.menu-option.lightgreen.striped:nth-child(even) {\n  background-color: lightgreen;\n}\n.menu-option.lightgreen.striped:hover {\n  background-color: lightblue;\n}\n\n.menu-option.lightpink.striped:nth-child(even) {\n  background-color: lightpink;\n}\n.menu-option.lightpink.striped:hover {\n  background-color: lightblue;\n}",""]);const o=i},476:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},892:(e,n,t)=>{var r,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function a(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},r=[],i=0;i<e.length;i++){var l=e[i],c=n.base?l[0]+n.base:l[0],u=t[c]||0,s="".concat(c," ").concat(u);t[c]=u+1;var d=a(s),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==d?(o[d].references++,o[d].updater(f)):o.push({identifier:s,updater:g(f,n),references:1}),r.push(s)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,s=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function d(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function f(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,p=0;function g(e,n){var t,r,i;if(n.singleton){var o=p++;t=h||(h=c(n)),r=d.bind(null,t,o,!1),i=d.bind(null,t,o,!0)}else t=c(n),r=f.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=a(t[r]);o[i].references--}for(var c=l(e,n),u=0;u<t.length;u++){var s=a(t[u]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}t=c}}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{t.r(r),t.d(r,{default:()=>h});const e=require("react");var n=t.n(e),i=t(892),o=t.n(i),a=t(836);function l(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=l(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function c(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=l(e))&&(r&&(r+=" "),r+=n);return r}o()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var u=function(e,n){return e&&n},s=function(e,n){return e&&!0!==e&&"".concat(e," ").concat(n)};function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return t}}(e,n)||function(e,n){if(e){if("string"==typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const h=function(t){var r=t.data,i=t.onChange,o=t.centered,a=t.disabled,l=t.floated,f=t.hidden,h=t.name,p=t.placeholder,g=t.size,m=t.striped,v=d((0,e.useState)(void 0!==r?r:[["No Data","NA"]]),2),y=v[0],b=(v[1],c("select-menu-container",u(o,"centered"),s(l,"floated"),u(a,"disabled"),s(g,"size"),u(f,"hidden"))),w=c("menu-option",s(m,"striped"));void 0===r&&(b="select-menu-container small size disabled");var x=d((0,e.useState)(""),2),k=x[0],C=x[1],E=d((0,e.useState)(!1),2),S=E[0],A=E[1],L=d((0,e.useState)(-1),2),j=L[0],N=L[1],M=(0,e.useRef)(null);(0,e.useEffect)((function(){return document.addEventListener("click",T,!1),function(){document.removeEventListener("click",T,!1)}}),[]);var z,O,T=function(e){M.current&&!M.current.contains(e.target)&&A(!1)},I=function(e){C(e),A(!1)},B=n().createElement("svg",{onClick:function(){return A(!S)},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},n().createElement("path",{d:"M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z",fill:"lightgrey"})),D=n().createElement("svg",{onClick:function(){return A(!S)},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},n().createElement("path",{d:"M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z",fill:"lightgrey"})),F={visibility:""!==k?"visible":"hidden"},R=n().createElement("svg",{style:F,onClick:function(){return C("")},xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},n().createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z",fill:"lightgrey"}));return Array.isArray(y[0])&&S&&y.filter((function(e){return e[0].toLowerCase().includes(k.toLowerCase())})).length>0?z=n().createElement("div",{className:"dropdown-menu-container"},y.filter((function(e,n){return e[0].toLowerCase().includes(k.toLowerCase())})).map((function(e,t){return n().createElement("div",{className:w,key:t,onClick:function(){return I(e[0])}},n().createElement("span",{style:{marginLeft:"10px",fontFamily:"Arial"},key:t},e[0]),n().createElement("img",{style:{marginRight:"10px"},src:e[1],alt:"".concat(e[0])}))}))):!Array.isArray(y[0])&&S&&y.filter((function(e){return e.value.toLowerCase().includes(k.toLowerCase())})).length>0?z=n().createElement("div",{className:"dropdown-menu-container"},y.filter((function(e,n){return e.value.toLowerCase().includes(k.toLowerCase())})).map((function(e,t){return n().createElement("div",{className:w,key:t,onClick:function(){return I(e.value)}},n().createElement("span",{style:{marginLeft:"10px",fontFamily:"Arial"},key:t},e.value),n().createElement("img",{style:{marginRight:"10px"},src:e.logo,alt:"".concat(e.value)}))}))):S&&(z=n().createElement("div",{className:"dropdown-menu-container"},n().createElement("div",{className:w},n().createElement("h1",{style:{color:"lightgrey",margin:"0 auto"}},"No Matches")))),O=S?D:B,n().createElement("div",{className:b,ref:M},n().createElement("input",{type:"text",name:h,placeholder:p,value:k,tabIndex:"0",onChange:function(e){C(e.target.value),i(e.target.value),A(!0)},onClick:function(){return A(!S)},onKeyDown:function(e){return function(e){40===e.keyCode&&(S||A(!S),j<y.length-1?(N(j+1),-1!==j&&(Array.isArray(y[j])?C(y[j][0]):C(y[j].value))):(N(j),Array.isArray(y[j])?C(y[j][0]):C(y[j].value))),38===e.keyCode&&(j>0&&N(j-1),Array.isArray(y[j])?C(y[j][0]):C(y[j].value)),13===e.keyCode&&(Array.isArray(y[0])?C(y.filter((function(e){return e[0].toLowerCase().includes(k.toLowerCase())}))[0][0]):C(y.filter((function(e){return e.value.toLowerCase().includes(k.toLowerCase())}))[0].value)),27===e.keyCode&&A(!1)}(e)}}),n().createElement("div",{className:"buttons-container"},R,n().createElement("span",{className:"separator"}),O),z)}})(),module.exports=r})();