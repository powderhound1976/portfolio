import Vue from 'vue'
import App from './App.vue'
import Jumbotron from './components/Jumbotron.vue'
import Footer from './components/Footer.vue'
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

Vue.config.productionTip = false

Vue.component('app-hero', Jumbotron),
  Vue.component('app-foot', Footer),
  Vue.component('app-about', AboutMe),
  Vue.component('app-projects', Projects),
  Vue.component('app-contact', Contact)

new Vue({
  render: h => h(App),
}).$mount('#app')
