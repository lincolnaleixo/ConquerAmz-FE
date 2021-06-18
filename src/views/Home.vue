<template>
  <div class="home">
    <div v-if="!$store.getters.isUserLoggedIn">
      <p class="text-subtitle text-muted">
        It looks like you are not logged in! Click <router-link :to="{ name: 'Register' }">
        here
      </router-link> to Signup, or <router-link :to="{ name: 'Login' }">
        here
      </router-link> if you already have an account.
      </p>
    </div>
    <div v-else>
      <h3 class="info text-left">Hello, {{ getUser.name || 'User' }}</h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'getUser',
      'isUserLoggedIn',
    ]),
  },
  async mounted() {
    if (this.$store.getters.isUserLoggedIn) {
      await this.$store.dispatch('getUserData');
    }
  },
};
</script>
