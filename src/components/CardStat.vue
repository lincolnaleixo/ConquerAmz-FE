<template>
  <div class="d-flex flex-column">
    <div class="justify-content-between">
      <div class="card-title">{{ cardTitle }}</div>
    </div>
    <div>
      <canvas id="canvas4" style="height:100px !important"></canvas>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardStatistics',
  props: {
    cardTitle: {
      type: String,
      default: 'Statistics',
    },
  },
};
</script>
