<template>
  <div dir="ltr" v-loading="loading" class="rounded-3xl bg-[#1B194F] overflow-hidden max-w-[290px] h-[350px] w-[90vw] fixed bottom-[40px] right-[40px] md:bottom-[70px] md:right-[70px] z-[99]">

   <div class="relative">
     <div class="p-[10px] bg-[#1B194F]">
       <h6 class="text-center text-[#fff]"> {{ $i18n.locale === 'ar' ? 'شركة نماء' : 'Namaa Technology' }} </h6>
     </div>

      <div v-if="intro" class="chat p-3 rounded-3xl bg-[#fff]">
        <div v-if="!currQuestion" class="flex gap-2 flex-col">
          <button @click="currQuestion = question" v-for="(question, index) in commonQuestions.slice(0,3)" :key="index" class="cursor-pointer mt-3 p-2 border border-[#2c2f73] text-[#2c2f73] rounded-lg text-sm"> {{question.question_tile}} </button>
          <button @click="intro = false, currQuestion = null" class="mt-3 p-2 border border-[#2c2f73] text-[#2c2f73] rounded-lg text-sm">
            {{ $i18n.locale === 'ar' ? 'أخري' : 'Others' }}
          </button>
        </div>
        <div v-if="currQuestion">
          <button @click="currQuestion = null" class="mb-3 text-[#2c2f73] rounded-lg text-sm">
            <i class="el-icon-back"></i>
            {{ $i18n.locale === 'ar' ? 'الرجوع' : 'back' }}
          </button>

          <h6 class="text-[#2c2f73] font-semibold mb-2"> {{ currQuestion.question_tile }} </h6>
          <p>
            {{ currQuestion.answer }}
          </p>
        </div>
      </div>

      <div v-if="!intro && hasConversation">
        <section class="chat p-3 rounded-3xl bg-[#fff] pr-0">
          <div class="max-h-[233px] overflow-y-scroll">
            <!-- <div class="bg-[#fff]">
          <h6 class="text-center text-[#b9b9b9] text-[14px]"> {{ new Date().toLocaleString() }} </h6>
        </div> -->
        <div v-for="(item, index) in conversation" key="index">
          <div v-if="item.sender === 'Admin'" class="chat__message  chat__message_A" >
            <div class="chat__content">
              <p> {{ item.message }} </p>
            </div>
            <!-- <span class="self-center text-[#697ce8] text-[13px]">05:20</span> -->
          </div>

          <div v-if="item.sender !== 'Admin'" class="chat__message chat__message_B" >
            <div class="chat__content">
              <p> {{ item.message }} </p>
            </div>
            <!-- <span class="self-center text-[#697ce8] text-[13px]">05:20</span> -->
          </div>
        </div>
          </div>

        </section>

        <div class="absolute bottom-[15px] left-[15px] flex gap-[1px] items-center outline-0 justify-between" style="width: calc(100% - 20px)">
          <div>
            <input @keydown.enter="sendMessage" v-model="message" class="rounded-full p-2 px-4 bg-[#f4f4f4d9]" type="text" :placeholder="$i18n.locale === 'ar' ? 'إرسل رسالة' : 'Send a message'">
          </div>
          <div>
            <button @click="sendMessage" class="bg-[#1B194F] w-[40px] h-[40px] leading-[40px] rounded-full">
              <i class="el-icon-s-promotion text-[#fff]"></i>
              <!-- <img class="w-[20px] block mx-auto" src="@/assets/imgs/send-white.svg" alt=""> -->
            </button>
          </div>
        </div>
      </div>

      <div v-else-if="!intro && !hasConversation" class="chat p-3 rounded-3xl bg-[#fff]">
          <el-form :model="addConversation" ref="addConversationRef">
            <el-form-item class="mb-[18px]" prop="name" :rules="[{required: true, message: 'This is required'}]">
              <h6>{{ $i18n.locale === 'ar' ? 'الإسم' : 'Your Name' }}</h6>
              <el-input v-model="addConversation.name"></el-input>
            </el-form-item>
            <el-form-item class="mb-[18px]" prop="sender" :rules="[{required: true, message: 'This is required'}]">
              <h6>{{ $i18n.locale === 'ar' ? 'البريد الإلكتروني' : 'Your Email' }}</h6>
              <el-input v-model="addConversation.sender"></el-input>
            </el-form-item>
          </el-form>
          <div class="flex gap-2">
            <button @click="submitCreateConversation" class="flex-1 mt-3 p-2 text-[#fff] bg-[#2c2f73] rounded-lg text-sm border border-[#2c2f73]">
              {{ $i18n.locale === 'ar' ? 'بدء المحادثة' : 'Start Conversation' }}
            </button>
            <button @click="intro = true, currQuestion = null" class="mt-3 p-2 text-[#2c2f73] rounded-lg text-sm border border-[#2c2f73]">
              {{ $i18n.locale === 'ar' ? 'رجوع' : 'back' }}
            </button>
          </div>
      </div>
   </div>
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';

export default {
  data() {
    return {
      hasConversation: false,
      addConversation: {},
      loading: false,
      conversation: [],
      message: null,
      intro: true,
      commonQuestions: [],
      currQuestion: null
    }
  },
  async mounted() {
    this.getCommonQuestions();
    await this.getChatMessages();
  },
  methods: {
    async getCommonQuestions() {
      this.loading = true;
      try {
        const questions = await this.$axios.get('/questions-chat');
        this.commonQuestions = questions.data;
      } finally {
        this.loading = false;
      }
    },
    async sendMessage() {
      if(this.loading) return;
      if(!this.message || this.message.trim().toString().length === 0) return;
      this.saveMessage();
    },
    async saveMessage() {
      this.loading = true;
      try {
        const conversationRes = JSON.parse(localStorage.getItem('conversation'));

        await this.$axios.post('/chat-messages', {conversation: conversationRes._id, sender: conversationRes.sender, message: this.message});
        this.conversation.push(this.message.trim());

        const chatSection = document.querySelector('.overflow-y-scroll');

        this.message = null;
        await this.getChatMessages();

        if(chatSection) {
          await this.$nextTick();
          chatSection.scrollTo({top: chatSection.scrollHeight , behavior: 'smooth'});
        }

      } catch {
        Notification.error({
          title: 'Error',
          message: 'There is something wrong'
        });
      } finally {
        this.loading = false;
      }
    },
    async getChatMessages() {
      const conversationRes = JSON.parse(localStorage.getItem('conversation'));
      if(conversationRes) {
        this.loading = true;
        try {
          const conversation = await this.$axios.get(`/chat-messages/${conversationRes._id}`);
          this.conversation = conversation.data;
          this.hasConversation = true;
          setTimeout(() => {
            const chatSection = document.querySelector('.overflow-y-scroll')
            if(chatSection) {
              chatSection.scrollTo({top: chatSection.scrollHeight , behavior: 'smooth'});
            }
          }, 200);

        } finally {
          this.loading = false;
        }
      }else {
        this.hasConversation = false
      }
    },
    submitCreateConversation() {
      this.$refs.addConversationRef.validate(async (valid) => {
        if(valid) {
          this.loading = true;
          try {
            const res = await this.$axios.post(`/conversation-chat`, this.addConversation);
            Notification.success({
              title: 'Success',
              message: 'The Conversations added successfully',
            });
            this.hasConversation = false;
            localStorage.setItem('conversation', JSON.stringify(res.data));
            console.log(JSON.stringify(res.data))
            this.getChatMessages();
          } catch(error) {
            console.log(error);
            Notification.error({
              title: 'Error',
              message: 'There is something wrong'
            });
          } finally {
            this.loading = false;
          }
        }
      })
    }
  }
}
</script>

<style scoped>
*, *::before {
  box-sizing: border-box;
}

.chat {
  display: flex;
  flex-direction: column;
  height: 309px;
  overflow: hidden;
  color: #313131;
  position: relative;
  overflow-y: scroll;
}



.chat p {
  margin: 0;
  padding: 0;
}

.chat__content {
  flex: 0 1 auto;
  padding: 8px 16px;
  font-size: 13px;
  margin: 0 0.5rem;
  background: #eaeaea;
  border-radius: 0 50px 50px 50px;
}
.chat__message_B .chat__content {
  border-radius: 50px 0 50px 50px;
  background: #2c2f73;
  color: #fff;
}
.chat__message {
  width: 95%;
  display: flex;
  align-items: flex-end;
  transform-origin: 0 100%;
  padding-top: 0;
  transform: scale(0);
  max-height: 0;
  overflow: hidden;
  animation: message 0.15s ease-out 0s forwards;
  --bgcolor: #d8d8d8;
  --radius: 8px 8px 8px 0;
}

.chat__message_B {
  flex-direction: row-reverse;
  text-align: right;
  align-self: flex-end;
  transform-origin: 100% 100%;
  --bgcolor: #d2ecd4;
  --radius: 8px 8px 0 8px;
}

.chat__message::before {
  content: "";
  flex: 0 0 34px;
  aspect-ratio: 1/1;
  background: var(--bgcolor);
  border-radius: 50%;
  align-self: start;
}

.chat__message.chat__message_A::before {
  background-image: url(@/assets/imgs/customer-service.svg);
  background-size: cover;
  background-color: #fff !important;
}

.chat__message.chat__message_B::before {
  background-image: url(@/assets/imgs/user.svg);
  background-size: cover;
  background-color: #fff !important;
}

@keyframes message {
  0% {
    max-height: 100vmax;
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    max-height: 100vmax;
    overflow: visible;
    padding-top: 1rem;
  }
}


/* width */
.chat::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.chat::-webkit-scrollbar-track {
  background: none;
}

/* Handle */
.chat::-webkit-scrollbar-thumb {
  background: none;
}

/* Handle on hover */
.chat::-webkit-scrollbar-thumb:hover {
  background: none;
}


.el-loading-mask .el-loading-spinner svg {
  margin: auto !important;
}

</style>
<script setup>
</script>
