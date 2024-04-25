(window.webpackJsonp=window.webpackJsonp||[]).push([[70,56],{538:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this._self._c;return e("div",[e("img",{staticClass:"w-full max-w-[300px] d-block m-auto",attrs:{src:n(539)}})])}],o={},d=n(20),component=Object(d.a)(o,(function(){this._self._c;return this._m(0)}),r,!1,null,null,null);t.default=component.exports},539:function(e,t,n){e.exports=n.p+"img/no-data.b4c1a36.svg"},710:function(e,t,n){"use strict";n.r(t);n(22),n(21),n(35),n(50),n(51),n(29),n(14),n(28);var r=n(18),o=n(6),d=(n(47),n(538)),l=n(3);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var f={components:{NoData:d.default},layout:"dashboard",data:function(){var e=this;return{addAdminRules:{name:[{required:!0,message:"this field is required"}],phone:[{required:!0,message:"this field is required"}],password:[{required:!0,message:"this field is required"},{validator:function(t,n,r){""===n?r(new Error("Please input the password")):(""!==e.addAdmin.passwordConfirm&&e.$refs.addAdminRef.validateField("passwordConfirm"),r())},trigger:"blur"}],passwordConfirm:[{required:!0,message:"this field is required"},{validator:function(t,n,r){""===n?r(new Error("Please input the password again")):n!==e.addAdmin.password?r(new Error("Two inputs don't match!")):r()},trigger:"blur"}]},admins:[],loading:!1,deletePopup:!1,currItem:null,addAdminPopup:!1,addAdmin:{}}},methods:{submitAddAdmin:function(){var e=this;this.$refs.addAdminRef.validate((function(t){t&&e.addAdminRequest()}))},addAdminRequest:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=null,t.prev=1,n=l.Loading.service({fullscreen:!0,background:"#ffffffe6"}),t.next=5,e.$axios.post("/signup",e.addAdmin);case 5:e.addAdminPopup=!1,l.Notification.success({title:"Success",message:"The admin added successfully"}),e.getAdmins(),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0),l.Notification.error({title:"Error",message:"There is something wrong"});case 14:return t.prev=14,e.$nextTick((function(){n.close()})),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,10,14,17]])})))()},openAddPopup:function(){this.addAdminPopup=!0},openDelete:function(e){this.deletePopup=!0,this.currItem=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)},deleteAdmin:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.deletePopup=!1,n=null,t.prev=2,n=l.Loading.service({fullscreen:!0,background:"#ffffffe6"}),t.next=6,e.$axios.delete("/admins/".concat(e.currItem._id));case 6:l.Notification.success({title:"Success",message:"The admin deleted successfully"}),e.getAdmins(),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0),l.Notification.error({title:"Error",message:"There is something wrong"});case 14:return t.prev=14,e.$nextTick((function(){n.close()})),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[2,10,14,17]])})))()},getAdmins:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=null,t.prev=1,n=l.Loading.service({fullscreen:!0,background:"#ffffffe6"}),t.next=5,e.$axios.get("/admins");case 5:r=t.sent,e.admins=r.data;case 7:return t.prev=7,e.$nextTick((function(){n.close()})),t.finish(7);case 10:case"end":return t.stop()}}),t,null,[[1,,7,10]])})))()}},mounted:function(){this.getAdmins()}},m=f,v=n(20),component=Object(v.a)(m,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"flex items-center justify-between mb-5 flex-wrap gap-[10px]"},[t("h5",{staticClass:"text-2xl font-semibold mb-0"},[e._v("Admins")]),e._v(" "),t("div",{staticClass:"flex gap-3 items-center"},[t("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl",on:{click:e.openAddPopup}},[e._v("Add Admin")])])]),e._v(" "),e.admins.length>0?t("div",[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.admins}},[t("el-table-column",{attrs:{prop:"name",label:"Name",width:"280"}}),e._v(" "),t("el-table-column",{attrs:{prop:"phone",label:"Phone",width:"180"}}),e._v(" "),t("el-table-column",{attrs:{prop:"type",label:"Type",width:"180"}}),e._v(" "),t("el-table-column",{attrs:{label:"Actions"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("button",{staticClass:"p-2 bg-[#e74c3c] text-[#fff] rounded-md",on:{click:function(t){return e.openDelete(n.row)}}},[t("i",{staticClass:"el-icon-delete"})])]}}],null,!1,938267125)})],1)],1):t("NoData"),e._v(" "),t("el-dialog",{attrs:{title:"Delete Service",visible:e.deletePopup,width:"30%"},on:{"update:visible":function(t){e.deletePopup=t}}},[t("h5",{staticClass:"text-md"},[t("i",{staticClass:"text-xl text-[red] el-icon-delete"}),e._v(" Are you sure you want to delete this service ?")]),e._v(" "),t("span",{staticClass:"dialog-footer flex gap-[5px]",attrs:{slot:"footer"},slot:"footer"},[t("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md",on:{click:function(t){e.deletePopup=!1}}},[e._v("Cancel")]),e._v(" "),t("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md",on:{click:function(t){return e.deleteAdmin()}}},[e._v("Delete")])])]),e._v(" "),t("el-dialog",{attrs:{title:"Add Admin",visible:e.addAdminPopup,width:"50%"},on:{"update:visible":function(t){e.addAdminPopup=t}}},[t("el-form",{ref:"addAdminRef",attrs:{model:e.addAdmin,rules:e.addAdminRules}},[t("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[10px]"},[t("div",[t("el-form-item",{attrs:{prop:"name"}},[t("h6",[e._v("Name")]),e._v(" "),t("el-input",{attrs:{name:"name"},model:{value:e.addAdmin.name,callback:function(t){e.$set(e.addAdmin,"name",t)},expression:"addAdmin.name"}})],1)],1),e._v(" "),t("div",[t("el-form-item",{attrs:{prop:"phone"}},[t("h6",[e._v("Phone")]),e._v(" "),t("el-input",{attrs:{name:"phone"},model:{value:e.addAdmin.phone,callback:function(t){e.$set(e.addAdmin,"phone",t)},expression:"addAdmin.phone"}})],1)],1),e._v(" "),t("div",[t("el-form-item",{attrs:{prop:"password"}},[t("h6",[e._v("Password")]),e._v(" "),t("el-input",{attrs:{type:"password"},model:{value:e.addAdmin.password,callback:function(t){e.$set(e.addAdmin,"password",t)},expression:"addAdmin.password"}})],1)],1),e._v(" "),t("div",[t("el-form-item",{attrs:{prop:"passwordConfirm"}},[t("h6",[e._v("Confirm Password")]),e._v(" "),t("el-input",{attrs:{type:"password"},model:{value:e.addAdmin.passwordConfirm,callback:function(t){e.$set(e.addAdmin,"passwordConfirm",t)},expression:"addAdmin.passwordConfirm"}})],1)],1)])]),e._v(" "),t("span",{staticClass:"dialog-footer flex gap-[5px]",attrs:{slot:"footer"},slot:"footer"},[t("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md",on:{click:function(t){e.addAdminPopup=!1}}},[e._v("Cancel")]),e._v(" "),t("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md",on:{click:function(t){return e.submitAddAdmin()}}},[e._v("Delete")])])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);