(function(e){function t(t){for(var o,a,c=t[0],s=t[1],l=t[2],u=0,b=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&b.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),i={class:""},r=Object(o["e"])('<div class="container mx-auto px-4 md:px-12 pt-24 min-h-screen"><div class="flex flex-row"><div class="w-1/3 p-3"><div class="shadow-xl p-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quae maxime laudantium nam eos temporibus quidem corporis voluptatibus architecto sit doloribus nobis soluta iure at sequi vitae aut velit magnam. </div></div><div class="w-1/3 p-3"><div class="shadow-xl p-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quae maxime laudantium nam eos temporibus quidem corporis voluptatibus architecto sit doloribus nobis soluta iure at sequi vitae aut velit magnam. </div></div><div class="w-1/3 p-3"><div class="shadow-xl p-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quae maxime laudantium nam eos temporibus quidem corporis voluptatibus architecto sit doloribus nobis soluta iure at sequi vitae aut velit magnam. </div></div></div></div>',1);function a(e,t,n,a,c,s){var l=Object(o["i"])("Navbar"),d=Object(o["i"])("Footer");return Object(o["h"])(),Object(o["c"])("div",i,[Object(o["f"])(l),r,Object(o["f"])(d)])}var c={class:"fixed w-full z-20 top-0 bg-blue-600"},s={class:"flex items-center justify-between h-16 container mx-auto px-4 md:px-12"},l=Object(o["d"])("div",{class:"-ml-2"},[Object(o["d"])("a",{href:"/",class:"text-white text-xl"}," DanangKonang ")],-1),d={class:"md:hidden"},u=Object(o["d"])("svg",{class:"h-8 w-8 fill-current text-black",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(o["d"])("path",{d:"M4 6h16M4 12h16M4 18h16"})],-1),b=[u],p={class:"hidden md:flex items-center justify-end"},f={class:""},v={class:"flex space-x-8 font-bold text-white"},m={class:"ml-4"},O={class:"close"},j=Object(o["d"])("svg",{class:"w-6 h-6",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(o["d"])("path",{d:"M6 18L18 6M6 6l12 12"})],-1),h=[j],x=Object(o["d"])("a",{href:"/",class:"font-bold text-gray-700"},"DanangKonang",-1),w=[x],g={class:"divide-y text-gray-700"};function y(e,t,n,i,r,a){return Object(o["h"])(),Object(o["c"])("nav",c,[Object(o["d"])("div",s,[l,Object(o["d"])("div",d,[Object(o["d"])("button",{onClick:t[0]||(t[0]=function(){return a.drawer&&a.drawer.apply(a,arguments)})},b)]),Object(o["d"])("div",p,[Object(o["d"])("div",f,[Object(o["d"])("ul",v,[Object(o["d"])("li",null,[Object(o["d"])("a",{href:"javascript:void(0)",class:"border-b-2 border-transparent pb-1",onClick:t[1]||(t[1]=function(e){return a.scrollTo("about")})},"About")]),Object(o["d"])("li",null,[Object(o["d"])("a",{href:"javascript:void(0)",class:"border-b-2 border-transparent pb-1",onClick:t[2]||(t[2]=function(e){return a.scrollTo("baner")})},"Portofolio")]),Object(o["d"])("li",null,[Object(o["d"])("a",{href:"javascript:void(0)",class:"border-b-2 border-transparent pb-1",onClick:t[3]||(t[3]=function(e){return a.scrollTo("contact")})},"Contact Us")])])]),Object(o["d"])("div",m,[Object(o["d"])("button",{onClick:t[4]||(t[4]=function(){return e.toggleModalDemo&&e.toggleModalDemo.apply(e,arguments)}),class:"block border-white border-2 max-w-xs w-32 focus:ring focus:ring-white focus:ring-opacity-30 focus:outline-none rounded-3xl px-1 py-2 font-bold hover:opacity-80 text-white"},"CV")])]),Object(o["f"])(o["a"],{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"},{default:Object(o["l"])((function(){return[Object(o["m"])(Object(o["d"])("div",{onKeydown:t[6]||(t[6]=Object(o["n"])((function(e){return r.isOpen=!1}),["esc"])),class:"z-10 fixed inset-0 transition-opacity"},[Object(o["d"])("div",{onClick:t[5]||(t[5]=function(e){return r.isOpen=!1}),class:"absolute inset-0 bg-black opacity-50",tabindex:"0"})],544),[[o["k"],r.isOpen]])]})),_:1}),Object(o["d"])("aside",{class:Object(o["g"])(["p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30",r.isOpen?"translate-x-0":"-translate-x-full"])},[Object(o["d"])("div",O,[Object(o["d"])("button",{class:"absolute top-0 right-0 mt-4 mr-4",onClick:t[7]||(t[7]=function(e){return r.isOpen=!1})},h)]),Object(o["d"])("span",{onClick:t[8]||(t[8]=function(e){return r.isOpen=!1}),class:"flex w-full items-center py-4 border-b"},w),Object(o["d"])("ul",g,[Object(o["d"])("li",null,[Object(o["d"])("a",{href:"javascript:void(0)",onClick:t[9]||(t[9]=function(e){return a.scrollTo("about")}),class:"my-4 inline-block"},"About")]),Object(o["d"])("li",null,[Object(o["d"])("a",{href:"javascript:void(0)",onClick:t[10]||(t[10]=function(e){return a.scrollTo("baner")}),class:"my-4 inline-block"},"Portofolio")]),Object(o["d"])("li",null,[Object(o["d"])("a",{href:"javascript:void(0)",onClick:t[11]||(t[11]=function(e){return a.scrollTo("contact")}),class:"my-4 inline-block"},"Contact Us")])])],2)])])}var k=n("ef19"),C=n("6b0d"),M=n.n(C);const P=M()(k["a"],[["render",y]]);var T=P,q={class:"bg-gray-700"},S=Object(o["e"])('<div class="container mx-auto flex flex-row px-4 md:px-12 py-10"><div class="flex lg:w-1/3 text-white flex-col"><div class="font-bold mb-3">Social Media</div><ul><li>linkedin</li></ul></div><div class="flex lg:w-1/3 text-white flex-col"><div class="font-bold mb-3">Contact Us</div><ul><li>danangkonang21@gmail.com</li></ul></div><div class="flex lg:w-1/3 text-white font-bold">Contact Us</div></div>',1),_={class:"text-center py-10 text-white text-sm"};function D(e,t,n,i,r,a){return Object(o["h"])(),Object(o["c"])("div",q,[S,Object(o["d"])("div",_,"danangkonang.github.io "+Object(o["j"])((new Date).getFullYear()),1)])}var L={name:"Footer",props:{msg:String},setup:function(){}};const F=M()(L,[["render",D]]);var U=F,z={name:"App",components:{Navbar:T,Footer:U}};const A=M()(z,[["render",a]]);var B=A;n("a766"),n("ba8c");Object(o["b"])(B).mount("#app")},a766:function(e,t,n){},ba8c:function(e,t,n){},ef19:function(e,t,n){"use strict";(function(e){t["a"]={name:"Navbar",data:function(){return{isOpen:!1}},methods:{drawer:function(){this.isOpen=!this.isOpen},scrollTo:function(e){var t=document.getElementById(e);window.scrollTo({top:t.offsetTop-64,behavior:"smooth"}),this.isOpen=!1}},watch:{isOpen:{immediate:!0,handler:function(t){e.client&&(t?document.body.style.setProperty("overflow","hidden"):document.body.style.removeProperty("overflow"))}}},mounted:function(){var e=this;document.addEventListener("keydown",(function(t){27===t.keyCode&&e.isOpen&&(e.isOpen=!1)}))}}}).call(this,n("4362"))}});
//# sourceMappingURL=app.888955f1.js.map