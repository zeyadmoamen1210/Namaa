<template>
  <div>
    <div v-if="editable" class="mb-2">
      <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-xl" @click.stop="openDelete()"><i class="el-icon-delete"></i></button>
      <button class="bg-[#2ecc71] hover:bg-[#27ae60] focus:outline-none text-white p-1 px-2 rounded-xl"  @click="$router.push(`/dashboard/gallery/${item._id}`)"><i class="el-icon-view"></i></button>
    </div>

    <div class="bg-white p-5 shadow-medium rounded-2xl border-[2px] border-grey-lighter hover:bg-primary transition-all duration-700 gallery-card">
      <div class="relative">
        <img class="w-full h-[200px] object-cover" :src="item.cover" alt="">
        <span class="absolute bottom-[10px] left-[10px] bg-[#1A1A1A80] text-white p-1 px-3 rounded-[15px] text-sm block"> {{item.tag}} </span>
      </div>
      <div class="flex justify-between py-3 border-b-[1px] border-grey-light">
        <h6 class="text-grey"> {{ new Date(item.date).toLocaleDateString($i18n.locale === 'ar' ? 'ar-EG' : 'en-En') }} </h6>
        <h6 class="text-grey">{{item.numberOfItem}} photo</h6>
      </div>
      <div>
        <h5 class="text-2xl font-semibold my-2"> {{$i18n.locale === 'ar' ? item.nameAR : item.nameEN}} </h5>
      </div>
    </div>

    <el-dialog
      title="Delete Gallery"
      :visible.sync="deletePopup"
      width="30%">

      <h5 class="text-md"><i class="text-xl text-[red] el-icon-delete"></i> Are you sure you want to delete this gallery ?</h5>

      <span slot="footer" class="dialog-footer flex gap-[5px]">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="deletePopup = false">Cancel</button>
        <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md" @click="deleteGallery()">Delete</button>
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
    async deleteGallery() {
      this.deletePopup = false;
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        await this.$axios.delete(`/gallery-folders/${this.item._id}`);
        Notification.success({
          title: 'Success',
          message: 'The gallery deleted successfully',
        });
        this.$emit('getMessages')
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
    }
  }
}
</script>

<style lang="postcss">
.gallery-card {
  h6,h5, img {
    transition: all 1s ease-in-out;
  }
  &:hover{
    transform: scaleY(1.055);
    img {
      transform: scaleY(1.045);
    }
    h6, h5 {
      @apply text-white !important;
    }
  }
}
</style>
