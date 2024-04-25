<template>
  <div>
    <JobBanner :title="$t('Jobs.Jobs')" />
    <JobCategories />
    <OurClients bgClass="bg-white" class="py-20" />
    <OurCustomers bgClass="bg-[#EAEAF1]" />

  </div>
</template>
<script setup>
import JobBanner from "~/components/LandingPage/Jobs/JobBanner.vue";
import JobCategories from "~/components/LandingPage/Jobs/JobCategories.vue";
import OurClients from "~/components/LandingPage/OurClients.vue";
import OurCustomers from "~/components/LandingPage/OurCustomers.vue";
</script>
