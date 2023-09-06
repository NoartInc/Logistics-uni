var y=Object.defineProperty,S=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var N=(t,o,i)=>o in t?y(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,s=(t,o)=>{for(var i in o||(o={}))C.call(o,i)&&N(t,i,o[i]);if(D)for(var i of D(o))G.call(o,i)&&N(t,i,o[i]);return t},n=(t,o)=>S(t,U(o));import{r as O,C as d,p as v,j as p,a as r,l as R,u as L,b as M,c as h,d as m,N as w,O as b,e as A,F as V,R as x,f as _,g as K,h as j,i as B,k as $,m as z,n as F,o as H,t as q,q as k,s as W,P as X,v as Y,B as Z}from"./vendor.d0f36d5e.js";const J=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))e(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const E of c.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&e(E)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerpolicy&&(c.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?c.credentials="include":l.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function e(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}};J();const Q="modulepreload",I={},tt="/",u=function(o,i){return!i||i.length===0?o():Promise.all(i.map(e=>{if(e=`${tt}${e}`,e in I)return;I[e]=!0;const l=e.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${c}`))return;const E=document.createElement("link");if(E.rel=l?"stylesheet":Q,l||(E.as="script",E.crossOrigin=""),E.href=e,document.head.appendChild(E),l)return new Promise((a,f)=>{E.addEventListener("load",a),E.addEventListener("error",f)})})).then(()=>o())};const T=()=>O("./src/css/tailwind.config.js");function Ue(...t){return t.filter(Boolean).join(" ")}const Ce=()=>"https://backend-uni.transmetalplb.my.id";d.register(v);d.defaults.font.family='"Inter", sans-serif';d.defaults.font.weight="500";d.defaults.color=T().theme.colors.slate[400];d.defaults.scale.grid.color=T().theme.colors.slate[100];d.defaults.plugins.tooltip.titleColor=T().theme.colors.slate[800];d.defaults.plugins.tooltip.bodyColor=T().theme.colors.slate[800];d.defaults.plugins.tooltip.backgroundColor=T().theme.colors.white;d.defaults.plugins.tooltip.borderWidth=1;d.defaults.plugins.tooltip.borderColor=T().theme.colors.slate[200];d.defaults.plugins.tooltip.displayColors=!1;d.defaults.plugins.tooltip.mode="nearest";d.defaults.plugins.tooltip.intersect=!1;d.defaults.plugins.tooltip.position="nearest";d.defaults.plugins.tooltip.caretSize=0;d.defaults.plugins.tooltip.caretPadding=20;d.defaults.plugins.tooltip.cornerRadius=4;d.defaults.plugins.tooltip.padding=8;d.register({id:"chartAreaPlugin",beforeDraw:t=>{if(t.config.options.chartArea&&t.config.options.chartArea.backgroundColor){const o=t.canvas.getContext("2d"),{chartArea:i}=t;o.save(),o.fillStyle=t.config.options.chartArea.backgroundColor,o.fillRect(i.left,i.top,i.right-i.left,i.bottom-i.top),o.restore()}}});const et=(t=!0)=>o=>{o({type:"TOGGLE_BANNER",payload:t})},st=()=>p("div",{className:"h-screen w-screen bg-gray-700 flex flex-row justify-center items-center",children:[p("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[r("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),r("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),r("span",{className:"text-white",children:"Memuat Halaman"})]}),rt=R(()=>u(()=>import("./Banner.703902ad.js"),["assets/Banner.703902ad.js","assets/vendor.d0f36d5e.js"])),ot=R(()=>u(()=>import("./Header.3f102113.js"),["assets/Header.3f102113.js","assets/vendor.d0f36d5e.js","assets/UserMenu.e8102ba5.js","assets/auth-action.6bc30691.js","assets/http-common.6e1a67a8.js"])),at=R(()=>u(()=>import("./Sidebar.8f084ed6.js"),["assets/Sidebar.8f084ed6.js","assets/vendor.d0f36d5e.js","assets/constants.b42f89d0.js"])),it=()=>{const t=L(),o=M(),{showBanner:i}=h(a=>a.layout),{isLogin:e,user:l}=h(a=>a.authReducer),[c,E]=m.exports.useState(!1);return m.exports.useEffect(()=>{o(et(!0))},[t]),!e&&!l?r(w,{to:"/login",state:{from:t},replace:!0}):r(m.exports.Suspense,{fallback:r(st,{}),children:p("div",{className:"flex h-screen overflow-hidden",children:[r(at,{sidebarOpen:c,setSidebarOpen:E}),p("div",{className:"relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden",children:[r(ot,{sidebarOpen:c,setSidebarOpen:E}),r("main",{children:r("div",{className:"px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",children:r(b,{layoutData:"tes"})})}),i&&r(rt,{})]})]})})},nt=A(()=>u(()=>import("./Dashboard.1999c219.js"),["assets/Dashboard.1999c219.js","assets/vendor.d0f36d5e.js","assets/constants.b42f89d0.js","assets/UserMenu.e8102ba5.js","assets/auth-action.6bc30691.js","assets/http-common.6e1a67a8.js","assets/moment.97884b08.js","assets/lodash.56d73e51.js","assets/pengiriman-action.c8c84e75.js"])),lt=A(()=>u(()=>import("./UserList.62656067.js"),["assets/UserList.62656067.js","assets/vendor.d0f36d5e.js","assets/UserMenu.e8102ba5.js","assets/auth-action.6bc30691.js","assets/http-common.6e1a67a8.js","assets/constants.b42f89d0.js","assets/Icons.9f596ea2.js","assets/user-action.224af0ef.js"])),ct=A(()=>u(()=>import("./UserConfig.65805eb6.js"),["assets/UserConfig.65805eb6.js","assets/vendor.d0f36d5e.js"])),Et=A(()=>u(()=>import("./BuatPengiriman.956945fe.js"),["assets/BuatPengiriman.956945fe.js","assets/vendor.d0f36d5e.js","assets/pengiriman-action.c8c84e75.js","assets/http-common.6e1a67a8.js","assets/constants.b42f89d0.js","assets/react-select.esm.eeecf029.js","assets/customer-action.1b20a28c.js","assets/pengangkutan-action.3a9b6801.js","assets/KendaraanOptions.d0effa8a.js","assets/user-action.224af0ef.js","assets/kendaraan-action.393c42b1.js"])),dt=A(()=>u(()=>import("./ListPengiriman.9dff1327.js"),["assets/ListPengiriman.9dff1327.js","assets/vendor.d0f36d5e.js","assets/pengiriman-action.c8c84e75.js","assets/http-common.6e1a67a8.js","assets/constants.b42f89d0.js","assets/react-select.esm.eeecf029.js","assets/teli-action.d7214cd3.js","assets/KendaraanOptions.d0effa8a.js","assets/user-action.224af0ef.js","assets/kendaraan-action.393c42b1.js","assets/Icons.9f596ea2.js","assets/moment.97884b08.js"])),ut=A(()=>u(()=>import("./BuatBerita.4dc18503.js"),["assets/BuatBerita.4dc18503.js","assets/vendor.d0f36d5e.js"])),_t=A(()=>u(()=>import("./ListBerita.6cd8a500.js"),["assets/ListBerita.6cd8a500.js","assets/vendor.d0f36d5e.js"])),At=A(()=>u(()=>import("./MasterCustomer.055c71b5.js"),["assets/MasterCustomer.055c71b5.js","assets/vendor.d0f36d5e.js","assets/customer-action.1b20a28c.js","assets/http-common.6e1a67a8.js","assets/react-select.esm.eeecf029.js","assets/user-action.224af0ef.js","assets/Icons.9f596ea2.js","assets/constants.b42f89d0.js"])),ft=A(()=>u(()=>import("./MasterKendaraan.5e8d2656.js"),["assets/MasterKendaraan.5e8d2656.js","assets/vendor.d0f36d5e.js","assets/kendaraan-action.393c42b1.js","assets/http-common.6e1a67a8.js","assets/Icons.9f596ea2.js","assets/constants.b42f89d0.js"])),pt=A(()=>u(()=>import("./MasterTeli.38b6dad1.js"),["assets/MasterTeli.38b6dad1.js","assets/vendor.d0f36d5e.js","assets/moment.97884b08.js","assets/teli-action.d7214cd3.js","assets/http-common.6e1a67a8.js","assets/Icons.9f596ea2.js","assets/constants.b42f89d0.js"])),Tt=A(()=>u(()=>import("./MasterPengangkutan.b37a7677.js"),["assets/MasterPengangkutan.b37a7677.js","assets/vendor.d0f36d5e.js","assets/pengangkutan-action.3a9b6801.js","assets/http-common.6e1a67a8.js","assets/Icons.9f596ea2.js","assets/constants.b42f89d0.js"])),Rt=A(()=>u(()=>import("./Summary.cd7a1820.js"),["assets/Summary.cd7a1820.js","assets/vendor.d0f36d5e.js"])),mt=R(()=>u(()=>import("./LoginForm.c63c5f18.js"),["assets/LoginForm.c63c5f18.js","assets/vendor.d0f36d5e.js","assets/auth-action.6bc30691.js","assets/http-common.6e1a67a8.js"])),Dt=A(()=>u(()=>import("./DetailPengiriman.e98f8740.js"),["assets/DetailPengiriman.e98f8740.js","assets/vendor.d0f36d5e.js","assets/pengiriman-action.c8c84e75.js","assets/http-common.6e1a67a8.js","assets/constants.b42f89d0.js","assets/moment.97884b08.js","assets/lodash.56d73e51.js"])),Nt=A(()=>u(()=>import("./TeliProfile.aa07d975.js"),["assets/TeliProfile.aa07d975.js","assets/vendor.d0f36d5e.js","assets/teli-action.d7214cd3.js","assets/http-common.6e1a67a8.js"]));function Lt(){const t=L();return m.exports.useEffect(()=>{document.querySelector("html").style.scrollBehavior="auto",window.scroll({top:0}),document.querySelector("html").style.scrollBehavior=""},[t.pathname]),r(V,{children:p(x,{children:[r(_,{exact:!0,path:"/login",element:r(mt,{})}),p(_,{path:"/",element:r(it,{}),children:[r(_,{path:"",index:!0,element:r(nt,{})}),r(_,{path:"userlist",element:r(lt,{})}),r(_,{path:"userconfig",element:r(ct,{})}),r(_,{path:"buatpengiriman",element:r(Et,{})}),r(_,{path:"listpengiriman",element:r(dt,{})}),r(_,{path:"buatberita",element:r(ut,{})}),r(_,{path:"listberita",element:r(_t,{})}),r(_,{path:"mastercustomer",element:r(At,{})}),r(_,{path:"masterkendaraan",element:r(ft,{})}),r(_,{path:"masterteli",element:r(pt,{})}),r(_,{path:"masterpengangkutan",element:r(Tt,{})}),r(_,{path:"summary",element:r(Rt,{})}),r(_,{path:"listpengiriman/detailpengiriman/:id",element:r(Dt,{})}),r(_,{path:"masterteli/teliprofile/:id",element:r(Nt,{})})]})]})})}const ht="CREATE_USER",It="RETRIEVE_USER",Pt="EDIT_USER",gt="UPDATE_USER",yt="DELETE_USER",St="DELETE_ALL_USER",Ut="CREATE_KENDARAAN",Ct="RETRIEVE_KENDARAAN",Gt="EDIT_KENDARAAN",Ot="UPDATE_KENDARAAN",vt="DELETE_KENDARAAN",Mt="DELETE_ALL_KENDARAAN",wt="CREATE_CUSTOMER",bt="RETRIEVE_CUSTOMER",Vt="EDIT_CUSTOMER",xt="UPDATE_CUSTOMER",Kt="DELETE_CUSTOMER",jt="DELETE_ALL_CUSTOMER",Bt="CREATE_TELI",$t="RETRIEVE_TELI",zt="EDIT_TELI",Ft="UPDATE_TELI",Ht="DELETE_TELI",qt="DELETE_ALL_TELI",kt="CREATE_PENGANGKUTAN",Wt="EDIT_PENGANGKUTAN",Xt="RETRIEVE_PENGANGKUTAN",Yt="UPDATE_PENGANGKUTAN",Zt="DELETE_PENGANGKUTAN",Jt="DELETE_ALL_PENGANGKUTAN",Qt="CREATE_PENGIRIMAN",te="EDIT_PENGIRIMAN",ee="MODIFY_PENGIRIMAN",se="RETRIEVE_PENGIRIMAN",re="UPDATE_PENGIRIMAN",oe="DELETE_PENGIRIMAN",ae="DELETE_ALL_PENGIRIMAN",Ge="EXPORT_DATA_PENGIRIMAN",ie="GET_DASHBOARD",ne={list:[],selectedData:null};function le(t=ne,o){const{type:i,payload:e}=o;switch(i){case ht:return n(s({},t),{list:[...t.list,e]});case It:return n(s({},t),{list:e.users});case Pt:const l=t.list.find(a=>a.id===e);return n(s({},t),{selectedData:l});case gt:const c=t.list.map(a=>a.id===e.id?s(s({},a),e):a);return n(s({},t),{list:c});case yt:const E=t.list.filter(({id:a})=>a!==e.id);return n(s({},t),{list:E});case St:return{list:[],selectedData:null};default:return t}}const ce={list:[],selectedData:null};function Ee(t=ce,o){const{type:i,payload:e}=o;switch(i){case Ut:return n(s({},t),{list:[...t.list,e]});case Ct:return n(s({},t),{list:e.kendaraans});case Gt:const l=t.list.find(a=>a.id===e);return n(s({},t),{selectedData:l});case Ot:const c=t.list.map(a=>a.id===e.id?s(s({},a),e):a);return n(s({},t),{list:c});case vt:const E=t.list.filter(({id:a})=>a!==e.id);return n(s({},t),{list:E});case Mt:return{list:[],selectedData:null};default:return t}}const de={list:[],selectedData:null};function ue(t=de,o){const{type:i,payload:e}=o;switch(i){case wt:return n(s({},t),{list:[...t.list,e]});case bt:return n(s({},t),{list:e.customers});case Vt:const l=t.list.find(a=>a.id===e);return n(s({},t),{selectedData:l});case xt:const c=t.list.map(a=>a.id===e.id?s(s({},a),e):a);return n(s({},t),{list:c});case Kt:const E=t.list.filter(({id:a})=>a!==e.id);return n(s({},t),{list:E});case jt:return{list:[],selectedData:null};default:return t}}const _e={list:[],selectedData:null};function Ae(t=_e,o){const{type:i,payload:e}=o;switch(i){case Bt:return n(s({},t),{list:[...t.list,e]});case $t:return n(s({},t),{list:e.telis});case zt:const l=t.list.find(a=>a.id===e);return n(s({},t),{selectedData:l});case Ft:const c=t.list.map(a=>a.id===e.id?s(s({},a),e):a);return n(s({},t),{list:c});case Ht:const E=t.list.filter(({id:a})=>a!==e.id);return n(s({},t),{list:E});case qt:return{list:[],selectedData:null};default:return t}}const fe={list:[],selectedData:null};function pe(t=fe,o){const{type:i,payload:e}=o;switch(i){case kt:return n(s({},t),{list:[...t.list,e]});case Xt:return n(s({},t),{list:e.pengangkutans});case Wt:const l=t.list.find(a=>a.id===e);return n(s({},t),{selectedData:l});case Yt:const c=t.list.map(a=>a.id===e.id?s(s({},a),e):a);return n(s({},t),{list:c});case Zt:const E=t.list.filter(({id:a})=>a!==e.id);return n(s({},t),{list:E});case Jt:return{list:[],selectedData:null};default:return t}}const Te={list:[],page:1,pageCount:0,pageSize:25,selectedData:null,summary:null,search:""};function Re(t=Te,o){const{type:i,payload:e}=o;switch(i){case Qt:return n(s({},t),{list:[...t.list,e]});case se:return n(s({},t),{list:e.pengirimans.rows,pageCount:e.pengirimans.pageCount});case"SET_PAGE":return n(s({},t),{page:e+1});case"SET_SEARCH":return n(s({},t),{page:1,search:e});case"SET_PAGE_SIZE":return n(s({},t),{pageSize:e});case te:const l=t.list.find(f=>f.id===e);return n(s({},t),{selectedData:l});case ee:const c=t.list.find(f=>f.id===e);return n(s({},t),{selectedData:c});case re:const E=t.list.map(f=>f.id===e.id?s(s({},f),e):f);return n(s({},t),{list:E});case oe:const a=t.list.filter(({id:f})=>f!==e.id);return n(s({},t),{list:a});case ae:return{list:[],selectedData:null};case ie:return n(s({},t),{summary:o.payload});default:return t}}const P={user:null,isLogin:!1,token:null},me=(t=P,o)=>{switch(o.type){case"LOGIN_USER":return n(s({},t),{user:o.payload.user,token:o.payload.token,isLogin:!0});case"authLogout":return s(s({},t),P);default:return t}},De={showBanner:!0},Ne=(t=De,o)=>{switch(o.type){case"TOGGLE_BANNER":return{showBanner:o.payload};default:return t}};var Le=K({layout:Ne,users:le,kendaraans:Ee,customers:ue,telis:Ae,pengangkutans:pe,pengirimans:Re,authReducer:me});const he={key:"root",storage:H},Ie=j(he,Le),Pe=B(q),g=$(Ie,z(Pe)),ge=F(g);k.render(r(W.StrictMode,{children:r(X,{store:g,children:r(Y,{loading:null,persistor:ge,children:r(Z,{children:r(Lt,{})})})})}),document.getElementById("root"));export{Bt as A,Ce as B,Qt as C,oe as D,Ge as E,ie as G,se as R,re as U,u as _,It as a,yt as b,Ue as c,Pt as d,gt as e,ht as f,bt as g,Kt as h,Vt as i,xt as j,wt as k,Xt as l,Zt as m,Wt as n,Yt as o,kt as p,Ct as q,vt as r,g as s,et as t,Gt as u,Ot as v,Ut as w,$t as x,Ht as y,Ft as z};