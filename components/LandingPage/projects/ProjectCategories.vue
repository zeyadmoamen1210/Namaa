<template>
  <div class="bg-grey-lighter p-10 pt-24">
    <div class="container mx-auto">
      <div>
        <h2 class="after:content-[' '] after:absolute after:top-[-10px] after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]" :class="$i18n.locale === 'ar' ? 'after:right-0' : 'after:left-0'">
          {{$t('Projects.Namaa Company projects')}}
        </h2>
        <p class="text-grey font-normal max-w-[800px] mb-10">
          {{$t('Projects.description')}}
        </p>
        <div v-if="projects.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] md:px-10">
          <div v-for="project in projects" :key="project._id">
            <ProjectCard :to="`/projects/${project._id}`" :editable="false" :item="project" @getProjects="getProjects" />
          </div>
        </div>
        <NoData v-else />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "~/components/LandingPage/ProjectCard.vue";
import NoData from "~/components/layouts/NoData.vue";
import {Loading} from "element-ui";
export default {
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const projects = await this.$axios.get('/projects');
        this.projects = projects.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  },
  components: {
    NoData,
    ProjectCard
  }
}
</script>
