(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(n,e,t){n.exports=t.p+"static/media/stamp.bf4bbf33.png"},55:function(n,e,t){n.exports=t(67)},60:function(n,e,t){},67:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"subSecond",function(){return p}),t.d(r,"createTimer",function(){return b}),t.d(r,"deleteTimer",function(){return g}),t.d(r,"toggleTimer",function(){return h}),t.d(r,"updateTimer",function(){return v}),t.d(r,"resetTimer",function(){return y}),t.d(r,"openModal",function(){return E}),t.d(r,"updateModal",function(){return O}),t.d(r,"closeModal",function(){return j});var a=t(0),i=t.n(a),o=t(12),c=t.n(o),l=(t(60),t(5)),s=t(6),u=t(8),m=t(14),d=t(88),f=t(86),p=function(n){return{type:"SUB_SECOND",id:n}},b=function(n,e,t){return{type:"CREATE_TIMER",title:n,originalMinutes:e,originalSeconds:t}},g=function(n){return{type:"DELETE_TIMER",id:n}},h=function(n){return{type:"TOGGLE_TIMER",id:n}},v=function(n,e,t,r){return{type:"UPDATE_TIMER",id:n,title:e,originalMinutes:t,originalSeconds:r}},y=function(n){return{type:"RESET_TIMER",id:n}},E=function(){return{type:"OPEN_MODAL",title:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",originalMinutes:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",originalSeconds:arguments.length>2&&void 0!==arguments[2]?arguments[2]:""}},O=function(n,e,t,r){return{type:"UPDATE_MODAL",id:n,title:e,originalMinutes:t,originalSeconds:r}},j=function(){return{type:"CLOSE_MODAL"}},M=t(4),w=t(38),T=t(39),N=t(49),S=t(40),x=t(52),k=t(81),I=t(82),C=t(83),D=t(84),_=t(85),A=t(35),R=t.n(A);function L(){var n=Object(l.a)(['\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  border-radius: 1rem;\n  overflow: hidden;\n  .top-bar {\n    width: 100%;\n    padding: 0.5rem 1rem 0.5rem 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: gray;\n    .title {\n      position: relative;\n      top: -1px;\n      left: 0;\n      color: white;\n      font-family: "Open Sans", sans-serif;\n    }\n    .buttons {\n      display: flex;\n      color: white;\n      .MuiIconButton-root {\n        width: 1rem;\n        height: 1rem;\n        margin-right: 0.25rem;\n        &:last-child {\n          margin-right: 0;\n        }\n        .icon {\n          width: 1rem;\n          height: 1rem;\n          color: white;\n        }\n      }\n    }\n  }\n  .bottom-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    .time-display {\n      font-size: 2rem;\n      font-weight: lighter;\n      margin: 1rem 0 0 0;\n      font-family: "Major Mono Display", monospace;\n    }\n    .buttons {\n      display: flex;\n      margin: 1.5rem 0;\n    }\n    .done-stamp {\n      position: absolute;\n      bottom: 0.5rem;\n      right: 0.5rem;\n      width: 3rem;\n    }\n  }\n']);return L=function(){return n},n}var U=function(n){function e(){return Object(w.a)(this,e),Object(N.a)(this,Object(S.a)(e).apply(this,arguments))}return Object(x.a)(e,n),Object(T.a)(e,[{key:"componentWillReceiveProps",value:function(n){var e=this.props.timer,t=e.id,r=e.running,a=this.props.subSecond,i=n.timer;!r&&i.running?this.setState({timerInterval:setInterval(function(){return a(t)},1e3)}):r&&!i.running&&clearInterval(this.state.timerInterval)}},{key:"render",value:function(){var n=this.props,e=n.className,t=n.timer,r=t.id,a=t.title,o=t.originalMinutes,c=t.originalSeconds,l=t.minutes,s=t.seconds,u=t.running,m=t.completed,f=this.props,p=f.openModal,b=f.updateModal,g=this.props,h=g.deleteTimer,v=g.toggleTimer,y=g.resetTimer;return i.a.createElement("div",{className:e},i.a.createElement("div",{className:"top-bar"},i.a.createElement("span",{className:"title"},a),i.a.createElement("div",{className:"buttons"},i.a.createElement(d.a,{onClick:function(n){n.preventDefault(),b(r,a,o,c),p()}},i.a.createElement(k.a,{className:"icon"})),i.a.createElement(d.a,{onClick:function(n){n.preventDefault(),window.confirm("Are you sure you want to delete ".concat(a,"?"))&&h(r)}},i.a.createElement(I.a,{className:"icon"})))),i.a.createElement("div",{className:"bottom-container"},i.a.createElement("span",{className:"time-display"},l,":",s),i.a.createElement("div",{className:"buttons"},i.a.createElement(d.a,{onClick:function(n){n.preventDefault(),v(r)}},u?i.a.createElement(C.a,null):i.a.createElement(D.a,null)),i.a.createElement(d.a,{onClick:function(n){n.preventDefault(),y(r)}},i.a.createElement(_.a,null))),m&&i.a.createElement("img",{className:"done-stamp",src:R.a,alt:"stamp"})))}}]),e}(a.Component),H=Object(m.b)(function(n){return Object(M.a)({},n.UIHandler)},function(n){return Object(u.a)(r,n)})(Object(s.b)(U)(L())),q={inset:"box-shadow: 0 0.125rem rgba(0, 0, 0, 0.2) inset;",card:"box-shadow: 0 0 1.25rem rgba(0, 0, 0, .05), 0 0px 2.5rem rgba(0, 0, 0, .08);"};function z(){var n=Object(l.a)(["\n  from {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n  to {\n    opacity: 0;\n    transform: translate(-50%, -6rem);\n  }\n  "]);return z=function(){return n},n}function P(){var n=Object(l.a)(["\n    from {\n      opacity: 0;\n      transform: translate(-50%, -6rem);\n    }\n    to {\n      opacity: 1;\n      transform: translate(-50%, -50%);\n    }\n  "]);return P=function(){return n},n}function B(){var n=Object(l.a)(["\n    from {\n      opacity: 1;\n    }\n    to {\n      opacity: 0;\n    }\n  "]);return B=function(){return n},n}function G(){var n=Object(l.a)(["\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  "]);return G=function(){return n},n}var J={fadeIn:Object(s.c)(G()),fadeOut:Object(s.c)(B()),bounceIn:Object(s.c)(P()),bounceOut:Object(s.c)(z())};function W(){var n=Object(l.a)(['\n  width: 100%;\n  padding: 1rem;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .add-icon {\n    margin-bottom: 0.5rem;\n  }\n  .empty-message {\n    font-size: 1.5rem;\n    font-family: "Major Mono Display", monospace;\n    line-height: 3rem;\n    animation: '," 2s forwards;\n  }\n  .timers {\n    margin-top: 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    "," {\n      width: 80%;\n      max-width: 30rem;\n      margin-bottom: 1rem;\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n  }\n"]);return W=function(){return n},n}var $=Object(m.b)(function(n){return{timers:n.TimerHandler.timers,displayModal:n.UIHandler.displayModal,modal:n.UIHandler.modal}},function(n){return Object(u.a)(r,n)})(Object(s.b)(function(n){var e=n.className,t=n.timers,r=n.openModal;return i.a.createElement("div",{className:e},i.a.createElement(d.a,{onClick:function(n){n.preventDefault(),r()}},i.a.createElement(f.a,null)),i.a.createElement("ul",{className:"timers"},t.length>0?function(n){return n.map(function(n){return i.a.createElement(H,{key:n.id,timer:n})})}(t):i.a.createElement("span",{className:"empty-message"},"Please add your todo timers ",i.a.createElement("br",null),"Original Product by Sangjun")))})(W(),J.fadeIn,H)),F=t(26),K=t(87);function Q(){var n=Object(l.a)(["\n  position: relative;\n  height: 100%;\n  background-color: ",";\n"]);return Q=function(){return n},n}var V=s.b.div(Q(),function(n){return n.backgroundColor}),X=t(47);function Y(){var n=Object(l.a)(["\n    position: relative;\n    display: inline-block;\n    width: ","px;\n    height: ","px;\n    border-radius: ","px;\n    &:hover {\n      cursor: pointer;\n    }\n    &:active {\n      transform: translate(0, 0.125rem);\n      ","\n    }\n    .fa-icon {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      padding: 0.25rem;\n      transform: translate(-50%, -50%);\n      width: 100%;\n      height: 100%;\n    }\n  "]);return Y=function(){return n},n}var Z=function(n){switch(n){case"sm":return 16;case"md":return 24;case"lg":return 32;default:return 16}},nn={fa:Object(s.b)(function(n){var e=n.className,t=n.icon,r=n.onClick;return i.a.createElement("div",{className:e,onClick:r},i.a.createElement(X.a,{className:"fa-icon",icon:t}))})(Y(),function(n){var e=n.size;return Z(e)},function(n){var e=n.size;return Z(e)},function(n){var e=n.size;return Z(e)/4},q.inset)},en=function(){try{var n=localStorage.getItem("about-timer-state");if(null===n)return;var e=JSON.parse(n);return function(n){var e=n.TimerHandler.timers;n.TimerHandler.timers=e.map(function(n){return Object(M.a)({},n,{minutes:n.completed?"00":n.originalMinutes,seconds:n.completed?"00":n.originalSeconds,running:!1})}),n.UIHandler.displayModal=!1,n.UIHandler.modal={title:"",originalMinutes:"",originalSeconds:""}}(e),e}catch(t){return}},tn=function(n){var e=parseInt(n);return n<10?"0".concat(e):"".concat(e)};function rn(){var n=Object(l.a)(['\n  font-family: "Open Sans", sans-serif;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  .modal-bg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    opacity: 0;\n    -webkit-transition: all 400ms ease-in-out;\n    transition: all 400ms ease-in-out;\n  }\n  .modal-content {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, 3rem);\n    padding: 1.5rem;\n    background-color: white;\n    border-radius: 1rem;\n    ',';\n    opacity: 0;\n    -webkit-transition: all 400ms ease-in-out;\n    transition: all 400ms ease-in-out;\n    .timer-form {\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: center;\n      input[type="text"] {\n        width: 100%;\n        height: 2rem;\n        font-size: 1rem;\n        padding: 0 0.5rem;\n        margin-bottom: 0.5rem;\n        &:last-child {\n          margin-bottom: 0;\n        }\n        &:focus {\n          outline: none;\n        }\n      }\n      .error-messages {\n        width: 100%;\n        padding: 0 0.5rem;\n        margin: 0.5rem 0;\n        text-align: left;\n        color: red;\n        li {\n          line-height: 1.5rem;\n        }\n      }\n      .buttons {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        '," {\n          margin-right: 0.5rem;\n          &:last-child {\n            margin-right: 0;\n          }\n        }\n        .save-icon {\n          color: lightGreen;\n        }\n        .cancel-icon {\n          color: lightCoral;\n        }\n      }\n    }\n  }\n  .fade-in {\n    opacity: 0.5;\n  }\n  .bounce-in {\n    opacity: 1;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n  }\n"]);return rn=function(){return n},n}var an=Object(m.b)(function(n){return{displayModal:n.UIHandler.displayModal,modal:n.UIHandler.modal}},function(n){return Object(u.a)(r,n)})(Object(s.b)(function(n){var e=n.className,t=n.modal,r=n.displayModal,o=n.closeModal,c=n.createTimer,l=n.updateTimer,s=Object(a.useState)(""),u=Object(F.a)(s,2),m=u[0],f=u[1],p=Object(a.useState)(""),b=Object(F.a)(p,2),g=b[0],h=b[1],v=Object(a.useState)(""),y=Object(F.a)(v,2),E=y[0],O=y[1];return Object(a.useEffect)(function(){f(t.title),h(t.originalMinutes),O(t.originalSeconds)},[t]),i.a.createElement("div",{className:"".concat(e," ").concat(r?"visible":"collapse")},i.a.createElement("div",{className:"modal-bg ".concat(r&&"fade-in"),onClick:function(n){n.preventDefault(),o()}}),i.a.createElement("div",{className:"modal-content ".concat(r&&"bounce-in")},i.a.createElement("form",{className:"timer-form",name:"timer-form"},i.a.createElement("div",{className:"inputs"},i.a.createElement("input",{type:"text",name:"title",placeholder:"Title",value:m,onChange:function(n){f(n.target.value)}}),i.a.createElement("input",{type:"text",name:"originalMinutes",placeholder:"Minutes",value:g,onChange:function(n){h(n.target.value)}}),i.a.createElement("input",{type:"text",name:"originalSeconds",placeholder:"Seconds",value:E,onChange:function(n){O(n.target.value)}})),i.a.createElement("ul",{className:"error-messages"}),i.a.createElement("div",{className:"buttons"},i.a.createElement(d.a,{onClick:function(n){n.preventDefault(),function(n){var e=n.title.value,t=parseInt(n.originalMinutes.value),r=parseInt(n.originalSeconds.value),a=n.querySelector(".error-messages");!function(n){for(;n.hasChildNodes();)n.removeChild(n.firstChild)}(a);var i=function(n){var e=document.createElement("li");e.innerText=n,a.appendChild(e)};return""===e.trim()&&i("Title cannot be empty"),(isNaN(t)||t<0||t>59)&&i("Minutes must be an integer from 0 to 59"),(isNaN(r)||r<0||r>59)&&i("Seconds must be an integer from 0 and 59"),isNaN(t)||isNaN(r)||t+r!==0||i("Cannot create a timer of duration 0"),!a.hasChildNodes()}(document.forms["timer-form"])&&(void 0!==t.id?l(t.id,m,g,E):c(m,g,E),o())}},i.a.createElement(K.a,null)),i.a.createElement(d.a,{onClick:function(n){n.preventDefault(),o()}},i.a.createElement(I.a,null))))))})(rn(),q.card,nn.fa));function on(){var n=Object(l.a)(["\n  /* http://meyerweb.com/eric/tools/css/reset/ \n    v2.0 | 20110126\n    License: none (public domain)\n  */\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  \n  * {\n    box-sizing: border-box;\n  }\n  html {\n    font-size: 16px;\n  }\n  .visible {\n    visibility: visible;\n  }\n  .collapse {\n    visibility: collapse;\n  }\n  \n"]);return on=function(){return n},n}var cn=Object(s.a)(on()),ln=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(cn,null),i.a.createElement(V,{backgroundColor:"#f5f5f9"},i.a.createElement($,null),i.a.createElement(an,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var sn,un=t(48),mn={nextTimerId:0,timers:[]},dn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SUB_SECOND":return Object(M.a)({},n,{timers:n.timers.map(function(n){return n.id===e.id?function(n){var e=n.minutes,t=n.seconds;return t>0?Object(M.a)({},n,{seconds:tn(t-1)}):e>0?Object(M.a)({},n,{minutes:tn(e-1),seconds:tn(59)}):Object(M.a)({},n,{minutes:tn(0),seconds:tn(0),running:!1,completed:!0})}(n):n})});case"CREATE_TIMER":return{nextTimerId:n.nextTimerId+1,timers:[Object(M.a)({},e,{id:n.nextTimerId,originalMinutes:tn(e.originalMinutes),originalSeconds:tn(e.originalSeconds),minutes:tn(e.originalMinutes),seconds:tn(e.originalSeconds),running:!1,completed:!1})].concat(Object(un.a)(n.timers))};case"DELETE_TIMER":return Object(M.a)({},n,{timers:n.timers.filter(function(n){return n.id!==e.id})});case"TOGGLE_TIMER":return Object(M.a)({},n,{timers:n.timers.map(function(n){return n.id===e.id?Object(M.a)({},n,{running:!n.running}):n})});case"UPDATE_TIMER":return Object(M.a)({},n,{timers:n.timers.map(function(n){return n.id===e.id?{id:e.id,title:e.title,originalMinutes:tn(e.originalMinutes),originalSeconds:tn(e.originalSeconds),minutes:tn(e.originalMinutes),seconds:tn(e.originalSeconds),running:!1,completed:!1}:n})});case"RESET_TIMER":return Object(M.a)({},n,{timers:n.timers.map(function(n){return n.id===e.id?Object(M.a)({},n,{minutes:n.originalMinutes,seconds:n.originalSeconds,running:!1,completed:!1}):n})});default:return n}},fn={displayModal:!1,modal:{id:void 0,title:"",originalMinutes:"",originalSeconds:""}},pn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"OPEN_MODAL":return Object(M.a)({},n,{displayModal:!0});case"UPDATE_MODAL":return Object(M.a)({},n,{modal:Object(M.a)({id:e.id||void 0},e)});case"CLOSE_MODAL":return fn;default:return n}},bn=Object(u.b)({TimerHandler:dn,UIHandler:pn}),gn=(sn=bn,void 0===en()?Object(u.c)(sn):Object(u.c)(sn,en()));gn.subscribe(function(){!function(n){try{var e=JSON.stringify(n);localStorage.setItem("about-timer-state",e)}catch(t){alert("An error has occurred while saving your data.")}}(gn.getState())}),c.a.render(i.a.createElement(m.a,{store:gn},i.a.createElement(ln,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[55,1,2]]]);
//# sourceMappingURL=main.49267d1e.chunk.js.map