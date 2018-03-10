<template>
  <div :class="{'dragged': dragged}">
    <div
      draggable="true"
      :class="[{'is-dropzone': item.dropzone}, itemClass]"
      v-for="(item, index) in sortableItems"
      :index="index"
      @dragstart="dragStart"
      @dragenter="dragOver"
      @dragend="dragEnd">
      <slot
        name="item"
        :item="item">
        {{ item.name }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  interface ISortableItem {
    dropzone: boolean;
  }

  export default Vue.extend({
    name: 'Sortable',
    props: {
      itemClass: String,
      items: []
    },
    data() {
      return {
        sortableItems: this.items as ISortableItem[],
        dragIndex: 0,
        dropIndex: 0,
        dragged: false
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
        this.sortableItems.forEach((list, index) => list.dropzone = index === this.dropIndex);
      },
      dragEnd(event: DragEvent) {
        this.arraymove(this.sortableItems, this.dragIndex, this.dropIndex)
        this.dragged = false;
        this.sortableItems.forEach((list, index) => list.dropzone = false);
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
  .dragged {
    .list {
      pointer-events: none;
    }
  }

  .is-dropzone {
    background-color: red;
  }

</style>
