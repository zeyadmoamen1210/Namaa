(window.webpackJsonp=window.webpackJsonp||[]).push([[97,16],{584:function(e,t,r){var content=r(634);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(49).default)("1af70494",content,!0,{sourceMap:!1})},633:function(e,t,r){"use strict";r(584)},634:function(e,t,r){var c=r(48)((function(i){return i[1]}));c.push([e.i,".el-loading-mask .el-loading-spinner svg{margin:auto!important}",""]),c.locals={},e.exports=c},687:function(e,t,r){"use strict";r.r(t);var c=r(5),n=(r(47),r(217),r(14),r(28),r(3)),l={data:function(){return{fileList:[],addService:{sub_services:[{sub_services_title_AR:"",sub_services_title_EN:"",sub_services_description_AR:"",sub_services_description_EN:""}]}}},methods:{addTheService:function(){var e=this;this.$refs.addServiceRef.validate(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(r){var c,l,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=27;break}if(0!==e.fileList.length){t.next=4;break}return n.Notification.error({title:"Error",message:"You must add icon for that service"}),t.abrupt("return");case 4:return(l=new FormData).append("title_AR",e.addService.title_AR),l.append("title_EN",e.addService.title_EN),l.append("description_AR",e.addService.description_AR),l.append("description_EN",e.addService.description_EN),l.append("icon",null===(c=e.fileList)||void 0===c||null===(c=c[0])||void 0===c?void 0:c.raw),e.addService.sub_services.forEach((function(e){l.append("sub_services_title_AR",e.sub_services_title_AR),l.append("sub_services_title_EN",e.sub_services_title_EN),l.append("sub_services_description_AR",e.sub_services_description_AR),l.append("sub_services_description_EN",e.sub_services_description_EN)})),o=null,t.prev=12,o=n.Loading.service({fullscreen:!0,background:"#ffffffe6"}),t.next=16,e.$axios.post("/services",l);case 16:n.Notification.success({title:"Success",message:"The services added successfully"}),e.$router.push("/dashboard/services"),window.scrollTo({top:0,behavior:"smooth"}),t.next=24;break;case 21:t.prev=21,t.t0=t.catch(12),n.Notification.error({title:"Error",message:"There is something wrong"});case 24:return t.prev=24,e.$nextTick((function(){o.close()})),t.finish(24);case 27:case"end":return t.stop()}}),t,null,[[12,21,24,27]])})));return function(e){return t.apply(this,arguments)}}())},addNewSubService:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.addService.sub_services.push({sub_services_title_AR:"",sub_services_title_EN:"",sub_services_description_AR:"",sub_services_description_EN:""}),t.next=3,e.$nextTick();case 3:window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"});case 4:case"end":return t.stop()}}),t)})))()},deleteSubService:function(e){this.addService.sub_services.splice(e,1)},handleRemove:function(e,t){this.fileList=t,console.log("Remove: ",e,this.fileList)},onChange:function(e,t){this.fileList=t,console.log("Change: ",e,this.fileList)}}},o=l,d=(r(633),r(19)),component=Object(d.a)(o,(function(){var e=this,t=e._self._c;return t("div",[e._m(0),e._v(" "),t("el-form",{ref:"addServiceRef",attrs:{model:e.addService}},[t("div",{staticClass:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]"},[t("el-form-item",{attrs:{prop:"title_EN",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"title_EN"}},[e._v("Title In english")]),e._v(" "),t("el-input",{attrs:{id:"title_EN"},model:{value:e.addService.title_EN,callback:function(t){e.$set(e.addService,"title_EN",t)},expression:"addService.title_EN"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"title_AR",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"title_AR"}},[e._v("Title In arabic")]),e._v(" "),t("el-input",{attrs:{id:"title_AR"},model:{value:e.addService.title_AR,callback:function(t){e.$set(e.addService,"title_AR",t)},expression:"addService.title_AR"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"description_EN",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"description_EN"}},[e._v("description in english")]),e._v(" "),t("el-input",{attrs:{type:"textarea",id:"description_EN"},model:{value:e.addService.description_EN,callback:function(t){e.$set(e.addService,"description_EN",t)},expression:"addService.description_EN"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"description_AR",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"description_AR"}},[e._v("description in arabic")]),e._v(" "),t("el-input",{attrs:{type:"textarea",id:"description_AR"},model:{value:e.addService.description_AR,callback:function(t){e.$set(e.addService,"description_AR",t)},expression:"addService.description_AR"}})],1)],1),e._v(" "),t("div",{staticClass:"mb-4"},[t("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"","auto-upload":!1,"on-remove":e.handleRemove,"on-change":e.onChange,"file-list":e.fileList,accept:"image/*"}},[t("i",{staticClass:"el-icon-upload"}),e._v(" "),t("div",{staticClass:"el-upload__text"},[e._v("Drop file here or "),t("em",[e._v("click to upload")])]),e._v(" "),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("jpg/png files with a size less than 500kb")])])],1),e._v(" "),t("div",{staticClass:"flex items-center gap-[10px] justify-between"},[t("h6",{staticClass:"font-semibold text-xl"},[e._v("Sub services")]),e._v(" "),t("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl",on:{click:function(t){return t.preventDefault(),e.addNewSubService()}}},[t("i",{staticClass:"el-icon-plus"}),e._v(" Add New ")])]),e._v(" "),e._l(e.addService.sub_services,(function(r,c){return t("div",{key:c,staticClass:"border-b border-grey-light"},[t("div",{staticClass:"flex gap-[10px] items-center justify-between pt-3"},[t("h6",{staticClass:"font-semibold"},[e._v("Service#"+e._s(c+1))]),e._v(" "),0!=c?t("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-2 rounded-xl",on:{click:function(t){return t.preventDefault(),e.deleteSubService(c)}}},[t("i",{staticClass:"el-icon-close"})]):e._e()]),e._v(" "),t("div",{staticClass:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]"},[t("el-form-item",{attrs:{prop:"sub_services[".concat(c,"].sub_services_title_EN"),rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"sub_services[".concat(c,"].sub_services_title_EN")}},[e._v("Title In english")]),e._v(" "),t("el-input",{attrs:{id:"sub_services[".concat(c,"].sub_services_title_EN")},model:{value:e.addService.sub_services[c].sub_services_title_EN,callback:function(t){e.$set(e.addService.sub_services[c],"sub_services_title_EN",t)},expression:"addService.sub_services[index].sub_services_title_EN"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"sub_services[".concat(c,"].sub_services_title_AR"),rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"sub_services[".concat(c,"].sub_services_title_AR")}},[e._v("Title In arabic")]),e._v(" "),t("el-input",{attrs:{id:"sub_services[".concat(c,"].sub_services_title_AR")},model:{value:e.addService.sub_services[c].sub_services_title_AR,callback:function(t){e.$set(e.addService.sub_services[c],"sub_services_title_AR",t)},expression:"addService.sub_services[index].sub_services_title_AR"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"sub_services[".concat(c,"].sub_services_description_EN"),rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"sub_services[".concat(c,"].sub_services_description_EN")}},[e._v("Description In english")]),e._v(" "),t("el-input",{attrs:{id:"sub_services[".concat(c,"].sub_services_description_EN")},model:{value:e.addService.sub_services[c].sub_services_description_EN,callback:function(t){e.$set(e.addService.sub_services[c],"sub_services_description_EN",t)},expression:"addService.sub_services[index].sub_services_description_EN"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"sub_services[".concat(c,"].sub_services_description_AR"),rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"sub_services[".concat(c,"].sub_services_description_AR")}},[e._v("Description In arabic")]),e._v(" "),t("el-input",{attrs:{id:"sub_services[".concat(c,"].sub_services_description_AR")},model:{value:e.addService.sub_services[c].sub_services_description_AR,callback:function(t){e.$set(e.addService.sub_services[c],"sub_services_description_AR",t)},expression:"addService.sub_services[index].sub_services_description_AR"}})],1)],1)])}))],2),e._v(" "),t("div",{staticClass:"flex flex-row-reverse mt-3"},[t("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl",on:{click:function(t){return e.addTheService()}}},[e._v("Add Service")])])],1)}),[function(){var e=this._self._c;return e("h3",{staticClass:"font-bold text-xl my-3"},[e("i",{staticClass:"el-icon-plus"}),this._v(" Add New Service")])}],!1,null,null,null);t.default=component.exports},752:function(e,t,r){"use strict";r.r(t);var c={components:{AddService:r(687).default},layout:"dashboard"},n=r(19),component=Object(n.a)(c,(function(){var e=this._self._c;return e("div",[e("AddService")],1)}),[],!1,null,null,null);t.default=component.exports}}]);