import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'form-input',
      component: Form
    },
    {
      path: '/login',
      name: 'login-page', 
      component: Login 
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
