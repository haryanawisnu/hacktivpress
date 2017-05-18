<template>
<div class="detail">
  <div class="container">
    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
      <div class="row">
        <form role="form" id="contact-form" class="contact-form">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <input type="text" class="form-control" n id="Title" placeholder="Title" v-model="article.title" :disabled="!statuslogin">
                <br>
                <input type="text" class="form-control" id="Category" placeholder="Category" v-model="article.category" :disabled="!statuslogin">
                <br>
                <textarea class="form-control textarea " rows="5 " id="Description " placeholder="Description " v-model="article.description" :disabled="!statuslogin"></textarea>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <button type="submit" class="btn btn-success pull-right" v-if="statuslogin">Send a message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'detail',
  computed: {
    article() {
      return this.$store.getters.article
    },
    statuslogin() {
      return this.$store.getters.statuslogin
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
