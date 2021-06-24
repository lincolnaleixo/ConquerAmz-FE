<template>
  <div :class="cardClass">
    <div class="card-header" v-if="cardType === 'table'">
      <h4 class="card-title text-left">{{ cardTitle }}</h4>
    </div>
    <div class="card-body p-0">
      <slot v-if="cardType === 'table'">
        <div class="table-responsive">
<!--          <b-table class="table" id="table1"></b-table>-->
          <div class="table-responsive">
            <table class="table table-borderless mb-0">
              <thead>
              <tr>
                <th>NAME</th>
                <th>RATE</th>
                <th>SKILL</th>
                <th>TYPE</th>
                <th>LOCATION</th>
                <th>ACTION</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="text-bold-500">Michael Right</td>
                <td>$15/hr</td>
                <td class="text-bold-500">UI/UX</td>
                <td>Remote</td>
                <td>Austin,Taxes</td>
                <td><a href="#"><i
                  class="badge-circle badge-circle-light-secondary font-medium-1"
                  data-feather="mail"></i></a></td>
              </tr>
              <tr>
                <td class="text-bold-500">Morgan Vanblum</td>
                <td>$13/hr</td>
                <td class="text-bold-500">Graphic concepts</td>
                <td>Remote</td>
                <td>Shangai,China</td>
                <td><a href="#"><i
                  class="badge-circle badge-circle-light-secondary font-medium-1"
                  data-feather="mail"></i></a></td>
              </tr>
              <tr>
                <td class="text-bold-500">Tiffani Blogz</td>
                <td>$15/hr</td>
                <td class="text-bold-500">Animation</td>
                <td>Remote</td>
                <td>Austin,Texas</td>
                <td><a href="#"><i
                  class="badge-circle badge-circle-light-secondary font-medium-1"
                  data-feather="mail"></i></a></td>
              </tr>
              <tr>
                <td class="text-bold-500">Ashley Boul</td>
                <td>$15/hr</td>
                <td class="text-bold-500">Animation</td>
                <td>Remote</td>
                <td>Austin,Texas</td>
                <td><a href="#"><i
                  class="badge-circle badge-circle-light-secondary font-medium-1"
                  data-feather="mail"></i></a></td>
              </tr>
              <tr>
                <td class="text-bold-500">Mikkey Mice</td>
                <td>$15/hr</td>
                <td class="text-bold-500">Animation</td>
                <td>Remote</td>
                <td>Austin,Texas</td>
                <td><a href="#"><i
                  class="badge-circle badge-circle-light-secondary font-medium-1"
                  data-feather="mail">
                </i></a></td>
              </tr>
              </tbody>
            </table>
          </div>
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
      type: Object,
    },
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
