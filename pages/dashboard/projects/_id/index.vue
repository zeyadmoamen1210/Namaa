<template>
  <div>
    <img :src="project.image" class="max-w-[300px] w-full object-cover" alt="">

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">English Name</h3>
      <p>
        {{project.project_name_EN}}
      </p>
    </div>

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">Arabic Name</h3>
      <p>
        {{project.project_name_AR}}
      </p>
    </div>

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">English Description</h3>
      <p>
        {{project.project_desc_EN}}
      </p>
    </div>

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">Arabic Description</h3>
      <p>
        {{project.project_desc_AR}}
      </p>
    </div>

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">English Client</h3>
      <p>
        {{project.client_EN}}
      </p>
    </div>

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">Arabic Client</h3>
      <p>
        {{project.client_AR}}
      </p>
    </div>

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">English Type</h3>
      <p>
        {{project.project_type_EN}}
      </p>
    </div>

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">Arabic Type</h3>
      <p>
        {{project.project_type_AR}}
      </p>
    </div>

    <div class="mb-5 mt-5">
      <h3 class="font-semibold text-sm text-[#4f46e5]">Project Date</h3>
      <p>
        {{project.project_date}}
      </p>
    </div>

  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';

export default {
  layout: 'dashboard',
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
    }
  },
  data() {
    return {
      project: {}
    }
  },
}
</script>
