(window.webpackJsonp=window.webpackJsonp||[]).push([[103,119],{404:function(t,e,n){"use strict";n.r(e);var r={methods:{show:function(){this.$refs.exampleModalCenter.show()},hide:function(){this.$refs.exampleModalCenter.hide()}}},c=n(55),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:"exampleModalCenter",staticClass:"modal fade",attrs:{"content-class":"add-popup add-contact-modal",id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-hidden":"true","hide-footer":"","hide-header":"","hide-header-close":"",centered:""}},[n("div",{staticClass:"modal-header"},[n("h2",{staticClass:"modal-title"},[t._v("Add Contact")]),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.hide()}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),n("div",{staticClass:"modal-body"},[n("form",{staticClass:"default-form"},[n("div",{staticClass:"form-group"},[n("h5",[t._v("Email or Username")]),t._v(" "),n("input",{staticClass:"form-control",attrs:{id:"exampleInputEmail1",type:"text",placeholder:"Josephin water"}})]),t._v(" "),n("div",{staticClass:"form-group mb-0"},[n("h5",[t._v("Contact number")]),t._v(" "),n("input",{staticClass:"form-control",attrs:{id:"examplemsg",type:"number",placeholder:"12345678912"}})])])]),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-danger button-effect btn-sm",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.hide()}}},[t._v("\n      Cancel\n    ")]),t._v(" "),n("button",{staticClass:"btn btn-primary button-effect btn-sm",attrs:{type:"button"},on:{click:function(e){return t.hide()}}},[t._v("\n      Add contact\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},416:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(2),n(1),n(6),n(3),n(7);var r=n(0),c=(n(83),n(104),n(167),n(56));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={components:{NewContact:n(404).default},data:function(){return{activeIndex:[],openSearch:!1,styleObject:{"background-size":"cover","background-position":"center",display:"block"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({activesidebar:function(t){return t.common.activesidebar},favourite:function(t){return t.sidebar.favourite}})),methods:{getImgUrl:function(path){return n(319)("./"+path)},activemenu:function(t){this.$store.state.common.activesidebar=t},setFavourite:function(t){this.activeIndex.includes(t)?this.activeIndex.splice(this.activeIndex.indexOf(t),1):this.activeIndex.push(t)},active:function(t){return this.activeIndex.indexOf(t)>=0},showNewContactModal:function(){this.$refs.newContactComponent.show()},openSeachbar:function(){this.openSearch=!this.openSearch}}},d=l,h=n(55),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fevorite-tab dynemic-sidebar",class:2==t.activesidebar?"active":"",attrs:{id:"favourite"}},[n("div",{staticClass:"theme-title"},[n("div",{staticClass:"media"},[t._m(0),t._v(" "),n("div",{staticClass:"media-body text-right"},[n("a",{staticClass:"icon-btn btn-outline-light btn-sm m-r-15 search",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.openSeachbar()}}},[n("feather",{attrs:{type:"search",size:"15",height:"15"}})],1),t._v(" "),n("form",{staticClass:"form-inline search-form",class:t.openSearch?"open":""},[n("div",{staticClass:"form-group"},[n("input",{staticClass:"form-control-plaintext",attrs:{type:"search",placeholder:"Search.."}}),t._v(" "),n("div",{staticClass:"icon-close close-search",on:{click:function(e){t.openSearch=!1}}})])]),t._v(" "),n("a",{staticClass:"icon-btn btn-outline-light btn-sm m-r-15",attrs:{href:"javascript:void(0)","data-toggle":"modal","data-target":"#addcallmodal"},on:{click:function(e){return t.showNewContactModal()}}},[n("feather",{attrs:{type:"plus",size:"15",height:"15"}})],1),n("a",{staticClass:"icon-btn btn-outline-light btn-sm close-panel",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.activemenu(0)}}},[n("feather",{attrs:{type:"x",size:"15",height:"15"}})],1)])])]),t._v(" "),n("ul",{staticClass:"chat-main"},t._l(t.favourite,(function(e,r){return n("li",{key:e.id},[n("div",{staticClass:"chat-box"},[n("div",{staticClass:"media"},[n("div",{staticClass:"profile",class:e.profile,style:[{"background-image":"url("+t.getImgUrl(e.img)+")"},t.styleObject]}),t._v(" "),n("div",{staticClass:"details"},[n("h5",[t._v(t._s(e.name))]),t._v(" "),n("h6",[t._v(t._s(e.place))])]),t._v(" "),n("div",{staticClass:"media-body"},[n("a",{staticClass:"icon-btn btn-sm pull-right favourite",class:t.active(r)?"btn-primary":"btn-outline-primary",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.setFavourite(r)}}},[n("feather",{attrs:{type:"star",size:"15",height:"15"}})],1)])])])])})),0),t._v(" "),n("div",{staticClass:"add-popup add-contact-modal"},[n("NewContact",{ref:"newContactComponent"})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Favourite")]),t._v(" "),n("h4",[t._v("Last Recent")])])}],!1,null,null,null);e.default=component.exports}}]);