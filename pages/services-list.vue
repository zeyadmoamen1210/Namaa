<template>
  <div>
    <ServiceBanner :title="$i18n.locale === 'ar' ? 'الخدمات' : 'Services'" />
    <div class="container mx-auto p-10 py-24">
      <ServiceText />

      <div class="p-4 px-7 bg-grey-light rounded-2xl">
        <h4 class="text-primary text-xl font-bold mb-4"> {{$t('Services.Our Services')}} </h4>
        <div class="flex gap-[60px] flex-col md:flex-row">
          <div class="lg:min-w-[290px]">
            <ServiceNav :serviceLinks="services.map(e => {
      return {titleEn: e.title_EN , titleAr: e.title_AR , id: e._id}
    })" :key="$route.params.id" />
          </div>
          <div>
            <nuxt-child :targetData="services.find(e => e._id === $route.params.id)" :key="$route.params.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceBanner from "~/components/LandingPage/Services/ServiceBanner.vue";
import ServiceText from "~/components/LandingPage/Services/ServiceText.vue";
import ServiceNav from "~/components/LandingPage/Services/ServiceNav.vue";
import {Loading} from "element-ui";

export default {
  components: {ServiceText, ServiceBanner, ServiceNav},
  methods: {
    async getServices() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const services = await this.$axios.get('/services');
        this.services = services.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  },
  data() {
    return {
      services: [],
      targetData: null,
    }
  },
  async mounted() {
    await this.getServices();
    this.targetData = this.services.find(ele => ele._id == this.$route.params.id)
  }
}
</script>
