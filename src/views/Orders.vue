<template>
  <section>
    <DataTable :table-data="orders"></DataTable>
  </section>
</template>
<script>
import DataTable from '../components/DataTable.vue';
import InventoryServices from '../services/inventories';

export default {
  name: 'OrdersView',
  components: {
    DataTable,
  },
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    getOrders(userId) {
      if (!userId) return false;
      return InventoryServices.getOrders(userId).then(({ data }) => {
        if (data && data.length > 0) {
          this.orders = data[0].awsOrders || data[0].orders;
        }
      }).catch((err) => {
        console.log('error happened while getting orders: ', JSON.stringify(err));
      });
    },
  },
  async mounted() {
    await this.$store.dispatch('getUserData');
    // eslint-disable-next-line no-underscore-dangle
    this.getOrders(this.$store.state.user._id);
  },
};
</script>
