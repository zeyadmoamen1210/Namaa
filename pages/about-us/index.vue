<template>
  <div>
    <AboutUsBanner :title="$i18n.locale === 'ar' ? 'عن الشركة' : 'About Us'" />
    <AboutUs :info="companyInfo" />
    <WhyUs />
    <OurObjectives :info="companyInfo" />
    <Certificates />
    <OurClients bgClass="bg-[#FAFAFA]" class="py-20" />
    <OurCustomers bgClass="bg-[#EAEAF1]" />
  </div>
</template>

<script>
import AboutUsBanner from "~/components/LandingPage/AboutUs/AboutUsBanner.vue";
import AboutUs from "~/components/LandingPage/AboutUs/index.vue";
import WhyUs from "~/components/LandingPage/AboutUs/why-us.vue";
import OurObjectives from "~/components/LandingPage/AboutUs/our-objectives.vue";
import Certificates from "~/components/LandingPage/AboutUs/certificates.vue";
import OurCustomers from "~/components/LandingPage/OurCustomers.vue";
import OurClients from "~/components/LandingPage/OurClients.vue";
import {Loading} from "element-ui";

export default {
  components: {
    OurClients, OurCustomers,
    Certificates,
    OurObjectives,
    WhyUs,
    AboutUsBanner,
    AboutUs
  },
  data() {
    return {
      companyInfo: {},
    }
  },
  mounted() {
    this.getCompanyInfo();
  },
  methods: {
    async getCompanyInfo() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const companyInfo = await this.$axios.get('/company_info');
        this.companyInfo = companyInfo.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  }
}
</script>
