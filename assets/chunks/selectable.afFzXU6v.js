import{p,q as f,o as b,t as v,u as h,v as K,a as k,A as S,Y as j,_ as w,r as g,c as O,y as $,M as N}from"./framework.lYNz_Rcs.js";import{aB as P}from"./theme.B80B4RRr.js";const z=p({__name:"basic",setup(m){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,r=1,n="node")=>{let l=0;return Array.from({length:o}).fill(r).map(()=>{const c=r===e?0:Math.round(Math.random()*t),a=u(n,++l);return{id:a,label:a,children:c?s(e,t,c,r+1,a):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=f("el-tree-v2");return b(),v(o,{style:{"max-width":"600px"},data:h(d),props:_,height:208},null,8,["data"])}}}),D=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),A=p({__name:"custom-node",setup(m){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,r=1,n="node")=>{let l=0;return Array.from({length:o}).fill(r).map(()=>{const c=r===e?0:Math.round(Math.random()*t),a=u(n,++l);return{id:a,label:a,children:c?s(e,t,c,r+1,a):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=f("el-tree-v2");return b(),v(o,{style:{"max-width":"600px"},data:h(d),props:_,height:208},{default:K(({node:r})=>[k("span",{class:S(["prefix",{"is-leaf":r.isLeaf}])},"[ElementPlus]",2),k("span",null,j(r.label),1)]),_:1},8,["data"])}}}),T=w(A,[["__scopeId","data-v-9c2a2d9c"]]),F=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),V=p({__name:"default-state",setup(m){const u=(n,l)=>`${n}-${l}`,s=(n,l,c,a=1,M="node")=>{let x=0;return Array.from({length:c}).fill(a).map(()=>{const y=a===n?0:Math.round(Math.random()*l),i=u(M,++x);return{id:i,label:i,children:y?s(n,l,y,a+1,i):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40),e=[],t=[];for(const n of d){const l=n.children;if(l){t.push(n.id),e.push(l[0].id);break}}const o=g(e),r=g(t);return(n,l)=>{const c=f("el-tree-v2");return b(),v(c,{style:{"max-width":"600px"},data:h(d),height:208,props:_,"show-checkbox":"","default-checked-keys":o.value,"default-expanded-keys":r.value},null,8,["data","default-checked-keys","default-expanded-keys"])}}}),L=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"})),B=p({__name:"disabled",setup(m){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,r=1,n="node")=>{let l=0;return Array.from({length:o}).fill(r).map(()=>{const c=r===e?0:Math.round(Math.random()*t),a=u(n,++l);return{id:a,label:a,children:c?s(e,t,c,r+1,a):void 0,disabled:a.includes("2")}})},_={value:"id",label:"label",children:"children",disabled:"disabled"},d=s(4,30,40);return(e,t)=>{const o=f("el-tree-v2");return b(),v(o,{style:{"max-width":"600px"},data:h(d),props:_,"show-checkbox":"",height:208},null,8,["data"])}}}),Q=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"})),E=p({__name:"filter",setup(m){const u=(n,l)=>`${n}-${l}`,s=(n,l,c,a=1,M="node")=>{let x=0;return Array.from({length:c}).fill(a).map(()=>{const y=a===n?0:Math.round(Math.random()*l),i=u(M,++x);return{id:i,label:i,children:y?s(n,l,y,a+1,i):void 0}})},_=g(""),d=g(),e=s(4,30,5),t={value:"id",label:"label",children:"children"},o=n=>{d.value.filter(n)},r=(n,l)=>l.label.includes(n);return(n,l)=>{const c=f("el-input");return b(),O(N,null,[$(c,{modelValue:_.value,"onUpdate:modelValue":l[0]||(l[0]=a=>_.value=a),style:{width:"240px"},placeholder:"Please enter keyword",onInput:o},null,8,["modelValue"]),$(h(P),{ref_key:"treeRef",ref:d,style:{"max-width":"600px"},data:h(e),props:t,"filter-method":r,height:208},null,8,["data"])],64)}}}),U=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),q=p({__name:"selectable",setup(m){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,r=1,n="node")=>{let l=0;return Array.from({length:o}).fill(r).map(()=>{const c=r===e?0:Math.round(Math.random()*t),a=u(n,++l);return{id:a,label:a,children:c?s(e,t,c,r+1,a):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=f("el-tree-v2");return b(),v(o,{style:{"max-width":"600px"},data:h(d),props:_,"show-checkbox":"",height:208},null,8,["data"])}}}),Y=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));export{D as _,F as a,L as b,Q as c,U as d,Y as e};
