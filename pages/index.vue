<template>
  <div>
    <Header />
    <Sponser dir="ltr" />
    <AboutUs />
    <OurServices />
    <OurProjects />
    <OurNews />
    <OurQuot />
    <OurCustomers />
    <OurClients dir="ltr" />
  </div>
</template>

<script>
import Header from "~/components/layouts/Header.vue";
import Sponser from "~/components/LandingPage/Sponser.vue";
import AboutUs from "~/components/LandingPage/AboutUs.vue";
import OurServices from "~/components/LandingPage/OurServices.vue";
import OurProjects from "~/components/LandingPage/OurProjects.vue";
import OurNews from "~/components/LandingPage/OurNews.vue";
import OurQuot from "~/components/LandingPage/OurQuot.vue";
import OurClients from "~/components/LandingPage/OurClients.vue";
import OurCustomers from "~/components/LandingPage/OurCustomers.vue";

export default {
  name: 'IndexPage',
  components: {
    OurCustomers,
    OurClients,
    OurQuot,
    OurNews,
    OurProjects,
    OurServices,
    AboutUs,
    Header,
    Sponser
  }
}
</script>

<style>
.el-loading-mask.is-fullscreen .el-loading-spinner .circular {
  text-align: center !important;
  margin: auto !important;
}
</style>
