<template>
  <div id="app">
    <div class="columns is-gapless is-full-height">
      <side-navigation></side-navigation>
      <div class="column">
        <Header/>
        <div class="view">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Header from './components/root/Header.vue';
  import SideNavigation from './components/root/SideNavigation.vue';

  export default Vue.extend({
    name: 'App',
    components: {
      Header,
      SideNavigation
    }
  });
</script>

<style lang="scss" scoped>
  @import './styles/variables';

  #app{
    height: 100%;
  }

  .view {
    overflow-y: auto;
    height: 100%;
    padding-bottom: 80px;
  }
</style>
