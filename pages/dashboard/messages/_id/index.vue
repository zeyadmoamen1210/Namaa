<template>
  <div>
    <img :src="messageItem.image" class="max-w-[300px] w-full object-cover" alt="">

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">Arabic Name</h3>
      <p>
        {{messageItem.name_AR}}
      </p>
    </div>

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">English Name</h3>
      <p>
        {{messageItem.name_EN}}
      </p>
    </div>

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">English Position</h3>
      <p>
        {{messageItem.position_EN}}
      </p>
    </div>

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">Arabic Position</h3>
      <p>
        {{messageItem.position_AR}}
      </p>
    </div>

  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';

export default {
  layout: 'dashboard',
  mounted() {
    this.getMessageItem();
  },
  methods: {
    async getMessageItem() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const messageItem = await this.$axios.get(`/messages/${this.$route.params.id}`);
        this.messageItem = messageItem.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  },
  data() {
    return {
      messageItem: {}
    }
  },
}
</script>
