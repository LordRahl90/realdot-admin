<template>
  <div>
    <!-- <header-stats /> -->
    <div class="flex w-full w-max-full flex-grow flex-wrap">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <card-line-chart />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <card-bar-chart />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import CardLineChart from "@/components/Cards/CardLineChart.vue";
import CardBarChart from "@/components/Cards/CardBarChart.vue";
// import HeaderStats from "@/components/Headers/HeaderStats.vue";
export default {
  name: "dashboard-page",
  components: {
    CardLineChart,
    CardBarChart,
    // HeaderStats,
  },
  computed: {
    ...mapGetters({user:'getUser', token:'getToken'})
  },
  mounted(){
    console.log(this.user);
  }
};
</script>
