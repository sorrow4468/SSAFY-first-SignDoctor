(window.webpackJsonp=window.webpackJsonp||[]).push([[58,59,60,61,62,63,64,68,71],{320:function(t,e,n){t.exports=n.p+"img/2.a54c787.png"},321:function(t,e,n){t.exports=n.p+"img/landing-logo.d9ecd4c.png"},324:function(t,e,n){"use strict";n.r(e);var l=n(55),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/messenger/messenger"}},[e("div",{staticClass:"logo-block"},[e("img",{staticClass:"img-fluid",attrs:{src:n(321),alt:"logo"}})])])}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,n){"use strict";n.r(e);var l=n(55),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-right-margin"},[n("client-only",[n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Messenger")])],1),t._v(" "),n("b-dropdown",{attrs:{id:"dropdown-4",text:"Bouns page"}},[n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("프로젝트 소개")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/faq"}},[t._v("자주 묻는 질문")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("Elements")])],1)],1),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("로그인")])],1),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/authentication/signup"}},[t._v("회원가입")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},327:function(t,e,n){"use strict";n.r(e);var l=n(324),r=n(325),o={components:{Logo:l.default,Navbar:r.default},data:function(){return{windowTop:0,fixedheader:!1}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){this.windowTop=t.target.documentElement.scrollTop,this.windowTop>=60?this.fixedheader=!0:this.fixedheader=!1}}},c=n(55),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"home"}},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"landing-header",class:t.fixedheader?"fixed":""},[n("div",{staticClass:"main-menu"},[n("div",[n("b-navbar",{staticClass:"navbar navbar-light",attrs:{toggleable:"xl"}},[n("Logo"),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("Navbar")],1)],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},330:function(t,e,n){"use strict";n.r(e);var l={name:"TapTop",data:function(){return{display:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{executeScroll:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},handleScroll:function(){window.scrollY>600?this.display=!0:this.display=!1}}},r=n(55),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tap-top",style:t.display?"display:block":"display:none",on:{click:function(e){return t.executeScroll()}}},[t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"fa fa-angle-double-up"})])}],!1,null,null,null);e.default=component.exports},331:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title footer-mobile-title"},[n("h3",[t._v("About")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"social-group"},[n("li",[n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"https://www.facebook.com/"}},[n("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),n("li",[n("a",{staticClass:"icon-btn btn-twiter button-effect btn-sm",attrs:{href:"https://twitter.com/"}},[n("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),n("li",[n("a",{staticClass:"icon-btn btn-linkedin button-effect btn-sm",attrs:{href:"https://www.linkedin.com/"}},[n("i",{staticClass:"fa fa-linkedin"})])]),t._v(" "),n("li",[n("a",{staticClass:"icon-btn btn-instagram button-effect btn-sm",attrs:{href:"https://www.instagram.com/"}},[n("i",{staticClass:"fa fa-instagram"})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[t._v("Useful Links")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[t._v("Blog Links")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[t._v("Authentication")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-3 col-md-4"},[n("div",{staticClass:"downlaod"},[n("div",[n("div",{staticClass:"footer-title"},[n("h3",[t._v("Download Apps")])]),t._v(" "),n("div",{staticClass:"footer-contant"},[n("div",{staticClass:"footer-btn"},[n("a",{staticClass:"btn active",attrs:{href:"https://www.apple.com/in/itunes/"}},[n("i",{staticClass:"fa fa-apple"}),t._v(" "),n("div",[n("h6",[t._v("Available on the")]),t._v(" "),n("h4",[t._v("App store")])])]),n("a",{staticClass:"btn",attrs:{href:"https://play.google.com/store"}},[n("i",{staticClass:"fa fa-play"}),t._v(" "),n("div",[n("h6",[t._v("Available on the")]),t._v(" "),n("h4",[t._v("Google play")])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-back-block"},[e("img",{staticClass:"img-fluid inner1",attrs:{src:n(320),alt:"footer-back-img"}}),e("img",{staticClass:"img-fluid inner2",attrs:{src:n(320),alt:"footer-back-img"}})])}],r=n(55),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",[l("div",{staticClass:"container footer-main"},[l("div",{staticClass:"row footer-block"},[l("div",{staticClass:"col-lg-3 col-md-6"},[t._m(0),t._v(" "),l("div",{staticClass:"about-payment footer-contant"},[l("div",{staticClass:"logo"},[l("nuxt-link",{attrs:{to:"/messenger/messenger"}},[l("img",{attrs:{src:n(321),alt:"logo"}})])],1),t._v(" "),l("p",[t._v("\n            Contrary to popular belief, Lorem Ipsum is not simply random text.\n            It has roots in a piece Lorem fugit on looked ipsum.\n          ")]),t._v(" "),t._m(1)])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-md-3"},[l("div",{staticClass:"links"},[t._m(2),t._v(" "),l("div",{staticClass:"footer-contant"},[l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Home")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("About us")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/bonus/faq"}},[t._v("FAQ")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("Elements")])],1)])])])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-md-3"},[l("div",{staticClass:"links"},[t._m(3),t._v(" "),l("div",{staticClass:"footer-contant"},[l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/blogs/blog_no-sidebar"}},[t._v("No sidebar")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blogs/blog_left-sidebar"}},[t._v("Left sidebar")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blogs/blog_right-sidebar"}},[t._v("Right sidebar")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blogs/blog_details"}},[t._v("Details page")])],1)])])])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-md-4"},[l("div",{staticClass:"links"},[t._m(4),t._v(" "),l("div",{staticClass:"footer-contant"},[l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("Signin")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/authentication/login-2"}},[t._v("Signin classic")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/authentication/signup"}},[t._v("Signup")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/authentication/signup-2"}},[t._v("Signup classic")])],1)])])])]),t._v(" "),t._m(5)])]),t._v(" "),t._m(6),t._v(" "),l("div",{staticClass:"container copyright-footer"})])}),l,!1,null,null,null);e.default=component.exports},363:function(t,e,n){t.exports=n.p+"img/1.ea306af.png"},364:function(t,e,n){t.exports=n.p+"img/2.9d9df89.png"},365:function(t,e,n){t.exports=n.p+"img/3.17ec037.png"},366:function(t,e,n){t.exports=n.p+"img/1.d70b5d0.png"},367:function(t,e,n){t.exports=n.p+"img/2.115ddb5.png"},382:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{swiperOption:{loop:!0,autoplay:{delay:2e3},breakpoints:{600:{slidesPerView:2,spaceBetween:0},1070:{slidesPerView:3,spaceBetween:0},1600:{slidesPerView:3}}},plans:[{img:n(363),plan:"Free Plan",price:"$0",palne:"Totally Free Plane",feature1:"Common Feature is Available",feature2:"sxgsgerggregrterett",feature3:"Try for free, Forever!"},{img:n(364),plan:"Professional",price:"$59",palne:"Professional Plane",feature1:"All Features is Available",feature2:"High Definition Full-screen",feature3:"24/7 phone and email support"},{img:n(365),plan:"Advanced",price:"$99",palne:"Advance Plane",feature1:"All Features is Available",feature2:"High Definition Full-screen",feature3:"24/7 phone and email support"}]}}},r=n(55),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-py-space",attrs:{id:"price"}},[t._m(0),t._v(" "),n("div",{staticClass:"custom-container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",[n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[n("div",{staticClass:"swiper-wrapper"},t._l(t.plans,(function(e,l){return n("div",{key:l,staticClass:"swiper-slide"},[n("div",{staticClass:"item"},[n("div",{staticClass:"pricing-box"},[n("div",{staticClass:"pricing-icon"},[n("img",{staticClass:"img-fluid",attrs:{src:e.img,alt:"test-img"}})]),t._v(" "),n("div",{staticClass:"pricing-content"},[n("h2",[t._v(t._s(e.plan))]),t._v(" "),n("h4",[t._v(t._s(e.price)+" | "+t._s(e.palne))]),n("nuxt-link",{staticClass:"btn pricing-btn",attrs:{to:"/bonus/price"}},[t._v("get started")])],1),t._v(" "),n("ul",{staticClass:"avb-price"},[n("li",[n("i",{staticClass:"fa fa-check"}),t._v(t._s(e.feature1))]),t._v(" "),n("li",[n("i",{staticClass:"fa fa-check"}),t._v(t._s(e.feature2))]),t._v(" "),n("li",[n("i",{staticClass:"fa fa-check"}),t._v(t._s(e.feature3))])])])])])})),0)])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"landing-title"},[n("div",[n("h1",[t._v("pricing plan")])]),t._v(" "),n("div",{staticClass:"sub-title"},[n("div",[n("h4",[t._v("Choose Your Pricing Plan")]),t._v(" "),n("h2",[t._v("Affordable for everyone!")])])])])])])])}],!1,null,null,null);e.default=component.exports},392:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"landing-title"},[n("div",[n("h1",[t._v("subscribe")])]),t._v(" "),n("div",{staticClass:"sub-title"},[n("div",[n("h4",[t._v("Subscribe Newsletter")]),t._v(" "),n("h2",[t._v("Subscribe to receive updates")])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"subscribe-content"},[e("img",{staticClass:"img-fluid",attrs:{src:n(366),alt:"subscribe-landing"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"form-inline"},[n("input",{staticClass:"form-control",attrs:{placeholder:"your name"}}),t._v(" "),n("input",{staticClass:"form-control",attrs:{placeholder:"email"}}),t._v(" "),n("button",{staticClass:"btn"},[t._v("Submit")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"subscribe-back-content"},[e("img",{staticClass:"img-fluid subscribe-img1",attrs:{src:n(367),alt:"subscribe-back-img"}})])}],r=n(55),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-py-space subscribe-main light-bg",attrs:{id:"subscribe"}},[t._m(0),t._v(" "),n("div",{staticClass:"custom-container"},[n("div",{staticClass:"row subscribe-block"},[t._m(1),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"subscribe-content"},[n("div",[n("h1",[t._v("Subscribe our Newsletter get new update.")]),t._v(" "),t._m(2),t._v(" "),n("h4",[t._v("Check Features. "),n("span",[n("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Learn More ")])],1)])])])])])]),t._v(" "),t._m(3)])}),l,!1,null,null,null);e.default=component.exports},464:function(t,e,n){"use strict";n.r(e);var l=n(382),r=n(392),o={components:{PricingPlan:l.default,SubscribeUpdate:r.default}},c=n(55),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("PricingPlan")],1),t._v(" "),n("div",[n("SubscribeUpdate")],1)])}),[],!1,null,null,null);e.default=component.exports},541:function(t,e,n){"use strict";n.r(e);var header=n(327),l=n(168),r=n(464),footer=n(331),o=n(330),c={components:{Header:header.default,Breadcrumbs:l.default,BonusPrice:r.default,Footer:footer.default,TapTop:o.default}},v=n(55),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("div",[n("div",{staticClass:"inner-page"},[n("Header"),t._v(" "),n("Breadcrumbs",{attrs:{main:"Home",title:"Price"}})],1),t._v(" "),n("BonusPrice"),t._v(" "),n("Footer"),t._v(" "),n("TapTop")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);