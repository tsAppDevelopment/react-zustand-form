(this["webpackJsonpreact-zustand-form"]=this["webpackJsonpreact-zustand-form"]||[]).push([[0],{182:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(67),l=n.n(i),c=n(19),s=c.a({firstName:c.b().max(15,"Must be 15 characters or less").required("Required"),lastName:c.b().max(20,"Must be 20 characters or less").required("Required"),email:c.b().email("Invalid email address").required("Required")}),u=n(76),d=n(74),o=n.n(d),j=n(75),b=n(73),v=n(20),m=o()(Object(j.combine)({valuesMap:{},validationMap:{},schema:{}},(function(e){return{set:e}}))),f={useStore:m,useFormValues:function(e){return m((function(t){return t.valuesMap[e]}),(function(e,t){return Object(b.isEqual)(e,t)}))},useFormValidation:function(e){return m((function(t){return t.validationMap[e]}))},getInitValues:function(e){return m.getState().valuesMap[e]},getSchema:function(){return m.getState().schema},useAllFormKeys:function(){return m((function(e){return Object.keys(e.validationMap)}),(function(e,t){return e.length===t.length}))},addBlankForm:function(){var e=Object(v.d)({dictionaries:[v.a,v.c,v.b],length:2}),t=m.getState();t.validationMap[e]=!1,t.valuesMap[e]={firstName:"",lastName:"",email:""},m.setState({validationMap:t.validationMap,valuesMap:t.valuesMap})},updateGlobalState:function(e,t){var n=m.getState();n.schema.isValid(e).then((function(a){n.valuesMap[t]=e,n.validationMap[t]=a,m.setState({validationMap:n.validationMap,valuesMap:n.valuesMap})}))},deleteForm:function(e){var t=m.getState();delete t.validationMap[e],delete t.valuesMap[e],m.setState({validationMap:t.validationMap,valuesMap:t.valuesMap})},deleteAllForms:function(){m.setState({validationMap:{},valuesMap:{}})}},h=n(1),O=function(e){var t=e.formKey,n=r.a.useRef(f.getInitValues(t)).current,a=r.a.useRef(f.getSchema()).current,i=Object(u.a)({initialValues:n,validationSchema:a,onSubmit:function(e){},validate:function(e){return f.updateGlobalState(e,t)},validateOnChange:!0});r.a.useEffect((function(){i.validateForm()}),[]);var l=Object.keys(null!==n&&void 0!==n?n:{});return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{style:{textAlign:"center"},children:t}),Object(h.jsx)("button",{onClick:function(){return f.deleteForm(t)},children:"Delete"}),Object(h.jsx)("form",{children:l.map((function(e){return t=e,Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:75,marginTop:20},children:[Object(h.jsx)("label",{htmlFor:t,children:t}),Object(h.jsx)("input",{id:t,name:t,type:"text",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values[t]}),i.errors[t]&&Object(h.jsx)("div",{style:{color:"red"},children:"Error: "+i.errors[t]})]},t);var t}))})]})},x=function(e){var t=e.children;return Object(h.jsx)("div",{style:{display:"flex",flexDirection:"column",border:"1px solid black",borderRadius:10,padding:10,margin:10},children:t})},p=function(e){var t=e.formKey,n=f.useFormValidation(t);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{style:{textAlign:"center"},children:t+" use form validation equality"}),Object(h.jsx)("div",{children:"isValid: "+n}),Object(h.jsx)("div",{children:"renderedAt: "+(new Date).toISOString()})]})},g=function(e){var t=e.formKey,n=f.useFormValues(t),a=JSON.stringify(n);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{style:{textAlign:"center"},children:t+" use form values deep equality"}),Object(h.jsx)("div",{children:"values: "+a}),Object(h.jsx)("div",{children:"renderedAt: "+(new Date).toISOString()})]})},M=n(14),y=function(){var e=f.useStore((function(e){return e})),t=JSON.stringify(Object(M.a)(Object(M.a)({},e.validationMap),e.valuesMap));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{style:{textAlign:"center"},children:"use form store shallow equality: ==="}),Object(h.jsx)("div",{children:t}),Object(h.jsx)("div",{children:"renderedAt: "+(new Date).toISOString()})]})},S=function(){var e=f.useAllFormKeys();return r.a.useEffect((function(){f.useStore.setState({schema:s})}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{children:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{style:{textAlign:"center"},children:"use forms length equality"}),Object(h.jsx)("button",{onClick:f.deleteAllForms,children:"Delete all forms"}),Object(h.jsx)("button",{onClick:f.addBlankForm,children:"Add blank form"}),e.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)(x,{children:Object(h.jsx)(O,{formKey:e})}),Object(h.jsx)(x,{children:Object(h.jsx)(g,{formKey:e})}),Object(h.jsx)(x,{children:Object(h.jsx)(p,{formKey:e})})]},e)}))]})}),Object(h.jsx)(x,{children:Object(h.jsx)(y,{})})]})};l.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.1d35b3c7.chunk.js.map