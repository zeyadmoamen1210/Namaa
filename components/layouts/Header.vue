<template>
  <div class="bg-hero-pattern bg-cover bg-center">
    <div class="container mx-auto">
      <div class="overflow-hidden relative flex gap-[20px] flex-col md:flex-row min-h-[600px]">
        <div class="pt-[140px] px-[40px] relative z-[3]">
          <h1 class="uppercase font-medium text-5xl text-white ">
            {{$t('Header.Road to')}} <span class="text-red success-shadow">{{$t('Header.Success')}}</span> <br> {{$t('Header.and achieve ideas')}}
          </h1>
          <p class="mt-4 w-full max-w-[450px] text-grey-lighter">
            {{$t('Header.description')}}
          </p>
          <button @click.prevent="$router.push('/services')" class="mt-12 mb-3 text-primary bg-white font-semibold p-2 px-4 rounded-2xl">{{$t('Header.Explore services')}}</button>
        </div>
        <div class="flex items-center" v-if="$i18n.locale === 'en'">
          <img class="hidden md:block mix-blend-color-dodge absolute z-[1] sm:right-[-245px] lg:right-[0] top-[0]" style="transform: rotateY(180deg)" src="@/assets/imgs/header-gif-1.gif" alt="">
          <img class="absolute bottom-[-2px] max-w-[210px] left-[5px] mix-blend-lighten" style="transform: rotateY(180deg)" src="@/assets/imgs/header-gif-2.gif" alt="">
        </div>
        <div class="flex items-center" v-else>
          <img class="hidden md:block mix-blend-color-dodge absolute z-[1] sm:left-[-245px] lg:left-[0] top-[0]" style="transform: rotateY(25deg)" src="@/assets/imgs/header-gif-1.gif" alt="">
          <img class="absolute bottom-[-2px] max-w-[210px] right-[5px] mix-blend-lighten" style="transform: rotateY(180deg)" src="@/assets/imgs/header-gif-2.gif" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.success-shadow {
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
}
</style>
