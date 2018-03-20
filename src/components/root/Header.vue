<template>
  <div class="header">
    <button class="header-button"
            @click="isClosed = !isClosed"
            v-bind:class="{ 'is-closed': isClosed }">
      <img src="./assets/caret-square-left.svg">
    </button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Header',
    data: function() {
      return {
        isClosed: false
      }
    },
  });
</script>

<style lang="scss" scoped>
  @import '../../styles/variables';

  $header-height: 60px;
  $hover-color: rgba(73, 89, 91, 0.01);

  .header {
    background-color: $white;
    height: $header-height;

    &-button {
      cursor: pointer;
      height: inherit;
      border: none;
      border-right: 1px solid $body-color;
      background-color: $white;
      outline: none;
      transition: all .3s;

       img {
         height: 14px;
         width: 17px;
       }

       &:hover{
         background-color: $hover-color;
       }

       &.is-closed {
         img {
           // transition: all .1s;
           transform: rotate(180deg);
         }
       }
    }
  }


</style>