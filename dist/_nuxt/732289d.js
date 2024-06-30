(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{767:function(t,e,n){"use strict";n.r(e);var c=n(5),_=(n(47),n(3)),r={layout:"dashboard",mounted:function(){this.getNewsItem()},methods:{getNewsItem:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,n=_.Loading.service({fullscreen:!0,background:"#ffffffe6"}),e.next=5,t.$axios.get("/news/".concat(t.$route.params.id));case 5:c=e.sent,t.newsItem=c.data;case 7:return e.prev=7,t.$nextTick((function(){n.close()})),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})))()}},data:function(){return{newsItem:{}}}},m=n(19),component=Object(m.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("img",{staticClass:"max-w-[300px] w-full object-cover",attrs:{src:t.newsItem.image,alt:""}}),t._v(" "),e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("English Name")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.newsItem.news_title_EN)+"\n    ")])]),t._v(" "),e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("Arabic Name")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.newsItem.news_title_AR)+"\n    ")])]),t._v(" "),e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("English Description")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.newsItem.news_desc_EN)+"\n    ")])]),t._v(" "),e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("Arabic Description")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.newsItem.news_desc_AR)+"\n    ")])]),t._v(" "),e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("News Date")]),t._v(" "),e("p",[t._v("\n      "+t._s(new Date(t.newsItem.date).toLocaleDateString())+"\n    ")])]),t._v(" "),e("div",[t._l(t.newsItem.news_tags_EN,(function(n,c){return e("div",{key:c,staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("English Tag #"+t._s(c+1)+" ")]),t._v(" "),e("p",[t._v("\n        "+t._s(n)+"\n      ")])])})),t._v(" "),t._l(t.newsItem.news_tags_AR,(function(n,c){return e("div",{key:c,staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("Arabic Tag #"+t._s(c+1))]),t._v(" "),e("p",[t._v("\n        "+t._s(n)+"\n      ")])])}))],2)])}),[],!1,null,null,null);e.default=component.exports}}]);