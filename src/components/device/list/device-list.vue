<template>
  <section class="list">
    <md-table v-model="users" md-sort="name" md-sort-order="asc">
      <md-table-row slot='md-table-row' slot-scope="{item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="NAME" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="MODEL" md-sort-by="model">{{ item.model }}</md-table-cell>
        <md-table-cell md-label="SERIAL NUMBER" md-sort-by="serialNumber">{{ item.serialNumber }}</md-table-cell>
        <md-table-cell md-label="GROUP" md-sort-by="group">{{ item.group }}</md-table-cell>
        <md-table-cell md-label="REGISTRATION DATE">{{ item.regDate }}</md-table-cell>
        <md-table-cell md-label="SYSTEM ID">{{ item.systemId }}</md-table-cell>
        <md-table-cell md-label="IMEI">{{ item.imei }}</md-table-cell>
      </md-table-row>
    </md-table>
  </section>

</template>

<script lang="ts">

  import Vue from "vue";
  import axios from 'axios'
  import {ConnectionStatus, DeviceListNode} from "../../dto/DeviceListNode";

  const API_PATH = 'https://evgeniiray.cumulocity.com/';

  export default Vue.extend({
    name: "device-list",
    components: {},

    created() {

    },


    methods: {
      getDeviceList: function () {
        axios.get(`${API_PATH}inventory/managedObjects`, {
          headers: {
            'Authorization': 'Basic ZXZnZW5paXJheS90aXRrb3YuZXZnZW5AZ21haWwuY29tOmRhcmtpODkyNzI3OA==',
          }
        })
          .then(response => {
            let managedObjects: Array<DeviceListNode> = response.data.managedObjects
              .filter(obj => obj.name !== undefined)
              .map(dev => {
                return {
                  id: dev.id,
                  name: dev.name,
                  connection: ConnectionStatus.DISCONNECTED,
                  model: dev.c8y_Hardware.model,
                  serialNumber: dev.c8y_Hardware.serialNumber,
                  regTime: dev.creationTime,
                  imei: dev.c8y_Mobile.imei
                };
              });

          })
      },

      transformData: function () {

      }
    },

    data: function data() {
      return {
        model: [] = []
      }
    }
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
