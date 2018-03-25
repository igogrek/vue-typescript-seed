<template>
  <div>
    <div class="level filters">
      <div class="level-left">
        <div class="level chips">
          <div class="level-left chips-item is-left">
            <img src="../../assets/critical.svg">
            <span class="title is-5 is-size-14">Critical</span>
          </div>
          <div class="level-left chips-item">
            <img src="../../assets/major.svg">
            <span class="title is-5 is-size-14">Major</span>
          </div>
          <div class="level-left chips-item">
            <img src="../../assets/minor.svg">
            <span class="title is-5 is-size-14">Minor</span>
          </div>
          <div class="level-left chips-item is-right">
            <img src="../../assets/warning.svg">
            <span class="title is-5 is-size-14">Warning</span>
          </div>
        </div>
      </div>
    </div>
    <div class="alarms">
      <div
        v-for="alarm in alarms"
        :key="alarm.id"
        class="title alarm">
        <div class="alarm-header">
          <div
            class="alarm-image"
            :class="{'is-major': alarm.severity === 'MAJOR'}">
            <span class="title is-size-26 is-6">!</span>
          </div>
          <span class="title is-uppercase is-5 is-size-12">{{ alarm.severity }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import {IAlarm} from '../../../shared/interfaces/IAlarm';
  import {SET_ALARMS} from '../../../store/mutation-types';

  export default Vue.extend({
    name: 'Alarms',

    computed: {
      alarms() : IAlarm[] {
        return this.$store.state.alarms;
      }
    },
    created() {
      const API_KEY: string = 'Basic YXJ0dXJfZmpvZG9yb3ZAbWFpbC5ydToxQXNzLTRvbGUy';
      const API_PATH: string = 'https://arturfedorov.cumulocity.com/';

      const ALARM_PATH: string = `${API_PATH}alarm/alarms`;
      const AUTH_HEADER = {Authorization: API_KEY};

      axios.get(ALARM_PATH, {headers: AUTH_HEADER})
        .then(response => {
          this.$store.commit(SET_ALARMS, response.data.alarms);
        });
    }
  });
</script>

<style lang="scss" scoped>
  @import '../../../styles/variables';

  $border: #DFE1E1;
  $padding: 30px;
  $critical: #D51022;
  $major: #FD8024;

  .filters {
    border-top: 1px solid $border;
    height: 50px;
    background-color: $white;
    padding: 0 $padding;
  }

  .chips {
    &-item {
      cursor: pointer;
      background-color: $nav-color;
      border: 1px solid $border;
      color: $text-color;
      padding: 6px 10px;

      img {
        width: 17px;
        height: 16px;
        margin-right: 5px;
      }

      &.is-left {
        border-radius: 15px 0  0 15px;
        padding-left: 17px;
      }

      &.is-right {
        border-radius: 0 15px 15px 0;
        padding-right: 17px;
      }
    }
  }

  .alarms {
    padding: 0 $padding;

    .alarm {
      background-color: $white;
      box-shadow: 0 1px 1px 0.003em rgba(0,0,0,.16);

      &-header {
        display: flex;
        align-items: center;
      }

      &-image {
        background-color: $critical;
        display: inline-block;
        height: 40px;
        width: 44px;
        text-align: center;
        margin-right: 10px;

        &.is-major {
          background-color: $major;
        }

        span {
          color: $white;
        }
      }
    }
  }

</style>
