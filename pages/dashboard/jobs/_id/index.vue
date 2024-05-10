<template>
  <div>
    <div>
      <img class="w-full max-w-[300px] object-cover" :src="job.image" alt="">
    </div>
    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">Arabic Title</h3>
      <p>
        {{job.title_AR}}
      </p>
    </div>
    <div class="mb-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">English Title</h3>
      <p>
        {{job.title_EN}}
      </p>
    </div>

    <div class="mb-4">
      <h3 class="font-semibold text-sm text-[#4f46e5]">Arabic Description</h3>
      <ul class="mt-2" style="list-style: disc; list-style-position: inside">
        <li v-for="(descriptionsAR, index) in job.description_AR" :key="index">
          {{descriptionsAR}}
        </li>
      </ul>
    </div>

    <div class="mb-4">
      <h3 class="font-semibold text-sm text-[#4f46e5]">English Description</h3>
      <ul class="mt-2" style="list-style: disc; list-style-position: inside">
        <li v-for="(descriptionEN, index) in job.description_EN" :key="index">
          {{descriptionEN}}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';

export default {
  layout: 'dashboard',
  mounted() {
    this.getJob();
  },
  methods: {
    async getJob() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const job = await this.$axios.get(`/jobs/${this.$route.params.id}`);
        this.job = job.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  },
  data() {
    return {
      job: {}
    }
  },
}
</script>
