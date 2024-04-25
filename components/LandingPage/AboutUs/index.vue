<template>
  <div class="bg-white p-10 pt-24">
    <div class="container mx-auto">
      <div>
        <h2 class="after:content-[' '] after:absolute after:top-[-10px]  after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">
          {{$t('About Us.The beginning of namaa company')}}
        </h2>
        <p class="text-grey font-normal max-w-[800px] text-sm mb-10">
          {{$i18n.locale === 'ar' ? info.about_us_AR : info.about_us_EN}}
        </p>


        <div @click="downloadPDF(1)" class="cursor-pointer hover:translate-y-[-5px] ease-in-out duration-300 p-5 mt-7 flex gap-[10px] items-center max-w-[350px] shadow-simple rounded-3xl	mx-auto md:mx-0	">
          <img src="@/assets/imgs/document-download.svg" alt="">
          <div>
            <h6 class="text-primary text-md font-semibold">{{$t('About Us.Company profile')}}</h6>
            <span class="text-grey text-sm">{{$t('About Us.Company profile description')}}</span>
          </div>
        </div>

        <div @click="downloadPDF(2)" class="cursor-pointer hover:translate-y-[-5px] ease-in-out duration-300 p-5 mt-7 flex gap-[10px] items-center max-w-[350px] shadow-simple rounded-3xl	mx-auto md:mx-0">
          <img src="@/assets/imgs/document-download.svg" alt="">
          <div>
            <h6 class="text-primary text-md font-semibold">{{$t('About Us.Company regulations')}}</h6>
            <span class="text-grey text-sm">{{$t('About Us.Company profile description')}}</span>
          </div>
        </div>

        <div class="block lg:flex gap-[20px] justify-between items-center mt-[30px]">
          <div class="flex-1">
            <div>
              <h2 class="text-3xl text-red font-bold mb-3">{{$t('About Us.Our Vision')}}</h2>
              <p class="text-grey">
                {{ $i18n.locale === 'ar' ? info.vision_AR : info.vision_EN }}
              </p>
            </div>
            <div class="mt-10">
              <h2 class="text-3xl text-red font-bold mb-3">{{$t('About Us.Our Message')}}</h2>
              <p class="text-grey">
                {{ $i18n.locale === 'ar' ? info.message_AR : info.message_EN }}
              </p>
            </div>
          </div>
          <div class="flex-1 mt-[30px] lg:mt-0">
            <img class="max-w-[500px] w-full block mx-auto rounded-[20px]" src="@/assets/imgs/Photo.jpg" alt="">
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
      required: true,
    }
  },
  methods: {
    downloadPDF(index) {
      if(index === 1) {
        window.open("/1a07a824d60678f8903bcd63f14d5dbe.pdf", '_blank');
      }
      if(index === 2) {
        window.open("/475e4a63b6e6d589c7f1f9cb5d45d7f5.pdf", "_blank")
      }
    }
  }
}
</script>
