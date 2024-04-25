<template>
  <div>
    <ServiceBanner :title="$i18n.locale === 'ar' ? 'المشاريع' : 'Services'" />
    <ServiceCategories />
    <ServiceSteps />
    <OurClients />
  </div>
</template>

<script>
import ServiceBanner from "~/components/LandingPage/Services/ServiceBanner.vue";
import ServiceCategories from "~/components/LandingPage/Services/ServiceCategories.vue";
import OurClients from "~/components/LandingPage/OurClients.vue";
import ServiceSteps from "~/components/LandingPage/Services/ServiceSteps.vue";

export default {
  components: {
    ServiceSteps,
    OurClients,
    ServiceBanner,
    ServiceCategories
  }

}
</script>
