<template>
  <div
       class="
        bg-white p-10 pt-16
        relative
        z-[3]
        after:content-[' ']
        after:absolute
        after:top-0
        after:left-0
        after:h-[100%]
        after:w-[100%]
        after:bg-no-repeat
        after:bg-contain
        after:z-[1]
        after:bg-[url('@/assets/imgs/bottom-bg.png')]

        before:content-[' ']
        before:absolute
        before:bottom-[-89%]
        before:left-0
        before:h-[100%]
        before:w-[100%]
        before:bg-no-repeat
        before:bg-contain
        before:z-[2]
        overflow-hidden
        before:overflow-hidden
        before:bg-[url('@/assets/imgs/top-bg.png')]
        bg-[0px]
        bg-white
      "
  >
      <div class="container mx-auto">
        <div class="relative z-[2]">
          <h2 class="after:content-[' '] after:absolute after:top-[-10px]  after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">
            {{$t('About Us.Our objectives')}}
          </h2>
          <p class="text-grey font-normal max-w-[800px] text-sm mb-14">
            {{$t('About Us.Our objectives description')}}
          </p>

          <div v-for="(item, index) in $i18n.locale === 'ar' ? info.objectives_AR : info.objectives_EN" :key="index">
            <div v-if="index%2==0" class="lg:flex gap-[30px] items-center lg:my-14 lg:mx-20 py-20 px-10 bg-grey-lighter rounded-3xl lg:rounded-bl-none lg:rounded-tr-full lg:rounded-br-full mb-10">
              <div class="basis-[70%]">
                <h2 class="text-primary font-bold text-2xl mb-4"> {{$i18n.locale === 'ar' ? item.title_EN : item.title_EN}} </h2>
                <p class="text-grey">
                  {{$i18n.locale === 'ar' ? item.pragraph_AR : item.pragraph_EN}}
                </p>
              </div>
              <div class="basis-[30%]">
                <img v-if="index === 0" class="w-full max-w-[200px] block mx-auto" src="@/assets/imgs/about-us-1.png" alt="">
                <img v-else-if="index === 2" class="w-full max-w-[200px] block mx-auto" src="@/assets/imgs/about-us-3.png" alt="">
                <img v-else class="w-full max-w-[200px] block mx-auto" src="@/assets/imgs/about-us-1.png" alt="">
              </div>
            </div>
            <div v-else class="lg:flex gap-[30px] items-center lg:my-14 lg:mx-20 py-20 px-10 bg-grey-lighter rounded-3xl lg:rounded-bl-full lg:rounded-tl-full lg:rounded-tr-none mb-10">
              <div class="basis-[30%]">
                <img v-if="index === 1" class="w-full max-w-[200px] block mx-auto" src="@/assets/imgs/about-us-2.png" alt="">
                <img v-else-if="index === 3" class="w-full max-w-[200px] block mx-auto" src="@/assets/imgs/about-us-4.png" alt="">
                <img v-else class="w-full max-w-[200px] block mx-auto" src="@/assets/imgs/about-us-1.png" alt="">
              </div>
              <div class="basis-[70%]">
                <h2 class="text-primary font-bold text-2xl mb-4">{{$i18n.locale === 'ar' ? item.title_AR : item.title_EN}}</h2>
                <p class="text-grey">
                  {{$i18n.locale === 'ar' ? item.pragraph_AR : item.pragraph_EN}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    info: {
      required: true
    }
  }
}
</script>


