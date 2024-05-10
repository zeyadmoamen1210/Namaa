<template>
  <div class="job-page">
    <JobBanner :title="$t('Jobs.Jobs') + '/' + $route.query.job_title" />
    <div>
        <div class="bg-grey-lighter p-10 pt-20">
          <div class="container mx-auto">
              <div>
                  <h2 class="after:content-[' '] after:absolute after:top-[-10px]  after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">
                      {{$t('Jobs.apply for job')}}
                  </h2>
                  <div class="px-20 pt-10">
                    <div>
                        <JobCard :preview="true" :item="job" />
                    </div>
                    <div class="border-t border-t-[#b2b2b2] pt-5">
                      <h3 class="text-[21px] font-semibold"> {{ $t('Jobs.Submit Your Application') }} </h3>

                      <div class="mb-4" v-if="$i18n.locale === 'ar'">
                        <ul class="mt-2 leading-[2]" style="list-style: disc; list-style-position: inside">
                          <li v-for="(descriptionsAR, index) in job.description_AR" :key="index">
                            {{descriptionsAR}}
                          </li>
                        </ul>
                      </div>

                      <div class="mb-4" v-if="$i18n.locale === 'en'">
                        <ul class="mt-2 leading-[2]" style="list-style: disc; list-style-position: inside">
                          <li v-for="(descriptionEN, index) in job.description_EN" :key="index">
                            {{descriptionEN}}
                          </li>
                        </ul>
                      </div>

                    </div>

                    <div class="px-20 pt-3">
                      <el-form :model="jobApply" ref="jobApplyRef">
                        <div class="mb-3">
                          <h6 class="mb-2">Full Name</h6>
                          <el-form-item prop="fullName" :rules="[{required: true, message: 'This field is required'}]">
                            <el-input placeholder="Enter Your Full Name" v-model="jobApply.fullName"></el-input>
                          </el-form-item>
                        </div>
                        <div class="mb-3">
                          <h6 class="mb-2">Email Address</h6>
                          <el-form-item prop="email" :rules="[{required: true, message: 'This field is required'}, {type: 'email', message: 'Must be a valid email'}]">
                            <el-input placeholder="Enter Your Email" v-model="jobApply.email"></el-input>
                          </el-form-item>
                        </div>
                        <div class="mb-3">
                          <h6 class="mb-2">Phone Number</h6>
                          <el-form-item prop="phone" :rules="[{required: true, message: 'This field is required'}]">
                            <el-input placeholder="Enter Your Phone" v-model="jobApply.phone"></el-input>
                          </el-form-item>
                        </div>
                        <div>
                          <div class="flex items-center gap-4 justify-between relative">
                            <h3 class="font-semibold"> Attach Your Resume</h3>
                            <div class="relative cursor-pointer bg-[#f6f6f6] text-[#2c2f73] font-semibold p-3 px-6 rounded-[20px] flex gap-2 items-center max-w-[200px] overflow-hidden text-nowrap text-ellipsis">
                              <input @change="setFile" type="file" class="absolute top-0 right-0 opacity-0 cursor-pointer">
                              <i class=" text-[24px] el-icon-paperclip"></i>
                              <span class="max-w-[120px] overflow-hidden" v-if="file"> {{file.name}} </span>
                              <span v-else>Attach Resume/CV</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button @click.prevent="submitYourApp" class="text-center w-full bg-[#2c2f73] text-[#fff] p-3 mt-5 rounded-full">Submit Application</button>
                        </div>
                      </el-form>
                    </div>
                  </div>
              </div>
          </div>
    </div>
    </div>
  </div>
</template>

<script>
import JobBanner from "~/components/LandingPage/Jobs/JobBanner.vue";
import JobCard from "~/components/LandingPage/JobCard.vue";
import {Loading, Notification} from "element-ui";

export default {
  components: {JobCard, JobBanner},
  data() {
    return {
      job: {},
      jobApply: {},
      file: null,
    }
  },
  mounted() {
    this.getJob();
  },
  methods: {
    setFile(e) {
      if(e.target.files.length > 0) {
        this.file = e.target.files[0];
      }
    },
    submitYourApp() {
      this.$refs.jobApplyRef.validate(async (valid) => {
        if(valid) {
          if(!this.file) {
            Notification.error({
              title: 'Error',
              message: 'You must add icon for that project'
            });
            return;
          }

          const formData = new FormData();
          formData.append('fullName', this.jobApply.fullName);
          formData.append('email', this.jobApply.email);
          formData.append('phone', this.jobApply.phone);
          formData.append('CV', this.file);

          let loading = null;

          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.post(`/jobs/${this.$route.params.id}/apply`, formData);
            Notification.success({
              title: 'Success',
              message: 'The job applied successfully',
            });
            this.$router.push(`/jobs`);
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
    async getJob() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const job = await this.$axios.get(`/jobs/${this.$route.params.id}`);
        this.job = job.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  }
}
</script>


<style>
.job-page .el-input__inner {
  height: 50px !important;
  border-radius: 20px !important;
}
</style>
