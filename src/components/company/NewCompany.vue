<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">New Company</h6>
        <router-link to="/company"
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        >
          Companies
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
                Name
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Company Name"
                v-model="company.name"
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
                placeholder="Company Email"
                v-model="company.email"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-wrap">
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
                placeholder="Company Name"
                v-model="company.phone"
              />
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Website
              </label>
              <input
                type="email"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Company Email"
                v-model="company.website"
              />
            </div>
          </div>
        </div>

        

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Contact Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Street
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                v-model="company.address.street"
              />
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                City
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Lagos"
                v-model="company.address.city"
              />
            </div>
          </div>
         
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                State
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="State"
                v-model="company.address.state"
              />
            </div>
          </div>

           <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Country
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="United States"
                v-model="company.address.country"
              />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        
        <button
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          v-on:click="createCompany"
        >
          Create Company
        </button>
      </form>
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex';
import { backendURL } from '@/service/constants';

export default{
    name: "new-company-page",
    data: ()=>{
        return {
            company: {
            name: '',
            logo: '',
            email: '',
            phone:'',
            website: '',
            address:{
                street: '',
                city: '',
                state: '',
                country: '',
            }
            }
        }
    },
    methods:{
        async createCompany(){
            try{
                const url =`${backendURL()}/companies`;
                const header = {
                    Authorization: `Bearer ${this.token}`
                }
                let res = await this.$http.post(url,this.company,header)
                console.log(res.body);
                if (!res.body.success){
                    alert(res.body.message);
                    return;
                }
                console.log(res.body);
            }
            catch(e){
                console.log(e);
            }
        }
    },
    computed:{
        ...mapGetters({user:'getUser',token:'getToken'})
    }
}
</script>
