(this["webpackJsonpdeck-edit"]=this["webpackJsonpdeck-edit"]||[]).push([[0],{17:function(t){t.exports=JSON.parse('[{"id":1,"card_name":"A Light in the Darkness","type":"Spell","mana_cost":"2","attack":"","health":"","durability":""},{"id":2,"card_name":"A New Challenger...","type":"Spell","mana_cost":"7","attack":"","health":"","durability":""},{"id":3,"card_name":"Aberrant Berserker","type":"Minion","mana_cost":"4","attack":"3","health":"5","durability":""},{"id":4,"card_name":"Abominable Bowman","type":"Minion","mana_cost":"7","attack":"6","health":"7","durability":""},{"id":5,"card_name":"Abominable Lieutenant","type":"Minion","mana_cost":"8","attack":"3","health":"5","durability":""},{"id":6,"card_name":"Abomination","type":"Minion","mana_cost":"5","attack":"4","health":"4","durability":""},{"id":7,"card_name":"Abusive Sergeant","type":"Minion","mana_cost":"1","attack":"1","health":"1","durability":""},{"id":8,"card_name":"Abyssal Enforcer","type":"Minion","mana_cost":"7","attack":"6","health":"6","durability":""},{"id":9,"card_name":"Abyssal Summoner","type":"Minion","mana_cost":"6","attack":"2","health":"2","durability":""},{"id":10,"card_name":"Academic Espionage","type":"Spell","mana_cost":"4","attack":"","health":"","durability":""},{"id":11,"card_name":"Ace Hunter Kreen","type":"Minion","mana_cost":"3","attack":"2","health":"4","durability":""},{"id":12,"card_name":"Acherus Veteran","type":"Minion","mana_cost":"1","attack":"2","health":"1","durability":""},{"id":13,"card_name":"Acidic Swamp Ooze","type":"Minion","mana_cost":"2","attack":"3","health":"2","durability":""},{"id":14,"card_name":"Acidmaw","type":"Minion","mana_cost":"7","attack":"4","health":"2","durability":""},{"id":15,"card_name":"Acolyte of Agony","type":"Minion","mana_cost":"3","attack":"3","health":"3","durability":""},{"id":16,"card_name":"Acolyte of Pain","type":"Minion","mana_cost":"3","attack":"1","health":"3","durability":""},{"id":17,"card_name":"Acornbearer","type":"Minion","mana_cost":"1","attack":"2","health":"1","durability":""},{"id":18,"card_name":"Acrobatics","type":"Spell","mana_cost":"3","attack":"","health":"","durability":""},{"id":19,"card_name":"Activate the Obelisk","type":"Spell","mana_cost":"1","attack":"","health":"","durability":""},{"id":20,"card_name":"Adaptation","type":"Spell","mana_cost":"1","attack":"","health":"","durability":""},{"id":21,"card_name":"Addled Grizzly","type":"Minion","mana_cost":"3","attack":"2","health":"2","durability":""},{"id":22,"card_name":"Adorable Infestation","type":"Spell","mana_cost":"1","attack":"","health":"","durability":""},{"id":23,"card_name":"Aegwynn, the Guardian","type":"Minion","mana_cost":"5","attack":"5","health":"5","durability":""},{"id":24,"card_name":"Aeon Reaver","type":"Minion","mana_cost":"6","attack":"4","health":"4","durability":""},{"id":25,"card_name":"Aeroponics","type":"Spell","mana_cost":"5","attack":"","health":"","durability":""},{"id":26,"card_name":"Against All Odds","type":"Spell","mana_cost":"5","attack":"","health":"","durability":""},{"id":27,"card_name":"Aimed Shot","type":"Spell","mana_cost":"3","attack":"","health":"","durability":""},{"id":28,"card_name":"Air Elemental","type":"Minion","mana_cost":"1","attack":"2","health":"1","durability":""},{"id":29,"card_name":"Air Raid","type":"Spell","mana_cost":"2","attack":"","health":"","durability":""},{"id":30,"card_name":"Akali, the Rhino","type":"Minion","mana_cost":"8","attack":"5","health":"5","durability":""}]')},25:function(t,a,e){},26:function(t,a,e){},30:function(t,a,e){},50:function(t,a,e){"use strict";e.r(a);var n=e(3),c=e.n(n),i=e(16),r=e.n(i),o=(e(25),e(26),e(1)),l=e(19),d=e(6),s=e(17),h=[{Header:"Id",Footer:"Id",accessor:"id",disableFilters:!0,sticky:"left"},{Header:"Card Name",Footer:"Card Name",accessor:"card_name",sticky:"left"},{Header:"Mana Cost",Footer:"Mana Cost",accessor:"mana_cost"},{Header:"Attack",Footer:"Attack",accessor:"attack"},{Header:"Health",Footer:"Health",accessor:"health"}],u=(e(30),e(20)),b=e(0),m=["indeterminate"],p=c.a.forwardRef((function(t,a){var e=t.indeterminate,n=Object(u.a)(t,m),i=c.a.useRef(),r=a||i;return c.a.useEffect((function(){r.current.indeterminate=e}),[r,e]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",Object(o.a)({type:"checkbox",ref:r},n))})})),y=e(18),_=e.n(y),j=function(){var t=Object(n.useMemo)((function(){return h}),[]),a=Object(n.useMemo)((function(){return s}),[]);var e=Object(d.useTable)({columns:t,data:a},d.useRowSelect,(function(t){t.visibleColumns.push((function(t){return[{id:"selection",Header:function(t){var a=t.getToggleAllRowsSelectedProps;return Object(b.jsx)(p,Object(o.a)({},a()))},Cell:function(t){var a=t.row;return Object(b.jsx)(p,Object(o.a)({},a.getToggleRowSelectedProps()))}}].concat(Object(l.a)(t))}))})),c=e.getTableProps,i=e.getTableBodyProps,r=e.headerGroups,u=e.rows,m=e.prepareRow,y=e.selectedFlatRows,j=u.slice(0,30);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("table",Object(o.a)(Object(o.a)({},c()),{},{children:[Object(b.jsx)("thead",{children:r.map((function(t){return Object(b.jsx)("tr",Object(o.a)(Object(o.a)({},t.getHeaderGroupProps()),{},{children:t.headers.map((function(t){return Object(b.jsx)("th",Object(o.a)(Object(o.a)({},t.getHeaderProps()),{},{children:t.render("Header")}))}))}))}))}),Object(b.jsx)("tbody",Object(o.a)(Object(o.a)({},i()),{},{children:j.map((function(t){return m(t),Object(b.jsx)("tr",Object(o.a)(Object(o.a)({},t.getRowProps()),{},{children:t.cells.map((function(t){return Object(b.jsx)("td",Object(o.a)(Object(o.a)({},t.getCellProps()),{},{children:t.render("Cell")}))}))}))}))}))]})),Object(b.jsx)("pre",{children:Object(b.jsx)("code",{children:JSON.stringify({selectedFlatRows:y.map((function(t){return t.original}))},null,2)})}),Object(b.jsx)("button",{onClick:function(){console.log(y.map((function(t){return t.original}))),console.log("Button Clicked");var t=_.a.get("http://localhost:8080/test");console.log(t)},children:"Submit Deck"})]})};var k=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(j,{})})},O=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,52)).then((function(a){var e=a.getCLS,n=a.getFID,c=a.getFCP,i=a.getLCP,r=a.getTTFB;e(t),n(t),c(t),i(t),r(t)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),O()}},[[50,1,2]]]);
//# sourceMappingURL=main.f6e24d7a.chunk.js.map