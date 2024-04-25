<template>
  <div class="
    relative
    after:content-[' ']
    after:absolute after:top-0 after:h-[100%] after:w-[100%] after:bg-cover after:bg-center after:opacity-10 after:bg-[url('@/assets/imgs/steps-img.png')] bg-cover bg-[0px] bg-primary"
  >
    <div class="container mx-auto">
      <div class="p-10 pt-20">
        <h2 class="after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-white after:w-[70px] relative text-white text-3xl font-bold py-2 pb-4 max-w-[550px]" :class="$i18n.locale === 'ar' ? 'after:right-0' : 'after:left-0'">
          {{$t('Steps.We provide you with various services to help you')}}
        </h2>
        <p class="text-[#BEBFD4] font-normal max-w-[800px] mb-10">
          {{$t('Steps.description')}}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          <div>
            <img class="max-w-[210px] mx-auto block" src="@/assets/imgs/step-1.svg" alt="">
            <h6 class="leading-[1.5rem] h-[3rem] overflow-hidden text-center font-medium my-4 text-[20px] text-[#E4A321]">{{$t('Steps.Search and content writing')}}</h6>
            <p class="text-center text-[#BEBFD4] text-md">
              {{$t('Steps.Namaa World abides to provide high-quality services, solutions and products to its clients')}}
            </p>
          </div>
          <div>
            <img class="max-w-[210px] mx-auto block" src="@/assets/imgs/step-2.svg" alt="">
            <h6 class="leading-[1.5rem] h-[3rem] overflow-hidden text-center font-medium my-4 text-[20px] text-[#E4A321]">{{$t('Steps.Objectives and benchmarks identification')}}</h6>
            <p class="text-center text-[#BEBFD4] text-md">
              {{$t('Steps.Namaa World abides to provide high-quality services, solutions and products to its clients 2')}}
            </p>
          </div>
          <div>
            <img class="max-w-[210px] mx-auto block" src="@/assets/imgs/step-3.svg" alt="">
            <h6 class="leading-[1.5rem] h-[3rem] overflow-hidden text-center font-medium my-4 text-[20px] text-[#E4A321]">{{$t('Steps.Designing and developing')}}</h6>
            <p class="text-center text-[#BEBFD4] text-md">
              {{$t('Steps.Namaa World abides to provide high-quality services, solutions and products to its clients 3')}}
            </p>
          </div>
          <div>
            <img class="max-w-[210px] mx-auto block" src="@/assets/imgs/step-4.svg" alt="">
            <h6 class="leading-[1.5rem] h-[3rem] overflow-hidden text-center font-medium my-4 text-[20px] text-[#E4A321]">{{$t('Steps.Project testing and deployment')}}</h6>
            <p class="text-center text-[#BEBFD4] text-md">
              {{$t('Steps.Namaa World abides to provide high-quality services, solutions and products to its clients 4')}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
