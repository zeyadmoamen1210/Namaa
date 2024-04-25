<template>
  <div :class="bgClass" class="p-10" v-loading="loading" dir="ltr">
    <div class="container mx-auto">
      <div class="ticker-container" ref="tickerContainer">

        <div class="ticker-wrap">

          <!-- Wrap the slider in div with overflow hidden to hide scrollbars -->
          <div class="overflow-hidden">

            <!-- The slider itself is a flex grid -->
            <div class="flex -mx-4 img-ticker">

              <!-- Original set of images -->
              <!-- Each image is a grid column with width 16rem (w-64) and horiztonal margin 1rem (mx-4) -->

              <span class="w-50 mx-4 self-start flex-none" v-for="(item, index) in partners" :key="index">
                  <div class="bg-grey-lighter">
                    <img class="block m-auto h-[190] object-contain mix-blend-multiply" :src="item.image" alt="">
                  </div>
                </span>

              <span class="w-64 mx-4 self-start flex-none" v-for="(item, index) in partners" :key="index">
                  <div class="bg-grey-lighter">
                    <img class="block m-auto h-[190] object-contain mix-blend-multiply" :src="item.image" alt="">
                  </div>
                </span>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>

@keyframes ticker-kf {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-108rem, 0, 0);
  }
}

.img-ticker {
  animation: ticker-kf 18s linear infinite;
}


img {
  width: 200px;
  aspect-ratio: 3/2;
  object-fit: contain;
}


</style>

<script>

export default {
  data() {
    return {
      partners: [],
      loading: false
    };
  },
  mounted() {
    this.getPartners();
  },
  methods: {
    async getPartners() {
      try {
        this.loading = true;
        const partners = await this.$axios.get('/partners');
        this.partners = partners.data.filter((e) => e.type_of_image === 'certificate');
      } finally {
        this.$nextTick(() => {
          this.loading = false;
        });
      }
    }
  },
  props: {
    bgClass: {
      required: false,
      type: String,
      default: 'bg-grey-lighter'
    }
  }
};
</script>
