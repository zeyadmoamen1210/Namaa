<template>
  <div>
    <GalleryBanner :title="$t('Gallery.Gallery')" />
    <GalleryCategories />
    <OurClients bgClass="bg-white" class="py-20" />
  </div>
</template>

<script>
import GalleryBanner from "~/components/LandingPage/Gallery/GalleryBanner.vue";
import GalleryCategories from "~/components/LandingPage/Gallery/GalleryCategories.vue";
import OurClients from "~/components/LandingPage/OurClients.vue";

export default {
  components: {OurClients, GalleryCategories, GalleryBanner}

}
</script>
