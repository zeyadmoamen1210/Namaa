<template>
  <div>
    <div v-if="targetData">
      <div>
        <div class="flex items-center gap-[5px]">
          <img class="w-[35px]" :class="$i18n.locale === 'ar' ? 'rotate-180' : ''" src="@/assets/imgs/service-arrow.svg" alt="">
          <h2 class="text-red text-2xl font-semibold">{{ $i18n.locale === 'ar' ? targetData.title_AR : targetData.title_EN }}</h2>
        </div>
        <div class="px-5">
          <p class="text-grey mt-4 leading-7">
            {{ $i18n.locale === 'ar' ? targetData.description_AR : targetData.description_EN }}
          </p>
          <div class="mt-5">
            <template v-if="$i18n.locale === 'en'">
              <div v-for="(point, index) in targetData.sub_services_EN" :key="index" class="mb-6">
                <div class="flex items-center gap-[5px]">
                  <img class="w-[25px]" :class="$i18n.locale === 'ar' ? 'rotate-180' : ''" src="@/assets/imgs/service-arrow-numberd.svg" alt="">
                  <h3 class="text-primary text-2xl font-semibold">
                    {{point.sub_services_title_EN}}
                  </h3>
                </div>
                <p class="mt-2 text-grey leading-7">
                  {{point.sub_services_description_EN}}
                </p>
              </div>
            </template>
            <template v-else>
              <div v-for="(point, index) in targetData.sub_services_AR" :key="index" class="mb-6">
                <div class="flex items-center gap-[5px]">
                  <img class="w-[25px]" :class="$i18n.locale === 'ar' ? 'rotate-180' : ''" src="@/assets/imgs/service-arrow-numberd.svg" alt="">
                  <h3 class="text-primary text-2xl font-semibold">
                    {{point.sub_services_title_AR}}
                  </h3>
                </div>
                <p class="mt-2 text-grey leading-7">
                  {{point.sub_services_description_AR}}
                </p>
              </div>
            </template>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    targetData: {
      required: true
    }
  }
}
</script>
