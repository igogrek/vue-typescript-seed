<template>
  <div class="data-explorer columns">
    <div class="column">
      <div class="card is-left">
        <div class="card-header">
          Test
        </div>
        <div id="chart-container"></div>
      </div>
    </div>
    <div class="column is-one-quarter">
      <div class="card is-right">
        <div class="card-header">
          <span class="card-title h4">Data points</span>
        </div>
        <div
          class="data-toggle"
          v-for="(point, index) of dataPoints">
          <!--<Checkbox-->
          <!--:checked="point.enabled"-->
          <!--@update:checked="toggleSeries(point, index)"-->
          <!--class="checkbox"/>-->
          <b-switch
            v-model="point.enabled"
            @input="toggleSeries(point, index)"
            class="switch">
          </b-switch>

          {{ point.name }}
        </div>
      </div>
    </div>
  </div>
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
    dataPoints: IDataPoint[]
  }

  interface IDataPoint {
    name: string;
    id: string;
    enabled: Boolean
  }

  axios.defaults.headers.get.auth = 'Basic YXJ0dXJfZmpvZG9yb3ZAbWFpbC5ydToxQXNzLTRvbGUy';

  export default Vue.extend({
    data(): IData {
      return {
        chart: null,
        axis: 0,
        dataPoints: [{
          name: 'c8y_TemperatureMeasurement.T',
          id: '10532',
          enabled: true
        }, {
          name: 'c8y_SignalStrength.rssi',
          id: '10300',
          enabled: true
        }, {
          name: 'c8y_Temperature.T',
          id: '10551',
          enabled: true
        }]
      };
    },
    mounted() {
      const theme = {
        colors: ['#7cb5ec', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066',
          '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
        tooltip: {
          borderWidth: 0,
          backgroundColor: 'rgba(219,219,216,0.8)',
          shadow: false
        },
        title: {
          text: '',
          style: {
            display: 'none'
          }
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

      this.chart = Highcharts.chart('chart-container', {
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
          enabled: false
        },
        series: []
      });

      this.dataPoints.forEach(point => this.getData(point.name, point.id));
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
      },
      toggleSeries(point: IDataPoint, index: number) {
        if (!point.enabled) {
          this.chart!.series[index].hide();
        } else {
          this.chart!.series[index].show();
        }
      }
    }
  });
</script>

<style lang="scss" scoped>
  .data-explorer {
    height: 100%;

    color: #333;

    #chart-container {
      height: 400px;
    }

    .card {
      position: relative;
      margin-top: 30px;
      background-color: #fff;
      -webkit-box-shadow: 0 1px 1px 0.003em rgba(0, 0, 0, .16);
      box-shadow: 0 1px 1px 0.003em rgba(0, 0, 0, .16);

      &.is-left {
        margin-left: 30px;
      }

      &.is-right {
        margin-right: 30px;
      }

      &-header {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        padding: 15px;
        border-bottom: 1px solid rgba(0, 0, 0, .05);
      }

      .data-toggle {
        padding: 15px;
        border-bottom: 1px solid rgba(0, 0, 0, .05);

        .switch {
          position: relative;
          top: 6px;

          /deep/ input[type=checkbox]:checked + .check {
            background-color: #27B3CE;
          }
        }
      }
    }
  }
</style>
