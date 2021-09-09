<template>
  <div class="home">
    <div v-if="!displayWelcome">
      <p class="info text-left mt-1">Hello, {{ username || 'User' }}</p>
      <div class="row" v-if="isUserLoggedIn">
        <div class="col-9">
          <card-layout card-type="table" :card-data="orders" card-title="Last Orders"></card-layout>
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
import InventoryService from '../services/inventories';

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
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    getOrders(userId) {
      InventoryService.getLatestOrders(userId)
        .then(({ data }) => {
          this.orders = data;
        })
        .catch(() => {
          // console.log(err)
        });
    },
  },
  async mounted() {
    this.$nextTick(async () => {
      if (!this.displayWelcome) await this.$store.dispatch('getUserData');
      // eslint-disable-next-line no-underscore-dangle
      await this.getOrders(this.$store.state.user._id);
    });
  },
};
</script>
