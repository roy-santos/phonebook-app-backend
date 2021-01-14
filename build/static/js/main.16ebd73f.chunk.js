(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),o=n(14),i=n.n(o),u=n(3),s=n(4),l=n.n(s),d="/api/persons",b={getAll:function(){return l.a.get(d).then((function(e){return e.data}))},create:function(e){return l.a.post(d,e).then((function(e){return e.data}))},update:function(e,t){return l.a.put("".concat(d,"/").concat(e),t).then((function(e){return e.data}))},deleteItem:function(e){return l.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))}},f=function(e){var t=e.filter,n=e.handleFilter;return Object(c.jsxs)("div",{children:["filter shown with: ",Object(c.jsx)("input",{value:t,onChange:n})]})},j=function(e){var t=e.name,n=e.handleNewName,r=e.number,a=e.handleNewNumber,o=e.handleSubmit;return Object(c.jsxs)("form",{onSubmit:o,children:[Object(c.jsxs)("div",{children:["Name: ",Object(c.jsx)("input",{value:t,onChange:n})]}),Object(c.jsxs)("div",{children:["Number: ",Object(c.jsx)("input",{value:r,onChange:a})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},m=function(e){var t=e.filter?e.contacts.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())})):e.contacts;return Object(c.jsx)("div",{children:t.map((function(t){return Object(c.jsxs)("div",{children:[t.name," : ",t.number," ",Object(c.jsx)("button",{onClick:function(){return n=t.name,c=t.id,void(window.confirm("Delete ".concat(n,"?"))&&(b.deleteItem(c),e.setMessage("Deleted ".concat(n)),setTimeout((function(){e.setMessage(null)}),5e3),e.setContacts(e.contacts.filter((function(e){return e.id!==c})))));var n,c},children:"delete"})]},t.id)}))})},h=function(e){var t=e.message,n={color:null===t||t.includes("Deleted")||t.includes("Error")?"red":"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderWidth:3,borderRadius:5,padding:10,marginBottom:10};return null===t?null:Object(c.jsx)("div",{style:n,children:t})},O=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(""),i=Object(u.a)(o,2),s=i[0],l=i[1],d=Object(r.useState)(""),O=Object(u.a)(d,2),g=O[0],v=O[1],p=Object(r.useState)(""),x=Object(u.a)(p,2),w=x[0],N=x[1],C=Object(r.useState)(null),S=Object(u.a)(C,2),k=S[0],y=S[1];Object(r.useEffect)((function(){b.getAll().then((function(e){a(e)}))}),[]);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(h,{message:k}),Object(c.jsx)(f,{filter:w,handleFilter:function(e){N(e.target.value)}}),Object(c.jsx)("h3",{children:"Add New Contact"}),Object(c.jsx)(j,{name:s,handleNewName:function(e){l(e.target.value)},number:g,handleNewNumber:function(e){v(e.target.value)},handleSubmit:function(e){e.preventDefault();var t={name:s,number:g};if(n.map((function(e){return e.name})).includes(s)){if(window.confirm("".concat(s," is already in the phonebook, replace the old number with the new one?"))){var c=n.find((function(e){return e.name===s}));console.log(c.id),b.update(c.id,t).then((function(e){y("Updated ".concat(e.name)),setTimeout((function(){y(null)}),5e3),a(n.map((function(t){return t.id!==c.id?t:e}))),l(""),v("")})).catch((function(e){console.log(e.message),e.message.includes("400")?y("Error: Number must contain at least 8 digits"):(y("Error: Contact info for ".concat(c.name," has already been removed from server")),setTimeout((function(){y(null)}),5e3),a(n.filter((function(e){return e.name!==c.name}))))}))}}else b.create(t).then((function(e){y("Added ".concat(e.name)),setTimeout((function(){y(null)}),5e3),a(n.concat(e)),l(""),v("")})).catch((function(e){e.response.data.error.includes("name")?y("Error: Name must contain at least 3 characters"):y("Error: Number must contain at least 8 digits")}))}}),Object(c.jsx)("h3",{children:"Contact List"}),Object(c.jsx)(m,{filter:w,contacts:n,setContacts:a,setMessage:y})]})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.16ebd73f.chunk.js.map