(window.webpackJsonp=window.webpackJsonp||[]).push([[59,18,19,20,21,22,25,40,41],{543:function(t,e,r){var content=r(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("9b19e1b0",content,!0,{sourceMap:!1})},544:function(t,e,r){t.exports=r.p+"img/user_avatar.77572b1.svg"},545:function(t,e,r){"use strict";r(543)},546:function(t,e,r){var n=r(48)((function(i){return i[1]}));n.push([t.i,"@keyframes ticker-kf-5a38bd4a{0%{transform:translateZ(0)}to{transform:translate3d(-108rem,0,0)}}.img-ticker[data-v-5a38bd4a]{animation:ticker-kf-5a38bd4a 18s linear infinite}img[data-v-5a38bd4a]{aspect-ratio:3/2;-o-object-fit:contain;object-fit:contain;width:200px}",""]),n.locals={},t.exports=n},547:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(47),r(3)),l={data:function(){return{deletePopup:!1}},methods:{openDelete:function(){this.deletePopup=!0},deleteProject:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.deletePopup=!1,r=null,e.prev=2,r=o.Loading.service({fullscreen:!0,background:"#ffffffe6"}),e.next=6,t.$axios.delete("/rates/".concat(t.item._id));case 6:o.Notification.success({title:"Success",message:"The rate deleted successfully"}),t.$emit("getRatings"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),o.Notification.error({title:"Error",message:"There is something wrong"});case 13:return e.prev=13,t.$nextTick((function(){r.close()})),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})))()}},props:{to:{required:!0,type:String},editable:{required:!0,type:Boolean},item:{type:Object}}},c=r(19),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",[t.editable?e("div",{staticClass:"mb-2"},[e("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-xl",on:{click:function(e){return e.stopPropagation(),t.openDelete()}}},[e("i",{staticClass:"el-icon-delete"})])]):t._e(),t._v(" "),e("div",{staticClass:"bg-gradient-to-b from-[#FFF8F8] to-[#F5F7FF] shadow-medium rounded-md p-6",attrs:{dir:"ar"===t.$i18n.locale?"rtl":"ltr"}},[e("div",{staticClass:"bg-white shadow-medium rounded-lg p-6"},[e("div",{staticClass:"border-b-[2px] border-grey-lighter flex gap-[10px] justify-between items-center pb-4 mb-4 flex-wrap"},[e("div",{staticClass:"flex gap-[10px] items-center"},[e("div",[e("img",{staticClass:"w-full max-w-[120px] h-[70px] object-contain",attrs:{src:t.item.logo,alt:""}})]),t._v(" "),e("div",[e("h6",{staticClass:"max-w-[200px]"},[t._v(t._s("ar"===t.$i18n.locale?t.item.company_name_AR:t.item.company_name_EN))])])]),t._v(" "),e("div",[e("el-rate",{attrs:{value:5,disabled:"","show-score":"","text-color":"#ff9900","score-template":""}})],1)]),t._v(" "),e("div",[e("p",{staticClass:"leading-[1.5] h-[3rem] overflow-hidden"},[t._v("\n          "+t._s("ar"===t.$i18n.locale?t.item.feedback_AR:t.item.feedback_EN)+"\n        ")])])]),t._v(" "),e("div",[e("div",{staticClass:"flex gap-[10px] mt-[25px] items-center"},[e("img",{staticClass:"rounded-full w-[60px]",attrs:{src:r(544),alt:""}}),t._v(" "),e("div",[e("h6",[t._v("\n            "+t._s("ar"===t.$i18n.locale?t.item.customer_name_AR:t.item.customer_name_EN)+"\n          ")]),t._v(" "),e("p",[t._v("\n            "+t._s("ar"===t.$i18n.locale?t.item.position_AR:t.item.position_EN)+"\n          ")])])])])]),t._v(" "),e("el-dialog",{attrs:{title:"Delete Service",visible:t.deletePopup,width:"30%"},on:{"update:visible":function(e){t.deletePopup=e}}},[e("h5",{staticClass:"text-md"},[e("i",{staticClass:"text-xl text-[red] el-icon-delete"}),t._v(" Are you sure you want to delete this project ?")]),t._v(" "),e("span",{staticClass:"dialog-footer flex gap-[5px]",attrs:{slot:"footer"},slot:"footer"},[e("button",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md",on:{click:function(e){t.deletePopup=!1}}},[t._v("Cancel")]),t._v(" "),e("button",{staticClass:"bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md",on:{click:function(e){return t.deleteProject()}}},[t._v("Delete")])])])],1)}),[],!1,null,null,null);e.default=component.exports},548:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(47),r(35),r(14),{data:function(){return{partners:[],loading:!1}},mounted:function(){this.getPartners()},methods:{getPartners:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.$axios.get("/partners");case 4:r=e.sent,t.partners=r.data.filter((function(t){return"certificate"===t.type_of_image}));case 6:return e.prev=6,t.$nextTick((function(){t.loading=!1})),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[0,,6,9]])})))()}},props:{bgClass:{required:!1,type:String,default:"bg-grey-lighter"}}}),l=(r(545),r(19)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"p-10",class:t.bgClass,attrs:{dir:"ltr"}},[e("div",{staticClass:"container mx-auto"},[e("div",{ref:"tickerContainer",staticClass:"ticker-container"},[e("div",{staticClass:"ticker-wrap"},[e("div",{staticClass:"overflow-hidden"},[e("div",{staticClass:"flex -mx-4 img-ticker"},[t._l(t.partners,(function(t,r){return e("span",{key:r,staticClass:"w-50 mx-4 self-start flex-none"},[e("div",{staticClass:"bg-grey-lighter"},[e("img",{staticClass:"block m-auto h-[190] object-contain mix-blend-multiply",attrs:{src:t.image,alt:""}})])])})),t._v(" "),t._l(t.partners,(function(t,r){return e("span",{key:r,staticClass:"w-64 mx-4 self-start flex-none"},[e("div",{staticClass:"bg-grey-lighter"},[e("img",{staticClass:"block m-auto h-[190] object-contain mix-blend-multiply",attrs:{src:t.image,alt:""}})])])}))],2)])])])])])}),[],!1,null,"5a38bd4a",null);e.default=component.exports},553:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(47),r(547)),l=r(3),c={components:{CustomerCard:o.default},props:{bgClass:{required:!1,type:String,default:"bg-white"}},mounted:function(){this.getRatings()},methods:{getRatings:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=null,e.prev=1,r=l.Loading.service({fullscreen:!0,background:"#ffffffe6"}),e.next=5,t.$axios.get("/rates");case 5:n=e.sent,t.ratings=n.data;case 7:return e.prev=7,t.$nextTick((function(){r.close()})),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})))()}},data:function(){return{ratings:[],swiperOptions:{slidesPerView:2,autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{1024:{slidesPerView:1,spaceBetween:40},768:{slidesPerView:1,spaceBetween:30},640:{slidesPerView:1,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}},pagination:{el:".swiper-pagination",clickable:!0}}}}},f=r(19),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-20 pb-14",class:t.bgClass},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"flex gap-[30px] justify-between px-10"},[e("div",[e("h2",{staticClass:"after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-normal pt-2 pb-1",class:"en"===t.$i18n.locale?"after:left-0":"after:right-0"},[t._v(t._s(t.$t("Customers.Why customers love")))]),t._v(" "),e("h2",{staticClass:"text-red text-3xl font-bold pb-2"},[t._v(t._s(t.$t("Customers.working with us")))])]),t._v(" "),e("div")]),t._v(" "),e("div",{staticClass:"mt-[10px] px-6",attrs:{dir:"ltr"}},[e("client-only",[e("swiper",{ref:"swiperComponentRef",staticClass:"pb-[20px]",attrs:{options:t.swiperOptions}},[t._l(t.ratings,(function(t){return e("swiper-slide",{key:t._id,staticClass:"py-6 px-3"},[e("CustomerCard",{attrs:{item:t,to:"/",editable:!1}})],1)})),t._v(" "),e("div",{staticClass:"bottom-[-5px] swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)],1)])])}),[],!1,null,null,null);e.default=component.exports},566:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDE4LjMzNTlWMjguMzM1OUwxOC4zMzMzIDI1LjAwMjYiIHN0cm9rZT0iIzJDMkY3MyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTUgMjguMzMzM0wxMS42NjY3IDI1IiBzdHJva2U9IiMyQzJGNzMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM2LjY2NjYgMTYuNjY5M1YyNS4wMDI2QzM2LjY2NjYgMzMuMzM1OSAzMy4zMzMzIDM2LjY2OTMgMjUgMzYuNjY5M0gxNUM2LjY2NjY1IDM2LjY2OTMgMy4zMzMzMSAzMy4zMzU5IDMuMzMzMzEgMjUuMDAyNlYxNS4wMDI2QzMuMzMzMzEgNi42NjkyNyA2LjY2NjY1IDMuMzM1OTQgMTUgMy4zMzU5NEgyMy4zMzMzIiBzdHJva2U9IiMyQzJGNzMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM2LjY2NjYgMTYuNjY5M0gzMEMyNSAxNi42NjkzIDIzLjMzMzMgMTUuMDAyNiAyMy4zMzMzIDEwLjAwMjZWMy4zMzU5NEwzNi42NjY2IDE2LjY2OTNaIiBzdHJva2U9IiMyQzJGNzMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="},568:function(t,e,r){t.exports=r.p+"img/about-us-1.b3dd2d6.png"},573:function(t,e,r){var content=r(605);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("44c7fbb3",content,!0,{sourceMap:!1})},574:function(t,e,r){t.exports=r.p+"img/certificate_1.51ee3c6.png"},595:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this._self._c;return t("div",[t("img",{staticClass:"w-full max-h-[300px]",attrs:{src:r(574),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center py-3"},[e("span",{staticClass:"text-grey text-sm"},[t._v("Samuel Wahyu")]),t._v(" "),e("span",{staticClass:"relative after:absolute after:top-0 after:left-[50%] after:translate-x-[-50%] after:h-[1.5px] after:w-[20px] after:bg-grey"}),t._v(" "),e("span",{staticClass:"text-grey text-sm"},[t._v("January, 09 2022")])])}],o={},l=r(19),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-5 py-5 shadow-medium rounded-xl border-[2px] border-grey-lighter"},[t._m(0),t._v(" "),e("div",[t._m(1),t._v(" "),e("div",[e("h3",{staticClass:"text-xl font-semibold mb-2"},[t._v("Certificate for ABC herby cerftify")]),t._v(" "),e("p",{staticClass:"text-md font-normal text-grey"},[t._v("\n        Riyad 12626 - almurabba district - prince abdlaziz bin musaed bi jalawi street\n      ")]),t._v(" "),e("nuxt-link",{staticClass:"flex flex-row-reverse text-primary font-semibold",attrs:{to:"/"}},[t._v("Read More")])],1)])])}),n,!1,null,null,null);e.default=component.exports},601:function(t,e,r){t.exports=r.p+"img/about-1.ae8bf7c.png"},602:function(t,e,r){t.exports=r.p+"img/about-2.cfc7e1b.png"},603:function(t,e,r){t.exports=r.p+"img/about-3.606eb15.png"},604:function(t,e,r){"use strict";r(573)},605:function(t,e,r){var n=r(48)((function(i){return i[1]}));n.push([t.i,".why-us-card:hover h3{--tw-text-opacity:1!important;color:#fff!important}@supports (color:rgb(0 0 0/0)){.why-us-card:hover h3{color:rgb(255 255 255/var(--tw-text-opacity))!important}}.why-us-card:hover p{--tw-text-opacity:1!important;color:#bebfd4!important}@supports (color:rgb(0 0 0/0)){.why-us-card:hover p{color:rgb(190 191 212/var(--tw-text-opacity))!important}}",""]),n.locals={},t.exports=n},606:function(t,e,r){t.exports=r.p+"img/about-us-3.c6d8d32.png"},607:function(t,e,r){t.exports=r.p+"img/about-us-2.d5c7e22.png"},608:function(t,e,r){t.exports=r.p+"img/about-us-4.c531fcc.png"},660:function(t,e,r){"use strict";r.r(e);var n={props:{title:{required:!0,type:String},prevPageUrl:{type:String,default:"/"}}},o=r(19),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-[url('@/assets/imgs/about-us.png')] bg-cover bg-[center_bottom] bg-no-repeat min-h-[300px]"},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"p-10"},[e("nuxt-link",{staticClass:"text-white text-md flex items-center gap-2",attrs:{to:t.prevPageUrl}},[e("i",{staticClass:"block mt-[3px] el-icon-back text-2xl"}),t._v(" "),e("span",{staticClass:"block"},[t._v(" "+t._s(t.$t("About Us.Back to previous page"))+" ")])]),t._v(" "),e("h2",{staticClass:"text-2xl md:text-3xl lg:text-5xl pt-12 text-white font-bold leading-[1.5]"},[t._v(t._s(t.title))])],1)])])}),[],!1,null,null,null);e.default=component.exports},661:function(t,e,r){"use strict";r.r(e);var n={components:{}},o=(r(604),r(19)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white p-10 pt-16"},[e("div",{staticClass:"container mx-auto"},[e("div",[e("h2",{staticClass:"after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]",class:"en"===t.$i18n.locale?"after:left-0":"after:right-0"},[t._v("\n        "+t._s(t.$t("About Us.Why Namaa Company"))+"\n      ")]),t._v(" "),e("p",{staticClass:"text-grey font-normal max-w-[800px] text-sm mb-14"},[t._v("\n        "+t._s(t.$t("About Us.namaa company description"))+"\n      ")]),t._v(" "),e("div",{staticClass:"lg:flex gap-x-[40px] gap-y-[10px] justify-between"},[e("div",{staticClass:"p-10 py-10 shadow-medium rounded-xl border-[2px] border-grey-lighter relative overflow-hidden after:absolute after:content-[''] after:left-0 after:bottom-[-55%] after:w-full after:h-[55%] after:bg-[url('@/assets/imgs/wave.png')] after:bg-cover hover:after:bottom-0 after:transition-all after:duration-700 why-us-card mb-[15px]"},[e("img",{staticClass:"max-w-[120px] block mx-auto w-full",attrs:{src:r(601),alt:""}}),t._v(" "),e("h3",{staticClass:"transition-all duration-700 relative z-[2] text-center font-bold text-2xl mt-8 mb-2"},[t._v(t._s(t.$t("About Us.High Quality")))]),t._v(" "),e("p",{staticClass:"transition-all duration-700 text-center text-grey relative z-[2]"},[t._v("\n            "+t._s(t.$t("About Us.High Quality Description"))+"\n          ")])]),t._v(" "),e("div",{staticClass:"p-10 py-10 shadow-medium rounded-xl border-[2px] border-grey-lighter relative overflow-hidden after:absolute after:content-[''] after:left-0 after:bottom-[-55%] after:w-full after:h-[55%] after:bg-[url('@/assets/imgs/wave.png')] after:bg-cover hover:after:bottom-0 after:transition-all after:duration-700 why-us-card mb-[15px]"},[e("img",{staticClass:"max-w-[120px] block mx-auto w-full",attrs:{src:r(602),alt:""}}),t._v(" "),e("h3",{staticClass:"transition-all duration-700 relative z-[2] text-center font-bold text-2xl mt-8 mb-2"},[t._v(t._s(t.$t("About Us.Continuous Development")))]),t._v(" "),e("p",{staticClass:"transition-all duration-700 text-center text-grey relative z-[2]"},[t._v("\n            "+t._s(t.$t("About Us.Continuous Development Description"))+"\n          ")])]),t._v(" "),e("div",{staticClass:"p-10 py-10 shadow-medium rounded-xl border-[2px] border-grey-lighter relative overflow-hidden after:absolute after:content-[''] after:left-0 after:bottom-[-55%] after:w-full after:h-[55%] after:bg-[url('@/assets/imgs/wave.png')] after:bg-cover hover:after:bottom-0 after:transition-all after:duration-700 why-us-card mb-[15px]"},[e("img",{staticClass:"max-w-[120px] block mx-auto w-full",attrs:{src:r(603),alt:""}}),t._v(" "),e("h3",{staticClass:"transition-all duration-700 relative z-[2] text-center font-bold text-2xl mt-8 mb-2"},[t._v(t._s(t.$t("About Us.Satisfying")))]),t._v(" "),e("p",{staticClass:"transition-all duration-700 text-center text-grey relative z-[2]"},[t._v("\n            "+t._s(t.$t("About Us.Satisfying Description"))+"\n          ")])])])])])])}),[],!1,null,null,null);e.default=component.exports},662:function(t,e,r){"use strict";r.r(e);var n={components:{},props:{info:{required:!0}}},o=r(19),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white p-10 pt-16 relative z-[3] after:content-[' '] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[100%] after:bg-no-repeat after:bg-contain after:z-[1] after:bg-[url('@/assets/imgs/bottom-bg.png')] before:content-[' '] before:absolute before:bottom-[-89%] before:left-0 before:h-[100%] before:w-[100%] before:bg-no-repeat before:bg-contain before:z-[2] overflow-hidden before:overflow-hidden before:bg-[url('@/assets/imgs/top-bg.png')] bg-[0px] bg-white"},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"relative z-[2]"},[e("h2",{staticClass:"after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]",class:"en"===t.$i18n.locale?"after:left-0":"after:right-0"},[t._v("\n          "+t._s(t.$t("About Us.Our objectives"))+"\n        ")]),t._v(" "),e("p",{staticClass:"text-grey font-normal max-w-[800px] text-sm mb-14"},[t._v("\n          "+t._s(t.$t("About Us.Our objectives description"))+"\n        ")]),t._v(" "),t._l("ar"===t.$i18n.locale?t.info.objectives_AR:t.info.objectives_EN,(function(n,o){return e("div",{key:o},[o%2==0?e("div",{staticClass:"lg:flex gap-[30px] items-center lg:my-14 lg:mx-20 py-20 px-10 bg-grey-lighter rounded-3xl lg:rounded-bl-none lg:rounded-tr-full lg:rounded-br-full mb-10"},[e("div",{staticClass:"basis-[70%]"},[e("h2",{staticClass:"text-primary font-bold text-2xl mb-4"},[t._v(" "+t._s((t.$i18n.locale,n.title_EN))+" ")]),t._v(" "),e("p",{staticClass:"text-grey"},[t._v("\n                "+t._s("ar"===t.$i18n.locale?n.pragraph_AR:n.pragraph_EN)+"\n              ")])]),t._v(" "),e("div",{staticClass:"basis-[30%]"},[e("img",0===o?{staticClass:"w-full max-w-[200px] block mx-auto",attrs:{src:r(568),alt:""}}:2===o?{staticClass:"w-full max-w-[200px] block mx-auto",attrs:{src:r(606),alt:""}}:{staticClass:"w-full max-w-[200px] block mx-auto",attrs:{src:r(568),alt:""}})])]):e("div",{staticClass:"lg:flex gap-[30px] items-center lg:my-14 lg:mx-20 py-20 px-10 bg-grey-lighter rounded-3xl lg:rounded-bl-full lg:rounded-tl-full lg:rounded-tr-none mb-10"},[e("div",{staticClass:"basis-[30%]"},[e("img",1===o?{staticClass:"w-full max-w-[200px] block mx-auto",attrs:{src:r(607),alt:""}}:3===o?{staticClass:"w-full max-w-[200px] block mx-auto",attrs:{src:r(608),alt:""}}:{staticClass:"w-full max-w-[200px] block mx-auto",attrs:{src:r(568),alt:""}})]),t._v(" "),e("div",{staticClass:"basis-[70%]"},[e("h2",{staticClass:"text-primary font-bold text-2xl mb-4"},[t._v(t._s("ar"===t.$i18n.locale?n.title_AR:n.title_EN))]),t._v(" "),e("p",{staticClass:"text-grey"},[t._v("\n                "+t._s("ar"===t.$i18n.locale?n.pragraph_AR:n.pragraph_EN)+"\n              ")])])])])}))],2)])])}),[],!1,null,null,null);e.default=component.exports},663:function(t,e,r){"use strict";r.r(e);var n={components:{CertificateCard:r(595).default}},o=r(19),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white p-10 relative z-[3] overflow-hidden"},[e("div",{staticClass:"container mx-auto"},[e("div",[e("h2",{staticClass:"after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]",class:"en"===t.$i18n.locale?"after:left-0":"after:right-0"},[t._v("\n        "+t._s(t.$t("About Us.Certificates for Namaa"))+"\n      ")]),t._v(" "),e("p",{staticClass:"text-grey font-normal max-w-[800px] text-sm mb-14"},[t._v("\n        "+t._s(t.$t("About Us.Cetrificate for Namaa description"))+"\n      ")])]),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-[30px] px-10"},[e("CertificateCard"),t._v(" "),e("CertificateCard"),t._v(" "),e("CertificateCard"),t._v(" "),e("CertificateCard")],1)])])}),[],!1,null,null,null);e.default=component.exports},700:function(t,e,r){t.exports=r.p+"img/Photo.cdb0835.jpg"},718:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(47),r(660)),l=[function(){var t=this._self._c;return t("div",{staticClass:"flex-1 mt-[30px] lg:mt-0"},[t("img",{staticClass:"max-w-[500px] w-full block mx-auto rounded-[20px]",attrs:{src:r(700),alt:""}})])}],c={components:{},props:{info:{required:!0}},methods:{downloadPDF:function(t){1===t&&window.open("/1a07a824d60678f8903bcd63f14d5dbe.pdf","_blank"),2===t&&window.open("/475e4a63b6e6d589c7f1f9cb5d45d7f5.pdf","_blank")}}},f=r(19),d=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white p-10 pt-24"},[e("div",{staticClass:"container mx-auto"},[e("div",[e("h2",{staticClass:"after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]",class:"en"===t.$i18n.locale?"after:left-0":"after:right-0"},[t._v("\n        "+t._s(t.$t("About Us.The beginning of namaa company"))+"\n      ")]),t._v(" "),e("p",{staticClass:"text-grey font-normal max-w-[800px] text-sm mb-10"},[t._v("\n        "+t._s("ar"===t.$i18n.locale?t.info.about_us_AR:t.info.about_us_EN)+"\n      ")]),t._v(" "),e("div",{staticClass:"cursor-pointer hover:translate-y-[-5px] ease-in-out duration-300 p-5 mt-7 flex gap-[10px] items-center max-w-[350px] shadow-simple rounded-3xl mx-auto md:mx-0",on:{click:function(e){return t.downloadPDF(1)}}},[e("img",{attrs:{src:r(566),alt:""}}),t._v(" "),e("div",[e("h6",{staticClass:"text-primary text-md font-semibold"},[t._v(t._s(t.$t("About Us.Company profile")))]),t._v(" "),e("span",{staticClass:"text-grey text-sm"},[t._v(t._s(t.$t("About Us.Company profile description")))])])]),t._v(" "),e("div",{staticClass:"cursor-pointer hover:translate-y-[-5px] ease-in-out duration-300 p-5 mt-7 flex gap-[10px] items-center max-w-[350px] shadow-simple rounded-3xl mx-auto md:mx-0",on:{click:function(e){return t.downloadPDF(2)}}},[e("img",{attrs:{src:r(566),alt:""}}),t._v(" "),e("div",[e("h6",{staticClass:"text-primary text-md font-semibold"},[t._v(t._s(t.$t("About Us.Company regulations")))]),t._v(" "),e("span",{staticClass:"text-grey text-sm"},[t._v(t._s(t.$t("About Us.Company profile description")))])])]),t._v(" "),e("div",{staticClass:"block lg:flex gap-[20px] justify-between items-center mt-[30px]"},[e("div",{staticClass:"flex-1"},[e("div",[e("h2",{staticClass:"text-3xl text-red font-bold mb-3"},[t._v(t._s(t.$t("About Us.Our Vision")))]),t._v(" "),e("p",{staticClass:"text-grey"},[t._v("\n              "+t._s("ar"===t.$i18n.locale?t.info.vision_AR:t.info.vision_EN)+"\n            ")])]),t._v(" "),e("div",{staticClass:"mt-10"},[e("h2",{staticClass:"text-3xl text-red font-bold mb-3"},[t._v(t._s(t.$t("About Us.Our Message")))]),t._v(" "),e("p",{staticClass:"text-grey"},[t._v("\n              "+t._s("ar"===t.$i18n.locale?t.info.message_AR:t.info.message_EN)+"\n            ")])])]),t._v(" "),t._m(0)])])])])}),l,!1,null,null,null).exports,m=r(661),x=r(662),v=r(663),_=r(553),C=r(548),h=r(3),w={components:{OurClients:C.default,OurCustomers:_.default,Certificates:v.default,OurObjectives:x.default,WhyUs:m.default,AboutUsBanner:o.default,AboutUs:d},data:function(){return{companyInfo:{}}},mounted:function(){this.getCompanyInfo()},methods:{getCompanyInfo:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=null,e.prev=1,r=h.Loading.service({fullscreen:!0,background:"#ffffffe6"}),e.next=5,t.$axios.get("/company_info");case 5:n=e.sent,t.companyInfo=n.data;case 7:return e.prev=7,t.$nextTick((function(){r.close()})),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})))()}}},y=Object(f.a)(w,(function(){var t=this,e=t._self._c;return e("div",[e("AboutUsBanner",{attrs:{title:"ar"===t.$i18n.locale?"عن الشركة":"About Us"}}),t._v(" "),e("AboutUs",{attrs:{info:t.companyInfo}}),t._v(" "),e("WhyUs"),t._v(" "),e("OurObjectives",{attrs:{info:t.companyInfo}}),t._v(" "),e("Certificates"),t._v(" "),e("OurClients",{staticClass:"py-20",attrs:{bgClass:"bg-[#FAFAFA]"}}),t._v(" "),e("OurCustomers",{attrs:{bgClass:"bg-[#EAEAF1]"}})],1)}),[],!1,null,null,null);e.default=y.exports}}]);