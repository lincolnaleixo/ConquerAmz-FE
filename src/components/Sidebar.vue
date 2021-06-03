<template>
  <div id="sidebar" :class="{active: sidebarOpened}">
    <div class="sidebar-wrapper active ps">
      <div class="sidebar-header">
        <!-- Insert img -->
        <img src="../assets/img/icon.png" alt="icon">
      </div>
      <div class="sidebar-menu">
        <ul class="menu">
          <li class="sidebar-title text-left">Main Menu</li>
          <li class="sidebar-item">
            <router-link :to="{path: '/'}"
                         class="sidebar-link">
              <b-icon icon="house"></b-icon>
              <span>Home</span>
            </router-link>
          </li>
          <li class="sidebar-item">
            <router-link :to="{name: 'Register'}"
                         class="sidebar-link">
              <b-icon icon="person-plus"></b-icon>
              <span>Register</span>
            </router-link>
          </li>
          <li class="sidebar-item">
            <router-link :to="{name: 'Login'}"
                         class="sidebar-link">
              <b-icon icon="person"></b-icon>
              <span>Login</span>
            </router-link>
          </li>
        </ul>
      </div>
<!--      <div class="sidebar-toggler btn x d-block">-->
<!--        <b-icon icon="justify"></b-icon>-->
<!--      </div>-->
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters({
      sidebarOpened: 'getSidebarOpened',
    }),
  },
  data() {
    return {
      showAuth: false,
    };
  },
};
</script>
<style lang="scss">
.sidebar-wrapper {
  left: 0;
}
</style>
