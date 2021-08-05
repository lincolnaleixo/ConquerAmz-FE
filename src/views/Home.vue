<template>
  <div class="home">
    <div>
      <p class="info text-left mt-1">Hello, {{ username || 'User' }}</p>
      <div class="row" v-if="isUserLoggedIn">
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
    'card-layout': CardLayout,
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
