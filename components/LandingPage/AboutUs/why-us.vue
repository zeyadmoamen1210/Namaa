<template>
  <div class="bg-white p-10 pt-16">
    <div class="container mx-auto">
      <div>
        <h2 class="after:content-[' '] after:absolute after:top-[-10px]  after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">
          {{$t('About Us.Why Namaa Company')}}
        </h2>
        <p class="text-grey font-normal max-w-[800px] text-sm mb-14">
          {{$t('About Us.namaa company description')}}
        </p>

        <div class="lg:flex gap-x-[40px] gap-y-[10px] justify-between ">

          <div class="p-10 py-10 shadow-medium rounded-xl border-[2px] border-grey-lighter relative overflow-hidden after:absolute after:content-[''] after:left-0 after:bottom-[-55%] after:w-full after:h-[55%] after:bg-[url('@/assets/imgs/wave.png')] after:bg-cover hover:after:bottom-0 after:transition-all after:duration-700 why-us-card mb-[15px]">
            <img class="max-w-[120px] block mx-auto w-full" src="@/assets/imgs/about-1.png" alt="">
            <h3 class="transition-all duration-700 relative z-[2] text-center font-bold text-2xl mt-8 mb-2" >{{$t('About Us.High Quality')}}</h3>
            <p class="transition-all duration-700 text-center text-grey relative z-[2]">
              {{$t('About Us.High Quality Description')}}
            </p>
          </div>

          <div class="p-10 py-10 shadow-medium rounded-xl border-[2px] border-grey-lighter relative overflow-hidden after:absolute after:content-[''] after:left-0 after:bottom-[-55%] after:w-full after:h-[55%] after:bg-[url('@/assets/imgs/wave.png')] after:bg-cover hover:after:bottom-0 after:transition-all after:duration-700 why-us-card mb-[15px]">
            <img class="max-w-[120px] block mx-auto w-full" src="@/assets/imgs/about-2.png" alt="">
            <h3 class="transition-all duration-700 relative z-[2] text-center font-bold text-2xl mt-8 mb-2" >{{$t('About Us.Continuous Development')}}</h3>
            <p class="transition-all duration-700 text-center text-grey relative z-[2]">
              {{$t('About Us.Continuous Development Description')}}
            </p>
          </div>

          <div class="p-10 py-10 shadow-medium rounded-xl border-[2px] border-grey-lighter relative overflow-hidden after:absolute after:content-[''] after:left-0 after:bottom-[-55%] after:w-full after:h-[55%] after:bg-[url('@/assets/imgs/wave.png')] after:bg-cover hover:after:bottom-0 after:transition-all after:duration-700 why-us-card mb-[15px]">
            <img class="max-w-[120px] block mx-auto w-full" src="@/assets/imgs/about-3.png" alt="">
            <h3 class="transition-all duration-700 relative z-[2] text-center font-bold text-2xl mt-8 mb-2" >{{$t('About Us.Satisfying')}}</h3>
            <p class="transition-all duration-700 text-center text-grey relative z-[2]">
              {{$t('About Us.Satisfying Description')}}
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>


<style lang="postcss">
.why-us-card {
  &:hover {
    h3 {
      @apply text-white !important;
    }
    p {
      @apply text-[#BEBFD4] !important;
    }
  }
}
</style>
