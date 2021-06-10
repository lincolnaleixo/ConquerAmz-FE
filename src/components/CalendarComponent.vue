<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-content">
        <div class="card-body">
          <b-calendar v-model="dateValue"
                      :min="minDate"
                      :max="maxDate"
                      locale="en">
          </b-calendar>
        </div>
        <div class="card-footer">
          <div class="buttons">
            <button class="btn btn-outline-primary"
                    @click.prevent="setFilter('today')">
              Today
            </button>
            <button class="btn btn-outline-primary" @click.prevent="setFilter('week')">
              Last week
            </button>
            <button class="btn btn-outline-primary" @click.prevent="setFilter('month')">
              Last month
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
export default {
  name: 'CalendarComponent',
  props: {
    withFilters: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      dateValue: new Date(),
      filterValue: null,
      minDate: null,
      maxDate: null,
    };
  },
  methods: {
    setFilter(filter) {
      const today = new Date();
      switch (filter) {
        case 'month':
          this.minDate = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
          this.maxDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
          this.dateValue = this.minDate;
          break;
        case 'week':
          this.minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
          this.maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
          this.dateValue = this.minDate;
          break;
        case 'today':
        default:
          this.dateValue = today;
      }
    },
  },
};
</script>
