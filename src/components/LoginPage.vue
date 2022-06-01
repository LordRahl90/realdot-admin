<template>
    <div id="app">
        <div class="loginContainer">
            <div class="sideLoginContainer">
                <img class="sideImage" />
            </div>

            <h2 class="companyName">
                Company Name
            </h2>

            <h2 class="welcomeHeade">
                Welcome Back
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
export default {
    data: function(){
        return{
            email: "",
            password: ""
        }
    },
    methods:{
        Login(){
            if(this.email==='' || this.password===''){
                alert('hello login page');
            }else{
                const postData = {email: this.email, password: this.password}
                this.$http.post("login", postData).then(res => {
                    console.log(res.body)
                });
            }
        }
    }
}
</script>