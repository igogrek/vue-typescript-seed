<template>
  <section class="device-panel">
    <box-component class="alarm-box" title="ACTIVE, CRITICAL ALARMS">
      <div class="box-row">
        <img class="icon" src="../assets/alert-idle.svg"/>
        <span>No alarms to display</span>
      </div>

    </box-component>
    <box-component class="map-box" title="MAP" v-bind:fillIn="true">
      <div id="app" style="height: 100%">
        <v-map :zoom=13 :center="[47.413220, -1.219482]">
          <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
          <v-marker :lat-lng="[47.413220, -1.219482]"></v-marker>
        </v-map>
      </div>
    </box-component>
  </section>

</template>


<script lang="ts">

  import Vue from 'vue'
  import BoxComponent from '../common/box/box-component.vue'

  declare const require: (moduleId: string) => any;
  const Vue2Leaflet = require("vue2-leaflet");

  export default Vue.extend({
    name: 'device-panel',
    components: {
      'box-component': BoxComponent,
      'v-map': Vue2Leaflet.Map,
      'v-tilelayer': Vue2Leaflet.TileLayer,
      'v-marker': Vue2Leaflet.Marker
    },
  })
</script>

<style lang="scss" scoped>
  .device-panel {
    display: flex;
    flex-direction: row;
    flex: 1 1 100%;
    color: black;
  }

  .map-box {
    height: 500px;
  }

  .box-row {
    display: flex;
    flex-direction: row;
    min-height: 80px;
    max-height: 80px;
    align-content: center;
    align-items: center;
  }


  .row-span {
    display: flex;
    flex: 0 0 45px;
  }

  .alarm-box {
    height: 300px;
  }

  .icon {
    display: flex;
    opacity: .5;
    width: 35px;
    height: 45px;
    margin-right: 0.5em;
  }


</style>
