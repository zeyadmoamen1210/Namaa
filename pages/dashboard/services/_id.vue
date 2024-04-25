<template>
  <div>
    <div>
      <img class="max-w-[100px] object-cover" :src="service.icon" alt="">
    </div>
    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">Arabic Title</h3>
      <p>
        {{service.title_AR}}
      </p>
    </div>
    <div class="mb-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">English Title</h3>
      <p>
        {{service.title_EN}}
      </p>
    </div>

    <div class="mb-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">Arabic Description</h3>
      <p>
        {{service.description_AR}}
      </p>
    </div>
    <div class="mb-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">English Description</h3>
      <p>
        {{service.description_EN}}
      </p>
    </div>

    <div>
      <div v-for="(item, index) in service.sub_services_AR" :key="index">
        <h3>Sub service #{{index+1}}</h3>
        <div class="mb-5 mt-5">
          <h3 class="font-semibold text-sm text-[#4f46e5]">Title AR</h3>
          <p>
            {{item.sub_services_title_AR}}
          </p>
        </div>
        <div class="mb-5">
          <h3 class="font-semibold text-sm text-[#4f46e5]">Title EN</h3>
          <p>
            {{service.sub_services_EN[index].sub_services_title_EN}}
          </p>
        </div>
        <div class="mb-5">
          <h3 class="font-semibold text-sm text-[#4f46e5]">Description AR</h3>
          <p>
            {{item.sub_services_description_AR}}
          </p>
        </div>
        <div class="mb-5">
          <h3 class="font-semibold text-sm text-[#4f46e5]">Description EN</h3>
          <p>
            {{service.sub_services_EN[index].sub_services_description_EN}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';

export default {
  layout: 'dashboard',
  mounted() {
    this.getService();
  },
  methods: {
    async getService() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const service = await this.$axios.get(`/services/${this.$route.params.id}`);
        this.service = service.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  },
  data() {
    return {
      service: {}
    }
  },
}
</script>
