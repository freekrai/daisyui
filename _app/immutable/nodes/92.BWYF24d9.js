import{a as Q,t as R,b as n,f as V,s as a}from"../chunks/disclose-version.CGgwR5Q_.js";import{h as t}from"../chunks/html.CJZrRl2i.js";import{l as W,s as X}from"../chunks/props._SqaxKkw.js";import{M as Z}from"../chunks/mdsvex.DjN-xhZu.js";import{T as s}from"../chunks/Translate.BD4yjkGq.js";var aa=R('<p><!></p> <p><!></p> <ul><li><!></li></ul> <pre class="language-html"><!></pre> <button class="btn">Button</button> <ol><li><!></li></ol> <pre class="language-html"><!></pre> <button class="btn btn-primary">One</button> <button class="btn btn-secondary">Two</button> <button class="btn btn-accent btn-outline">Three</button> <ol start="2"><li><!></li></ol> <pre class="language-html"><!></pre> <button class="rounded-full btn">One</button> <button class="px-16 rounded-none btn">Two</button> <ol start="3"><li><!></li></ol> <pre class="language-css"><!></pre> <ol start="4"><li><!></li></ol> <ul><li><a href="/theme-generator"><!></a></li> <li><!></li></ul>',1);const na={title:"Customize daisyUI components",desc:"How to customize daisyUI?",published:!0};function ua(m,y){const _=W(y,["children","$$slots","$$events","$$legacy"]);Z(m,X(()=>_,na,{children:($,sa)=>{var e=aa(),o=V(e),h=n(o);s(h,{text:"daisyUI components come with many variants necessary for design systems and you won't usually need to customize anything.",$$legacy:!0});var p=a(a(o,!0)),f=n(p);s(f,{text:"But you can still customize components in many ways.",$$legacy:!0});var l=a(a(p,!0)),x=n(l),w=n(x);s(w,{text:"Let's say, you want to customize this button:",$$legacy:!0});var u=a(a(l,!0)),T=n(u);t(T,()=>'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>');var z=a(a(u,!0)),c=a(a(z,!0)),q=n(c),I=n(q);s(I,{text:"You can use daisyUI utility classes:",$$legacy:!0});var r=a(a(c,!0)),U=n(r);t(U,()=>`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-accent btn-outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`);var O=a(a(r,!0)),Y=a(a(O,!0)),B=a(a(Y,!0)),i=a(a(B,!0)),C=n(i),M=n(C);s(M,{text:"You can use Tailwind's utility classes:",$$legacy:!0});var k=a(a(i,!0)),S=n(k);t(S,()=>`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn rounded-full<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn rounded-none px-16<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`);var A=a(a(k,!0)),H=a(a(A,!0)),d=a(a(H,!0)),L=n(d),P=n(L);s(P,{text:"You can customize components on your CSS file, using Tailwind's @apply directive:",$$legacy:!0});var g=a(a(d,!0)),j=n(g);t(j,()=>`<code class="language-css"><span class="token selector">.btn</span> <span class="token punctuation">&#123;</span>
  <span class="token atrule"><span class="token rule">@apply</span> rounded-full<span class="token punctuation">;</span></span>
<span class="token punctuation">&#125;</span></code>`);var b=a(a(g,!0)),D=n(b),E=n(D);s(E,{text:"You can also:",$$legacy:!0});var F=a(a(b,!0)),v=n(F),G=n(v),J=n(G);s(J,{text:"Add your own theme.",$$legacy:!0});var K=a(a(v,!0)),N=n(K);s(N,{text:"Opt out of daisyUI's design decisions, and <a href='/docs/config/'>only use an unstyled (skeleton) version of daisyUI</a>.",$$legacy:!0}),Q($,e)},$$slots:{default:!0},$$legacy:!0}))}export{ua as component};
