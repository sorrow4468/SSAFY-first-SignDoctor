(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{1371:function(t,n,o){"use strict";o.r(n);var e=o(9),r=o(413);e.default.use(r.a);var c={data:function(){return{enterRoomModal:null}},computed:{isDoctor:function(){return this.$store.getters["login/isDoctor"]}},mounted:function(){},methods:{makeRoom:function(){this.$nuxt.$options.router.push("/room/createRoom")},enterRoom:function(){this.$store.state.login.isLogin||(this.$alertify.error("로그인 후 이용해주세요!"),this.$nuxt.$options.router.push("/authentication/login"))}}},l=o(60),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("section",{staticClass:"slider-block"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"slider-main"},[e("div",{staticClass:"slider-contain"},[e("h1",[t._v("온라인 진료실")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"downlaod"},[e("div",{staticClass:"footer-btn"},[t.isDoctor?t._e():e("a",{staticClass:"btn active",on:{click:t.enterRoom}},[t._v("진료실 입장")]),t._v(" "),t.isDoctor?e("a",{staticClass:"btn active",on:{click:t.makeRoom}},[t._v("진료실 생성")]):t._e()])])])])])])]),t._v(" "),e("img",{staticClass:"img-fluid chat-slide",attrs:{src:o(489),alt:"inner"}}),t._v(" "),e("img",{staticClass:"img-fluid inner1",attrs:{src:o(493),alt:"inner1"}})])])}),[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("h4",[o("span",[t._v("진료 5분 전부터 입장 가능합니다 ")]),t._v("– Easy to use our\n                chat app, Attractive and"),o("br"),t._v("\n                clean design, with many Features Dark & light, Recent Chat And\n                many more.......\n              ")])}],!1,null,null,null);n.default=component.exports},489:function(t,n,o){t.exports=o.p+"img/2.745992c.png"},493:function(t,n,o){t.exports=o.p+"img/1.e433226.png"}}]);