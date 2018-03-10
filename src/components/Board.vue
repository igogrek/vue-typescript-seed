<template>
  <div class="columns board" :class="{'dragged': dragged}">
    <div
        class="column"
         draggable="true"
         v-for="(list, index) in lists"
         :key="index"

        :class="{'is-dropzone': list.dropzone}"
        :index="index"
        @dragstart="dragStart"
        @dragenter="dragOver"
        @dragend="dragEnd">

      <div class="list">
        <h4 class="header title is-4">{{ list.name }}</h4>
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
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Board',
    data() {
      return {
        dragIndex: 0,
        dropIndex: 0,
        dragged: false,
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
    methods: {
      dragStart(event: DragEvent) {
        const element = event.target as HTMLElement;
        this.dragIndex = Number(element.getAttribute('index'));
        this.dragged = true;
      },
      dragOver(event: DragEvent) {
        const element = event.target as HTMLElement;
        this.dropIndex = Number(element.getAttribute('index'));
        this.lists.forEach((list, index) => list.dropzone = index === this.dropIndex);
      },
      dragEnd(event: DragEvent) {
        this.arraymove(this.lists, this.dragIndex, this.dropIndex)
        this.dragged = false;
        this.lists.forEach((list, index) => list.dropzone = false);
      },
      arraymove(arr: {}[], fromIndex: number, toIndex: number) {
        const element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);
      }
    }
  });
</script>

<style lang="scss" scoped>
  .board {
    height: 100%;
    padding: 20px;

    &.dragged {
      .list {
        pointer-events: none;
      }
    }

    .column {

      &.is-dropzone {
        background-color: red;
      }

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

