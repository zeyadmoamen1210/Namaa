<template>
  <div>
    <ContactUsBanner :title="$t('Contact Us.Contact Us')" />
    <ContactUsHeader />
  </div>
</template>
<script setup>
import ContactUsBanner from "~/components/LandingPage/ContactUs/ContactUsBanner.vue";
import ContactUsHeader from "~/components/LandingPage/ContactUs/ContactUsHeader.vue";
</script>
