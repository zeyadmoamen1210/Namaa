(window.webpackJsonp=window.webpackJsonp||[]).push([[69,25,56],{538:function(e,t,r){"use strict";r.r(t);var l=[function(){var e=this._self._c;return e("div",[e("img",{staticClass:"w-full max-w-[300px] d-block m-auto",attrs:{src:r(539)}})])}],n={},o=r(20),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),l,!1,null,null,null);t.default=component.exports},539:function(e,t,r){e.exports=r.p+"img/no-data.b4c1a36.svg"},552:function(e,t,r){var content=r(566);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(49).default)("45da4c41",content,!0,{sourceMap:!1})},565:function(e,t,r){"use strict";r(552)},566:function(e,t,r){var l=r(48)((function(i){return i[1]}));l.push([e.i,".gallery-card h5,.gallery-card h6,.gallery-card img{transition:all 1s ease-in-out}.gallery-card:hover{transform:scaleY(1.055)}.gallery-card:hover img{transform:scaleY(1.045)}.gallery-card:hover h5,.gallery-card:hover h6{--tw-text-opacity:1!important;color:#fff!important}@supports (color:rgb(0 0 0/0)){.gallery-card:hover h5,.gallery-card:hover h6{color:rgb(255 255 255/var(--tw-text-opacity))!important}}",""]),l.locals={},e.exports=l},567:function(e,t,r){"use strict";r.r(t);var l=r(6),n=(r(47),r(3)),o={data:function(){return{deletePopup:!1}},methods:{openDelete:function(){this.deletePopup=!0},deleteGallery:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.deletePopup=!1,r=null,t.prev=2,r=n.Loading.service({fullscreen:!0,background:"#ffffffe6"}),t.next=6,e.$axios.delete("/gallery-folders/".concat(e.item._id));case 6:n.Notification.success({title:"Success",message:"The gallery deleted successfully"}),e.$emit("getMessages"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),n.Notification.error({title:"Error",message:"There is something wrong"});case 13:return t.prev=13,e.$nextTick((function(){r.close()})),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[2,10,13,16]])})))()}},props:{to:{required:!1,type:String},editable:{type:Boolean},item:{type:Object}}},c=(r(565),r(20)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[e.editable?t("div",{staticClass:"mb-2"},[t("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-xl",on:{click:function(t){return t.stopPropagation(),e.openDelete()}}},[t("i",{staticClass:"el-icon-delete"})]),e._v(" "),t("button",{staticClass:"bg-[#2ecc71] hover:bg-[#27ae60] focus:outline-none text-white p-1 px-2 rounded-xl",on:{click:function(t){return e.$router.push("/dashboard/gallery/".concat(e.item._id))}}},[t("i",{staticClass:"el-icon-view"})])]):e._e(),e._v(" "),t("div",{staticClass:"bg-white p-5 shadow-medium rounded-2xl border-[2px] border-grey-lighter hover:bg-primary transition-all duration-700 gallery-card"},[t("div",{staticClass:"relative"},[t("img",{staticClass:"w-full h-[200px] object-cover",attrs:{src:e.item.cover,alt:""}}),e._v(" "),t("span",{staticClass:"absolute bottom-[10px] left-[10px] bg-[#1A1A1A80] text-white p-1 px-3 rounded-[15px] text-sm block"},[e._v(" "+e._s(e.item.tag)+" ")])]),e._v(" "),t("div",{staticClass:"flex justify-between py-3 border-b-[1px] border-grey-light"},[t("h6",{staticClass:"text-grey"},[e._v(" "+e._s(new Date(e.item.date).toLocaleDateString("ar"===e.$i18n.locale?"ar-EG":"en-En"))+" ")]),e._v(" "),t("h6",{staticClass:"text-grey"},[e._v(e._s(e.item.numberOfItem)+" photo")])]),e._v(" "),t("div",[t("h5",{staticClass:"text-2xl font-semibold my-2"},[e._v(" "+e._s("ar"===e.$i18n.locale?e.item.nameAR:e.item.nameEN)+" ")])])]),e._v(" "),t("el-dialog",{attrs:{title:"Delete Gallery",visible:e.deletePopup,width:"30%"},on:{"update:visible":function(t){e.deletePopup=t}}},[t("h5",{staticClass:"text-md"},[t("i",{staticClass:"text-xl text-[red] el-icon-delete"}),e._v(" Are you sure you want to delete this gallery ?")]),e._v(" "),t("span",{staticClass:"dialog-footer flex gap-[5px]",attrs:{slot:"footer"},slot:"footer"},[t("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md",on:{click:function(t){e.deletePopup=!1}}},[e._v("Cancel")]),e._v(" "),t("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md",on:{click:function(t){return e.deleteGallery()}}},[e._v("Delete")])])])],1)}),[],!1,null,null,null);t.default=component.exports},722:function(e,t,r){"use strict";r.r(t);var l=r(6),n=(r(47),r(3)),o=r(538),c={layout:"dashboard",components:{GalleryCard:r(567).default,NoData:o.default},mounted:function(){this.getGallery()},data:function(){return{gallery:[]}},methods:{getGallery:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=null,t.prev=1,r=n.Loading.service({fullscreen:!0,background:"#ffffffe6"}),t.next=5,e.$axios.get("/gallery-folders");case 5:l=t.sent,e.gallery=l.data;case 7:return t.prev=7,e.$nextTick((function(){r.close()})),t.finish(7);case 10:case"end":return t.stop()}}),t,null,[[1,,7,10]])})))()}}},d=r(20),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"flex items-center justify-between mb-5 flex-wrap gap-[10px]"},[t("h5",{staticClass:"text-2xl font-semibold mb-0"},[e._v("Gallery")]),e._v(" "),t("div",{staticClass:"flex gap-3 items-center"},[t("div",{staticClass:"flex gap-x-[5px] items-center"},[t("img",{attrs:{src:r(327),alt:""}}),e._v(" "),"ar"===e.$i18n.locale?t("button",{on:{click:function(t){return e.$i18n.setLocale("en")}}},[e._v("EN")]):e._e(),e._v(" "),"en"===e.$i18n.locale?t("button",{on:{click:function(t){return e.$i18n.setLocale("ar")}}},[e._v("AR")]):e._e()]),e._v(" "),t("nuxt-link",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl",attrs:{tag:"button",to:"/dashboard/gallery/add"}},[e._v("Add Gallery")])],1)]),e._v(" "),e.gallery.length>0?t("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]"},e._l(e.gallery,(function(r){return t("div",{key:r._id},[t("GalleryCard",{attrs:{to:"/dashboard/gallery/".concat(r._id),editable:!0,item:r},on:{getGallery:e.getGallery}})],1)})),0):t("NoData")],1)}),[],!1,null,null,null);t.default=component.exports}}]);