<template>
<div class="container">
  <div class="row">
    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
      <div class="list_article">
        <div class="panel">
          <div class="panel-heading">
            <div class="text-center">
              <div class="row">
                <h3>Welcome</h3>
                <h4><small><em>2014-07-30<br>18:30:00</em></small>
                                </h4>
              </div>
            </div>
          </div>
          <div class="panel-body text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in... <a href="#">Read more</a>
          </div>

          <div class="panel-footer">
            <span class="label label-default">Welcome</span> <span class="label label-default">Updates</span> <span class="label label-default">July</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'list_article',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list_article {
  border-style: outset;
}
</style>
