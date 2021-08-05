<template>
  <section>
    <DataTable :table-data="inventories"></DataTable>
  </section>
</template>
<script>
import DataTable from '../components/DataTable.vue';
import InventoryServices from '../services/inventories';

export default {
  name: 'InventoryView',
  components: {
    DataTable,
  },
  data() {
    return {
      inventories: [],
    };
  },
  methods: {
    getInventories(userId) {
      if (!userId) return false;
      return InventoryServices.getInventories(userId).then(({ data }) => {
        if (data && data.length > 0) {
          this.inventories = data[0].inventorySummaries || [];
        }
      }).catch((err) => {
        console.log('error happened while getting inventories: ', JSON.stringify(err));
      });
    },
  },
  async mounted() {
    await this.$store.dispatch('getUserData');
    // eslint-disable-next-line no-underscore-dangle
    this.getInventories(this.$store.state.user._id);
  },
};
</script>
