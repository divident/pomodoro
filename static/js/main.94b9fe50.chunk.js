(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),r=c.n(s),n=c(6),a=c.n(n),o=(c(11),c(3)),i=c(5),l=c(2),d=(c(12),c(13),c(0));var j=function(e){var t=e.stroke,c=e.radius,r=e.color,n=c-2*t,a=2*n*Math.PI,o=Object(s.useState)(0),i=Object(l.a)(o,2),j=i[0],b=i[1];return Object(s.useEffect)((function(){b(a-e.progress/100*a)}),[e.progress,a]),Object(d.jsx)("svg",{height:2*c,width:2*c,children:Object(d.jsx)("circle",{className:"circle",stroke:r,strokeDasharray:"".concat(a," ").concat(a),style:{strokeDashoffset:j},strokeWidth:t,fill:"transparent",r:n,cx:c,cy:c})})},b=(c(15),function(e,t){return String(e).padStart(t,"0")});var u=function(e){var t=Object(s.useState)(0),c=Object(l.a)(t,2),r=(c[0],c[1]),n=Object(s.useState)(0),a=Object(l.a)(n,2),o=a[0],i=a[1],j=Object(s.useState)(0),u=Object(l.a)(j,2),m=u[0],f=u[1],O=Object(s.useState)(0),h=Object(l.a)(O,2),x=h[0],v=h[1];return Object(s.useEffect)((function(){x!==e.timeSec&&(v(e.timeSec),r(e.timeSec),i(e.timeSec%60),f(Math.floor(e.timeSec/60)));var t=setInterval((function(){return r((function(e){return i(e%60),f(Math.floor(e/60)),Math.max(e-1,0)}))}),1e3);return e.stop&&clearInterval(t),function(){return clearInterval(t)}}),[e.timeSec,e.stop,x]),Object(d.jsx)("div",{children:Object(d.jsxs)("p",{className:"timer-digit",children:[b(m,2),":",b(o,2)]})})},m=c.p+"static/media/settings.a5a6edd5.png";var f=function(){var e=Object(s.useState)(0),t=Object(l.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)({pomodoro:120,short:60,long:240}),a=Object(l.a)(n,2),b=a[0],f=a[1],O=Object(s.useState)({pomodoro:2,short:1,long:4}),h=Object(l.a)(O,2),x=h[0],v=h[1],p=Object(s.useState)("pomodoro"),g=Object(l.a)(p,2),y=g[0],N=g[1],k=Object(s.useState)(b.pomodoro),S=Object(l.a)(k,2),C=S[0],A=S[1],F=Object(s.useState)(!0),w=Object(l.a)(F,2),I=w[0],M=w[1],D=Object(s.useState)(0),E=Object(l.a)(D,2),P=E[0],B=E[1],T=Object(s.useState)(!1),H=Object(l.a)(T,2),J=H[0],L=H[1],q=Object(s.useState)("Arial, sans-serif"),z=Object(l.a)(q,2),U=z[0],W=z[1],G=Object(s.useState)("#f26d66"),K=Object(l.a)(G,2),Q=K[0],R=K[1];Object(s.useEffect)((function(){var e=100/C;P!==e&&(r(0),B(e));var t=setInterval((function(){return r((function(t){return Math.min(t+e,100)}))}),1e3);return I&&clearInterval(t),function(){return clearInterval(t)}}),[C,I,P]);var V=function(e){return function(){N(e),A(b[e])}},X=function(e){return function(t){v((function(c){return Object(i.a)(Object(i.a)({},c),{},Object(o.a)({},e,t.target.value))}))}},Y=function(e){return function(t){W(e)}},Z=function(e){return function(t){R(e);var c=document.body.style;c.setProperty("--bg-active",e),c.setProperty("--text-primary",e)}};return Object(d.jsxs)("main",{className:"flex main",style:{fontFamily:U},children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{className:"text-secondary",style:{fontSize:"3rem"},children:"Pomodoro"})}),Object(d.jsxs)("ul",{className:"timer-list",children:[Object(d.jsx)("li",{className:"timer-item "+("pomodoro"===y&&"active"),onClick:V("pomodoro"),children:"pomodoro"}),Object(d.jsx)("li",{className:"timer-item "+("short"===y&&"active"),onClick:V("short"),children:"short break"}),Object(d.jsx)("li",{className:"timer-item "+("long"===y&&"active"),onClick:V("long"),children:"long break"})]}),Object(d.jsxs)("div",{className:"progress",children:[Object(d.jsx)(j,{stroke:10,radius:170,progress:c,color:Q}),Object(d.jsxs)("div",{className:"timer",children:[Object(d.jsx)(u,{timeSec:C,stop:I}),Object(d.jsx)("button",{style:{fontFamily:U},className:"btn-stop",onClick:function(){return M((function(e){return!e}))},children:I?"Start":"Stop"})]})]}),Object(d.jsx)("div",{onClick:function(e){return L((function(e){return!e}))},children:Object(d.jsx)("img",{className:"rotate",src:m,width:"24",height:"24",alt:"settings"})}),J&&Object(d.jsxs)("div",{className:"setting",children:[Object(d.jsxs)("div",{className:"setting-header flex flex-row justify-between items-center",children:[Object(d.jsx)("div",{children:Object(d.jsx)("h2",{className:"color-black",children:"Settings"})}),Object(d.jsx)("div",{className:"exit",onClick:function(e){return L((function(e){return!e}))},children:"\xd7"})]}),Object(d.jsx)("div",{className:"divider"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"uppercase text-xl spacing-xl color-black",children:"TIME (MINUTES)"}),Object(d.jsxs)("div",{className:"select-panel",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"pomodoro",className:"block custom-label",children:"pomodoro"}),Object(d.jsx)("select",{id:"pomodoro",className:"custom-select",value:x.pomodoro,onChange:X("pomodoro"),children:Array.from(Array(30).keys()).map((function(e){return Object(d.jsx)("option",{value:e+1,children:e+1},e)}))})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"short-break",className:"block custom-label",children:"short break"}),Object(d.jsx)("select",{id:"short-break",className:"custom-select",value:x.short,onChange:X("short"),children:Array.from(Array(30).keys()).map((function(e){return Object(d.jsx)("option",{value:e+1,children:e+1},e)}))})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"long-break",className:"block custom-label",children:"long break"}),Object(d.jsx)("select",{className:"custom-select",id:"long-break",value:x.long,onChange:X("long"),children:Array.from(Array(30).keys()).map((function(e){return Object(d.jsx)("option",{value:e+1,children:e+1},e)}))})]})]})]}),Object(d.jsx)("div",{className:"divider"}),Object(d.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(d.jsx)("div",{className:"uppercase text-xl spacing-xl color-black",children:"Font"}),Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("div",{className:"dot bg-grey"+("Arial, sans-serif"===U?" dot-selected":""),style:{fontFamily:"Arial, sans-serif"},onClick:Y("Arial, sans-serif"),children:"Aa"}),Object(d.jsx)("div",{className:"dot bg-grey"+("Didot, serif"===U?" dot-selected":""),style:{fontFamily:"Didot, serif"},onClick:Y("Didot, serif"),children:"Aa"}),Object(d.jsx)("div",{className:"dot bg-grey"+("Bradley Hand, cursive"===U?" dot-selected":""),style:{fontFamily:"Bradley Hand, cursive"},onClick:Y("Bradley Hand, cursive"),children:"Aa"})]})]}),Object(d.jsx)("div",{className:"divider"}),Object(d.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(d.jsx)("div",{className:"uppercase text-xl spacing-xl color-black",children:"Color"}),Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("div",{className:"dot bg-red",onClick:Z("#f26d66"),children:"#f26d66"===Q&&"\u2714"}),Object(d.jsx)("div",{className:"dot bg-pink",onClick:Z("#db7ffb"),children:"#db7ffb"===Q&&"\u2714"}),Object(d.jsx)("div",{className:"dot bg-aqua",onClick:Z("#6df4fa"),children:"#6df4fa"===Q&&"\u2714"})]})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"btn-apply",onClick:function(e){L((function(e){return!e})),f({pomodoro:60*x.pomodoro,short:60*x.short,long:60*x.long}),A(60*x[y])},children:"Apply"})})]})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),r(e),n(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),O()}],[[16,1,2]]]);
//# sourceMappingURL=main.94b9fe50.chunk.js.map