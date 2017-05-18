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
        <a id="logotitle" class="navbar-brand" href="#"><b>Hacktivpress</b></a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search Article">
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
        <form id="signin" class="navbar-form navbar-left" role="form">
          <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
            <input id="email" type="email" class="form-control" name="email" value="" placeholder="Username">
          </div>

          <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
            <input id="password" type="password" class="form-control" name="password" value="" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><b>Signup</b> <span class="caret"></span></a>
            <ul id="login-dp" class="dropdown-menu">
              <li>
                <div class="row">
                  <div class="col-md-12">
                    <form class="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                      <div class="form-group">
                        <label class="sr-only" for="exampleInputEmail2">Username</label>
                        <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Username" required>
                      </div>
                      <div class="form-group">
                        <label class="sr-only" for="exampleInputEmail2">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email address" required>
                      </div>
                      <div class="form-group">
                        <label class="sr-only" for="exampleInputPassword2">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" required>
                      </div>
                      <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
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
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
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
