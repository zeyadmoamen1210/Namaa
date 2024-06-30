<template>
  <div>
    <CertificateBanner :prevPageUrl="`/about-us`" :title="$i18n.locale === 'ar' ? `الشهادات / ${certificate.title_AR}` : `Certificates / ${certificate.title_EN}`" />
    <CertificateDetails :item="certificate" />
    <OurClients bgClass="bg-white" class="py-20" />
    <OurCustomers bgClass="bg-grey-lighter" />
  </div>
</template>
<script>
import OurCustomers from "~/components/LandingPage/OurCustomers.vue";
import OurClients from "~/components/LandingPage/OurClients.vue";
import CertificateBanner from "~/components/LandingPage/Certificates/CertificateBanner.vue";
import CertificateDetails from "~/components/LandingPage/Certificates/CertificateDetails.vue";
import {Loading} from "element-ui";

export default {
  components: {
    OurCustomers,
    OurClients,
    CertificateBanner,
    CertificateDetails
  },
  data() {
    return {
      certificate: {}
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
        const certificate = await this.$axios.get(`/certificates/${this.$route.params.id}`);
        this.certificate = certificate.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  }
}
</script>
