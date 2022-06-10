<template>
    <div id="app">
        <div class="loginContainer">
            <div class="sideLoginContainer">
                <img class="sideImage" />
            </div>

            <h2 class="companyName">
                RealDOT
            </h2>

            <h2 class="welcomeHeade">
                Admin Login
            </h2>

            <form>
                <div class="emailContainer">
                    <label class="emailLabel">Email</label>
                    <input type="email" placeholder="Enter Email" class="emailField" v-model="email" />
                </div>

                <div class="passwordContainer">
                    <label class="passwordLabel">Password</label>
                    <input type="password" placeholder="Enter Password" class="passwordField" v-model="password" />
                </div>

                <router-link to="/forgetpassword" class="forgetPasswordLink">forget passord?</router-link>
                <input @click.prevent="Login()" class="loginButton" type="button" value="Login">
            </form>
        </div>
    </div>
</template>

<script>

import { mapActions,mapGetters } from 'vuex';

import { backendURL } from '@/service/constants';

export default {
    data: function(){
        return{
            email: "",
            password: ""
        }
    },
    methods:{
        ...mapActions,
        async Login(){
            if(this.email==='' || this.password===''){
                alert('Please provide a username and password');
                return;
            }
            const postData = {email: this.email, password: this.password}
            const url =`${backendURL()}/users/authenticate`;
            try {
                let res = await this.$http.post(url, postData);
                const user = res.body.data;
                this.$store.dispatch('setUser', user);
                this.$store.dispatch('setToken', user.token);

                console.log(this.user);

                this.$router.push({path:"/dashboard", replace: true});

            }
            catch(e) {
                console.log(e);
                alert("an error occurred");
            }
        }
    },
    computed:{
        ...mapGetters({user:'getUser', token:'getToken'})
    }
}
</script>