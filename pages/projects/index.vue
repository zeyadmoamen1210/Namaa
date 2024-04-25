<template>
  <div>
    <ProjectBanner :title="$i18n.locale === 'ar' ? 'المشاريع' : 'Projects'" />
    <ProjectCategories />
    <OurClients bgClass="bg-white" class="py-20" />
    <OurCustomers bgClass="bg-grey-lighter" />
  </div>
</template>

<script>
import OurClients from "~/components/LandingPage/OurClients.vue";
import ProjectBanner from "~/components/LandingPage/projects/ProjectBanner.vue";
import ProjectCategories from "~/components/LandingPage/projects/ProjectCategories.vue";
import OurCustomers from "~/components/LandingPage/OurCustomers.vue";

export default {
  components: {
    OurCustomers,
    ProjectCategories,
    ProjectBanner,
    OurClients,
  }

}
</script>
