<template>
  <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'" :class="[$i18n.locale === 'ar' ? `font-['Cairo-Regular']` : '' , $i18n.locale === 'ar' ? 'rtl' : 'ltr']">
    <Navbar />
    <nuxt />
    <ContactUs />
    <Footer />

    <div class="overflow-hidden" @click.stop>
      <div v-if="!isOpened" @click="isOpened=!isOpened" class="fixed bottom-[20px] right-[20px] z-[3]">
        <div class="flex flex-row-reverse ">
          <div class="flex flex-col items-center mx-[30px] bg-[#2c2f73] p-2 rounded hover:translate-y-[-10px] cursor-pointer duration-500 ">
            <i class="max-w-[80px] el-icon-s-promotion text-[#fff]" ></i>
            <transition>
              <h6 class="text-[#fff] text-sm font-semibold">
                {{ $i18n.locale === 'ar' ? 'المحادثة' : 'Chat' }}
              </h6>
            </transition>
          </div>
        </div>
      </div>
      <button v-else @click="isOpened = !isOpened" :class="'bg-[#1b194f]'" class=" w-[30px] h-[30px] rounded-full fixed bottom-[10px] right-[10px] md:bottom-[50px] md:right-[50px] z-[3]">
        <i :class="'text-[#fff]'" class="font-bold text-[20px] el-icon-arrow-down"></i>
      </button>

      <transition
        name="custom-classes-transition"
        enter-active-class="animated animate__fadeInBottomRight"
        leave-active-class="animated animate__zoomOut"
      >
        <ChatPopup v-if="isOpened" />
      </transition>
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/layouts/Navbar.vue';
import Footer from '@/components/layouts/Footer.vue';
import ContactUs from "~/components/LandingPage/ContactUs.vue";
import ChatPopup from "~/components/ChatPopup.vue";
export default {
  components: {
    ChatPopup,
    ContactUs,
    Navbar,
    Footer
  },
  data() {
    return {
      isOpened: false,
    }
  }
}
</script>

<style>
.rtl .el-form-item__content {
  label {
    margin-right: 0 !important;
    margin-left: 30px !important;
  }
  .el-radio__label {
    padding-left: 0 !important;
    padding-right: 10px !important;
  }
}
</style>
