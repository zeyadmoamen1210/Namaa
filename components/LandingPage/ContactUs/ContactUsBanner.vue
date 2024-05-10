<template>
  <div class="bg-[url('@/assets/imgs/about-us.png')] bg-cover bg-[center_bottom] bg-no-repeat min-h-[300px]">
    <div class="container mx-auto">
      <div class="p-10">
        <nuxt-link class="text-white text-md flex items-center gap-2" :to="prevPageUrl">
          <i class="block mt-[3px] el-icon-back text-2xl"></i>
          <span class="block">{{$t('Contact Us.Back to previous page')}}</span>
        </nuxt-link>
        <h2 class="text-2xl md:text-3xl lg:text-5xl pt-12 text-white font-bold leading-[1.5]">{{title}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    prevPageUrl: {
      type: String,
      default: '/'
    }
  }
}
</script>
