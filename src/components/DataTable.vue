<template>
  <div class="table-wrapper">
    <b-table
      class="table table-striped" id="table1"
      :items="tableData"
      :fields="tableHeaders"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      stacked="md"
      show-empty
      small
      @filtered="onFiltered">
      <template #cell(actions)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          Action
        </b-button>
      </template>
    </b-table>
  </div>
</template>
<script>
export default {
  name: 'DataTableComponent',
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    tableHeaders: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 15,
    },
    filter: {
      default: null,
    },
  },
  methods: {
    info(...args) {
      console.log(...args);
      this.$emit('actionFor', { ...args });
    },
    onFiltered() {
      this.$emit('filteredTable');
    },
  },
};
</script>
