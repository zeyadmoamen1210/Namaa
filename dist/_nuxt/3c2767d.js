(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{740:function(t,e,n){"use strict";n.r(e);var m=n(6),o=(n(47),n(3)),r={layout:"dashboard",mounted:function(){this.getMessageItem()},methods:{getMessageItem:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){var n,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,n=o.Loading.service({fullscreen:!0,background:"#ffffffe6"}),e.next=5,t.$axios.get("/messages/".concat(t.$route.params.id));case 5:m=e.sent,t.messageItem=m.data;case 7:return e.prev=7,t.$nextTick((function(){n.close()})),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})))()}},data:function(){return{messageItem:{}}}},c=n(20),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("img",{staticClass:"max-w-[300px] w-full object-cover",attrs:{src:t.messageItem.image,alt:""}}),t._v(" "),e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("Arabic Name")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.messageItem.name_AR)+"\n    ")])]),t._v(" "),e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("English Name")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.messageItem.name_EN)+"\n    ")])]),t._v(" "),e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("English Position")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.messageItem.position_EN)+"\n    ")])]),t._v(" "),e("div",{staticClass:"mb-5 mt-5"},[e("h3",{staticClass:"font-semibold text-sm text-[#4f46e5]"},[t._v("Arabic Position")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.messageItem.position_AR)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports}}]);