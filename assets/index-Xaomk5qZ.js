import{u as e,q as s,d}from"./index-xH5_V4M8.js";function p({label:n,hint:r,layout:t,...a}){const i=typeof n=="string"?e("span",{children:n}):n,l=typeof r=="string"?e("span",{style:{fontSize:"0.9em",color:"var(--c-con-7)"},children:r}):r;return e("label",{style:t=="freeform"?{display:"contents"}:t=="horizontal"?{display:"grid",gridTemplateColumns:"auto 1fr",columnGap:"var(--sp-1)",alignItems:"baseline"}:{display:"grid"},children:[i,l,e("input",{...a})]})}function u({label:n,hint:r,layout:t,...a}){const i=typeof n=="string"?e("span",{children:n}):n,l=typeof r=="string"?e("span",{style:{fontSize:"0.9em",color:"gray"},children:r}):r;return e("label",{style:{display:"grid"},children:[i,l,e("textarea",{...a})]})}function f({label:n,hint:r,layout:t,...a}){return e("label",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"var(--sp-1)"},children:[e("input",{type:"checkbox",...a}),e("span",{children:n})]})}function y({name:n,label:r,children:t,defaultValue:a,...i}){return e("fieldset",{style:{display:"grid",gap:"var(--sp-1)"},...i,children:e(o.Provider,{value:{name:n,defaultValue:a},children:[e("div",{children:r}),t]})})}function h({value:n,children:r}){const t=s(o);if(!t)throw new Error("Radio must be used inside a RadioGroup");const a=t.name,i=t.defaultValue;return e("label",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"var(--sp-1)"},children:[e("input",{type:"radio",name:a,value:n,checked:n===i}),e("span",{children:r})]})}const o=d(null);function g({label:n,children:r,...t}){return e("label",{style:{display:"grid"},children:[e("span",{children:n}),e("select",{...t,children:r})]})}function m(n,r){var a;const t=Object.fromEntries(new FormData(n));return(a=r==null?void 0:r.withCheckboxGroups)!=null&&a.length,t}export{f as C,y as R,g as S,p as T,h as a,u as b,m as f};
