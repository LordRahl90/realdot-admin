<template>
    <div
    class="relative flex flex-col min-w-0 break-words w-full mt-20 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">New Staff</h6>
        <router-link to="/staff"
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        >
          Staff List
        </router-link>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Basic Information
        </h6>
        <div class="flex flex-wrap">
           <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Company
              </label>
              <select v-model="staff.company_id">
                  <option value="" disabled selected>Select Company</option>
                  <option v-for="c in companies" :key="c.id" :value="c.id">{{ c.name }}</option>
              </select>
              <!-- <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Company Name"
                v-model="staff.company_id"
              /> -->
            </div>
          </div>
          
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Role
              </label>
              <select v-model="role">
                  <option value="" disabled selected>Select Role</option>
                  <option value="regular">Regular</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
              </select>

            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                First Name
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Staff First Name"
                v-model="first_name"
              />
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Last Name
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Staff Last Name"
                v-model="last_name"
              />
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email address
              </label>
              <input
                type="email"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Staff Email"
                v-model="email"
              />
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Phone
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Staff Phone Number"
                v-model="phone"
              />
            </div>
          </div>
          
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <button
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          v-on:click="createNewStaff"
        >
          Create Staff
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { backendURL } from '@/service/constants';
export default {
    name: 'createStaff', 
    data: function(){
        return {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            role: '',
            password: '',
            staff:{
                company_id: '',
            }
        };
    },
    methods:{
        ...mapActions,
        createNewStaff: async function(){
            const url=`${backendURL()}/companies/staff`
            const payload={
                 email:this.email,
                 phone: this.phone,
                first_name: this.first_name,
                last_name: this.last_name,
                password: 'dummy-password',
                role: this.role,
                staff: {
                    company_id: this.staff.company_id
                }
            };
            try {
                const header={
                    Authorization: `Bearer ${this.token}`
                };
                console.log(`Token: ${this.token}`);
                const response = await this.$http.post(url,payload,header);
                console.log(response);

            }
            catch(e){
                console.error(e);
            }
        }
    },
    computed: {
        ...mapGetters({companies:'getCompanies',token: 'getToken'})
    },
    async mounted(){
        if(this.companies.length > 0){
            return;
        }
        let url=`${backendURL()}/companies`;
        let header = {
            Authorization: `Bearer ${this.token}`,
        };
        try{
            let res = await this.$http.get(url,header);
            console.log(res.body);
            this.$store.dispatch('setCompanies',res.body.data)
        }
        catch(e){
            console.log(e);
        }
    }
}
</script>