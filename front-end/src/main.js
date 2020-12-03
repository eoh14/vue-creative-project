import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';


Vue.config.productionTip = false

let data = {
  stories: [],
  chosenStory: '',
  chosenAuthor: ''
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
