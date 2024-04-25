<template>
  <div>
    <h3 class="font-bold text-xl my-3"> <i class="el-icon-plus"></i> Add New Partner</h3>
    <el-form :model="addPartner" ref="addPartnerRef">
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]">
        <el-form-item prop="name_EN" :rules="[{required: true, message: 'This field is required'}]">
          <label for="name_EN">Name In english</label>
          <el-input id="name_EN" v-model="addPartner.name_EN"></el-input>
        </el-form-item>
        <el-form-item prop="name_AR" :rules="[{required: true, message: 'This field is required'}]">
          <label for="name_AR">Name In arabic</label>
          <el-input id="name_AR" v-model="addPartner.name_AR"></el-input>
        </el-form-item>

        <el-form-item prop="link_site" >
          <label for="link_site">Website link</label>
          <el-input id="link_site" v-model="addPartner.link_site"></el-input>
        </el-form-item>

        <el-form-item prop="type_of_image" :rules="[{required: true, message: 'This field is required'}]">
          <label for="type_of_image">Type of image</label>
          <el-select style="width: 100%" v-model="addPartner.type_of_image" placeholder=" ">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>


      </div>
      <div class="mb-4">
        <label class="mb-3 block text-sm">Partner Image</label>
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
      <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" @click="addThePartner()">Add Partner / Certificate</button>
    </div>
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';
export default {
  data() {
    return {
      fileList: [],
      addPartner: {},
      options: [{name: 'Partner', value: 'partner'}, {name: 'Certificate', value: 'certificate'}]
    }
  },
  methods: {
    addThePartner() {
      this.$refs.addPartnerRef.validate(async (valid) => {
        if(valid) {
          if(this.fileList.length === 0) {
            Notification.error({
              title: 'Error',
              message: 'You must add icon for that partner'
            });
            return;
          }

          const formData = new FormData();
          formData.append('name_AR', this.addPartner.name_AR);
          formData.append('name_EN', this.addPartner.name_EN);

          if(this.addPartner.link_site) {
            formData.append('link_site', this.addPartner.link_site);
          }

          formData.append('type_of_image', this.addPartner.type_of_image);

          formData.append('image', this.fileList?.[0]?.raw);

          let loading = null;

          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.post('/partners', formData);
            Notification.success({
              title: 'Success',
              message: 'The partner added successfully',
            });
            this.$router.push('/dashboard/partners');
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
