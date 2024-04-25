<template>
  <div>
    <h3 class="font-bold text-xl my-3"> <i class="el-icon-plus"></i> Add New Message</h3>
    <el-form :model="addMessage" ref="addMessageRef">
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]">
        <div>
          <el-form-item prop="name_AR" :rules="[{required: true, message: 'This field is required'}]">
            <label for="name_AR">Name In arabic</label>
            <el-input id="name_AR" v-model="addMessage.name_AR"></el-input>
          </el-form-item>
        </div>

        <div>
          <el-form-item prop="name_EN" :rules="[{required: true, message: 'This field is required'}]">
            <label for="name_EN">Name In english</label>
            <el-input id="name_EN" v-model="addMessage.name_EN"></el-input>
          </el-form-item>
        </div>

        <div>
          <el-form-item prop="position_AR" :rules="[{required: true, message: 'This field is required'}]">
            <label for="position_AR">Position In arabic</label>
            <el-input id="position_AR" v-model="addMessage.position_AR"></el-input>
          </el-form-item>
        </div>

        <div>
          <el-form-item prop="position_EN" :rules="[{required: true, message: 'This field is required'}]">
            <label for="position_EN">Position In english</label>
            <el-input id="position_EN" v-model="addMessage.position_EN"></el-input>
          </el-form-item>
        </div>

        <div>
          <el-form-item prop="message_paragraph_AR" :rules="[{required: true, message: 'This field is required'}]">
            <label for="message_paragraph_AR">Message Paragraph Arabic</label>
            <el-input type="textarea" id="message_paragraph_AR" v-model="addMessage.message_paragraph_AR"></el-input>
          </el-form-item>
        </div>


        <div>
          <el-form-item prop="message_paragraph_EN" :rules="[{required: true, message: 'This field is required'}]">
            <label for="message_paragraph_EN">Message Paragraph English</label>
            <el-input type="textarea" id="message_paragraph_EN" v-model="addMessage.message_paragraph_EN"></el-input>
          </el-form-item>
        </div>
      </div>


      <div class="mb-4">
        <label class="mb-3 block text-sm">News Image</label>
        <el-upload
          class="upload-demo"
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
      <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" @click="addTheMessage()">Add Message</button>
    </div>
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';
export default {
  data() {
    return {
      fileList: [],
      addMessage: {}
    }
  },
  methods: {
    addTheMessage() {
      this.$refs.addMessageRef.validate(async (valid) => {
        if(valid) {
          if(this.fileList.length === 0) {
            Notification.error({
              title: 'Error',
              message: 'You must add icon for that message'
            });
            return;
          }

          const formData = new FormData();
          formData.append('name_AR', this.addMessage.name_AR);
          formData.append('name_EN', this.addMessage.name_EN);
          formData.append('position_AR', this.addMessage.position_AR);
          formData.append('position_EN', this.addMessage.position_EN);
          formData.append('message_paragraph_AR', this.addMessage.message_paragraph_AR);
          formData.append('message_paragraph_EN', this.addMessage.message_paragraph_EN);
          formData.append('image', this.fileList?.[0]?.raw);

          let loading = null;

          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.post('/messages', formData);
            Notification.success({
              title: 'Success',
              message: 'The Messages added successfully',
            });
            this.$router.push('/dashboard/messages');
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
