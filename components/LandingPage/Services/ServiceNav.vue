<template>
  <div>
    <ul class="leading-8">
      <li v-for="link in serviceLinks" :key="link.id" @click="$router.push(`/services-list/${link.id}`)" class="cursor-pointer bg-white p-3 px-4 mb-3 rounded w-full max-w-[290px] relative text-md" :class="[$i18n.locale === 'ar' ? 'after:left-[-55px] after:border-[transparent_#2C2F73_transparent_transparent]' : 'after:right-[-55px] after:border-[transparent_transparent_transparent_#2C2F73]', activeLink == link.id ? 'active-service-link' : '']"> {{$i18n.locale === 'ar' ? link.titleAr : link.titleEn}} </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    serviceLinks: {
      required: true
    }
  },
  data() {
    return {
      activeLink: this.$route.params.id ,
    }
  },
}
</script>

<style lang="postcss">
.active-service-link {
  @apply bg-primary text-white after:absolute after:top-0  md:after:content-[''] md:after:border-[28px] rounded-tr-[2px] rounded-br-[2px] !important;
}
</style>
