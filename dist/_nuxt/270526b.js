(window.webpackJsonp=window.webpackJsonp||[]).push([[64,25,26,29,44,45],{543:function(t,e,r){var content=r(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("9b19e1b0",content,!0,{sourceMap:!1})},544:function(t,e,r){t.exports=r.p+"img/user_avatar.77572b1.svg"},545:function(t,e,r){"use strict";r(543)},546:function(t,e,r){var n=r(48)((function(i){return i[1]}));n.push([t.i,"@keyframes ticker-kf-5a38bd4a{0%{transform:translateZ(0)}to{transform:translate3d(-108rem,0,0)}}.img-ticker[data-v-5a38bd4a]{animation:ticker-kf-5a38bd4a 18s linear infinite}img[data-v-5a38bd4a]{aspect-ratio:3/2;-o-object-fit:contain;object-fit:contain;width:200px}",""]),n.locals={},t.exports=n},547:function(t,e,r){"use strict";r.r(e);var n=r(5),l=(r(47),r(3)),o={data:function(){return{deletePopup:!1}},methods:{openDelete:function(){this.deletePopup=!0},deleteProject:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.deletePopup=!1,r=null,e.prev=2,r=l.Loading.service({fullscreen:!0,background:"#ffffffe6"}),e.next=6,t.$axios.delete("/rates/".concat(t.item._id));case 6:l.Notification.success({title:"Success",message:"The rate deleted successfully"}),t.$emit("getRatings"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),l.Notification.error({title:"Error",message:"There is something wrong"});case 13:return e.prev=13,t.$nextTick((function(){r.close()})),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})))()}},props:{to:{required:!0,type:String},editable:{required:!0,type:Boolean},item:{type:Object}}},c=r(19),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t.editable?e("div",{staticClass:"mb-2"},[e("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-xl",on:{click:function(e){return e.stopPropagation(),t.openDelete()}}},[e("i",{staticClass:"el-icon-delete"})])]):t._e(),t._v(" "),e("div",{staticClass:"bg-gradient-to-b from-[#FFF8F8] to-[#F5F7FF] shadow-medium rounded-md p-6",attrs:{dir:"ar"===t.$i18n.locale?"rtl":"ltr"}},[e("div",{staticClass:"bg-white shadow-medium rounded-lg p-6"},[e("div",{staticClass:"border-b-[2px] border-grey-lighter flex gap-[10px] justify-between items-center pb-4 mb-4 flex-wrap"},[e("div",{staticClass:"flex gap-[10px] items-center"},[e("div",[e("img",{staticClass:"w-full max-w-[120px] h-[70px] object-contain",attrs:{src:t.item.logo,alt:""}})]),t._v(" "),e("div",[e("h6",{staticClass:"max-w-[200px]"},[t._v(t._s("ar"===t.$i18n.locale?t.item.company_name_AR:t.item.company_name_EN))])])]),t._v(" "),e("div",[e("el-rate",{attrs:{value:5,disabled:"","show-score":"","text-color":"#ff9900","score-template":""}})],1)]),t._v(" "),e("div",[e("p",{staticClass:"leading-[1.5] h-[3rem] overflow-hidden"},[t._v("\n          "+t._s("ar"===t.$i18n.locale?t.item.feedback_AR:t.item.feedback_EN)+"\n        ")])])]),t._v(" "),e("div",[e("div",{staticClass:"flex gap-[10px] mt-[25px] items-center"},[e("img",{staticClass:"rounded-full w-[60px]",attrs:{src:r(544),alt:""}}),t._v(" "),e("div",[e("h6",[t._v("\n            "+t._s("ar"===t.$i18n.locale?t.item.customer_name_AR:t.item.customer_name_EN)+"\n          ")]),t._v(" "),e("p",[t._v("\n            "+t._s("ar"===t.$i18n.locale?t.item.position_AR:t.item.position_EN)+"\n          ")])])])])]),t._v(" "),e("el-dialog",{attrs:{title:"Delete Service",visible:t.deletePopup,width:"30%"},on:{"update:visible":function(e){t.deletePopup=e}}},[e("h5",{staticClass:"text-md"},[e("i",{staticClass:"text-xl text-[red] el-icon-delete"}),t._v(" Are you sure you want to delete this project ?")]),t._v(" "),e("span",{staticClass:"dialog-footer flex gap-[5px]",attrs:{slot:"footer"},slot:"footer"},[e("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md",on:{click:function(e){t.deletePopup=!1}}},[t._v("Cancel")]),t._v(" "),e("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md",on:{click:function(e){return t.deleteProject()}}},[t._v("Delete")])])])],1)}),[],!1,null,null,null);e.default=component.exports},548:function(t,e,r){"use strict";r.r(e);var n=r(5),l=(r(47),r(35),r(14),{data:function(){return{partners:[],loading:!1}},mounted:function(){this.getPartners()},methods:{getPartners:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.$axios.get("/partners");case 4:r=e.sent,t.partners=r.data.filter((function(t){return"certificate"===t.type_of_image}));case 6:return e.prev=6,t.$nextTick((function(){t.loading=!1})),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[0,,6,9]])})))()}},props:{bgClass:{required:!1,type:String,default:"bg-grey-lighter"}}}),o=(r(545),r(19)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"p-10",class:t.bgClass,attrs:{dir:"ltr"}},[e("div",{staticClass:"container mx-auto"},[e("div",{ref:"tickerContainer",staticClass:"ticker-container"},[e("div",{staticClass:"ticker-wrap"},[e("div",{staticClass:"overflow-hidden"},[e("div",{staticClass:"flex -mx-4 img-ticker"},[t._l(t.partners,(function(t,r){return e("span",{key:r,staticClass:"w-50 mx-4 self-start flex-none"},[e("div",{staticClass:"bg-grey-lighter"},[e("img",{staticClass:"block m-auto h-[190] object-contain mix-blend-multiply",attrs:{src:t.image,alt:""}})])])})),t._v(" "),t._l(t.partners,(function(t,r){return e("span",{key:r,staticClass:"w-64 mx-4 self-start flex-none"},[e("div",{staticClass:"bg-grey-lighter"},[e("img",{staticClass:"block m-auto h-[190] object-contain mix-blend-multiply",attrs:{src:t.image,alt:""}})])])}))],2)])])])])])}),[],!1,null,"5a38bd4a",null);e.default=component.exports},550:function(t,e,r){"use strict";r.r(e);var n=r(5),l=(r(47),r(547)),o=r(3),c={components:{CustomerCard:l.default},props:{bgClass:{required:!1,type:String,default:"bg-white"}},mounted:function(){this.getRatings()},methods:{getRatings:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=null,e.prev=1,r=o.Loading.service({fullscreen:!0,background:"#ffffffe6"}),e.next=5,t.$axios.get("/rates");case 5:n=e.sent,t.ratings=n.data;case 7:return e.prev=7,t.$nextTick((function(){r.close()})),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})))()}},data:function(){return{ratings:[],swiperOptions:{slidesPerView:2,autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{1024:{slidesPerView:1,spaceBetween:40},768:{slidesPerView:1,spaceBetween:30},640:{slidesPerView:1,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}},pagination:{el:".swiper-pagination",clickable:!0}}}}},f=r(19),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-20 pb-14",class:t.bgClass},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"flex gap-[30px] justify-between px-10"},[e("div",[e("h2",{staticClass:"after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-normal pt-2 pb-1",class:"en"===t.$i18n.locale?"after:left-0":"after:right-0"},[t._v(t._s(t.$t("Customers.Why customers love")))]),t._v(" "),e("h2",{staticClass:"text-red text-3xl font-bold pb-2"},[t._v(t._s(t.$t("Customers.working with us")))])]),t._v(" "),e("div")]),t._v(" "),e("div",{staticClass:"mt-[10px] px-6",attrs:{dir:"ltr"}},[e("client-only",[e("swiper",{ref:"swiperComponentRef",staticClass:"pb-[20px]",attrs:{options:t.swiperOptions}},[t._l(t.ratings,(function(t){return e("swiper-slide",{key:t._id,staticClass:"py-6 px-3"},[e("CustomerCard",{attrs:{item:t,to:"/",editable:!1}})],1)})),t._v(" "),e("div",{staticClass:"bottom-[-5px] swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)],1)])])}),[],!1,null,null,null);e.default=component.exports},705:function(t,e,r){"use strict";r.r(e);var n={props:{title:{required:!0,type:String},prevPageUrl:{type:String,default:"/"}}},l=r(19),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-[url('@/assets/imgs/news-bg.png')] bg-cover bg-[center_bottom] bg-no-repeat min-h-[300px]"},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"p-10"},[e("nuxt-link",{staticClass:"text-white text-md flex items-center gap-2",attrs:{to:t.prevPageUrl}},[e("i",{staticClass:"block mt-[3px] el-icon-back text-2xl"}),t._v(" "),e("span",{staticClass:"block"},[t._v(" "+t._s(t.$t("News.Back to previous page"))+" ")])]),t._v(" "),e("h2",{staticClass:"text-2xl md:text-3xl lg:text-5xl pt-12 text-white font-bold leading-[1.5]"},[t._v(t._s(t.title))])],1)])])}),[],!1,null,null,null);e.default=component.exports},706:function(t,e,r){"use strict";r.r(e);var n={props:{item:{required:!0}}},l=r(19),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-10 pt-24"},[e("div",{staticClass:"container mx-auto"},[e("div",["en"===t.$i18n.locale?e("h2",{staticClass:"after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]",class:"en"===t.$i18n.locale?"after:left-0":"after:right-0"},[t._v("\n        "+t._s(t.item.title_EN)+"\n      ")]):e("h2",{staticClass:"after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[750px] leading-[1.5]",class:"en"===t.$i18n.locale?"after:left-0":"after:right-0"},[t._v("\n        "+t._s(t.item.title_AR)+"\n      ")]),t._v(" "),e("p",{staticClass:"text-grey font-normal max-w-[800px] mb-10"},[t._v("\n        "+t._s("ar"===t.$i18n.locale?t.item.description_AR:t.item.description_EN)+"\n      ")])]),t._v(" "),e("div",[e("img",{staticClass:"object-cover w-full rounded-3xl max-w-[500px]",attrs:{src:t.item.image,alt:""}})])])])}),[],!1,null,null,null);e.default=component.exports},778:function(t,e,r){"use strict";r.r(e);var n=r(5),l=(r(47),r(550)),o=r(548),c=r(705),f=r(706),d=r(3),v={components:{OurCustomers:l.default,OurClients:o.default,CertificateBanner:c.default,CertificateDetails:f.default},data:function(){return{certificate:{}}},mounted:function(){this.getCertificate()},methods:{getCertificate:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=null,e.prev=1,r=d.Loading.service({fullscreen:!0,background:"#ffffffe6"}),e.next=5,t.$axios.get("/certificates/".concat(t.$route.params.id));case 5:n=e.sent,t.certificate=n.data;case 7:return e.prev=7,t.$nextTick((function(){r.close()})),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})))()}}},m=r(19),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("CertificateBanner",{attrs:{prevPageUrl:"/about-us",title:"ar"===t.$i18n.locale?"الشهادات / ".concat(t.certificate.title_AR):"Certificates / ".concat(t.certificate.title_EN)}}),t._v(" "),e("CertificateDetails",{attrs:{item:t.certificate}}),t._v(" "),e("OurClients",{staticClass:"py-20",attrs:{bgClass:"bg-white"}}),t._v(" "),e("OurCustomers",{attrs:{bgClass:"bg-grey-lighter"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);