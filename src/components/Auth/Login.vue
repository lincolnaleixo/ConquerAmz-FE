<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 col-sm-12 mx-auto">
        <div class="card pt-4">
          <div class="card-body">
            <div class="text-center mb-5">
<!--              <img src="assets/images/favicon.svg" height="48" class='mb-4'>-->
              <h3>Sign In</h3>
              <p>Please sign in to continue to ConquerAmz.</p>
            </div>
            <form >
              <div class="form-group position-relative has-icon-left">
                <label for="username" class="d-block text-left">Username</label>
                <div class="position-relative">
                  <input type="text"
                         class="form-control"
                         :disabled="loading"
                         v-model="username"
                         id="username">
                  <div class="form-control-icon">
                    <b-icon icon="person"></b-icon>
                  </div>
                </div>
              </div>
              <div class="form-group position-relative has-icon-left">
                <div class="clearfix d-block text-left">
                  <label for="password">Password</label>
                  <a class="float-right">
                    <small>Forgot password?</small>
                  </a>
                </div>
                <div class="position-relative">
                  <input type="text"
                         class="form-control"
                         id="password"
                         :disabled="loading"
                         v-model="password">
                  <div class="form-control-icon">
                    <b-icon icon="lock"></b-icon>
                  </div>
                </div>
              </div>

              <div class='form-check clearfix my-4'>
                <div class="checkbox float-left">
                  <input type="checkbox" id="checkbox1" class='form-check-input' >
                  <label for="checkbox1">Remember me</label>
                </div>
                <div class="float-right">
                  <router-link :to="{name: 'Register'}">Don't have an account?</router-link>
                </div>
              </div>
              <div class="clearfix">
                <button class="btn btn-primary float-right">Submit</button>
              </div>
            </form>
            <div class="divider">
              <div class="divider-text">OR</div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <button class="btn btn-block mb-2 btn-primary">
                  <b-icon icon="facebook"></b-icon> Facebook
                </button>
              </div>
              <div class="col-sm-6">
                <button class="btn btn-block mb-2 btn-secondary">
                  <b-icon icon="github"></b-icon> Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      loading: false,
    };
  },
};
</script>
