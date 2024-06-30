(window.webpackJsonp=window.webpackJsonp||[]).push([[22,21,62],{541:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this._self._c;return t("div",[t("img",{staticClass:"w-full max-w-[300px] d-block m-auto",attrs:{src:r(542)}})])}],o={},c=r(19),component=Object(c.a)(o,(function(){this._self._c;return this._m(0)}),n,!1,null,null,null);e.default=component.exports},542:function(t,e,r){t.exports=r.p+"img/no-data.b4c1a36.svg"},571:function(t,e,r){"use strict";r.r(e);var n=r(5),o=(r(47),r(3)),c={methods:{openDelete:function(){this.deletePopup=!0},openImg:function(){window.open(this.item.image)},deleteCertificate:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.deletePopup=!1,r=null,e.prev=2,r=o.Loading.service({fullscreen:!0,background:"#ffffffe6"}),e.next=6,t.$axios.delete("/certificates/".concat(t.item._id));case 6:o.Notification.success({title:"Success",message:"The certificate deleted successfully"}),t.$emit("getCertificate"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),o.Notification.error({title:"Error",message:"There is something wrong"});case 13:return e.prev=13,t.$nextTick((function(){r.close()})),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})))()}},data:function(){return{deletePopup:!1}},props:{to:{required:!0,type:String},editable:{required:!0,type:Boolean},item:{type:Object}}},l=r(19),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.editable?e("div",{staticClass:"mb-2"},[e("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-xl",on:{click:function(e){return e.stopPropagation(),t.openDelete()}}},[e("i",{staticClass:"el-icon-delete"})]),t._v(" "),e("button",{staticClass:"bg-[#2ecc71] hover:bg-[#27ae60] focus:outline-none text-white p-1 px-2 rounded-xl",on:{click:function(e){return t.$router.push("/dashboard/certificates/".concat(t.item._id))}}},[e("i",{staticClass:"el-icon-view"})])]):t._e(),t._v(" "),e("div",{staticClass:"p-5 py-5 shadow-medium rounded-xl border-[2px] border-grey-lighter"},[e("div",[e("img",{staticClass:"w-full h-[200px] object-cover bg-top cursor-pointer",attrs:{src:t.item.image,alt:""},on:{click:t.openImg}})]),t._v(" "),e("div",[e("div",{attrs:{dir:"ar"===t.$i18n.locale?"rtl":"ltr"}},[e("h3",{staticClass:"text-xl font-semibold mb-2 mt-4"},[t._v(t._s("ar"===t.$i18n.locale?t.item.title_AR:t.item.title_EN))]),t._v(" "),e("p",{staticClass:"text-md font-normal text-grey leading-[1.5em] h-[4.5em] overflow-hidden mb-[5px]"},[t._v("\n          "+t._s("ar"===t.$i18n.locale?t.item.description_AR:t.item.description_EN)+"\n        ")]),t._v(" "),e("nuxt-link",{staticClass:"flex flex-row-reverse text-primary font-semibold",attrs:{to:"/certificates/".concat(t.item._id)}},[t._v(" "+t._s(t.$t("ReadMore"))+" ")])],1)])]),t._v(" "),e("el-dialog",{attrs:{title:"Delete Certificate",visible:t.deletePopup,width:"30%"},on:{"update:visible":function(e){t.deletePopup=e}}},[e("h5",{staticClass:"text-md"},[e("i",{staticClass:"text-xl text-[red] el-icon-delete"}),t._v(" Are you sure you want to delete this Certificate ?")]),t._v(" "),e("span",{staticClass:"dialog-footer flex gap-[5px]",attrs:{slot:"footer"},slot:"footer"},[e("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md",on:{click:function(e){t.deletePopup=!1}}},[t._v("Cancel")]),t._v(" "),e("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md",on:{click:function(e){return t.deleteCertificate()}}},[t._v("Delete")])])])],1)}),[],!1,null,null,null);e.default=component.exports},668:function(t,e,r){"use strict";r.r(e);var n=r(5),o=(r(47),r(571)),c=r(541),l=r(3),f={components:{CertificateCard:o.default,NoData:c.default},data:function(){return{certificates:[]}},mounted:function(){this.getCertificate()},methods:{getCertificate:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=null,e.prev=1,r=l.Loading.service({fullscreen:!0,background:"#ffffffe6"}),e.next=5,t.$axios.get("/certificates");case 5:n=e.sent,t.certificates=n.data;case 7:return e.prev=7,t.$nextTick((function(){r.close()})),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})))()}}},d=r(19),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white p-10 relative z-[3] overflow-hidden"},[e("div",{staticClass:"container mx-auto"},[e("div",[e("h2",{staticClass:"after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]",class:"en"===t.$i18n.locale?"after:left-0":"after:right-0"},[t._v("\n        "+t._s(t.$t("About Us.Certificates for Namaa"))+"\n      ")]),t._v(" "),e("p",{staticClass:"text-grey font-normal max-w-[800px] text-sm mb-14"},[t._v("\n        "+t._s(t.$t("About Us.Cetrificate for Namaa description"))+"\n      ")])]),t._v(" "),t.certificates.length>0?e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-[30px] md:px-10"},t._l(t.certificates,(function(r){return e("div",{key:r._id},[e("CertificateCard",{attrs:{to:"/certificates/".concat(r._id),editable:!1,item:r},on:{getCertificate:t.getCertificate}})],1)})),0):e("NoData")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);