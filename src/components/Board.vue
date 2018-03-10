<template>
  <div class="columns board">
    <div class="column">

      <div class="list">
        <h4 class="header title is-4">Item</h4>
        <div class="body">
          <div
            class="item"
            v-for="(item, index) in items"
            :key="index">

            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="list">
        <div class="header title is-4">Item</div>
        <div class="body">
          <div class="item">ITEM</div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="list">
        <div class="header title is-4">Item</div>
        <div class="body">
          <div class="item">ITEM</div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="list">
        <div class="header title is-4">Item</div>
        <div class="body">
          <div class="item">ITEM</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Board',
    data() {
      return {
        items: [
          {name: 'Ford', model: 'Focus'},
          {name: 'BMW', model: 'X5'},
          {name: 'Fiat', model: '500'}
        ]
      };
    },
    methods: {
      test() {

      }
    }
  });
</script>

<style lang="scss" scoped>
  .board {
    height: 100%;
    padding: 20px;

    .list {
      height: 100%;
      background-color: #e2e4e6;

      .header {
        padding: 10px;
      }

      .item {
        padding: 10px;
        margin: 10px;
        background: white;
      }
    }
  }

</style>

