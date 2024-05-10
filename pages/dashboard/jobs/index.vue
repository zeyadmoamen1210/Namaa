<template>
  <div>
    <div class="flex items-center justify-between mb-5 flex-wrap gap-[10px]">
      <h5 class="text-2xl font-semibold mb-0">Jobs</h5>
      <div class="flex gap-3 items-center">
        <div class="flex gap-x-[5px] items-center">
          <img src="@/assets/imgs/langs.svg" alt="">
          <button @click="$i18n.setLocale('en')" v-if="$i18n.locale === 'ar'">EN</button>
          <button @click="$i18n.setLocale('ar')" v-if="$i18n.locale === 'en'">AR</button>
        </div>
        <nuxt-link tag="button" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" to="/dashboard/jobs/add" >Add Job</nuxt-link>
      </div>
    </div>
    <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
      <div v-if="jobs.length > 0" class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-[30px] ">
        <div v-for="(item, index) in jobs" :key="item._id">
          <job-card :to="`/dashboard/jobs/${item._id}`" :editable="true" :item="item" @getJobs="getJobs" />
          <hr v-if="index !== jobs.length - 1 " />
        </div>
      </div>
      <NoData v-else />
    </div>
  </div>
</template>

<script>
import NoData from "~/components/layouts/NoData.vue";
import {Loading} from "element-ui";
import JobCard from "~/components/LandingPage/JobCard.vue";

export default {
  components: {JobCard, NoData},
  layout: 'dashboard',
  mounted() {
    this.getJobs();
  },
  data() {
    return {
      jobs: []
    }
  },
  methods: {
    async getJobs() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const news = await this.$axios.get('/jobs');
        this.jobs = news.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  }
}
</script>
