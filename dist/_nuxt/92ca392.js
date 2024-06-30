(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{571:function(e,t,o){"use strict";o.r(t);var n=o(5),r=(o(47),o(3)),c={methods:{openDelete:function(){this.deletePopup=!0},openImg:function(){window.open(this.item.image)},deleteCertificate:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.deletePopup=!1,o=null,t.prev=2,o=r.Loading.service({fullscreen:!0,background:"#ffffffe6"}),t.next=6,e.$axios.delete("/certificates/".concat(e.item._id));case 6:r.Notification.success({title:"Success",message:"The certificate deleted successfully"}),e.$emit("getCertificate"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),r.Notification.error({title:"Error",message:"There is something wrong"});case 13:return t.prev=13,e.$nextTick((function(){o.close()})),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[2,10,13,16]])})))()}},data:function(){return{deletePopup:!1}},props:{to:{required:!0,type:String},editable:{required:!0,type:Boolean},item:{type:Object}}},l=o(19),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",[e.editable?t("div",{staticClass:"mb-2"},[t("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-xl",on:{click:function(t){return t.stopPropagation(),e.openDelete()}}},[t("i",{staticClass:"el-icon-delete"})]),e._v(" "),t("button",{staticClass:"bg-[#2ecc71] hover:bg-[#27ae60] focus:outline-none text-white p-1 px-2 rounded-xl",on:{click:function(t){return e.$router.push("/dashboard/certificates/".concat(e.item._id))}}},[t("i",{staticClass:"el-icon-view"})])]):e._e(),e._v(" "),t("div",{staticClass:"p-5 py-5 shadow-medium rounded-xl border-[2px] border-grey-lighter"},[t("div",[t("img",{staticClass:"w-full h-[200px] object-cover bg-top cursor-pointer",attrs:{src:e.item.image,alt:""},on:{click:e.openImg}})]),e._v(" "),t("div",[t("div",{attrs:{dir:"ar"===e.$i18n.locale?"rtl":"ltr"}},[t("h3",{staticClass:"text-xl font-semibold mb-2 mt-4"},[e._v(e._s("ar"===e.$i18n.locale?e.item.title_AR:e.item.title_EN))]),e._v(" "),t("p",{staticClass:"text-md font-normal text-grey leading-[1.5em] h-[4.5em] overflow-hidden mb-[5px]"},[e._v("\n          "+e._s("ar"===e.$i18n.locale?e.item.description_AR:e.item.description_EN)+"\n        ")]),e._v(" "),t("nuxt-link",{staticClass:"flex flex-row-reverse text-primary font-semibold",attrs:{to:"/certificates/".concat(e.item._id)}},[e._v(" "+e._s(e.$t("ReadMore"))+" ")])],1)])]),e._v(" "),t("el-dialog",{attrs:{title:"Delete Certificate",visible:e.deletePopup,width:"30%"},on:{"update:visible":function(t){e.deletePopup=t}}},[t("h5",{staticClass:"text-md"},[t("i",{staticClass:"text-xl text-[red] el-icon-delete"}),e._v(" Are you sure you want to delete this Certificate ?")]),e._v(" "),t("span",{staticClass:"dialog-footer flex gap-[5px]",attrs:{slot:"footer"},slot:"footer"},[t("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md",on:{click:function(t){e.deletePopup=!1}}},[e._v("Cancel")]),e._v(" "),t("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md",on:{click:function(t){return e.deleteCertificate()}}},[e._v("Delete")])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);