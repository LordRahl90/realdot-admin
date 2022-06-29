<template>
  <div class="block flex-wrap mb-200">
    <div class="w-full mb-0 mt-10 px-4">
      <staff-table color="dark" :members="members" />
    </div>
  </div>
</template>

<script>


import { backendURL } from "@/service/constants";
import { mapGetters } from "vuex";
import StaffTable from "@/components/Cards/StaffTable.vue";

export default {
  name: 'staffList',
  data: function(){
    return {
      members: [],
    };
  },
  async mounted(){
    const url =`${backendURL()}/users/staff`
    try{
      const header = {
        Authorization: `Bearer ${this.token}`,
      };
      const response = await this.$http.get(url,header);
      console.log(response.body.data);
      for(let v in response.body.data){
        const dd = response.body.data[v];
        this.members.push({
          id: dd.id,
          full_name: `${dd.user.first_name} ${dd.user.last_name}`,
          company: `${dd.company.name}`,
          phone: `${dd.user.phone}`,
          email: `${dd.user.email}`,
          role: dd.role
        });
      }
      console.log(this.members);
    }
    catch(e){
      console.log(e);
    }
    
  },
  computed: {
    ...mapGetters({token:'getToken'})
  },
  components: {
    StaffTable,
  },
};
</script>