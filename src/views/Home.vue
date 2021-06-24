<template>
  <div class="home">
    <div v-if="!isUserLoggedIn && !getUser">
      <p class="text-subtitle text-muted">
        It looks like you are not logged in! Click <router-link :to="{ name: 'Register' }">
        here
      </router-link> to Signup, or <router-link :to="{ name: 'Login' }">
        here
      </router-link> if you already have an account.
      </p>
    </div>
    <div v-else>
      <p class="info text-left mt-1">Hello, {{ username || 'User' }}</p>
      <div class="row">
        <div class="col-9">
          <card-layout card-type="table" card-title="Last Orders"></card-layout>
        </div>
        <div class="col-3">
          <card-layout card-type="statistics" card-title="Inventory Remaining"></card-layout>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import CardLayout from '../components/CardLayout.vue';

export default {
  name: 'Home',
  components: {
    CardLayout,
  },
  computed: {
    ...mapGetters([
      'getUser',
      'getUserToken',
      'isUserLoggedIn',
    ]),
    username() {
      return this.getUser ? this.getUser.name : 'User';
    },
    displayWelcome() {
      const token = localStorage.getItem('jwtToken');
      return token === null;
    },
  },
  async mounted() {
    this.$nextTick(async () => {
      if (!this.displayWelcome) await this.$store.dispatch('getUserData');
    });
  },
};
</script>
