var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var j=(s,e,r)=>e in s?X(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,q=(s,e)=>{for(var r in e||(e={}))ee.call(e,r)&&j(s,r,e[r]);if(M)for(var r of M(e))te.call(e,r)&&j(s,r,e[r]);return s},z=(s,e)=>Y(s,Z(e));import{d as R,u as ue,r as K,a as k,o as G,c as H,b as t,w as u,h as oe,e as B,f as o,p as _e,g as ae,i as c,j as le,k as re}from"./vendor.066970ff.js";const se=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))D(n);new MutationObserver(n=>{for(const f of n)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&D(d)}).observe(document,{childList:!0,subtree:!0});function r(n){const f={};return n.integrity&&(f.integrity=n.integrity),n.referrerpolicy&&(f.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?f.credentials="include":n.crossorigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function D(n){if(n.ep)return;n.ep=!0;const f=r(n);fetch(n.href,f)}};se();var ne=(s,e)=>{const r=s.__vccOpts||s;for(const[D,n]of e)r[D]=n;return r};const x=s=>(_e("data-v-2185c012"),s=s(),ae(),s),de={class:"p1"},pe=x(()=>B("div",{class:"card-header"},[B("span",null,"\u661F\u9CA8\u51FA\u79DF\u73A9\u6CD5\u6781\u9650\u590D\u6295\u7B56\u7565\u7B80\u4ECB")],-1)),ie=x(()=>B("p",null,"\u661F\u9CA8\u51FA\u79DF\u73A9\u6CD5\u4E2D\uFF0C\u4E00\u661F\u9CA8\u9C7C\u4E00\u5929\u51FA\u79DF\u4EF7\u683C\u8BBE\u7F6E\u4E3A14sea\uFF0C\u6263\u9664\u7A0E\u6B3E\u540E\u53EF\u83B7\u5F97\u5229\u6DA613.405sea\u3002",-1)),ce=x(()=>B("p",null,"\u672C\u7B56\u7565\u4E2D\u90FD\u662F\u57FA\u4E8E\u4E0A\u8FF0\u4E00\u661F\u9CA8\u9C7C\u8FDB\u884C\u7684\uFF0C\u4E3B\u8981\u7B56\u7565\u4E3A\u6BCF\u65E5\u7D2F\u8BA1\u83B7\u53D6\u5229\u6DA6\uFF0C\u6BCF\u5F53\u7D2F\u8BA1\u5229\u6DA6\u53EF\u4EE5\u8D2D\u4E70\u4E00\u6761\u65B0\u7684\u9CA8\u9C7C\u65F6\u5219\u6267\u884C\u8D2D\u4E70\u64CD\u4F5C\u3002\u5728\u5B9E\u9645\u64CD\u4F5C\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u80FD\u5B58\u5728\u989D\u5916\u6295\u5165\u4EE5\u53CA\u5229\u6DA6\u63D0\u73B0\u60C5\u51B5\uFF0C\u5BF9\u6B64\u4E5F\u4E00\u5E76\u8BA1\u7B97\uFF0C\u5C06\u76F8\u5173\u53C2\u6570\u8BBE\u5B9A\u4E3A\u53D8\u91CF\u4EE5\u4FBF\u8C03\u6574\uFF0C\u4ECE\u800C\u627E\u5230\u5408\u9002\u81EA\u8EAB\u60C5\u51B5\u7684\u6700\u4F73\u7B56\u7565\u3002",-1)),he={class:"card-header"},fe=x(()=>B("span",null,"\u53D8\u91CF\u8BBE\u7F6E",-1)),me=c("\u5E94\u7528\u8BBE\u7F6E"),Ce=c("USDT"),Fe=c("USDT"),be=c("BNB"),ke=c("\u6298\u5408"),Ee=c("USDT"),Be=c("BNB"),De=c("\u6298\u5408"),ye=c("USDT"),Ae=c("SEA"),ve=c("\u6298\u5408"),Ve=c("USDT"),we=c("\u6761"),ge=c("USDT"),xe=c("USDT"),Ue=c("USDT"),Pe=c("\u6761"),Se=c("\u5929"),Te=x(()=>B("div",{class:"card-header"},[B("span",null,"\u6536\u76CA\u8BE6\u89E3")],-1)),Ne=R({setup(s){const e=ue("sss-state",{bnb_usdt_price:380,sea_usdt_price:.9,shark_bnb_price:1.2,shark_sea_price:500,income_usdt_per_week:1500,day_per_week:7,week_per_month:4,month_per_year:12,out_usdt_per_month:8e3,init_shark_count:38,sea_profit_per_shark_per_day:13.405,min_shark_count:1,day_length:306,begin_date:new Date}),r=K({total_cost:0,total_income:0,current_shark_count:0,out_usdt_profit:0,current_usdt_profit:0}),D=K({list:[]}),n=()=>{let{bnb_usdt_price:d,sea_usdt_price:_,shark_bnb_price:p,shark_sea_price:m,income_usdt_per_week:F,day_per_week:b,week_per_month:i,month_per_year:h,out_usdt_per_month:E,init_shark_count:g,sea_profit_per_shark_per_day:C,min_shark_count:A,day_length:l}=e.value;d=+d,_=+_,p=+p,m=+m,F=+F,b=+b,i=+i,h=+h,E=+E,g=+g,C=+C,A=+A,l=+l;const v=[];let P=0,S=0;for(let y=0;y<l;y++){P+=1;let V=0,I=0,T=0,N=0,a={};y===0?(V=+g,N=+e.value.init_shark_count*+e.value.shark_bnb_price*+e.value.bnb_usdt_price):(V=v[y-1].current_shark_count,I=v[y-1].total_usdt_profit,T=v[y-1].out_usdt_profit,N=v[y-1].total_cost),a.current_shark_count=V,a.out_usdt_profit=T,a.total_cost=N;const L=P===b;L&&(a.total_cost=a.total_cost+F,P=0,S+=1);const O=S===i;O&&(S=0);const $=O,Q=V*C*_+(L?F:0);a.total_usdt_profit=I+Q;const W=($?a.total_usdt_profit-E:a.total_usdt_profit)/d,U=Math.floor(W/p);if(U>=1&&(a.current_shark_count=V+U,a.total_usdt_profit=a.total_usdt_profit-U*p*d,a.add={prev:V,add:U,next:a.current_shark_count}),$){if(a.total_usdt_profit<E){const w=Math.ceil((E-a.total_usdt_profit)/p/d);if(a.current_shark_count-A<w)throw new Error(`\u9CA8\u9C7C\u6570\u91CF\u4E0D\u8DB3\uFF0C\u4EC5\u6709${a.current_shark_count}\u6761\uFF0C\u9700\u81F3\u5C11\u4FDD\u7559${A}\u6761\uFF0C\u65E0\u6CD5\u5356\u51FA${w}\u6761`);a.current_shark_count=a.current_shark_count-w,a.total_usdt_profit=a.total_usdt_profit+w*p*d,a.add={prev:a.current_shark_count+w,add:w*-1,next:a.current_shark_count}}a.total_usdt_profit=a.total_usdt_profit-E,a.out_usdt_profit=T+E}v.push(a)}return v},f=()=>{try{const d=n();console.log(d);const _=d.map((m,F)=>{let b=z(q({},m),{current_usdt_profit:m.total_usdt_profit.toFixed(0),total_income:(m.out_usdt_profit+m.total_usdt_profit+m.current_shark_count*+e.value.shark_bnb_price*+e.value.bnb_usdt_price).toFixed(0),date:oe(e.value.begin_date).add(F,"days").format("L"),per_day_usdt_profit:(m.current_shark_count*+e.value.sea_profit_per_shark_per_day*+e.value.sea_usdt_price).toFixed(0),shark_usdt_value:(m.current_shark_count*+e.value.shark_bnb_price*+e.value.bnb_usdt_price).toFixed(0)});return b.total_profit=(b.total_income-b.total_cost).toFixed(0),b});D.list=_;const p=d[d.length-1];r.current_shark_count=p.current_shark_count,r.current_usdt_profit=p.total_usdt_profit,r.out_usdt_profit=p.out_usdt_profit,r.total_cost=p.total_cost,r.total_income=p.out_usdt_profit+p.total_usdt_profit+p.current_shark_count*+e.value.shark_bnb_price*+e.value.bnb_usdt_price}catch(d){console.error(d)}};return f(),(d,_)=>{const p=k("el-card"),m=k("el-col"),F=k("el-row"),b=k("el-button"),i=k("el-input"),h=k("el-form-item"),E=k("el-date-picker"),g=k("el-form"),C=k("el-table-column"),A=k("el-table");return G(),H("section",de,[t(F,null,{default:u(()=>[t(m,{span:24},{default:u(()=>[t(p,{class:"box-card"},{header:u(()=>[pe]),default:u(()=>[ie,ce]),_:1})]),_:1})]),_:1}),t(F,{gutter:16},{default:u(()=>[t(m,{span:24},{default:u(()=>[t(p,{class:"box-card"},{header:u(()=>[B("div",he,[fe,t(b,{type:"primary",class:"btn-set",onClick:f},{default:u(()=>[me]),_:1})])]),default:u(()=>[t(g,{size:"small",model:o(e),"label-position":"right","label-width":"200px",inline:""},{default:u(()=>[t(h,{label:"bnb\u4EF7\u683C"},{default:u(()=>[t(i,{modelValue:o(e).bnb_usdt_price,"onUpdate:modelValue":_[0]||(_[0]=l=>o(e).bnb_usdt_price=l),placeholder:"Please input",style:{width:"200px"}},{append:u(()=>[Ce]),_:1},8,["modelValue"])]),_:1}),t(h,{label:"sea\u4EF7\u683C"},{default:u(()=>[t(i,{modelValue:o(e).sea_usdt_price,"onUpdate:modelValue":_[1]||(_[1]=l=>o(e).sea_usdt_price=l),placeholder:"Please input"},{append:u(()=>[Fe]),_:1},8,["modelValue"])]),_:1}),t(h,{label:"\u9CA8\u9C7C\u4EF7\u683C(bnb)"},{default:u(()=>[t(i,{modelValue:o(e).shark_bnb_price,"onUpdate:modelValue":_[2]||(_[2]=l=>o(e).shark_bnb_price=l),placeholder:"Please input"},{append:u(()=>[be]),_:1},8,["modelValue"]),t(i,{"model-value":o(e).shark_bnb_price*o(e).bnb_usdt_price,placeholder:"Please input"},{prepend:u(()=>[ke]),append:u(()=>[Ee]),_:1},8,["model-value"])]),_:1}),t(h,{label:"\u9CA8\u9C7C\u4EF7\u683C(sea)"},{default:u(()=>[t(i,{modelValue:o(e).shark_sea_price,"onUpdate:modelValue":_[3]||(_[3]=l=>o(e).shark_sea_price=l),placeholder:"Please input"},{append:u(()=>[Be]),_:1},8,["modelValue"]),t(i,{"model-value":o(e).shark_sea_price*o(e).sea_usdt_price,placeholder:"Please input"},{prepend:u(()=>[De]),append:u(()=>[ye]),_:1},8,["model-value"])]),_:1}),t(h,{label:"\u6BCF\u6761\u9CA8\u9C7C\u6BCF\u5929\u51FA\u79DF\u6536\u5165"},{default:u(()=>[t(i,{modelValue:o(e).sea_profit_per_shark_per_day,"onUpdate:modelValue":_[4]||(_[4]=l=>o(e).sea_profit_per_shark_per_day=l),placeholder:"Please input"},{append:u(()=>[Ae]),_:1},8,["modelValue"]),t(i,{"model-value":o(e).sea_profit_per_shark_per_day*o(e).sea_usdt_price,placeholder:"Please input"},{prepend:u(()=>[ve]),append:u(()=>[Ve]),_:1},8,["model-value"])]),_:1}),t(h,{label:"\u521D\u59CB\u9CA8\u9C7C\u6761\u6570"},{default:u(()=>[t(i,{modelValue:o(e).init_shark_count,"onUpdate:modelValue":_[5]||(_[5]=l=>o(e).init_shark_count=l),placeholder:"Please input"},{append:u(()=>[we]),_:1},8,["modelValue"])]),_:1}),t(h,{label:"\u521D\u59CB\u591F\u4E70\u9CA8\u9C7C\u6295\u5165"},{default:u(()=>[t(i,{"model-value":o(e).init_shark_count*o(e).shark_bnb_price*o(e).bnb_usdt_price,placeholder:"Please input"},{append:u(()=>[ge]),_:1},8,["model-value"])]),_:1}),t(h,{label:"\u6BCF\u5468\u989D\u5916\u8D2D\u4E70\u9CA8\u9C7C\u6295\u5165(usdt)"},{default:u(()=>[t(i,{modelValue:o(e).income_usdt_per_week,"onUpdate:modelValue":_[6]||(_[6]=l=>o(e).income_usdt_per_week=l),placeholder:"Please input"},{append:u(()=>[xe]),_:1},8,["modelValue"])]),_:1}),t(h,{label:"\u6BCF\u6708\u63D0\u73B0(usdt)"},{default:u(()=>[t(i,{modelValue:o(e).out_usdt_per_month,"onUpdate:modelValue":_[7]||(_[7]=l=>o(e).out_usdt_per_month=l),placeholder:"Please input"},{append:u(()=>[Ue]),_:1},8,["modelValue"])]),_:1}),t(h,{label:"\u6700\u5C11\u4FDD\u7559\u9CA8\u9C7C\u6761\u6570"},{default:u(()=>[t(i,{modelValue:o(e).min_shark_count,"onUpdate:modelValue":_[8]||(_[8]=l=>o(e).min_shark_count=l),placeholder:"Please input"},{append:u(()=>[Pe]),_:1},8,["modelValue"])]),_:1}),t(h,{label:"\u6781\u9650\u590D\u6295\u7B56\u7565\u5929\u6570"},{default:u(()=>[t(i,{modelValue:o(e).day_length,"onUpdate:modelValue":_[9]||(_[9]=l=>o(e).day_length=l),placeholder:"Please input"},{append:u(()=>[Se]),_:1},8,["modelValue"])]),_:1}),t(h,{label:"\u5F00\u59CB\u65E5\u671F"},{default:u(()=>[t(E,{modelValue:o(e).begin_date,"onUpdate:modelValue":_[10]||(_[10]=l=>o(e).begin_date=l),type:"date",placeholder:"Pick a day"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1}),t(F,null,{default:u(()=>[t(m,{span:24},{default:u(()=>[t(p,{class:"box-card"},{header:u(()=>[Te]),default:u(()=>[t(A,{data:o(D).list,stripe:"","max-height":800},{default:u(()=>[t(C,{type:"index",width:"50"}),t(C,{property:"date",label:"Date",width:"100"}),t(C,{property:"current_shark_count",label:"\u9CA8\u9C7C\u6761\u6570",width:"80"}),t(C,{property:"per_day_usdt_profit",label:"\u65E5\u79DF\u91D1\u6536\u5165",width:"120"}),t(C,{property:"current_usdt_profit",label:"\u5269\u4F59\u53EF\u7528",width:"120"}),t(C,{property:"shark_usdt_value",label:"\u9CA8\u9C7C\u4EF7\u503C",width:"100"}),t(C,{property:"out_usdt_profit",label:"\u7D2F\u8BA1\u63D0\u73B0",width:"80"}),t(C,{property:"total_income",label:"\u603B\u6536\u5165",width:"120"}),t(C,{property:"total_cost",label:"\u603B\u6210\u672C",width:"100"}),t(C,{property:"total_profit",label:"\u603B\u5229\u6DA6",width:"120"})]),_:1},8,["data"])]),_:1})]),_:1})]),_:1})])}}});var Ie=ne(Ne,[["__scopeId","data-v-2185c012"]]);const Le={class:"main"},Oe=R({setup(s){return(e,r)=>(G(),H("main",Le,[B("section",null,[t(Ie)])]))}}),J=le(Oe);J.use(re);J.mount("#app");
