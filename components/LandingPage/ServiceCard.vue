<template>
  <div>
    <div v-if="editable" class="mb-2">
      <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-xl" @click.stop><i class="el-icon-edit"></i></button>
      <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-xl" @click.stop="openDelete()"><i class="el-icon-delete"></i></button>
    </div>
    <nuxt-link tag="a" :to="to" class="service-card" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
      <div class="ease-linear duration-300 bg-white  shadow-simple rounded-lg overflow-hidden">
        <div class="p-6 py-8 relative max-h-[280px] service-card-inner">
          <img class="w-[55px] mb-[20px] service-card__icon" :src="item.icon" alt="">
          <h3 class="transition-none leading-[1.5rem] h-[3rem] overflow-hidden text-2xl text-black mb-[10px] font-semibold"> {{ $i18n.locale === 'ar' ? item.title_AR : item.title_EN }} </h3>
          <p class="text-sm text-grey mb-5 leading-[1.6rem] h-[5rem] overflow-hidden">
            {{ $i18n.locale === 'ar' ? item.description_AR : item.description_EN }}
          </p>
          <img class="service-card__arrow" src="@/assets/imgs/solar_arrow-right-linear.svg" alt="">
        </div>
      </div>
    </nuxt-link>



    <el-dialog
      title="Delete Service"
      :visible.sync="deletePopup"
      width="30%">

      <h5 class="text-md"><i class="text-xl text-[red] el-icon-delete"></i> Are you sure you want to delete this service ?</h5>

      <span slot="footer" class="dialog-footer flex gap-[5px]">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="deletePopup = false">Cancel</button>
        <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md" @click="deleteService()">Delete</button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';

export default {
  data() {
    return {
      deletePopup: false,
    }
  },
  props: {
    editable: {
      required: false,
      type: Boolean
    },
    item: {
      type: Object
    },
    to: {
      required: true,
      type: String
    },
  },
  methods: {
    openDelete() {
      this.deletePopup = true;
    },
    async deleteService() {
      this.deletePopup = false;
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        await this.$axios.delete(`/services/${this.item._id}`);
        Notification.success({
          title: 'Success',
          message: 'The services deleted successfully',
        });
        this.$emit('getServices')
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
  }
}
</script>


<style lang="postcss">
@keyframes serviceCardHover {
  0% {
    transform: translate(0, 0px);
  }
  100% {
    transform: translate(0, -85px);
  }
}
.service-card {
  &:hover {
    > div {
      @apply bg-primary !important;
      @apply overflow-hidden !important;
      p {
        @apply text-grey-light !important;
      }
      h3 {
        @apply text-white !important;
      }
      img.service-card__icon {
        transition: all 1s ease-in-out !important;
        transform: translate(0, -90px);
      }
      img.service-card__arrow {
      }
    }
  }
  > div {
    >div {
      transition: all .5s ease-in-out !important;
      &:hover {
        transform: translate(0, -70px);
      }

    }
  }
}
</style>
