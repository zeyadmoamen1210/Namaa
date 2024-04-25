<template>
  <div>
    <ProjectBanner :title="$i18n.locale === 'ar' ? ` المشاريع / ${project.project_name_AR}` : `Projects / ${project.project_name_EN}`" />
    <ProjectDetails :item="project" />
    <OurClients bgClass="bg-white" class="py-20" />
    <OurCustomers bgClass="bg-grey-lighter" />
  </div>
</template>
<script>
import OurCustomers from "~/components/LandingPage/OurCustomers.vue";
import OurClients from "~/components/LandingPage/OurClients.vue";
import ProjectBanner from "~/components/LandingPage/projects/ProjectBanner.vue";
import ProjectDetails from "~/components/LandingPage/projects/ProjectDetails.vue";
import {Loading} from "element-ui";

export default {
  components: {
    OurCustomers,
    OurClients,
    ProjectDetails,
    ProjectBanner
  },
  data() {
    return {
      project: {}
    }
  },
  mounted() {
    this.getProject();
  },
  methods: {
    async getProject() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const project = await this.$axios.get(`/projects/${this.$route.params.id}`);
        this.project = project.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    },
  }
}
</script>
