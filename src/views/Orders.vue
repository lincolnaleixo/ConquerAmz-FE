<template>
  <section>
    <DataTable :table-data="orders"></DataTable>
  </section>
</template>
<script>
import DataTable from '../components/DataTable.vue';

export default {
  name: '',
  components: {
    DataTable,
  },
  data() {
    return {
      orders: [],
    };
  },
};
</script>
