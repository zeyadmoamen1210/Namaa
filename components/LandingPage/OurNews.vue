<template>
  <div class="bg-grey-lighter pt-24 pb-14" v-loading="loading">
    <div class="container mx-auto">
      <div class="px-10">
        <h2 class="after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-primary after:w-[70px] relative text-red text-3xl font-bold py-2 pb-5" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'"> {{$t('News.News')}} </h2>
        <p class="text-grey text-sm max-w-[700px]">
          {{$t('News.News description')}}
        </p>
      </div>
      <div class="mt-[10px] px-6" dir="ltr">
        <client-only v-if="news.length > 0">
          <!-- Swiper component -->
          <swiper
            ref="swiperComponentRef"
            :options="swiperOptions"
            class="pb-[20px]"
          >
            <swiper-slide class="py-6 px-3" v-for="item in news" :key="item._id">
              <NewsCard :to="`/news/${item._id}`" :editable="false" :item="item" @getNews="getNews" />
            </swiper-slide>
            <div class="bottom-[-5px] swiper-pagination" slot="pagination"></div>
          </swiper>
        </client-only>
        <NoData v-else />
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from "~/components/LandingPage/NewsCard.vue";
import NoData from "~/components/layouts/NoData.vue";
import {Loading} from "element-ui";

export default {
  components: {
    NoData,
    NewsCard
  },
  mounted() {
    this.getNews();
  },
  methods: {
    async getNews() {
      try {
        this.loading = true;
        const news = await this.$axios.get('/news');
        this.news = news.data;
      } finally {
        this.$nextTick(() => {
          this.loading = false;
        });
      }
    }
  },
  data() {
    return {
      loading: false,

      news: [],
      swiperOptions: {
        // loop: true,
        slidesPerView: 4,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      }
    }
  }
}
</script>

<style>

</style>
