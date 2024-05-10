<template>
  <div>
    <AddJob />
  </div>
</template>

<script>
import AddJob from "@/components/dashboard/Jobs/add.vue";

export default {
  layout: 'dashboard',
  components: {
    AddJob
  }
}
</script>
