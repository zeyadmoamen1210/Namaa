(window.webpackJsonp=window.webpackJsonp||[]).push([[73,4],{598:function(e,t,n){var content=n(652);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(46).default)("25dce3c7",content,!0,{sourceMap:!1})},651:function(e,t,n){"use strict";n(598)},652:function(e,t,n){var r=n(45)((function(i){return i[1]}));r.push([e.i,'.sender-container[data-v-028a7f52]{display:flex;justify-content:flex-end}.chat-section[data-v-028a7f52]{height:calc(100vh - 200px);min-height:400px;overflow-y:scroll}.reciever[data-v-028a7f52]{background-color:#eee;border-radius:5px;margin:10px 16px;padding:10px;position:relative;width:-moz-fit-content;width:fit-content}.reciever[data-v-028a7f52]:after{border-color:transparent #eee #eee transparent;border-width:10px;bottom:3px;content:" ";left:-10px;position:absolute}.sender[data-v-028a7f52]{background-color:#4f5184;border-radius:5px;color:#fff;margin:10px 16px;padding:10px;position:relative;width:-moz-fit-content;width:fit-content}.sender[data-v-028a7f52]:after{border-color:#4f5184 transparent transparent #4f5184;border-width:8px;bottom:0;content:" ";position:absolute;right:-8px}',""]),r.locals={},e.exports=r},709:function(e,t,n){"use strict";n.r(t);var r=n(4),o=(n(13),n(26),n(332),n(44),n(3)),c={props:{type:{required:!0},conversation:{required:!0}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getChatMessages();case 2:if(!(n=document.querySelector(".chat-section"))){t.next=7;break}return t.next=6,e.$nextTick();case 6:n.scrollTo({top:n.scrollHeight,behavior:"smooth"});case 7:case"end":return t.stop()}}),t)})))()},data:function(){return{message:null,loading:!1,conversations:[]}},methods:{getChatMessages:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=null,t.prev=1,n=o.Loading.service({fullscreen:!0,background:"#ffffffe6"}),t.next=5,e.$axios.get("/chat-messages/".concat(e.$route.params.id));case 5:r=t.sent,e.conversations=r.data;case 7:return t.prev=7,e.$nextTick((function(){n.close()})),t.finish(7);case 10:case"end":return t.stop()}}),t,null,[[1,,7,10]])})))()},sendMessage:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.loading){t.next=2;break}return t.abrupt("return");case 2:if(e.message&&0!==e.message.trim().toString().length){t.next=4;break}return t.abrupt("return");case 4:e.saveMessage();case 5:case"end":return t.stop()}}),t)})))()},saveMessage:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=null,t.prev=1,n=o.Loading.service({fullscreen:!0,background:"#ffffffe6"}),t.next=5,e.$axios.post("/chat-messages",{conversation:e.conversation._id,sender:"Admin",message:e.message});case 5:return e.conversations.push(e.message.trim()),r=document.querySelector(".chat-section"),e.message=null,t.next=10,e.getChatMessages();case 10:if(!r){t.next=14;break}return t.next=13,e.$nextTick();case 13:r.scrollTo({top:r.scrollHeight,behavior:"smooth"});case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(1),o.Notification.error({title:"Error",message:"There is something wrong"});case 19:return t.prev=19,e.$nextTick((function(){n.close()})),t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[1,16,19,22]])})))()}}},l=(n(651),n(15)),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"border border-[#ddd] p-[10px]"},[t("div",{staticClass:"mb-[10px] chat-section"},e._l(e.conversations,(function(n,r){return t("div",{key:r},["Admin"!=n.sender?t("div",[t("div",{staticClass:"reciever"},[e._v("\n          "+e._s(n.message)+"\n        ")])]):e._e(),e._v(" "),"Admin"==n.sender?t("div",{staticClass:"sender-container"},[t("div",{staticClass:"sender"},[e._v("\n          "+e._s(n.message)+"\n        ")])]):e._e()])})),0),e._v(" "),t("div",{staticClass:"flex gap-1 items-center"},[t("el-input",{attrs:{placeholder:"Send your message..."},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage.apply(null,arguments)}},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),t("button",{staticClass:"flex gap-1 items-center bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-lg",on:{click:e.sendMessage}},[t("i",{staticClass:"el-icon-s-promotion"}),e._v(" "),t("span",[e._v("Send")])])],1)])}),[],!1,null,"028a7f52",null);t.default=component.exports},776:function(e,t,n){"use strict";n.r(t);n(21);var r=n(4),o=(n(44),n(3)),c={components:{Conversation:n(709).default},layout:"dashboard",data:function(){return{conversation:{}}},mounted:function(){this.getConversation()},methods:{getConversation:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=null,t.prev=1,n=o.Loading.service({fullscreen:!0,background:"#ffffffe6"}),t.next=5,e.$axios.get("/conversation-chat/".concat(e.$route.params.id));case 5:r=t.sent,e.conversation=r.data;case 7:return t.prev=7,e.$nextTick((function(){n.close()})),t.finish(7);case 10:case"end":return t.stop()}}),t,null,[[1,,7,10]])})))()}}},l=n(15),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t("h3",[e._v(" "+e._s(e.conversation.name)+" ")]),e._v(" "),t("Conversation",{staticClass:"mt-[10px]",attrs:{type:"admin",conversation:e.conversation}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);