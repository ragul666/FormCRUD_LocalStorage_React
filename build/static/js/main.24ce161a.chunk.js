(this["webpackJsonpembed-pdf-from-drive"]=this["webpackJsonpembed-pdf-from-drive"]||[]).push([[0],{15:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(7),i=c.n(r),a=(c(15),c(10)),l=c(2),o=c(8),d=c(9),b=c(0),j=function(e){var t=e.books,c=e.deleteBook;return t.map((function(e){return Object(b.jsx)("div",{style:{paddingBottom:"20px"},children:Object(b.jsxs)("div",{class:"card",children:[Object(b.jsx)("div",{style:{width:"fit-content",marginLeft:"auto"},children:Object(b.jsx)("button",{type:"button",class:"btn btn-success",children:"Details"})}),Object(b.jsx)("div",{class:"card-body",style:{border:"10px"},children:Object(b.jsxs)("h5",{class:"card-title",style:{display:"flex",margin:"20px"},children:["Product Name:",e.title]})}),Object(b.jsxs)("p",{class:"card-text",children:["Product Description:",e.description]}),Object(b.jsxs)("p",{class:"card-text",children:["Price in Rupees: \u20b9",e.isbn]}),Object(b.jsx)("h5",{class:"card-title",style:{display:"flex",margin:"20px"},children:Object(b.jsxs)("p",{class:"card-text",children:["Rating:",e.rating]})}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{class:"card-text",style:{margin:"auto",padding:"20px"},children:Object(b.jsx)("div",{className:"delete-btn",onClick:function(){return c(e.isbn)},children:Object(b.jsx)("button",{children:Object(b.jsx)(o.Icon,{icon:d.trash})})})})]},e.isbn)})}))},u=function(){var e=Object(n.useState)(function(){var e=localStorage.getItem("books");return e?JSON.parse(e):[]}()),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],d=i[1],u=Object(n.useState)(""),x=Object(l.a)(u,2),O=x[0],h=x[1],p=Object(n.useState)(""),m=Object(l.a)(p,2),f=m[0],g=m[1],v=Object(n.useState)(""),y=Object(l.a)(v,2),N=y[0],C=y[1];return Object(n.useEffect)((function(){localStorage.setItem("books",JSON.stringify(c))}),[c]),Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("h1",{children:"Form CRUD Functionality "}),Object(b.jsx)("p",{children:"CRUD along with validation with Bootstrap Styling"}),Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)("div",{className:"form-container",children:Object(b.jsxs)("form",{autoComplete:"off",className:"form-group",onSubmit:function(e){e.preventDefault();var t={title:o,description:O,isbn:N,rating:f};s([].concat(Object(a.a)(c),[t])),d(""),h(""),C(""),g("")},children:[Object(b.jsx)("label",{children:" Product Name"}),Object(b.jsx)("input",{type:"text",className:"form-control",required:!0,onChange:function(e){return d(e.target.value)},value:o}),Object(b.jsx)("label",{children:"Product Description"}),Object(b.jsx)("input",{type:"text",className:"form-control",required:!0,onChange:function(e){return h(e.target.value)},value:O}),Object(b.jsx)("label",{children:"Price in Rupees"}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"\u20b9 ",required:!0,onChange:function(e){return C(e.target.value)},value:N}),Object(b.jsx)("label",{children:"Product Rating"}),Object(b.jsx)("input",{type:"number",className:"form-control",required:!0,onChange:function(e){return g(e.target.value)},value:f}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",className:"btn btn-success btn-md",children:"ADD"})]})}),Object(b.jsxs)("div",{className:"view-container",children:[c.length>0&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:Object(b.jsx)(j,{books:c,deleteBook:function(e){var t=c.filter((function(t,c){return t.isbn!==e}));s(t)}})}),Object(b.jsx)("button",{className:"btn btn-danger btn-md",onClick:function(){return s([])},children:"Remove All Products"})]}),c.length<1&&Object(b.jsx)("div",{children:"No Product Cards Added yet"})]})]})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};c(29);i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.24ce161a.chunk.js.map