<template>
  <section class="list">
    <md-table v-model="devices" md-sort="name" md-sort-order="asc">
      <md-table-row slot='md-table-row' slot-scope="{item }">
        <md-table-cell md-label="NAME" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="MODEL" md-sort-by="model">{{ item.model }}</md-table-cell>
        <md-table-cell md-label="SERIAL NUMBER" md-sort-by="serialNumber">{{ item.serialNumber }}</md-table-cell>
        <md-table-cell md-label="GROUP" md-sort-by="group">{{ item.group }}</md-table-cell>
        <md-table-cell md-label="REGISTRATION DATE">{{ item.regTime }}</md-table-cell>
        <md-table-cell md-label="SYSTEM ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="IMEI">{{ item.imei }}</md-table-cell>
      </md-table-row>
    </md-table>
  </section>
</template>

<script lang="ts">

  import Vue from "vue";
  import {mapActions, mapGetters} from "vuex";
  import * as types from '../../../store/modules/types/device-types'

  export default Vue.extend({
    name: "device-list",
    components: {},

    created() {
      this.fetchDevices()
    },
    computed: mapGetters({
      devices: types.GET_DEVICES
    }),

    methods: {
      ...mapActions({
        fetchDevices: types.FETCH_DEVICES
      })
    },

  })
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    background-color: white;
    color: black;
    box-shadow: 0 1px 1px 0.003em rgba(0, 0, 0, .16);
  }

</style>
