(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{592:function(e,t,n){var content=n(647);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(49).default)("4705c153",content,!0,{sourceMap:!1})},646:function(e,t,n){"use strict";n(592)},647:function(e,t,n){var r=n(48)((function(i){return i[1]}));r.push([e.i,".el-loading-mask .el-loading-spinner svg{margin:auto!important}",""]),r.locals={},e.exports=r},700:function(e,t,n){"use strict";n.r(t);n(217),n(21),n(35),n(50),n(51),n(29);var r=n(16),l=n(5),o=(n(47),n(14),n(28),n(3));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _={data:function(){return{fileList:[],updateNews:{tags:[]}}},mounted:function(){this.getNewsItem()},methods:{getNewsItem:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=null,t.prev=1,n=o.Loading.service({fullscreen:!0,background:"#ffffffe6"}),t.next=5,e.$axios.get("/news/".concat(e.$route.params.id));case 5:r=t.sent,e.updateNews=d(d({},e.updateNews),r.data),e.updateNews.news_tags_EN.forEach((function(t,n){e.updateNews.tags.push({news_tags_AR:e.updateNews.news_tags_AR[n],news_tags_EN:t})})),e.updateNews.image&&e.fileList.push({name:"News Image",url:e.updateNews.image});case 9:return t.prev=9,e.$nextTick((function(){n.close()})),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[1,,9,12]])})))()},updateTheNews:function(){var e=this;this.$refs.updateNewsRef.validate(function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(n){var r,l,c,d,_,f,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=32;break}if(0!==e.fileList.length){t.next=4;break}return o.Notification.error({title:"Error",message:"You must add icon for that news"}),t.abrupt("return");case 4:return(l=new FormData).append("news_title_EN",e.updateNews.news_title_EN),l.append("news_title_AR",e.updateNews.news_title_AR),l.append("news_desc_EN",e.updateNews.news_desc_EN),l.append("news_desc_AR",e.updateNews.news_desc_AR),c=[],d=[],e.updateNews.tags.forEach((function(e){c.push(e.news_tags_EN),d.push(e.news_tags_AR)})),c.forEach((function(e){l.append("news_tags_EN",e)})),d.forEach((function(e){l.append("news_tags_AR",e)})),null!==(r=e.fileList)&&void 0!==r&&null!==(r=r[0])&&void 0!==r&&r.raw?l.append("image",null===(_=e.fileList)||void 0===_||null===(_=_[0])||void 0===_?void 0:_.raw):l.append("image",null===(f=e.fileList)||void 0===f||null===(f=f[0])||void 0===f?void 0:f.url),l.append("date",e.updateNews.date),w=null,t.prev=17,w=o.Loading.service({fullscreen:!0,background:"#ffffffe6"}),t.next=21,e.$axios.put("/news/".concat(e.$route.params.id),l);case 21:o.Notification.success({title:"Success",message:"The news updated successfully"}),e.$router.push("/dashboard/news/".concat(e.$route.params.id)),window.scrollTo({top:0,behavior:"smooth"}),t.next=29;break;case 26:t.prev=26,t.t0=t.catch(17),o.Notification.error({title:"Error",message:"There is something wrong"});case 29:return t.prev=29,e.$nextTick((function(){w.close()})),t.finish(29);case 32:case"end":return t.stop()}}),t,null,[[17,26,29,32]])})));return function(e){return t.apply(this,arguments)}}())},handleRemove:function(e,t){this.fileList=t,console.log("Remove: ",e,this.fileList)},onChange:function(e,t){this.fileList=t,console.log("Change: ",e,this.fileList)}}},f=_,w=(n(646),n(19)),component=Object(w.a)(f,(function(){var e=this,t=e._self._c;return t("div",[e._m(0),e._v(" "),t("el-form",{ref:"updateNewsRef",attrs:{model:e.updateNews}},[t("div",{staticClass:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]"},[t("el-form-item",{attrs:{prop:"news_title_EN",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"news_title_EN"}},[e._v("Name In english")]),e._v(" "),t("el-input",{attrs:{id:"news_title_EN"},model:{value:e.updateNews.news_title_EN,callback:function(t){e.$set(e.updateNews,"news_title_EN",t)},expression:"updateNews.news_title_EN"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"news_title_AR",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"news_title_AR"}},[e._v("News In arabic")]),e._v(" "),t("el-input",{attrs:{id:"news_title_AR"},model:{value:e.updateNews.news_title_AR,callback:function(t){e.$set(e.updateNews,"news_title_AR",t)},expression:"updateNews.news_title_AR"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"news_desc_EN",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"news_desc_EN"}},[e._v("description in english")]),e._v(" "),t("el-input",{attrs:{type:"textarea",id:"news_desc_EN"},model:{value:e.updateNews.news_desc_EN,callback:function(t){e.$set(e.updateNews,"news_desc_EN",t)},expression:"updateNews.news_desc_EN"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"news_desc_AR",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"news_desc_AR"}},[e._v("description in arabic")]),e._v(" "),t("el-input",{attrs:{type:"textarea",id:"news_desc_AR"},model:{value:e.updateNews.news_desc_AR,callback:function(t){e.$set(e.updateNews,"news_desc_AR",t)},expression:"updateNews.news_desc_AR"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"date",rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"date"}},[e._v("News Date")]),e._v(" "),t("el-date-picker",{staticStyle:{width:"100%"},attrs:{id:"date",type:"date",placeholder:"Pick a day"},model:{value:e.updateNews.date,callback:function(t){e.$set(e.updateNews,"date",t)},expression:"updateNews.date"}})],1)],1),e._v(" "),t("div",{staticClass:"flex items-center gap-[10px] justify-between"},[t("h6",{staticClass:"font-semibold text-xl"},[e._v("Tags")]),e._v(" "),t("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl",on:{click:function(t){return t.preventDefault(),e.updateNews.tags.push({news_tags_EN:"",news_tags_AR:""})}}},[t("i",{staticClass:"el-icon-plus"}),e._v(" Add Tag ")])]),e._v(" "),e._l(e.updateNews.tags,(function(n,r){return t("div",{key:r,staticClass:"border-b border-grey-light"},[t("div",{staticClass:"flex gap-[10px] items-center justify-between pt-3"},[t("h6",{staticClass:"font-semibold"},[e._v("Tag#"+e._s(r+1))]),e._v(" "),0!=r?t("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-2 rounded-xl",on:{click:function(t){return t.preventDefault(),e.updateNews.tags.splice(r,1)}}},[t("i",{staticClass:"el-icon-close"})]):e._e()]),e._v(" "),t("div",{staticClass:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]"},[t("el-form-item",{attrs:{prop:"tags[".concat(r,"].news_tags_EN"),rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"tags[".concat(r,"].news_tags_EN")}},[e._v("Tag In english")]),e._v(" "),t("el-input",{attrs:{id:"tags[".concat(r,"].news_tags_EN")},model:{value:e.updateNews.tags[r].news_tags_EN,callback:function(t){e.$set(e.updateNews.tags[r],"news_tags_EN",t)},expression:"updateNews.tags[index].news_tags_EN"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"tags[".concat(r,"].news_tags_AR"),rules:[{required:!0,message:"This field is required"}]}},[t("label",{attrs:{for:"tags[".concat(r,"].news_tags_AR")}},[e._v("Tag In arabic")]),e._v(" "),t("el-input",{attrs:{id:"tags[".concat(r,"].news_tags_AR")},model:{value:e.updateNews.tags[r].news_tags_AR,callback:function(t){e.$set(e.updateNews.tags[r],"news_tags_AR",t)},expression:"updateNews.tags[index].news_tags_AR"}})],1)],1)])})),e._v(" "),t("div",{staticClass:"mb-4"},[t("label",{staticClass:"mb-3 block text-sm"},[e._v("News Image")]),e._v(" "),t("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"","auto-upload":!1,"on-remove":e.handleRemove,"on-change":e.onChange,"file-list":e.fileList,"list-type":"picture",accept:"image/*"}},[t("i",{staticClass:"el-icon-upload"}),e._v(" "),t("div",{staticClass:"el-upload__text"},[e._v("Drop file here or "),t("em",[e._v("click to upload")])]),e._v(" "),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("jpg/png files with a size less than 500kb")])])],1)],2),e._v(" "),t("div",{staticClass:"flex flex-row-reverse mt-3"},[t("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl",on:{click:function(t){return e.updateTheNews()}}},[e._v("Update News")])])],1)}),[function(){var e=this._self._c;return e("h3",{staticClass:"font-bold text-xl my-3"},[e("i",{staticClass:"el-icon-plus"}),this._v(" Update News")])}],!1,null,null,null);t.default=component.exports}}]);