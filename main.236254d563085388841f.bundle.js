"use strict";(self.webpackChunkjs_hierarchy=self.webpackChunkjs_hierarchy||[]).push([[590],{416:()=>{const e=document.getElementById("insert"),n=[];[{id:1,head:null,name:"Проф.осмотр",node:0,price:100,sorthead:20},{id:2,head:null,name:"Хирургия",node:1,price:0,sorthead:10},{id:3,head:2,name:"Удаление зубов",node:1,price:0,sorthead:10},{id:4,head:3,name:"Удаление зуба",node:0,price:800,sorthead:10},{id:5,head:3,name:"Удаление 8ого зуба",node:0,price:1e3,sorthead:30},{id:6,head:3,name:"Удаление осколка зуба",node:0,price:2e3,sorthead:20},{id:7,head:2,name:"Хирургические вмешательство",node:0,price:200,sorthead:10},{id:8,head:2,name:"Имплантация зубов",node:1,price:0,sorthead:20},{id:9,head:8,name:"Коронка",node:0,price:3e3,sorthead:10},{id:10,head:8,name:"Слепок челюсти",node:0,price:500,sorthead:20}].sort(((e,n)=>(e.head||0)-(n.head||0))).forEach((e=>{n.push(e)}));const d=function(e){let n,d,a={},t=[];for(d=0;d<e.length;d+=1)a[e[d].id]=d,e[d].children=[];for(d=0;d<e.length;d+=1)n=e[d],n.head?e[a[n.head]].children.push(n):t.push(n);return t}(n),a=document.createElement("ul"),t=function e(n){return n.sort(((e,n)=>e.sorthead-n.sorthead)).map((n=>{const d=(a=`\n        <li>\n          <span class=${n.children.length?"toggler":""}>\n            ${n.name} (${n.price})\n          </span>\n        </li>\n      `,(new DOMParser).parseFromString(a,"text/html").body.firstElementChild);var a;if(n.children.length){const a=document.createElement("ul");a.classList.add("animate-height"),a.classList.add("closed");const t=e(n.children);a.append(...t),d.append(a)}return d}))}(d);a.append(...t);const r=a.querySelectorAll("span.toggler");e.append(a),Array.from(r).forEach((e=>{e.addEventListener("click",(e=>{const n=e?.target?.nextElementSibling;n&&"UL"===n?.tagName&&n.classList.toggle("closed")}))}))}},e=>{e(e.s=416)}]);