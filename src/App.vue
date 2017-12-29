<template>
  <root></root>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Root from './components/Root';

  export default Vue.extend({
    name: 'app',
    components: {
      root: Root,
    },
  });
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
    text-align: center;
  }
</style>
