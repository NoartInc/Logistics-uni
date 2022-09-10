import{G as p,R as l,D as g,C as d,U as y,E as m}from"./index.f71ab816.js";import{a as o}from"./http-common.c2a35339.js";import{u as h}from"./constants.091680d7.js";class u{getAll(e,a,r,s){return o.get(`/pengiriman?role=${e}&page=${a}&limit=${r}&search=${s}`)}get(e){return o.get(`/pengiriman/${e}`)}create(e){return o.post("/pengiriman",e)}update(e,a){return o.put(`/pengiriman/${e}`,a)}delete(e){return o.delete(`/pengiriman/${e}`)}deleteAll(){return o.delete("/pengiriman")}exportData(e,a){return o.get(`/pengiriman/export/downloadPengiriman?startDate=${e}&endDate=${a}`)}getDashboard(e){return o.get("/pengiriman/dashboard/pengiriman",e)}}var c=new u;const D=t=>async e=>{var a,r,s;try{const n=await c.create(t);return((a=n.data)==null?void 0:a.data)&&e({type:d,payload:n.data.data}),Promise.resolve((s=(r=n.data)==null?void 0:r.data)!=null?s:null)}catch(n){return Promise.reject(n)}},I=()=>async(t,e)=>{const{user:a}=h,{page:r,pageSize:s,search:n=""}=e().pengirimans;try{const i=await c.getAll(a==null?void 0:a.role,r,s,n);t({type:l,payload:{pengirimans:i.data}})}catch(i){console.error(i)}},R=t=>async e=>{try{e({type:"SET_PAGE",payload:t})}catch(a){console.log(a)}},w=t=>async e=>{try{e({type:"SET_SEARCH",payload:t})}catch(a){console.log(a)}},S=t=>async e=>{try{e({type:"SET_PAGE_SIZE",payload:t})}catch(a){console.log(a)}},_=t=>async e=>{try{return await c.get(t)}catch(a){console.log(a)}},$=t=>async e=>{try{const a=await c.update(t.id,t);return e({type:y,payload:t}),Promise.resolve(a.data)}catch(a){return Promise.reject(a)}},N=t=>async e=>{try{await c.delete(t),e({type:g,payload:{id:t}})}catch(a){console.log(a)}},T=(t,e)=>async a=>{try{const r=await c.exportData(t,e);a({type:m,payload:r.data});const{path:s}=r.data,n=s.replace("./public","");console.log(n),window.open(`https://transmetalroof.com:5000${n}`)}catch(r){return Promise.reject(r)}},f=()=>async t=>{try{const e=await c.getDashboard();t({type:p,payload:e.data.results})}catch(e){console.error(e)}};export{T as a,R as b,D as c,S as d,_ as e,w as f,f as g,N as h,I as r,$ as u};
