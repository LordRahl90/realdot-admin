import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        user:{},
        token:{},
        companies:{},
    },
    getters:{
        getToken: state=>state.token,
        getUser: state=>state.user,
        getCompanies: state=>state.companies,
    },
    mutations:{
        setUser(state, user){
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
        setCompanies(state, companies){
            state.companies = companies
        },
        logout(state){
            state.user = {};
        }
    },
    actions:{
        setUser(context, payload){
            context.commit('setUser',payload);
        },
        setToken(context,payload){
            context.commit('setToken', payload);
        },
        setCompanies(context,payload){
            context.commit('setCompanies',payload)
        },
        logout(context){
            context.commit('logout');
        }
    },
});