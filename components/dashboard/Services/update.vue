<template>
  <div>
    <h3 class="font-bold text-xl my-3"> <i class="el-icon-plus"></i> Update Service</h3>
    <el-form :model="updateService" ref="updateServiceRef">
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]">
        <el-form-item prop="title_EN" :rules="[{required: true, message: 'This field is required'}]">
          <label for="title_EN">Title In english</label>
          <el-input id="title_EN" v-model="updateService.title_EN"></el-input>
        </el-form-item>
        <el-form-item prop="title_AR" :rules="[{required: true, message: 'This field is required'}]">
          <label for="title_AR">Title In arabic</label>
          <el-input id="title_AR" v-model="updateService.title_AR"></el-input>
        </el-form-item>

        <el-form-item prop="description_EN" :rules="[{required: true, message: 'This field is required'}]">
          <label for="description_EN">description in english</label>
          <el-input type="textarea" id="description_EN" v-model="updateService.description_EN"></el-input>
        </el-form-item>

        <el-form-item prop="description_AR" :rules="[{required: true, message: 'This field is required'}]">
          <label for="description_AR">description in arabic</label>
          <el-input type="textarea" id="description_AR" v-model="updateService.description_AR"></el-input>
        </el-form-item>
      </div>

      <div class="mb-4">
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

      <div class="flex items-center gap-[10px] justify-between">
        <h6 class="font-semibold text-xl">Sub services</h6>
        <button @click.prevent="addNewSubService()" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-plus"></i> Add New </button>
      </div>

      <div class="border-b border-grey-light" v-for="(sub_service, index) in updateService.sub_services" :key="index">
        <div class="flex gap-[10px] items-center justify-between pt-3">
          <h6 class="font-semibold">Service#{{index+1}}</h6>
          <button v-if="index != 0" @click.prevent="deleteSubService(index)" class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-close"></i> </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px] ">
          <el-form-item :prop="`sub_services[${index}].sub_services_title_EN`" :rules="[{required: true, message: 'This field is required'}]">
            <label :for="`sub_services[${index}].sub_services_title_EN`">Title In english</label>
            <el-input :id="`sub_services[${index}].sub_services_title_EN`" v-model="updateService.sub_services[index].sub_services_title_EN"></el-input>
          </el-form-item>

          <el-form-item :prop="`sub_services[${index}].sub_services_title_AR`" :rules="[{required: true, message: 'This field is required'}]">
            <label :for="`sub_services[${index}].sub_services_title_AR`">Title In arabic</label>
            <el-input :id="`sub_services[${index}].sub_services_title_AR`" v-model="updateService.sub_services[index].sub_services_title_AR"></el-input>
          </el-form-item>

          <el-form-item :prop="`sub_services[${index}].sub_services_description_EN`" :rules="[{required: true, message: 'This field is required'}]">
            <label :for="`sub_services[${index}].sub_services_description_EN`">Description In english</label>
            <el-input :id="`sub_services[${index}].sub_services_description_EN`" v-model="updateService.sub_services[index].sub_services_description_EN"></el-input>
          </el-form-item>

          <el-form-item :prop="`sub_services[${index}].sub_services_description_AR`" :rules="[{required: true, message: 'This field is required'}]">
            <label :for="`sub_services[${index}].sub_services_description_AR`">Description In arabic</label>
            <el-input :id="`sub_services[${index}].sub_services_description_AR`" v-model="updateService.sub_services[index].sub_services_description_AR"></el-input>
          </el-form-item>
        </div>
      </div>
    </el-form>
    <div class="flex flex-row-reverse mt-3">
      <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" @click="updateTheService()">Update Service</button>
    </div>
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';
export default {
  mounted() {
    this.getService();
  },
  data() {
    return {
      fileList: [],
      updateService: {
        sub_services: []
      }
    }
  },
  methods: {
    async getService() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const service = await this.$axios.get(`/services/${this.$route.params.id}`);
        this.updateService = {...this.updateService, ...service.data};

        const sub_services = [];
        this.updateService.sub_services_AR.map((ele, index) => {
          sub_services.push({
            sub_services_title_AR: ele.sub_services_title_AR,
            sub_services_title_EN: this.updateService.sub_services_EN[index].sub_services_title_EN,
            sub_services_description_AR: ele.sub_services_description_AR,
            sub_services_description_EN: this.updateService.sub_services_EN[index].sub_services_description_EN
          })
        });

        this.updateService.sub_services = [...this.updateService.sub_services, ...sub_services];

        if(this.updateService.icon) {
          this.fileList.push({
            name: 'service icon',
            url: this.updateService.icon
          })
        }

      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    },
    updateTheService() {
      this.$refs.updateServiceRef.validate(async (valid) => {
        if(valid) {
          if(this.fileList.length === 0) {
            Notification.error({
              title: 'Error',
              message: 'You must add icon for that service'
            });
            return;
          }

          const formData = new FormData();
          formData.append('title_AR', this.updateService.title_AR);
          formData.append('title_EN', this.updateService.title_EN);
          formData.append('description_AR', this.updateService.description_AR);
          formData.append('description_EN', this.updateService.description_EN);

          if(this.fileList?.[0]?.raw) {
            formData.append('icon', this.fileList?.[0]?.raw);
          } else {
            formData.append('icon', this.fileList?.[0]?.url);
          }

          this.updateService.sub_services.forEach((ele) => {
            formData.append('sub_services_title_AR', ele.sub_services_title_AR);
            formData.append('sub_services_title_EN', ele.sub_services_title_EN);
            formData.append('sub_services_description_AR', ele.sub_services_description_AR);
            formData.append('sub_services_description_EN', ele.sub_services_description_EN);
          });

          let loading = null;
          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.put(`/services/${this.$route.params.id}`, formData);
            Notification.success({
              title: 'Success',
              message: 'The services updated successfully',
            });
            this.$router.push('/dashboard/services');
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
    async addNewSubService() {
      this.updateService.sub_services.push({
        sub_services_title_AR: '',
        sub_services_title_EN: '',
        sub_services_description_AR: '',
        sub_services_description_EN: '',
      });
      await this.$nextTick();
      window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
    },
    deleteSubService(index) {
      this.updateService.sub_services.splice(index, 1);
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
