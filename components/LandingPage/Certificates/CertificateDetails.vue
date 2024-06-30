<template>
  <div class="p-10 pt-24">
    <div class="container mx-auto">
      <div>
        <h2 v-if="$i18n.locale === 'en'" class="after:content-[' '] after:absolute after:top-[-10px]  after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">
          {{ item.title_EN }}
        </h2>
        <h2 v-else class="after:content-[' '] after:absolute after:top-[-10px]  after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[750px] leading-[1.5]" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">
          {{ item.title_AR }}
        </h2>

        <p class="text-grey font-normal max-w-[800px] mb-10">
          {{$i18n.locale === 'ar' ? item.description_AR : item.description_EN}}
        </p>
      </div>
      <div>
        <img class="object-cover w-full rounded-3xl max-w-[500px]" :src="item.image" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      required: true
    }
  }
}
</script>
