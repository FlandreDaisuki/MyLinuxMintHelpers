var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let m;function y(t){m=t}function g(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const v=[],b=[],k=[],w=[],x=Promise.resolve();let E=!1;function S(t){k.push(t)}let $=!1;const T=new Set;function j(){if(!$){$=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];y(e),A(e.$$)}for(y(null),v.length=0;b.length;)b.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];T.has(e)||(T.add(e),e())}k.length=0}while(v.length);for(;w.length;)w.pop()();E=!1,$=!1,T.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const _=new Set;function O(t,e){-1===t.$$.dirty[0]&&(v.push(t),E||(E=!0,x.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(i,a,c,s,u,f,d=[-1]){const p=m;y(i);const h=i.$$={fragment:null,ctx:null,props:f,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:a.context||[]),callbacks:n(),dirty:d,skip_bound:!1};let g=!1;if(h.ctx=c?c(i,a.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return h.ctx&&u(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),g&&O(i,t)),e})):[],h.update(),g=!0,o(h.before_update),h.fragment=!!s&&s(h.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);h.fragment&&h.fragment.l(t),t.forEach(l)}else h.fragment&&h.fragment.c();a.intro&&((v=i.$$.fragment)&&v.i&&(_.delete(v),v.i(b))),function(t,n,i,a){const{fragment:c,on_mount:l,on_destroy:s,after_update:u}=t.$$;c&&c.m(n,i),a||S((()=>{const n=l.map(e).filter(r);s?s.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(S)}(i,a.target,a.anchor,a.customElement),j()}var v,b;y(p)}var L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function R(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function M(t){var e={exports:{}};return t(e,e.exports),e.exports
/*!
     * clipboard.js v2.0.8
     * https://clipboardjs.com/
     *
     * Licensed MIT © Zeno Rocha
     */}var B=R(M((function(t,e){var n;n=function(){return function(){var t={134:function(t,e,n){n.d(e,{default:function(){return b}});var o=n(279),r=n.n(o),i=n(370),a=n.n(i),c=n(817),l=n.n(c);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}var e,n,o;return e=t,(n=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var t="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var e=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(e,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var t=this,e=this.createFakeElement();this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(e),this.selectedText=l()(e),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=l()(this.target),this.copyText()}},{key:"copyText",value:function(){var t;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==s(t)||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}])&&u(e.prototype,n),o&&u(e,o),t}();function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=g(t);if(e){var r=g(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(i,t);var e,n,o,r=m(i);function i(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(n=r.call(this)).resolveOptions(e),n.listenClick(t),n}return e=i,o=[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}],(n=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=a()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new f({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return v("action",t)}},{key:"defaultTarget",value:function(t){var e=v("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return v("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}])&&p(e.prototype,n),o&&p(e,o),i}(r())},828:function(t){if("undefined"!=typeof Element&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var o=n(828);function r(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,n,r){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&r.call(t,n)}}t.exports=function(t,e,n,o,i){return"function"==typeof t.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return r(t,e,n,o,i)})))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var o=n(879),r=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(o.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(o.string(t))return function(t,e,n){return r(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(t){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}return n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(134)}().default},t.exports=n()}))),H=M((function(t,e){!function(){function e(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function n(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){c(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function r(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof L&&L.global===L?L:void 0,a=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(t,e,a){var c=i.URL||i.webkitURL,l=document.createElement("a");e=e||t.name||"download",l.download=e,l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?r(l):o(l.href)?n(t,e,a):r(l,l.target="_blank")):(l.href=c.createObjectURL(t),setTimeout((function(){c.revokeObjectURL(l.href)}),4e4),setTimeout((function(){r(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,i,a){if(i=i||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,a),i);else if(o(t))n(t,i,a);else{var c=document.createElement("a");c.href=t,c.target="_blank",setTimeout((function(){r(c)}))}}:function(t,e,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof t)return n(t,e,o);var c="application/octet-stream"===t.type,l=/constructor/i.test(i.HTMLElement)||i.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||c&&l||a)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location=t,r=null},u.readAsDataURL(t)}else{var f=i.URL||i.webkitURL,d=f.createObjectURL(t);r?r.location=d:location.href=d,r=null,setTimeout((function(){f.revokeObjectURL(d)}),4e4)}});i.saveAs=c.saveAs=c,t.exports=c}()}));const P=["apt-transport-https"];var F=[...["jq","bat","git","vim","gimp","kazam","unrar","deluge","mcomix","opencc","gparted","optipng","filezilla","mediainfo","obs-studio","openssh-server","build-essential","silversearcher-ag","fcitx-mozc","fcitx-chewing","language-pack-gnome-zh-hant","ttf-ancient-fonts","fonts-noto","fonts-liberation","fonts-dejavu-core","fonts-wqy-microhei"].map((t=>({name:t,install:[t]}))),...[["shutter","ppa:linuxuprising/shutter"],["mpv","ppa:mc3man/mpv-tests"]].map((([t,e])=>({name:t,preinstall:[`sudo add-apt-repository ${e}`],install:[t]}))),{name:"sublime text",preinstall:["wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -",'echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list'],install:["sublime-text"]}];function q(t,e,n){const o=t.slice();return o[11]=e[n],o[12]=e,o[13]=n,o}function U(t){let e,n,o,r,i,m,y,g,v,b=t[11].name+"";function k(){t[6].call(o,t[12],t[13])}return{c(){e=s("li"),n=s("label"),o=s("input"),r=f(),i=s("span"),m=u(b),y=f(),p(o,"type","checkbox"),p(e,"class","package svelte-13jyndk")},m(l,s){c(l,e,s),a(e,n),a(n,o),o.checked=t[11].checked,a(n,r),a(n,i),a(i,m),a(e,y),g||(v=d(o,"change",k),g=!0)},p(e,n){t=e,1&n&&(o.checked=t[11].checked),1&n&&b!==(b=t[11].name+"")&&h(m,b)},d(t){t&&l(e),g=!1,v()}}}function N(e){let n,r,i,m,y,g,v,b,k,w,x,E,S,$,T,j,A,_,O,C,L,R=e[0],M=[];for(let t=0;t<R.length;t+=1)M[t]=U(q(e,R,t));return{c(){n=s("main"),r=s("h1"),r.textContent="apt 安裝腳本產生器",i=f(),m=s("nav"),y=s("button"),y.textContent="清空",g=f(),v=s("button"),v.textContent="全選",b=f(),k=s("ul");for(let t=0;t<M.length;t+=1)M[t].c();w=f(),x=s("nav"),E=s("button"),E.textContent="下載腳本",S=f(),$=s("button"),$.textContent="複製文字",T=f(),j=s("output"),A=s("code"),_=s("pre"),O=u(e[5]),p(r,"class","svelte-13jyndk"),p(k,"id","packages"),p(k,"class","svelte-13jyndk"),p(_,"id","generated"),p(_,"class","svelte-13jyndk"),p(n,"class","svelte-13jyndk")},m(t,o){c(t,n,o),a(n,r),a(n,i),a(n,m),a(m,y),a(m,g),a(m,v),a(n,b),a(n,k);for(let t=0;t<M.length;t+=1)M[t].m(k,null);a(n,w),a(n,x),a(x,E),a(x,S),a(x,$),e[7]($),a(n,T),a(n,j),a(j,A),a(A,_),a(_,O),C||(L=[d(y,"click",e[2]),d(v,"click",e[3]),d(E,"click",e[4])],C=!0)},p(t,[e]){if(1&e){let n;for(R=t[0],n=0;n<R.length;n+=1){const o=q(t,R,n);M[n]?M[n].p(o,e):(M[n]=U(o),M[n].c(),M[n].m(k,null))}for(;n<M.length;n+=1)M[n].d(1);M.length=R.length}32&e&&h(O,t[5])},i:t,o:t,d(t){t&&l(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(M,t),e[7](null),C=!1,o(L)}}}function D(t,e,n){let o,{packages:r=F.map((t=>Object.assign(t,{checked:!1})))}=e;let{copyBtn:i}=e;g((()=>{new B(i,{text:()=>o})}));const a=new URLSearchParams(location.search).get("pkg");if(a){const t=a.split(",").map((t=>t.trim())).filter(Boolean);r=F.map((e=>{const n=t.includes(e.name);return Object.assign(e,{checked:n})}))}return t.$$set=t=>{"packages"in t&&n(0,r=t.packages),"copyBtn"in t&&n(1,i=t.copyBtn)},t.$$.update=()=>{if(1&t.$$.dirty&&n(5,o=(t=>{const e=t.filter((t=>t.checked)),n=e.flatMap((t=>t.preinstall)).filter(Boolean),o=e.flatMap((t=>t.install)).filter(Boolean),r=e.flatMap((t=>t.postinstall)).filter(Boolean);return`\n#!/bin/bash\n\n# Install required packages\nsudo apt-get install -y ${P.join(" ")}\n\n# Preliminary before install\n${n.join("\n")}\n\nsudo apt-get update\nsudo apt-get install -y ${o.join(" ")}\n\n# Tidy up if needed\n${r.join("\n")}\n\necho 'Done!'\n`.trimStart()})(r)),1&t.$$.dirty){const t=r.filter((t=>t.checked)).map((t=>t.name)),e=new URLSearchParams(location.search);t.length?e.set("pkg",t.join(",")):e.delete("pkg"),e.toString()?history.replaceState(null,null,"?"+e.toString()):history.replaceState(null,null,location.pathname)}},[r,i,()=>{n(0,r=F.map((t=>Object.assign(t,{checked:!1}))))},()=>{n(0,r=F.map((t=>Object.assign(t,{checked:!0}))))},()=>{H.saveAs(new Blob([o],{type:"text/plain;charset=utf-8"}),"apt-installer.sh")},o,function(t,e){t[e].checked=this.checked,n(0,r)},function(t){b[t?"unshift":"push"]((()=>{i=t,n(1,i)}))}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),C(this,t,D,N,i,{packages:0,onClearAllClick:2,onSelectAllClick:3,onDownloadClick:4,copyBtn:1})}get onClearAllClick(){return this.$$.ctx[2]}get onSelectAllClick(){return this.$$.ctx[3]}get onDownloadClick(){return this.$$.ctx[4]}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map