<template>
<div class="container">
  <div class="row">
    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
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
