<template>
  <section>
    <DataTable :table-data="sampleInventory"></DataTable>
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
      sampleInventory: [],
    };
  },
};
</script>
