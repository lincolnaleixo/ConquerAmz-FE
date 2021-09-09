<template>
  <div class="table-wrapper pt-4 text-center">
    <div class="text-center" v-if="loading">
      <b-spinner type="grow" label="Spinning"></b-spinner>
    </div>
    <b-table
      v-else
      class="table table-striped"
      :current-page="currentPage"
      :per-page="perPage"
      :items="tableData" :fields="cols">
      <template #cell(OrderTotal)="data">
        <strong>{{ data.value.Amount }}</strong>&nbsp;{{ data.value.CurrencyCode }}
      </template>
    </b-table>
    <b-pagination class="justify-content-center w-100" :per-page="perPage"
                  v-model="currentPage"
                  :total-rows="tableData.length">
    </b-pagination>
  </div>
</template>
<script>
// import DataTable from '../components/DataTable.vue';
import InventoryServices from '../services/inventories';

export default {
  name: 'OrdersView',
  computed: {
    tableData() {
      return [...this.orders];
    },
  },
  data() {
    return {
      perPage: 15,
      currentPage: 1,
      orders: [],
      loading: false,
      cols: [
        {
          key: 'AmazonOrderId',
          label: 'Amazon Order Id',
        },
        {
          key: 'OrderType',
          label: 'Order Type',
          sortable: true,
        },
        {
          key: 'OrderTotal',
          label: 'Order Total',
          sortable: true,
        },
        {
          key: 'EarliestShipDate',
          label: 'Earliest Ship Date',
          sortable: true,
        },
        {
          key: 'LatestShipDate',
          label: 'Latest Ship Date',
          sortable: true,
        },
        {
          key: 'PurchaseDate',
          label: 'Purchase Date',
          sortable: true,
        },
        {
          key: 'IsPrime',
          label: 'Prime?',
          sortable: true,
        },
      ],
    };
  },
  methods: {
    getOrders(userId) {
      if (!userId) return false;
      this.loading = true;
      return InventoryServices.getOrders(userId).then(({ data }) => {
        this.loading = false;
        if (data && data.length > 0) {
          this.orders = data[0].awsOrders || data[0].orders;
        }
      }).catch(() => {
        this.loading = false;
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
