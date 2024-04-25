<template>
  <div>
    <h3 class="font-bold text-xl my-3"> <i class="el-icon-plus"></i> Add New Gallery</h3>
    <el-form :model="addGallery" ref="addGalleryRef">
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]">
        <el-form-item prop="nameAR" :rules="[{required: true, message: 'This field is required'}]">
          <label for="nameAR">Name In arabic</label>
          <el-input id="nameAR" v-model="addGallery.nameAR"></el-input>
        </el-form-item>
        <el-form-item prop="nameEN" :rules="[{required: true, message: 'This field is required'}]">
          <label for="nameEN">News In english</label>
          <el-input id="nameEN" v-model="addGallery.nameEN"></el-input>
        </el-form-item>


<!--        <el-form-item prop="date">-->
<!--          <label for="date">News Date</label>-->
<!--          <el-date-picker-->
<!--            v-model="addGallery.date"-->
<!--            id="date"-->
<!--            style="width: 100%"-->
<!--            type="date"-->
<!--            placeholder="Pick a day">-->
<!--          </el-date-picker>-->
<!--        </el-form-item>-->

        <el-form-item prop="tag" :rules="[{required: true, message: 'This field is required'}]">
          <label for="tag">Tag</label>
          <el-select v-model="addGallery.tag" id="tag" style="width: 100%">
            <el-option
              v-for="item in [{name: 'Images', value:'images'}, {name: 'Videos', value: 'videos'}]"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </div>

      <div class="mb-4">
        <label class="mb-3 block text-sm">Cover Image</label>
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
      <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" @click="addTheGallery()">Add Gallery</button>
    </div>
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';
export default {
  data() {
    return {
      fileList: [],
      addGallery: {
        tag: 'images'
      }
    }
  },
  methods: {
    addTheGallery() {
      this.$refs.addGalleryRef.validate(async (valid) => {
        if(valid) {
          if(this.fileList.length === 0) {
            Notification.error({
              title: 'Error',
              message: 'You must add icon for that news'
            });
            return;
          }

          const formData = new FormData();
          formData.append('nameAR', this.addGallery.nameAR);
          formData.append('nameEN', this.addGallery.nameEN);
          if(this.addGallery.date) {
            formData.append('date', new Date(this.addGallery.date).toLocaleString());
          }
          formData.append('tag', this.addGallery.tag);
          formData.append('cover', this.fileList?.[0]?.raw);

          let loading = null;

          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.post('/gallery-folders', formData);
            Notification.success({
              title: 'Success',
              message: 'The gallery added successfully',
            });
            this.$router.push('/dashboard/gallery');
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
