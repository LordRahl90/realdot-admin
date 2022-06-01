import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from "@/components/view/DashBoard.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../components/LoginPage.vue')
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
        path: '/listing',
        redirect: '/listing/index',
        name: 'Listing',
        component: () => import('../components/DashboardPage.vue'),
        children: [
          {
            path: "/listing/index",
            component: () => import('../components/listing/ListingIndex.vue'),
          },
          {
            path: '/listing/create',
            component: () => import('../components/listing/ListingNew.vue')
          },
          {
            path: '/listing/create/paymentplan',
            component: () => import('../components/listing/ListingNewPaymentPlan.vue')
          },
          {
            path: '/listing/create/upload',
            component: () => import('../components/listing/ListingNewUpload.vue')
          },
          {
            path: '/listing/view',
            component: () => import('../components/listing/ListingNewView.vue')
          },
          {
            path: '/listing/edit',
            component: () => import('../components/listing/ListingEdit.vue')
          },
          {
            path: '/listing/profile',
            component: () => import('../components/listing/ListingProfile.vue')
          },
          {
            path: '/listing/subscriber',
            component: () => import('../components/listing/ListingCustomerPlan.vue')
          },
          {
            path: '/listing/subscriber/paymentplan',
            component: () => import('../components/listing/ListingCustomerPaymentDetails.vue')
          }
        ]
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