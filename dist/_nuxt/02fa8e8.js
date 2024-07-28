(window.webpackJsonp=window.webpackJsonp||[]).push([[96,10],{589:function(e,t,n){var content=n(637);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(46).default)("477a21ee",content,!0,{sourceMap:!1})},636:function(e,t,n){"use strict";n(589)},637:function(e,t,n){var l=n(45)((function(i){return i[1]}));l.push([e.i,".el-loading-mask .el-loading-spinner svg{margin:auto!important}",""]),l.locals={},e.exports=l},697:function(e,t,n){"use strict";n.r(t);n(218);var l=n(4),r=(n(44),n(13),n(30),n(3)),d={data:function(){return{fileList:[],addNews:{tags:[{news_tags_AR:"",news_tags_EN:""}]}}},methods:{addTheNews:function(){var e=this;this.$refs.addNewsRef.validate(function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(n){var l,d,o,c,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=32;break}if(0!==e.fileList.length){t.next=4;break}return r.Notification.error({title:"Error",message:"You must add icon for that news"}),t.abrupt("return");case 4:return(d=new FormData).append("news_title_EN",e.addNews.news_title_EN),d.append("news_title_AR",e.addNews.news_title_AR),d.append("news_desc_EN",e.addNews.news_desc_EN),d.append("news_desc_AR",e.addNews.news_desc_AR),o=[],c=[],e.addNews.tags.forEach((function(e){o.push(e.news_tags_EN),c.push(e.news_tags_AR)})),o.forEach((function(e){d.append("news_tags_EN",e)})),c.forEach((function(e){d.append("news_tags_AR",e)})),d.append("image",null===(l=e.fileList)||void 0===l||null===(l=l[0])||void 0===l?void 0:l.raw),d.append("date",e.addNews.date),_=null,t.prev=17,_=r.Loading.service({fullscreen:!0,background:"#ffffffe6"}),t.next=21,e.$axios.post("/news",d);case 21:r.Notification.success({title:"Success",message:"The news added successfully"}),e.$router.push("/dashboard/news"),window.scrollTo({top:0,behavior:"smooth"}),t.next=29;break;case 26:t.prev=26,t.t0=t.catch(17),r.Notification.error({title:"Error",message:"There is something wrong"});case 29:return t.prev=29,e.$nextTick((function(){_.close()})),t.finish(29);case 32:case"end":return t.stop()}}),t,null,[[17,26,29,32]])})));return function(e){return t.apply(this,arguments)}}())},handleRemove:function(e,t){this.fileList=t,console.log("Remove: ",e,this.fileList)},onChange:function(e,t){this.fileList=t,console.log("Change: ",e,this.fileList)}}},o=d,c=(n(636),n(15)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[e._m(0),e._v(" "),t("el-form",{ref:"addNewsRef",attrs:{model:e.addNews}},[t("div",{staticClass:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]"},[t("el-form-item",{attrs:{prop:"news_title_EN",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"news_title_EN"}},[e._v("Name In english")]),e._v(" "),t("el-input",{attrs:{id:"news_title_EN"},model:{value:e.addNews.news_title_EN,callback:function(t){e.$set(e.addNews,"news_title_EN",t)},expression:"addNews.news_title_EN"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"news_title_AR",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"news_title_AR"}},[e._v("News In arabic")]),e._v(" "),t("el-input",{attrs:{id:"news_title_AR"},model:{value:e.addNews.news_title_AR,callback:function(t){e.$set(e.addNews,"news_title_AR",t)},expression:"addNews.news_title_AR"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"news_desc_EN",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"news_desc_EN"}},[e._v("description in english")]),e._v(" "),t("el-input",{attrs:{type:"textarea",id:"news_desc_EN"},model:{value:e.addNews.news_desc_EN,callback:function(t){e.$set(e.addNews,"news_desc_EN",t)},expression:"addNews.news_desc_EN"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"news_desc_AR",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"news_desc_AR"}},[e._v("description in arabic")]),e._v(" "),t("el-input",{attrs:{type:"textarea",id:"news_desc_AR"},model:{value:e.addNews.news_desc_AR,callback:function(t){e.$set(e.addNews,"news_desc_AR",t)},expression:"addNews.news_desc_AR"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"date",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"date"}},[e._v("News Date")]),e._v(" "),t("el-date-picker",{staticStyle:{width:"100%"},attrs:{id:"date",type:"date",placeholder:"Pick a day"},model:{value:e.addNews.date,callback:function(t){e.$set(e.addNews,"date",t)},expression:"addNews.date"}})],1)],1),e._v(" "),t("div",{staticClass:"flex items-center gap-[10px] justify-between"},[t("h6",{staticClass:"font-semibold text-xl"},[e._v("Tags")]),e._v(" "),t("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl",on:{click:function(t){return t.preventDefault(),e.addNews.tags.push({news_tags_EN:"",news_tags_AR:""})}}},[t("i",{staticClass:"el-icon-plus"}),e._v(" Add Tag ")])]),e._v(" "),e._l(e.addNews.tags,(function(n,l){return t("div",{key:l,staticClass:"border-b border-grey-light"},[t("div",{staticClass:"flex gap-[10px] items-center justify-between pt-3"},[t("h6",{staticClass:"font-semibold"},[e._v("Tag#"+e._s(l+1))]),e._v(" "),0!=l?t("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-2 rounded-xl",on:{click:function(t){return t.preventDefault(),e.addNews.tags.splice(l,1)}}},[t("i",{staticClass:"el-icon-close"})]):e._e()]),e._v(" "),t("div",{staticClass:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]"},[t("el-form-item",{attrs:{prop:"tags[".concat(l,"].news_tags_EN"),rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"tags[".concat(l,"].news_tags_EN")}},[e._v("Tag In english")]),e._v(" "),t("el-input",{attrs:{id:"tags[".concat(l,"].news_tags_EN")},model:{value:e.addNews.tags[l].news_tags_EN,callback:function(t){e.$set(e.addNews.tags[l],"news_tags_EN",t)},expression:"addNews.tags[index].news_tags_EN"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"tags[".concat(l,"].news_tags_AR"),rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"tags[".concat(l,"].news_tags_AR")}},[e._v("Tag In arabic")]),e._v(" "),t("el-input",{attrs:{id:"tags[".concat(l,"].news_tags_AR")},model:{value:e.addNews.tags[l].news_tags_AR,callback:function(t){e.$set(e.addNews.tags[l],"news_tags_AR",t)},expression:"addNews.tags[index].news_tags_AR"}})],1)],1)])})),e._v(" "),t("div",{staticClass:"mb-4"},[t("label",{staticClass:"mb-3 block text-sm"},[e._v("News Image")]),e._v(" "),t("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"","auto-upload":!1,"on-remove":e.handleRemove,"on-change":e.onChange,"file-list":e.fileList,accept:"image/*"}},[t("i",{staticClass:"el-icon-upload"}),e._v(" "),t("div",{staticClass:"el-upload__text"},[e._v("Drop file here or "),t("em",[e._v("click to upload")])]),e._v(" "),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("jpg/png files with a size less than 500kb")])])],1)],2),e._v(" "),t("div",{staticClass:"flex flex-row-reverse mt-3"},[t("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl",on:{click:function(t){return e.addTheNews()}}},[e._v("Add News")])])],1)}),[function(){var e=this._self._c;return e("h3",{staticClass:"font-bold text-xl my-3"},[e("i",{staticClass:"el-icon-plus"}),this._v(" Add New News")])}],!1,null,null,null);t.default=component.exports},769:function(e,t,n){"use strict";n.r(t);var l={components:{AddNews:n(697).default},layout:"dashboard"},r=n(15),component=Object(r.a)(l,(function(){var e=this._self._c;return e("div",[e("AddNews")],1)}),[],!1,null,null,null);t.default=component.exports}}]);