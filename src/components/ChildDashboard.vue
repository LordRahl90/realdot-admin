<template>
  <div>
    <Sidebar />
    <div class="md:ml-64 bg-blueGray-100">
      <admin-navbar />
     <div class="mx-auto px-20 md:px-10 w-full pt-0">
      <router-view />
      </div>
      <footer-admin />
    </div>
  </div>
</template>
<script>
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Sidebar/SideBar.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
import { mapGetters } from 'vuex';
//import HeaderStats from './Headers/HeaderStats.vue';
export default {
  
  name: "admin-layout",
  components: {
    AdminNavbar,
    Sidebar,
   // HeaderStats,
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
