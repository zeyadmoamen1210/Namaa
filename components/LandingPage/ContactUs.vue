<template>
  <div class="bg-[url('@/assets/imgs/contactus-bg.png')] relative bg-cover bg-center after-before z-[3]">
    <div class="absolute z-[2] bg-[#2c2f6fa3] top-0 left-0 w-full lg:w-[50%] xl:w-[50%] h-full"></div>

    <div class="container mx-auto relative z-[3]">
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-[20px] ">
        <div class="p-10 ">
          <h2 class="text-3xl font-bold text-white mb-3">{{$t('Contact Us.Contact Us Title')}}</h2>
          <span class="font-normal text-xl text-[#C9C9C9]">{{$t('Contact Us.Say something to start a live chat')}}</span>

          <div>
            <div class="mt-[50px]">
              <div class="flex gap-[30px] items-start">
                <img src="@/assets/imgs/phone-icon.svg" alt="">
                <div>
                  <h6 class="text-white">{{$t('Contact Us.Phone')}}</h6>
                  <span class="text-white" v-if="companyInfo.phone && companyInfo.phone.length > 0"> {{companyInfo.phone[0]}} </span>
                  <h6 class="text-white">{{$t('Contact Us.Fax')}}</h6>
                  <span class="text-white"> {{companyInfo.fax}} </span>
                </div>
              </div>

              <div class="flex gap-[30px] mt-[30px] items-start">
                <img src="@/assets/imgs/ic_sharp-email.svg" alt="">
                <div>
                  <h6 class="text-white">{{$t('Contact Us.Email')}}</h6>
                  <span class="text-white"> {{companyInfo.emaile}} </span>
                  <h6 class="text-white">{{$t('Contact Us.POBox')}}</h6>
                  <span class="text-white">{{companyInfo.POBox}}</span>
                </div>
              </div>

              <div class="flex gap-[30px] mt-[30px] items-start">
                <img src="@/assets/imgs/location.svg" alt="">
                <div>
                  <h6 class="text-white">{{$t('Contact Us.Location')}}</h6>
                  <span class="text-white max-w-[330px] block">{{ $i18n.locale === 'ar' ? companyInfo.Address_AR : companyInfo.Address_EN }}،</span>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-16 flex gap-3">
            <button @click="openLink('twitter')" class="bg-white p-2 rounded-full"><img src="@/assets/imgs/twitter-2.svg" alt=""> </button>
            <button @click="openLink('insta')" class="bg-white p-2 rounded-full"><img src="@/assets/imgs/insta.svg" alt=""> </button>
          </div>
        </div>
        <div class="p-10 ">
          <el-form class="lg:mt-[40px]" :model="contactUsForm" ref="contactUsFormRef">
            <div class="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-[15px] mb-3 mt-3">
              <div>
                <label class="block text-white" for="first_name">{{$t('Contact Us.First Name')}}</label>
                <el-form-item prop="first_name" :rules="[{required: true, message: $t('Contact Us.this field is required')}]">
                  <el-input class="inline-input" id="first_name" v-model="contactUsForm.first_name"></el-input>
                </el-form-item>
              </div>
              <div>
                <label class="block text-white" for="last_name">{{$t('Contact Us.Last Name')}}</label>
                <el-form-item prop="last_name" :rules="[{required: true, message: $t('Contact Us.this field is required')}]">
                  <el-input class="inline-input" id="last_name" v-model="contactUsForm.last_name"></el-input>
                </el-form-item>
              </div>
              <div>
                <label class="block text-white" for="email">{{$t('Contact Us.Email')}}</label>
                <el-form-item prop="email" :rules="[{required: true, message: $t('Contact Us.this field is required')}]">
                  <el-input class="inline-input" id="email" v-model="contactUsForm.email"></el-input>
                </el-form-item>
              </div>
              <div>
                <label class="block text-white" for="phone">{{$t('Contact Us.Phone Number')}}</label>
                <el-form-item prop="phone" :rules="[{required: true, message: $t('Contact Us.this field is required')}]">
                  <el-input class="inline-input" v-model="contactUsForm.phone"></el-input>
                </el-form-item>
              </div>
            </div>
            <div>
              <label class="block text-white" for="subject">{{$t('Contact Us.Select Subject')}}</label>
              <div>
                <el-form-item prop="subject" :rules="[{required: true, message: $t('Contact Us.this field is required')}]">
                  <el-radio-group id="subject" v-model="contactUsForm.subject">
                    <el-radio class="text-white" size="medium" label="suggesion">{{$t('Contact Us.suggesion')}}</el-radio>
                    <el-radio class="text-white" size="medium" label="inquiry">{{$t('Contact Us.inquiry')}}</el-radio>
                    <el-radio class="text-white" size="medium" label="complaint">{{$t('Contact Us.complaint')}}</el-radio>
                  </el-radio-group>
                </el-form-item>
              </div>
            </div>
            <div>
              <label class="block text-white" for="message">{{$t('Contact Us.Message')}}</label>
              <el-form-item prop="message" :rules="[{required: true, message: $t('Contact Us.this field is required')}]">
                <el-input class="inline-input" id="message" v-model="contactUsForm.message"></el-input>
              </el-form-item>
            </div>
            <div class="flex flex-row-reverse mt-[40px]">
              <button @click.prevent="submit" class="bg-white text-transparent p-[8px_50px] rounded-full">{{$t('Contact Us.Send Message')}}</button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Loading, Notification} from "element-ui";

export default {
  mounted() {
    this.getCompanyInfo();
  },
  data() {
    return {
      contactUsForm: {
        subject: 'suggesion'
      },
      companyInfo: {}
    }
  },
  methods: {
    openLink(type) {
      if(type === 'insta') {
        window.open(this.companyInfo.insta_link, '_blank')
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
    submit() {
      this.$refs.contactUsFormRef.validate(async (valid) => {
        if(valid) {
          let loading = null;
          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.post('/cform', this.contactUsForm);
            Notification.success({
              title: 'Success',
              message: 'The message added successfully',
            });
            this.contactUsForm = {
              subject: 'suggesion'
            }
            window.scrollTo({top: 0, behavior: 'smooth'})
          } catch {
            Notification.error({
              title: 'Error',
              message: 'There is something wrong'
            });
          } finally {
            this.$nextTick(() => {
              loading.close();
            });
          }
        }
      })
    }
  }
}
</script>

<style lang="postcss">
.inline-input {
  .el-input__inner {
    background: transparent !important;
    color: #fff !important;
    border: none !important;
    border-radius: 0 !important;
    border-bottom: 2px solid #fff !important;
  }
}
</style>

