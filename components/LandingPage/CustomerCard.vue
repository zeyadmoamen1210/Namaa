<template>
  <div>
    <div v-if="editable" class="mb-2">
      <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-xl" @click.stop="openDelete()"><i class="el-icon-delete"></i></button>
    </div>
    <div class="bg-gradient-to-b from-[#FFF8F8] to-[#F5F7FF] shadow-medium rounded-md p-6" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
      <div class="bg-white shadow-medium rounded-lg p-6">

        <div class="border-b-[2px] border-grey-lighter flex gap-[10px] justify-between items-center pb-4 mb-4 flex-wrap">
          <div class="flex gap-[10px] items-center">
            <div>
              <img class="w-full max-w-[120px] h-[70px] object-contain" :src="item.logo" alt="">
            </div>
            <div>
              <h6 class="max-w-[200px]">{{ $i18n.locale === 'ar' ? item.company_name_AR : item.company_name_EN }}</h6>
            </div>
          </div>
          <div>
            <el-rate
              :value="5"
              disabled
              show-score
              text-color="#ff9900"
              score-template="">
            </el-rate>
          </div>
        </div>

        <div>
          <p class="leading-[1.5] h-[3rem] overflow-hidden">
            {{ $i18n.locale === 'ar' ? item.feedback_AR : item.feedback_EN }}
          </p>
        </div>
      </div>
      <div>
        <div class="flex gap-[10px] mt-[25px] items-center">
          <img class="rounded-full w-[60px]" src="@/assets/imgs/user_avatar.svg" alt="">
          <div>
            <h6>
              {{ $i18n.locale === 'ar' ? item.customer_name_AR : item.customer_name_EN }}
            </h6>
            <p>
              {{ $i18n.locale === 'ar' ? item.position_AR : item.position_EN }}
            </p>
          </div>
        </div>
      </div>
    </div>


    <el-dialog
      title="Delete Service"
      :visible.sync="deletePopup"
      width="30%">

      <h5 class="text-md"><i class="text-xl text-[red] el-icon-delete"></i> Are you sure you want to delete this project ?</h5>

      <span slot="footer" class="dialog-footer flex gap-[5px]">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="deletePopup = false">Cancel</button>
        <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md" @click="deleteProject()">Delete</button>
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
    openDelete() {
      this.deletePopup = true;
    },
    async deleteProject() {
      this.deletePopup = false;
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        await this.$axios.delete(`/rates/${this.item._id}`);
        Notification.success({
          title: 'Success',
          message: 'The rate deleted successfully',
        });
        this.$emit('getRatings')
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
      required: true,
      type: String
    },
    editable: {
      required: true,
      type: Boolean
    },
    item: {
      type: Object
    },
  }
}
</script>

<style lang="postcss">

</style>

