<template>
  <div>
    <h2 class="after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]" :class="$i18n.locale === 'ar' ? 'after:right-0' : 'after:left-0'">
      {{$t('Services.We provide you with various services to help you')}}
    </h2>
    <p class="text-grey font-normal max-w-[800px] mb-10">
      {{$t('Services.Services description')}}
    </p>
  </div>
</template>
<script setup>
</script>
