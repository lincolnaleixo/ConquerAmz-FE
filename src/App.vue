<template>
  <div id="app">
    <notifications
      :duration="-1">
    </notifications>
    <Sidebar/>
    <div id="main">
      <TopNav/>
      <div class="main-content container-fluid">
        <div class="page-title text-left" v-if="!hideTitle">
          <h3>{{ $route.name }}</h3>
        </div>
        <section class="section">
          <div v-if="showText">
            <p class="text-subtitle text-muted">
              It looks like you are not logged in! Click <router-link :to="{ name: 'Register' }">
              here
            </router-link> to Signup, or <router-link :to="{ name: 'Login' }">
              here
            </router-link> if you already have an account.
            </p>
          </div>
          <div class="row">
            <router-view></router-view>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Sidebar from './components/Sidebar.vue';
import TopNav from './components/TopNav.vue';

export default {
  components: {
    Sidebar,
    TopNav,
  },
  computed: {
    ...mapGetters(['getNotificationObject', 'isUserLoggedIn', 'getUser']),
    hideTitle() {
      return this.$route.path.includes('auth') || this.$route.path === '/';
    },
    showText() {
      return this.$route.path === '/' && !this.isUserLoggedIn && !this.getUser;
    },
  },
  methods: {
    checkUser() {
      this.$store.dispatch('checkToken')
        .then((res) => {
          if (res) this.$router.push({ path: '/' });
          else this.$router.push({ path: '/' });
        })
        .catch(() => {
          // console.log('token error: ', err);
        });
    },
  },
  async mounted() {
    await this.$store.dispatch('checkToken');
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: map-get($theme-colors, 'primary');
    }
  }
}
</style>
