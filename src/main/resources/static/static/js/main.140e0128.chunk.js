(this["webpackJsonpdeck-edit"]=this["webpackJsonpdeck-edit"]||[]).push([[0],{22:function(e,a){function t(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=22},23:function(e,a){},25:function(e){e.exports=JSON.parse('[{"id":1,"card_name":"A Light in the Darkness","type":"Spell","mana_cost":"2","attack":"","health":"","durability":""},{"id":2,"card_name":"A New Challenger...","type":"Spell","mana_cost":"7","attack":"","health":"","durability":""},{"id":3,"card_name":"Aberrant Berserker","type":"Minion","mana_cost":"4","attack":"3","health":"5","durability":""},{"id":4,"card_name":"Abominable Bowman","type":"Minion","mana_cost":"7","attack":"6","health":"7","durability":""},{"id":5,"card_name":"Abominable Lieutenant","type":"Minion","mana_cost":"8","attack":"3","health":"5","durability":""},{"id":6,"card_name":"Abomination","type":"Minion","mana_cost":"5","attack":"4","health":"4","durability":""},{"id":7,"card_name":"Abusive Sergeant","type":"Minion","mana_cost":"1","attack":"1","health":"1","durability":""},{"id":8,"card_name":"Abyssal Enforcer","type":"Minion","mana_cost":"7","attack":"6","health":"6","durability":""},{"id":9,"card_name":"Abyssal Summoner","type":"Minion","mana_cost":"6","attack":"2","health":"2","durability":""},{"id":10,"card_name":"Academic Espionage","type":"Spell","mana_cost":"4","attack":"","health":"","durability":""},{"id":11,"card_name":"Ace Hunter Kreen","type":"Minion","mana_cost":"3","attack":"2","health":"4","durability":""},{"id":12,"card_name":"Acherus Veteran","type":"Minion","mana_cost":"1","attack":"2","health":"1","durability":""},{"id":13,"card_name":"Acidic Swamp Ooze","type":"Minion","mana_cost":"2","attack":"3","health":"2","durability":""},{"id":14,"card_name":"Acidmaw","type":"Minion","mana_cost":"7","attack":"4","health":"2","durability":""},{"id":15,"card_name":"Acolyte of Agony","type":"Minion","mana_cost":"3","attack":"3","health":"3","durability":""},{"id":16,"card_name":"Acolyte of Pain","type":"Minion","mana_cost":"3","attack":"1","health":"3","durability":""},{"id":17,"card_name":"Acornbearer","type":"Minion","mana_cost":"1","attack":"2","health":"1","durability":""},{"id":18,"card_name":"Acrobatics","type":"Spell","mana_cost":"3","attack":"","health":"","durability":""},{"id":19,"card_name":"Activate the Obelisk","type":"Spell","mana_cost":"1","attack":"","health":"","durability":""},{"id":20,"card_name":"Adaptation","type":"Spell","mana_cost":"1","attack":"","health":"","durability":""},{"id":21,"card_name":"Addled Grizzly","type":"Minion","mana_cost":"3","attack":"2","health":"2","durability":""},{"id":22,"card_name":"Adorable Infestation","type":"Spell","mana_cost":"1","attack":"","health":"","durability":""},{"id":23,"card_name":"Aegwynn, the Guardian","type":"Minion","mana_cost":"5","attack":"5","health":"5","durability":""},{"id":24,"card_name":"Aeon Reaver","type":"Minion","mana_cost":"6","attack":"4","health":"4","durability":""},{"id":25,"card_name":"Aeroponics","type":"Spell","mana_cost":"5","attack":"","health":"","durability":""},{"id":26,"card_name":"Against All Odds","type":"Spell","mana_cost":"5","attack":"","health":"","durability":""},{"id":27,"card_name":"Aimed Shot","type":"Spell","mana_cost":"3","attack":"","health":"","durability":""},{"id":28,"card_name":"Air Elemental","type":"Minion","mana_cost":"1","attack":"2","health":"1","durability":""},{"id":29,"card_name":"Air Raid","type":"Spell","mana_cost":"2","attack":"","health":"","durability":""},{"id":30,"card_name":"Akali, the Rhino","type":"Minion","mana_cost":"8","attack":"5","health":"5","durability":""}]')},36:function(e,a,t){},40:function(e,a,t){},61:function(e,a){},62:function(e,a){},63:function(e,a){},64:function(e,a){},65:function(e,a){},66:function(e,a){},67:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),i=t(24),r=t.n(i),s=(t(36),t(11)),o=t(2),d=t(29),l=t(9),u=t(25),m=[{Header:"Id",Footer:"Id",accessor:"id",disableFilters:!0,sticky:"left"},{Header:"Card Name",Footer:"Card Name",accessor:"card_name",sticky:"left"},{Header:"Mana Cost",Footer:"Mana Cost",accessor:"mana_cost"},{Header:"Attack",Footer:"Attack",accessor:"attack"},{Header:"Health",Footer:"Health",accessor:"health"}],h=(t(40),t(31)),b=t(0),j=["indeterminate"],p=c.a.forwardRef((function(e,a){var t=e.indeterminate,n=Object(h.a)(e,j),i=c.a.useRef(),r=a||i;return c.a.useEffect((function(){r.current.indeterminate=t}),[r,t]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",Object(o.a)({type:"checkbox",ref:r},n))})})),f=t(4),O=t.n(f),y=function(e){var a=e.childToParent,t=Object(n.useMemo)((function(){return m}),[]),c=Object(n.useMemo)((function(){return u}),[]);var i=Object(l.useTable)({columns:t,data:c},l.useRowSelect,(function(e){e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var a=e.getToggleAllRowsSelectedProps;return Object(b.jsx)(p,Object(o.a)({},a()))},Cell:function(e){var a=e.row;return Object(b.jsx)(p,Object(o.a)({},a.getToggleRowSelectedProps()))}}].concat(Object(d.a)(e))}))})),r=i.getTableProps,s=i.getTableBodyProps,h=i.headerGroups,j=i.rows,f=i.prepareRow,y=i.selectedFlatRows,k=j.slice(0,30);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("table",Object(o.a)(Object(o.a)({},r()),{},{children:[Object(b.jsx)("thead",{children:h.map((function(e){return Object(b.jsx)("tr",Object(o.a)(Object(o.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(b.jsx)("th",Object(o.a)(Object(o.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(b.jsx)("tbody",Object(o.a)(Object(o.a)({},s()),{},{children:k.map((function(e){return f(e),Object(b.jsx)("tr",Object(o.a)(Object(o.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(b.jsx)("td",Object(o.a)(Object(o.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),Object(b.jsx)("pre",{children:Object(b.jsx)("code",{children:JSON.stringify({selectedFlatRows:y.map((function(e){return e.original}))},null,2)})}),Object(b.jsx)("button",{onClick:function(){console.log(y.map((function(e){return e.original}))),console.log("Button Clicked"),O.a.post("http://localhost:8080/game/games/deck",y.map((function(e){return e.original}))).then((function(e){console.log(e.data.uuid),a(e.data.uuid)})),O.a.get("http://localhost:8080/home/principal").then((function(e){console.log(e),console.log(e.data.name)}))},children:"Submit Deck"})]})},k=t(26),x=t(27),g=t(10),_=t(30),v=t(28),S=function(e){var a=e.name,t=e.atk,n=e.def,c=e.mana,i=e.uuid,r=e.id;return Object(b.jsxs)("card",{onClick:function(e){console.log(e);var s={name:a,attack:t,health:n,mana_cost:c};if(console.log(s),1==r){var o="http://localhost:8080/game/games/".concat(i,"/board/cards");O.a.post("".concat(o),s).then((function(e){}))}else if(2==r){var d="http://localhost:8080/game/games/".concat(i,"/board/attack");O.a.post("".concat(d),s).then((function(e){}))}},className:"card",children:[a,Object(b.jsx)("br",{}),"atk: ",t,Object(b.jsx)("br",{}),"def: ",n,Object(b.jsx)("br",{}),"cost: ",c]})};S.defaultProps={name:"",atk:"",def:"",mana:""};var A=S,T=function(e){var a=e.cards,t=e.uuid,c=Object(n.useState)(""),i=Object(s.a)(c,2),r=i[0],o=i[1];return Object(n.useEffect)((function(){console.log(a),null!=a&&(a.map((function(e){return console.log(e.mana_cost)})),o(a.map((function(e){return Object(b.jsx)(A,{name:"TEST ",atk:e.attack,def:e.health,mana:e.mana_cost,id:"2",uuid:t})}))),console.log(r))}),[a]),Object(b.jsx)("fieldSelf",{class:"fieldSelf",children:r})};T.defaultProps={life:"20",mana:"1"};var M=T,N=function(e){e.cards;return Object(b.jsxs)("fieldOpponent",{class:"fieldOpponent",children:[Object(b.jsx)(A,{name:"TEST ",atk:"1",def:"1",mana:"3"}),Object(b.jsx)(A,{name:"TEST ",atk:"1",def:"1"}),Object(b.jsx)(A,{name:"TEST ",atk:"1",def:"1"}),Object(b.jsx)(A,{name:"TEST ",atk:"1",def:"1"})]})};N.defaultProps={life:"20",mana:"1"};var C=N,E=function(e){e.life,e.mana;return Object(b.jsx)("opponent",{class:"opponent",children:Object(b.jsx)(A,{name:"TEST ",atk:"1",def:"1",mana:"3"})})};E.defaultProps={life:"20",mana:"1"};var w=E,P=function(e){var a=e.life,t=e.mana;return Object(b.jsx)("self",{class:"self",children:Object(b.jsx)(A,{name:"TEST ",atk:"1",def:a,mana:t})})};P.defaultProps={life:"20",mana:"1"};var F=P,H=function(e){e.card1a,e.card1d,e.card1m,e.card2a,e.card2d,e.card2m,e.card3,e.card4;var a=e.uuid;return Object(b.jsxs)("hand",{class:"hand",children:[Object(b.jsx)(A,{name:"TEST ",atk:"0",def:"0",mana:"0",id:"1",uuid:a}),Object(b.jsx)(A,{name:"TEST ",atk:"1",def:"1",id:"1",uuid:a}),Object(b.jsx)(A,{name:"TEST ",atk:"1",def:"1",id:"1",uuid:a}),Object(b.jsx)(A,{name:"TEST ",atk:"1",def:"1",id:"1",uuid:a})]})};H.defaultProps={life:"20",mana:"1"};var R=H,G=(t(59),function(e){Object(_.a)(t,e);var a=Object(v.a)(t);function t(e){var n;return Object(k.a)(this,t),(n=a.call(this,e)).state={name:"",p1name:"",p2name:"",game:{b:"",currentTurn:"",uuid:""},p1:{id:"",name:"",deck:[],hand:[],mana:"",life:"",board:[]},p2:{id:"",name:"",deck:[],hand:[],mana:"",life:"",board:[]}},n.getGame=n.getGame.bind(Object(g.a)(n)),n}return Object(x.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setName(),this.timer=setInterval((function(){e.getGame(),console.log(e.state.name),e.checkName()}),1e3),console.log(this.props.parentToChild)}},{key:"checkName",value:function(){this.state.p1.name==this.state.name&&console.log("Names Equal!!")}},{key:"setName",value:function(){var e=this;O.a.get("http://localhost:8080/home/principal").then((function(a){e.setState({name:a.data.name})}))}},{key:"getGame",value:function(){var e=this;if(""!=this.props.parentToChild){var a="http://localhost:8080/game/games/".concat(this.props.parentToChild);O.a.get("".concat(a)).then((function(a){console.log(a),e.setState({game:a.data}),e.setState({p1:a.data.p1}),e.setState({p2:a.data.p2})}))}console.log(this.state.game)}},{key:"render",value:function(e){return this.state.p1.name==this.state.name?Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(w,{card1:this.state.p1.deck[0]}),Object(b.jsx)(C,{}),Object(b.jsx)(M,{cards:this.state.p1.board,uuid:this.state.game.uuid}),Object(b.jsx)(F,{life:this.state.p1.life,mana:this.state.p1.mana})]}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(R,{uuid:this.state.game.uuid})})]}):this.state.p2.name==this.state.name?Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(w,{life:this.state.p1.life,mana:this.state.p2.mana}),Object(b.jsx)(C,{}),Object(b.jsx)(M,{}),Object(b.jsx)(F,{})]}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(R,{})})]}):Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(w,{}),Object(b.jsx)(C,{}),Object(b.jsx)(M,{}),Object(b.jsx)(F,{})]}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(R,{})})]})}}]),t}(c.a.Component));var B=function(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),c=t[0],i=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(y,{childToParent:function(e){i(e),console.log(e)}})}),Object(b.jsx)("div",{children:Object(b.jsx)(G,{parentToChild:c})})]})},D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,69)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,i=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(B,{}),document.getElementById("root")),D()}},[[67,1,2]]]);
//# sourceMappingURL=main.140e0128.chunk.js.map