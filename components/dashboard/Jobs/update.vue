<template>
  <div>
    <h3 class="font-bold text-xl my-3"> <i class="el-icon-plus"></i> Update Job</h3>
    <el-form :model="updateJob" ref="updateJobRef">
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]">
        <el-form-item prop="title_AR" :rules="[{required: true, message: 'This field is required'}]">
          <label for="title_AR">Title In arabic</label>
          <el-input id="title_AR" v-model="updateJob.title_AR"></el-input>
        </el-form-item>
        <el-form-item prop="title_EN" :rules="[{required: true, message: 'This field is required'}]">
          <label for="title_EN">Title In english</label>
          <el-input id="title_EN" v-model="updateJob.title_EN"></el-input>
        </el-form-item>

        <el-form-item prop="jobType" :rules="[{required: true, message: 'This field is required'}]">
          <label for="jobType">Job Type</label>
          <el-select style="width: 100%" v-model="updateJob.jobType" placeholder=" ">
            <el-option
              v-for="item in jobTypes"
              :key="item.value"
              :label="item.key"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

      </div>


      <div class="flex items-center gap-[10px] justify-between mt-4">
        <h6 class="font-semibold text-xl">Descriptions</h6>
        <button @click.prevent="updateJob.descriptions.push({description_AR: '', description_EN: ''})" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-plus"></i> Add Description </button>
      </div>
      <div class="border-b border-grey-light" v-for="(description, index) in updateJob.descriptions" :key="index">
        <div class="flex gap-[10px] items-center justify-between pt-3">
          <h6 class="font-semibold">Description#{{index+1}}</h6>
          <button v-if="index != 0" @click.prevent="updateJob.descriptions.splice(index, 1)" class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-close"></i> </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px] ">
          <el-form-item :prop="`descriptions[${index}].description_EN`" :rules="[{required: true, message: 'This field is required'}]">
            <label :for="`descriptions[${index}].description_EN`">Description In english</label>
            <el-input :id="`descriptions[${index}].description_EN`" v-model="updateJob.descriptions[index].description_EN"></el-input>
          </el-form-item>

          <el-form-item :prop="`descriptions[${index}].description_AR`" :rules="[{required: true, message: 'This field is required'}]">
            <label :for="`descriptions[${index}].description_AR`">Description In arabic</label>
            <el-input :id="`descriptions[${index}].description_AR`" v-model="updateJob.descriptions[index].description_AR"></el-input>
          </el-form-item>

        </div>
      </div>



      <div class="flex items-center gap-[10px] justify-between mt-4">
        <h6 class="font-semibold text-xl">Job Location Tags</h6>
        <button @click.prevent="updateJob.jobLocationTags.push({jobLocationTags_AR: '', jobLocationTags_EN: ''})" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-plus"></i> Add Job Location Tag </button>
      </div>
      <div class="border-b border-grey-light" v-for="(tag, index) in updateJob.jobLocationTags" :key="index">
        <div class="flex gap-[10px] items-center justify-between pt-3">
          <h6 class="font-semibold">Tag#{{index+1}}</h6>
          <button v-if="index != 0" @click.prevent="updateJob.jobLocationTags.splice(index, 1)" class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-close"></i> </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px] ">
          <el-form-item :prop="`jobLocationTags[${index}].jobLocationTags_EN`" :rules="[{required: true, message: 'This field is required'}]">
            <label :for="`jobLocationTags[${index}].jobLocationTags_EN`">Description In english</label>
            <el-input :id="`jobLocationTags[${index}].jobLocationTags_EN`" v-model="updateJob.jobLocationTags[index].jobLocationTags_EN"></el-input>
          </el-form-item>

          <el-form-item :prop="`jobLocationTags[${index}].jobLocationTags_AR`" :rules="[{required: true, message: 'This field is required'}]">
            <label :for="`jobLocationTags[${index}].jobLocationTags_AR`">Description In arabic</label>
            <el-input :id="`jobLocationTags[${index}].jobLocationTags_AR`" v-model="updateJob.jobLocationTags[index].jobLocationTags_AR"></el-input>
          </el-form-item>
        </div>
      </div>



      <div class="flex items-center gap-[10px] justify-between mt-4">
        <h6 class="font-semibold text-xl">Job Location Tags</h6>
        <button @click.prevent="updateJob.jobDepartmentTags.push({jobDepartmentTags_AR: '', jobDepartmentTags_EN: ''})" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-plus"></i> Add Job Location Tag </button>
      </div>
      <div class="border-b border-grey-light" v-for="(tag, index) in updateJob.jobDepartmentTags" :key="index">
        <div class="flex gap-[10px] items-center justify-between pt-3">
          <h6 class="font-semibold">Tag#{{index+1}}</h6>
          <button v-if="index != 0" @click.prevent="updateJob.jobDepartmentTags.splice(index, 1)" class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-close"></i> </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px] ">
          <el-form-item :prop="`jobDepartmentTags[${index}].jobDepartmentTags_EN`" :rules="[{required: true, message: 'This field is required'}]">
            <label :for="`jobDepartmentTags[${index}].jobDepartmentTags_EN`">tag In english</label>
            <el-input :id="`jobDepartmentTags[${index}].jobDepartmentTags_EN`" v-model="updateJob.jobDepartmentTags[index].jobDepartmentTags_EN"></el-input>
          </el-form-item>

          <el-form-item :prop="`jobDepartmentTags[${index}].jobDepartmentTags_AR`" :rules="[{required: true, message: 'This field is required'}]">
            <label :for="`jobDepartmentTags[${index}].jobDepartmentTags_AR`">tag In arabic</label>
            <el-input :id="`jobDepartmentTags[${index}].jobDepartmentTags_AR`" v-model="updateJob.jobDepartmentTags[index].jobDepartmentTags_AR"></el-input>
          </el-form-item>
        </div>
      </div>


      <div class="mb-4">
        <h6 class="font-semibold text-xl mb-4 mt-4">Job Image</h6>
        <el-upload
          class="upload-demo "
          drag
          action=""
          :auto-upload="false"
          :on-remove="handleRemove"
          :on-change="onChange"
          :file-list="fileList"
          accept="image/*"
          list-type="picture"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
          <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
        </el-upload>
      </div>
    </el-form>
    <div class="flex flex-row-reverse mt-3">
      <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" @click="updateTheJob()">Update Job</button>
    </div>
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';
export default {
  data() {
    return {
      fileList: [],
      jobTypes: [
        {keyEN: 'Full time', keyAR: 'وقت كامل', value: 'Full time'},
        {keyEN: 'Part time', keyAR: 'دوام جزئى', value: 'Part time'},
      ],
      updateJob: {
        descriptions: [
        ],
        jobLocationTags: [
        ],
        jobDepartmentTags: [
        ]
      }
    }
  },
  mounted() {
    this.getJobDetails();
  },
  methods: {
    async getJobDetails() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const jobs = await this.$axios.get(`/jobs/${this.$route.params.id}`);
        this.updateJob = {...this.updateJob, ...jobs.data};

        this.updateJob.description_AR.forEach((descriptionAr, index) => {
          this.updateJob.descriptions.push({
            description_AR: descriptionAr,
            description_EN: this.updateJob.description_EN[index]
          })
        })


        this.updateJob.jobDepartmentTags_AR.forEach((jobDepartmentTagsAR, index) => {
          this.updateJob.jobDepartmentTags.push({
            jobDepartmentTags_AR: jobDepartmentTagsAR,
            jobDepartmentTags_EN: this.updateJob.jobDepartmentTags_EN[index]
          })
        })


        this.updateJob.jobLocationTags_AR.forEach((jobLocationTagsAR, index) => {
          this.updateJob.jobLocationTags.push({
            jobLocationTags_AR: jobLocationTagsAR,
            jobLocationTags_EN: this.updateJob.jobLocationTags_EN[index]
          })
        })


        if(this.updateJob.image) {
          this.fileList.push({
            name: 'Job Image',
            url: this.updateJob.image
          })
        }

      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    },
    updateTheJob() {
      this.$refs.updateJobRef.validate(async (valid) => {
        if(valid) {
          if(this.fileList.length === 0) {
            Notification.error({
              title: 'Error',
              message: 'You must add icon for that news'
            });
            return;
          }

          const formData = new FormData();
          formData.append('title_AR', this.updateJob.title_AR);
          formData.append('title_EN', this.updateJob.title_EN);

          this.updateJob.descriptions.forEach(ele => {
            formData.append('description_EN', ele.description_EN);
            formData.append('description_AR', ele.description_AR);
          });

          this.updateJob.jobLocationTags.forEach(ele => {
            formData.append('jobLocationTags_EN', ele.jobLocationTags_EN);
            formData.append('jobLocationTags_AR', ele.jobLocationTags_AR);
          });

          this.updateJob.jobDepartmentTags.forEach(ele => {
            formData.append('jobDepartmentTags_EN', ele.jobDepartmentTags_EN);
            formData.append('jobDepartmentTags_AR', ele.jobDepartmentTags_AR);
          });


          formData.append('jobType', this.updateJob.jobType);

          if(this.fileList?.[0]?.raw) {
            formData.append('image', this.fileList?.[0]?.raw);
          } else {
            formData.append('image', this.fileList?.[0]?.url);
          }


          let loading = null;

          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.put(`/jobs/${this.$route.params.id}`, formData);
            Notification.success({
              title: 'Success',
              message: 'The Job updated successfully',
            });
            this.$router.push('/dashboard/jobs');
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
