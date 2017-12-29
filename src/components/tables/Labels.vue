<template>
  <el-table v-loading="loading" :data="labels" stripe>
    <el-table-column type="expand">
      <template slot-scope="props">
        <p>Name: {{ props.row.labelDefinitionName }}</p>
        <p>Start: {{ props.row.labelStartTimestamp }}</p>
        <p>End: {{ props.row.labelEndTimestamp }}</p>
      </template>
    </el-table-column>
    <el-table-column prop="labelDefinitionName" label="Name" sortable>
      <template slot-scope="scope">
        <div v-if="!scope.row.editMode">{{ scope.row.labelDefinitionName}}</div>
        <div v-if="scope.row.editMode">
          <input v-model="scope.row.labelDefinitionName">
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="labelStartTimestamp" label="Start" sortable>
      <template slot-scope="scope">
        {{ scope.row.labelStartTimestamp | date}}
      </template>
    </el-table-column>
    <el-table-column prop="labelEndTimestamp" label="End" sortable :formatter="dateFormatter"></el-table-column>
    <el-table-column prop="labelId" label="Label id" sortable></el-table-column>
    <el-table-column prop="sasswVersion" label="Sassw Version" sortable></el-table-column>
    <el-table-column prop="traceDuration" label="traceDuration" sortable></el-table-column>
    <el-table-column prop="traceId" label="trace Id"></el-table-column>
    <el-table-column prop="usecase" label="usecase"></el-table-column>
    <el-table-column prop="version" label="version" sortable></el-table-column>
    <el-table-column prop="vnumber" label="vnumber" sortable></el-table-column>
    <el-table-column
      label="Actions">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
  /* eslint-disable */
  import Vue from 'vue';
  import axios from 'axios';
  import LabelService from "./LabelService";

  export default Vue.extend({
    data() {
      return {
        labels: [],
        loading: true
      }
    },
    created() {
      LabelService.getLabels().then(response => {
        this.labels = response.data.labelExtendedDTOList
        this.loading = false;
      })
    },
    methods: {
      handleEdit(index: number, row: {editMode: boolean}) {
        row.editMode = !row.editMode;
        Vue.set(this.labels, index, row)
      },
      handleDelete(index: number, row: {}) {
        this.labels.splice(index, 1)
      },
      dateFormatter(row: { labelEndTimestamp: number }, column: string) {
        return Vue.filter('date')(row.labelEndTimestamp)
      }
    }
  });
</script>

<style scoped>
</style>
