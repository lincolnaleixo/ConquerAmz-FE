<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link> |-->
<!--      <router-link :to="{name: 'Register'}">Register</router-link> |-->
<!--      <router-link :to="{name: 'Login'}">Login</router-link>-->
<!--    </div>-->
    <Sidebar/>
    <div id="main">
      <TopNav/>
      <div class="main-content container-fluid">
        <div class="page-title">
          <h3>{{ $route.name }}</h3>
          <p class="text-subtitle text-muted">Some description about the page.</p>
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
import Sidebar from './components/Sidebar.vue';
import TopNav from './components/TopNav.vue';

export default {
  components: {
    Sidebar,
    TopNav,
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
