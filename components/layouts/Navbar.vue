<template>
  <nav class="container mx-auto">
    <div class="p-3 px-11 flex gap-x-[10px]">
      <div class="flex-1">
        <img class="max-w-[120px]" src="@/assets/imgs/logo.svg" />
      </div>
      <div class="flex gap-x-[50px] items-center">
        <ul class="flex gap-x-[20px] hidden lg:flex" :class="$i18n.locale === 'ar' ? `font-['Cairo-Regular']` : '' ">
          <nuxt-link exact-active-class="active-link" class="text-grey" tag="a" to="/"> {{ $t('Navbar.Home') }} </nuxt-link>
          <nuxt-link exact-active-class="active-link" class="text-grey" tag="a" to="/services">{{$t('Navbar.Services')}}</nuxt-link>
          <nuxt-link exact-active-class="active-link" class="text-grey" tag="a" to="/projects">{{$t('Navbar.Projects')}}</nuxt-link>
          <nuxt-link exact-active-class="active-link" class="text-grey" tag="a" to="/gallery">{{$t('Navbar.Gallery')}}</nuxt-link>
          <nuxt-link exact-active-class="active-link" class="text-grey" tag="a" to="/news">{{$t('Navbar.News')}}</nuxt-link>
          <nuxt-link exact-active-class="active-link" class="text-grey" tag="a" to="/jobs">{{$t('Navbar.Jobs')}}</nuxt-link>
          <nuxt-link exact-active-class="active-link" class="text-grey" tag="a" to="/messages">{{$t('Navbar.Messages')}}</nuxt-link>
          <nuxt-link exact-active-class="active-link" class="text-grey" tag="a" to="/about-us">{{$t('Navbar.About Us')}}</nuxt-link>
          <nuxt-link exact-active-class="active-link" class="text-grey" tag="a" to="/contact-us">{{$t('Navbar.Contact Us')}}</nuxt-link>
        </ul>
        <div class="flex gap-x-[5px] items-center">
          <div class="flex gap-x-[5px] items-center">
            <img src="@/assets/imgs/langs.svg" alt="">
            <button @click="$i18n.setLocale('en')" v-if="$i18n.locale === 'ar'">EN</button>
            <button @click="$i18n.setLocale('ar')" v-if="$i18n.locale === 'en'">AR</button>
          </div>
          <div class="block lg:hidden">
            <button @click="openMobileMenu = true" class="mt-[7px]">
              <img class="w-[30px]" src="@/assets/imgs/burger-menu.svg" alt="">
            </button>
          </div>
        </div>
      </div>
    </div>


    <MobileMenu v-if="openMobileMenu" @close="openMobileMenu = false" />
  </nav>
</template>

<script>
import MobileMenu from './MobileMenu.vue';

export default {
  components: {
    MobileMenu
  },
  data() {
    return {
      openMobileMenu: false,
    }
  }
}
</script>


<style lang="postcss">
.active-link {
  @apply text-primary font-semibold !important;
}
</style>
