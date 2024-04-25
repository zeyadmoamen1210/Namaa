<template>
  <div>
    <MessageBanner :title="$i18n.locale === 'ar' ? 'الرسائل' : 'Messages'" />
    <MessagesDetails />
    <OurClients bgClass="bg-[#FAFAFA]" class="py-20" />
    <OurCustomers bgClass="bg-[#EAEAF1]" />
  </div>
</template>
<script setup>
import MessageBanner from "~/components/LandingPage/Messages/MessageBanner.vue";
import OurCustomers from "~/components/LandingPage/OurCustomers.vue";
import OurClients from "~/components/LandingPage/OurClients.vue";
import MessagesDetails from "~/components/LandingPage/Messages/MessagesDetails.vue";

</script>
