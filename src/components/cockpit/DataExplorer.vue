<template>
  <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Highcharts from 'highcharts';

  export default Vue.extend({
    mounted() {
      Highcharts.chart('container', {
        chart: {
          type: 'line',
          zoomType: 'x',
          panning: true
        },
        title: {
          text: 'Monthly Average Temperature'
        },
        subtitle: {
          text: 'Source: WorldClimate.com'
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          title: {
            text: 'Temperature (°C)'
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true
            },
            enableMouseTracking: false
          }
        },
        series: [{
          name: 'Tokyo',
          data: [[1521820702514, 12], [1521820902514, 7]]
        }, {
          name: 'London',
          data: [[1521840702514, 12]]
        }]
      } as any);
    }
  });
</script>

<style lang="scss" scoped>

</style>
