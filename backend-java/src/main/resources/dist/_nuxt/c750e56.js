(window.webpackJsonp=window.webpackJsonp||[]).push([[165,60,61,63,64,65,66,67,71,74],{1080:function(t,e,n){"use strict";n.r(e);var l={components:{BonusPrice:n(785).default}},r=n(57),component=Object(r.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("BonusPrice")}),[],!1,null,null,null);e.default=component.exports},340:function(t,e,n){t.exports=n.p+"img/2.a54c787.png"},342:function(t,e,n){t.exports=n.p+"img/landing-logo.a81471c.png"},353:function(t,e,n){"use strict";n.r(e);var l=n(57),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/messenger/messenger"}},[e("div",{staticClass:"logo-block"},[e("img",{staticClass:"img-fluid",attrs:{src:n(342),alt:"logo"}})])])}),[],!1,null,null,null);e.default=component.exports},354:function(t,e,n){"use strict";n.r(e);var l=n(57),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-right-margin"},[n("client-only",[n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Messenger")])],1),t._v(" "),n("b-dropdown",{attrs:{id:"dropdown-4",text:"Bouns page"}},[n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("프로젝트 소개")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/chat"}},[t._v("채팅 테스트")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/faq"}},[t._v("자주 묻는 질문")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("Elements")])],1)],1),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("로그인")])],1),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/authentication/signup"}},[t._v("회원가입")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},357:function(t,e,n){"use strict";n.r(e);var l=n(353),r=n(354),c={components:{Logo:l.default,Navbar:r.default},data:function(){return{windowTop:0,fixedheader:!1}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){this.windowTop=t.target.documentElement.scrollTop,this.windowTop>=60?this.fixedheader=!0:this.fixedheader=!1}}},o=n(57),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"home"}},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"landing-header fixed"},[n("div",{staticClass:"main-menu"},[n("div",[n("b-navbar",{staticClass:"navbar navbar-light",attrs:{toggleable:"xl"}},[n("Logo"),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("Navbar")],1)],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},360:function(t,e,n){"use strict";n.r(e);var l={name:"TapTop",data:function(){return{display:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{executeScroll:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},handleScroll:function(){window.scrollY>600?this.display=!0:this.display=!1}}},r=n(57),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tap-top",style:t.display?"display:block":"display:none",on:{click:function(e){return t.executeScroll()}}},[t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"fa fa-angle-double-up"})])}],!1,null,null,null);e.default=component.exports},361:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title footer-mobile-title"},[n("h3",[t._v("About")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-2 col-md-3"},[n("div",{staticClass:"links"},[n("div",{staticClass:"footer-title"},[n("h3",[t._v("AI")])]),t._v(" "),n("div",{staticClass:"footer-contant"},[n("p",{staticClass:"text-black align-items-center"},[t._v("\n              반형동\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa fa-github"})])]),t._v(" "),n("p",{staticClass:"text-black align-items-center"},[t._v("\n              손한기\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa fa-github"})])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-2 col-md-3"},[n("div",{staticClass:"links"},[n("div",{staticClass:"footer-title"},[n("h3",[t._v("Backend")])]),t._v(" "),n("div",{staticClass:"footer-contant"},[n("p",{staticClass:"text-black align-items-center"},[t._v("\n              김영기\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa fa-github"})])]),t._v(" "),n("p",{staticClass:"text-black align-items-center"},[t._v("\n              김창민\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa fa-github"})])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-2 col-md-4"},[n("div",{staticClass:"links"},[n("div",{staticClass:"footer-title"},[n("h3",[t._v("Frontend")])]),t._v(" "),n("div",{staticClass:"footer-contant"},[n("p",{staticClass:"text-black align-items-center"},[t._v("\n              윤찬호\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa fa-github"})])]),t._v(" "),n("p",{staticClass:"text-black align-items-center"},[t._v("\n              이정원\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:sorrow4468@gmail.com"}},[n("i",{staticClass:"fa fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/sorrow4468/"}},[n("i",{staticClass:"fa fa-github"})])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-back-block"},[e("img",{staticClass:"img-fluid inner1",attrs:{src:n(340),alt:"footer-back-img"}}),e("img",{staticClass:"img-fluid inner2",attrs:{src:n(340),alt:"footer-back-img"}})])}],r=n(57),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",[l("div",{staticClass:"container footer-main"},[l("div",{staticClass:"row footer-block"},[l("div",{staticClass:"col-lg-3 col-md-6"},[t._m(0),t._v(" "),l("div",{staticClass:"about-payment footer-contant"},[l("div",{staticClass:"logo"},[l("nuxt-link",{attrs:{to:"/messenger/messenger"}},[l("img",{attrs:{src:n(342),alt:"logo"}})])],1),t._v(" "),l("p",[t._v("\n            SSAFY 6기 부울경 2반 6팀 「SIXMAN」\n          ")])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])]),t._v(" "),t._m(4),t._v(" "),l("div",{staticClass:"container copyright-footer"})])}),l,!1,null,null,null);e.default=component.exports},419:function(t,e,n){t.exports=n.p+"img/1.ea306af.png"},420:function(t,e,n){t.exports=n.p+"img/2.9d9df89.png"},421:function(t,e,n){t.exports=n.p+"img/3.17ec037.png"},422:function(t,e,n){t.exports=n.p+"img/1.d70b5d0.png"},423:function(t,e,n){t.exports=n.p+"img/2.115ddb5.png"},455:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{swiperOption:{loop:!0,autoplay:{delay:2e3},breakpoints:{600:{slidesPerView:2,spaceBetween:0},1070:{slidesPerView:3,spaceBetween:0},1600:{slidesPerView:3}}},plans:[{img:n(419),plan:"Free Plan",price:"$0",palne:"Totally Free Plane",feature1:"Common Feature is Available",feature2:"sxgsgerggregrterett",feature3:"Try for free, Forever!"},{img:n(420),plan:"Professional",price:"$59",palne:"Professional Plane",feature1:"All Features is Available",feature2:"High Definition Full-screen",feature3:"24/7 phone and email support"},{img:n(421),plan:"Advanced",price:"$99",palne:"Advance Plane",feature1:"All Features is Available",feature2:"High Definition Full-screen",feature3:"24/7 phone and email support"}]}}},r=n(57),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-py-space",attrs:{id:"price"}},[t._m(0),t._v(" "),n("div",{staticClass:"custom-container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",[n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[n("div",{staticClass:"swiper-wrapper"},t._l(t.plans,(function(e,l){return n("div",{key:l,staticClass:"swiper-slide"},[n("div",{staticClass:"item"},[n("div",{staticClass:"pricing-box"},[n("div",{staticClass:"pricing-icon"},[n("img",{staticClass:"img-fluid",attrs:{src:e.img,alt:"test-img"}})]),t._v(" "),n("div",{staticClass:"pricing-content"},[n("h2",[t._v(t._s(e.plan))]),t._v(" "),n("h4",[t._v(t._s(e.price)+" | "+t._s(e.palne))]),n("nuxt-link",{staticClass:"btn pricing-btn",attrs:{to:"/bonus/price"}},[t._v("get started")])],1),t._v(" "),n("ul",{staticClass:"avb-price"},[n("li",[n("i",{staticClass:"fa fa-check"}),t._v(t._s(e.feature1))]),t._v(" "),n("li",[n("i",{staticClass:"fa fa-check"}),t._v(t._s(e.feature2))]),t._v(" "),n("li",[n("i",{staticClass:"fa fa-check"}),t._v(t._s(e.feature3))])])])])])})),0)])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"landing-title"},[n("div",[n("h1",[t._v("pricing plan")])]),t._v(" "),n("div",{staticClass:"sub-title"},[n("div",[n("h4",[t._v("Choose Your Pricing Plan")]),t._v(" "),n("h2",[t._v("Affordable for everyone!")])])])])])])])}],!1,null,null,null);e.default=component.exports},475:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"landing-title"},[n("div",[n("h1",[t._v("subscribe")])]),t._v(" "),n("div",{staticClass:"sub-title"},[n("div",[n("h4",[t._v("Subscribe Newsletter")]),t._v(" "),n("h2",[t._v("Subscribe to receive updates")])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"subscribe-content"},[e("img",{staticClass:"img-fluid",attrs:{src:n(422),alt:"subscribe-landing"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"form-inline"},[n("input",{staticClass:"form-control",attrs:{placeholder:"your name"}}),t._v(" "),n("input",{staticClass:"form-control",attrs:{placeholder:"email"}}),t._v(" "),n("button",{staticClass:"btn"},[t._v("Submit")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"subscribe-back-content"},[e("img",{staticClass:"img-fluid subscribe-img1",attrs:{src:n(423),alt:"subscribe-back-img"}})])}],r=n(57),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-py-space subscribe-main light-bg",attrs:{id:"subscribe"}},[t._m(0),t._v(" "),n("div",{staticClass:"custom-container"},[n("div",{staticClass:"row subscribe-block"},[t._m(1),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"subscribe-content"},[n("div",[n("h1",[t._v("Subscribe our Newsletter get new update.")]),t._v(" "),t._m(2),t._v(" "),n("h4",[t._v("Check Features. "),n("span",[n("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Learn More ")])],1)])])])])])]),t._v(" "),t._m(3)])}),l,!1,null,null,null);e.default=component.exports},628:function(t,e,n){"use strict";n.r(e);var l=n(455),r=n(475),c={components:{PricingPlan:l.default,SubscribeUpdate:r.default}},o=n(57),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("PricingPlan")],1),t._v(" "),n("div",[n("SubscribeUpdate")],1)])}),[],!1,null,null,null);e.default=component.exports},785:function(t,e,n){"use strict";n.r(e);var header=n(357),l=n(177),r=n(628),footer=n(361),c=n(360),o={components:{Header:header.default,Breadcrumbs:l.default,BonusPrice:r.default,Footer:footer.default,TapTop:c.default}},f=n(57),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("div",[n("div",{staticClass:"inner-page"},[n("Header"),t._v(" "),n("Breadcrumbs",{attrs:{main:"Home",title:"Price"}})],1),t._v(" "),n("BonusPrice"),t._v(" "),n("Footer"),t._v(" "),n("TapTop")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);