(window.webpackJsonp=window.webpackJsonp||[]).push([[99,29,30],{567:function(t,e,o){"use strict";o.r(e);o(52),o(120);var n=o(6),l=(o(47),o(3)),r={data:function(){return{deletePopup:!1}},methods:{openLink:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&window.open(t,e?"_blank":"_self")},openDelete:function(){this.deletePopup=!0},deleteJob:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.deletePopup=!1,o=null,e.prev=2,o=l.Loading.service({fullscreen:!0,background:"#ffffffe6"}),e.next=6,t.$axios.delete("/jobs/".concat(t.item._id));case 6:l.Notification.success({title:"Success",message:"The job deleted successfully"}),t.$emit("getJobs"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),l.Notification.error({title:"Error",message:"There is something wrong"});case 13:return e.prev=13,t.$nextTick((function(){o.close()})),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})))()}},props:{to:{required:!1,type:String},editable:{type:Boolean},item:{type:Object},preview:{type:Boolean,default:!1}}},c=r,f=o(19),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.editable?e("div",{staticClass:"mb-2"},[e("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-xl",on:{click:function(e){return e.stopPropagation(),t.openDelete()}}},[e("i",{staticClass:"el-icon-delete"})])]):t._e(),t._v(" "),t.item?e("div",{staticClass:"cursor-pointer mb-[30px] bg-white p-7 rounded-[15px] flex justify-between items-center flex-wrap",on:{click:function(e){return t.openLink(t.to)}}},[e("div",{staticClass:"flex gap-[20px] items-center flex-wrap"},[e("div",[e("img",{staticClass:"w-[150px] h-[150px] object-cover",attrs:{src:t.item.image,alt:""}})]),t._v(" "),e("div",[e("h4",{staticClass:"text-2xl font-semibold"},[t._v(" "+t._s("ar"==t.$i18n.locale?t.item.title_AR:t.item.title_EN)+" ")]),t._v(" "),t.item.jobLocationTags_AR&&t.item.jobLocationTags_EN?["en"==t.$i18n.locale?e("span",{staticClass:"text-lg text-grey mt-[5px] block"},[t._v(" "+t._s(t.item.jobLocationTags_EN.join(" - ")||"")+" ")]):e("span",{staticClass:"text-lg text-grey mt-[5px] block"},[t._v(" "+t._s(t.item.jobLocationTags_AR.join(" - ")||"")+" ")])]:t._e(),t._v(" "),e("div",{staticClass:"flex gap-[10px] mt-[10px] items-center flex-wrap"},["Full time"===t.item.jobType?e("span",{staticClass:"bg-[#56cdad29] text-sm text-[#56cda4] font-bold p-[7px] rounded-2xl px-[15px]"},[t._v(" "+t._s("ar"===t.$i18n.locale?"دوام كامل":"Full-Time")+" ")]):t._e(),t._v(" "),"Part time"===t.item.jobType?e("span",{staticClass:"bg-[#56cdad29] text-sm text-[#56cda4] font-bold p-[7px] rounded-2xl px-[15px]"},[t._v(" "+t._s("ar"===t.$i18n.locale?"دوام جزئي":"Part-Time")+" ")]):t._e(),t._v(" "),e("span",{staticClass:"h-[35px] w-[1px] bg-[#767676]"}),t._v(" "),"en"===t.$i18n.locale?t._l(t.item.jobDepartmentTags_EN,(function(o,n){return e("span",{staticClass:"bg-[#ffffff] text-sm text-[#FFB836] border border-[#FFB836] font-bold p-[7px] rounded-2xl px-[15px]"},[t._v("\n            "+t._s(o)+"\n            ")])})):t._l(t.item.jobDepartmentTags_AR,(function(o,n){return e("span",{staticClass:"bg-[#ffffff] text-sm text-[#FFB836] border border-[#FFB836] font-bold p-[7px] rounded-2xl px-[15px]"},[t._v("\n            "+t._s(o)+"\n            ")])}))],2)],2)]),t._v(" "),t.preview?t._e():e("div",{staticClass:"mt-4"},[t.editable?e("button",{staticClass:"bg-[#2C2F73] text-white p-2 px-14 rounded-3xl",on:{click:function(e){return e.stopPropagation(),t.openLink("/dashboard/jobs/".concat(t.item._id,"/candidates"),!1)}}},[t._v("\n        "+t._s(t.$t("Jobs.Candidates"))+"\n      ")]):e("button",{staticClass:"bg-[#2C2F73] text-white p-2 px-14 rounded-3xl",on:{click:function(e){return e.stopPropagation(),t.openLink("/jobs/".concat(t.item._id,"?job_title=").concat("ar"===t.$i18n.locale?t.item.title_AR:t.item.title_EN),!1)}}},[t._v("\n        "+t._s(t.$t("Jobs.Apply"))+"\n      ")])])]):t._e(),t._v(" "),e("el-dialog",{attrs:{title:"Delete Job",visible:t.deletePopup,width:"30%"},on:{"update:visible":function(e){t.deletePopup=e}}},[e("h5",{staticClass:"text-md"},[e("i",{staticClass:"text-xl text-[red] el-icon-delete"}),t._v(" Are you sure you want to delete this job ?")]),t._v(" "),e("span",{staticClass:"dialog-footer flex gap-[5px]",attrs:{slot:"footer"},slot:"footer"},[e("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md",on:{click:function(e){t.deletePopup=!1}}},[t._v("Cancel")]),t._v(" "),e("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md",on:{click:function(e){return t.deleteJob()}}},[t._v("Delete")])])])],1)}),[],!1,null,null,null);e.default=component.exports},596:function(t,e,o){"use strict";o.r(e);var n={props:{title:{required:!0,type:String},prevPageUrl:{type:String,default:"/"}}},l=o(19),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-[url('@/assets/imgs/jobs-bg.png')] bg-cover bg-[center_bottom] bg-no-repeat min-h-[300px]"},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"p-10"},[e("nuxt-link",{staticClass:"text-white text-md flex items-center gap-2",attrs:{to:t.prevPageUrl}},[e("i",{staticClass:"block mt-[3px] el-icon-back text-2xl"}),t._v(" "),e("span",{staticClass:"block"},[t._v(t._s(t.$t("Jobs.Back to previous page")))])]),t._v(" "),e("h2",{staticClass:"text-2xl md:text-3xl lg:text-5xl pt-12 text-white font-bold leading-[1.5]"},[t._v(t._s(t.title))])],1)])])}),[],!1,null,null,null);e.default=component.exports},659:function(t,e,o){var content=o(715);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(49).default)("1f4d043a",content,!0,{sourceMap:!1})},714:function(t,e,o){"use strict";o(659)},715:function(t,e,o){var n=o(48)((function(i){return i[1]}));n.push([t.i,".job-page .el-input__inner{border-radius:20px!important;height:50px!important}",""]),n.locals={},t.exports=n},765:function(t,e,o){"use strict";o.r(e);o(22);var n=o(6),l=(o(47),o(596)),r=o(567),c=o(3),f={components:{JobCard:r.default,JobBanner:l.default},data:function(){return{job:{},jobApply:{},file:null}},mounted:function(){this.getJob()},methods:{setFile:function(t){t.target.files.length>0&&(this.file=t.target.files[0])},submitYourApp:function(){var t=this;this.$refs.jobApplyRef.validate(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(o){var n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=25;break}if(t.file){e.next=4;break}return c.Notification.error({title:"Error",message:"You must add icon for that project"}),e.abrupt("return");case 4:return(n=new FormData).append("fullName",t.jobApply.fullName),n.append("email",t.jobApply.email),n.append("phone",t.jobApply.phone),n.append("CV",t.file),l=null,e.prev=10,l=c.Loading.service({fullscreen:!0,background:"#ffffffe6"}),e.next=14,t.$axios.post("/jobs/".concat(t.$route.params.id,"/apply"),n);case 14:c.Notification.success({title:"Success",message:"The job applied successfully"}),t.$router.push("/jobs"),window.scrollTo({top:0,behavior:"smooth"}),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(10),c.Notification.error({title:"Error",message:"There is something wrong"});case 22:return e.prev=22,t.$nextTick((function(){l.close()})),e.finish(22);case 25:case"end":return e.stop()}}),e,null,[[10,19,22,25]])})));return function(t){return e.apply(this,arguments)}}())},getJob:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=null,e.prev=1,o=c.Loading.service({fullscreen:!0,background:"#ffffffe6"}),e.next=5,t.$axios.get("/jobs/".concat(t.$route.params.id));case 5:n=e.sent,t.job=n.data;case 7:return e.prev=7,t.$nextTick((function(){o.close()})),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})))()}}},d=f,m=(o(714),o(19)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"job-page"},[e("JobBanner",{attrs:{title:t.$t("Jobs.Jobs")+"/"+t.$route.query.job_title}}),t._v(" "),e("div",[e("div",{staticClass:"bg-grey-lighter p-10 pt-20"},[e("div",{staticClass:"container mx-auto"},[e("div",[e("h2",{staticClass:"after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]",class:"en"===t.$i18n.locale?"after:left-0":"after:right-0"},[t._v("\n                    "+t._s(t.$t("Jobs.apply for job"))+"\n                ")]),t._v(" "),e("div",{staticClass:"px-20 pt-10"},[e("div",[e("JobCard",{attrs:{preview:!0,item:t.job}})],1),t._v(" "),e("div",{staticClass:"border-t border-t-[#b2b2b2] pt-5"},[e("h3",{staticClass:"text-[21px] font-semibold"},[t._v(" "+t._s(t.$t("Jobs.Submit Your Application"))+" ")]),t._v(" "),"ar"===t.$i18n.locale?e("div",{staticClass:"mb-4"},[e("ul",{staticClass:"mt-2 leading-[2]",staticStyle:{"list-style":"disc","list-style-position":"inside"}},t._l(t.job.description_AR,(function(o,n){return e("li",{key:n},[t._v("\n                          "+t._s(o)+"\n                        ")])})),0)]):t._e(),t._v(" "),"en"===t.$i18n.locale?e("div",{staticClass:"mb-4"},[e("ul",{staticClass:"mt-2 leading-[2]",staticStyle:{"list-style":"disc","list-style-position":"inside"}},t._l(t.job.description_EN,(function(o,n){return e("li",{key:n},[t._v("\n                          "+t._s(o)+"\n                        ")])})),0)]):t._e()]),t._v(" "),e("div",{staticClass:"px-20 pt-3"},[e("el-form",{ref:"jobApplyRef",attrs:{model:t.jobApply}},[e("div",{staticClass:"mb-3"},[e("h6",{staticClass:"mb-2"},[t._v("Full Name")]),t._v(" "),e("el-form-item",{attrs:{prop:"fullName",rules:[{required:!0,message:"This field is required"}]}},[e("el-input",{attrs:{placeholder:"Enter Your Full Name"},model:{value:t.jobApply.fullName,callback:function(e){t.$set(t.jobApply,"fullName",e)},expression:"jobApply.fullName"}})],1)],1),t._v(" "),e("div",{staticClass:"mb-3"},[e("h6",{staticClass:"mb-2"},[t._v("Email Address")]),t._v(" "),e("el-form-item",{attrs:{prop:"email",rules:[{required:!0,message:"This field is required"},{type:"email",message:"Must be a valid email"}]}},[e("el-input",{attrs:{placeholder:"Enter Your Email"},model:{value:t.jobApply.email,callback:function(e){t.$set(t.jobApply,"email",e)},expression:"jobApply.email"}})],1)],1),t._v(" "),e("div",{staticClass:"mb-3"},[e("h6",{staticClass:"mb-2"},[t._v("Phone Number")]),t._v(" "),e("el-form-item",{attrs:{prop:"phone",rules:[{required:!0,message:"This field is required"}]}},[e("el-input",{attrs:{placeholder:"Enter Your Phone"},model:{value:t.jobApply.phone,callback:function(e){t.$set(t.jobApply,"phone",e)},expression:"jobApply.phone"}})],1)],1),t._v(" "),e("div",[e("div",{staticClass:"flex items-center gap-4 justify-between relative"},[e("h3",{staticClass:"font-semibold"},[t._v(" Attach Your Resume")]),t._v(" "),e("div",{staticClass:"relative cursor-pointer bg-[#f6f6f6] text-[#2c2f73] font-semibold p-3 px-6 rounded-[20px] flex gap-2 items-center max-w-[200px] overflow-hidden text-nowrap text-ellipsis"},[e("input",{staticClass:"absolute top-0 right-0 opacity-0 cursor-pointer",attrs:{type:"file"},on:{change:t.setFile}}),t._v(" "),e("i",{staticClass:"text-[24px] el-icon-paperclip"}),t._v(" "),t.file?e("span",{staticClass:"max-w-[120px] overflow-hidden"},[t._v(" "+t._s(t.file.name)+" ")]):e("span",[t._v("Attach Resume/CV")])])])]),t._v(" "),e("div",[e("button",{staticClass:"text-center w-full bg-[#2c2f73] text-[#fff] p-3 mt-5 rounded-full",on:{click:function(e){return e.preventDefault(),t.submitYourApp.apply(null,arguments)}}},[t._v("Submit Application")])])])],1)])])])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);