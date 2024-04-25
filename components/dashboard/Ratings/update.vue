<template>
  <div>
    <h3 class="font-bold text-xl my-3"> <i class="el-icon-plus"></i> Add New Ratings</h3>
    <el-form :model="addRates" ref="addRatesRef">
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]">
        <div>
          <el-form-item prop="company_name_AR" :rules="[{required: true, message: 'This field is required'}]">
            <label for="company_name_AR">Company Name In arabic</label>
            <el-input id="company_name_AR" v-model="addRates.company_name_AR"></el-input>
          </el-form-item>
        </div>

        <div>
          <el-form-item prop="company_name_EN" :rules="[{required: true, message: 'This field is required'}]">
            <label for="company_name_EN">Company Name In english</label>
            <el-input id="company_name_EN" v-model="addRates.company_name_EN"></el-input>
          </el-form-item>
        </div>


        <div>
          <el-form-item prop="feedback_AR" :rules="[{required: true, message: 'This field is required'}]">
            <label for="feedback_AR">Feedback In arabic</label>
            <el-input id="feedback_AR" v-model="addRates.feedback_AR"></el-input>
          </el-form-item>
        </div>

        <div>
          <el-form-item prop="feedback_EN" :rules="[{required: true, message: 'This field is required'}]">
            <label for="feedback_EN">Feedback In english</label>
            <el-input id="feedback_EN" v-model="addRates.feedback_EN"></el-input>
          </el-form-item>
        </div>

        <div>
          <el-form-item prop="customer_name_AR" :rules="[{required: true, message: 'This field is required'}]">
            <label for="customer_name_AR">Customer name In arabic</label>
            <el-input id="customer_name_AR" v-model="addRates.customer_name_AR"></el-input>
          </el-form-item>
        </div>

        <div>
          <el-form-item prop="customer_name_EN" :rules="[{required: true, message: 'This field is required'}]">
            <label for="customer_name_EN">Customer name In english</label>
            <el-input id="customer_name_EN" v-model="addRates.customer_name_EN"></el-input>
          </el-form-item>
        </div>


        <div>
          <el-form-item prop="position_AR" :rules="[{required: true, message: 'This field is required'}]">
            <label for="position_AR">Position In arabic</label>
            <el-input id="position_AR" v-model="addRates.position_AR"></el-input>
          </el-form-item>
        </div>


        <div>
          <el-form-item prop="position_EN" :rules="[{required: true, message: 'This field is required'}]">
            <label for="position_EN">Position In english</label>
            <el-input id="position_EN" v-model="addRates.position_EN"></el-input>
          </el-form-item>
        </div>

      </div>


      <div class="mb-4">
        <label class="mb-3 block text-sm">Company Logo</label>
        <el-upload
          class="upload-demo "
          drag
          action=""
          :auto-upload="false"
          :on-remove="handleRemove"
          :on-change="onChange"
          :file-list="fileList"
          list-type="picture"
          accept="image/*"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
          <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
        </el-upload>
      </div>
    </el-form>
    <div class="flex flex-row-reverse mt-3">
      <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" @click="addTheRatings()">update Rating</button>
    </div>
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';
export default {
  data() {
    return {
      fileList: [],
      addRates: {}
    }
  },
  mounted() {
    this.getRatingItems();
  },
  methods: {
    async getRatingItems() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const rateItem = await this.$axios.get(`/rates/${this.$route.params.id}`);
        this.addRates = {...this.addRates, ...rateItem.data};

        if(this.addRates.logo) {
          this.fileList.push({
            name: 'News Image',
            url: this.addRates.logo
          })
        }
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    },
    addTheRatings() {
      this.$refs.addRatesRef.validate(async (valid) => {
        if(valid) {
          if(this.fileList.length === 0) {
            Notification.error({
              title: 'Error',
              message: 'You must add company logo for that rating'
            });
            return;
          }

          const formData = new FormData();
          formData.append('company_name_AR', this.addRates.company_name_AR);
          formData.append('company_name_EN', this.addRates.company_name_EN);
          formData.append('feedback_AR', this.addRates.feedback_AR);
          formData.append('feedback_EN', this.addRates.feedback_EN);
          formData.append('customer_name_AR', this.addRates.customer_name_AR);
          formData.append('customer_name_EN', this.addRates.customer_name_EN);
          formData.append('position_AR', this.addRates.position_AR);
          formData.append('position_EN', this.addRates.position_EN);

          if(this.fileList?.[0]?.raw) {
            formData.append('logo', this.fileList?.[0]?.raw);
          } else {
            formData.append('logo', this.fileList?.[0]?.url);
          }

          let loading = null;

          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.put(`/rates/${this.$route.params.id}`, formData);
            Notification.success({
              title: 'Success',
              message: 'The rate added successfully',
            });
            this.$router.push('/dashboard/ratings');
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
    handleRemove(file, fileList) {
      // Handle removal logic here
      this.fileList = fileList;
      console.log('Remove: ', file, this.fileList);
    },
    onChange(file, fileList) {
      // Handle change logic here
      this.fileList = fileList;
      console.log('Change: ', file, this.fileList);
    }
  }
}
</script>

<style lang="postcss">
.el-loading-mask .el-loading-spinner svg {
  margin: auto !important;
}
</style>
