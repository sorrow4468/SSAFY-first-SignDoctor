(window.webpackJsonp=window.webpackJsonp||[]).push([[183,68,69,70,71,72,163,164],{1120:function(t,e,n){"use strict";n.r(e);var o={components:{PageNotFound:n(827).default}},l=n(60),component=Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("PageNotFound")}),[],!1,null,null,null);e.default=component.exports},372:function(t,e,n){t.exports=n.p+"img/2.a54c787.png"},374:function(t,e,n){t.exports=n.p+"img/landing-logo.a81471c.png"},377:function(t,e,n){var content=n(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("e7af6f4c",content,!0,{sourceMap:!1})},380:function(t,e,n){"use strict";n(377)},381:function(t,e,n){var o=n(53)(!1);o.push([t.i,"@media(min-width:1200px){#mystate[data-v-c42ac980]{left:550px}}",""]),t.exports=o},382:function(t,e,n){"use strict";n.r(e);var o={computed:{isLoginGetters:function(){return this.$store.getters["login/isLogin"]},isManagerGetters:function(){return this.$store.getters["login/isManager"]}},methods:{logout:function(){this.$store.state.login.isLogin=!1,this.$store.state.login.isnLogin=!0,this.$store.state.login.isManager=!1,localStorage.removeItem("jwtToken"),this.$alertify.success("로그아웃되었습니다. 감사합니다!"),this.$nuxt.$options.router.push("/authentication/login")}}},l=(n(380),n(60)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-right-margin"},[n("client-only",[n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Messenger")])],1),t._v(" "),n("b-dropdown",{attrs:{id:"dropdown-4",text:"Bouns page"}},[n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("프로젝트 소개")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/chat"}},[t._v("채팅 테스트")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/faq"}},[t._v("자주 묻는 질문")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("Elements")])],1)],1),t._v(" "),t.isLoginGetters?t._e():n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("로그인")])],1),t._v(" "),t.isLoginGetters?t._e():n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/authentication/signup"}},[t._v("회원가입")])],1),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/authentication/mypage"}},[t._v("마이페이지")])],1),t._v(" "),t.isLoginGetters?n("button",{staticClass:"btn btn-primary",attrs:{id:"mypage",type:"button"}},[n("nuxt-link",{attrs:{to:"/authentication/signup-2"}},[t._v("마이페이지")])],1):t._e(),t._v(" "),t.isLoginGetters?n("button",{staticClass:"btn btn-primary",attrs:{id:"logout",type:"button"}},[n("a",{on:{click:t.logout}},[t._v("로그아웃")])]):t._e(),t._v(" "),t.isManagerGetters?n("button",{staticClass:"btn btn-primary",attrs:{id:"mystate",type:"button"}},[n("nuxt-link",{attrs:{to:"/manager/manager"}},[t._v("관리자페이지")])],1):t._e(),t._v(" "),t.isLoginGetters?n("button",{staticClass:"btn btn-primary",attrs:{id:"mystate",type:"button"}},[n("h5",[t._v("안녕하세요! "+t._s(this.$store.state.login.login.userName)+"님")])]):t._e()],1)],1)],1)],1)}),[],!1,null,"c42ac980",null);e.default=component.exports},383:function(t,e,n){"use strict";n.r(e);var o=n(60),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("div",{staticClass:"logo-block"},[e("img",{staticClass:"img-fluid",attrs:{src:n(374),alt:"logo"}})])])}),[],!1,null,null,null);e.default=component.exports},386:function(t,e,n){"use strict";n.r(e);var o=n(383),l=n(382),r={components:{Logo:o.default,Navbar:l.default},data:function(){return{windowTop:0,fixedheader:!1}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){this.windowTop=t.target.documentElement.scrollTop,this.windowTop>=60?this.fixedheader=!0:this.fixedheader=!1}}},c=n(60),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"home"}},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"landing-header fixed"},[n("div",{staticClass:"main-menu"},[n("div",[n("b-navbar",{staticClass:"navbar navbar-light",attrs:{toggleable:"xl"}},[n("Logo"),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("Navbar")],1)],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},393:function(t,e,n){"use strict";n.r(e);var o={name:"TapTop",data:function(){return{display:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{executeScroll:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},handleScroll:function(){window.scrollY>600?this.display=!0:this.display=!1}}},l=n(60),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tap-top",style:t.display?"display:block":"display:none",on:{click:function(e){return t.executeScroll()}}},[t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"fa fa-angle-double-up"})])}],!1,null,null,null);e.default=component.exports},394:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title footer-mobile-title"},[n("h3",[t._v("About")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-2 col-md-3"},[n("div",{staticClass:"links"},[n("div",{staticClass:"footer-title"},[n("h3",[t._v("AI")])]),t._v(" "),n("div",{staticClass:"footer-contant"},[n("p",{staticClass:"text-black align-items-center"},[t._v("\n              반형동\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa fa-github"})])]),t._v(" "),n("p",{staticClass:"text-black align-items-center"},[t._v("\n              손한기\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa fa-github"})])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-2 col-md-3"},[n("div",{staticClass:"links"},[n("div",{staticClass:"footer-title"},[n("h3",[t._v("Backend")])]),t._v(" "),n("div",{staticClass:"footer-contant"},[n("p",{staticClass:"text-black align-items-center"},[t._v("\n              김영기\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa fa-github"})])]),t._v(" "),n("p",{staticClass:"text-black align-items-center"},[t._v("\n              김창민\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa fa-github"})])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-2 col-md-4"},[n("div",{staticClass:"links"},[n("div",{staticClass:"footer-title"},[n("h3",[t._v("Frontend")])]),t._v(" "),n("div",{staticClass:"footer-contant"},[n("p",{staticClass:"text-black align-items-center"},[t._v("\n              윤찬호\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa fa-github"})])]),t._v(" "),n("p",{staticClass:"text-black align-items-center"},[t._v("\n              이정원\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:sorrow4468@gmail.com"}},[n("i",{staticClass:"fa fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/sorrow4468/"}},[n("i",{staticClass:"fa fa-github"})])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-back-block"},[e("img",{staticClass:"img-fluid inner1",attrs:{src:n(372),alt:"footer-back-img"}}),e("img",{staticClass:"img-fluid inner2",attrs:{src:n(372),alt:"footer-back-img"}})])}],l=n(60),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("div",{staticClass:"container footer-main"},[o("div",{staticClass:"row footer-block"},[o("div",{staticClass:"col-lg-3 col-md-6"},[t._m(0),t._v(" "),o("div",{staticClass:"about-payment footer-contant"},[o("div",{staticClass:"logo"},[o("nuxt-link",{attrs:{to:"/messenger/messenger"}},[o("img",{attrs:{src:n(374),alt:"logo"}})])],1),t._v(" "),o("p",[t._v("\n            SSAFY 6기 부울경 2반 6팀 「SIXMAN」\n          ")])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])]),t._v(" "),t._m(4),t._v(" "),o("div",{staticClass:"container copyright-footer"})])}),o,!1,null,null,null);e.default=component.exports},679:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"page-decore"},[o("li",{staticClass:"top"},[o("img",{staticClass:"img-fluid inner2",attrs:{src:n(372),alt:"footer-back-img"}})]),t._v(" "),o("li",{staticClass:"bottom"},[o("img",{staticClass:"img-fluid inner2",attrs:{src:n(372),alt:"footer-back-img"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[t._v("\n            The Page You Are Attempting To Reach Is Not Available. "),n("br"),t._v("This\n            May Be Because The Page Does Not Exist Or Has Been Moved.\n          ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"animated-bg"},[e("i"),e("i"),e("i")])}],l=n(60),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"error-main"},[t._m(0),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"error-contain"},[n("h1",[t._v("404")]),t._v(" "),n("h2",[t._v("Page Not Found")]),t._v(" "),t._m(1),t._v(" "),n("nuxt-link",{attrs:{to:"/"}},[n("a",{staticClass:"btn btn-primary"},[t._v("back to home")])]),t._v(" "),t._m(2)],1)])])])])}),o,!1,null,null,null);e.default=component.exports},827:function(t,e,n){"use strict";n.r(e);var header=n(386),o=n(178),l=n(679),footer=n(394),r=n(393),c={components:{Header:header.default,Breadcrumbs:o.default,Errorpage:l.default,Footer:footer.default,TapTop:r.default}},f=n(60),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("div",[n("div",{staticClass:"inner-page"},[n("Header"),t._v(" "),n("Breadcrumbs",{attrs:{main:"Home",title:"404"}})],1),t._v(" "),n("Errorpage"),t._v(" "),n("Footer"),t._v(" "),n("TapTop")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);