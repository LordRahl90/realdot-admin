<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <staff-table />
    </div>
    <!--<div class="w-full mb-12 px-4">
      <staff-table color="dark" />
    </div>-->
  </div>
</template>
<script>
import StaffTable from "@/components/Cards/StaffTable.vue";

export default {
  components: {
    StaffTable,
  },
};
</script>