(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{437:function(t,e,c){"use strict";c.r(e);var n=c(82),r={data:function(){return{activesidebar:n.config.sidebar_setting}},methods:{activeSidebar:function(t){this.activesidebar=t,this.$store.state.common.toggleleftside="on"==t?"on":"",this.$store.dispatch("layout/setsidebar_setting",t)}}},o=c(55),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"sidebar-setting"},[c("h5",[t._v("Sidebar")]),t._v(" "),c("ul",[c("li",{staticClass:"three-column",class:"on"==t.activesidebar?"active":"",on:{click:function(e){return t.activeSidebar("on")}}},[c("div",{staticClass:"sm-sidebar"}),t._v(" "),c("div",{staticClass:"sidebar"}),t._v(" "),c("div",{staticClass:"sidebar-content"})]),t._v(" "),c("li",{staticClass:"two-column",class:""==t.activesidebar?"active":"",on:{click:function(e){return t.activeSidebar("")}}},[c("div",{staticClass:"sidebar"}),t._v(" "),c("div",{staticClass:"sidebar-content"})])])])}),[],!1,null,null,null);e.default=component.exports}}]);