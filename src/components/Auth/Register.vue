<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 col-sm-12 mx-auto">
        <div class="card pt-4">
          <div class="card-body">
            <div class="text-center mb-5">
              <img src="../../assets/img/icon.png" height="48" class='mb-4'>
              <h3>Sign Up</h3>
              <p>
                Please fill the form below.
              </p>
            </div>
            <form>
              <div class="row">
                <div class="d-flex flex-column align-items-center justify-content-center">
                  <div class="col-12">
                    <div class="form-group">
                      <label for="first-name-column">Name/Username</label>
                      <input type="text" id="first-name-column"
                             class="form-control"
                             :class="{'is-invalid': $v.user.name.$error}"
                             v-model="user.name"
                             name="fname-column">
                    </div>
                  </div>
                  <br>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="username-column">Email</label>
                      <input type="email" id="username-column"
                             class="form-control"
                             v-model="user.email"
                             :class="{'is-invalid': $v.user.email.$error}"
                             name="username-column">
                      <div class="invalid-feedback" v-if="$v.user.email.$error">
                        Please provide a password with at least 8 letters.
                      </div>
                    </div>
                  </div>
                  <br>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="email-id-column">Password</label>
                      <input type="password"
                             v-model="user.password"
                             id="email-id-column"
                             class="form-control"
                             :class="{'is-invalid': $v.user.password.$error}"
                             name="email-id-column">
                      <div class="invalid-feedback" v-if="$v.user.password.$error">
                        Please provide a password with at least 8 letters.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br>
              <router-link :to="{name: 'Login'}">Have an account? Login</router-link>
              <div class="clearfix">
                <button class="btn btn-primary float-right"
                        :disabled="loading"
                        v-text="loading ? 'Saving...' : 'Register'"
                        @click.prevent="onSubmit">
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
import { email, minLength, required } from 'vuelidate/lib/validators';
import userServices from '../../services/users';

export default {
  name: 'Register',
  data() {
    return {
      user: {
        email: '',
        password: '',
        name: '',
      },
      loading: false,
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
      name: {
        required,
        minLength: minLength(1),
      },
    },
  },
  methods: {
    ...mapActions(['notify']),
    onSubmit() {
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
      return userServices.createUser(this.user)
        .then((res) => {
          this.loading = false;
          const { token } = res.data;
          if (token) {
            localStorage.setItem('jwtToken', token);
            this.$store.commit('TOGGLE_USER_LOGGED_IN');
            this.notify({
              type: 'success',
              text: 'You have signed up successfully. Now please provide your AWS SP credentials to connect and sync data',
              title: 'Congrats!',
            });
            this.$router.push({ name: 'Settings' });
          }
        })
        .catch((err) => {
          if (err.status === 500 || err.status === 0) {
            this.notify({
              type: 'error',
              text: 'Please feel free to try again.',
              title: 'Something wrong happened!',
            });
          } else if (err.status === 400) {
            this.notify({
              type: 'error',
              text: err.data || err,
              title: 'Signing up failed!',
            });
          }
          // localStorage.setItem('jwtToken', '');
          this.loading = false;
        });
    },
  },
  async mounted() {
    this.$v.$reset();
  },
};
</script>
<style scoped lang="scss">
.form-group {
  text-align: left;
}
</style>
