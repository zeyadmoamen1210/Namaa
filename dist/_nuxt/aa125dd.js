(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{708:function(t,e,n){t.exports=n.p+"img/insta-3.28e59a7.svg"},709:function(t,e,n){t.exports=n.p+"img/pobox.fd6ff02.jpg"},710:function(t,e,n){t.exports=n.p+"img/fax.73a9214.svg"},711:function(t,e,n){t.exports=n.p+"img/phones.cc0ed89.svg"},734:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this._self._c;return t("div",{staticClass:"w-[45px] rounded-full"},[t("img",{staticClass:"block mx-auto w-[45px]",attrs:{src:n(708),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"bg-[#3b5998] w-[40px] h-[40px] leading-[40px] rounded-full"},[t("img",{staticClass:"block mx-auto pt-[7px]",attrs:{src:n(329),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"bg-[#55acee] w-[40px] h-[40px] leading-[40px] rounded-full"},[t("img",{staticClass:"block mx-auto pt-[11px]",attrs:{src:n(330),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"bg-[#007ab9] w-[40px] h-[40px] leading-[40px] rounded-full"},[t("img",{staticClass:"block mx-auto pt-[9px]",attrs:{src:n(331),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"w-[40px] h-[40px] leading-[40px] rounded-full overflow-hidden"},[t("img",{staticClass:"block mx-auto",attrs:{src:n(709),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"w-[40px] h-[40px] leading-[40px] rounded-full overflow-hidden"},[t("img",{staticClass:"block mx-auto",attrs:{src:n(710),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"w-[40px] h-[40px] leading-[40px] rounded-full overflow-hidden"},[t("img",{staticClass:"block mx-auto",attrs:{src:n(711),alt:""}})])}],l=n(5),c=(n(47),n(3)),r={layout:"dashboard",data:function(){return{companyInfo:{},activeTab:1}},mounted:function(){this.getCompanyInfo()},methods:{getCompanyInfo:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,n=c.Loading.service({fullscreen:!0,background:"#ffffffe6"}),e.next=5,t.$axios.get("/company_info");case 5:o=e.sent,t.companyInfo=o.data;case 7:return e.prev=7,t.$nextTick((function(){n.close()})),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})))()}}},m=n(19),component=Object(m.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex items-center justify-between mb-5 flex-wrap gap-[10px]"},[e("h5",{staticClass:"text-2xl font-semibold mb-0"},[t._v("Company Info")]),t._v(" "),e("div",{staticClass:"flex gap-3 items-center"},[e("div",{staticClass:"flex gap-x-[5px] items-center"},[e("img",{attrs:{src:n(328),alt:""}}),t._v(" "),"ar"===t.$i18n.locale?e("button",{on:{click:function(e){return t.$i18n.setLocale("en")}}},[t._v("EN")]):t._e(),t._v(" "),"en"===t.$i18n.locale?e("button",{on:{click:function(e){return t.$i18n.setLocale("ar")}}},[t._v("AR")]):t._e()]),t._v(" "),t.companyInfo._id?e("nuxt-link",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl",attrs:{tag:"button",to:"/dashboard/company-info/".concat(t.companyInfo._id)}},[t._v("Update Company info")]):e("nuxt-link",{staticClass:"bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl",attrs:{tag:"button",to:"/dashboard/company-info/add"}},[t._v("Add Company info")])],1)]),t._v(" "),e("div",{attrs:{dir:"en"===t.$i18n.locale?"ltr":"rtl"}},[e("div",{staticClass:"flex gap-3 items-center mb-5"},[e("button",{staticClass:"px-3 py-2 rounded-lg text-sm",class:1===t.activeTab?"bg-primary text-[#fff]":"",on:{click:function(e){t.activeTab=1}}},[t._v(t._s(t.$t("CompanyInfo.About Company")))]),t._v(" "),e("button",{staticClass:"px-3 py-2 rounded-lg text-sm",class:2===t.activeTab?"bg-primary text-[#fff]":"",on:{click:function(e){t.activeTab=2}}},[t._v(t._s(t.$t("CompanyInfo.Company Links")))]),t._v(" "),e("button",{staticClass:"px-3 py-2 rounded-lg text-sm",class:3===t.activeTab?"bg-primary text-[#fff]":"",on:{click:function(e){t.activeTab=3}}},[t._v(t._s(t.$t("CompanyInfo.Company Files")))])]),t._v(" "),1==t.activeTab?e("section",[e("div",{staticClass:"flex items-center gap-[10px] mb-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("Show / Hide CEO Section")]),t._v(" "),e("el-switch",{attrs:{disabled:""},model:{value:t.companyInfo.messageFlag,callback:function(e){t.$set(t.companyInfo,"messageFlag",e)},expression:"companyInfo.messageFlag"}})],1),t._v(" "),e("div",{staticClass:"border border-grey-light p-4 mb-4"},["en"===t.$i18n.locale?e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("About Us ")]),t._v(" "),e("p",[t._v("\n            "+t._s(t.companyInfo.about_us_EN)+"\n          ")])]):e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("عن الشركة")]),t._v(" "),e("p",[t._v("\n            "+t._s(t.companyInfo.about_us_AR)+"\n          ")])])]),t._v(" "),e("div",{staticClass:"border border-grey-light p-4 mb-4"},["en"===t.$i18n.locale?e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("Vision ")]),t._v(" "),e("p",[t._v("\n            "+t._s(t.companyInfo.vision_EN)+"\n          ")])]):e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("رؤيتنا")]),t._v(" "),e("p",[t._v("\n            "+t._s(t.companyInfo.vision_AR)+"\n          ")])])]),t._v(" "),e("div",{staticClass:"border border-grey-light p-4 mb-4"},["en"===t.$i18n.locale?e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("Message ")]),t._v(" "),e("p",[t._v("\n            "+t._s(t.companyInfo.message_EN)+"\n          ")])]):e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("رسالتنا")]),t._v(" "),e("p",[t._v("\n            "+t._s(t.companyInfo.message_AR)+"\n          ")])])]),t._v(" "),"en"===t.$i18n.locale?e("div",{staticClass:"border border-grey-light p-5 mb-5"},[e("h3",{staticClass:"border-b font-semibold text-lg border-grey-light pb-4 mb-4"},[t._v("Objectives")]),t._v(" "),t._l(t.companyInfo.objectives_EN,(function(n,o){return e("div",{key:o,staticClass:"border border-grey-light p-5 mb-5"},[e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("Title ")]),t._v(" "),e("p",[t._v("\n              "+t._s(n.title_EN)+"\n            ")])]),t._v(" "),e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("Pragraph ")]),t._v(" "),e("p",[t._v("\n              "+t._s(n.pragraph_EN)+"\n            ")])])])}))],2):e("div",{staticClass:"border border-grey-light p-5"},[e("h3",{staticClass:"border-b font-bold border-grey-light pb-4 mb-4"},[t._v("أهدافنا")]),t._v(" "),t._l(t.companyInfo.objectives_AR,(function(n,o){return e("div",{key:o,staticClass:"border border-grey-light p-5 mb-5"},[e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("العنوان")]),t._v(" "),e("p",[t._v("\n              "+t._s(n.title_AR)+"\n            ")])]),t._v(" "),e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("الوصف")]),t._v(" "),e("p",[t._v("\n              "+t._s(n.pragraph_AR)+"\n            ")])])])}))],2)]):2===t.activeTab?e("section",[e("div",{staticClass:"flex gap-3 items-center mb-4"},[t._m(0),t._v(" "),e("a",{attrs:{href:t.companyInfo.insta_link,target:"_blank"}},[t._v(t._s(t.companyInfo.insta_link))])]),t._v(" "),e("div",{staticClass:"flex gap-3 items-center mb-4"},[t._m(1),t._v(" "),e("a",{attrs:{href:t.companyInfo.facbok_link,target:"_blank"}},[t._v(t._s(t.companyInfo.facbok_link))])]),t._v(" "),e("div",{staticClass:"flex gap-3 items-center mb-4"},[t._m(2),t._v(" "),e("a",{attrs:{href:t.companyInfo.X_link,target:"_blank"}},[t._v(t._s(t.companyInfo.X_link))])]),t._v(" "),e("div",{staticClass:"flex gap-3 items-center mb-4"},[t._m(3),t._v(" "),e("a",{attrs:{href:t.companyInfo.LinkedIN_link,target:"_blank"}},[t._v(t._s(t.companyInfo.LinkedIN_link))])]),t._v(" "),e("div",{staticClass:"flex gap-3 items-center mb-4"},[t._m(4),t._v(" "),e("span",[t._v(t._s(t.companyInfo.POBox))])]),t._v(" "),e("div",{staticClass:"flex gap-3 items-center mb-4"},[t._m(5),t._v(" "),e("span",[t._v(t._s(t.companyInfo.fax)+" ")])]),t._v(" "),e("div",{staticClass:"flex gap-3 items-center mb-4"},[t._m(6),t._v(" "),e("div",{staticClass:"flex gap-3 items-center"},t._l(t.companyInfo.phone,(function(n,o){return e("span",{key:o},[t._v("\n            "+t._s(n)+"\n          ")])})),0)])]):e("section",[e("div",{staticClass:"flex gap-3 items-center mb-4"},[e("div",[t._v("\n          Company Profile\n        ")]),t._v(" "),t.companyInfo.companyProfile?e("span",[e("a",{staticClass:"text-[#4f46e5] underline",attrs:{target:"_blank",href:t.companyInfo.companyProfile}},[t._v("Click Here")])]):e("span",[t._v(" Not Found ")])]),t._v(" "),e("div",{staticClass:"flex gap-3 items-center mb-4"},[e("div",[t._v("\n          Company Regulation\n        ")]),t._v(" "),t.companyInfo.companyRegulation?e("span",[e("a",{staticClass:"text-[#4f46e5] underline",attrs:{target:"_blank",href:t.companyInfo.companyRegulation}},[t._v("Click Here")])]):e("span",[t._v(" Not Found ")])])])])])}),o,!1,null,null,null);e.default=component.exports}}]);