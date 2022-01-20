(this["webpackJsonpaxie-management"]=this["webpackJsonpaxie-management"]||[]).push([[0],{56:function(n,e,t){},71:function(n,e,t){"use strict";t.r(e);var i,r,c,a,o,s,l,d,b,j,f,u,h,x,p,g,O,m,v,A,w,y,k,C,S,z,R,B,L,I,P,T,M,D,N,_,H,Q,F,E,V,K,J=t(0),X=t.n(J),U=t(20),W=t.n(U),q=(t(56),t(3)),G=t(4),Y=Object(q.b)(i||(i=Object(G.a)(["\n  body {\n    background-color: ",";\n    min-height: 100vh;\n    color: white;\n    font-family: Avenir Next,Muli,sans-serif;\n    min-height: 100vh;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: 14px;\n    padding-top: 62px;\n  }\n  *, ::before, ::after {\n    box-sizing: border-box;\n    border-width: 0;\n    border-style: solid;\n    border-color: currentColor;\n}\n"])),(function(n){return n.theme.bodyBg})),Z=q.c.div(r||(r=Object(G.a)([""]))),$=(t(61),t(28)),nn=t.n($),en=t(2),tn=t(37),rn=t(9),cn=t(21),an=t(8),on=q.c.div(c||(c=Object(G.a)(["\n  height: 80vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  flex-direction: column;\n  \n  &:before {\n    height: 50px;\n    width: 50px;\n    border: 6px solid white;\n    border-bottom: 6px solid transparent;\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n    content: '';\n    opacity: 0.7;\n    margin-bottom: 10px;\n  }\n\n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\n"]))),sn=t(1),ln=function(n){return Object(sn.jsx)(on,{children:n.children})},dn=t(75),bn=t(73),jn=t(76),fn=t.p+"static/media/slp.7f566f5e.png",un=q.c.div(a||(a=Object(G.a)(["\n  &&& {\n    .navbar.bg-dark {\n      background-color: ","!important;\n      border-bottom: 1px solid ",";\n      height: 52px;\n      padding: 0;\n      a {\n        text-decoration: none!important;\n      }\n      .navbar-brand {\n        font-weight: 700;\n        font-size: 18px;\n      }\n      .nav-link {\n        font-weight: 500;\n        display: flex;\n        align-items: center;\n        height: 52px;\n        > svg {\n          margin-right: 8px;\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.headerBG}),(function(n){return n.theme.headerBorderColor})),hn=q.c.div(o||(o=Object(G.a)(["\n  display: flex;\n  align-items: center;\n  color: white;\n  font-weight: 700;\n  img {\n    width: 14px;\n    margin-left: 2px;\n  }\n"]))),xn=function(){return Object(sn.jsx)(un,{children:Object(sn.jsx)(dn.a,{fixed:"top",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(sn.jsxs)(bn.a,{children:[Object(sn.jsx)(cn.b,{to:"/",children:Object(sn.jsx)(dn.a.Brand,{children:"Axie | kingSs"})}),Object(sn.jsx)(jn.a,{className:"justify-content-end",children:Object(sn.jsx)(jn.a.Link,{disabled:!0,children:Object(sn.jsx)(Ie.Consumer,{children:function(n){var e=n.slpPrice;return Object(sn.jsxs)(hn,{children:["\u20b1 ",e,Object(sn.jsx)("img",{src:fn,alt:"SLP icon"})]})}})})})]})})})},pn=t(74),gn=t(51),On=t(77),mn=q.c.div(s||(s=Object(G.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 3px;\n  padding: 12px;\n  color: ",";\n  height: 100%;\n  transition: all .3s ease;\n  animation: fadeIn 0.6s ease;\n  ","\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"])),(function(n){return n.isHighligted?n.theme.borderColor:n.theme.panelBg}),(function(n){return n.theme.borderColor}),(function(n){return n.theme.color}),(function(n){return n.onClick?"\n    cursor: pointer;\n    &:hover {\n      border-color: #11131b;\n      background-color: ".concat(n.theme.borderColor,";\n      box-shadow: 0px 3px 8px 0px rgba(17, 19, 27, .3);\n    }\n  "):""})),vn=function(n){return Object(sn.jsx)(mn,{onClick:n.onClick,isHighligted:n.isHighligted,children:n.children})},An=q.c.div(l||(l=Object(G.a)(["\n  text-align: center;\n"]))),wn=q.c.div(d||(d=Object(G.a)(["\n  font-size: 20px;\n  font-weight: 700;\n"]))),yn=q.c.div(b||(b=Object(G.a)(["\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 5px;\n"]))),kn=q.c.div(j||(j=Object(G.a)(["\n  font-size: 10px;\n  font-weight: 500;\n"]))),Cn=function(n){var e=n.value,t=n.title,i=n.subValue,r=n.isHighligted,c=n.onClick;return Object(sn.jsx)(vn,{onClick:c,isHighligted:r,children:Object(sn.jsxs)(An,{children:[Object(sn.jsx)(yn,{children:t}),Object(sn.jsx)(wn,{children:e}),Object(sn.jsx)(kn,{children:i})]})})},Sn=t(31),zn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAFQElEQVRoBdVaTWwbRRR+M3awSagiixLSoKot9OCC2hOhCFUibWiLQFV/UC6IC0IqB24ceu6BUw/cuCBxAnGJkONEKKhFrUFNAgoHxCHkQBI3aRORNolSJ06p4x3et86udu21vbPeOPK77OzMe998b3dm9s2bFRSCDAwMPLv4qHiWlHGaSCQVqaN8TZCifSa8oByRWhMk/uHrNAl5p2d/5Nbg4OBWo92LoACn3v8wYWw+uUhkXGSi5xinXRMrT4JuEsm07Iin7/74/Zqmvamu7cCFC1fb13LLnytF1xTtPOEgPTtsmEROCLqR2Nf15cjI13lHU92ibwd4mESWHhU+UYa4zkPkQF3kAAo8xJaEVNcP7G/7hodX0Q+ELwfOnBl46T+jMMRP/XU/oI3q8Nv4IybbLt2+PfigHlZdB06d/uCkMozUbj31agRLb0Nevnvnh9+r6aBe1mp8q+/SR0oZmWaTByf0ib7BoRbHSLVG01DRt9werabThHr0feXgkeTMQnb6L6/+PIeQOWzw5JWKexk1u04I8UQI2ec1nCocMCdscXtyL4ZNrQeDORGLRHvLJ7bLASyViw8Lv/lZbTo7O6mv723q6nqRpHTB1OLhajMMRcvL/1Im8wutr6+72rxusDr1vND2pnOJdU1ic533uVSCfHd3d2DyIAjHgQEsP4IHC45OXdsBfGHxkXI21irjyYclOljgCK5W3/YKY4YHRL6/sNWGDS99dOvmzxa+63r23DvEk9FVh5tqWBWKXIG5Ca5c/ALtpgMIzNRG/hoqGhWlBM1ls54waONx3LAgDmPOXyEANB8HosqwArOG2fkAANdSJGx/iTkkbjkpcZbYjPDAQjzfWsKcwV2aOyn9zYi2s5FIVGuy+uigHdxlaRvoQ71BlZdfOdIggoc5b2F5FRJJLE5hiRCKDh86ZMNxHMNf6y46fuKEXVdeKDwtlFf5vBfJKK+rR31q+1LDOn/+3fO+dC2l2blZq6h1BXe8gUSYb0CHgWEYNDc7R2Pj4zpmDl2R4DkQzsbcgeq7uJXfotXVVdou+Nr+VuIyd/NLXNnSWM3S4pINIDhgSyQSFIvF7Dqr0PFcB/W+0UuRaJQmJyetaq1rlHMzOX4Lz2tZ1VBGiDw8MuLSiLZFqb+/3zW5nQqvvXosmAPMnUMJFSih5CRQr7xd2KaxserjPBYPuvFTa/yCke7bfdnI5QhvJ0wBd7yB6TBBm4ulpiUSrc3tNMTemLtElpghtfKRIVJoBCoP7tJMcZtZYj2sx+uP9QxqaAfCYs7gvrO/k+ka+J5NExMToUxKTGxg6UuJs+kA8vO80+NDCP+SvXePRn8apaeFoIEYmbbAAJaOgCs4w8Z0AHtLDhpv6IBA9/7CfRoeStPmxqauqWkDW2DoCrhaByI7Q4gIhwvIfumCrXAsk0qlaGVlxbcpdE0bttUVcARXy852ACcjOFywGnSum/k8pdPDND8/X9cMOtCFTRABR+cpjis7fbL3+J8beeM9Bu7RBUdoPDMzy0HbM7RQZVjE4zFOI/5KxWKw6JOHDlKLn01NTdmfdJ4Pbmm15K49hCw3kP0VUl5GStuq2+urmV5nTuWZafByDSGL6Hz27wcHDyextl2x6vb0KujjsUxq1IuDpwNQxIkITkbYe8yJXdn4eBFy1pmjgMmPZ4a+c9Y7yxVzwNmIcksf8sEBHOvgZAQrAO6bIegLfXodKZX3XzGJyxVwj8mDkxEp6dMgHzsvTK86YKMP9OU1Yb1tvGpr1LXsrwblPrXszx7ljuAeWeK9+t3mf2L2Kx+JYJpkAAAAAElFTkSuQmCC",Rn=q.c.div(f||(f=Object(G.a)(["\n  font-size: ","px;\n  font-weight: 700;\n  text-align: ",";\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: ",";\n  opacity: ",";\n  ",";\n  a {\n    opacity: 1;\n    color: white;\n  }\n  > p {\n    font-weight: 400;\n    color: #a1a6b6;\n    margin: 0;\n    line-height: 1.2;\n    font-size: ","px;\n    width: 100%;\n    white-space: nowrap;\n    display: flex;\n    align-items: center;\n    justify-content: ",";\n    text-align: ",";\n    > small {\n      margin-left: 5px;\n      font-size: 0.75em;\n      font-weight: 700;\n    }\n  }\n  ","\n"])),(function(n){return n.size?"large"===n.size?36:10:28}),(function(n){return n.align?"left"===n.align?"left":"right":"center"}),(function(n){return n.align?"left"===n.align?"flex-start":"flex-end":"center"}),(function(n){return"small"!==n.size?1:.8}),(function(n){return"small"!==n.size?"\n    line-height: 1.2;\n  ":""}),(function(n){return n.size?"large"===n.size?14:8:10}),(function(n){return n.align?"left"===n.align?"flex-start":"flex-end":"center"}),(function(n){return n.align?"left"===n.align?"left":"right":"center"}),(function(n){return n.isReverse?"\n    flex-direction: column-reverse;\n  ":""})),Bn=function(n){var e=n.value,t=n.label,i=n.isReverse,r=n.align,c=n.labelSmall,a=n.size;return Object(sn.jsxs)(Rn,{size:a,isReverse:i,align:r,children:[e,Object(sn.jsxs)("p",{children:[t," ",!!c&&Object(sn.jsx)("small",{children:c})]})]})},Ln=t(39),In="\u2248 \u20b1 ",Pn=function(n){var e=n.toFixed().toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")},Tn=function(n){return-1===n},Mn=function(n,e){return parseInt((e/100*n).toFixed(),10)},Dn=function(n,e){return e/Nn(n)?Pn(Math.floor(e/Nn(n))):0},Nn=function(n){if(n){var e=Ln.DateTime.local(),t=Ln.DateTime.fromMillis(1e3*n);return Math.ceil(e.diff(t).shiftTo("days").toObject().days||0)}return 0},_n=function(n,e,t){var i=n?n.reduce((function(n,e){return n+e[t]}),0):0;return{value:Pn(i),subValue:"".concat(In).concat(Pn(i*e))}},Hn=function(n,e){return _n(n,e,"total_slp")},Qn=function(n,e){return _n(n,e,"in_game_slp")},Fn=function(n,e){return _n(n,e,"ronin_slp")},En=function(n,e){var t=n?n.reduce((function(n,e){return n+parseInt(Dn(e.last_claim,e.in_game_slp),10)}),0)/n.length:0;return{value:Pn(t),subValue:"".concat(In).concat(Pn(t*e))}},Vn=function(n,e){var t=n?n.reduce((function(n,e){return n+Un(e)}),0):0;return{value:Pn(t),subValue:"".concat(In).concat(Pn(t*e))}},Kn=function(n,e){var t=n?n.reduce((function(n,e){return n+Wn(e)}),0):0;return{value:Pn(t),subValue:"".concat(In).concat(Pn(t*e))}},Jn=function(n){var e=document.createElement("textarea");e.value=n,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)},Xn=function(n){var e=n.last_claim,t=n.in_game_slp,i=n.share;return i?Tn(i)?0:i:Dn(e,t)>=125?60:50},Un=function(n){var e=n.in_game_slp,t=Xn(n);return Mn(e,t)},Wn=function(n){var e=n.in_game_slp,t=n.share,i=Xn(n);return Mn(e,Tn(t)?100:100-i)},qn=Object(q.c)(mn)(u||(u=Object(G.a)(["\n  justify-content: flex-start;\n  display: block;\n  position: relative;\n  cursor: pointer;\n  transition: all .3s ease;\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.borderColor})),Gn=q.c.div(h||(h=Object(G.a)(["\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  font-size: 0;\n  font-weight: 600;\n  width: 8px;\n  height: 8px;\n  background-color: ",";\n  color: ",";\n  border-radius: 0 50% 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n"])),(function(n){return-1===n.isQouta?"var(--bs-danger)":1===n.isQouta?"var(--bs-teal)":"var(--bs-yellow)"}),(function(n){return n.isQouta?"white":"black"})),Yn=q.c.div(x||(x=Object(G.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n"]))),Zn=q.c.div(p||(p=Object(G.a)(["\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  display: flex;\n  align-items: center;\n  > img {\n    width: 20px;\n    margin-right: 8px;\n    border: 1px solid var(--bs-gray);\n    border-radius: 50%;\n    cursor: pointer;\n  }\n"]))),$n=q.c.div(g||(g=Object(G.a)(["\n  font-size: 10px;\n  font-weight: 500;\n  opacity: 0.8;\n"]))),ne=q.c.div(O||(O=Object(G.a)(["\n  font-size: 10px;\n  font-weight: 700;\n  text-align: right;\n  > p {\n    margin: 0;\n    font-size: 8px;\n    font-weight: 400;\n    opacity: 0.8;\n  }\n"]))),ee=q.c.div(m||(m=Object(G.a)(["\n  display: flex;\n  align-items: center;\n  margin: 10px 0 5px;\n  max-width: min-content;\n  > * {\n    text-align: center;\n    margin-right: 10px;\n    &:not(:first-child) {\n      margin-top: 10px;\n    }\n  }\n"]))),te=q.c.div(v||(v=Object(G.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 24px;\n  font-weight: 700;\n  margin-right: 10px;\n  > img {\n    width: 24px;\n    margin-right: 5px;\n  }\n  "," {\n    text-align: left;\n    font-size: 24px;\n    p {\n      font-size: 10px;\n      margin-top: -8px;\n    }\n  }\n"])),ne),ie=q.c.div(A||(A=Object(G.a)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n"]))),re=function(n){var e=n.name,t=n.cache_last_updated,i=n.last_claim,r=(n.total_slp,n.in_game_slp),c=n.mmr,a=n.share,o=n.rank,s=n.ronin,l=Object(an.f)(),d=-1===a,b=Wn(n),j=d?b:Un(n),f=Xn(n),u=function(n){var e=Dn(i,r);return e<75?-1:e>=n?1:0},h=function(n){n.stopPropagation(),Jn(s)};return Object(sn.jsx)(Ie.Consumer,{children:function(a){var s=a.avgLimit,x=a.onInfoItemClick;return Object(sn.jsxs)(qn,{onClick:function(){return function(e){e(n),l.push("/info")}(x)},children:[Object(sn.jsxs)(Gn,{isQouta:d?1:u(s),title:"Share ".concat(d?100:f,"%"),children:[d?100:f,"%"]}),Object(sn.jsxs)(Yn,{children:[Object(sn.jsxs)(Zn,{children:[Object(sn.jsx)("img",{onClick:h,src:zn,alt:"Ronin Ico",title:"Copy Ronin Address"}),e]}),Object(sn.jsx)(Bn,{label:"MMR",value:c,align:"right",size:"small"})]}),Object(sn.jsxs)(ee,{children:[Object(sn.jsxs)(te,{children:[Object(sn.jsx)("img",{src:fn,alt:"SLP Icon"}),Object(sn.jsx)(Ie.Consumer,{children:function(n){var e=n.slpPrice;return Object(sn.jsx)(Bn,{label:"".concat(In).concat(Pn(e*j)),labelSmall:"in ".concat(Nn(i)," days"),value:Pn(j),align:"left"})}})]}),Object(sn.jsx)(Bn,{label:"Avg",value:Dn(i,r),isReverse:!0,size:"small"}),Object(sn.jsx)(Bn,{label:"Total",value:Pn(r),isReverse:!0,size:"small"}),Object(sn.jsx)(Bn,{label:"Manager",value:Pn(b),isReverse:!0,size:"small"})]}),Object(sn.jsxs)(ie,{children:[Object(sn.jsx)($n,{children:Object(sn.jsx)(Sn.a,{date:t})}),Object(sn.jsx)(Bn,{label:"Rank",value:"#".concat(o),align:"right",isReverse:!0,size:"small"})]})]})}})},ce=function(n){var e=n.data,t=n.sortBy,i=n.isAsc,r=n.searchText;return!!e&&!!e.length&&e.filter((function(n){return!!n.name&&n.name.toLowerCase().includes(r.toLowerCase())})).sort((function(n,e){if("share_slp"===t){var r=!!n.total_slp&&0!==n.total_slp&&(Tn(n.share)?n.total_slp:Un(n)),c=!!e.total_slp&&0!==e.total_slp&&(Tn(e.share)?e.total_slp:Un(e));return i?r<c?-1:1:r>c?-1:1}var a=!!n[t]&&0!==n[t]&&n[t],o=!!e[t]&&0!==e[t]&&e[t];if("string"===typeof a&&"string"===typeof o){var s=a.toLowerCase(),l=o.toLowerCase();return i?s!==l?s<l?-1:1:0:s!==l?s>l?-1:1:0}return i?a!==o?a<o?-1:1:0:a!==o?a>o?-1:1:0}))},ae=t(78),oe=q.c.div(w||(w=Object(G.a)(["\n  margin: 6px 0;\n  .input-group.input-group-sm {\n    .input-group-text {\n      background-color: ",";\n      border: 1px solid ",";\n      color: ",";\n      font-size: 10px!important;\n      font-weight: 700;\n      text-transform: uppercase;\n      white-space: nowrap;\n      margin: 0;\n      line-height: 1;\n      min-width: 65px;\n    }\n  }\n  .form-control {\n    background-color: ",";\n    border: 1px solid ",";\n    border-radius: 3px;\n    color: ",";\n    padding-left: 12px;\n    \n  }\n  select.form-control {\n    background-repeat: no-repeat;\n    background-position: center right 12px;\n    background-size: 12px;\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgb(235,237,238)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");\n  }\n"])),(function(n){return n.theme.panelBg}),(function(n){return n.theme.borderColor}),(function(n){return n.theme.color}),(function(n){return n.theme.panelBg}),(function(n){return n.theme.borderColor}),(function(n){return n.theme.color})),se=Object(q.c)(ae.a.Text)(y||(y=Object(G.a)(["\n  cursor: pointer;\n  min-width: 40px!important;\n  justify-content: center;\n"]))),le=(Object(q.c)(ae.a.Text)(k||(k=Object(G.a)(["\n  width: 80px;\n  justify-content: center;\n"]))),function(n){return Object(sn.jsx)(gn.a,Object(en.a)(Object(en.a)({},n.sizes),{},{children:Object(sn.jsx)(oe,{children:Object(sn.jsxs)(ae.a,{size:"sm",children:[!!n.onClickAscDescButton&&Object(sn.jsx)(se,{onClick:n.onClickAscDescButton,children:n.ascDescText}),Object(sn.jsx)(ae.a.Text,{children:n.title}),n.children,n.totalTeams&&Object(sn.jsx)(ae.a.Text,{children:n.totalTeams})]})})}))}),de=q.c.div(C||(C=Object(G.a)([""]))),be=q.c.div(S||(S=Object(G.a)(["\n  .row > div {\n    padding-top: 12px;\n    padding-bottom: 12px;\n  }\n"]))),je=q.c.div(z||(z=Object(G.a)(["\n  .row > div {\n    padding-top: 12px;\n    padding-bottom: 12px;\n  }\n"]))),fe=(q.c.div(R||(R=Object(G.a)(["\n  height: 80vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  &:before {\n    height: 50px;\n    width: 50px;\n    border: 6px solid white;\n    border-bottom: 6px solid transparent;\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n    content: '';\n    opacity: 0.7;\n  }\n\n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\n"]))),function(){var n,e=Object(J.useState)(!0),t=Object(rn.a)(e,2),i=t[0],r=t[1],c=Object(J.useState)("name"),a=Object(rn.a)(c,2),o=a[0],s=a[1],l=Object(J.useState)(""),d=Object(rn.a)(l,2),b=d[0],j=d[1],f="admin"===(n="user",new URLSearchParams(window.location.search).get(n)),u=Object(an.f)();return Object(sn.jsx)(Ie.Consumer,{children:function(n){var e=n.slpPrice,t=n.data;return Object(sn.jsx)(de,{children:Object(sn.jsxs)(bn.a,{children:[f&&Object(sn.jsx)(be,{children:Object(sn.jsxs)(pn.a,{children:[Object(sn.jsx)(gn.a,{md:2,children:Object(sn.jsx)(Cn,Object(en.a)({title:"Total Average"},En(t,e)))}),Object(sn.jsx)(gn.a,{md:2,children:Object(sn.jsx)(Cn,Object(en.a)({title:"Total SLP",isHighligted:!0,onClick:function(){return u.push("/all-axies")}},Hn(t,e)))}),Object(sn.jsx)(gn.a,{md:2,children:Object(sn.jsx)(Cn,Object(en.a)({title:"Total Manager SLP"},Kn(t,e)))}),Object(sn.jsx)(gn.a,{md:2,children:Object(sn.jsx)(Cn,Object(en.a)({title:"Total Scholar SLP"},Vn(t,e)))}),Object(sn.jsx)(gn.a,{md:2,children:Object(sn.jsx)(Cn,Object(en.a)({title:"Total Unclaimed SLP"},Qn(t,e)))}),Object(sn.jsx)(gn.a,{md:2,children:Object(sn.jsx)(Cn,Object(en.a)({title:"Total Claimed SLP"},Fn(t,e)))})]})}),Object(sn.jsxs)(pn.a,{children:[Object(sn.jsx)(le,{sizes:{xl:3,lg:4,md:6},title:"sort by",onClickAscDescButton:function(){return r(!i)},ascDescText:i?"Asc":"Desc",children:Object(sn.jsxs)(On.a.Control,{as:"select",size:"sm",onChange:function(n){return s(n.target.value)},children:[Object(sn.jsx)("option",{value:"name",children:"Name"}),Object(sn.jsx)("option",{value:"share_slp",children:"Share SLP"}),Object(sn.jsx)("option",{value:"total_slp",children:"Total SLP"}),Object(sn.jsx)("option",{value:"mmr",children:"MMR"}),Object(sn.jsx)("option",{value:"rank",children:"Rank"})]})}),Object(sn.jsx)(le,{sizes:{xl:9,lg:8,md:6},title:"search",totalTeams:"Teams (".concat(ce({data:t,sortBy:o,isAsc:i,searchText:b}).length,")"),children:Object(sn.jsx)(On.a.Control,{placeholder:"Search name...",size:"sm",onChange:function(n){return j(n.target.value)}})})]}),Object(sn.jsx)(je,{children:Object(sn.jsx)(pn.a,{children:ce({data:t,sortBy:o,isAsc:i,searchText:b}).map((function(n,e){return Object(sn.jsx)(gn.a,{xl:3,lg:4,md:6,children:Object(sn.jsx)(re,Object(en.a)({},n))},e)}))})})]})})}})}),ue=q.c.div(B||(B=Object(G.a)(["\n  > .container > .row > * {\n    margin-bottom: 24px;\n  }\n"]))),he=q.c.h5(L||(L=Object(G.a)(["\n  font-weight: bold;\n  margin: 15px 0 0;\n  display: flex;\n  align-items: center;\n  > span {\n    margin-right: 5px;\n    cursor: pointer;\n  }\n"]))),xe=q.c.div(I||(I=Object(G.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  > * {\n    &:not(:last-child) {\n      margin-right: 24px;\n    }\n  }\n"]))),pe=q.c.div(P||(P=Object(G.a)(["\n  margin: 0 0 10px;\n  font-size: 12px;\n  font-weight: bold;\n  opacity: 0.8;\n  text-align: center;\n"]))),ge=q.c.div(T||(T=Object(G.a)(["\n  display: block;\n  position: relative;\n  width: 100%;\n"]))),Oe=Object(q.c)(te)(M||(M=Object(G.a)(["\n  > small {\n    margin: 0 0 10px -40px;\n    opacity: 0.9;\n    font-size: 0.7em;\n    display: flex;\n    align-items: center;\n    font-weight: 600;\n    > i {\n      margin-left: 5px;\n      font-weight: normal;\n      font-size: 0.7em;\n    }\n  }\n  "," {\n    max-width: min-content;\n    > p {\n      margin: 0;\n    }\n  }\n"])),Rn),me=q.c.div(D||(D=Object(G.a)(["\n  margin-top: 24px;\n"]))),ve=q.c.div(N||(N=Object(G.a)(["\n  position: absolute;\n  top: -8px;\n  right: 0;\n  opacity: 0.8;\n  * {\n    font-size: 12px;\n    white-space: nowrap;\n  }\n"]))),Ae=Object(q.c)(pe)(_||(_=Object(G.a)([""]))),we=Object(q.c)(xe)(H||(H=Object(G.a)([""]))),ye=function(n){var e=n.slpPrice,t=n.cache_last_updated,i=n.lifetime_slp,r=n.otherSlp,c=n.last_claim,a=n.total_slp,o=n.in_game_slp,s=n.share,l=(n.rank,n.ronin,-1===s),d=Wn(n),b=l?d:Un(n),j=Xn(n);return Object(sn.jsx)(vn,{children:Object(sn.jsxs)(ge,{children:[Object(sn.jsx)(ve,{children:Object(sn.jsx)(Sn.a,{date:t})}),Object(sn.jsxs)(Oe,{children:[Object(sn.jsx)("img",{src:fn,alt:"SLP Icon"}),Object(sn.jsx)(Bn,{label:"Slp Share for this month",value:Pn(b),align:"left",size:"large"}),Object(sn.jsxs)("small",{children:["".concat(In).concat(Pn(e*b)," "),Object(sn.jsx)("i",{children:"in ".concat(Nn(c)," days")})]})]}),Object(sn.jsxs)(pn.a,{children:[Object(sn.jsx)(gn.a,{lg:6,children:Object(sn.jsxs)(me,{children:[Object(sn.jsx)(Ae,{children:"This Month's Slp"}),Object(sn.jsxs)(we,{children:[Object(sn.jsx)(Bn,{label:"Avg",value:Dn(c,o),isReverse:!0}),Object(sn.jsx)(Bn,{label:"Manager",value:Pn(Mn(a,l?100:100-j)),isReverse:!0}),Object(sn.jsx)(Bn,{label:"Total",value:Pn(a),isReverse:!0})]})]})}),Object(sn.jsx)(gn.a,{lg:6,children:Object(sn.jsxs)(me,{children:[Object(sn.jsx)(Ae,{children:"Other Slp Details"}),Object(sn.jsxs)(we,{children:[Object(sn.jsx)(Bn,{label:"On hold",labelSmall:!!r&&Object(sn.jsx)("a",{href:"https://docs.google.com/spreadsheets/d/1Wid6sPNYWrAtNd7o-Q2OIqLzBvkPuNkQClPbVvqz8Bk/edit#gid=0",target:"_blank",children:"Details"}),value:r||0,isReverse:!0}),Object(sn.jsx)(Bn,{label:"Share + On hold",labelSmall:"".concat(In).concat(Pn(e*(b+(r||0)))," "),value:Pn(b+(r||0)),isReverse:!0}),Object(sn.jsx)(Bn,{label:"Total Farmed",value:Pn(i+a),isReverse:!0})]})]})})]})]})})},ke=q.c.div(Q||(Q=Object(G.a)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-weight: bold;\n  margin-bottom: 14px;\n  &:hover {\n    > span {\n      opacity: 1;\n    }\n    > img {\n      border-color: rgba(255, 255, 255, 0.7);\n    }\n  }\n  > span {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    opacity: 0.8;\n    transition: all .3s ease;\n    font-size: 11px;\n  }\n  > img {\n    width: 22px;\n    margin-right: 10px;\n    transition: all .3s ease;\n    border: 1px solid transparent;\n    border-radius: 50%;\n  }\n"]))),Ce=Object(q.c)(pe)(F||(F=Object(G.a)([""]))),Se=Object(q.c)(xe)(E||(E=Object(G.a)([""]))),ze=function(n){var e=n.mmr,t=n.rank,i=n.ronin;return Object(sn.jsxs)(vn,{children:[Object(sn.jsx)(Ce,{children:"Stats"}),Object(sn.jsxs)(ke,{onClick:function(){return Jn(i)},children:[Object(sn.jsx)("img",{src:zn,alt:"Ronin Ico",title:"Copy Ronin Address"}),Object(sn.jsx)("span",{children:i})]}),Object(sn.jsxs)(Se,{children:[Object(sn.jsx)(Bn,{label:"MMR",value:e,isReverse:!0,size:"small"}),Object(sn.jsx)(Bn,{label:"Rank",value:"#".concat(t),isReverse:!0,size:"small"}),Object(sn.jsx)(Bn,{label:"Axies",value:Object(sn.jsx)("span",{onClick:function(){return function(n){var e=window.open("https://marketplace.axieinfinity.com/profile/".concat(n,"/axie/"),"_blank","noopener,noreferrer");e&&(e.opener=null)}(i)},children:"View Axies"}),isReverse:!0,size:"small"})]})]})},Re=function(){var n=Object(an.f)(),e=Object(J.useContext)(Ie).selectedInfo;Object(J.useEffect)((function(){e||t()}),[e]);var t=function(){n.push("/")};return Object(sn.jsx)(Ie.Consumer,{children:function(n){var e=n.selectedInfo,i=n.slpPrice,r=(!!e&&e).name;return!!e&&Object(sn.jsx)(ue,{children:Object(sn.jsx)(bn.a,{children:Object(sn.jsxs)(pn.a,{children:[Object(sn.jsx)(gn.a,{xs:12,children:Object(sn.jsxs)(he,{children:[Object(sn.jsx)("span",{onClick:t,children:Object(sn.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",style:{fill:"white"},children:Object(sn.jsx)("path",{d:"M.225 6.436L6.437.225c.3-.3.785-.3 1.085 0l.724.724c.3.3.3.784.001 1.084L3.324 6.979l4.923 4.946c.299.3.298.785-.001 1.084l-.725.724c-.3.3-.785.3-1.085 0L.225 7.521c-.3-.3-.3-.785 0-1.085z"})})}),r]})}),Object(sn.jsx)(gn.a,{xl:9,md:8,children:Object(sn.jsx)(ye,Object(en.a)({slpPrice:i},e))}),Object(sn.jsx)(gn.a,{xl:3,md:4,children:Object(sn.jsx)(ze,Object(en.a)({},e))})]})})})}})},Be=[{ronin:"ronin:34c97bb8d4a8350a03cdc44eb8eb90f74a66fd80",share:50},{ronin:"ronin:eb11efa52e565e3e0e4139264a0f53824e048275",share:100,otherSlp:14116},{ronin:"ronin:3b8cf7d0056a6b0b85a4e4ae58f539b706c87159"},{ronin:"ronin:0d75bc4d37e01c34bdcc5217d738cd4a10f1a6b0"},{ronin:"ronin:f9d3d5bc09cd8860aeb8216254c25cb803809abe"},{ronin:"ronin:3ab5aa79be066ec52978fa102ea6e38b650ed3b1",otherSlp:3503},{ronin:"ronin:5798af891a54591db67cae9181002bc2686d5761",share:-1},{ronin:"ronin:34df8e3f41a51939a063e365a602a64fc8f6586f",otherSlp:5759},{ronin:"ronin:7e721d00685225ae5511a3d3600b92c87c3deaf7",otherSlp:6617},{ronin:"ronin:a180ab5097a4b4532f5d0099960b14296ff94dc8",share:100,otherSlp:28618},{ronin:"ronin:71e339feb065c7e17929dd6db858a7b3e6f18f5b"},{ronin:"ronin:02ab90f446330d47b78e653b49da8b4886af600a"},{ronin:"ronin:29705d9b6cbf5e6082a40f1574cbcd51974f63ba"},{ronin:"ronin:5af8386b7e7b72932e173326b664774a42ce4de2"},{ronin:"ronin:68c314ab9eb774041e9d43d4a5959049009893d0"},{ronin:"ronin:5202e03389e7c76660d79ea44574fa49257bf1e4"},{ronin:"ronin:50ee59c52cdfd23cf519ae6f3e294a528bac3409",otherSlp:2854},{ronin:"ronin:5d95c76cac306df5ba63e2838e24800d0175e38c",otherSlp:5948},{ronin:"ronin:70f1d684258f2f3c0bdc7baa50577f9859acf79b"},{ronin:"ronin:5ed1cd1f60f7b4893ff07b8ca7304efeeab1408f"},{ronin:"ronin:d667571e89c8827f00ce0c76130ecc2ae9c71800"},{ronin:"ronin:6b88145556c6411900d0fffbf48afff522fec092"},{ronin:"ronin:cf96fb9bc4a96e82bd826e836ffe3feb4084b3dd"},{ronin:"ronin:b81e2909d777677b4f463fb721fe9ad9c8fa155c",otherSlp:2440},{ronin:"ronin:a11b28f75d5fc9d92b2830e3049f9f67fe9e9d15"},{ronin:"ronin:5ba33490b3e313d95a069ceb2e0564d9e0fcf445",otherSlp:1097}],Le=q.c.div(V||(V=Object(G.a)([""]))),Ie=(q.c.div(K||(K=Object(G.a)(["\n  animation: fadeIn 0.6s ease;\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"]))),Object(J.createContext)(void 0)),Pe=function(){var n=Object(J.useState)(void 0),e=Object(rn.a)(n,2),t=e[0],i=e[1],r=Object(J.useState)(0),c=Object(rn.a)(r,2),a=c[0],o=c[1],s=Object(J.useState)(void 0),l=Object(rn.a)(s,2),d=l[0],b=l[1];Object(J.useEffect)((function(){f()}),[]);var j=function(){var n=Object(tn.a)(nn.a.mark((function n(e){var t;return nn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://game-api.axie.technology/api/v1/".concat(e.ronin));case 2:return t=n.sent,n.t0=en.a,n.t1=en.a,n.t2={},n.next=8,t.json();case 8:return n.t3=n.sent,n.t4=(0,n.t1)(n.t2,n.t3),n.t5=e,n.abrupt("return",(0,n.t0)(n.t4,n.t5));case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=Object(tn.a)(nn.a.mark((function n(){var e,t;return nn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=php");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,o(!!t&&!!t["smooth-love-potion"]&&t["smooth-love-potion"].php);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(J.useEffect)((function(){Promise.all(Be.map((function(n){return j(n)}))).then((function(n){i(n)}))}),[]),Object(sn.jsx)(Ie.Provider,{value:{slpPrice:a,data:t,selectedInfo:d,avgLimit:125,onInfoItemClick:b},children:Object(sn.jsxs)(cn.a,{children:[Object(sn.jsx)(xn,{}),t&&a?Object(sn.jsx)(Le,{children:Object(sn.jsxs)(an.c,{children:[Object(sn.jsx)(an.a,{exact:!0,path:"/",children:Object(sn.jsx)(fe,{})}),Object(sn.jsx)(an.a,{path:"/info",children:Object(sn.jsx)(Re,{})})]})}):Object(sn.jsx)(ln,{})]})})},Te={bodyBg:"#242735",headerBG:"#11131b",headerBorderColor:"#3a3f50",panelBg:"#282b39",borderColor:"#3a3f50",color:"rgb(235,237,238)"},Me=function(){return Object(sn.jsx)(q.a,{theme:Te,children:Object(sn.jsxs)(Z,{children:[Object(sn.jsx)(Y,{}),Object(sn.jsx)(Pe,{})]})})},De=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,79)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),i(n),r(n),c(n),a(n)}))};W.a.render(Object(sn.jsx)(X.a.StrictMode,{children:Object(sn.jsx)(Me,{})}),document.getElementById("root")),De()}},[[71,1,2]]]);
//# sourceMappingURL=main.cd5ba8ab.chunk.js.map