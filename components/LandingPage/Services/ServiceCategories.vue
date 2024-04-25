<template>
  <div class="bg-grey-lighter p-10 pt-24">
    <div class="container mx-auto">
      <div>
        <ServiceText />
        <div v-if="services.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] px-10">
          <div v-for="service in services" :key="service._id">
            <ServiceCard @getServices="getServices" :item="service" :to="`/services-list/${service._id}`" :editable="false" />
          </div>
        </div>
        <NoData v-else />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCard from "~/components/LandingPage/ServiceCard.vue";
import ServiceText from "~/components/LandingPage/Services/ServiceText.vue";
import NoData from "~/components/layouts/NoData.vue";
import {Loading} from "element-ui";
export default {
  data() {
    return {
      services: []
    }
  },
  mounted() {
    this.getServices();
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
  },
  components: {
    NoData,
    ServiceCard,
    ServiceText
  }
}
</script>
