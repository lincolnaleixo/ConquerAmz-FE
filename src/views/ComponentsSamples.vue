<template>
  <section class="container-fluid">
    <div class="row">
      <DataTable :table-data="tableData" :loading="loading"></DataTable>
      <CalendarComponent></CalendarComponent>
    </div>
  </section>
</template>
<script>
import DataTable from '../components/DataTable.vue';
import CalendarComponent from '../components/CalendarComponent.vue';

export default {
  name: 'ComponentsSamples',
  components: {
    DataTable,
    CalendarComponent,
  },
  computed: {
    tableData() {
      return [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        {
          age: 89,
          first_name: 'Geneva',
          last_name: 'Wilson',
          _rowVariant: 'danger',
        },
        {
          age: 40,
          first_name: 'Thor',
          last_name: 'MacDonald',
          _cellVariants: { age: 'info', first_name: 'warning' },
        },
        { age: 29, first_name: 'Dick', last_name: 'Dunlap' },
      ];
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
};
</script>
