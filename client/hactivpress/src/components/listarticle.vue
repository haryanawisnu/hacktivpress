<template>
<div class="container">
  <div class="row">
    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
      <form role="form" id="contact-form" class="contact-form">
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <input type="text" class="form-control" n id="Title" placeholder="Title" v-model="article.title" v-if="statuslogin">
              <br>
              <input type="text" class="form-control" id="Category" placeholder="Category" v-model="article.category" v-if="statuslogin">
              <br>
              <textarea class="form-control textarea " rows="5 " id="Description " placeholder="Description " v-model="article.description" v-if="statuslogin"></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <button type="submit" class="btn btn-success pull-right" v-if="statuslogin">Send a message</button>
          </div>
        </div>
      </form>
      <div class="listarticle">
        <div v-for="data in list_article" class="panel">
          <div class="panel-heading">
            <div class="text-center">
              <div class="row">
                <h3>{{data.title}}</h3>
                <h4><small><em>{{data.created}}</em></small></h4>
              </div>
            </div>
          </div>
          <div class="panel-body text-left">
            {{data.description}}... <a @click="viewArticle(data)">Read more</a>
          </div>

          <div class="panel-footer">
            <span class="label label-default">{{data.category}}</span>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'listarticle',
  computed: {
    list_article() {
      return this.$store.getters.list_article
    },
    statuslogin() {
      return this.$store.getters.statuslogin
    },
    article() {
      return this.$store.getters.article
    }
  },
  methods: {
    seedList() {
      this.$store.dispatch('seedlistData')
    },
    viewArticle(data) {
      this.$store.dispatch('viewArticle', data)
    }
  },
  created() {
    this.seedList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listarticle {
  border-style: outset;
}
</style>
