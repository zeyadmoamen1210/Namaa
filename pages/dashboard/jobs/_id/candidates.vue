<template>
  <div>
    <div v-if="candidates.length > 0">
      <h2 class="text-xl capitalize mb-2"> {{ $i18n.locale === 'ar' ? candidates[0].job.title_AR : candidates[0].job.title_EN }} {{$i18n.locale === 'ar' ? 'المرشحين' : 'Candidates' }} </h2>
    </div>
    <el-table
      :data="candidates"
      style="width: 100%">
      <el-table-column
        prop="fullName"
        label="First Name"
        >
      </el-table-column>
      <el-table-column
        prop="email"
        label="Email"
        >
      </el-table-column>
      <el-table-column
        prop="phone"
        label="phone"
        width="180">
      </el-table-column>
      <el-table-column
        prop="CV"
        label="CV"
        width="180"
        >
        <template slot-scope="scope">
          <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" @click="openLink(scope.row.CV)">Open Cv</button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import {Loading} from "element-ui";

export default {
  layout: 'dashboard',
  mounted() {
    this.getJobCandidates();
  },
  data() {
    return {
      candidates: []
    }
  },
  methods: {
    openLink(link) {
      window.open(link, '_blank')
    },
    async getJobCandidates() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const candidates = await this.$axios.get(`/jobs/${this.$route.params.id}/apply`);
        this.candidates = candidates.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  }
}
</script>
