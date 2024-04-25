<template>
  <div>
    <NewsBanner :title="$i18n.locale === 'ar' ? `الأخبار / ${newsItem.news_title_AR}` : `News / ${newsItem.news_title_EN}`" />
    <NewsDetails :item="newsItem" />
    <OurClients bgClass="bg-white" class="py-20" />
    <OurCustomers bgClass="bg-grey-lighter" />
  </div>
</template>
<script>
import OurCustomers from "~/components/LandingPage/OurCustomers.vue";
import OurClients from "~/components/LandingPage/OurClients.vue";
import NewsBanner from "~/components/LandingPage/News/NewsBanner.vue";
import NewsDetails from "~/components/LandingPage/News/NewsDetails.vue";
import {Loading} from "element-ui";

export default {
  components: {
    OurCustomers,
    OurClients,
    NewsBanner,
    NewsDetails
  },
  data() {
    return {
      newsItem: {}
    }
  },
  mounted() {
    this.getNewsItem();
  },
  methods: {
    async getNewsItem() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const newsItem = await this.$axios.get(`/news/${this.$route.params.id}`);
        this.newsItem = newsItem.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    },
  }
}
</script>
