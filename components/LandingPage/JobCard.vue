<template>
  <div>
    <div v-if="editable" class="mb-2">
      <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-xl" @click.stop="openDelete()"><i class="el-icon-delete"></i></button>
    </div>
    <div @click="openLink(to)" v-if="item" class="cursor-pointer mb-[30px] bg-white p-7 rounded-[15px] flex justify-between items-center flex-wrap" >
      <div class="flex gap-[20px] items-center flex-wrap">
        <div>
          <img class="w-[150px] h-[150px] object-cover" :src="item.image" alt="">
        </div>
        <div>
          <h4 class="text-2xl font-semibold"> {{ $i18n.locale == 'ar' ? item.title_AR : item.title_EN }} </h4>
          <template v-if="item.jobLocationTags_AR && item.jobLocationTags_EN">
            <span class="text-lg text-grey mt-[5px] block" v-if="$i18n.locale == 'en'"> {{item.jobLocationTags_EN.join(' - ') || ''}} </span>
            <span class="text-lg text-grey mt-[5px] block" v-else> {{item.jobLocationTags_AR.join(' - ') || ''}} </span>
          </template>

          <div class="flex gap-[10px] mt-[10px] items-center flex-wrap">
            <span class="bg-[#56cdad29] text-sm text-[#56cda4] font-bold p-[7px] rounded-2xl px-[15px]" v-if="item.jobType === 'Full time'"> {{ $i18n.locale === 'ar' ? 'دوام كامل' : 'Full-Time' }} </span>
            <span class="bg-[#56cdad29] text-sm text-[#56cda4] font-bold p-[7px] rounded-2xl px-[15px]" v-if="item.jobType === 'Part time'"> {{ $i18n.locale === 'ar' ? 'دوام جزئي' : 'Part-Time' }} </span>

            <span class="h-[35px] w-[1px] bg-[#767676]"></span>
            <template v-if="$i18n.locale === 'en'">
              <span class="bg-[#ffffff] text-sm text-[#FFB836] border border-[#FFB836] font-bold p-[7px] rounded-2xl px-[15px]" v-for="(x, index) in item.jobDepartmentTags_EN">
              {{x}}
              </span>
            </template>
            <template v-else>
              <span class="bg-[#ffffff] text-sm text-[#FFB836] border border-[#FFB836] font-bold p-[7px] rounded-2xl px-[15px]" v-for="(x, index) in item.jobDepartmentTags_AR">
              {{x}}
              </span>
            </template>
          </div>


        </div>
      </div>
      <div v-if="!preview" class="mt-4">
        <button @click.stop="openLink(`/jobs/${item._id}?job_title=${$i18n.locale === 'ar' ? item.title_AR : item.title_EN}`, false)" v-if="!editable" class="bg-[#2C2F73] text-white p-2 px-14 rounded-3xl">
          {{$t('Jobs.Apply')}}
        </button>
        <button @click.stop="openLink(`/dashboard/jobs/${item._id}/candidates`, false)" v-else class="bg-[#2C2F73] text-white p-2 px-14 rounded-3xl">
          {{$t('Jobs.Candidates')}}
        </button>
      </div>
    </div>


    <el-dialog
      title="Delete Job"
      :visible.sync="deletePopup"
      width="30%">

      <h5 class="text-md"><i class="text-xl text-[red] el-icon-delete"></i> Are you sure you want to delete this job ?</h5>

      <span slot="footer" class="dialog-footer flex gap-[5px]">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="deletePopup = false">Cancel</button>
        <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md" @click="deleteJob()">Delete</button>
      </span>
    </el-dialog>

  </div>
</template>


<script>
import {Loading, Notification} from "element-ui";

export default {
  data() {
    return {
      deletePopup: false,
    }
  },
  methods: {
    openLink(to, blank = true) {
      if(!to) return;
      window.open(to, blank ? '_blank' : '_self')
    },
    openDelete() {
      this.deletePopup = true;
    },
    async deleteJob() {
      this.deletePopup = false;
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        await this.$axios.delete(`/jobs/${this.item._id}`);
        Notification.success({
          title: 'Success',
          message: 'The job deleted successfully',
        });
        this.$emit('getJobs')
      } catch {
        Notification.error({
          title: 'Error',
          message: 'There is something wrong'
        });
      }finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  },
  props: {
    to: {
      required: false,
      type: String
    },
    editable: {
      type: Boolean,
    },
    item: {
      type: Object,
    },
    preview: {
      type: Boolean,
      default: false
    }
  }
}
</script>
