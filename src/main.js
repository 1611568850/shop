import Vue from 'vue'
import App from './App'
import router from './router'

import 'lib-flexible'


new Vue({
    render:h=>h(App),
    router,//所有组件都能看到$router(路由器)和$route (路由)
}).$mount('#app')
