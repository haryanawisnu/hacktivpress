import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    list_article: [],
    article: {
      title: '',
      description: '',
      category: '',
      author: '',
      created: ''
    },
    user: {
      username: '',
      password: '',
      logusername: '',
      logpassword: '',
      email: ''
    },
    statuslogin: false
  },
  mutations: {
    seedlistData(state) {
      axios.get('http://localhost:3000/article')
        .then(function(response) {
          console.log('Masuk ' + response);
          state.list_article = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    viewArticle(state, data) {
      state.article = data;
    },
    setStatuslogintrue(state) {
      state.statuslogin = true;
    },
    setStatusloginfalse(state) {
      state.statuslogin = false;
    },
    setUser(state, data) {
      state.user = data;
    },
    resetArticle(state) {
      state.article.title = '';
      state.article.category = '';
      state.article.description = '';
    }
  },
  actions: {
    signin({
      commit
    }, data) {
      console.log(data);
      if (data.username != '' && data.password != '') {
        axios.post('http://localhost:3000/signin', {
            username: data.username,
            password: data.password
          })
          .then(function(response) {
            if (response.data.success) {
              alert('Welcome ' + response.data.data.username);
              localStorage.setItem('token', response.data.token);
              commit('setUser', response.data.data);
              commit('setStatuslogintrue');
            } else {
              alert(response.data.message);
            }
          })
      } else {
        alert('Masukan Semua Field Form Signin');
      }
    },
    signup({
      commit
    }, data) {
      console.log(data);
      if (data.username != '' && data.password != '' && data.email != '') {
        axios.post('http://localhost:3000/users', {
            username: data.username,
            password: data.password,
            email: data.email,
          })
          .then(function(response) {
            alert('Selamat Bergabung diHactivpress ' + response.data.data.username);
            localStorage.setItem('token', response.data.token);
            commit('setStatuslogintrue');
          })
      } else {
        alert('Masukan Semua Field Form Signup');
      }
    },
    seedlistData({
      commit
    }) {
      commit('seedlistData')
    },
    setStatus({
      commit
    }, data) {
      commit('setStatus', data);
    },
    viewArticle({
      commit
    }, data) {
      commit('viewArticle', data);
      router.push('/detail')
    },
    resetArticle({
      commit
    }, data) {
      commit('resetArticle');
    },
    logout({
      commit
    }, data) {
      localStorage.removeItem('token');
      commit('resetArticle');
      commit('resetUser');
      setStatusloginfalse
      commit('setStatusloginfalse');
      commit('logout');
    }
  },
  getters: {
    article(state) {
      return state.article
    },
    list_article(state) {
      return state.list_article
    },
    statuslogin(state) {
      return state.statuslogin
    },
    user(state) {
      return state.user
    }
  }
})
