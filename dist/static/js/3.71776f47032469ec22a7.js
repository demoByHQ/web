webpackJsonp([3],{fEdp:function(e,t){},rffD:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"B",computed:{},data:function(){return{msg:"Welcome to Your B PAGE",msg2:""}},created:function(){console.log("created")},activated:function(){console.log("active")},mounted:function(){this.msg2=this.$route.params.msg,console.log("mounted")},methods:{goBack:function(){this.$router.back(),this.$destroy()}}},s={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"store-test"},[o("h1",[e._v(e._s(e.msg))]),e._v(" "),o("p",[e._v("A页面传过来的参数"+e._s(e.msg2))]),e._v(" "),o("div",{style:{height:"100px",background:"red"},on:{click:e.goBack}},[e._v("点我返回A页面")])])},staticRenderFns:[]};var c=o("VU/8")(n,s,!1,function(e){o("fEdp")},"data-v-e97fed2a",null);t.default=c.exports}});
//# sourceMappingURL=3.71776f47032469ec22a7.js.map