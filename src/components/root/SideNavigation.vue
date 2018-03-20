<template>
    <div v-if="navClosed" 
         class="column is-one-fifth side-navigation">
        
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'SideNavigation',
    computed: {
      navClosed(): boolean {
        return this.$store.state.navToggled;
      }
    }
  });
</script>

<style lang="scss" scoped>
  @import '../../styles/variables';

  .side-navigation {
      width: 230px;
      transition: all .3s;
  }

</style>