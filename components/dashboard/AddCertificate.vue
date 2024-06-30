<template>
  <div>
    <h3 class="font-bold text-xl my-3"> <i class="el-icon-plus"></i> Add New Certificate</h3>

    <el-form :model="addCertificate" ref="addCertificateRef">
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]">

        <el-form-item prop="title_AR" :rules="[{required: true, message: 'This field is required'}]">
          <label for="title_AR">Title In arabic</label>
          <el-input id="title_AR" v-model="addCertificate.title_AR"></el-input>
        </el-form-item>

        <el-form-item prop="title_EN" :rules="[{required: true, message: 'This field is required'}]">
          <label for="title_EN">Title In english</label>
          <el-input id="title_EN" v-model="addCertificate.title_EN"></el-input>
        </el-form-item>


        <el-form-item prop="description_AR" :rules="[{required: true, message: 'This field is required'}]">
          <label for="description_AR">Description In arabic</label>
          <el-input id="description_AR" v-model="addCertificate.description_AR"></el-input>
        </el-form-item>

        <el-form-item prop="description_EN" :rules="[{required: true, message: 'This field is required'}]">
          <label for="description_EN">Description In english</label>
          <el-input id="description_EN" v-model="addCertificate.description_EN"></el-input>
        </el-form-item>

      </div>

      <div class="mb-4">
        <label class="mb-3 block text-sm">Image</label>
        <el-upload
          class="upload-demo "
          drag
          action=""
          :auto-upload="false"
          :on-remove="handleRemove"
          :on-change="onChange"
          :file-list="fileList"
          accept="image/*"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
          <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
        </el-upload>
      </div>
    </el-form>
    <div class="flex flex-row-reverse mt-3">
      <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" @click="addTheCertificate()">Add Certificate</button>
    </div>
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';
export default {
  data() {
    return {
      fileList: [],
      addCertificate: {
      }
    }
  },
  methods: {
    addTheCertificate() {
      this.$refs.addCertificateRef.validate(async (valid) => {
        if(valid) {
          if(this.fileList.length === 0) {
            Notification.error({
              title: 'Error',
              message: 'You must add Image for that Certificate'
            });
            return;
          }

          const formData = new FormData();
          formData.append('title_AR', this.addCertificate.title_AR);
          formData.append('title_EN', this.addCertificate.title_EN);
          formData.append('description_EN', this.addCertificate.description_EN);
          formData.append('description_AR', this.addCertificate.description_AR);

          formData.append('image', this.fileList?.[0]?.raw);

          let loading = null;

          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.post('/certificates', formData);
            Notification.success({
              title: 'Success',
              message: 'The certificate added successfully',
            });
            this.$router.push('/dashboard/certificates');
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
