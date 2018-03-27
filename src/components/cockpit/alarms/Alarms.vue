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
        class="title alarm"
        v-for="alarm in alarms"
        :key="alarm.id">
        <div class="alarm-header">
          <div
            class="alarm-image"
            :class="severity[alarm.severity]">
            <span class="title is-size-26 is-6">!</span>
          </div>
          <span class="title is-uppercase is-5 is-size-12">{{ alarm.severity }}</span>
        </div>
        <div
          class="alarm-body"
          :class = "{'is-open' : alarm.isOpen }">
          <div class="level is-no-margin alarm-level">
            <div class="level-left">
              <span
                class="title is-size-14 is-6 alarm-icon"
                :class="severity[alarm.severity]">!</span>
              <span class="title is-5 is-size-14">{{ alarm.text }}</span>
            </div>
            <div class="level-right">
              <img
                class="alarm-button"
                src="../../assets/angle-down.svg"
                :class = "{'is-open' : alarm.isOpen }"
                @click="editAlarm(alarm, 'isOpen', !alarm.isOpen)">
            </div>
          </div>
          <div class="level is-no-margin alarm-level">
            <div class="level-left">
              <img
                class="alarm-icon is-transparent"
                src="../../root/assets/bell.svg">
              <span class="title is-5 is-size-14 is-no-margin is-secondary">{{ new Date(alarm.time).toUTCString() }}</span>
              <span class="title is-5 is-size-14 is-no-margin is-secondary"> - {{ alarm.source.name }}</span>
            </div>
          </div>
          <div class="level is-no-margin alarm-level">
            <span class="level-left title is-size-16 is-5 alarm-divider">
              Status
            </span>
          </div>
          <div class="level is-no-margin alarm-level">
            <span class="title is-5 is-size-14">ACTIVE: triggered 4 years ago</span>
          </div>
          <div class="level is-no-margin alarm-level">
            <span class="title is-5 is-size-14 is-no-margin is-secondary">Type {{ alarm.type }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import {IAlarm} from '../../../shared/interfaces/IAlarm';
  import {SET_ALARMS, EDIT_ALARM_OPEN} from '../../../store/mutation-types';

  export default Vue.extend({
    name : 'Alarms',
    data() {
      return {
        severity: {
          MAJOR: 'is-major',
          MINOR: 'is-minor',
          WARNING: 'is-warning'
        }
      };
    },
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
    },
    methods: {
      editAlarm(alarm:IAlarm, index: string, item: boolean) {
        this.$store.commit(EDIT_ALARM_OPEN, {alarm, index, item});
      }
    }
  });
</script>

<style lang="scss" scoped>
  @import '../../../styles/variables';

  $border: #DFE1E1;
  $padding: 30px;
  $critical: #D51022;
  $major: #FD8024;
  $warning: #5FC0DD;
  $minor: #FCBF2D;
  $icon-height: 20px;

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

      &-body {
        height: 62px;
        overflow: hidden;
        transition: height .3s;

        &.is-open {
          height: 140px;
        }
      }

      &-button {
        cursor: pointer;

        &.is-open {
          transform: rotate(180deg);
        }
      }

      &-divider {
        color: $magenta;
        width: 100%;
        &:after {
          align-self: center;
          content: '';
          border-top: 1px solid $magenta;
          flex: 1 1 auto;
          margin-left: 8px;
        }
      }

      &-header {
        display: flex;
        align-items: center;
        border-bottom: 1px solid $border;
      }

      &-icon {
        background-color: $major;
        line-height: $icon-height;
        height: $icon-height;
        width: $icon-height;
        border-radius: 50%;
        color: $white;
        vertical-align: middle;
        text-align: center;
        margin: 0 8px 0 0;

        &.is-transparent {
          background-color: transparent;
        }
      }

      &-image {
        background-color: $critical;
        display: inline-block;
        height: 40px;
        width: 44px;
        text-align: center;
        margin-right: 10px;

        span {
          color: $white;
        }
      }

      &-level {
        padding: 8px 15px 0 15px;
      }

      .is-no-margin {
        margin: 0;
      }

      .is-major {
        background-color: $major;
      }

      .is-minor {
        background-color: $minor;
      }

      .is-warning {
        background-color: $warning;
      }
    }
  }

</style>
