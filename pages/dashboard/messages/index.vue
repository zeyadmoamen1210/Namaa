<template>
  <div>
    <div class="flex items-center justify-between mb-5 flex-wrap gap-[10px]">
      <h5 class="text-2xl font-semibold mb-0">Messages</h5>
      <div class="flex gap-3 items-center">
        <div class="flex gap-x-[5px] items-center">
          <img src="@/assets/imgs/langs.svg" alt="">
          <button @click="$i18n.setLocale('en')" v-if="$i18n.locale === 'ar'">EN</button>
          <button @click="$i18n.setLocale('ar')" v-if="$i18n.locale === 'en'">AR</button>
        </div>
        <nuxt-link tag="button" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" to="/dashboard/messages/add" >Add Message</nuxt-link>
      </div>
    </div>

    <div v-if="messages.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px] ">
      <div v-for="item in messages" :key="item._id">
        <MessageCard :to="`/dashboard/messages/${item._id}`" :editable="true" :item="item" @getMessages="getMessages" />
      </div>
    </div>
    <NoData v-else />

  </div>
</template>

<script>
import NoData from "~/components/layouts/NoData.vue";
import MessageCard from "~/components/LandingPage/MessageCard.vue";
import {Loading} from "element-ui";

export default {
  components: {MessageCard, NoData},
  layout: 'dashboard',
  mounted() {
    this.getMessages();
  },
  data() {
    return {
      messages: []
    }
  },
  methods: {
    async getMessages() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const news = await this.$axios.get('/messages');
        this.messages = news.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  }
}
</script>
