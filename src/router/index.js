import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "@/components/view/DashBoard.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../components/LoginPage.vue'),
        meta:{
          disallowAuthed: true
        }
    },
    {
        path: '/forgetpassword',
        name: 'forget password',
        component: () => import('../components/ForgetPassword.vue')
    },
    {
        path: '/dashboard',
        redirect: '/user/dashboard',
        name: 'dashboard',
        component: () => import('../components/DashboardPage.vue'),
        children: [
            {
              path: "/user/dashboard",
              component: DashBoard,
            },
          ],
    },
    {
      path: '/company',
      redirect: '/company/index',
      name: 'companies',
      component: ()=>import('../components/DashboardPage.vue'),
      children: [
        {
          path: '/company/index',
          component: ()=>import('../components/company/CompanyList.vue')
        },
        {
          path:"/company/create",
          component: ()=>import('../components/company/NewCompany.vue')
        },
        {
          name: 'companyDetails',
          path: "/company/details/:id",
          component: ()=> import ('../components/company/CompanyDetails.vue')
        }
      ],
    },
    
    {
        path: '/staff',
        redirect: '/staff/index',
        name: 'staff',
        component: () => import('../components/DashboardPage.vue'),
        children: [
          {
            path: '/staff/index',
            component: () => import('../components/staff/StaffIndex.vue')
          },
          {
            path: '/staff/view',
            component: () => import('../components/staff/StaffView.vue')
          },{
            name: 'createStaff',
            path: '/staff/create',
            component: ()=>import('../components/staff/StaffCreate.vue')
          }
        ]
    },
    {
      path: '/setting',
      redirect: '/setting/index',
      name: 'setting',
      component: () => import('../components/DashboardPage.vue'),
      children: [
        {
          path: '/setting/index',
          component: () => import('../components/settings/SettingIndex.vue')
        },
        {
          path: '/setting/view',
          component: () => import('../components/settings/SettingView.vue')
        }
      ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router