(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(29),a=n.n(s),i=n(7),j=n(11),o=n(30),l=n(17),b=n.n(l),d=n(0);function u(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(i.a)(s,2),l=a[0],u=a[1];return Object(d.jsx)("div",{className:"Login",children:Object(d.jsxs)(j.a,{onSubmit:function(e){b.a.post("http://localhost:8080/loginAuth",{username:n,pass:l}).then((function(e){console.log(e)})),e.preventDefault()},children:[Object(d.jsxs)(j.a.Group,{size:"lg",controlId:"email",children:[Object(d.jsx)(j.a.Label,{children:"Email"}),Object(d.jsx)(j.a.Control,{autoFocus:!0,type:"email",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(d.jsxs)(j.a.Group,{size:"lg",controlId:"password",children:[Object(d.jsx)(j.a.Label,{children:"Password"}),Object(d.jsx)(j.a.Control,{type:"password",value:l,onChange:function(e){return u(e.target.value)}})]}),Object(d.jsx)(o.a,{block:!0,size:"lg",type:"submit",disabled:!(n.length>0&&l.length>0),children:"Login"})]})})}n(56);var h=n(8),O=n(9),x=n(13),f=n(12),m=(n(57),n(18)),p="".concat("http://localhost:8080","/game/users/").concat("garg.pranav@gmail.com"),v=new(function(){function e(){Object(h.a)(this,e)}return Object(O.a)(e,[{key:"retrieveUserById",value:function(e){return b.a.get("".concat(p))}}]),e}()),g=function(e){Object(x.a)(n,e);var t=Object(f.a)(n);function n(e){var c;return Object(h.a)(this,n),(c=t.call(this,e)).refreshCourses=c.refreshUser.bind(Object(m.a)(c)),c}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.refreshUser()}},{key:"refreshUser",value:function(){v.retrieveUserById(undefined).then((function(e){console.log(e)})),console.log("Hello")}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{children:"User"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"id"}),Object(d.jsx)("th",{children:"email"}),Object(d.jsx)("th",{children:"password"}),Object(d.jsx)("th",{children:"firstName"}),Object(d.jsx)("th",{children:"lastName"})]})}),Object(d.jsx)("tbody",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"1"}),Object(d.jsx)("td",{children:"myemail"}),Object(d.jsx)("td",{children:"mypassword"}),Object(d.jsx)("td",{children:"myfirstname"}),Object(d.jsx)("td",{children:"mylastname"})]})})]})})]})}}]),n}(c.Component),y=function(e){Object(x.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"MyPage"}),Object(d.jsx)(g,{})]})}}]),n}(c.Component),k=y,w=function(e){Object(x.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(k,{})})}}]),n}(c.Component),C=w;a.a.render(Object(d.jsxs)(r.a.StrictMode,{children:[Object(d.jsx)(u,{}),Object(d.jsx)(C,{})]}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.56b93fc3.chunk.js.map