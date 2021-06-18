<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 col-sm-12 mx-auto">
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
<!--                <div class="divider">-->
<!--                  <div class="divider-text">User Configuration</div>-->
<!--                </div>-->
                <div class="d-flex flex-column align-items-center justify-content-center">
                  <div class="col-md-6 col-12">
                    <div class="form-group">
                      <label for="first-name-column">Name/Username</label>
                      <input type="text" id="first-name-column"
                             class="form-control"
                             v-model="user.name"
                             name="fname-column">
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="form-group">
                      <label for="username-column">Email</label>
                      <input type="email" id="username-column"
                             class="form-control"
                             v-model="user.email"
                             name="username-column">
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="form-group">
                      <label for="email-id-column">Password</label>
                      <input type="password"
                             v-model="user.password"
                             id="email-id-column"
                             class="form-control"
                             name="email-id-column">
                    </div>
                  </div>
                </div>
              </diV>

              <router-link :to="{name: 'Login'}">Have an account? Login</router-link>
              <div class="clearfix">
                <button class="btn btn-primary float-right"
                        :disabled="loading"
                        v-text="loading ? 'Saving...' : 'Register'"
                        @click.prevent="onSubmit">
                </button>
              </div>
            </form>
<!--            <div class="divider">-->
<!--              <div class="divider-text">OR</div>-->
<!--            </div>-->
<!--            <div class="row">-->
<!--              <div class="col-sm-6">-->
<!--                <button class="btn btn-block mb-2 btn-primary">-->
<!--                  <b-icon icon="facebook"></b-icon> Facebook-->
<!--                </button>-->
<!--              </div>-->
<!--              <div class="col-sm-6">-->
<!--                <button class="btn btn-block mb-2 btn-secondary">-->
<!--                  <b-icon icon="github"></b-icon> Github-->
<!--                </button>-->
<!--              </div>-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
  methods: {
    onSubmit() {
      this.loading = true;
      userServices.createUser(this.user)
        .then((res) => {
          this.loading = false;
          const { token } = res.data;
          if (token) {
            localStorage.setItem('jwtToken', token);
            this.$store.commit('TOGGLE_USER_LOGGED_IN');
            this.$router.push({ path: '/' });
          }
        })
        .catch((err) => {
          console.log('error: ', err);
          // localStorage.setItem('jwtToken', '');
          this.loading = false;
        });
    },
  },
};
</script>
<style scoped lang="scss">
.form-group {
  text-align: left;
}
</style>
