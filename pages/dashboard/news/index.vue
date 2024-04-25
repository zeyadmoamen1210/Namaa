<template>
  <div>
    <div class="flex items-center justify-between mb-5 flex-wrap gap-[10px]">
      <h5 class="text-2xl font-semibold mb-0">News</h5>
      <div class="flex gap-3 items-center">
        <div class="flex gap-x-[5px] items-center">
          <img src="@/assets/imgs/langs.svg" alt="">
          <button @click="$i18n.setLocale('en')" v-if="$i18n.locale === 'ar'">EN</button>
          <button @click="$i18n.setLocale('ar')" v-if="$i18n.locale === 'en'">AR</button>
        </div>
        <nuxt-link tag="button" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" to="/dashboard/news/add" >Add News</nuxt-link>
      </div>
    </div>
    <div v-if="news.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] ">
      <div v-for="item in news" :key="item._id">
        <NewsCard :to="`/dashboard/news/${item._id}`" :editable="true" :item="item" @getNews="getNews" />
      </div>
    </div>
    <NoData v-else />
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';
import NoData from "~/components/layouts/NoData.vue";
import NewsCard from "~/components/LandingPage/NewsCard.vue";

export default {
  layout: 'dashboard',
  components: {
    NewsCard,
    NoData,
  },
  mounted() {
    this.getNews();
  },
  data() {
    return {
      news: []
    }
  },
  methods: {
    async getNews() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const news = await this.$axios.get('/news');
        this.news = news.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  }
}
</script>
