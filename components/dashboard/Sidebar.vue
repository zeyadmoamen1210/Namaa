<template>
  <div class="w-[250px] h-[100vh] border-grey-light border-r-[1px] p-3">
    <div class="mt-3 mb-7 px-4">
      <img src="@/assets/imgs/logo.png" class="max-w-[80px]" />
    </div>
    <div>
      <ul>
        <nuxt-link v-for="(link, index) in links" :key="index" exact-active-class="sidelinkhovered" :class="{'sidelinkhovered': $route.fullPath.includes(link.activePath)}" :to="link.to" tag="li" class="flex items-center gap-[10px] py-[10px] px-4 hover:sidelinkhovered rounded-lg cursor-pointer duration-300 ">
          <i :class="link.icon" class="text-xl text-grey block duration-300"></i>
          <span class="text-md font-semibold duration-300"> {{link.name}} </span>
        </nuxt-link>
        <nuxt-link to="/" tag="li" class="flex items-center gap-[10px] py-[10px] px-4 hover:sidelinkhovered rounded-lg cursor-pointer duration-300 ">
          <i class="el-icon-view text-xl text-grey block duration-300"></i>
          Website
        </nuxt-link>

        <li>
          <button @click="logout" class="p-1 w-full bg-[#e74c3c] text-[#fff] rounded-md">Logout</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('user');
      this.$router.push('/login');
    }
  },
  data() {
    return {
      links: [
        {
          name: 'Admins',
          to: '/dashboard',
          activePath: '/dashboard/admin',
          icon: 'el-icon-user'
        },
        {
          name: 'Services',
          to: '/dashboard/services',
          activePath: '/dashboard/services',
          icon: 'el-icon-service'
        },
        {
          name: 'Projects',
          to: '/dashboard/projects',
          activePath: '/dashboard/projects',
          icon: 'el-icon-data-analysis'
        },
        {
          name: 'News',
          to: '/dashboard/news',
          activePath: '/dashboard/news',
          icon: 'el-icon-news'
        },
        {
          name: 'Company Info',
          to: '/dashboard/company-info',
          activePath: '/dashboard/company-info',
          icon: 'el-icon-warning-outline'
        },
        {
          name: 'Partners',
          to: '/dashboard/partners',
          activePath: '/dashboard/partners',
          icon: 'el-icon-office-building'
        },
        {
          name: 'Messages',
          to: '/dashboard/messages',
          activePath: '/dashboard/messages',
          icon: 'el-icon-message'
        },
        {
          name: 'Ratings',
          to: '/dashboard/ratings',
          activePath: '/dashboard/ratings',
          icon: 'el-icon-star-off'
        },
        {
          name: 'Gallery',
          to: '/dashboard/gallery',
          activePath: '/dashboard/gallery',
          icon: 'el-icon-picture-outline'
        },
        {
          name: 'Jobs',
          to: '/dashboard/jobs',
          activePath: '/dashboard/jobs',
          icon: 'el-icon-picture-outline'
        },
        {
          name: 'Certificates',
          to: '/dashboard/certificates',
          activePath: '/dashboard/certificates',
          icon: 'el-icon-picture-outline'
        },
        {
          name: 'Contact Us',
          to: '/dashboard/contact-us',
          activePath: '/dashboard/contact-us',
          icon: 'el-icon-chat-dot-square'
        },
      ]
    }
  }
}
</script>

<style lang="postcss">
.sidelinkhovered {
    @apply text-[#4f46e5] bg-[#e9e9e952] !important;
    i, span {
      @apply text-[#4f46e5] !important;
    }
}
</style>
