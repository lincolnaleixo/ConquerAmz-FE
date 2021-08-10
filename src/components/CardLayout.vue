<template>
  <div :class="cardClass">
    <div class="card-header" v-if="cardType === 'table'">
      <h4 class="card-title text-left">{{ cardTitle }}</h4>
    </div>
    <div class="card-body p-0">
      <slot v-if="cardType === 'table'">
        <div class="table-responsive px-4">
          <b-table
            class="table table-striped"
            :items="cardData" :fields="orderCols">
            <template #cell(OrderTotal)="data">
              <strong>{{ data.value.Amount }}</strong>&nbsp;{{ data.value.CurrencyCode }}
            </template>
            <template #cell(IsPrime)="data">
              <b-checkbox disabled :value="data.value"></b-checkbox>
            </template>
          </b-table>
        </div>
      </slot>
      <slot v-else-if="cardType === 'statistics'">
        <card-stat></card-stat>
      </slot>
    </div>
  </div>
</template>
<script>
import CardStat from './CardStat.vue';

export default {
  name: 'CardLayout',
  components: {
    CardStat,
  },
  props: {
    cardType: {
      type: String,
      default: 'default', // 'statistics' || 'table'
    },
    cardTitle: {
      type: String,
    },
    cardData: {
      type: Array,
    },
  },
  data() {
    return {
      orderCols: [
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
  computed: {
    cardClass() {
      if (this.cardType === 'statistics') return 'card card-statistic';
      if (this.cardType === 'table-data') return 'card';
      return 'card';
    },
  },
};
</script>
