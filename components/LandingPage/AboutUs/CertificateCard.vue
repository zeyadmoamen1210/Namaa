<template>
  <div>
    <div v-if="editable" class="mb-2">
      <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-xl" @click.stop="openDelete()"><i class="el-icon-delete"></i></button>
      <button class="bg-[#2ecc71] hover:bg-[#27ae60] focus:outline-none text-white p-1 px-2 rounded-xl"  @click="$router.push(`/dashboard/certificates/${item._id}`)"><i class="el-icon-view"></i></button>
    </div>

    <div class="p-5 py-5 shadow-medium rounded-xl border-[2px] border-grey-lighter">
      <div>
        <img class="w-full h-[200px] object-cover bg-top cursor-pointer" @click="openImg" :src="item.image" alt="">
      </div>
      <div>
        <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
          <h3 class="text-xl font-semibold mb-2 mt-4">{{ $i18n.locale === 'ar' ? item.title_AR : item.title_EN }}</h3>
          <p class="text-md font-normal text-grey leading-[1.5em] h-[4.5em] overflow-hidden mb-[5px]">
            {{ $i18n.locale === 'ar' ? item.description_AR : item.description_EN }}
          </p>
          <nuxt-link class="flex flex-row-reverse text-primary font-semibold" :to="`/certificates/${item._id}`"> {{ $t('ReadMore') }} </nuxt-link>
        </div>
      </div>
    </div>



    <el-dialog
      title="Delete Certificate"
      :visible.sync="deletePopup"
      width="30%">

      <h5 class="text-md"><i class="text-xl text-[red] el-icon-delete"></i> Are you sure you want to delete this Certificate ?</h5>

      <span slot="footer" class="dialog-footer flex gap-[5px]">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="deletePopup = false">Cancel</button>
        <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md" @click="deleteCertificate()">Delete</button>
      </span>
    </el-dialog>


  </div>
</template>

<script>
import {Loading, Notification} from "element-ui";

export default {
  methods: {
    openDelete() {
      this.deletePopup = true;
    },
    openImg() {
      window.open(this.item.image);
    },
    async deleteCertificate() {
      this.deletePopup = false;
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        await this.$axios.delete(`/certificates/${this.item._id}`);
        Notification.success({
          title: 'Success',
          message: 'The certificate deleted successfully',
        });
        this.$emit('getCertificate')
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
  data() {
    return {
      deletePopup: false,
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
