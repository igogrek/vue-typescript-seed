<template>
  <el-table :data="tableData">
    <el-table-column prop="date" label="Date" width="140">
    </el-table-column>
    <el-table-column prop="name" label="Name" width="120">
    </el-table-column>
    <el-table-column prop="address" label="Address">
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
  /* eslint-disable */
  import Vue from 'vue';

  export default Vue.extend({
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Drive',
        address: 'AAAAAAAAAAAAAAAA'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  });
</script>

<style scoped>
</style>
