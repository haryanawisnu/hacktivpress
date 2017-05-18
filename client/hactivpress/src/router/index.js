import Vue from 'vue'
import Router from 'vue-router'
import listarticle from '@/components/listarticle'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'listarticle',
    component: listarticle
    // ,
    // children: [{
    //   path: '/',
    //   component: list_article
    // }]
  }, {
    path: '/detail',
    name: 'detail',
    component: detail
  }]
})
