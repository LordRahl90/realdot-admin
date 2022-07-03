<template>
  <div>
    <Sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <admin-navbar />
      <header-stats  />
      <div class="px-20 md:px-10 mx-auto w-full -m-24">
        <router-view />
      </div>
        <footer-admin />
    </div>
  </div>
</template>
<script>
// Seems I can use v-show to solve this problem I Can just get the this.$route.fullPath

import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Sidebar/SideBar.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
import { mapGetters } from 'vuex';
import HeaderStats from './Headers/HeaderStats.vue';
export default {
  data() {
    return {
      id: this.$route
    }
  },
  name: "admin-layout",
  components: {
    AdminNavbar,
    Sidebar,
    HeaderStats,
    FooterAdmin,
  },
  computed:{
    ...mapGetters({user:'getUser', token:'getToken'})
  },
  mounted(){
    if(this.user.token === undefined){
      this.$router.push({path:"/", replace: true});
    }
  }
};

</script>
