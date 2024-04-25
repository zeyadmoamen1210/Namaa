<template>
  <div class="p-10 pt-24">
    <div class="container mx-auto">
      <div>
        <h2 v-if="$i18n.locale === 'en'" class="after:content-[' '] after:absolute after:top-[-10px]  after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">
          We Make new project for {{ item.project_name_EN }} to help them
        </h2>
        <h2 v-else class="after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-2xl font-bold py-2 pb-4 max-w-[750px] leading-[1.5]" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">
          نقوم بإنشاء مشروع جديد لـ {{ item.project_name_AR }} لمساعدتهم
        </h2>

        <p class="text-grey font-normal max-w-[800px] mb-10">
          {{ $i18n.locale === 'ar' ? item.project_desc_AR : item.project_desc_EN }}
        </p>
      </div>
      <div class="flex gap-x-[100px] gap-y-[15px] items-center flex-wrap">
        <div class="pb-2 ">
          <div class="flex gap-[10px] items-center">
            <img class="w-[25px]" src="@/assets/imgs/client.svg" alt="">
            <div>
              <span class="text-primary text-sm font-normal mb-1">{{$t('Projects.Project Client')}}:</span>
            </div>
          </div>
          <h6 class="font-semibold text-primary text-lg mt-2"> {{ $i18n.locale === 'ar' ? item.client_AR : item.client_EN }}  </h6>
        </div>
        <div class="pb-2 ">
          <div class="flex gap-[10px] items-center">
            <img class="w-[25px]" src="@/assets/imgs/clock.svg" alt="">
            <div>
              <span class="text-primary text-sm font-normal mb-1">{{$t('Projects.Project Date')}}:</span>
            </div>
          </div>
          <h6 class="font-semibold text-primary text-lg mt-2"> {{new Date(item.project_date).toLocaleDateString($i18n.locale === 'ar' ? 'ar-EG' : 'en-EN')}}  </h6>
        </div>
        <div class="pb-2 ">
          <div class="flex gap-[10px] items-center">
            <img class="w-[25px]" src="@/assets/imgs/category.svg" alt="">
            <div>
              <span class="text-primary text-sm font-normal mb-1">{{$t('Projects.Project Type')}}:</span>
            </div>
          </div>
          <h6 class="font-semibold text-primary text-lg mt-2"> {{ $i18n.locale === 'ar' ? item.project_type_AR : item.project_type_EN }}  </h6>
        </div>
      </div>
      <div class="mt-8">
        <img class="object-cover w-full rounded-xl" :src="item.image" alt="">
      </div>
    </div>
  </div>
</template>
<script >
export default {
  props: {
    item: {
      required: true
    }
  }
}
</script>
