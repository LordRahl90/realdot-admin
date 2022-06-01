<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <listing-table />
    </div>
    <!--<div class="w-full mb-12 px-4">
      <listing-table color="dark" />
    </div>-->
  </div>
</template>
<script>
import ListingTable from "@/components/Cards/ListingTable.vue";

export default {
  components: {
    ListingTable,
  },
};
</script>
