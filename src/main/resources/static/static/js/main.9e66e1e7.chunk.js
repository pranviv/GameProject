(this["webpackJsonpdeck-edit"]=this["webpackJsonpdeck-edit"]||[]).push([[0],{18:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=18},19:function(e,t){},21:function(e){e.exports=JSON.parse('[{"id":1,"card_name":"A Light in the Darkness","type":"Spell","mana_cost":"2","attack":"","health":"","durability":""},{"id":2,"card_name":"A New Challenger...","type":"Spell","mana_cost":"7","attack":"","health":"","durability":""},{"id":3,"card_name":"Aberrant Berserker","type":"Minion","mana_cost":"4","attack":"3","health":"5","durability":""},{"id":4,"card_name":"Abominable Bowman","type":"Minion","mana_cost":"7","attack":"6","health":"7","durability":""},{"id":5,"card_name":"Abominable Lieutenant","type":"Minion","mana_cost":"8","attack":"3","health":"5","durability":""},{"id":6,"card_name":"Abomination","type":"Minion","mana_cost":"5","attack":"4","health":"4","durability":""},{"id":7,"card_name":"Abusive Sergeant","type":"Minion","mana_cost":"1","attack":"1","health":"1","durability":""},{"id":8,"card_name":"Abyssal Enforcer","type":"Minion","mana_cost":"7","attack":"6","health":"6","durability":""},{"id":9,"card_name":"Abyssal Summoner","type":"Minion","mana_cost":"6","attack":"2","health":"2","durability":""},{"id":10,"card_name":"Academic Espionage","type":"Spell","mana_cost":"4","attack":"","health":"","durability":""},{"id":11,"card_name":"Ace Hunter Kreen","type":"Minion","mana_cost":"3","attack":"2","health":"4","durability":""},{"id":12,"card_name":"Acherus Veteran","type":"Minion","mana_cost":"1","attack":"2","health":"1","durability":""},{"id":13,"card_name":"Acidic Swamp Ooze","type":"Minion","mana_cost":"2","attack":"3","health":"2","durability":""},{"id":14,"card_name":"Acidmaw","type":"Minion","mana_cost":"7","attack":"4","health":"2","durability":""},{"id":15,"card_name":"Acolyte of Agony","type":"Minion","mana_cost":"3","attack":"3","health":"3","durability":""},{"id":16,"card_name":"Acolyte of Pain","type":"Minion","mana_cost":"3","attack":"1","health":"3","durability":""},{"id":17,"card_name":"Acornbearer","type":"Minion","mana_cost":"1","attack":"2","health":"1","durability":""},{"id":18,"card_name":"Acrobatics","type":"Spell","mana_cost":"3","attack":"","health":"","durability":""},{"id":19,"card_name":"Activate the Obelisk","type":"Spell","mana_cost":"1","attack":"","health":"","durability":""},{"id":20,"card_name":"Adaptation","type":"Spell","mana_cost":"1","attack":"","health":"","durability":""},{"id":21,"card_name":"Addled Grizzly","type":"Minion","mana_cost":"3","attack":"2","health":"2","durability":""},{"id":22,"card_name":"Adorable Infestation","type":"Spell","mana_cost":"1","attack":"","health":"","durability":""},{"id":23,"card_name":"Aegwynn, the Guardian","type":"Minion","mana_cost":"5","attack":"5","health":"5","durability":""},{"id":24,"card_name":"Aeon Reaver","type":"Minion","mana_cost":"6","attack":"4","health":"4","durability":""},{"id":25,"card_name":"Aeroponics","type":"Spell","mana_cost":"5","attack":"","health":"","durability":""},{"id":26,"card_name":"Against All Odds","type":"Spell","mana_cost":"5","attack":"","health":"","durability":""},{"id":27,"card_name":"Aimed Shot","type":"Spell","mana_cost":"3","attack":"","health":"","durability":""},{"id":28,"card_name":"Air Elemental","type":"Minion","mana_cost":"1","attack":"2","health":"1","durability":""},{"id":29,"card_name":"Air Raid","type":"Spell","mana_cost":"2","attack":"","health":"","durability":""},{"id":30,"card_name":"Akali, the Rhino","type":"Minion","mana_cost":"8","attack":"5","health":"5","durability":""}]')},32:function(e,t,a){},36:function(e,t,a){},57:function(e,t){},58:function(e,t){},59:function(e,t){},60:function(e,t){},61:function(e,t){},62:function(e,t){},63:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(20),r=a.n(i),o=(a(32),a(2)),l=a(24),s=a(7),d=a(21),u=[{Header:"Id",Footer:"Id",accessor:"id",disableFilters:!0,sticky:"left"},{Header:"Card Name",Footer:"Card Name",accessor:"card_name",sticky:"left"},{Header:"Mana Cost",Footer:"Mana Cost",accessor:"mana_cost"},{Header:"Attack",Footer:"Attack",accessor:"attack"},{Header:"Health",Footer:"Health",accessor:"health"}],m=(a(36),a(27)),b=a(0),h=["indeterminate"],j=c.a.forwardRef((function(e,t){var a=e.indeterminate,n=Object(m.a)(e,h),i=c.a.useRef(),r=t||i;return c.a.useEffect((function(){r.current.indeterminate=a}),[r,a]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",Object(o.a)({type:"checkbox",ref:r},n))})})),f=a(4),p=a.n(f),O=function(e){var t=Object(n.useMemo)((function(){return u}),[]),a=Object(n.useMemo)((function(){return d}),[]);var c=Object(s.useTable)({columns:t,data:a},s.useRowSelect,(function(e){e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(b.jsx)(j,Object(o.a)({},t()))},Cell:function(e){var t=e.row;return Object(b.jsx)(j,Object(o.a)({},t.getToggleRowSelectedProps()))}}].concat(Object(l.a)(e))}))})),i=c.getTableProps,r=c.getTableBodyProps,m=c.headerGroups,h=c.rows,f=c.prepareRow,O=c.selectedFlatRows,y=h.slice(0,30);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("table",Object(o.a)(Object(o.a)({},i()),{},{children:[Object(b.jsx)("thead",{children:m.map((function(e){return Object(b.jsx)("tr",Object(o.a)(Object(o.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(b.jsx)("th",Object(o.a)(Object(o.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(b.jsx)("tbody",Object(o.a)(Object(o.a)({},r()),{},{children:y.map((function(e){return f(e),Object(b.jsx)("tr",Object(o.a)(Object(o.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(b.jsx)("td",Object(o.a)(Object(o.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),Object(b.jsx)("pre",{children:Object(b.jsx)("code",{children:JSON.stringify({selectedFlatRows:O.map((function(e){return e.original}))},null,2)})}),Object(b.jsx)("button",{onClick:function(){console.log(O.map((function(e){return e.original}))),console.log("Button Clicked"),p.a.post("http://localhost:8080/game/games/deck",O.map((function(e){return e.original}))).then((function(e){console.log(e)})),p.a.get("http://localhost:8080/game/users/garg.pranav@gmail.com").then((function(e){console.log(e)})),p.a.post("http://localhost:8080/game/test").then((function(e){console.log(e.uuid)}))},children:"Submit Deck"})]})},y=a(22),k=a(23),_=a(26),x=a(25),g=function(e){var t=e.name,a=e.atk,n=e.def,c=e.mana;return Object(b.jsxs)("card",{onClick:function(e){console.log(e)},className:"card",children:[t,Object(b.jsx)("br",{}),"atk: ",a,Object(b.jsx)("br",{}),"def: ",n,Object(b.jsx)("br",{}),"cost: ",c]})};g.defaultProps={name:"",atk:"",def:"",mana:""};var S=g,A=function(e){e.life,e.mana;return Object(b.jsxs)("fieldSelf",{class:"fieldSelf",children:[Object(b.jsx)(S,{name:"TEST ",atk:"1",def:"1",mana:"3"}),Object(b.jsx)(S,{name:"TEST ",atk:"1",def:"1"}),Object(b.jsx)(S,{name:"TEST ",atk:"1",def:"1"}),Object(b.jsx)(S,{name:"TEST ",atk:"1",def:"1"})]})};A.defaultProps={life:"20",mana:"1"};var T=A,v=function(e){e.life,e.mana;return Object(b.jsxs)("fieldOpponent",{class:"fieldOpponent",children:[Object(b.jsx)(S,{name:"TEST ",atk:"1",def:"1",mana:"3"}),Object(b.jsx)(S,{name:"TEST ",atk:"1",def:"1"}),Object(b.jsx)(S,{name:"TEST ",atk:"1",def:"1"}),Object(b.jsx)(S,{name:"TEST ",atk:"1",def:"1"})]})};v.defaultProps={life:"20",mana:"1"};var M=v,E=function(e){e.life,e.mana;return Object(b.jsx)("opponent",{class:"opponent",children:Object(b.jsx)(S,{name:"TEST ",atk:"1",def:"1",mana:"3"})})};E.defaultProps={life:"20",mana:"1"};var w=E,C=function(e){e.life,e.mana;return Object(b.jsx)("self",{class:"self",children:Object(b.jsx)(S,{name:"TEST ",atk:"1",def:"1",mana:"3"})})};C.defaultProps={life:"20",mana:"1"};var P=C,F=function(e){e.life,e.mana;return Object(b.jsxs)("hand",{class:"hand",children:[Object(b.jsx)(S,{name:"TEST ",atk:"1",def:"1",mana:"3"}),Object(b.jsx)(S,{name:"TEST ",atk:"1",def:"1"}),Object(b.jsx)(S,{name:"TEST ",atk:"1",def:"1"}),Object(b.jsx)(S,{name:"TEST ",atk:"1",def:"1"})]})};F.defaultProps={life:"20",mana:"1"};var H=F,N=(a(55),function(e){Object(_.a)(a,e);var t=Object(x.a)(a);function a(){return Object(y.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){return e.getGame()}),1e3)}},{key:"componentWillUnmount",value:function(){this.timer=null}},{key:"getGame",value:function(){p.a.get("http://localhost:8080/game/users/garg.pranav@gmail.com").then((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(w,{}),Object(b.jsx)(M,{}),Object(b.jsx)(T,{}),Object(b.jsx)(P,{})]}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(H,{})})]})}}]),a}(c.a.Component)),R=N;var B=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(O,{})}),Object(b.jsx)("div",{children:Object(b.jsx)(R,{})})]})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,65)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(B,{}),document.getElementById("root")),D()}},[[63,1,2]]]);
//# sourceMappingURL=main.9e66e1e7.chunk.js.map