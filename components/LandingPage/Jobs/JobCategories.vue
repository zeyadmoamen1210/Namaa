<template>
  <div class="bg-grey-lighter p-10 pt-24">
    <div class="container mx-auto">
      <div>
        <h2 class="after:content-[' '] after:absolute after:top-[-10px]  after:h-[5px] after:bg-primary after:w-[70px] relative text-primary text-3xl font-bold py-2 pb-4 max-w-[550px]" :class="$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0'">
          {{$t('Jobs.Join our creative team')}}
        </h2>
        <p class="text-grey font-normal max-w-[800px] mb-10">
          {{$t('Jobs.description')}}
        </p>
        <div>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobCard from "~/components/LandingPage/JobCard.vue";

export default {
  components: {
    JobCard
  }
}
</script>
