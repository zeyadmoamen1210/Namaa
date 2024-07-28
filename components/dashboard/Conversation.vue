<template>
  <div class="border border-[#ddd] p-[10px]" >
    <div class="mb-[10px] chat-section">
      <div v-for="(item, index) in conversations" :key="index">
        <div v-if="item.sender != 'Admin'" >
          <div class="reciever">
            {{ item.message }}
          </div>
        </div>
        <div v-if="item.sender == 'Admin'" class="sender-container">
          <div class="sender">
            {{ item.message }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-1 items-center ">
      <el-input @keydown.native.enter="sendMessage" placeholder="Send your message..." v-model="message"></el-input>
      <button @click="sendMessage" class="flex gap-1 items-center bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-lg">
        <i class="el-icon-s-promotion"></i>
        <span>Send</span>
      </button>
    </div>
  </div>
</template>


<script>
import { Notification, Loading } from 'element-ui';

export default {
  props: {
    type: {
      required: true
    },
    conversation: {
      required: true,
    }
  },
  async mounted() {
    await this.getChatMessages();
    const chatSection = document.querySelector('.chat-section')
    if(chatSection) {
      await this.$nextTick();
      chatSection.scrollTo({top: chatSection.scrollHeight , behavior: 'smooth'});
    }
  },
  data() {
    return {
      message: null,
      loading: false,
      conversations: []
    }
  },
  methods: {
    async getChatMessages() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const chatMessages = await this.$axios.get(`/chat-messages/${this.$route.params.id}`);
        this.conversations = chatMessages.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    },
    async sendMessage() {
      if(this.loading) return;
      if(!this.message || this.message.trim().toString().length === 0) return;
      this.saveMessage();
    },
    async saveMessage() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });

        await this.$axios.post('/chat-messages', {conversation: this.conversation._id, sender: "Admin", message: this.message});
        this.conversations.push(this.message.trim());
        const chatSection = document.querySelector('.chat-section');

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
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  }
}
</script>

<style scoped lang="postcss">

.sender-container {
  display: flex;
  justify-content: flex-end;
}

.chat-section {
  height: calc(100vh - 200px);
  min-height: 400px;
  overflow-y: scroll;
}

.reciever {
  background-color: #eeeeee;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  margin: 10px 16px;
  width: fit-content;
  &::after {
    content: ' ';
    border-width: 10px;
    position: absolute;
    bottom: 3px;
    left: -10px;
    border-color: transparent #eeeeee #eeeeee transparent;
  }
}


.sender {
  background-color: #4f5184;
  color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  margin: 10px 16px;
  width: fit-content;
  &::after {
    content: ' ';
    border-width: 8px;
    position: absolute;
    bottom: 0;
    right: -8px;
    border-color: #4f5184 transparent transparent #4f5184;
  }
}

</style>
