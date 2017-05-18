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
    }
  },
  actions: {
    create({
      commit
    }, data) {
      axios.post('http://localhost:3000/house', {
          title: data.title,
          price: data.price,
          description: data.description,
          name: data.name,
          phone: data.phone,
          img: data.img,
          lat: data.lat,
          lang: data.lang
        })
        .then(function(response) {
          console.log('Masuk ' + JSON.stringify(response));
          commit('seedlistData')
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    update({
      commit
    }, data) {
      axios.put('http://localhost:3000/house/' + data._id, {
          title: data.title,
          price: data.price,
          description: data.description,
          name: data.name,
          phone: data.phone,
          img: data.img,
          lat: data.lat,
          lang: data.lang
        })
        .then(function(response) {
          console.log('Update ' + JSON.stringify(response));
          commit('seedlistData')
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteData({
      commit
    }, data) {

      axios.delete('http://localhost:3000/house/' + data)
        .then(function(response) {
          console.log('Delete ' + JSON.stringify(response));
          commit('seedlistData')
        })
        .catch(function(error) {
          console.log(error);
        });
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
    }
  }
})
