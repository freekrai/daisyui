import{a as s,t as o,f as B,s as e,b as r}from"../chunks/disclose-version.CGgwR5Q_.js";import{m as C,g as f,t as h,u as t}from"../chunks/runtime.BUdK6G03.js";import{a as _}from"../chunks/render.BsqpemKD.js";import{i as x}from"../chunks/112.sHUaA7ha.js";import{e as E,i as O}from"../chunks/each.D0yaHp8t.js";import{s as l,h as q}from"../chunks/i18n.DfsbkJEL.js";import{p as A}from"../chunks/props._SqaxKkw.js";import{S as D}from"../chunks/SEO.DdBYBv7E.js";var F=o('<div class="border-base-content/10 rounded-box flex h-96 w-full grow flex-col items-center justify-center border"><h1 class="text-base-content/30">Coming soon</h1></div>'),G=o('<figure class="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0"><img loading="lazy" class="border-base-content bg-base-300 rounded-btn border border-opacity-5"></figure>'),H=o('<a class="card sm:card-side hover:bg-base-200 transition-colors sm:max-w-none"><!> <div class="card-body"><h2 class="card-title"> </h2> <p class="text-xs opacity-60"> </p></div></a>'),J=o('<!> <!> <div class="grid justify-items-stretch gap-6"></div>',1);function X(y,w){let $=A(w,"data")(),c=C($.posts);var n=J(),g=B(n);D(g,{title:"daisyUI Blog",desc:"daisyUI blog - Updates, ideas and resources",img:"https://img.daisyui.com/images/blog.jpg",$$legacy:!0});var p=e(e(g,!0));x(p,()=>f(c).length===0,i=>{var a=F();s(i,a)});var j=e(e(p,!0));E(j,9,()=>f(c),O,(i,a,L)=>{var d=H(),v=r(d);x(v,()=>t(a).thumbnail,k=>{var u=G(),m=r(u);h(()=>{l(m,"src",t(a).thumbnail),l(m,"alt",t(a).title)}),q(m),s(k,u)});var U=e(e(v,!0)),b=r(U),z=r(b),I=e(e(b,!0)),S=r(I);h(()=>{l(d,"href",`/blog/${t(a).slug}`),_(z,t(a).title),_(S,t(a).desc)}),s(i,d)}),s(y,n)}export{X as component};