<template>
  <div class="columns board">
    <Sortable
      class="column"
      :items="lists">

      <div
        class="list"
        slot="item"
        slot-scope="slot">
        <h4 class="header title is-4">{{ slot.item.name }}</h4>
        <div class="body">
          <!--<div-->
          <!--class="item"-->
          <!--v-for="(item, index) in items"-->
          <!--:key="index">-->

          <!--{{ item.name }}-->
          <!--</div>-->
          <div class="item">ITEM</div>
        </div>
      </div>
    </Sortable>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Sortable from './common/sortable/Sortable';

  export default Vue.extend({
    name: 'Board',
    components: {
      Sortable
    },
    data() {
      return {
        lists: [
          {name: 'TODO', dropzone: false},
          {name: 'Groceries', dropzone: false},
          {name: 'Tasks', dropzone: false}
        ],
        items: [
          {name: 'Ford', model: 'Focus'},
          {name: 'BMW', model: 'X5'},
          {name: 'Fiat', model: '500'}
        ]
      };
    },
    methods: {}
  });
</script>

<style lang="scss" scoped>
  .board {
    height: 100%;
    padding: 20px;

    .column {
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
  }

</style>

