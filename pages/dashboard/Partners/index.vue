<template>
  <div>
    <div class="flex items-center justify-between mb-5 flex-wrap gap-[10px]">
      <h5 class="text-2xl font-semibold mb-0">Partners</h5>
      <div class="flex gap-3 items-center">
        <div class="flex gap-x-[5px] items-center">
          <img src="@/assets/imgs/langs.svg" alt="">
          <button @click="$i18n.setLocale('en')" v-if="$i18n.locale === 'ar'">EN</button>
          <button @click="$i18n.setLocale('ar')" v-if="$i18n.locale === 'en'">AR</button>
        </div>
        <nuxt-link tag="button" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" to="/dashboard/partners/add" >Add Partners</nuxt-link>
      </div>
    </div>
    <div>
      <div v-if="partners.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] ">
        <div v-for="item in partners" :key="item._id">
          <div class="relative border border-grey-light p-3 rounded-xl">
            <div class="mb-2">
              <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-xl" @click.stop="$router.push(`/dashboard/partners/${item._id}/update`)"><i class="el-icon-edit"></i></button>
              <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-xl" @click.stop="openDelete(item)"><i class="el-icon-delete"></i></button>
            </div>

            <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
              <img class="h-[200px] object-contain block mx-auto" :src="item.image" alt="">
              <a class="text-center block text-primary underline underline-offset-1" v-if="item.link_site" :href="item.link_site" target="_blank">
                {{$t('Partners.Go To Website')}}
              </a>
              <h6 class="text-center block text-[red]" v-else>
                {{$t('Partners.No Link Found')}}
              </h6>
              <h3 class="text-center"> {{$i18n.locale === 'ar' ? item.name_AR : item.name_EN}} </h3>
              <div class="text-center absolute top-[5px] right-0">
                <span class="px-2 mt-2 inline-block bg-[#e1b12c] text-[#fff]" v-if="item.type_of_image === 'partner'"> {{$t('Partners.partner')}} </span>
                <span class=" px-2 mt-2 inline-block bg-[#273c75] text-[#fff]" v-if="item.type_of_image === 'certificate'"> {{$t('Partners.certificate')}} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NoData v-else />
    </div>


    <el-dialog
      title="Delete Service"
      :visible.sync="deletePopup"
      width="30%">

      <h5 class="text-md"><i class="text-xl text-[red] el-icon-delete"></i> Are you sure you want to delete this partner ?</h5>

      <span slot="footer" class="dialog-footer flex gap-[5px]">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="deletePopup = false">Cancel</button>
        <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md" @click="deletePartner()">Delete</button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import NoData from "~/components/layouts/NoData.vue";
import {Loading, Notification} from "element-ui";

export default {
  components: {NoData},
  layout: 'dashboard',
  data() {
    return {
      partners: [],
      deletePopup: false,
      item: {}
    }
  },
  mounted() {
    this.getPartners();
  },
  methods: {
    openDelete(item) {
      this.deletePopup = true;
      this.item = item;
    },
    async deletePartner() {
      this.deletePopup = false;
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        await this.$axios.delete(`/partners/${this.item._id}`);
        Notification.success({
          title: 'Success',
          message: 'The news deleted successfully',
        });
        this.getPartners();
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
    },

    async getPartners() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const partners = await this.$axios.get('/partners');
        this.partners = partners.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  }
}
</script>
