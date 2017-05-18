import Vue from 'vue'
import Router from 'vue-router'
import list_article from '@/components/list_article'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'list_article',
    component: list_article
    // ,
    // children: [{
    //   path: '/',
    //   component: list_article
    // }]
  }]
})
