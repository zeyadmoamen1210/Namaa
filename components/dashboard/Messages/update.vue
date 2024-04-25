<template>
  <div>
    <h3 class="font-bold text-xl my-3"> <i class="el-icon-plus"></i> Update Message</h3>
    <el-form :model="updateMessage" ref="updateMessageRef">
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]">
        <div>
          <el-form-item prop="name_AR" :rules="[{required: true, message: 'This field is required'}]">
            <label for="name_AR">Name In arabic</label>
            <el-input id="name_AR" v-model="updateMessage.name_AR"></el-input>
          </el-form-item>
        </div>

        <div>
          <el-form-item prop="name_EN" :rules="[{required: true, message: 'This field is required'}]">
            <label for="name_EN">Name In english</label>
            <el-input id="name_EN" v-model="updateMessage.name_EN"></el-input>
          </el-form-item>
        </div>

        <div>
          <el-form-item prop="position_AR" :rules="[{required: true, message: 'This field is required'}]">
            <label for="position_AR">Position In arabic</label>
            <el-input id="position_AR" v-model="updateMessage.position_AR"></el-input>
          </el-form-item>
        </div>

        <div>
          <el-form-item prop="position_EN" :rules="[{required: true, message: 'This field is required'}]">
            <label for="position_EN">Position In english</label>
            <el-input id="position_EN" v-model="updateMessage.position_EN"></el-input>
          </el-form-item>
        </div>

        <div>
          <el-form-item prop="message_paragraph_AR" :rules="[{required: true, message: 'This field is required'}]">
            <label for="message_paragraph_AR">Message Paragraph Arabic</label>
            <el-input type="textarea" id="message_paragraph_AR" v-model="updateMessage.message_paragraph_AR"></el-input>
          </el-form-item>
        </div>


        <div>
          <el-form-item prop="message_paragraph_EN" :rules="[{required: true, message: 'This field is required'}]">
            <label for="message_paragraph_EN">Message Paragraph English</label>
            <el-input type="textarea" id="message_paragraph_EN" v-model="updateMessage.message_paragraph_EN"></el-input>
          </el-form-item>
        </div>
      </div>


      <div class="mb-4">
        <label class="mb-3 block text-sm">News Image</label>
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
      <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" @click="updateTheMessage()">Update Message</button>
    </div>
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';
export default {
  data() {
    return {
      fileList: [],
      updateMessage: {}
    }
  },
  mounted() {
    this.getMessageItem();
  },
  methods: {
    async getMessageItem() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const messageItem = await this.$axios.get(`/messages/${this.$route.params.id}`);
        this.updateMessage = {...this.updateMessage, ...messageItem.data};

        if(this.updateMessage.image) {
          this.fileList.push({
            name: 'News Image',
            url: this.updateMessage.image
          })
        }
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    },
    updateTheMessage() {
      this.$refs.updateMessageRef.validate(async (valid) => {
        if(valid) {
          if(this.fileList.length === 0) {
            Notification.error({
              title: 'Error',
              message: 'You must add icon for that message'
            });
            return;
          }

          const formData = new FormData();
          formData.append('name_AR', this.updateMessage.name_AR);
          formData.append('name_EN', this.updateMessage.name_EN);
          formData.append('position_AR', this.updateMessage.position_AR);
          formData.append('position_EN', this.updateMessage.position_EN);
          formData.append('message_paragraph_AR', this.updateMessage.message_paragraph_AR);
          formData.append('message_paragraph_EN', this.updateMessage.message_paragraph_EN);

          if(this.fileList?.[0]?.raw) {
            formData.append('image', this.fileList?.[0]?.raw);
          } else {
            formData.append('image', this.fileList?.[0]?.url);
          }

          let loading = null;

          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.put(`/messages/${this.$route.params.id}`, formData);
            Notification.success({
              title: 'Success',
              message: 'The Messages update successfully',
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
