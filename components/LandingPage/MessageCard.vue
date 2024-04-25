<template>
  <div>
    <div v-if="editable" class="mb-2">
      <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-xl" @click.stop="$router.push(`/dashboard/messages/${item._id}/update`)"><i class="el-icon-edit"></i></button>
      <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-xl" @click.stop="openDelete()"><i class="el-icon-delete"></i></button>
    </div>
    <nuxt-link :to="`${to}`" v-if="item">
      <div class="bg-white p-5 shadow-medium rounded-lg border-[2px] border-grey-lighter hover:bg-primary transition-all duration-700 gallery-card" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
        <div>
          <img class="h-[250px] w-full object-contain bg-top" :src="item.image" alt="user image">
        </div>
        <div class="mt-3 overflow-hidden">
          <h6 class="text-lg text-nowrap"> {{$i18n.locale === 'ar' ? item.name_AR : item.name_EN }} </h6>
          <h6 class="text-sm mb-1 text-nowrap">
            {{ $i18n.locale === 'ar' ? item.position_AR : item.position_EN }}
          </h6>
          <p class="text-sm leading-[1.6] h-[3rem] overflow-hidden">
            {{ $i18n.locale === 'ar' ? item.message_paragraph_AR : item.message_paragraph_EN }}
          </p>
        </div>
      </div>
    </nuxt-link>

    <el-dialog
      title="Delete Message"
      :visible.sync="deletePopup"
      width="30%">

      <h5 class="text-md"><i class="text-xl text-[red] el-icon-delete"></i> Are you sure you want to delete this message ?</h5>

      <span slot="footer" class="dialog-footer flex gap-[5px]">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="deletePopup = false">Cancel</button>
        <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md" @click="deleteMessage()">Delete</button>
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
    async deleteMessage() {
      this.deletePopup = false;
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        await this.$axios.delete(`/messages/${this.item._id}`);
        Notification.success({
          title: 'Success',
          message: 'The message deleted successfully',
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
      required: true,
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
  h6,h5, img, p ,a {
    transition: all 1s ease-in-out;
  }
  &:hover{
    transform: scaleY(1.055);
    img {
      transform: scaleY(1.045);
    }
    h6, h5 ,p , a{
      @apply text-white !important;
    }
    p {
      @apply text-grey-lighter !important;
    }
  }
}
</style>
