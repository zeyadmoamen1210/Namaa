(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{732:function(e,t,r){"use strict";r.r(t);var o=r(5),n=(r(47),r(3)),l={mounted:function(){localStorage.getItem("user")&&this.$router.push("/dashboard")},methods:{submitLogin:function(){var e=this;this.$refs.loginFormRef.validate(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){var o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=13;break}return o=null,t.prev=2,o=n.Loading.service({fullscreen:!0,background:"#ffffffe6"}),t.next=6,e.$axios.post("/login",e.loginForm);case 6:l=t.sent,e.user=l.data,localStorage.setItem("user",JSON.stringify(e.user)),e.$router.push("/dashboard");case 10:return t.prev=10,e.$nextTick((function(){o.close()})),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[2,,10,13]])})));return function(e){return t.apply(this,arguments)}}())}},data:function(){return{loginForm:{phone:"",password:""}}}},c=l,d=r(19),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container mx-auto p-10 py-24"},[t("div",{staticClass:"max-w-[500px] mx-auto"},[t("h3",{staticClass:"uppercase pb-3 mb-3 border-b border-[#dcdcdc] text-primary text-center font-semibold"},[e._v(e._s(e.$t("Login.LOGIN TO THE DASHBOARD"))+" ")]),e._v(" "),t("el-form",{ref:"loginFormRef",attrs:{model:e.loginForm}},[t("el-form-item",{attrs:{prop:"phone",rules:[{required:!0,message:e.$t("Login.This field is required")}]}},[t("label",{staticClass:"text-primary",attrs:{for:"phone"}},[e._v(e._s(e.$t("Login.Phone")))]),e._v(" "),t("el-input",{attrs:{id:"email"},model:{value:e.loginForm.phone,callback:function(t){e.$set(e.loginForm,"phone",t)},expression:"loginForm.phone"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password",rules:[{required:!0,message:e.$t("Login.This field is required")}]}},[t("label",{staticClass:"text-primary",attrs:{for:"email"}},[e._v(e._s(e.$t("Login.Password")))]),e._v(" "),t("el-input",{attrs:{id:"password",type:"password"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),t("button",{staticClass:"p-[9px_25px] bg-primary rounded-full text-white w-full mt-3",on:{click:function(t){return t.preventDefault(),e.submitLogin.apply(null,arguments)}}},[e._v(e._s(e.$t("Login.Login")))])],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);