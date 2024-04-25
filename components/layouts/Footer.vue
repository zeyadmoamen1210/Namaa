<template>
  <div class="bg-grey-lighter p-10 pb-5">
    <div class="flex gap-[10px] gap-y-[30px] justify-between flex-wrap">
      <div>
        <img class="max-w-[150px]" src="@/assets/imgs/logo.svg" />
        <p class="mt-4 text-sm text-[#000] font-semibold max-w-[350px] leading-[1.7]">
          {{$t('Footer.description')}}
        </p>
        <div class="flex gap-[15px] items-center mt-[20px]">
          <button @click="openLink('facebook')" class="bg-[#3b5998] w-[40px] h-[40px] leading-[40px] rounded-full">
            <img class="block mx-auto" src="@/assets/imgs/facebook.svg" alt="">
          </button>
          <button @click="openLink('twitter')" class="bg-[#55acee] w-[40px] h-[40px] leading-[40px] rounded-full">
            <img class="block mx-auto" src="@/assets/imgs/twitter.svg" alt="">
          </button>
          <button @click="openLink('linkedin')" class="bg-[#007ab9] w-[40px] h-[40px] leading-[40px] rounded-full">
            <img class="block mx-auto" src="@/assets/imgs/linkedin.svg" alt="">
          </button>
        </div>
      </div>
      <div>
        <h4 class="font-bold text-lg mb-6">{{$t('Footer.About Namaa')}}</h4>
        <ul class="leading-[1.8]">
          <li>
            <nuxt-link to="/" >{{$t('Footer.Home')}}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">{{$t('Footer.Projects')}}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">{{$t('Footer.Gallery')}}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">{{$t('Footer.Services')}}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">{{$t('Footer.Contact us')}}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">{{$t('Footer.About us')}}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">{{$t('Footer.Jobs')}}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">{{$t('Footer.News')}}</nuxt-link>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold text-lg mb-6">{{$t('Footer.Services')}}</h4>
        <ul class="leading-[1.8]">
          <li>
            <nuxt-link to="/" >{{$t('Footer.Home')}}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">{{$t('Footer.Projects')}}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">{{$t('Footer.Gallery')}}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">{{$t('Footer.Services')}}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">{{$t('Footer.Contact us')}}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">{{$t('Footer.About us')}}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">{{$t('Footer.Jobs')}}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">{{$t('Footer.News')}}</nuxt-link>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold text-lg mb-6">{{$t('Footer.Stay in the loop')}}</h4>
        <p class="max-w-[350px]">
          {{$t('Footer.Join')}}
        </p>
        <div class="mt-6">
          <div class="relative">
            <el-form :model="newsletter" ref="newsletterRef">
              <el-form-item prop="email" :rules="[{required: true, message: $t('Login.This field is required')}]">
                <input v-model="newsletter.email" class="p-[5px_20px] w-full rounded-full border border-grey-light" type="text" :placeholder="$t('Login.Enter your email address')">
              </el-form-item>
            </el-form>
            <button @click.prevent="submitNewsletter" class="absolute top-[5px] p-[9px_25px] bg-primary rounded-full text-white font-semibold" :class="$i18n.locale === 'en' ? 'right-[6px]' : 'left-[6px]'">{{$t('Footer.Send')}}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 border-t-[1px] border-grey-light pt-4">
      <h6 class="text-center text-grey text-sm">{{$t('Footer.copyright')}}</h6>
    </div>
  </div>
</template>

<script>
import {Loading} from "element-ui";

export default {
  data() {
    return {
      newsletter: {},
      companyInfo: {}
    }
  },
  mounted() {
    this.getCompanyInfo();
  },
  methods: {
    openLink(type) {
      if(type === 'facebook') {
        window.open(this.companyInfo.facbok_link, '_blank')
      }
      else if (type === 'twitter') {
        window.open(this.companyInfo.X_link, '_blank')
      }
      else if (type === 'linkedin') {
        window.open(this.companyInfo.LinkedIN_link, '_blank')
      }
    },
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
    submitNewsletter() {
      this.$refs.newsletterRef.validate((valid) => {
        if(valid) {
          console.log('valid!')
        }
      })
    }
  }
}
</script>
