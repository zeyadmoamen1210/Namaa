(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{575:function(t,e,o){var content=o(618);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(49).default)("688a0df5",content,!0,{sourceMap:!1})},617:function(t,e,o){"use strict";o(575)},618:function(t,e,o){var n=o(48)((function(i){return i[1]}));n.push([t.i,".el-loading-mask .el-loading-spinner svg{margin:auto!important}",""]),n.locals={},t.exports=n},675:function(t,e,o){"use strict";o.r(e);o(216);var n=o(6),r=(o(47),o(14),o(28),o(3)),l={data:function(){return{fileList:[],jobTypes:[{keyEN:"Full time",keyAR:"وقت كامل",value:"Full time"},{keyEN:"Part time",keyAR:"دوام جزئى",value:"Part time"}],addJob:{descriptions:[{description_AR:"",description_EN:""}],jobLocationTags:[{jobLocationTags_AR:"",jobLocationTags_EN:""}],jobDepartmentTags:[{jobDepartmentTags_AR:"",jobDepartmentTags_EN:""}]}}},methods:{addTheJob:function(){var t=this;this.$refs.addJobRef.validate(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(o){var n,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=28;break}if(0!==t.fileList.length){e.next=4;break}return r.Notification.error({title:"Error",message:"You must add icon for that news"}),e.abrupt("return");case 4:return(l=new FormData).append("title_AR",t.addJob.title_AR),l.append("title_EN",t.addJob.title_EN),t.addJob.descriptions.forEach((function(t){l.append("description_EN",t.description_EN),l.append("description_AR",t.description_AR)})),t.addJob.jobLocationTags.forEach((function(t){l.append("jobLocationTags_EN",t.jobLocationTags_EN),l.append("jobLocationTags_AR",t.jobLocationTags_AR)})),t.addJob.jobDepartmentTags.forEach((function(t){l.append("jobDepartmentTags_EN",t.jobDepartmentTags_EN),l.append("jobDepartmentTags_AR",t.jobDepartmentTags_AR)})),l.append("jobType",t.addJob.jobType),l.append("image",null===(n=t.fileList)||void 0===n||null===(n=n[0])||void 0===n?void 0:n.raw),c=null,e.prev=13,c=r.Loading.service({fullscreen:!0,background:"#ffffffe6"}),e.next=17,t.$axios.post("/jobs",l);case 17:r.Notification.success({title:"Success",message:"The Job added successfully"}),t.$router.push("/dashboard/jobs"),window.scrollTo({top:0,behavior:"smooth"}),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(13),r.Notification.error({title:"Error",message:"There is something wrong"});case 25:return e.prev=25,t.$nextTick((function(){c.close()})),e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[13,22,25,28]])})));return function(t){return e.apply(this,arguments)}}())},handleRemove:function(t,e){this.fileList=e,console.log("Remove: ",t,this.fileList)},onChange:function(t,e){this.fileList=e,console.log("Change: ",t,this.fileList)}}},c=l,d=(o(617),o(20)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("el-form",{ref:"addJobRef",attrs:{model:t.addJob}},[e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]"},[e("el-form-item",{attrs:{prop:"title_AR",rules:[{required:!0,message:"This field is required"}]}},[e("label",{attrs:{for:"title_AR"}},[t._v("Title In arabic")]),t._v(" "),e("el-input",{attrs:{id:"title_AR"},model:{value:t.addJob.title_AR,callback:function(e){t.$set(t.addJob,"title_AR",e)},expression:"addJob.title_AR"}})],1),t._v(" "),e("el-form-item",{attrs:{prop:"title_EN",rules:[{required:!0,message:"This field is required"}]}},[e("label",{attrs:{for:"title_EN"}},[t._v("Title In english")]),t._v(" "),e("el-input",{attrs:{id:"title_EN"},model:{value:t.addJob.title_EN,callback:function(e){t.$set(t.addJob,"title_EN",e)},expression:"addJob.title_EN"}})],1),t._v(" "),e("el-form-item",{attrs:{prop:"jobType",rules:[{required:!0,message:"This field is required"}]}},[e("label",{attrs:{for:"jobType"}},[t._v("Job Type")]),t._v(" "),e("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:" "},model:{value:t.addJob.jobType,callback:function(e){t.$set(t.addJob,"jobType",e)},expression:"addJob.jobType"}},t._l(t.jobTypes,(function(t){return e("el-option",{key:t.value,attrs:{label:t.key,value:t.value}})})),1)],1)],1),t._v(" "),e("div",{staticClass:"flex items-center gap-[10px] justify-between mt-4"},[e("h6",{staticClass:"font-semibold text-xl"},[t._v("Descriptions")]),t._v(" "),e("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl",on:{click:function(e){return e.preventDefault(),t.addJob.descriptions.push({description_AR:"",description_EN:""})}}},[e("i",{staticClass:"el-icon-plus"}),t._v(" Add Description ")])]),t._v(" "),t._l(t.addJob.descriptions,(function(o,n){return e("div",{key:n,staticClass:"border-b border-grey-light"},[e("div",{staticClass:"flex gap-[10px] items-center justify-between pt-3"},[e("h6",{staticClass:"font-semibold"},[t._v("Description#"+t._s(n+1))]),t._v(" "),0!=n?e("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-2 rounded-xl",on:{click:function(e){return e.preventDefault(),t.addJob.descriptions.splice(n,1)}}},[e("i",{staticClass:"el-icon-close"})]):t._e()]),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]"},[e("el-form-item",{attrs:{prop:"descriptions[".concat(n,"].description_EN"),rules:[{required:!0,message:"This field is required"}]}},[e("label",{attrs:{for:"descriptions[".concat(n,"].description_EN")}},[t._v("Description In english")]),t._v(" "),e("el-input",{attrs:{id:"descriptions[".concat(n,"].description_EN")},model:{value:t.addJob.descriptions[n].description_EN,callback:function(e){t.$set(t.addJob.descriptions[n],"description_EN",e)},expression:"addJob.descriptions[index].description_EN"}})],1),t._v(" "),e("el-form-item",{attrs:{prop:"descriptions[".concat(n,"].description_AR"),rules:[{required:!0,message:"This field is required"}]}},[e("label",{attrs:{for:"descriptions[".concat(n,"].description_AR")}},[t._v("Description In arabic")]),t._v(" "),e("el-input",{attrs:{id:"descriptions[".concat(n,"].description_AR")},model:{value:t.addJob.descriptions[n].description_AR,callback:function(e){t.$set(t.addJob.descriptions[n],"description_AR",e)},expression:"addJob.descriptions[index].description_AR"}})],1)],1)])})),t._v(" "),e("div",{staticClass:"flex items-center gap-[10px] justify-between mt-4"},[e("h6",{staticClass:"font-semibold text-xl"},[t._v("Job Location Tags")]),t._v(" "),e("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl",on:{click:function(e){return e.preventDefault(),t.addJob.jobLocationTags.push({jobLocationTags_AR:"",jobLocationTags_EN:""})}}},[e("i",{staticClass:"el-icon-plus"}),t._v(" Add Job Location Tag ")])]),t._v(" "),t._l(t.addJob.jobLocationTags,(function(o,n){return e("div",{key:n,staticClass:"border-b border-grey-light"},[e("div",{staticClass:"flex gap-[10px] items-center justify-between pt-3"},[e("h6",{staticClass:"font-semibold"},[t._v("Tag#"+t._s(n+1))]),t._v(" "),0!=n?e("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-2 rounded-xl",on:{click:function(e){return e.preventDefault(),t.addJob.jobLocationTags.splice(n,1)}}},[e("i",{staticClass:"el-icon-close"})]):t._e()]),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]"},[e("el-form-item",{attrs:{prop:"jobLocationTags[".concat(n,"].jobLocationTags_EN"),rules:[{required:!0,message:"This field is required"}]}},[e("label",{attrs:{for:"jobLocationTags[".concat(n,"].jobLocationTags_EN")}},[t._v("Description In english")]),t._v(" "),e("el-input",{attrs:{id:"jobLocationTags[".concat(n,"].jobLocationTags_EN")},model:{value:t.addJob.jobLocationTags[n].jobLocationTags_EN,callback:function(e){t.$set(t.addJob.jobLocationTags[n],"jobLocationTags_EN",e)},expression:"addJob.jobLocationTags[index].jobLocationTags_EN"}})],1),t._v(" "),e("el-form-item",{attrs:{prop:"jobLocationTags[".concat(n,"].jobLocationTags_AR"),rules:[{required:!0,message:"This field is required"}]}},[e("label",{attrs:{for:"jobLocationTags[".concat(n,"].jobLocationTags_AR")}},[t._v("Description In arabic")]),t._v(" "),e("el-input",{attrs:{id:"jobLocationTags[".concat(n,"].jobLocationTags_AR")},model:{value:t.addJob.jobLocationTags[n].jobLocationTags_AR,callback:function(e){t.$set(t.addJob.jobLocationTags[n],"jobLocationTags_AR",e)},expression:"addJob.jobLocationTags[index].jobLocationTags_AR"}})],1)],1)])})),t._v(" "),e("div",{staticClass:"flex items-center gap-[10px] justify-between mt-4"},[e("h6",{staticClass:"font-semibold text-xl"},[t._v("Job Location Tags")]),t._v(" "),e("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl",on:{click:function(e){return e.preventDefault(),t.addJob.jobDepartmentTags.push({jobDepartmentTags_AR:"",jobDepartmentTags_EN:""})}}},[e("i",{staticClass:"el-icon-plus"}),t._v(" Add Job Location Tag ")])]),t._v(" "),t._l(t.addJob.jobDepartmentTags,(function(o,n){return e("div",{key:n,staticClass:"border-b border-grey-light"},[e("div",{staticClass:"flex gap-[10px] items-center justify-between pt-3"},[e("h6",{staticClass:"font-semibold"},[t._v("Tag#"+t._s(n+1))]),t._v(" "),0!=n?e("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-2 rounded-xl",on:{click:function(e){return e.preventDefault(),t.addJob.jobDepartmentTags.splice(n,1)}}},[e("i",{staticClass:"el-icon-close"})]):t._e()]),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]"},[e("el-form-item",{attrs:{prop:"jobDepartmentTags[".concat(n,"].jobDepartmentTags_EN"),rules:[{required:!0,message:"This field is required"}]}},[e("label",{attrs:{for:"jobDepartmentTags[".concat(n,"].jobDepartmentTags_EN")}},[t._v("tag In english")]),t._v(" "),e("el-input",{attrs:{id:"jobDepartmentTags[".concat(n,"].jobDepartmentTags_EN")},model:{value:t.addJob.jobDepartmentTags[n].jobDepartmentTags_EN,callback:function(e){t.$set(t.addJob.jobDepartmentTags[n],"jobDepartmentTags_EN",e)},expression:"addJob.jobDepartmentTags[index].jobDepartmentTags_EN"}})],1),t._v(" "),e("el-form-item",{attrs:{prop:"jobDepartmentTags[".concat(n,"].jobDepartmentTags_AR"),rules:[{required:!0,message:"This field is required"}]}},[e("label",{attrs:{for:"jobDepartmentTags[".concat(n,"].jobDepartmentTags_AR")}},[t._v("tag In arabic")]),t._v(" "),e("el-input",{attrs:{id:"jobDepartmentTags[".concat(n,"].jobDepartmentTags_AR")},model:{value:t.addJob.jobDepartmentTags[n].jobDepartmentTags_AR,callback:function(e){t.$set(t.addJob.jobDepartmentTags[n],"jobDepartmentTags_AR",e)},expression:"addJob.jobDepartmentTags[index].jobDepartmentTags_AR"}})],1)],1)])})),t._v(" "),e("div",{staticClass:"mb-4"},[e("h6",{staticClass:"font-semibold text-xl mb-4 mt-4"},[t._v("Job Image")]),t._v(" "),e("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"","auto-upload":!1,"on-remove":t.handleRemove,"on-change":t.onChange,"file-list":t.fileList,accept:"image/*"}},[e("i",{staticClass:"el-icon-upload"}),t._v(" "),e("div",{staticClass:"el-upload__text"},[t._v("Drop file here or "),e("em",[t._v("click to upload")])]),t._v(" "),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("jpg/png files with a size less than 500kb")])])],1)],2),t._v(" "),e("div",{staticClass:"flex flex-row-reverse mt-3"},[e("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl",on:{click:function(e){return t.addTheJob()}}},[t._v("Add Job")])])],1)}),[function(){var t=this._self._c;return t("h3",{staticClass:"font-bold text-xl my-3"},[t("i",{staticClass:"el-icon-plus"}),this._v(" Add New Job")])}],!1,null,null,null);e.default=component.exports}}]);