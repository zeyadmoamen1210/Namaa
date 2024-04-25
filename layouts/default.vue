<template>
  <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'" :class="[$i18n.locale === 'ar' ? `font-['Cairo-Regular']` : '' , $i18n.locale === 'ar' ? 'rtl' : 'ltr']">
    <Navbar />
    <nuxt />
    <ContactUs />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/layouts/Navbar.vue';
import Footer from '@/components/layouts/Footer.vue';
import ContactUs from "~/components/LandingPage/ContactUs.vue";
export default {
  components: {
    ContactUs,
    Navbar,
    Footer
  }
}
</script>

<style>
.rtl .el-form-item__content {
  label {
    margin-right: 0 !important;
    margin-left: 30px !important;
  }
  .el-radio__label {
    padding-left: 0 !important;
    padding-right: 10px !important;
  }
}
</style>
