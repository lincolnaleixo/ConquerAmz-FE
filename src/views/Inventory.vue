<template>
  <section class="pt-4">
    <div class="text-center" v-if="loading">
      <b-spinner type="grow" label="Spinning"></b-spinner>
    </div>
    <DataTable v-else :table-data="inventories" :table-headers="columns"></DataTable>
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
      loading: false,
      inventories: [],
      columns: [
        {
          key: 'sellerSku',
        },
        {
          key: 'lastUpdatedTime',
          label: 'Last Updated Time',
          sortable: true,
        },
        {
          key: 'productName',
        },
        {
          key: 'totalQuantity',
          sortable: true,
        },
      ],
    };
  },
  methods: {
    getInventories(userId) {
      if (!userId) return false;
      this.loading = true;
      return InventoryServices.getInventories(userId).then(({ data }) => {
        this.loading = false;
        if (data && data.length > 0) {
          this.inventories = data[0].inventorySummaries || [];
        }
      }).catch(() => {
        this.loading = false;
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
