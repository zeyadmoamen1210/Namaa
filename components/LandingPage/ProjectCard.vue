<template>
  <div>
    <div v-if="editable" class="mb-2">
      <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-xl" @click.stop="$router.push(`/dashboard/projects/${item._id}/update`)"><i class="el-icon-edit"></i></button>
      <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-xl" @click.stop="openDelete()"><i class="el-icon-delete"></i></button>
    </div>
    <nuxt-link :to="`${to}`">
      <div class="relative bg-white pt-3 pb-5 shadow-medium rounded-lg border-[2px] border-grey-lighter overflow-hidden project-card h-[360px] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[' '] after:transition-all after:duration-700 after:opacity-0 hover:after:opacity-100 after:bg-[#2c2f7378] after:ease-in-out	" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
        <img class="p-3 w-[280px] max-h-[250px] h-full mx-auto object-cover" :src="item.image" alt="">

        <div class="border-t-[1px] border-grey-light absolute bottom-0 bg-white w-full text-part max-h-[100px] z-[1] pb-16 rounded-tr-[20px] rounded-tl-[20px]">

          <h3 class="px-6 text-primary font-bold mt-4 mb-2 text-xl whitespace-nowrap	overflow-hidden text-ellipsis"> {{ $i18n.locale === 'ar' ? item.project_name_AR : item.project_name_EN }} </h3>

          <div class="hidden-div">

            <p class="px-6 mb-[10px] text-grey h-[6rem] leading-[1.5] overflow-hidden">
              {{ $i18n.locale === 'ar' ? item.project_desc_AR : item.project_desc_EN }}
            </p>



            <div class="px-6 flex gap-[10px] items-center mb-2">
              <img class="w-[20px]" src="@/assets/imgs/category.svg" alt="">
              <div>
                <span class="text-primary text-sm font-normal mb-1">{{$t('Projects.Project Type')}}:</span>
                <h6 class="font-bold text-primary text-sm">
                  {{ $i18n.locale === 'ar' ? item.project_type_AR : item.project_type_EN }}
                </h6>
              </div>
            </div>
          </div>

        </div>

        <div class="absolute bottom-[-10px] pb-2 backdrop-blur-[2px] bg-white/30 w-full h-[65px] z-[2] project-date">
          <div class="px-6 flex gap-[10px] items-center ">
            <img src="@/assets/imgs/clock.svg" alt="">
            <div>
              <span class="text-primary text-sm font-normal mb-1">{{$t('Projects.Project Date')}}:</span>
              <h6 class="font-bold text-primary text-sm"> {{ new Date(item.project_date).toLocaleDateString($i18n.locale === 'ar' ? 'ar-EG' : 'en-En') }} </h6>
            </div>
          </div>
        </div>

      </div>
    </nuxt-link>

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
        await this.$axios.delete(`/projects/${this.item._id}`);
        Notification.success({
          title: 'Success',
          message: 'The project deleted successfully',
        });
        this.$emit('getProjects')
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
.project-card {
  &:hover {
    .text-part {
      max-height: 330px !important;
    }
    .hidden-div {
      visibility: visible;
      opacity: 1;
      transition-delay: 100ms !important;
    }
    .project-date {
      transition-delay: 50ms !important;
      transform: translate(0, -10px);
    }
  }

  .hidden-div {
    visibility: hidden;
    opacity: 0;
  }

  .text-part {
    transition: .5s linear !important;
  }
  .project-date {
    transition: .5s ease-in-out !important;
  }
  .hidden-div {
    transition: .2s ease-in-out !important;
  }
}
</style>
