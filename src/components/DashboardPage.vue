<template>
  <div>
    <Sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <admin-navbar />
      <header-stats />
      <div class="px-20 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Sidebar/SideBar.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
import { mapGetters } from 'vuex';
export default {
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
