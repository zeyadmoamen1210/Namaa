<template>
  <div>
    <div class="flex items-center justify-between mb-5 flex-wrap gap-[10px]">
      <h5 class="text-2xl font-semibold mb-0">Company Info</h5>

      <div class="flex gap-3 items-center">
        <div class="flex gap-x-[5px] items-center">
          <img src="@/assets/imgs/langs.svg" alt="">
          <button @click="$i18n.setLocale('en')" v-if="$i18n.locale === 'ar'">EN</button>
          <button @click="$i18n.setLocale('ar')" v-if="$i18n.locale === 'en'">AR</button>
        </div>
        <nuxt-link v-if="!companyInfo._id" tag="button" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" to="/dashboard/company-info/add" >Add Company info</nuxt-link>
        <nuxt-link v-else tag="button" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" :to="`/dashboard/company-info/${companyInfo._id}`" >Update Company info</nuxt-link>

      </div>
    </div>

    <div :dir="$i18n.locale === 'en' ? 'ltr' : 'rtl'">

      <div class="flex gap-3 items-center mb-5">
        <button :class="activeTab === 1 ? 'bg-primary text-[#fff]' : ''" class="px-3 py-2 rounded-lg text-sm" @click="activeTab = 1">{{$t('CompanyInfo.About Company')}}</button>
        <button :class="activeTab === 2 ? 'bg-primary text-[#fff]' : ''" class="px-3 py-2 rounded-lg text-sm" @click="activeTab = 2">{{$t('CompanyInfo.Company Links')}}</button>
        <button :class="activeTab === 3 ? 'bg-primary text-[#fff]' : ''" class="px-3 py-2 rounded-lg text-sm" @click="activeTab = 3">{{$t('CompanyInfo.Company Files')}}</button>
      </div>

      <section v-if="activeTab == 1">
        <div class="border border-grey-light p-4 mb-4">
          <div v-if="$i18n.locale === 'en'" class="mb-5 mt-5">
            <h3 class="font-semibold text-sm text-[#4f46e5]">About Us </h3>
            <p>
              {{companyInfo.about_us_EN}}
            </p>
          </div>

          <div v-else class="mb-5 mt-5">
            <h3 class="font-semibold text-sm text-[#4f46e5]">عن الشركة</h3>
            <p>
              {{companyInfo.about_us_AR}}
            </p>
          </div>
        </div>

        <div class="border border-grey-light p-4 mb-4">
          <div v-if="$i18n.locale === 'en'" class="mb-5 mt-5">
            <h3 class="font-semibold text-sm text-[#4f46e5]">Vision </h3>
            <p>
              {{companyInfo.vision_EN}}
            </p>
          </div>

          <div v-else class="mb-5 mt-5">
            <h3 class="font-semibold text-sm text-[#4f46e5]">رؤيتنا</h3>
            <p>
              {{companyInfo.vision_AR}}
            </p>
          </div>
        </div>

        <div class="border border-grey-light p-4 mb-4">
          <div v-if="$i18n.locale === 'en'" class="mb-5 mt-5">
            <h3 class="font-semibold text-sm text-[#4f46e5]">Message </h3>
            <p>
              {{companyInfo.message_EN}}
            </p>
          </div>

          <div v-else class="mb-5 mt-5">
            <h3 class="font-semibold text-sm text-[#4f46e5]">رسالتنا</h3>
            <p>
              {{companyInfo.message_AR}}
            </p>
          </div>
        </div>

        <div v-if="$i18n.locale === 'en'" class="border border-grey-light p-5 mb-5">
          <h3 class="border-b font-semibold text-lg border-grey-light pb-4 mb-4">Objectives</h3>
          <div class="border border-grey-light p-5 mb-5" v-for="(obj, index) in companyInfo.objectives_EN" :key="index">
            <div class="mb-5 mt-5">
              <h3 class="font-semibold text-sm text-[#4f46e5]">Title </h3>
              <p>
                {{obj.title_EN}}
              </p>
            </div>
            <div class="mb-5 mt-5">
              <h3 class="font-semibold text-sm text-[#4f46e5]">Pragraph </h3>
              <p>
                {{obj.pragraph_EN}}
              </p>
            </div>
          </div>
        </div>

        <div v-else class="border border-grey-light p-5">
          <h3 class="border-b font-bold border-grey-light pb-4 mb-4">أهدافنا</h3>
          <div class="border border-grey-light p-5 mb-5" v-for="(obj, index) in companyInfo.objectives_AR" :key="index">
            <div class="mb-5 mt-5">
              <h3 class="font-semibold text-sm text-[#4f46e5]">العنوان</h3>
              <p>
                {{obj.title_AR}}
              </p>
            </div>
            <div class="mb-5 mt-5">
              <h3 class="font-semibold text-sm text-[#4f46e5]">الوصف</h3>
              <p>
                {{obj.pragraph_AR}}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section v-else-if="activeTab === 2">
        <div class="flex gap-3 items-center mb-4">
          <div class="w-[45px] rounded-full">
            <img class="block mx-auto w-[45px]" src="@/assets/imgs/insta-3.svg" alt="">
          </div>
          <a :href="companyInfo.insta_link" target="_blank">{{companyInfo.insta_link}}</a>
        </div>

        <div class="flex gap-3 items-center mb-4">
          <div class="bg-[#3b5998] w-[40px] h-[40px] leading-[40px] rounded-full">
            <img class="block mx-auto pt-[7px]" src="@/assets/imgs/facebook.svg" alt="">
          </div>
          <a :href="companyInfo.facbok_link" target="_blank">{{companyInfo.facbok_link}}</a>
        </div>

        <div class="flex gap-3 items-center mb-4">
          <div class="bg-[#55acee] w-[40px] h-[40px] leading-[40px] rounded-full">
            <img class="block mx-auto pt-[11px]" src="@/assets/imgs/twitter.svg" alt="">
          </div>
          <a :href="companyInfo.X_link" target="_blank">{{companyInfo.X_link}}</a>
        </div>

        <div class="flex gap-3 items-center mb-4">
          <div class="bg-[#007ab9] w-[40px] h-[40px] leading-[40px] rounded-full">
            <img class="block mx-auto pt-[9px]" src="@/assets/imgs/linkedin.svg" alt="">
          </div>
          <a :href="companyInfo.LinkedIN_link" target="_blank">{{companyInfo.LinkedIN_link}}</a>
        </div>

        <div class="flex gap-3 items-center mb-4">
          <div class="w-[40px] h-[40px] leading-[40px] rounded-full overflow-hidden">
            <img class="block mx-auto" src="@/assets/imgs/pobox.jpg" alt="">
          </div>
          <span>{{companyInfo.POBox}}</span>
        </div>

        <div class="flex gap-3 items-center mb-4">
          <div class="w-[40px] h-[40px] leading-[40px] rounded-full overflow-hidden">
            <img class="block mx-auto" src="@/assets/imgs/fax.svg" alt="">
          </div>
          <span>{{companyInfo.fax}} </span>
        </div>

        <div class="flex gap-3 items-center mb-4">
          <div class="w-[40px] h-[40px] leading-[40px] rounded-full overflow-hidden">
            <img class="block mx-auto" src="@/assets/imgs/phones.svg" alt="">
          </div>
          <div class="flex gap-3 items-center">
            <span v-for="(phone, index) in companyInfo.phone" :key="index">
              {{phone}}
            </span>
          </div>
        </div>

      </section>
      <section v-else>
        <div class="flex gap-3 items-center mb-4">
          <div>
            Company Profile
          </div>
          <span v-if="companyInfo.companyProfile"> <a target="_blank" class="text-[#4f46e5] underline" :href="companyInfo.companyProfile">Click Here</a> </span>
          <span v-else> Not Found </span>
        </div>
        <div class="flex gap-3 items-center mb-4">
          <div>
            Company Regulation
          </div>
          <span v-if="companyInfo.companyRegulation"> <a target="_blank" class="text-[#4f46e5] underline" :href="companyInfo.companyRegulation">Click Here</a> </span>
          <span v-else> Not Found </span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import {Loading} from "element-ui";

export default {
  layout: 'dashboard',
  data() {
    return {
      companyInfo: {},
      activeTab: 1,
    }
  },
  mounted() {
    this.getCompanyInfo()
  },
  methods: {
    async getCompanyInfo() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const companyInfo = await this.$axios.get('/company_info');
        this.companyInfo = companyInfo.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  }
}
</script>
