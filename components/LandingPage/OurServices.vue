<template>
  <div class="bg-grey-lighter pt-24 pb-14" v-loading="loading">
    <div class="container mx-auto">
      <div class="flex gap-[30px] justify-between	px-10">
        <div>
          <h2 class="after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-primary after:w-[70px] relative text-red text-3xl font-bold py-2 pb-5" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'"> {{$t('Services.Services')}} </h2>
          <p class="text-grey text-sm max-w-[700px]">
            {{$t('Services.Services description')}}
          </p>
        </div>
        <div>

        </div>
      </div>
      <div class="mt-[10px] px-6" dir="ltr">
        <client-only v-if="services.length > 0">
          <!-- Swiper component -->
          <swiper
            ref="swiperComponentRef"
            :options="swiperOptions"
            class="pb-[20px] "
          >
            <swiper-slide class="py-6 px-3" v-for="service in services" :key="service._id">
              <ServiceCard @getServices="getServices" :item="service" :to="`/services-list/${service._id}`" :editable="false" />
            </swiper-slide>

            <div class="bottom-[-5px] swiper-pagination" slot="pagination"></div>
          </swiper>
        </client-only>
        <NoData v-else />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCard from "~/components/LandingPage/ServiceCard.vue";
import {Loading} from "element-ui";
import NoData from "~/components/layouts/NoData.vue";

export default {
  components: {NoData, ServiceCard},
  mounted() {
    this.getServices();
  },
  methods: {
    async getServices() {
      try {
        this.loading = true;
        const services = await this.$axios.get('/services');
        this.services = services.data;
      } finally {
        this.$nextTick(() => {
          this.loading = false;
        });
      }
    }
  },
  data() {
    return {
      loading: false,

      services: [],
      swiperOptions: {
        // loop: true,
        slidesPerView: 4,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      }
    }
  }
}
</script>

<style>

</style>
