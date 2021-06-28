<template>
  <div id="sidebar" :class="{active: sidebarOpened}">
    <div class="sidebar-wrapper active ps">
      <div class="sidebar-header">
        <!-- Insert img -->
        <router-link :to="{path: '/'}">
          <img src="../assets/img/icon.png" alt="icon">
        </router-link>
      </div>
      <div class="sidebar-menu">
        <ul class="menu">
          <li class="sidebar-title text-left">Main Menu</li>
          <slot v-if="isUserLoggedIn">
            <li class="sidebar-item">
              <router-link :to="{path: '/home'}"
                           :class="$route.name === 'Home' ? 'sidebar-link active' : 'sidebar-link'">
                <b-icon icon="house"></b-icon>
                <span>Home</span>
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link class="sidebar-link"
                           :to="{ name: 'Inventory' }"
                           active-class="active">
                <b-icon icon="clipboard-data"></b-icon>
                <span>Inventory</span>
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link class="sidebar-link"
                           :to="{ name: 'Orders' }"
                           active-class="active">
                <b-icon icon="card-checklist"></b-icon>
                <span>Orders</span>
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link :to="{name: 'Settings'}"
                           class="sidebar-link"
                           active-class="active">
                <b-icon icon="gear"></b-icon>
                <span>Auth Settings</span>
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link :to="{name: 'ComponentsSamples'}"
                           active-class="active"
                           class="sidebar-link">
                <b-icon icon="segmented-nav"></b-icon>
                <span>Components <span class="text-muted">(temp)</span></span>
              </router-link>
            </li>
            <li class="sidebar-item">
              <a role="button"
                 class="sidebar-link"
                 @click.prevent="$store.dispatch('logoutUser')">
                <b-icon icon="x-square"></b-icon>
                <span>Logout</span>
              </a>
            </li>
          </slot>
          <slot v-else>
            <li class="sidebar-item">
              <router-link :to="{name: 'Register'}"
                           active-class="active"
                           class="sidebar-link">
                <b-icon icon="person-plus"></b-icon>
                <span>Register</span>
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link :to="{name: 'Login'}"
                           active-class="active"
                           class="sidebar-link">
                <b-icon icon="person"></b-icon>
                <span>Login</span>
              </router-link>
            </li>
          </slot>
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
      isUserLoggedIn: 'isUserLoggedIn',
    }),
  },
  data() {
    return {
      showAuth: false,
      loading: false,
    };
  },
  methods: {
    onTest() {
      this.loading = true;
      this.$store.dispatch('testApi')
        .then(() => {
          this.loading = false;
          // eslint-disable-next-line no-alert
          alert('All good!');
        })
        .catch((err) => {
          this.loading = false;
          // eslint-disable-next-line no-alert
          alert(`${err.status} Error happened! Please check if the API is running.`);
        });
    },
  },
};
</script>
<style lang="scss">
.sidebar-wrapper {
  left: 0;
}
.sidebar-link {
  &.active {
    background: #0d6efd;
    color: white;
    span {
      color: white !important;
    }
  }
}
</style>
