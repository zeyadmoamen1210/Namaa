<template>
  <div class="mb-[30px] bg-white p-7 rounded-[15px] flex justify-between items-center" >
    <div class="flex gap-[20px]">
      <div>
        <img class="max-w-[150px]" src="@/assets/imgs/job-img.png" alt="">
      </div>
      <div>
        <h4 class="text-2xl font-semibold">Information Security Specialist</h4>
        <span class="text-lg text-grey mt-[5px] block">Saudi - Khobar</span>
        <div class="flex gap-[10px] mt-[10px] items-center">
          <span class="bg-[#56cdad29] text-sm text-[#56cda4] font-bold p-[7px] rounded-2xl px-[15px]">Full-Time</span>
          <span class="h-[35px] w-[1px] bg-[#767676]"></span>
          <span class="bg-[#ffffff] text-sm text-[#FFB836] border border-[#FFB836] font-bold p-[7px] rounded-2xl px-[15px]">Marketing</span>
        </div>
      </div>
    </div>
    <div>
      <button class="bg-[#2C2F73] text-white p-2 px-14 rounded-3xl">
        {{$t('Jobs.Apply')}}
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
