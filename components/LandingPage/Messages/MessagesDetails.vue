<template>
  <div class="bg-white p-10 pt-24">
    <div class="container mx-auto">
      <div>
        <h2 class="after:content-[' '] after:absolute after:top-[-10px]  after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">
          {{$t('Message.Namaa company always with you')}}
        </h2>
        <p class="text-grey font-normal max-w-[800px] mb-10">
          {{$t('Message.description')}}
        </p>
      </div>

      <div class="lg:flex gap-x-[40px] items-center" v-if="messages.length > 0">
        <div class="mb-5 lg:mb-0">
          <img class="h-[250px] w-[250px] object-cover object-top rounded-lg" :src="messages[0].image" alt="">
        </div>
        <div class="lg:flex-1">
          <h3 class="font-bold text-3xl mb-2"> {{ $i18n.locale === 'ar' ? messages[0].name_AR : messages[0].name_EN }} </h3>
          <h6 class="font-semibold text-xl pb-3 border-b border-grey-light mb-4">{{ $i18n.locale === 'ar' ? messages[0].position_AR : messages[0].position_EN }}</h6>
          <p class="leading-8 text-[16.8px]">
            {{ $i18n.locale === 'ar' ? messages[0].message_paragraph_AR : messages[0].message_paragraph_EN }}
          </p>
        </div>
      </div>
<!--      <div class="mt-7">-->
<!--        <p class="text-md leading-8 font-normal">-->
<!--          In order to carry out this philosophy, we have a company with specialists from varied backgrounds and experience covering all aspects of financial services like wealth management, corporate & investment banking and trade finance. The team works in tandem to offer the clients a complete solution. The magic of this approach has been that all employees can “get their arms around” the client relationships they’re in, and they can see the difference they make. It also puts our clients in direct contact with all the decision- makers that affect their requirement or needs.-->
<!--          We are proud of our people and where they are taking our company. With our decentralised form of management, it is imperative that we have people who both reflect the culture-->
<!--          of the company and are dedicated, intelligent leaders. We strongly support an approach of promoting from within and encouraging our people to follow their interests.Our-->
<!--          employees are the future of our company. We dedicate ourselves to providing an environment that welcomes their creativity and new ideas, provides challenges for them to strive-->
<!--          to be their best, and allows our people to find and follow their passions.-->
<!--          For our clients, we dedicate ourselves to providing service that goes beyond just a “deal”. Our corporate slogan “Success through Partnership” is something we value and-->
<!--          demonstrate.-->
<!--          Of course, we conduct our business in complete compliance with the regulatory environment that we are licensed under and adapt as and when the need arises.-->
<!--        </p>-->
<!--      </div>-->


      <div class="flex gap-[30px] justify-between	mt-16">
        <div>
          <h2 class="after:content-[' '] after:absolute after:top-[-10px]  after:h-[5px] after:bg-primary after:w-[70px] relative text-red text-3xl font-bold py-2 pb-2" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">{{$t('Message.OUR BOARD')}}</h2>
          <p class="text-grey text-sm max-w-[700px]">
            {{$t('Message.Board description')}}
          </p>
        </div>
      </div>

      <div class="mt-[10px]" dir="ltr">
        <client-only>
          <!-- Swiper component -->
          <swiper
            ref="swiperComponentRef"
            :options="swiperOptions"
            class="pb-[20px]"
          >
            <swiper-slide class="py-6 px-3" v-for="(msg, index) in messages" :key="index">
              <MessageCard :item="msg" />
            </swiper-slide>
            <div class="bottom-[-5px] swiper-pagination" slot="pagination"></div>
          </swiper>
        </client-only>
      </div>


    </div>
  </div>
</template>

<script>

import MessageCard from "~/components/LandingPage/Messages/MessageCard.vue";
import {Loading} from "element-ui";

export default {
  components: {
    MessageCard
  },
  methods: {
    async getMessages() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const messages = await this.$axios.get('/messages');
        this.messages = messages.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  },
  mounted() {
    this.getMessages();
  },
  data() {
    return {
      messages: [],
      swiperOptions: {
        // loop: true,
        slidesPerView: 2,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      }
    }
  }
}
</script>
