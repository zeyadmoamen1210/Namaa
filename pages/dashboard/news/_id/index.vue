<template>
  <div>
    <img :src="newsItem.image" class="max-w-[300px] w-full object-cover" alt="">

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">English Name</h3>
      <p>
        {{newsItem.news_title_EN}}
      </p>
    </div>

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">Arabic Name</h3>
      <p>
        {{newsItem.news_title_AR}}
      </p>
    </div>

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">English Description</h3>
      <p>
        {{newsItem.news_desc_EN}}
      </p>
    </div>

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">Arabic Description</h3>
      <p>
        {{newsItem.news_desc_AR}}
      </p>
    </div>

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">News Date</h3>
      <p>
        {{ new Date(newsItem.date).toLocaleDateString() }}
      </p>
    </div>

    <div>
      <div class="mb-5 mt-5" v-for="(tag, index) in newsItem.news_tags_EN" :key="index">
        <h3 class="font-semibold text-sm text-[#4f46e5]">English Tag #{{index+1}} </h3>
        <p>
          {{tag}}
        </p>
      </div>

      <div class="mb-5 mt-5" v-for="(tag, index) in newsItem.news_tags_AR" :key="index">
        <h3 class="font-semibold text-sm text-[#4f46e5]">Arabic Tag #{{index+1}}</h3>
        <p>
          {{tag}}
        </p>
      </div>
    </div>

  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';

export default {
  layout: 'dashboard',
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
    }
  },
  data() {
    return {
      newsItem: {}
    }
  },
}
</script>
