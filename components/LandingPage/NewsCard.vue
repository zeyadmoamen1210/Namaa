<template>
  <div>
    <div v-if="editable" class="mb-2">
      <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-xl" @click.stop="$router.push(`/dashboard/news/${item._id}/update`)"><i class="el-icon-edit"></i></button>
      <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-xl" @click.stop="openDelete()"><i class="el-icon-delete"></i></button>
    </div>
    <nuxt-link :to="`${to}`" v-if="item">
      <div class="bg-white p-5 shadow-medium rounded-lg border-[2px] border-grey-lighter hover:bg-primary transition-all duration-700 gallery-card" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
        <div class="relative">
          <img class="w-full h-[190px] object-cover" :src="item.image" alt="">
          <template v-if="$i18n.locale === 'en'">
            <span class="absolute bottom-[10px] left-[10px] bg-[#1A1A1A80] text-white p-1 px-3 rounded-[15px] text-sm block" v-for="(tag, index) in item.news_tags_EN" :item="index"> {{ tag }} </span>
          </template>
          <template v-else>
            <span class="absolute bottom-[10px] left-[10px] bg-[#1A1A1A80] text-white p-1 px-3 rounded-[15px] text-sm block" v-for="(tag, index) in item.news_tags_AR" :item="index"> {{ tag }} </span>
          </template>
        </div>
        <div class="flex justify-between py-3 border-b-[1px] border-grey-light">
          <h6 class="text-grey"> {{ new Date(item.date).toLocaleDateString($i18n.locale === 'ar' ? 'ar-EG' : 'en-EN') }} </h6>
        </div>
        <div>
          <h5 class="text-2xl font-semibold my-2 whitespace-nowrap	overflow-hidden text-ellipsis"> {{ $i18n.locale === 'ar' ? item.news_title_AR : item.news_title_EN }} </h5>
          <p class="text-md text-grey mb-2 h-[6rem] leading-[1.5] overflow-hidden">
            {{ $i18n.locale === 'ar' ? item.news_desc_AR : item.news_desc_EN }}
          </p>
          <nuxt-link to="/" class="text-primary"> {{$t('News.View More')}} </nuxt-link>
        </div>
      </div>
    </nuxt-link>

    <el-dialog
      title="Delete Service"
      :visible.sync="deletePopup"
      width="30%">

      <h5 class="text-md"><i class="text-xl text-[red] el-icon-delete"></i> Are you sure you want to delete this news ?</h5>

      <span slot="footer" class="dialog-footer flex gap-[5px]">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="deletePopup = false">Cancel</button>
        <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md" @click="deleteNews()">Delete</button>
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
    getDiffMinutes(dateOne, dateTwo) {
      let date1 = new Date(dateOne);
      let date2 = new Date(dateTwo);

      // Calculate the difference in milliseconds
      let differenceMs = Math.abs(date1 - date2);

      // Convert milliseconds to minutes
      let minutesDifference = Math.floor(differenceMs / 1000 / 60);
      return Intl.NumberFormat(this.$i18n.locale === 'ar' ? 'ar-EG' : 'en-EN').format(minutesDifference);
    },
    async deleteNews() {
      this.deletePopup = false;
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        await this.$axios.delete(`/news/${this.item._id}`);
        Notification.success({
          title: 'Success',
          message: 'The news deleted successfully',
        });
        this.$emit('getNews')
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
