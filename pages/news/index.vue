<template>
  <div>
    <NewsBanner :title="$i18n.locale === 'ar' ? 'الأخبار' : 'News'" />
    <NewsCategories />
    <OurClients bgClass="bg-white" class="py-20" />
    <OurCustomers bgClass="bg-grey-lighter" />
  </div>
</template>
<script setup>
import NewsBanner from "~/components/LandingPage/News/NewsBanner.vue";
import NewsCategories from "~/components/LandingPage/News/NewsCategories.vue";
import OurClients from "~/components/LandingPage/OurClients.vue";
import OurCustomers from "~/components/LandingPage/OurCustomers.vue";
</script>
