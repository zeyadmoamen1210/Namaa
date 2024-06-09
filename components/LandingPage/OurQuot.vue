<template>
  <div
    class="relative after:content-[' '] after:absolute after:top-0 after:h-[100%] after:w-[100%] after:bg-cover after:bg-center after:opacity-10 after:bg-[url('@/assets/imgs/steps-img.png')] bg-cover bg-[0px] bg-primary"
  >
    <div class="container mx-auto p-10 py-20 relative z-[10]">
      <div class="justify-between align-center flex gap-x-[10px] flex-col	lg:flex-row">
        <div class="basis-[400px] grow-0 shrink-0 grid">
          <img class="w-[375px] m-auto" src="@/assets/imgs/ceo-4.png" alt="">
        </div>
        <div class="text-white">
          <q class="text-[35px] font-bold"> {{ $t('QuotTitle')  }} </q>
          <p class="text-[17px] m-[15px_0]">
            {{$t('QuotParagraph')}}
          </p>
          <div>
            <h6>― {{ $t('CEOName') }} </h6>
            <span>{{ $t('CEOTitle') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
