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
              <router-link :to="{path: '/'}"
                           class="sidebar-link">
                <b-icon icon="house"></b-icon>
                <span>Home</span>
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link :to="{name: 'Settings'}" class="sidebar-link">
                <b-icon icon="gear"></b-icon>
                <span>Auth Settings</span>
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link :to="{name: 'ComponentsSamples'}"
                           class="sidebar-link">
                <b-icon icon="segmented-nav"></b-icon>
                <span>Components</span>
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
<!--            <li class="sidebar-item">-->
<!--              <button-->
<!--                class="sidebar-link btn btn-outline-primary m-4"-->
<!--                @click.prevent="onTest"-->
<!--                :disabled="loading"-->
<!--                v-text="loading ? 'Testing...' : 'Test API'">-->
<!--              </button>-->
<!--            </li>-->
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
</style>
