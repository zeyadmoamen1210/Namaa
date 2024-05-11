<template>
  <div class="fixed bg-[#fff] top-0 left-0 w-full h-full overflow-hidden z-[9999999] p-4">
    <div class="flex gap-3 items-center justify-between mb-4">
      <div>
        <img class="max-w-[120px]" src="@/assets/imgs/logo.svg" />
      </div>
      <div>
        <button>
          <img class="max-w-[30px]" @click="$emit('close')" src="@/assets/imgs/close-icon.svg" alt="">
        </button>
      </div>
    </div>
    <ul class="leading-[2.4]" :class="$i18n.locale === 'ar' ? `font-['Cairo-Regular']` : '' ">
      <li>
        <nuxt-link @click.native="$emit('close')" exact-active-class="active-link" class="text-grey" tag="a" to="/"> {{ $t('Navbar.Home') }} </nuxt-link>
      </li>
      <li>
        <nuxt-link @click.native="$emit('close')" exact-active-class="active-link" class="text-grey" tag="a" to="/services">{{$t('Navbar.Services')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link @click.native="$emit('close')" exact-active-class="active-link" class="text-grey" tag="a" to="/projects">{{$t('Navbar.Projects')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link @click.native="$emit('close')" exact-active-class="active-link" class="text-grey" tag="a" to="/gallery">{{$t('Navbar.Gallery')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link @click.native="$emit('close')" exact-active-class="active-link" class="text-grey" tag="a" to="/news">{{$t('Navbar.News')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link @click.native="$emit('close')" exact-active-class="active-link" class="text-grey" tag="a" to="/jobs">{{$t('Navbar.Jobs')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link @click.native="$emit('close')" exact-active-class="active-link" class="text-grey" tag="a" to="/messages">{{$t('Navbar.Messages')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link @click.native="$emit('close')" exact-active-class="active-link" class="text-grey" tag="a" to="/about-us">{{$t('Navbar.About Us')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link @click.native="$emit('close')" exact-active-class="active-link" class="text-grey" tag="a" to="/contact-us">{{$t('Navbar.Contact Us')}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script setup>
</script>
