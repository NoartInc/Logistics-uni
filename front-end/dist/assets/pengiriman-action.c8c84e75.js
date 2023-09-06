import{G as l,R as g,D as d,C as y,U as p,E as m}from"./index.ad72ca56.js";import{a as s}from"./http-common.6e1a67a8.js";import{u}from"./constants.b42f89d0.js";class h{getAll(a,e,t,o){return s.get(`/pengiriman?role=${a}&page=${e}&limit=${t}&search=${o}`)}get(a){return s.get(`/pengiriman/${a}`)}create(a){return s.post("/pengiriman",a)}update(a,e){let t=e;if(typeof(e==null?void 0:e.image)!="undefined"){t=new FormData;for(const[o,n]of Object.entries(e))t.append(o,n)}return s.post(`/pengiriman/${a}/update`,t,{headers:{"Content-Type":typeof(e==null?void 0:e.image)!="undefined"?"multipart/form-data":"application/x-www-form-urlencoded"}})}updateData(a,e){return s.put(`/pengiriman/${a}/update-data`,e)}delete(a){return s.delete(`/pengiriman/${a}`)}deleteAll(){return s.delete("/pengiriman")}exportData(a,e){return s.get(`/pengiriman/export/downloadPengiriman?startDate=${a}&endDate=${e}`)}getDashboard(a){return s.get("/pengiriman/dashboard/pengiriman",a)}}var c=new h;const f=r=>async a=>{var e,t,o;try{const n=await c.create(r);return((e=n.data)==null?void 0:e.data)&&a({type:y,payload:n.data.data}),Promise.resolve((o=(t=n.data)==null?void 0:t.data)!=null?o:null)}catch(n){return Promise.reject(n)}},w=()=>async(r,a)=>{const{user:e}=u,{page:t,pageSize:o,search:n=""}=a().pengirimans;try{const i=await c.getAll(e==null?void 0:e.role,t,o,n);r({type:g,payload:{pengirimans:i.data}})}catch(i){console.error(i)}},A=r=>async a=>{try{a({type:"SET_PAGE",payload:r})}catch(e){console.log(e)}},$=r=>async a=>{try{a({type:"SET_SEARCH",payload:r})}catch(e){console.log(e)}},I=r=>async a=>{try{a({type:"SET_PAGE_SIZE",payload:r})}catch(e){console.log(e)}},R=r=>async a=>{try{return await c.get(r)}catch(e){console.log(e)}},S=r=>async a=>{try{return await c.get(r)}catch(e){console.log(e)}},T=r=>async a=>{try{const e=await c.update(r.id,r);return a({type:p,payload:r}),Promise.resolve(e.data)}catch(e){return Promise.reject(e)}},_=r=>async a=>{try{const e=await c.updateData(r==null?void 0:r.id,r);return a({type:p,payload:r}),Promise.resolve(e.data)}catch(e){return Promise.reject(e)}},b=r=>async a=>{try{await c.delete(r),a({type:d,payload:{id:r}})}catch(e){console.log(e)}},N=(r,a)=>async e=>{try{const t=await c.exportData(r,a);e({type:m,payload:t.data});const{path:o}=t.data,n=o.replace("./public","");console.log(n),window.open(`https://backend-uni.transmetalplb.my.id${n}`)}catch(t){return Promise.reject(t)}},G=()=>async r=>{try{const a=await c.getDashboard();r({type:l,payload:a.data.results})}catch(a){console.error(a)}};export{_ as a,N as b,f as c,A as d,R as e,I as f,G as g,$ as h,b as i,S as m,w as r,T as u};