<template>
  <div>
    <h3 class="font-bold text-xl my-3"> <i class="el-icon-plus"></i> Add Company Info </h3>
    <el-form :model="addCompanyInfo" ref="addCompanyInfoRef">
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]">
        <el-form-item prop="about_us_EN" :rules="[{required: true, message: 'This field is required'}]">
          <label for="about_us_EN">About Us In english</label>
          <el-input  type="textarea" id="about_us_EN" v-model="addCompanyInfo.about_us_EN"></el-input>
        </el-form-item>
        <el-form-item prop="about_us_AR" :rules="[{required: true, message: 'This field is required'}]">
          <label for="about_us_AR">About Us In arabic</label>
          <el-input type="textarea" id="about_us_AR" v-model="addCompanyInfo.about_us_AR"></el-input>
        </el-form-item>

        <el-form-item prop="vision_EN" :rules="[{required: true, message: 'This field is required'}]">
          <label for="vision_EN">Vision in english</label>
          <el-input type="textarea" id="vision_EN" v-model="addCompanyInfo.vision_EN"></el-input>
        </el-form-item>

        <el-form-item prop="vision_AR" :rules="[{required: true, message: 'This field is required'}]">
          <label for="vision_AR">Vision in arabic</label>
          <el-input type="textarea" id="vision_AR" v-model="addCompanyInfo.vision_AR"></el-input>
        </el-form-item>

        <el-form-item prop="message_EN" :rules="[{required: true, message: 'This field is required'}]">
          <label for="message_EN">Message in english</label>
          <el-input type="textarea" id="message_EN" v-model="addCompanyInfo.message_EN"></el-input>
        </el-form-item>

        <el-form-item prop="message_AR" :rules="[{required: true, message: 'This field is required'}]">
          <label for="message_AR">Message in arabic</label>
          <el-input type="textarea" id="message_AR" v-model="addCompanyInfo.message_AR"></el-input>
        </el-form-item>
      </div>

      <div class="border border-grey-light p-4 mb-4">
        <div class="flex items-center gap-[10px] justify-between">
          <h6 class="font-semibold text-xl">English Objectives</h6>
          <button @click.prevent="addCompanyInfo.objectives_EN.push({title_EN: '', pragraph_EN: ''})" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-plus"></i> Add </button>
        </div>
        <div class="border-b border-grey-light pb-4 mb-4" v-for="(obj, index) in addCompanyInfo.objectives_EN" :key="index">

          <div class="flex gap-[10px] items-center justify-between pt-3">
            <h6 class="font-semibold">English Objective #{{index+1}}</h6>
            <button v-if="index != 0" @click.prevent="addCompanyInfo.objectives_EN.splice(index, 1)" class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-close"></i> </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]">
            <el-form-item :prop="`objectives_EN[${index}].title_EN`" :rules="[{required: true, message: 'This field is required'}]">
              <label for="title_EN">Title in english</label>
              <el-input type="textarea" id="title_EN" v-model="obj.title_EN"></el-input>
            </el-form-item>

            <el-form-item :prop="`objectives_EN[${index}].pragraph_EN`" :rules="[{required: true, message: 'This field is required'}]">
              <label for="pragraph_EN">paragraph in arabic</label>
              <el-input type="textarea" id="pragraph_EN" v-model="obj.pragraph_EN"></el-input>
            </el-form-item>
          </div>


        </div>
      </div>

      <div class="border border-grey-light p-4 mb-4">
        <div class="flex items-center gap-[10px] justify-between">
          <h6 class="font-semibold text-xl">Arabic Objectives</h6>
          <button @click.prevent="addCompanyInfo.objectives_AR.push({title_AR: '', pragraph_AR: ''})" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-plus"></i> Add </button>
        </div>
        <div class="border-b border-grey-light pb-4 mb-4" v-for="(obj, index) in addCompanyInfo.objectives_AR" :key="index">

          <div class="flex gap-[10px] items-center justify-between pt-3">
            <h6 class="font-semibold">Arabic Objective #{{index+1}}</h6>
            <button v-if="index != 0" @click.prevent="addCompanyInfo.objectives_AR.splice(index, 1)" class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-close"></i> </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]">
            <el-form-item :prop="`objectives_AR[${index}].title_AR`" :rules="[{required: true, message: 'This field is required'}]">
              <label for="title_AR">Title in arabic</label>
              <el-input type="textarea" id="title_AR" v-model="obj.title_AR"></el-input>
            </el-form-item>

            <el-form-item :prop="`objectives_AR[${index}].pragraph_AR`" :rules="[{required: true, message: 'This field is required'}]">
              <label for="pragraph_AR">paragraph in arabic</label>
              <el-input type="textarea" id="pragraph_AR" v-model="obj.pragraph_AR"></el-input>
            </el-form-item>
          </div>


        </div>
      </div>

    </el-form>
    <div class="flex flex-row-reverse mt-3">
      <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" @click="addTheCompanyInfo()">Add The Company Info</button>
    </div>
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';
export default {
  layout: 'dashboard',
  data() {
    return {
      addCompanyInfo: {
        objectives_EN: [
          {
            'title_EN': '',
            'pragraph_EN': '',
          }
        ],
        objectives_AR: [
          {
            'title_AR': '',
            'pragraph_AR': ''
          }
        ]
      }
    }
  },
  methods: {
    addTheCompanyInfo() {
      this.$refs.addCompanyInfoRef.validate(async (valid) => {
        if(valid) {

          let loading = null;

          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.post('/company_info', this.addCompanyInfo);
            Notification.success({
              title: 'Success',
              message: 'The company info added successfully',
            });
            this.$router.push('/dashboard/company-info');
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
    },
  }
}
</script>

<style lang="postcss">
.el-loading-mask .el-loading-spinner svg {
  margin: auto !important;
}
</style>
