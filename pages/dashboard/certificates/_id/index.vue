<template>
  <div>
    <img :src="certificate.image" class="max-w-[300px] w-full object-cover" alt="">

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">Arabic Name</h3>
      <p>
        {{certificate.title_AR}}
      </p>
    </div>

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">English Name</h3>
      <p>
        {{certificate.title_EN}}
      </p>
    </div>

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">English Description</h3>
      <p>
        {{certificate.description_EN}}
      </p>
    </div>

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">Arabic Description</h3>
      <p>
        {{certificate.description_AR}}
      </p>
    </div>

  </div>
</template>

<script>
import { Loading } from 'element-ui';

export default {
  layout: 'dashboard',
  mounted() {
    this.getCertificate();
  },
  methods: {
    async getCertificate() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const certificate = await this.$axios.get(`/certificates/${this.$route.params.id}`);
        this.certificate = certificate.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  },
  data() {
    return {
      certificate: {}
    }
  },
}
</script>
