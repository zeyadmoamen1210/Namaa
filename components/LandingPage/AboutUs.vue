<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center px-[40px] py-28 gap-y-[100px] gap-[50px] lg:flex-row">
      <div>
        <h2 class="after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-primary after:w-[70px] relative text-red text-3xl font-bold py-2 pb-8" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">{{$t('About Us.About us')}}</h2>
        <p class="text-grey text-sm">
          {{$t('About Us.About us description')}}
        </p>

        <div class="flex flex-col sm:flex-row lg:flex-col gap-x-[20px]">
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
        </div>

      </div>

      <div class="hidden sm:flex gap-[20px] gap-y-[50px] flex-col sm:flex-row">
        <div>
          <div class="h-[200px] sm:h-[450px] bg-primary rounded-lg w-[270px] hover:translate-y-[-5px] ease-in-out duration-300 bg-[url('@/assets/imgs/aboutus-img-1.png')] bg-[50%] hover:bg-[60%_40%]">
          </div>
        </div>
        <div class="flex flex-col gap-[20px] mt-[-40px]">
          <div class="h-[240px] bg-primary rounded-lg w-[220px] hover:translate-y-[-5px] ease-in-out duration-300 bg-[url('@/assets/imgs/aboutus-img-2.png')] bg-[50%] hover:bg-[60%_40%]">
          </div>
          <div class="h-[170px] bg-primary rounded-lg w-[220px] hover:translate-y-[-5px] ease-in-out duration-300 bg-[url('@/assets/imgs/aboutus-img-3.png')] bg-[50%] hover:bg-[60%_40%]">
          </div>
        </div>
      </div>

      <div class="sm:hidden">
        <img src="@/assets/imgs/aboutus-img-1.png" alt="">
        <img src="@/assets/imgs/aboutus-img-2.png" alt="">
        <img src="@/assets/imgs/aboutus-img-3.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {Loading} from "element-ui";

export default {
  data() {
    return {
      companyInfo: {}
    }
  },
  mounted() {
    this.getCompanyInfo();
  },
  methods: {
    async getCompanyInfo() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const companyInfo = await this.$axios.get(`/company_info`);
        this.companyInfo = companyInfo.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    },
    downloadPDF(index) {
      if(index === 1 && this.companyInfo.companyProfile) {
        window.open(this.companyInfo.companyProfile, '_blank');
      }
      if(index === 2 && this.companyInfo.companyRegulation) {
        window.open(this.companyInfo.companyRegulation, "_blank")
      }
    }
  }
}
</script>

<style>

</style>
