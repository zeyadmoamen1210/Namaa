<template>
  <div class="bg-white p-10 relative z-[3] overflow-hidden">
    <div class="container mx-auto">
      <div>
        <h2 class="after:content-[' '] after:absolute after:top-[-10px]  after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">
          {{$t('About Us.Certificates for Namaa')}}
        </h2>
        <p class="text-grey font-normal max-w-[800px] text-sm mb-14">
          {{$t('About Us.Cetrificate for Namaa description')}}
        </p>
      </div>

      <div v-if="certificates.length > 0" class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-[30px] md:px-10">
        <div v-for="item in certificates" :key="item._id">
          <CertificateCard :to="`/certificates/${item._id}`" :editable="false" :item="item" @getCertificate="getCertificate" />
        </div>
      </div>
      <NoData v-else />

    </div>
  </div>
</template>

<script>
import CertificateCard from "~/components/LandingPage/AboutUs/CertificateCard.vue";
import NoData from "~/components/layouts/NoData.vue";
import {Loading} from "element-ui";

export default {
  components: {
    CertificateCard,
    NoData
  },
  data() {
    return {
      certificates: []
    }
  },
  mounted() {
    this.getCertificate();
  },
  methods: {
    async getCertificate() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const certificates = await this.$axios.get('/certificates');
        this.certificates = certificates.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  }
}
</script>


<style lang="postcss">

</style>
