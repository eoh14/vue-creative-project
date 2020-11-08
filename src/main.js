import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import mock from './mock-data.js'


Vue.config.productionTip = false

let data = {
  stories: mock,
  chosenStory: '',
  chosenAuthor: ''
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
