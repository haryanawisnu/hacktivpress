<template>
<div class="navbar">
  <nav class="navbar navbar-default navbar-inverse" role="navigation">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
        <a @click="resetArticle" id="logotitle" class="navbar-brand" href="#"><b>Hacktivpress</b></a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search Article">
          </div>
          <button type="submit" class="btn btn-default">Search</button>
        </form>
        <form v-if="!statuslogin" id="signin" class="navbar-form navbar-left">
          <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
            <input v-model="user.logusername" type="text" class="form-control" placeholder="Username">
          </div>

          <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
            <input v-model="user.logpassword" type="password" class="form-control" placeholder="Password">
          </div>
          <a @click="login" class="btn btn-primary">Login</a>
        </form>
        <ul v-if="!statuslogin" class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><b>Signup</b> <span class="caret"></span></a>
            <ul id="login-dp" class="dropdown-menu">
              <li>
                <div class="row">
                  <div class="col-md-12">
                    <form class="form" id="login-nav">
                      <div class="form-group">
                        <label class="sr-only">Username</label>
                        <input type="text" class="form-control" placeholder="Username" v-model="user.username">
                      </div>
                      <div class="form-group">
                        <label class="sr-only">Email address</label>
                        <input type="text" class="form-control" placeholder="Email address" v-model="user.email">
                      </div>
                      <div class="form-group">
                        <label class="sr-only">Password</label>
                        <input type="password" class="form-control" placeholder="Password" v-model="user.password">
                      </div>
                      <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block" @click="signup">Sign Up</button>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <form v-if="statuslogin" class="navbar-form navbar-right">
          <b style="color: #ffffff;">{{user.username}}</b>&nbsp;&nbsp;
          <a @click="logout" class="btn btn-warning">logout</a>
        </form>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</div>
</template>

<script>
export default {
  name: 'navbar',
  computed: {
    user() {
      return this.$store.getters.user
    },
    statuslogin() {
      return this.$store.getters.statuslogin
    }
  },
  methods: {
    signup() {
      let obj = {};
      obj.username = this.user.username;
      obj.password = this.user.password;
      obj.email = this.user.email;
      this.$store.dispatch('signup', obj)
    },
    login() {
      let obj = {};
      obj.username = this.user.logusername;
      obj.password = this.user.logpassword;
      this.$store.dispatch('signin', obj)
    },
    resetArticle() {
      this.$store.dispatch('resetArticle')
    },
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logotitle {
  color: #ffffff;
}

body {
  background: url('http://www.wallpaperup.com/uploads/wallpapers/2012/10/21/20181/cad2441dd3252cf53f12154412286ba0.jpg');
  padding: 50px;
}

#login-dp {
  min-width: 250px;
  padding: 14px 14px 0;
  overflow: hidden;
  background-color: rgba(255, 255, 255, .8);
}

#login-dp .help-block {
  font-size: 12px
}

#login-dp .bottom {
  background-color: rgba(255, 255, 255, .8);
  border-top: 1px solid #ddd;
  clear: both;
  padding: 14px;
}

#login-dp .social-buttons {
  margin: 12px 0
}

#login-dp .social-buttons a {
  width: 49%;
}

#login-dp .form-group {
  margin-bottom: 10px;
}

.btn-fb {
  color: #fff;
  background-color: #3b5998;
}

.btn-fb:hover {
  color: #fff;
  background-color: #496ebc
}

.btn-tw {
  color: #fff;
  background-color: #55acee;
}

.btn-tw:hover {
  color: #fff;
  background-color: #59b5fa;
}

@media(max-width:768px) {
  #login-dp {
    background-color: inherit;
    color: #fff;
  }
  #login-dp .bottom {
    background-color: inherit;
    border-top: 0 none;
  }
}
</style>
