<template>
  <div class="bg-white px-10 py-16">
    <div class="container mx-auto">
      <h2 class="after:content-[' '] after:absolute after:top-[-10px]  after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">
        {{$t('Contact Us.Namaa company always with you')}}
      </h2>
      <p class="text-grey font-normal max-w-[600px] text-md">
        {{$t('Contact Us.Namaa company always with you description')}}
      </p>
    </div>
  </div>
</template>
<script setup>
</script>
