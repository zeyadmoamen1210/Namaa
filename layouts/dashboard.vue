<template>
  <div>
    <div class="flex">
      <dashboard-sidebar />
      <nuxt class="w-[calc(100%-250px)] m-4 p-4 border-grey-light border-[1px] rounded-2xl"/>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    if(!localStorage.getItem('user')) {
      this.$router.push('/login');
    }
  },
  components: {
  }
}
</script>
