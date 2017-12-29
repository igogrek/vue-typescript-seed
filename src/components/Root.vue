<template>
  <el-container>
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item index="1" @click="isCollapse = !isCollapse">
        <i class="el-icon-menu"></i>
        <span slot="title">Toggle Sidebar</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">Navigator One</span>
        </template>
        <el-menu-item-group>
          <span slot="title">Group One</span>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">item four</span>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">Navigator Three</span>
      </el-menu-item>
    </el-menu>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-menu class="el-menu-demo" mode="horizontal" :router="true" :default-active="$route.path.replace('/', '')">
          <el-menu-item index="labels">
            Labels
          </el-menu-item>
          <el-menu-item index="drives">
            Drives
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
  /* eslint-disable */
  import Vue from 'vue';

  export default Vue.extend({
    data() {
      return {
        isCollapse: true
      }
    },
  });
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
