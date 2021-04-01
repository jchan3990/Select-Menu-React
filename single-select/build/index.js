(()=>{"use strict";var e={836:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(476),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".buttons-container {\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n  margin: 0px 5px;\n  position: absolute;\n  width: 55px;\n}\n\n.clear-search-btn {\n  background: white;\n  border: none;\n  color: lightgrey;\n  font-size: 16px;\n}\n\n.dropdown-menu-container {\n  background-color: white;\n  border: 2px solid lightgrey;\n  border-radius: 5px;\n  box-shadow: 5px 5px 5px lightgrey;\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n  position: absolute;\n  max-height: 216px;\n  top: 45px;\n  width: 316px;\n  z-index: 10;\n}\n\n.menu-option {\n  display: flex;\n  height: 36px;\n  align-items: center;\n  justify-content: space-between;\n  line-height: 36px;\n}\n\n.menu-option:hover {\n  cursor: pointer;\n  background: lightskyblue;\n}\n\n.menu-option:focus {\n  background: lightskyblue;\n}\n\n.select-menu-container {\n  display: flex;\n  justify-content: flex-end;\n  margin: 0 auto;\n  position: relative;\n  min-height: 0px;\n  max-height: 216px;\n  width: 320px;\n}\n\n.select-menu-container input {\n  border: 2px solid lightgrey;\n  border-radius: 5px;\n  font-size: 18px;\n  height: 36px;\n  padding: 10px;\n  width: 320px;\n}\n\n.separator {\n  align-self: stretch;\n  background-color: lightgrey;\n  box-sizing: border-box;\n  margin: 8px 0px;\n  width: 1px;\n  height: 20px;\n}\n\nimg {\n  height: 25px;\n  width: 25px;\n}",""]);const i=o},476:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},892:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},r=[],o=0;o<e.length;o++){var l=e[o],c=n.base?l[0]+n.base:l[0],u=t[c]||0,s="".concat(c," ").concat(u);t[c]=u+1;var d=a(s),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:s,updater:h(f,n),references:1}),r.push(s)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,s=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(e,n){var t,r,o;if(n.singleton){var i=m++;t=p||(p=c(n)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=c(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var c=l(e,n),u=0;u<t.length;u++){var s=a(t[u]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=c}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{t.r(r),t.d(r,{default:()=>u});const e=require("react");var n=t.n(e),o=t(892),i=t.n(o),a=t(836);function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return t}}(e,n)||function(e,n){if(e){if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}i()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;const u=function(t){var r=t.data,o=l((0,e.useState)(""),2),i=o[0],a=o[1],c=l((0,e.useState)(!1),2),u=c[0],s=c[1],d=l((0,e.useState)(-1),2),f=d[0],p=d[1],m=(0,e.useRef)(null);(0,e.useEffect)((function(){return document.addEventListener("click",v,!1),function(){document.removeEventListener("click",v,!1)}}),[]);var h,g,v=function(e){m.current&&!m.current.contains(e.target)&&s(!1)},y=function(e){a(e),s(!1)},x=n().createElement("svg",{onClick:function(){return s(!u)},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},n().createElement("path",{d:"M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z",fill:"lightgrey"})),b=n().createElement("svg",{onClick:function(){return s(!u)},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},n().createElement("path",{d:"M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z",fill:"lightgrey"})),w={visibility:""!==i?"visible":"hidden"},E=n().createElement("svg",{style:w,onClick:function(){return a("")},xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},n().createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z",fill:"lightgrey"}));return Array.isArray(r[0])&&u&&r.filter((function(e){return e[0].toLowerCase().includes(i.toLowerCase())})).length>0?h=n().createElement("div",{className:"dropdown-menu-container"},r.filter((function(e,n){return e[0].toLowerCase().includes(i.toLowerCase())})).map((function(e,t){return n().createElement("div",{className:"menu-option",key:t,onClick:function(){return y(e[0])}},n().createElement("span",{style:{marginLeft:"10px",fontFamily:"Arial"},key:t},e[0]),n().createElement("img",{style:{marginRight:"10px"},src:e[1],alt:"".concat(e[0])}))}))):!Array.isArray(r[0])&&u&&r.filter((function(e){return e.value.toLowerCase().includes(i.toLowerCase())})).length>0?h=n().createElement("div",{className:"dropdown-menu-container"},r.filter((function(e,n){return e.value.toLowerCase().includes(i.toLowerCase())})).map((function(e,t){return n().createElement("div",{className:"menu-option",key:t,onClick:function(){return y(e.value)}},n().createElement("span",{style:{marginLeft:"10px",fontFamily:"Arial"},key:t},e.value),n().createElement("img",{style:{marginRight:"10px"},src:e.logo,alt:"".concat(e.value)}))}))):u&&(h=n().createElement("div",{className:"dropdown-menu-container"},n().createElement("div",{className:"menu-option"},n().createElement("h1",{style:{color:"lightgrey",margin:"0 auto"}},"No Matches")))),g=u?b:x,n().createElement("div",{className:"select-menu-container",ref:m},n().createElement("input",{type:"text",name:"search",placeholder:"Select...",value:i,tabIndex:"0",onChange:function(e){a(e.target.value),s(!0)},onClick:function(){return s(!u)},onKeyDown:function(e){return function(e){40===e.keyCode&&(u||s(!u),f<r.length-1?(p(f+1),-1!==f&&(Array.isArray(r[f])?a(r[f][0]):a(r[f].value))):(p(f),Array.isArray(r[f])?a(r[f][0]):a(r[f].value))),38===e.keyCode&&(f>0&&p(f-1),Array.isArray(r[f])?a(r[f][0]):a(r[f].value)),27===e.keyCode&&s(!1)}(e)}}),n().createElement("div",{className:"buttons-container"},E,n().createElement("span",{className:"separator"}),g),h)}})(),module.exports=r})();