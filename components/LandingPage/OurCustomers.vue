<template>
  <div :class="bgClass" class="pt-20 pb-14">
    <div class="container mx-auto">
      <div class="flex gap-[30px] justify-between	px-10">
        <div>
          <h2 class="after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-normal pt-2 pb-1" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">{{$t('Customers.Why customers love')}}</h2>
          <h2 class="text-red text-3xl font-bold pb-2 ">{{$t('Customers.working with us')}}</h2>
        </div>
        <div>
        </div>
      </div>

      <div class="mt-[10px] px-6" dir="ltr">
        <client-only>
          <!-- Swiper component -->
          <swiper
            ref="swiperComponentRef"
            :options="swiperOptions"
            class="pb-[20px]"
          >
            <swiper-slide v-for="rate in ratings" :key="rate._id" class="py-6 px-3">
              <CustomerCard :item="rate" to="/" :editable="false" />
            </swiper-slide>
            <div class="bottom-[-5px] swiper-pagination" slot="pagination"></div>
          </swiper>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerCard from "~/components/LandingPage/CustomerCard.vue";
import {Loading} from "element-ui";

export default {
  components: {CustomerCard},
  props: {
    bgClass: {
      required: false,
      type: String,
      default: 'bg-white'
    }
  },
  mounted() {
    this.getRatings();
  },
  methods: {
    async getRatings() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const ratings = await this.$axios.get('/rates');
        this.ratings = ratings.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  },
  data() {
    return {
      ratings: [],
      swiperOptions: {
        // loop: true,
        slidesPerView: 2,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        breakpoints: {
          1024: {
            slidesPerView: 1,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 1,
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
