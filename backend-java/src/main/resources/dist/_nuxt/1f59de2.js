(window.webpackJsonp=window.webpackJsonp||[]).push([[197,28,30,31,32,33,34,35,36,38,72,73,74,75,76],{1200:function(t,e,l){"use strict";l.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"page-decore"},[n("li",{staticClass:"top"},[n("img",{staticClass:"img-fluid inner2",attrs:{src:l(377),alt:"footer-back-img"}})]),t._v(" "),n("li",{staticClass:"bottom"},[n("img",{staticClass:"img-fluid inner2",attrs:{src:l(377),alt:"footer-back-img"}})])])}],o=l(789),r=l(590),c={components:{BlogMedia:o.default,BlogSidebar:r.default}},v=l(60),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"section-py-space blog-page ratio2_3"},[t._m(0),t._v(" "),l("div",{staticClass:"custom-container left-blog"},[l("div",{staticClass:"row"},[l("BlogSidebar"),t._v(" "),l("BlogMedia")],1)])])}),n,!1,null,null,null);e.default=component.exports},1389:function(t,e,l){"use strict";l.r(e);var n=l(788),o=l(1200),footer=l(398),r=l(397),c={components:{BlogHeader:n.default,Blog:o.default,Footer:footer.default,TapTop:r.default}},v=l(60),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("BlogHeader"),t._v(" "),l("Blog"),t._v(" "),l("Footer"),t._v(" "),l("TapTop")],1)}),[],!1,null,null,null);e.default=component.exports},376:function(t,e,l){t.exports=l.p+"img/landing-logo.a81471c.png"},377:function(t,e,l){t.exports=l.p+"img/2.a54c787.png"},378:function(t,e,l){var content=l(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(54).default)("53d2f8b4",content,!0,{sourceMap:!1})},382:function(t,e,l){t.exports=l.p+"img/noProfile.9d28d4a.png"},385:function(t,e,l){"use strict";l(378)},386:function(t,e,l){var n=l(53)(!1);n.push([t.i,"@media (min-width:1200px){#mystate[data-v-4702a5c2]{left:200px}}",""]),t.exports=n},387:function(t,e,l){"use strict";l.r(e);var n={computed:{isLoginGetters:function(){return this.$store.getters["login/isLogin"]},isManagerGetters:function(){return this.$store.getters["login/isManager"]},isDoctorGetters:function(){return this.$store.getters["login/isDoctor"]}},methods:{logout:function(){this.$store.state.login.isLogin=!1,this.$store.state.login.isnLogin=!0,this.$store.state.login.isDoctor=!1,this.$store.state.login.isManager=!1,localStorage.removeItem("vuex"),localStorage.removeItem("jwtToken"),this.$alertify.success("로그아웃되었습니다. 감사합니다!"),this.$nuxt.$options.router.push("/authentication/login")}}},o=(l(385),l(60)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-right-margin"},[n("client-only",[n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/online/room"}},[t._v("온라인 진료실")])],1),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/offline/room"}},[t._v("오프라인 진료실")])],1),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/offline/help"}},[t._v("오프라인 안내페이지")])],1),t._v(" "),n("b-dropdown",{attrs:{id:"dropdown-4",text:"개발중인 페이지들"}},[n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("Tensor.js")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("진료 예약 목록 관련")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/price"}},[t._v("Price")])],1)],1),t._v(" "),t.isLoginGetters?t._e():n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("로그인")])],1),t._v(" "),t.isLoginGetters?t._e():n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/authentication/signup-2"}},[t._v("회원가입")])],1),t._v(" "),t.isLoginGetters?n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/authentication/mypage"}},[t._v("마이페이지")])],1):t._e(),t._v(" "),t.isLoginGetters?n("button",{staticClass:"btn btn-primary",attrs:{id:"logout",type:"button"}},[n("a",{on:{click:t.logout}},[t._v("로그아웃")])]):t._e(),t._v(" "),t.isManagerGetters?n("button",{staticClass:"btn btn-primary",attrs:{id:"mystate",type:"button"}},[n("nuxt-link",{attrs:{to:"/manager/manager"}},[t._v("관리자페이지")])],1):t._e(),t._v(" "),!t.isLoginGetters||t.isManagerGetters||t.isDoctorGetters?t._e():n("button",{staticClass:"btn btn-primary",attrs:{id:"mystate",type:"button"}},[n("nuxt-link",{attrs:{to:"/reserve/applyReservation"}},[t._v("예약신청")])],1),t._v(" "),t.isLoginGetters&&!t.isManagerGetters?n("button",{staticClass:"btn btn-primary",attrs:{id:"mystate",type:"button"}},[n("nuxt-link",{attrs:{to:"/reserve/checkReservation"}},[t._v("예약확인")])],1):t._e(),t._v(" "),t.isLoginGetters?n("button",{staticClass:"btn btn-primary",attrs:{id:"mystate",type:"button"}},[n("h5",{staticStyle:{float:"left"}},[t._v("안녕하세요! "+t._s(this.$store.state.login.login.userName)+" "),t.isDoctorGetters?n("span",{staticStyle:{"font-size":"14px"}},[t._v("의사")]):t._e(),t._v("님                    \n                      "),t.isLoginGetters?n("img",{staticClass:"d-inline-block align-text-top",staticStyle:{"border-radius":"50%","margin-left":"10px","padding-bottom":"3px"},attrs:{src:l(382),alt:"",width:"24",height:"20"}}):t._e()])]):t._e()],1)],1)],1)],1)}),[],!1,null,"4702a5c2",null);e.default=component.exports},388:function(t,e,l){"use strict";l.r(e);var n=l(60),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("div",{staticClass:"logo-block"},[e("img",{staticClass:"img-fluid",attrs:{src:l(376),alt:"logo"}})])])}),[],!1,null,null,null);e.default=component.exports},389:function(t,e,l){"use strict";l.r(e);var n=l(388),o=l(387),r={components:{Logo:n.default,Navbar:o.default},data:function(){return{windowTop:0,fixedheader:!1}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){this.windowTop=t.target.documentElement.scrollTop,this.windowTop>=60?this.fixedheader=!0:this.fixedheader=!1}}},c=l(60),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{attrs:{id:"home"}},[l("div",{staticClass:"custom-container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"landing-header fixed"},[l("div",{staticClass:"main-menu"},[l("div",[l("b-navbar",{staticClass:"navbar navbar-light",attrs:{toggleable:"xl"}},[l("Logo"),t._v(" "),l("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),l("Navbar")],1)],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},397:function(t,e,l){"use strict";l.r(e);var n={name:"TapTop",data:function(){return{display:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{executeScroll:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},handleScroll:function(){window.scrollY>600?this.display=!0:this.display=!1}}},o=l(60),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tap-top",style:t.display?"display:block":"display:none",on:{click:function(e){return t.executeScroll()}}},[t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"fa fa-angle-double-up"})])}],!1,null,null,null);e.default=component.exports},398:function(t,e,l){"use strict";l.r(e);var n=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"footer-title footer-mobile-title"},[l("h3",[t._v("About")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-2 col-md-3"},[l("div",{staticClass:"links"},[l("div",{staticClass:"footer-title"},[l("h3",[t._v("AI")])]),t._v(" "),l("div",{staticClass:"footer-contant"},[l("p",{staticClass:"text-black align-items-center"},[t._v("\n              반형동\n              "),l("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[l("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),l("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[l("i",{staticClass:"fa-brands fa-github"})])]),t._v(" "),l("p",{staticClass:"text-black align-items-center"},[t._v("\n              손한기\n              "),l("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"onegison95@gmail.com"}},[l("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),l("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/onegi95/"}},[l("i",{staticClass:"fa-brands fa-github"})])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-2 col-md-3"},[l("div",{staticClass:"links"},[l("div",{staticClass:"footer-title"},[l("h3",[t._v("Backend")])]),t._v(" "),l("div",{staticClass:"footer-contant"},[l("p",{staticClass:"text-black align-items-center"},[t._v("\n              김영기\n              "),l("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[l("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),l("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[l("i",{staticClass:"fa-brands fa-github"})])]),t._v(" "),l("p",{staticClass:"text-black align-items-center"},[t._v("\n              김창민\n              "),l("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[l("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),l("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[l("i",{staticClass:"fa-brands fa-github"})])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-2 col-md-4"},[l("div",{staticClass:"links"},[l("div",{staticClass:"footer-title"},[l("h3",[t._v("Frontend")])]),t._v(" "),l("div",{staticClass:"footer-contant"},[l("p",{staticClass:"text-black align-items-center"},[t._v("\n              윤찬호\n              "),l("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[l("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),l("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[l("i",{staticClass:"fa-brands fa-github"})])]),t._v(" "),l("p",{staticClass:"text-black align-items-center"},[t._v("\n              이정원\n              "),l("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:sorrow4468@gmail.com"}},[l("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),l("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/sorrow4468/"}},[l("i",{staticClass:"fa-brands fa-github"})])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-back-block"},[e("img",{staticClass:"img-fluid inner1",attrs:{src:l(377),alt:"footer-back-img"}}),e("img",{staticClass:"img-fluid inner2",attrs:{src:l(377),alt:"footer-back-img"}})])}],o=l(60),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"container footer-main"},[n("div",{staticClass:"row footer-block"},[n("div",{staticClass:"col-lg-3 col-md-6"},[t._m(0),t._v(" "),n("div",{staticClass:"about-payment footer-contant"},[n("div",{staticClass:"logo"},[n("nuxt-link",{attrs:{to:"/messenger/messenger"}},[n("img",{attrs:{src:l(376),alt:"logo"}})])],1),t._v(" "),n("p",[t._v("\n            SSAFY 6기 부울경 2반 6팀 「SIXMAN」\n          ")])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])]),t._v(" "),t._m(4),t._v(" "),n("div",{staticClass:"container copyright-footer"})])}),n,!1,null,null,null);e.default=component.exports},399:function(t,e,l){t.exports=l.p+"img/1.cb170ac.jpg"},400:function(t,e,l){t.exports=l.p+"img/2.cb170ac.jpg"},405:function(t,e,l){t.exports=l.p+"img/2.64da6f4.jpg"},414:function(t,e,l){t.exports=l.p+"img/3.cb170ac.jpg"},415:function(t,e,l){t.exports=l.p+"img/4.cb170ac.jpg"},421:function(t,e,l){t.exports=l.p+"img/1.64da6f4.jpg"},422:function(t,e,l){t.exports=l.p+"img/3.64da6f4.jpg"},423:function(t,e,l){t.exports=l.p+"img/4.64da6f4.jpg"},546:function(t,e,l){"use strict";l.r(e);var n=l(60),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-card"},[l("h4",[t._v("search")]),t._v(" "),l("div",{staticClass:"blog-search"},[l("div",{staticClass:"input-group"},[l("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"search in blog"}}),l("span",[l("i",{staticClass:"fa fa-search"})])])])])}],!1,null,null,null);e.default=component.exports},547:function(t,e,l){"use strict";l.r(e);var n=l(60),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-card"},[l("h4",[t._v("follow us")]),t._v(" "),l("ul",{staticClass:"blog-follow"},[l("li",[l("a",{attrs:{href:"https://www.facebook.com/"}},[l("i",{staticClass:"fa fa-facebook-square"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://twitter.com/"}},[l("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://www.instagram.com/"}},[l("i",{staticClass:"fa fa-instagram"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://www.skype.com/en/"}},[l("i",{staticClass:"fa fa-skype"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://www.linkedin.com/"}},[l("i",{staticClass:"fa fa-linkedin"})])])])])}],!1,null,null,null);e.default=component.exports},548:function(t,e,l){"use strict";l.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-card"},[n("h4",[t._v("Recent Blog")]),t._v(" "),n("ul",{staticClass:"recent-blog"},[n("li",[n("div",{staticClass:"media"},[n("img",{staticClass:"img-fluid blur-up lazyload",attrs:{src:l(421),alt:"Generic placeholder image"}}),t._v(" "),n("div",{staticClass:"media-body align-self-center"},[n("h5",[t._v("1 Dec 2020")]),t._v(" "),n("p",[t._v("0 hits")])])])]),t._v(" "),n("li",[n("div",{staticClass:"media"},[n("img",{staticClass:"img-fluid blur-up lazyload",attrs:{src:l(405),alt:"Generic placeholder image"}}),t._v(" "),n("div",{staticClass:"media-body align-self-center"},[n("h5",[t._v("2 Dec 2020")]),t._v(" "),n("p",[t._v("0 hits")])])])]),t._v(" "),n("li",[n("div",{staticClass:"media"},[n("img",{staticClass:"img-fluid blur-up lazyload",attrs:{src:l(422),alt:"Generic placeholder image"}}),t._v(" "),n("div",{staticClass:"media-body align-self-center"},[n("h5",[t._v("3 Dec 2020")]),t._v(" "),n("p",[t._v("0 hits")])])])]),t._v(" "),n("li",[n("div",{staticClass:"media"},[n("img",{staticClass:"img-fluid blur-up lazyload",attrs:{src:l(423),alt:"Generic placeholder image"}}),t._v(" "),n("div",{staticClass:"media-body align-self-center"},[n("h5",[t._v("4 Dec 2020")]),t._v(" "),n("p",[t._v("0 hits")])])])]),t._v(" "),n("li",[n("div",{staticClass:"media"},[n("img",{staticClass:"img-fluid blur-up lazyload",attrs:{src:l(405),alt:"Generic placeholder image"}}),t._v(" "),n("div",{staticClass:"media-body align-self-center"},[n("h5",[t._v("5 Dec 2020")]),t._v(" "),n("p",[t._v("0 hits")])])])])])])}],o=l(60),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,null,null);e.default=component.exports},549:function(t,e,l){"use strict";l.r(e);var n=l(60),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-card"},[l("h4",[t._v("Popular Blog")]),t._v(" "),l("ul",{staticClass:"popular-blog"},[l("li",[l("div",{staticClass:"media"},[l("div",{staticClass:"blog-date"},[l("h3",[t._v("03")]),t._v(" "),l("span",[t._v("may")])]),t._v(" "),l("div",{staticClass:"media-body align-self-center"},[l("h5",[t._v("Humour the like")]),t._v(" "),l("p",[t._v("\n            it look like readable English. Many desktop publishing text.\n          ")])])])]),t._v(" "),l("li",[l("div",{staticClass:"media"},[l("div",{staticClass:"blog-date"},[l("h3",[t._v("03")]),t._v(" "),l("span",[t._v("may")])]),t._v(" "),l("div",{staticClass:"media-body align-self-center"},[l("h5",[t._v("Injected like")]),t._v(" "),l("p",[t._v("\n            it look like readable English. Many desktop publishing text.\n          ")])])])]),t._v(" "),l("li",[l("div",{staticClass:"media"},[l("div",{staticClass:"blog-date"},[l("h3",[t._v("03")]),t._v(" "),l("span",[t._v("may")])]),t._v(" "),l("div",{staticClass:"media-body align-self-center"},[l("h5",[t._v("Injected like")]),t._v(" "),l("p",[t._v("\n            it look like readable English. Many desktop publishing text.\n          ")])])])]),t._v(" "),l("li",[l("div",{staticClass:"media"},[l("div",{staticClass:"blog-date"},[l("h3",[t._v("03")]),t._v(" "),l("span",[t._v("may")])]),t._v(" "),l("div",{staticClass:"media-body align-self-center"},[l("h5",[t._v("Injected the")]),t._v(" "),l("p",[t._v("\n            it look like readable English. Many desktop publishing text.\n          ")])])])])])])}],!1,null,null,null);e.default=component.exports},550:function(t,e,l){"use strict";l.r(e);var n=l(60),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-card"},[l("ul",{staticClass:"tags"},[l("li",[l("a",{attrs:{href:"javascript:void(0)"}},[t._v("Design")])]),t._v(" "),l("li",[l("a",{attrs:{href:"javascript:void(0)"}},[t._v("Clean")])]),t._v(" "),l("li",[l("a",{attrs:{href:"javascript:void(0)"}},[t._v("CSS3")])]),t._v(" "),l("li",[l("a",{attrs:{href:"javascript:void(0)"}},[t._v("Portfolio")])]),t._v(" "),l("li",[l("a",{attrs:{href:"javascript:void(0)"}},[t._v("Pixelstrap")])]),t._v(" "),l("li",[l("a",{attrs:{href:"javascript:void(0)"}},[t._v("Perfect")])]),t._v(" "),l("li",[l("a",{attrs:{href:"javascript:void(0)"}},[t._v("NoJquery ")])])])])}],!1,null,null,null);e.default=component.exports},590:function(t,e,l){"use strict";l.r(e);var n=l(546),o=l(547),r=l(548),c=l(549),v=l(550),d={components:{BlogSearch:n.default,BlogFollowUs:o.default,BlogRecentBlog:r.default,BlogPopularBlog:c.default,BlogTags:v.default}},f=l(60),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-xl-3 col-lg-4 col-md-5"},[l("div",{staticClass:"blog-sidebar"},[l("BlogSearch"),t._v(" "),l("BlogFollowUs"),t._v(" "),l("BlogRecentBlog"),t._v(" "),l("BlogPopularBlog"),t._v(" "),l("BlogTags")],1)])}),[],!1,null,null,null);e.default=component.exports},788:function(t,e,l){"use strict";l.r(e);var header=l(389),n=l(183),o={components:{Header:header.default,Breadcrumbs:n.default}},r=l(60),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"inner-page"},[l("Header"),t._v(" "),l("Breadcrumbs",{attrs:{main:"Home",title:"Blog"}})],1)}),[],!1,null,null,null);e.default=component.exports},789:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{blogDetail:[{img:l(399),img1:l(400),date:"25 January 2021",shortDesc:"you how all this mistaken idea of denouncing pleasure.",user:"Admin",comment:"10 Comment",longDesc:"Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."},{img:l(414),img1:l(415),date:"25 January 2021",shortDesc:"you how all this mistaken idea of denouncing pleasure.",user:"Admin",comment:"10 Comment",longDesc:"Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."},{img:l(399),img1:l(400),date:"25 January 2021",shortDesc:"you how all this mistaken idea of denouncing pleasure.",user:"Admin",comment:"10 Comment",longDesc:"Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."}]}}},o=l(60),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-xl-9 col-lg-8 col-md-7"},t._l(t.blogDetail,(function(e,n){return l("div",{key:n,staticClass:"row blog-media"},[l("div",{staticClass:"col-xl-6"},[l("div",{staticClass:"blog-side"},[l("div",{staticClass:"blog-left"},[l("a",{attrs:{href:"javascript:void(0)"}},[l("img",{staticClass:"img-fluid",attrs:{src:e.img,alt:""}})])]),t._v(" "),l("div",{staticClass:"blog-right"},[l("div",[l("h6",[t._v(t._s(e.date))]),t._v(" "),l("nuxt-link",{attrs:{to:"/blogs/blog_details"}},[l("h4",[t._v(t._s(e.shortDesc))])]),t._v(" "),l("ul",{staticClass:"post-social"},[l("li",[l("i",{staticClass:"fa fa-user"}),t._v(t._s(e.user))]),t._v(" "),l("li",[l("i",{staticClass:"fa fa-comments"}),t._v(" "+t._s(e.comment))])]),t._v(" "),l("p",[t._v(t._s(e.longDesc))])],1)])])]),t._v(" "),l("div",{staticClass:"col-xl-6"},[l("div",{staticClass:"blog-side"},[l("div",{staticClass:"blog-left"},[l("a",{attrs:{href:"javascript:void(0)"}},[l("img",{staticClass:"img-fluid",attrs:{src:e.img1,alt:""}})])]),t._v(" "),l("div",{staticClass:"blog-right"},[l("div",[l("h6",[t._v(t._s(e.date))]),t._v(" "),l("nuxt-link",{attrs:{to:"/blogs/blog_details"}},[l("a",{attrs:{href:"javascript:void(0)"}},[l("h4",[t._v(t._s(e.shortDesc))])])]),t._v(" "),l("ul",{staticClass:"post-social"},[l("li",[l("i",{staticClass:"fa fa-user"}),t._v(t._s(e.user))]),t._v(" "),l("li",[l("i",{staticClass:"fa fa-comments"}),t._v(" "+t._s(e.comment))])]),t._v(" "),l("p",[t._v(t._s(e.longDesc))])],1)])])])])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);