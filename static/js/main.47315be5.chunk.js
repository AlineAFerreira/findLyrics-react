(this["webpackJsonpreact-find-lyrics"]=this["webpackJsonpreact-find-lyrics"]||[]).push([[0],{35:function(n,e,t){n.exports=t.p+"static/media/4.3b427476.png"},37:function(n,e,t){n.exports=t(65)},65:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),i=t(5),o=t.n(i),c=t(6),l=t(10),s=t(7),u={isFirstLoad:!0,searchValue:"",results:[],noResults:!1,recents:[],lyrics:[],loading:!1,showRecents:!0},p=Object(l.b)({lyrics:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(n.recents=JSON.parse(localStorage.getItem("lastSearches")),e.type){case"UPDATE_LOADING":return Object(s.a)({},n,{loading:e.payload});case"UPDATE_SEARCH_VALUE":return Object(s.a)({},n,{searchValue:e.payload});case"UPDATE_RESULTS":return Object(s.a)({},n,{results:e.payload});case"UPDATE_NO_RESULTS":return Object(s.a)({},n,{noResults:e.payload});case"UPDATE_RECENTS_VISIBILITY":return Object(s.a)({},n,{showRecents:e.payload});case"UPDATE_LYRICS_VISIBILITY":return Object(s.a)({},n,{lyrics:e.payload});default:return n}}});var f=function(){return Object(l.c)(p)},d=function(n){return{type:"UPDATE_RECENTS_VISIBILITY",payload:n}},h=function(n){return{type:"UPDATE_LYRICS_VISIBILITY",payload:n}},m=function(n){return{type:"UPDATE_RESULTS",payload:n}},g=t(2),b=t(3);function x(){var n=Object(g.a)(["\n  * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  body {    \n    font-family: 'Poppins', sans-serif;\n    color: #707070;\n  }\n\n  .main {\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n  }\n\n  .content {\n    flex: 1;\n    padding: 20px 15px;\n    position: relative;\n  }\n\n  .Toastify__toast--info {\n    background: 'rgb(51, 102, 255)';\n  }\n  .Toastify__toast--success {\n      background: 'rgb(51, 187, 102)';\n    }\n  .Toastify__toast--warning {\n      background: 'blue';\n    }\n  .Toastify__toast--error {\n    background-color: #FF5761 !important;\n    box-shadow: rgba(0, 0, 0, 0.176) 0px 3px 8px;\n    border-radius: 4px;\n  }\n  .react-toast-notifications__toast__content {\n\n  }\n\n  @media (min-width: 768px) {\n    body {\n      margin-left: 40%;\n    }\n\n    .content {\n      padding: 20px 50px;\n    }\n  }\n"]);return x=function(){return n},n}var y=Object(b.a)(x()),v=t(14),E=t.n(v),w=t(32),O=t(15),j=t.n(O),R=function(n){return Object(w.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()("https://api.lyrics.ovh/suggest/".concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},S=function(n){return j()(n)};function k(){var n=Object(g.a)(["\n  font-weight: lighter;\n  font-size: 28px;\n  margin: 0;\n  line-height: 1.2;\n"]);return k=function(){return n},n}function _(){var n=Object(g.a)(["\n  text-transform: uppercase;\n  color: #7ECDDF;\n  font-size: 40px;\n  margin: 0 0 10px;\n  font-weight: 500;\n  line-height: 1.2;\n"]);return _=function(){return n},n}function I(){var n=Object(g.a)(["\n  padding: 0 20px; \n  margin-top: 25px;   \n  text-align: center;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  @media (min-width: 768px) {\n    width: 40%;\n    height: 100%;            \n    background: #7ECDDF;\n    margin-top: 0; \n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n\n    & * {\n      color: #FFF !important;\n    }\n  }\n"]);return I=function(){return n},n}var L=b.b.aside(I()),T=b.b.h1(_()),P=b.b.h2(k()),D=t(33),F=function(){return a.a.createElement(L,null,a.a.createElement(T,null,"Lyrics"),a.a.createElement(P,null,"Find Lyrics and sing together ",a.a.createElement(D.a,null)))};function U(){var n=Object(g.a)(["\n  background-color: rgba(255, 255, 255, .7);\n  color: blue;\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0; left: 0;\n  animation: "," .5s;\n"]);return U=function(){return n},n}function N(){var n=Object(g.a)(["\n  0%{ opacity: 0; }\n  40%{ opacity: .7; }\n  100%{ opacity: 1;}\n"]);return N=function(){return n},n}var A=Object(b.c)(N()),C=b.b.div(U(),A),z=function(){return a.a.createElement(C,null)},V=t(34);function J(){var n=Object(g.a)(["\n  font-size: 12px;\n  margin-left: 25px;\n  color: tomato;\n  opacity: 0;\n  transition: all .5s;\n\n    &.visible {\n      opacity: 1;\n  }\n"]);return J=function(){return n},n}function Y(){var n=Object(g.a)(["\n  position: absolute;\n  right: 10px;\n  top: 7px;\n  border: none;\n  padding: 5px;\n  border-radius: 50%;\n  background-color: #fff;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:active svg {\n    color: #999;\n  }\n\n  svg {\n    color: #707070;\n  }\n"]);return Y=function(){return n},n}function B(){var n=Object(g.a)(["\n  width: 100%;\n  font-size: 16px;\n  font-family: 'Poppins', sans-serif;\n  border-radius: 30px;\n  border: solid 1px #7ECDDF;\n  padding: 10px 20px;\n  transition: all .5s;\n\n  &:focus {\n    outline: none;\n    box-shadow: 1px 1px 6px #7ECDDF;\n  }\n"]);return B=function(){return n},n}function K(){var n=Object(g.a)(["\n  position: relative;\n  margin-bottom: 30px;\n  margin: 30px 15px 0px;\n\n  @media (min-width: 768px) {\n    margin: 30px 50px 0px;\n  }\n"]);return K=function(){return n},n}var G=b.b.div(K()),H=b.b.input(B()),q=b.b.button(Y()),M=b.b.span(J()),Q=Object(c.b)((function(n){return{searchValue:n.lyrics.searchValue}}))((function(n){return a.a.createElement(G,null,a.a.createElement(H,{type:"text",placeholder:"Type here...",onFocus:function(n){return n.target.select()},onKeyUp:n.handleKeyUp,onChange:function(e){return n.handleChange(e.target.value)}}),a.a.createElement(q,{onClick:n.handleSearch},a.a.createElement(V.a,{size:22})),a.a.createElement(M,{className:"no-results ".concat(n.noResults?"visible":"")}," No lyrics found"))}));function W(){var n=Object(g.a)(["\n  padding: 0 30px;\n  margin: 0 auto;\n\n  img {\n    width: 100%;\n  }\n"]);return W=function(){return n},n}function X(){var n=Object(g.a)(["\n  font-size: 12px;\n"]);return X=function(){return n},n}function Z(){var n=Object(g.a)(["\n  font-size: 14px;\n  color: #404040;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return Z=function(){return n},n}function $(){var n=Object(g.a)(["\n  width: 33%;\n  cursor: pointer;\n  text-align: center;\n  padding: 0 10px 20px;\n\n  @media (min-width: 992px) {\n    max-width: 140px;\n  }\n\n  @media screen and (max-width: 450px),\n\t(min-width: 768px) and (max-width: 866px) {\n\t\twidth: 50%\n  }\n\n\n  &:hover img {\n    transform: scale(1.1);\n  }\n\n  img {\n    display: block;\n    border-radius: 6px;\n    margin: 0 auto 8px;\n    transition: all .2s;\n  }\n\n  span {\n    display: block;\n  }\n"]);return $=function(){return n},n}function nn(){var n=Object(g.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return nn=function(){return n},n}function en(){var n=Object(g.a)(["\n  display: block;\n  margin: 10px 0 35px;\n  font-size: 30px;\n  font-weight: 600;\n  line-height: normal;\n  line-height: 35px;\n  color: #000;\n\n  &::after {\n    content: '';\n    width: 70px;\n    height: 3px;\n    background-color: #7ecddf;\n    display: block;\n    margin-top: 10px;\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(g.a)(["\n  flex: 1;\n"]);return tn=function(){return n},n}var rn=b.b.div(tn()),an=b.b.h1(en()),on=b.b.div(nn()),cn=b.b.div($()),ln=b.b.span(Z()),sn=b.b.span(X()),un=b.b.div(W()),pn=t(35),fn=t.n(pn),dn=Object(c.b)((function(n){return{isFirstLoad:n.lyrics.isFirstLoad,recents:n.lyrics.recents}}))((function(n){var e;return e=n.isFirstLoad?JSON.parse(localStorage.getItem("lastSearches")):n.recents,a.a.createElement(rn,null,a.a.createElement(an,null,null!==e?"Recents Searches":"No Recent Searches"),a.a.createElement(on,null,null!==e?function(e){return e.map((function(e){return a.a.createElement(cn,{key:e.id,onClick:function(){return n.lyricsParams(e.id,e.artist,e.song,e.cover)}},a.a.createElement("img",{src:e.cover,alt:e.artist}),a.a.createElement(ln,null,e.song),a.a.createElement(sn,null,e.artist))}))}(e):a.a.createElement(un,null,a.a.createElement("img",{src:fn.a,alt:"website logo"}))))}));function hn(){var n=Object(g.a)(["\n  margin-left: 15px;\n  overflow: hidden;\n\n  .song-name {\n    color: black;\n    text-transform: uppercase;\n    height: 20px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -ms-text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .artist-name {\n    font-size: 12px;\n  }\n"]);return hn=function(){return n},n}function mn(){var n=Object(g.a)(["\n  min-width: 50px;\n  width: 50px;\n  height: 50px;\n  background: #c1c1c1;\n\n  img {\n    width: 100%;\n  }\n"]);return mn=function(){return n},n}function gn(){var n=Object(g.a)(["\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"]);return gn=function(){return n},n}function bn(){var n=Object(g.a)(["\n  display: block;\n  margin: 10px 0 35px;\n  font-size: 30px;\n  font-weight: 600;\n  line-height: normal;\n  line-height: 35px;\n  color: #000;\n\n    &::after {\n      content: '';\n      width: 70px;\n      height: 3px;\n      background-color: #7ecddf;\n      display: block;\n      margin-top: 10px;\n    }\n"]);return bn=function(){return n},n}function xn(){var n=Object(g.a)(["\n  position: relative;\n"]);return xn=function(){return n},n}var yn=b.b.div(xn()),vn=b.b.h1(bn()),En=b.b.div(gn()),wn=b.b.div(mn()),On=b.b.div(hn()),jn=Object(c.b)((function(n){return{results:n.lyrics.results}}))((function(n){return a.a.createElement(yn,null,a.a.createElement(vn,null,"Results: "),n.results.map((function(e){return a.a.createElement(En,{key:e.id,onClick:function(){return n.lyricsParams(e.id,e.artist,e.song,e.cover)}},a.a.createElement(wn,null,a.a.createElement("img",{src:e.artistPicture,alt:e.artist})),a.a.createElement(On,null,a.a.createElement("div",{className:"song-name"},e.song),a.a.createElement("div",{className:"artist-name"},e.artist," - ",e.album)))})))}));function Rn(){var n=Object(g.a)(["\n  float: right;\n  font-size: 14px;\n  width: 148px;\n  height: 48px;\n  border-radius: 5px;\n  line-height: 50px;\n  font-weight: 500;\n  border: none;\n  padding: 0 35px;\n  margin-top: 15px;\n  background-color: #7ecddf;\n  text-transform: uppercase;\n  color: #FFF;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #48c4e0;\n    color: #FFF;\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);return Rn=function(){return n},n}function Sn(){var n=Object(g.a)(["\n  font-family: 'Poppins', sans-serif;\n  white-space: pre-wrap;\n"]);return Sn=function(){return n},n}function kn(){var n=Object(g.a)(["\n  display: block;\n  margin: 10px 0 35px;\n  font-size: 30px;\n  font-weight: 600;\n  line-height: normal;\n  line-height: 35px;\n  color: #000;\n\n  &::after {\n    content: '';\n    width: 70px;\n    height: 3px;\n    background-color: #7ecddf;\n    display: block;\n    margin-top: 10px;\n  }\n"]);return kn=function(){return n},n}function _n(){var n=Object(g.a)(["\n  display: block;\n  font-size: 18px;\n  font-weight: 400;\n  color: #555555;\n  text-transform: uppercase;\n  letter-spacing: 10px;\n"]);return _n=function(){return n},n}var In=b.b.span(_n()),Ln=b.b.span(kn()),Tn=b.b.pre(Sn()),Pn=b.b.button(Rn()),Dn=function(n){return a.a.createElement("div",null,a.a.createElement(Pn,{onClick:function(){n.controlPage(!0)}},"Voltar"),a.a.createElement("div",null,a.a.createElement(In,null,n.artist),a.a.createElement(Ln,null,n.song),a.a.createElement(Tn,null,n.lyrics)),a.a.createElement(Pn,{onClick:function(){n.controlPage(!0)}},"Voltar"))},Fn=t(36);function Un(){var n=Object(g.a)(["\n  display: block;\n  height: 28px;\n  color: #707070;\n  transition: color .5s;\n\n  &:hover {\n    color: #48c4e0;\n  }\n"]);return Un=function(){return n},n}function Nn(){var n=Object(g.a)(["\n  border-top: 1px solid #e6e6e6;\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n\n  .linkedIn-Profile {\n    color: #1d1d1d;\n\n    &:hover {\n      color: #48c4e0;\n    } \n  }\n"]);return Nn=function(){return n},n}var An=b.b.div(Nn()),Cn=b.b.a(Un()),zn=function(){return a.a.createElement(An,null,a.a.createElement("div",null,"Developed by ",a.a.createElement("a",{className:"linkedIn-Profile",href:"https://www.linkedin.com/in/aline-alves-ferreira",target:"_new"},"Aline ferreira")),a.a.createElement("div",null,a.a.createElement(Cn,{href:"https://github.com/AlineAFerreira",target:"_new"},a.a.createElement(Fn.a,{size:28}))))},Vn=t(16),Jn=(t(64),Object(c.b)((function(n){return{loading:n.lyrics.loading,searchValue:n.lyrics.searchValue,showRecents:n.lyrics.showRecents,lyrics:n.lyrics.lyrics,noResults:n.lyrics.noResults,results:n.lyrics.results}}),(function(n){return{refreshLoading:function(e){n(function(n){return{type:"UPDATE_LOADING",payload:n}}(e))},updateSearchValue:function(e){n({type:"UPDATE_SEARCH_VALUE",payload:e})},refreshResults:function(e){n(m(e))},setNoResults:function(e){n({type:"UPDATE_NO_RESULTS",payload:e})},refreshLyrics:function(e){n(h(e))},displayResults:function(e){n(d(e)),n(m([])),n(h([]))},setShowRecents:function(e){n(d(e))}}}))((function(n){var e=function(){var e=n.searchValue;if(n.refreshLyrics([]),e.length>=3){var t=encodeURI(e),r=[];n.refreshLoading(!0),n.setShowRecents(!1),R(t).then((function(e){var t=e.data;t.length?(t.forEach((function(n,e){r.push({id:n.id,song:n.title,artist:n.artist.name,artistPicture:n.artist.picture,album:n.album.title,cover:n.album.cover})})),n.refreshResults(r)):(n.refreshResults([]),n.setShowRecents(!0),n.setNoResults(!0)),n.refreshLoading(!1)}))}else n.refreshResults([]),n.setShowRecents(!0),n.setNoResults(!1)},t=function(e,t,a,i){var o=encodeURI("https://api.lyrics.ovh/v1/".concat(t,"/").concat(a));n.refreshLoading(!0),S(o).then((function(o){o.data.lyrics&&(n.refreshLyrics([a,t,o.data.lyrics]),n.setShowRecents(!1),n.refreshResults([]),r(e,t,a,i))})).catch((function(n){Vn.b.error("No lyrics found")})),n.refreshLoading(!1)},r=function(n,e,t,r){var a,i=!1,o=[],c={id:n,artist:e,song:t,cover:r},l=localStorage.getItem("lastSearches");if(l)for(o=JSON.parse(l),a=0;a<o.length;a++)if(o[a].id===c.id){i=!0;break}i||o.push(c),localStorage.setItem("lastSearches",JSON.stringify(o))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,null),a.a.createElement(F,null),a.a.createElement("div",{className:"main"},a.a.createElement(Vn.a,null),a.a.createElement(Q,{handleSearch:e,handleKeyUp:function(n){"Enter"===n.key&&e()},handleChange:n.updateSearchValue,noResults:n.noResults}),a.a.createElement("div",{className:"content"},n.loading&&a.a.createElement(z,null),n.results.length>0&&a.a.createElement(jn,{lyricsParams:t}),n.lyrics.length>0&&a.a.createElement(Dn,{song:n.lyrics[0],artist:n.lyrics[1],lyrics:n.lyrics[2],controlPage:n.displayResults}),n.showRecents&&a.a.createElement(dn,{lyricsParams:t})),a.a.createElement(zn,null)))}))),Yn=f();o.a.render(a.a.createElement(c.a,{store:Yn},a.a.createElement(Jn,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.47315be5.chunk.js.map