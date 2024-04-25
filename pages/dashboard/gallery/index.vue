<template>
  <div>
    <div class="flex items-center justify-between mb-5 flex-wrap gap-[10px]">
      <h5 class="text-2xl font-semibold mb-0">Gallery</h5>
      <div class="flex gap-3 items-center">
        <div class="flex gap-x-[5px] items-center">
          <img src="@/assets/imgs/langs.svg" alt="">
          <button @click="$i18n.setLocale('en')" v-if="$i18n.locale === 'ar'">EN</button>
          <button @click="$i18n.setLocale('ar')" v-if="$i18n.locale === 'en'">AR</button>
        </div>
        <nuxt-link tag="button" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" to="/dashboard/gallery/add" >Add Gallery</nuxt-link>
      </div>
    </div>
    <div v-if="gallery.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] ">
      <div v-for="item in gallery" :key="item._id">
        <GalleryCard :to="`/dashboard/gallery/${item._id}`" :editable="true" :item="item" @getGallery="getGallery" />
      </div>
    </div>
    <NoData v-else />
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';
import NoData from "~/components/layouts/NoData.vue";
import GalleryCard from "~/components/LandingPage/GalleryCard.vue";

export default {
  layout: 'dashboard',
  components: {
    GalleryCard,
    NoData,
  },
  mounted() {
    this.getGallery();
  },
  data() {
    return {
      gallery: []
    }
  },
  methods: {
    async getGallery() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const gallery = await this.$axios.get('/gallery-folders');
        this.gallery = gallery.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  }
}
</script>
