import{U as t,D as _,j as p,n as m,V as v}from"./runtime.BUdK6G03.js";function u(n){throw new Error("lifecycle_outside_component")}function h(n){t===null&&u(),t.l!==null?s(t).m.push(n):_(()=>{const e=p(n);if(typeof e=="function")return e})}function d(n,e,{bubbles:o=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:o,cancelable:r})}function x(){const n=t;return n===null&&u(),(e,o,r)=>{var a;const c=(a=n.s.$$events)==null?void 0:a[e];if(c){const f=m(c)?c.slice():[c],l=d(e,o,r);for(const i of f)i.call(n.x,l);return!l.defaultPrevented}return!0}}function b(n){t===null&&u(),t.l===null&&v(),s(t).a.push(n)}function s(n){var e=n.l;return e.u??(e.u={a:[],b:[],m:[]})}export{b as a,x as c,h as o};