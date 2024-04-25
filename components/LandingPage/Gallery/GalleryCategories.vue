<template>
  <div class="bg-grey-lighter p-10 pt-24">
    <div class="container mx-auto">
      <div>
        <h2 class="after:content-[' '] after:absolute after:top-[-10px]  after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">
          {{$t('Gallery.Photo and video gallery')}}
        </h2>
        <p class="text-grey font-normal max-w-[800px] mb-10">
          {{$t('Gallery.description')}}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] px-10">
          <div v-for="(item, index) in gallery" :key="index">
            <GalleryCard @click.native="openGalleryImg(item)" :editable="false" :item="item" @getGallery="getGallery" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GalleryCard from "~/components/LandingPage/GalleryCard.vue";
import {Loading, Notification} from "element-ui";

import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import Vue from 'vue'
Vue.use(VueViewer)

export default {
  components: {
    GalleryCard,
  },
  mounted() {
    this.getGallery();
  },
  data() {
    return {
      gallery: [],
      galleryDetailsImgs: []
    }
  },
  methods: {
    async openGalleryImg(item) {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const gallery = await this.$axios.get(`/gallery-folders/${item._id}`);
        this.galleryDetailsImgs = gallery.data.images;
        if(this.galleryDetailsImgs.length === 0) {
          Notification.error({
            title: this.$i18n.locale === 'ar' ? 'لا يوجد صور' : 'No Images',
            message: this.$i18n.locale === 'ar' ? 'لا يوجد صور في هذا المعرض' : 'there is no images in that gallery'
          });
          return;
        }
        this.$viewerApi({
          images: this.galleryDetailsImgs.map(ele => ele.image),
        })
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    },
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
