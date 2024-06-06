<template>
  <div class="p-10 pt-24">
    <div class="container mx-auto">
      <div>
        <h2 v-if="$i18n.locale === 'en'" class="after:content-[' '] after:absolute after:top-[-10px]  after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">
          {{ item.news_title_EN }}
        </h2>
        <h2 v-else class="after:content-[' '] after:absolute after:top-[-10px]  after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[750px] leading-[1.5]" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">
          {{ item.news_title_AR }}
        </h2>

        <p class="text-grey font-normal max-w-[800px] mb-10">
          {{$i18n.locale === 'ar' ? item.news_desc_AR : item.news_desc_EN}}
        </p>
      </div>
      <div class="mb-3">
        <div class="pb-2 ">
          <div class="flex gap-[10px] items-center">
            <img class="w-[25px]" src="@/assets/imgs/clock.svg" alt="">
            <div>
              <span class="text-primary text-sm font-normal mb-1">{{$t('News.Project Date')}}:</span>
            </div>
          </div>
          <h6 class="font-semibold text-primary text-lg mt-2"> {{new Date(item.date).toLocaleDateString($i18n.locale === 'ar' ? 'ar-EG' : 'en-EN')}}  </h6>
        </div>

        <div class="pb-2 mt-3">
          <div class="flex gap-[10px] items-center">
            <img class="w-[25px]" src="@/assets/imgs/tag-1.svg" alt="">
            <div>
              <span class="text-primary text-sm font-normal mb-1">{{$t('News.Project Tags')}}:</span>
            </div>
          </div>
          <div class="flex gap-[10px] mt-3">
            <span class="bg-[#676363] text-[#fff] text-sm p-1 px-2 rounded-lg" v-for="(tag, index) in $i18n.locale === 'ar' ? item.news_tags_AR : item.news_tags_EN" :key="index">
              {{tag}}
            </span>
          </div>
        </div>

      </div>
      <div>
        <img class="object-cover w-full rounded-3xl" :src="item.image" alt="">
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
