<template>
  <!-- Header -->
  <div class="relative bg-emerald-600 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="New Orders"
              statTitle="350,897"
              statArrow="up"
              statPercent="3"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last month"
              statIconName="fas fa-stream"
              statIconColor="bg-emerald-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="New Payments"
              statTitle="#10,000,000"
              statArrow="down"
              statPercent="3.48"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last week"
              statIconName="fas fa-money-bill-alt"
              statIconColor="bg-emerald-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Outstanding"
              statTitle="#5,000,000"
              statArrow="down"
              statPercent="1.10"
              statPercentColor="text-emerald-500"
              statDescripiron="Since yesterday"
              statIconName="fas fa-money-bill"
              statIconColor="bg-emerald-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Staff"
              statTitle="49,65%"
              statArrow="up"
              statPercent="12"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last month"
              statIconName="fas fa-users"
              statIconColor="bg-emerald-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";

export default {
  components: {
    CardStats,
  },
};
</script>
