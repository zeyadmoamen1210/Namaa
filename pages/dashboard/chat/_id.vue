<template>
  <div>
    <h3> {{ conversation.name }} </h3>
    <Conversation type="admin" :conversation="conversation" class="mt-[10px]"/>
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';
import Conversation from '@/components/dashboard/Conversation.vue';

export default {
  components: {
    Conversation
  },
  layout: 'dashboard',
  data() {
    return {
      conversation: {}
    }
  },
  mounted() {
    this.getConversation()
  },
  methods: {
    async getConversation() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const conversation = await this.$axios.get(`/conversation-chat/${this.$route.params.id}`);
        this.conversation = conversation.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  }
}
</script>
