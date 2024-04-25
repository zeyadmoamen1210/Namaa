<template>
  <div>
    <h3 class="font-bold text-xl my-3"> <i class="el-icon-plus"></i> Update Company Info </h3>
    <el-form :model="updateCompanyInfo" ref="updateCompanyInfoRef">
      <div class="flex gap-3 items-center mb-5">
        <button :class="activeTab === 1 ? 'bg-primary text-[#fff]' : ''" class="px-3 py-2 rounded-lg text-sm" @click.prevent="activeTab = 1">About Company</button>
        <button :class="activeTab === 2 ? 'bg-primary text-[#fff]' : ''" class="px-3 py-2 rounded-lg text-sm" @click.prevent="activeTab = 2">Social Links</button>
      </div>

      <section v-if="activeTab === 1">
        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]">
          <el-form-item prop="about_us_EN" :rules="[{required: true, message: 'This field is required'}]">
            <label for="about_us_EN">About Us In english</label>
            <el-input :rows="7" type="textarea" id="about_us_EN" v-model="updateCompanyInfo.about_us_EN"></el-input>
          </el-form-item>
          <el-form-item prop="about_us_AR" :rules="[{required: true, message: 'This field is required'}]">
            <label for="about_us_AR">About Us In arabic</label>
            <el-input :rows="7" type="textarea" id="about_us_AR" v-model="updateCompanyInfo.about_us_AR"></el-input>
          </el-form-item>

          <el-form-item prop="vision_EN" :rules="[{required: true, message: 'This field is required'}]">
            <label for="vision_EN">Vision in english</label>
            <el-input :rows="7" type="textarea" id="vision_EN" v-model="updateCompanyInfo.vision_EN"></el-input>
          </el-form-item>

          <el-form-item prop="vision_AR" :rules="[{required: true, message: 'This field is required'}]">
            <label for="vision_AR">Vision in arabic</label>
            <el-input :rows="7" type="textarea" id="vision_AR" v-model="updateCompanyInfo.vision_AR"></el-input>
          </el-form-item>

          <el-form-item prop="message_EN" :rules="[{required: true, message: 'This field is required'}]">
            <label for="message_EN">Message in english</label>
            <el-input :rows="7" type="textarea" id="message_EN" v-model="updateCompanyInfo.message_EN"></el-input>
          </el-form-item>

          <el-form-item prop="message_AR" :rules="[{required: true, message: 'This field is required'}]">
            <label for="message_AR">Message in arabic</label>
            <el-input :rows="7" type="textarea" id="message_AR" v-model="updateCompanyInfo.message_AR"></el-input>
          </el-form-item>
        </div>

        <div class="border border-grey-light p-4 mb-4">
          <div class="flex items-center gap-[10px] justify-between">
            <h6 class="font-semibold text-xl">English Objectives</h6>
            <button @click.prevent="updateCompanyInfo.objectives_EN.push({title_EN: '', pragraph_EN: ''})" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-plus"></i> Add </button>
          </div>
          <div class="border-b border-grey-light pb-4 mb-4" v-for="(obj, index) in updateCompanyInfo.objectives_EN" :key="index">

            <div class="flex gap-[10px] items-center justify-between pt-3">
              <h6 class="font-semibold">English Objective #{{index+1}}</h6>
              <button v-if="index != 0" @click.prevent="updateCompanyInfo.objectives_EN.splice(index, 1)" class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-close"></i> </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]">
              <el-form-item :prop="`objectives_EN[${index}].title_EN`" :rules="[{required: true, message: 'This field is required'}]">
                <label for="title_EN">Title in english</label>
                <el-input :rows="7" type="textarea" id="title_EN" v-model="obj.title_EN"></el-input>
              </el-form-item>

              <el-form-item :prop="`objectives_EN[${index}].pragraph_EN`" :rules="[{required: true, message: 'This field is required'}]">
                <label for="pragraph_EN">paragraph in arabic</label>
                <el-input :rows="7" type="textarea" id="pragraph_EN" v-model="obj.pragraph_EN"></el-input>
              </el-form-item>
            </div>
          </div>
        </div>

        <div class="border border-grey-light p-4 mb-4">
          <div class="flex items-center gap-[10px] justify-between">
            <h6 class="font-semibold text-xl">Arabic Objectives</h6>
            <button @click.prevent="updateCompanyInfo.objectives_AR.push({title_AR: '', pragraph_AR: ''})" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-plus"></i> Add </button>
          </div>
          <div class="border-b border-grey-light pb-4 mb-4" v-for="(obj, index) in updateCompanyInfo.objectives_AR" :key="index">

            <div class="flex gap-[10px] items-center justify-between pt-3">
              <h6 class="font-semibold">Arabic Objective #{{index+1}}</h6>
              <button v-if="index != 0" @click.prevent="updateCompanyInfo.objectives_AR.splice(index, 1)" class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-close"></i> </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]">
              <el-form-item :prop="`objectives_AR[${index}].title_AR`" :rules="[{required: true, message: 'This field is required'}]">
                <label for="title_AR">Title in arabic</label>
                <el-input :rows="7" type="textarea" id="title_AR" v-model="obj.title_AR"></el-input>
              </el-form-item>

              <el-form-item :prop="`objectives_AR[${index}].pragraph_AR`" :rules="[{required: true, message: 'This field is required'}]">
                <label for="pragraph_AR">paragraph in arabic</label>
                <el-input :rows="7" type="textarea" id="pragraph_AR" v-model="obj.pragraph_AR"></el-input>
              </el-form-item>
            </div>


          </div>
        </div>
      </section>
      <section v-else>
        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]">
          <el-form-item prop="emaile" :rules="[{required: true, message: 'This field is required'}]">
            <label for="emaile">Email</label>
            <el-input id="emaile" v-model="updateCompanyInfo.emaile"></el-input>
          </el-form-item>

          <el-form-item prop="fax" :rules="[{required: true, message: 'This field is required'}]">
            <label for="fax">Fax</label>
            <el-input id="fax" v-model="updateCompanyInfo.fax"></el-input>
          </el-form-item>

          <el-form-item prop="POBox" :rules="[{required: true, message: 'This field is required'}]">
            <label for="POBox">POBox</label>
            <el-input id="POBox" v-model="updateCompanyInfo.POBox"></el-input>
          </el-form-item>

          <el-form-item prop="facbok_link" :rules="[{required: true, message: 'This field is required'}]">
            <label for="facbok_link">Facebook Link</label>
            <el-input id="facbok_link" v-model="updateCompanyInfo.facbok_link"></el-input>
          </el-form-item>

          <el-form-item prop="LinkedIN_link" :rules="[{required: true, message: 'This field is required'}]">
            <label for="LinkedIN_link">LinkedIn Link</label>
            <el-input id="LinkedIN_link" v-model="updateCompanyInfo.LinkedIN_link"></el-input>
          </el-form-item>

          <el-form-item prop="X_link" :rules="[{required: true, message: 'This field is required'}]">
            <label for="X_link">Twitter Link</label>
            <el-input id="X_link" v-model="updateCompanyInfo.X_link"></el-input>
          </el-form-item>

          <el-form-item prop="insta_link" :rules="[{required: true, message: 'This field is required'}]">
            <label for="insta_link">Instagram Link</label>
            <el-input id="insta_link" v-model="updateCompanyInfo.insta_link"></el-input>
          </el-form-item>


          <el-form-item prop="Address_AR" :rules="[{required: true, message: 'This field is required'}]">
            <label for="Address_AR">Address AR</label>
            <el-input id="Address_AR" v-model="updateCompanyInfo.Address_AR"></el-input>
          </el-form-item>

          <el-form-item prop="Address_EN" :rules="[{required: true, message: 'This field is required'}]">
            <label for="Address_EN">Address EN</label>
            <el-input id="Address_EN" v-model="updateCompanyInfo.Address_EN"></el-input>
          </el-form-item>

        </div>


        <div class="border border-grey-light p-4 mb-4">
          <div class="flex items-center gap-[10px] justify-between">
            <h6 class="font-semibold text-xl">Phones</h6>
            <button @click.prevent="updateCompanyInfo.phone.push('')" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-plus"></i> Add </button>
          </div>
          <div class="border-b border-grey-light pb-4 mb-4" v-for="(obj, index) in updateCompanyInfo.phone" :key="index">

            <div class="flex gap-[10px] items-center justify-between pt-3">
              <h6 class="font-semibold">Phone #{{index+1}}</h6>
              <button v-if="index != 0" @click.prevent="updateCompanyInfo.phone.splice(index, 1)" class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-close"></i> </button>
            </div>

            <el-form-item :prop="`phone[${index}]`" :rules="[{required: true, message: 'This field is required'}]">
              <label :for="`phone[${index}]`">Phone</label>
              <el-input :id="`phone[${index}]`" v-model="updateCompanyInfo.phone[index]"></el-input>
            </el-form-item>
          </div>
        </div>

      </section>

    </el-form>
    <div class="flex flex-row-reverse mt-3">
      <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" @click="updateTheCompanyInfo()">Update The Company Info</button>
    </div>
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';
export default {
  layout: 'dashboard',
  data() {
    return {
      activeTab:1,
      updateCompanyInfo: {
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
  mounted() {
    this.getCompanyInfo()
  },
  methods: {
    async getCompanyInfo() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const updateCompanyInfo = await this.$axios.get('/company_info');
        this.updateCompanyInfo = updateCompanyInfo.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    },
    updateTheCompanyInfo() {
      this.$refs.updateCompanyInfoRef.validate(async (valid) => {
        if(valid) {

          let loading = null;

          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.put(`/company_info/${this.$route.params.id}`, this.updateCompanyInfo);
            Notification.success({
              title: 'Success',
              message: 'The company info updated successfully',
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
