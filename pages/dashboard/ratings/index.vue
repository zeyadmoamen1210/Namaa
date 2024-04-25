<template>
  <div>
    <div class="flex items-center justify-between mb-5 flex-wrap gap-[10px]">
      <h5 class="text-2xl font-semibold mb-0">Ratings</h5>
      <div class="flex gap-3 items-center">
        <div class="flex gap-x-[5px] items-center">
          <img src="@/assets/imgs/langs.svg" alt="">
          <button @click="$i18n.setLocale('en')" v-if="$i18n.locale === 'ar'">EN</button>
          <button @click="$i18n.setLocale('ar')" v-if="$i18n.locale === 'en'">AR</button>
        </div>
        <nuxt-link tag="button" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" to="/dashboard/ratings/add" >Add Ratings</nuxt-link>
      </div>
    </div>
    <div v-if="ratings.length > 0" class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[30px] ">
      <div v-for="item in ratings" :key="item._id">
        <RatingCard :to="`/dashboard/ratings/${item._id}`" :editable="true" :item="item" @getRatings="getRatings" />
      </div>
    </div>
    <NoData v-else />
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';
import NoData from "~/components/layouts/NoData.vue";
import RatingCard from "~/components/LandingPage/CustomerCard.vue";

export default {
  layout: 'dashboard',
  components: {
    RatingCard,
    NoData,
  },
  mounted() {
    this.getRatings();
  },
  data() {
    return {
      ratings: []
    }
  },
  methods: {
    async getRatings() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const ratings = await this.$axios.get('/rates');
        this.ratings = ratings.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  }
}
</script>
