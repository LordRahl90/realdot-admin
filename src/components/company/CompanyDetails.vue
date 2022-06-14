<template>
    <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
  <h1>Hello details view</h1>
  <p>ComanyID: {{ companyID }}</p>
  </div>
</template>
<script>
export default {
    name: 'company-details',
    data: ()=>{
        return {};
    },
    methods: {},
    computed: {
        companyID() {
            return this.$route.params.id;
        }
    },
    mounted(){
        console.log(this.$route);
        console.log(`Details mounted`);
    }
}
</script>