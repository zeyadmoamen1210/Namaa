(window.webpackJsonp=window.webpackJsonp||[]).push([[50,48,53,56],{538:function(e,t,r){"use strict";r.r(t);var o=[function(){var e=this._self._c;return e("div",[e("img",{staticClass:"w-full max-w-[300px] d-block m-auto",attrs:{src:r(539)}})])}],n={},c=r(20),component=Object(c.a)(n,(function(){this._self._c;return this._m(0)}),o,!1,null,null,null);t.default=component.exports},539:function(e,t,r){e.exports=r.p+"img/no-data.b4c1a36.svg"},549:function(e,t,r){var content=r(559);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(49).default)("759d1867",content,!0,{sourceMap:!1})},557:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAzOSA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuODA5NTcgMTkuOTk4NEgzMi40MDk2TTMyLjQwOTYgMTkuOTk4NEwyMi44MDk2IDEwLjM5ODRNMzIuNDA5NiAxOS45OTg0TDIyLjgwOTYgMjkuNTk4NCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"},558:function(e,t,r){"use strict";r(549)},559:function(e,t,r){var o=r(48)((function(i){return i[1]}));o.push([e.i,"@keyframes serviceCardHover{0%{transform:translate(0)}to{transform:translateY(-85px)}}.service-card:hover>div{--tw-bg-opacity:1!important;background-color:#2c2f73!important;overflow:hidden!important}@supports (color:rgb(0 0 0/0)){.service-card:hover>div{background-color:rgb(44 47 115/var(--tw-bg-opacity))!important}}.service-card:hover>div p{--tw-text-opacity:1!important;color:#eaeaf1!important}@supports (color:rgb(0 0 0/0)){.service-card:hover>div p{color:rgb(234 234 241/var(--tw-text-opacity))!important}}.service-card:hover>div h3{--tw-text-opacity:1!important;color:#fff!important}@supports (color:rgb(0 0 0/0)){.service-card:hover>div h3{color:rgb(255 255 255/var(--tw-text-opacity))!important}}.service-card:hover>div img.service-card__icon{transform:translateY(-90px);transition:all 1s ease-in-out!important}.service-card>div>div{transition:all .5s ease-in-out!important}.service-card>div>div:hover{transform:translateY(-70px)}",""]),o.locals={},e.exports=o},562:function(e,t,r){"use strict";r.r(t);var o=r(6),n=(r(47),r(3)),c={data:function(){return{deletePopup:!1}},props:{editable:{required:!1,type:Boolean},item:{type:Object},to:{required:!0,type:String}},methods:{openDelete:function(){this.deletePopup=!0},deleteService:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.deletePopup=!1,r=null,t.prev=2,r=n.Loading.service({fullscreen:!0,background:"#ffffffe6"}),t.next=6,e.$axios.delete("/services/".concat(e.item._id));case 6:n.Notification.success({title:"Success",message:"The services deleted successfully"}),e.$emit("getServices"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),n.Notification.error({title:"Error",message:"There is something wrong"});case 13:return t.prev=13,e.$nextTick((function(){r.close()})),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[2,10,13,16]])})))()}}},l=(r(558),r(20)),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",[e.editable?t("div",{staticClass:"mb-2"},[t("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-xl",on:{click:function(e){e.stopPropagation()}}},[t("i",{staticClass:"el-icon-edit"})]),e._v(" "),t("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-xl",on:{click:function(t){return t.stopPropagation(),e.openDelete()}}},[t("i",{staticClass:"el-icon-delete"})])]):e._e(),e._v(" "),t("nuxt-link",{staticClass:"service-card",attrs:{tag:"a",to:e.to,dir:"ar"===e.$i18n.locale?"rtl":"ltr"}},[t("div",{staticClass:"ease-linear duration-300 bg-white shadow-simple rounded-lg overflow-hidden"},[t("div",{staticClass:"p-6 py-8 relative max-h-[280px] service-card-inner"},[t("img",{staticClass:"w-[55px] mb-[20px] service-card__icon",attrs:{src:e.item.icon,alt:""}}),e._v(" "),t("h3",{staticClass:"transition-none leading-[1.5rem] h-[3rem] overflow-hidden text-2xl text-black mb-[10px] font-semibold"},[e._v(" "+e._s("ar"===e.$i18n.locale?e.item.title_AR:e.item.title_EN)+" ")]),e._v(" "),t("p",{staticClass:"text-sm text-grey mb-5 leading-[1.6rem] h-[5rem] overflow-hidden"},[e._v("\n          "+e._s("ar"===e.$i18n.locale?e.item.description_AR:e.item.description_EN)+"\n        ")]),e._v(" "),t("img",{staticClass:"service-card__arrow",attrs:{src:r(557),alt:""}})])])]),e._v(" "),t("el-dialog",{attrs:{title:"Delete Service",visible:e.deletePopup,width:"30%"},on:{"update:visible":function(t){e.deletePopup=t}}},[t("h5",{staticClass:"text-md"},[t("i",{staticClass:"text-xl text-[red] el-icon-delete"}),e._v(" Are you sure you want to delete this service ?")]),e._v(" "),t("span",{staticClass:"dialog-footer flex gap-[5px]",attrs:{slot:"footer"},slot:"footer"},[t("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md",on:{click:function(t){e.deletePopup=!1}}},[e._v("Cancel")]),e._v(" "),t("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md",on:{click:function(t){return e.deleteService()}}},[e._v("Delete")])])])],1)}),[],!1,null,null,null);t.default=component.exports},568:function(e,t,r){"use strict";r.r(t);var o={__name:"ServiceText",setup:function(e){return{__sfc:!0}}},n=r(20),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("h2",{staticClass:"after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]",class:"ar"===e.$i18n.locale?"after:right-0":"after:left-0"},[e._v("\n    "+e._s(e.$t("Services.We provide you with various services to help you"))+"\n  ")]),e._v(" "),t("p",{staticClass:"text-grey font-normal max-w-[800px] mb-10"},[e._v("\n    "+e._s(e.$t("Services.description"))+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports},661:function(e,t,r){"use strict";r.r(t);var o=r(6),n=(r(47),r(562)),c=r(568),l=r(538),d=r(3),v={data:function(){return{services:[]}},mounted:function(){this.getServices()},methods:{getServices:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=null,t.prev=1,r=d.Loading.service({fullscreen:!0,background:"#ffffffe6"}),t.next=5,e.$axios.get("/services");case 5:o=t.sent,e.services=o.data;case 7:return t.prev=7,e.$nextTick((function(){r.close()})),t.finish(7);case 10:case"end":return t.stop()}}),t,null,[[1,,7,10]])})))()}},components:{NoData:l.default,ServiceCard:n.default,ServiceText:c.default}},f=r(20),component=Object(f.a)(v,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"bg-grey-lighter p-10 pt-24"},[t("div",{staticClass:"container mx-auto"},[t("div",[t("ServiceText"),e._v(" "),e.services.length>0?t("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] px-10"},e._l(e.services,(function(r){return t("div",{key:r._id},[t("ServiceCard",{attrs:{item:r,to:"/services-list/".concat(r._id),editable:!1},on:{getServices:e.getServices}})],1)})),0):t("NoData")],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);