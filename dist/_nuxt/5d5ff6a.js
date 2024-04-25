(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{578:function(e,t,o){var content=o(620);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(49).default)("5f967fc6",content,!0,{sourceMap:!1})},619:function(e,t,o){"use strict";o(578)},620:function(e,t,o){var n=o(48)((function(i){return i[1]}));n.push([e.i,".el-loading-mask .el-loading-spinner svg{margin:auto!important}",""]),n.locals={},e.exports=n},669:function(e,t,o){"use strict";o.r(t);var n=o(6),r=(o(47),o(3)),d={data:function(){return{fileList:[],addRates:{}}},methods:{addTheRatings:function(){var e=this;this.$refs.addRatesRef.validate(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(o){var n,d,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o){t.next=30;break}if(0!==e.fileList.length){t.next=4;break}return r.Notification.error({title:"Error",message:"You must add company logo for that rating"}),t.abrupt("return");case 4:return(d=new FormData).append("company_name_AR",e.addRates.company_name_AR),d.append("company_name_EN",e.addRates.company_name_EN),d.append("feedback_AR",e.addRates.feedback_AR),d.append("feedback_EN",e.addRates.feedback_EN),d.append("customer_name_AR",e.addRates.customer_name_AR),d.append("customer_name_EN",e.addRates.customer_name_EN),d.append("position_AR",e.addRates.position_AR),d.append("position_EN",e.addRates.position_EN),d.append("logo",null===(n=e.fileList)||void 0===n||null===(n=n[0])||void 0===n?void 0:n.raw),l=null,t.prev=15,l=r.Loading.service({fullscreen:!0,background:"#ffffffe6"}),t.next=19,e.$axios.post("/rates",d);case 19:r.Notification.success({title:"Success",message:"The rate added successfully"}),e.$router.push("/dashboard/ratings"),window.scrollTo({top:0,behavior:"smooth"}),t.next=27;break;case 24:t.prev=24,t.t0=t.catch(15),r.Notification.error({title:"Error",message:"There is something wrong"});case 27:return t.prev=27,e.$nextTick((function(){l.close()})),t.finish(27);case 30:case"end":return t.stop()}}),t,null,[[15,24,27,30]])})));return function(e){return t.apply(this,arguments)}}())},handleRemove:function(e,t){this.fileList=t,console.log("Remove: ",e,this.fileList)},onChange:function(e,t){this.fileList=t,console.log("Change: ",e,this.fileList)}}},l=d,c=(o(619),o(20)),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",[e._m(0),e._v(" "),t("el-form",{ref:"addRatesRef",attrs:{model:e.addRates}},[t("div",{staticClass:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]"},[t("div",[t("el-form-item",{attrs:{prop:"company_name_AR",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"company_name_AR"}},[e._v("Company Name In arabic")]),e._v(" "),t("el-input",{attrs:{id:"company_name_AR"},model:{value:e.addRates.company_name_AR,callback:function(t){e.$set(e.addRates,"company_name_AR",t)},expression:"addRates.company_name_AR"}})],1)],1),e._v(" "),t("div",[t("el-form-item",{attrs:{prop:"company_name_EN",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"company_name_EN"}},[e._v("Company Name In english")]),e._v(" "),t("el-input",{attrs:{id:"company_name_EN"},model:{value:e.addRates.company_name_EN,callback:function(t){e.$set(e.addRates,"company_name_EN",t)},expression:"addRates.company_name_EN"}})],1)],1),e._v(" "),t("div",[t("el-form-item",{attrs:{prop:"feedback_AR",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"feedback_AR"}},[e._v("Feedback In arabic")]),e._v(" "),t("el-input",{attrs:{id:"feedback_AR"},model:{value:e.addRates.feedback_AR,callback:function(t){e.$set(e.addRates,"feedback_AR",t)},expression:"addRates.feedback_AR"}})],1)],1),e._v(" "),t("div",[t("el-form-item",{attrs:{prop:"feedback_EN",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"feedback_EN"}},[e._v("Feedback In english")]),e._v(" "),t("el-input",{attrs:{id:"feedback_EN"},model:{value:e.addRates.feedback_EN,callback:function(t){e.$set(e.addRates,"feedback_EN",t)},expression:"addRates.feedback_EN"}})],1)],1),e._v(" "),t("div",[t("el-form-item",{attrs:{prop:"customer_name_AR",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"customer_name_AR"}},[e._v("Customer name In arabic")]),e._v(" "),t("el-input",{attrs:{id:"customer_name_AR"},model:{value:e.addRates.customer_name_AR,callback:function(t){e.$set(e.addRates,"customer_name_AR",t)},expression:"addRates.customer_name_AR"}})],1)],1),e._v(" "),t("div",[t("el-form-item",{attrs:{prop:"customer_name_EN",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"customer_name_EN"}},[e._v("Customer name In english")]),e._v(" "),t("el-input",{attrs:{id:"customer_name_EN"},model:{value:e.addRates.customer_name_EN,callback:function(t){e.$set(e.addRates,"customer_name_EN",t)},expression:"addRates.customer_name_EN"}})],1)],1),e._v(" "),t("div",[t("el-form-item",{attrs:{prop:"position_AR",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"position_AR"}},[e._v("Position In arabic")]),e._v(" "),t("el-input",{attrs:{id:"position_AR"},model:{value:e.addRates.position_AR,callback:function(t){e.$set(e.addRates,"position_AR",t)},expression:"addRates.position_AR"}})],1)],1),e._v(" "),t("div",[t("el-form-item",{attrs:{prop:"position_EN",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"position_EN"}},[e._v("Position In english")]),e._v(" "),t("el-input",{attrs:{id:"position_EN"},model:{value:e.addRates.position_EN,callback:function(t){e.$set(e.addRates,"position_EN",t)},expression:"addRates.position_EN"}})],1)],1)]),e._v(" "),t("div",{staticClass:"mb-4"},[t("label",{staticClass:"mb-3 block text-sm"},[e._v("Company Logo")]),e._v(" "),t("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"","auto-upload":!1,"on-remove":e.handleRemove,"on-change":e.onChange,"file-list":e.fileList,accept:"image/*"}},[t("i",{staticClass:"el-icon-upload"}),e._v(" "),t("div",{staticClass:"el-upload__text"},[e._v("Drop file here or "),t("em",[e._v("click to upload")])]),e._v(" "),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("jpg/png files with a size less than 500kb")])])],1)]),e._v(" "),t("div",{staticClass:"flex flex-row-reverse mt-3"},[t("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl",on:{click:function(t){return e.addTheRatings()}}},[e._v("Add Rating")])])],1)}),[function(){var e=this._self._c;return e("h3",{staticClass:"font-bold text-xl my-3"},[e("i",{staticClass:"el-icon-plus"}),this._v(" Add New Ratings")])}],!1,null,null,null);t.default=component.exports}}]);