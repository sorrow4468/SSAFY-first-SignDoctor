(window.webpackJsonp=window.webpackJsonp||[]).push([[69,70,71],{374:function(t,n,e){t.exports=e.p+"img/landing-logo.a81471c.png"},377:function(t,n,e){var content=e(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(54).default)("e7af6f4c",content,!0,{sourceMap:!1})},380:function(t,n,e){"use strict";e(377)},381:function(t,n,e){var o=e(53)(!1);o.push([t.i,"@media(min-width:1200px){#mystate[data-v-c42ac980]{left:550px}}",""]),t.exports=o},382:function(t,n,e){"use strict";e.r(n);var o={computed:{isLoginGetters:function(){return this.$store.getters["login/isLogin"]},isManagerGetters:function(){return this.$store.getters["login/isManager"]}},methods:{logout:function(){this.$store.state.login.isLogin=!1,this.$store.state.login.isnLogin=!0,this.$store.state.login.isManager=!1,localStorage.removeItem("jwtToken"),this.$alertify.success("로그아웃되었습니다. 감사합니다!"),this.$nuxt.$options.router.push("/authentication/login")}}},r=(e(380),e(60)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"header-right-margin"},[e("client-only",[e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[e("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Messenger")])],1),t._v(" "),e("b-dropdown",{attrs:{id:"dropdown-4",text:"Bouns page"}},[e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("프로젝트 소개")])],1),t._v(" "),e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/bonus/chat"}},[t._v("채팅 테스트")])],1),t._v(" "),e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/bonus/faq"}},[t._v("자주 묻는 질문")])],1),t._v(" "),e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("Elements")])],1)],1),t._v(" "),t.isLoginGetters?t._e():e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[e("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("로그인")])],1),t._v(" "),t.isLoginGetters?t._e():e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[e("nuxt-link",{attrs:{to:"/authentication/signup"}},[t._v("회원가입")])],1),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[e("nuxt-link",{attrs:{to:"/authentication/mypage"}},[t._v("마이페이지")])],1),t._v(" "),t.isLoginGetters?e("button",{staticClass:"btn btn-primary",attrs:{id:"mypage",type:"button"}},[e("nuxt-link",{attrs:{to:"/authentication/signup-2"}},[t._v("마이페이지")])],1):t._e(),t._v(" "),t.isLoginGetters?e("button",{staticClass:"btn btn-primary",attrs:{id:"logout",type:"button"}},[e("a",{on:{click:t.logout}},[t._v("로그아웃")])]):t._e(),t._v(" "),t.isManagerGetters?e("button",{staticClass:"btn btn-primary",attrs:{id:"mystate",type:"button"}},[e("nuxt-link",{attrs:{to:"/manager/manager"}},[t._v("관리자페이지")])],1):t._e(),t._v(" "),t.isLoginGetters?e("button",{staticClass:"btn btn-primary",attrs:{id:"mystate",type:"button"}},[e("h5",[t._v("안녕하세요! "+t._s(this.$store.state.login.login.userName)+"님")])]):t._e()],1)],1)],1)],1)}),[],!1,null,"c42ac980",null);n.default=component.exports},383:function(t,n,e){"use strict";e.r(n);var o=e(60),component=Object(o.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("div",{staticClass:"logo-block"},[n("img",{staticClass:"img-fluid",attrs:{src:e(374),alt:"logo"}})])])}),[],!1,null,null,null);n.default=component.exports},386:function(t,n,e){"use strict";e.r(n);var o=e(383),r=e(382),l={components:{Logo:o.default,Navbar:r.default},data:function(){return{windowTop:0,fixedheader:!1}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){this.windowTop=t.target.documentElement.scrollTop,this.windowTop>=60?this.fixedheader=!0:this.fixedheader=!1}}},c=e(60),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{attrs:{id:"home"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"landing-header fixed"},[e("div",{staticClass:"main-menu"},[e("div",[e("b-navbar",{staticClass:"navbar navbar-light",attrs:{toggleable:"xl"}},[e("Logo"),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),e("Navbar")],1)],1)])])])])])])}),[],!1,null,null,null);n.default=component.exports}}]);