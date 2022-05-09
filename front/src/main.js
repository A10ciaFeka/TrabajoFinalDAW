import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import router from './views/routes.js'
import store from './store'


// new Vue ({
//     router,
//     store,
//     render: h => h(App)
// }).$mount('#app')
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

// createApp(App).use(router, store).mount('#app')
