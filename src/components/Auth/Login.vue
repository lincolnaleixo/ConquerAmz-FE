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
            <form>
              <div class="form-group position-relative has-icon-left">
                <label for="username" class="d-block text-left">Email</label>
                <div class="position-relative">
                  <input type="text"
                         class="form-control"
                         :class="{'is-invalid': $v.user.email.$error}"
                         :disabled="loading"
                         v-model="user.email"
                         id="username">
                  <div class="invalid-feedback" v-if="$v.user.email.$error">
                    Please provide a valid email address.
                  </div>
                  <div class="form-control-icon">
                    <b-icon icon="person"></b-icon>
                  </div>
                </div>
              </div>
              <br>
              <div class="form-group position-relative has-icon-left">
                <div class="clearfix d-block text-left">
                  <label for="password">Password</label>
                  <router-link :to="{name: 'ForgotPassword'}" class="float-right">
                    <small>Forgot password?</small>
                  </router-link>
                </div>
                <div class="position-relative">
                  <input type="password"
                         class="form-control"
                         :class="{'is-invalid': $v.user.password.$error}"
                         id="password"
                         :disabled="loading"
                         v-model="user.password">
                  <div class="invalid-feedback" v-if="$v.user.password.$error">
                    Please provide a password with at least 8 letters.
                  </div>
                  <div class="form-control-icon">
                    <b-icon icon="lock"></b-icon>
                  </div>
                </div>
              </div>
              <br>

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
import { mapActions } from 'vuex';
import { required, email, minLength } from 'vuelidate/lib/validators';
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
  validations: {
    user: {
      email: {
        email,
        required,
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
  methods: {
    ...mapActions(['notify']),
    onLogin() {
      this.$v.$touch();
      this.loading = true;
      if (this.$v.user.$invalid) {
        this.notify({
          type: 'error',
          text: 'Please check your form for errors.',
          title: 'Invalid Data',
        });
        this.loading = false;
        return false;
      }
      return userServices.loginUser(this.user)
        .then((res) => {
          const { token } = res.data;
          if (token) {
            localStorage.setItem('jwtToken', token);
            this.$store.commit('TOGGLE_USER_LOGGED_IN');
            this.notify({
              type: 'success',
              text: 'You logged in successfully',
              title: 'Welcome to Amazon Conqueror!',
            });
            this.$router.push({ path: '/home' });
          }
          this.loading = false;
        })
        .catch((err) => {
          console.log('error: ', err);
          this.loading = false;
          this.notify({
            type: 'error',
            text: 'Error logging in!',
            title: 'Invalid credentials',
          });
        });
    },
  },
  async mounted() {
    this.$v.$reset();
  },
};
</script>
