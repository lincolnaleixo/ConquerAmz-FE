<template>
  <div id="app">
    <notifications
      :duration="-1"
      group="generalGroup">
    </notifications>
    <Sidebar/>
    <div id="main">
      <TopNav/>
      <div class="main-content container-fluid">
        <div class="page-title text-left" v-if="!hideTitle">
          <h3>{{ $route.name }}</h3>
<!--          <p class="text-subtitle text-muted">Some description about the page.</p>-->
        </div>
        <section class="section">
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
    ...mapGetters(['getNotificationObject']),
    hideTitle() {
      return this.$route.path.includes('auth');
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
