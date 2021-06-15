<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 col-sm-12 mx-auto">
        <div class="card pt-4">
          <div class="card-body">
            <div class="text-center mb-5">
              <img src="../../assets/img/icon.png" height="48" class='mb-4'>
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
                         v-model="user.email"
                         id="username">
                  <div class="form-control-icon">
                    <b-icon icon="person"></b-icon>
                  </div>
                </div>
              </div>
              <div class="form-group position-relative has-icon-left">
                <div class="clearfix d-block text-left">
                  <label for="password">Password</label>
                  <router-link :to="{name: 'ForgotPassword'}" class="float-right">
                    <small>Forgot password?</small>
                  </router-link>
                </div>
                <div class="position-relative">
                  <input type="text"
                         class="form-control"
                         id="password"
                         :disabled="loading"
                         v-model="user.password">
                  <div class="form-control-icon">
                    <b-icon icon="lock"></b-icon>
                  </div>
                </div>
              </div>

              <div class='form-check clearfix my-4'>
                <div class="checkbox float-left">
                  <input type="checkbox" id="checkbox1"
                         class="form-check-input"
                         v-model="rememberMe">
                  <label for="checkbox1">Remember me</label>
                </div>
                <div class="float-right">
                  <router-link :to="{name: 'Register'}">Don't have an account?</router-link>
                </div>
              </div>
              <div class="clearfix">
                <button class="btn btn-primary float-right"
                        :disabled="loading"
                        v-text="loading ? 'Logging in...' : 'Login'"
                        @click.prevent="onLogin">
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userServices from '../../services/users';

export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      loading: false,
      rememberMe: false,
    };
  },
  methods: {
    onLogin() {
      this.loading = true;
      userServices.loginUser(this.user)
        .then((res) => {
          console.log('response: ', res);
          this.loading = false;
        })
        .catch((err) => {
          console.log('error: ', err);
          this.loading = false;
        });
    },
  },
};
</script>
