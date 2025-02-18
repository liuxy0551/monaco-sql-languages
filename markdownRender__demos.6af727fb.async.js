"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6426],{3703:function(h,n,e){e.r(n);var r=e(48305),u=e.n(r),s=e(75271),d=e(52435),t=e(52676);n.default=function(){var m=(0,s.useState)(""),a=u()(m,2),_=a[0],o=a[1];return(0,s.useEffect)(function(){fetch("https://cdn.jsdelivr.net/npm/dt-react-component@3.0.8/CHANGELOG.md",{method:"get"}).then(function(l){return l.text()}).then(o).catch(function(l){o(l.message)})},[]),(0,t.jsx)("div",{style:{maxHeight:200,overflow:"auto",marginBottom:16},children:(0,t.jsx)(d.Z,{value:_})})}},183:function(h,n,e){e.r(n);var r=e(48305),u=e.n(r),s=e(75271),d=e(52435),t=e(52676),m=`
\u4EE5\u4E0B\u662F\u4E00\u6BB5 sql \u8BED\u6CD5

\`\`\`sql
 select count(*) from a;
-- name sqltest 
-- type sql 
-- create time 2022-11-09 16:13:45 
-- desc


-- create table employees(name string);
insert into employees values('1111');


select * from employees
\`\`\`
`;n.default=function(){var a=(0,s.useState)(""),_=u()(a,2),o=_[0],l=_[1];return(0,s.useEffect)(function(){l(m)},[]),(0,t.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,t.jsx)(d.Z,{dark:!0,value:o})})}},79938:function(h,n,e){e.r(n);var r=e(48305),u=e.n(r),s=e(75271),d=e(52435),t=e(52676),m=`
\u4EE5\u4E0B\u662F\u4E00\u6BB5 sql \u8BED\u6CD5

\`\`\`sql
 select count(*) from a;
-- name sqltest 
-- type sql 
-- create time 2022-11-09 16:13:45 
-- desc


-- create table employees(name string);
insert into employees values('1111');


select * from employees
\`\`\`
`;n.default=function(){var a=(0,s.useState)(""),_=u()(a,2),o=_[0],l=_[1];return(0,s.useEffect)(function(){l(m)},[]),(0,t.jsx)("div",{style:{maxHeight:400,overflow:"auto",marginBottom:16},children:(0,t.jsx)(d.Z,{value:o})})}},52435:function(h,n,e){e.d(n,{Z:function(){return j}});var r=e(75271),u=e(82187),s=e.n(u),d=e(26132),t=e.n(d),m=e(88467),a=e.n(m),_=e(74883),o=e.n(_),l=e(97593),v=a();v.registerLanguage("sql",o());function O(){return{type:"output",filter:function(f){return t().helper.replaceRecursiveRegExp(f.replace(/&gt;/g,">").replace(/&lt;/g,"<"),function(M,D,c,P){var i=(c.match(/class=\"([^ \"]+)/)||[])[1],p=c.slice(0,18)+"hljs "+c.slice(18);return i&&v.getLanguage(i)?p+v.highlight(D,{language:i}).value+P:p+v.highlightAuto(D).value+P},"<pre><code\\b[^>]*>","</code></pre>","g")}}}var g=e(52676);function j(E){var f=E.value,M=f===void 0?"":f,D=E.className,c=E.dark,P=(0,r.useMemo)(function(){var i=new(t()).Converter({extensions:[O],emoji:!0});return i.makeHtml(M)},[M]);return(0,g.jsx)("div",{className:s()("dtc-markdown-render-body",c?"dtc-vs-dark":"dtc-vs",D),dangerouslySetInnerHTML:{__html:P}})}}}]);
