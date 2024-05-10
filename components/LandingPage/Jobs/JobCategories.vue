<template>
  <div class="bg-grey-lighter p-10 pt-24">
    <div class="container mx-auto">
      <div>
        <h2 class="after:content-[' '] after:absolute after:top-[-10px]  after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">
          {{$t('Jobs.Join our creative team')}}
        </h2>
        <p class="text-grey font-normal max-w-[800px] mb-10">
          {{$t('Jobs.description')}}
        </p>
        <div>
          <JobCard v-for="(job, index) in jobs" :key="index" :item="job" :to="`/jobs/${job._id}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobCard from "~/components/LandingPage/JobCard.vue";
import {Loading} from "element-ui";

export default {
  components: {
    JobCard
  },
  mounted() {
    this.getJobs()
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
        const jobs = await this.$axios.get('/jobs');
        this.jobs = jobs.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  }
}
</script>
