// 向外暴露路由器模块

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'


Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',//路径没有#
    // 项目中所有的路由
    routes
})