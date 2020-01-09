import App from '../App.vue'

export default[
  {
    path: '/home',
    name: 'home',
    component: App.components.Home
  },
  {
    path: '*',
    redirect: '/home'
  }
]
