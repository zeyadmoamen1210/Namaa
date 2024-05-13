<template>
  <div class="bg-grey-lighter p-10 pt-24">
    <div class="container mx-auto">
      <div>
        <h2 class="after:content-[' '] after:absolute after:top-[-10px]  after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">
          {{$t('News.The latest news of namaa company')}}
        </h2>
        <p class="text-grey font-normal max-w-[800px] mb-10">
          {{$t('News.All news for company related of technical and software')}}
        </p>
        <div v-if="news.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] md:px-10">
          <div v-for="item in news" :key="item._id">
            <NewsCard :to="`/news/${item._id}`" :editable="false" :item="item" @getNews="getNews" />
          </div>
        </div>
        <NoData v-else />
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from "~/components/LandingPage/NewsCard.vue";
import {Loading} from "element-ui";
import NoData from "~/components/layouts/NoData.vue";

export default {
  components: {
    NoData,
    NewsCard
  },
  data() {
    return {
      news: []
    }
  },
  mounted() {
    this.getNews();
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
