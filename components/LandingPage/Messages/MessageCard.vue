<template>
  <div class="lg:flex gap-[20px]">
    <div class="mb-5 lg:mb-0">
      <img class="h-[250px] w-[250px] object-cover object-top	 rounded-lg" :src="item.image" alt="">
    </div>
    <div class="lg:flex-1">
      <h3 class="font-bold text-xl mb-1"> {{$i18n.locale === 'ar' ? item.name_AR : item.name_EN}} </h3>
      <h6 class="font-semibold text-[11px] pb-2 border-b border-grey-light mb-2">{{$i18n.locale === 'ar' ? item.position_AR : item.position_EN}}</h6>
      <p class="leading-6 text-[11.8px]">
        {{ $i18n.locale === 'ar' ? item.message_paragraph_AR : item.message_paragraph_EN }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      required: true,
    }
  }
}
</script>
