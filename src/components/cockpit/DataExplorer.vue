<template>
  <div id="container" style="min-width: 310px; height: 400px; margin: 40px"></div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Highcharts, {ChartObject} from 'highcharts';
  import axios from 'axios';

  interface IDataResponse {
    series: {
      unit: string,
      name: string,
      type: string
    }[];

    values: {
      [index: string]: {
        min: number,
        max: number
      }[]
    }
  }

  interface IData {
    chart: ChartObject | null
    axis: number
  }

  axios.defaults.headers.get.auth = 'Basic YXJ0dXJfZmpvZG9yb3ZAbWFpbC5ydToxQXNzLTRvbGUy';

  export default Vue.extend({
    data(): IData {
      return {
        chart: null,
        axis: 0
      };
    },
    mounted() {
      this.getData('c8y_TemperatureMeasurement.T', '10532');
      this.getData('c8y_SignalStrength.rssi', '10300');
      this.getData('c8y_Temperature.T', '10551');

      const theme = {
        colors: ['#7cb5ec', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee', '#55BF3B',
          '#DF5353', '#7798BF', '#aaeeee'],
        chart: {
          style: {
            fontFamily: 'Dosis, sans-serif'
          }
        },
        tooltip: {
          borderWidth: 0,
          backgroundColor: 'rgba(219,219,216,0.8)',
          shadow: false
        },
        legend: {
          itemStyle: {
            fontWeight: 'bold',
            fontSize: '13px'
          }
        },
        yAxis: {
          gridLineWidth: 0
        },
        xAxis: {
          gridLineWidth: 0,
          labels: {
            style: {
              fontSize: '12px'
            }
          }
        },
        background2: '#F0F0EA'
      };

      Highcharts.setOptions(theme);

      this.chart = Highcharts.chart('container', {
        chart: {
          type: 'line',
          zoomType: 'x',
          panning: true
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: [],
        plotOptions: {
          line: {
            enableMouseTracking: true,
            marker: {
              enabled: false
            }
          }
        },
        legend: {
          align: 'left',
          verticalAlign: 'top',
          borderWidth: 0
        },
        series: []
      });
    },
    methods: {
      getData(seriesName: string, sourceId: string) {
        axios.get<IDataResponse>(`https://arturfedorov.cumulocity.com/measurement/measurements/series?aggregationType=HOURLY&dateFrom=2018-03-16T18:00:00%2B03:00&dateTo=2018-03-19T01:00:00%2B03:00&pageSize=1440&revert=true&series=${seriesName}&source=${sourceId}`)
          .then(response => {
            if (this.chart) {
              const dateKeys = Object.keys(response.data.values);
              if (dateKeys.length) {
                const seriesInfo = response.data.series[0];

                const series = {
                  name: seriesInfo.type,
                  data: [] as any[],
                  yAxis: this.axis
                };
                this.axis += 1;

                dateKeys.forEach(dateKey => {
                  series.data.push([new Date(dateKey).getTime(), response.data.values[dateKey][0].min]);
                });

                const axis = {
                  title: {
                    text: `${seriesInfo.type} => ${seriesInfo.name} [${seriesInfo.unit}]`
                  },
                  opposite: false
                };
                if (this.axis > 1) {
                  axis.opposite = true;
                }

                this.chart.addAxis(axis);
                this.chart.addSeries(series);

              }
            }
          });
      }
    }
  });
</script>

<style lang="scss" scoped>

</style>
