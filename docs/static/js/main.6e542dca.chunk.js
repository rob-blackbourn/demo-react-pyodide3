(this["webpackJsonpdemo-react-pyodide3"]=this["webpackJsonpdemo-react-pyodide3"]||[]).push([[0],{65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),s=n.n(r),c=(n(57),n(103)),i=n(36),o=n.n(i),l=n(42),u=n(18),h=n(14),b=n(24),d=n(26),j=n(4),m=n(102),p=n(101),g=n(37),f=n(100),x=n(99),O=n(104),v=n(105),w=n(6),C=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.values,n=e.readOnly,a=e.onChange,r=e.classes;return Object(w.jsx)("div",{className:r.divTable,children:t.map((function(e,t){return Object(w.jsx)("div",{className:r.divTableRow,children:e.map((function(e,s){return Object(w.jsx)("div",{className:r.divTableCol,children:Object(w.jsx)(O.a,{className:r.cell,value:e,readOnly:n,onChange:function(e){return a(t,s,e.target.value)}})},"cell-".concat(t,"-").concat(s))}))},"row-".concat(t))}))})}}]),n}(a.Component);C.defaultProps={readonly:!1,onChange:function(){}};var y=Object(j.a)((function(e){return{button:{margin:e.spacing(1,1,0,0)},cell:{width:"4ch",margin:e.spacing(1),"& .MuiInputBase-input":{textAlign:"center"}},divTable:{display:"inline-flex",width:"auto",borderLeft:"1px solid #666666",borderRight:"1px solid #666666",borderSpacing:"5px",margin:e.spacing(1)},divTableRow:{display:"table-row",width:"auto",clear:"both"},divTableCol:{display:"tableColumn",width:"auto"}}}))(C);var N=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).generateExercise=function(){var e=a.state,t=e.maxNumberOfRows,n=e.maxNumberOfColumns;a.props.generator(t,n).then((function(e){a.setState(Object(g.a)(Object(g.a)({},e),{},{answer:e.C.map((function(e){return e.map((function(e){return""}))})),hasExercise:!0,isGenerating:!1}))})).catch((function(e){console.log(e)}))},a.onChangeHandler=function(e,t,n){var r=parseInt(n);Number.isInteger(r)&&(n=r);var s=function(e,t,n,a){return e.map((function(e,r){return e.map((function(e,s){return r===t&&s===n?a:e}))}))}(a.state.answer,e,t,n);a.setState({answer:s})},a.handleSubmit=function(e){e.preventDefault(),a.setState({isGenerating:!0},a.generateExercise)},a.onMaxRowsChangedHandler=function(e){var t=parseInt(e.target.value);Number.isInteger(t)&&t>0&&a.setState({maxNumberOfRows:t})},a.onMaxColsChangedHandler=function(e){var t=parseInt(e.target.value);Number.isInteger(t)&&t>0&&a.setState({maxNumberOfColumns:t})},a.state={maxNumberOfRows:3,maxNumberOfColumns:3,hasExercise:!1,isGenerating:!1,m:1,n:1,p:1,A:[[0]],B:[[0]],C:[[0]],answer:[[0]]},a}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.maxNumberOfRows,n=e.maxNumberOfColumns,a=e.A,r=e.B,s=e.C,c=e.answer,i=e.hasExercise,o=e.isGenerating,l=this.props.classes,u=function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;++n){var a=e[n],r=t[n];if(a.length!==r.length)return!1;for(var s=0;s<a.length;++s)if(a[s]!==r[s])return!1}return!0}(s,c);return Object(w.jsx)(f.a,{maxWidth:"sm",children:Object(w.jsxs)(x.a,{className:l.paper,children:[Object(w.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(w.jsx)(O.a,{className:l.parameter,type:"number",value:t,label:"Max Rows",onChange:this.onMaxRowsChangedHandler}),Object(w.jsx)(O.a,{className:l.parameter,type:"number",value:n,label:"Max Columns",onChange:this.onMaxColsChangedHandler}),Object(w.jsx)(v.a,{className:l.button,type:"submit",disabled:o,children:"New Exercise"})]}),Object(w.jsxs)("div",{className:l.exercise,children:[i?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(y,{values:a,readOnly:!0}),Object(w.jsx)(y,{values:r,readOnly:!0}),Object(w.jsx)("span",{children:"="}),Object(w.jsx)(y,{values:c,readOnly:!1,onChange:this.onChangeHandler})]}):Object(w.jsx)(p.a,{variant:"body1",children:"Click the button to generate a new exercise"}),i?Object(w.jsx)("div",{children:u?Object(w.jsx)(p.a,{className:l.rightAnswer,variant:"body1",children:"Correct"}):Object(w.jsx)(p.a,{className:l.wrongAnswer,variant:"body1",children:"Incorrect"})}):""]})]})})}}]),n}(a.Component),k=Object(j.a)((function(e){return{paper:{height:"100vh"},button:{margin:e.spacing(1,1,0,0),float:"right"},parameter:{width:"12ch",margin:e.spacing(1)},exercise:{display:"flex",flexDirection:"row",alignItems:"center"},rightAnswer:{color:"green"},wrongAnswer:{color:"red"}}}))(N),I=n(44);function S(){return new Worker(n.p+"static/js/pythonWorker.78685238.worker.js")}var R=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={pythonWorker:null},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=I.a(new S),e.next=3,t.setup();case 3:this.setState({pythonWorker:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.pythonWorker,t=this.props.classes;return null==e?Object(w.jsxs)("div",{className:t.progress,children:[Object(w.jsx)(p.a,{variant:"h2",children:"Loading Python"}),Object(w.jsx)(m.a,{})]}):Object(w.jsx)("div",{children:Object(w.jsx)(k,{generator:e.generateMatmulExercise})})}}]),n}(a.Component),M=Object(j.a)((function(e){return{progress:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}}))(R),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};s.a.render(Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(c.a,{}),Object(w.jsx)(M,{})]}),document.getElementById("root")),E()}},[[65,1,2]]]);
//# sourceMappingURL=main.6e542dca.chunk.js.map