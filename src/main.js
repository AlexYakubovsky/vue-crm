import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
// import store from './store'
import dateFilter from "./filters/data.filter"
import messagePlugin from './utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('dateFilter', dateFilter)

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount('#app')