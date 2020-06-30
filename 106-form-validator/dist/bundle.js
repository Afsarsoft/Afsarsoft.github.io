!function(e){var t={};function r(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(s,o,function(t){return e[t]}.bind(null,o));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);const s=new class{constructor(){this.showError=(e,t)=>{const r=e.parentElement;r.className="form-control error";r.querySelector("small").innerText=t},this.showSuccess=e=>{e.parentElement.className="form-control success"},this.getFieldName=e=>e.id.charAt(0).toUpperCase()+e.id.slice(1),this.checkEmail=e=>{/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.value.trim())?this.showSuccess(e):this.showError(e,"Email is not valid")},this.checkRequired=e=>{e.forEach(e=>{""===e.value.trim()?this.showError(e,this.getFieldName(e)+" is required"):this.showSuccess(e)})},this.checkLength=(e,t,r)=>{e.value.length<t?this.showError(e,`${this.getFieldName(e)} must be at least ${t} characters`):e.value.length>r?this.showError(e,`${this.getFieldName(e)} must be less than ${r} characters`):this.showSuccess(e)},this.checkPasswordsMatch=(e,t)=>{e.value!==t.value&&this.showError(t,"Passwords do not match")},this.form=document.getElementById("form"),this.username=document.getElementById("username"),this.email=document.getElementById("email"),this.password1=document.getElementById("password1"),this.password2=document.getElementById("password2")}};s.form.addEventListener("submit",e=>{e.preventDefault(),s.checkRequired([s.username,s.email,s.password1,s.password2]),s.checkLength(s.username,3,15),s.checkLength(s.password1,6,25),s.checkEmail(s.email),s.checkPasswordsMatch(s.password1,s.password2)})}]);