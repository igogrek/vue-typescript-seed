<template>
  <div id="app">
    <div class="columns is-gapless is-full-height">
      <side-navigation/>
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
  import BoxComponent from './components/common/box/box-component.vue';
  import Header from './components/root/Header.vue';
  import SideNavigation from './components/root/SideNavigation.vue';

  declare const require: (moduleId: string) => any;
  const MaterialComponents = require('vue-material');

  Vue.use(MaterialComponents.default);

  export default Vue.extend({
    name: 'App',
    components: {
      Header,
      SideNavigation,
      'box-component': BoxComponent

    }

  });
</script>

<style lang="scss" scoped>
  @import './styles/variables';

  #app {
    height: 100%;
  }

  .view {
    overflow-y: auto;
    height: 100%;
    padding-bottom: 80px;
  }
</style>
