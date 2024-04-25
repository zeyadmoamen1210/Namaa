<template>
  <div>
    <div class="flex items-center justify-between mb-5 flex-wrap gap-[10px]">
      <h5 class="text-2xl font-semibold mb-0">Services</h5>
      <div class="flex gap-3 items-center">
        <div class="flex gap-x-[5px] items-center">
          <img src="@/assets/imgs/langs.svg" alt="">
          <button @click="$i18n.setLocale('en')" v-if="$i18n.locale === 'ar'">EN</button>
          <button @click="$i18n.setLocale('ar')" v-if="$i18n.locale === 'en'">AR</button>
        </div>
        <nuxt-link tag="button" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" to="/dashboard/services/add" >Add Service</nuxt-link>
      </div>
    </div>
    <div v-if="services.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] ">
      <div v-for="service in services" :key="service._id">
        <ServiceCard @getServices="getServices" :item="service" :to="`/dashboard/services/${service._id}`" title="Infrastructures" img="https://i.ibb.co/VQH04YG/0icon-1.png" :editable="true" />
      </div>
    </div>
    <NoData v-else />
  </div>
</template>

<script>
import ServiceCard from "~/components/LandingPage/ServiceCard.vue";
import { Notification, Loading } from 'element-ui';
import NoData from "~/components/layouts/NoData.vue";

export default {
  layout: 'dashboard',
  components: {
    NoData,
    ServiceCard,
  },
  mounted() {
    this.getServices();
  },
  data() {
    return {
      services: []
    }
  },
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
  }
}
</script>
