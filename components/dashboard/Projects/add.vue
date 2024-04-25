<template>
  <div>
    <h3 class="font-bold text-xl my-3"> <i class="el-icon-plus"></i> Add New Project</h3>
    <el-form :model="addProject" ref="addProjectRef">
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]">
        <el-form-item prop="project_name_EN" :rules="[{required: true, message: 'This field is required'}]">
          <label for="project_name_EN">Name In english</label>
          <el-input id="project_name_EN" v-model="addProject.project_name_EN"></el-input>
        </el-form-item>
        <el-form-item prop="project_name_AR" :rules="[{required: true, message: 'This field is required'}]">
          <label for="project_name_AR">Project In arabic</label>
          <el-input id="project_name_AR" v-model="addProject.project_name_AR"></el-input>
        </el-form-item>

        <el-form-item prop="project_desc_EN" :rules="[{required: true, message: 'This field is required'}]">
          <label for="project_desc_EN">description in english</label>
          <el-input type="textarea" id="project_desc_EN" v-model="addProject.project_desc_EN"></el-input>
        </el-form-item>

        <el-form-item prop="project_desc_AR" :rules="[{required: true, message: 'This field is required'}]">
          <label for="project_desc_AR">description in arabic</label>
          <el-input type="textarea" id="project_desc_AR" v-model="addProject.project_desc_AR"></el-input>
        </el-form-item>

        <el-form-item prop="client_EN" :rules="[{required: true, message: 'This field is required'}]">
          <label for="client_EN">Client in english</label>
          <el-input id="client_EN" v-model="addProject.client_EN"></el-input>
        </el-form-item>

        <el-form-item prop="client_AR" :rules="[{required: true, message: 'This field is required'}]">
          <label for="client_AR">description in arabic</label>
          <el-input id="client_AR" v-model="addProject.client_AR"></el-input>
        </el-form-item>

        <el-form-item prop="project_type_EN" :rules="[{required: true, message: 'This field is required'}]">
          <label for="project_type_EN">Type in english</label>
          <el-input id="project_type_EN" v-model="addProject.project_type_EN"></el-input>
        </el-form-item>

        <el-form-item prop="project_type_AR" :rules="[{required: true, message: 'This field is required'}]">
          <label for="project_type_AR">Type in arabic</label>
          <el-input id="project_type_AR" v-model="addProject.project_type_AR"></el-input>
        </el-form-item>

        <el-form-item prop="project_date" :rules="[{required: true, message: 'This field is required'}]">
          <label for="project_date">Project Date</label>
          <el-date-picker
            v-model="addProject.project_date"
            id="project_date"
            style="width: 100%"
            type="date"
            placeholder="Pick a day">
          </el-date-picker>
        </el-form-item>
      </div>
      <div class="mb-4">
        <label class="mb-3 block text-sm">Project Image</label>
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
      <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" @click="addTheProject()">Add Project</button>
    </div>
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';
export default {
  data() {
    return {
      fileList: [],
      addProject: {}
    }
  },
  methods: {
    addTheProject() {
      this.$refs.addProjectRef.validate(async (valid) => {
        if(valid) {
          if(this.fileList.length === 0) {
            Notification.error({
              title: 'Error',
              message: 'You must add icon for that project'
            });
            return;
          }

          const formData = new FormData();
          formData.append('project_name_EN', this.addProject.project_name_EN);
          formData.append('project_name_AR', this.addProject.project_name_AR);
          formData.append('project_desc_EN', this.addProject.project_desc_EN);
          formData.append('project_desc_AR', this.addProject.project_desc_AR);
          formData.append('client_EN', this.addProject.client_EN);
          formData.append('client_AR', this.addProject.client_AR);
          formData.append('project_type_EN', this.addProject.project_type_EN);
          formData.append('project_type_AR', this.addProject.project_type_AR);
          formData.append('image', this.fileList?.[0]?.raw);
          formData.append('project_date', this.addProject.project_date);

          let loading = null;

          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.post('/projects', formData);
            Notification.success({
              title: 'Success',
              message: 'The project added successfully',
            });
            this.$router.push('/dashboard/projects');
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
