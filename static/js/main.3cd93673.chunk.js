(window["webpackJsonplife-sim"]=window["webpackJsonplife-sim"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(8),a=n.n(i),c=(n(14),n(1)),s=n(2),l=n(4),u=n(3),h=n(5),d=(n(15),n(6)),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={residenceID:0,homeType:"single",income:"medium",residents:[{name:"Jeremy",incomeImpact:"medium",travel:"bike",resientID:1},{name:"Kimmel",incomeImpact:"high",travel:"bike",resientID:1}],residenceWorth:0,worthColor:"yellow"},n.modifyWorth=n.modifyWorth.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getRandomInt",value:function(e){return Math.floor(Math.random()*Math.floor(e))}},{key:"modifyWorth",value:function(){var e=this.state.residenceWorth,t=this.getRandomInt(3),n=Math.random()>=.5;n?(console.log("Changing worth by +".concat(t)),this.setState({residenceWorth:e+t})):n||(console.log("Changing worth by ".concat(t)),this.setState({residenceWorth:e-t})),this.setWorthColor(e)}},{key:"setWorthColor",value:function(){var e=this.state.residenceWorth;e>5?this.setState({worthColor:"green"}):e>0&&e<5?this.setState({worthColor:"yellow"}):e<-5&&this.setState({worthColor:"red"})}},{key:"componentDidMount",value:function(){this.interval=setInterval(this.modifyWorth,1e3),console.log(this.state.residenceWorth)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.worthColor;return r.a.createElement("li",{className:"residence house ".concat(e)},r.a.createElement("span",null,this.state.residenceWorth))}}]),t}(o.Component),m=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getResidences=function(){for(var e=n.state,t=e.residences,o=e.residenceTotal,i=0;i<o;i++)t.push(r.a.createElement(f,{key:i}));return t},n.state={residenceTotal:10,residences:[]},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("Creating residences.")}},{key:"render",value:function(){return r.a.createElement("ul",null,this.getResidences())}}]),t}(o.Component),v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={residences:[]},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"App container-fluid text-center"},r.a.createElement("section",{className:"container"},r.a.createElement(m,null)))}}]),t}(o.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a.a.render(r.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-starter-kit",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-starter-kit","/service-worker.js");g?(!function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):w(t,e)})}}()},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.3cd93673.chunk.js.map