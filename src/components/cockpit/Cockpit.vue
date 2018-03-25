<template>
  <div class="links">
    <div class="links-title">
      <h5 class="title is-uppercase is-size-16">Schnell links</h5>
    </div>
    <div class="columns is-gapless no-margin">
      <router-link
        to="/"
        class="column is-one-quarter links-item is-yellow">
        <img src="../assets/addPhone.svg">
        <span class="title is-uppercase is-5 is-size-16">Handy hinzufuegen</span>
      </router-link>
      <router-link
        to="/"
        class="column is-one-quarter links-item is-purple">
        <img src="../assets/user-plus.svg">
        <span class="title is-uppercase is-5 is-size-16">Benutzer hinzufuegen</span>
      </router-link>
      <router-link
        to="/"
        class="column is-one-quarter links-item is-green">
        <img src="../assets/plug.svg">
        <span class="title is-uppercase is-5 is-size-16">device hinzufuegen</span>
      </router-link>
      <router-link
        to="/"
        class="column is-one-quarter links-item is-orange">
        <img src="../assets/device-management.svg">
        <span class="title is-uppercase is-5 is-size-16">device management</span>
      </router-link>
    </div>
    <div class="columns is-gapless no-margin">
      <router-link
        to="/"
        class="column links-item is-magenta is-full-width">
        <img src="../assets/comments.svg">
        <span class="title is-uppercase is-5 is-size-16">Hilfe und Service</span>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Cockpit'
  });
</script>

<style lang="scss" scoped>
  @import '../../styles/variables';

  .links{
    margin: 44px 20px 20px 20px;
    &-title{
      background-color:  $white;
      padding: 10px;
    }

    &-item{
      height: 230px;
      position: relative;
      text-align: center;
      transition: all .3s;

      &:hover {
        box-shadow: 0 3px 1px 1px rgba(0,0,0,.4);
        z-index: 2;
      }

      span {
        display: block;
        color: $white;
      }

      img{
        margin-top: 40px;
        width: 102px;
        height: 102px;
      }

      &.is-yellow{
        background-color: #949B42;
      }
      &.is-purple{
        background-color: #8D318E;
      }
      &.is-orange {
        background-color: #D29D5F;
      }
      &.is-green {
        background-color: #1D7B74;
      }
      &.is-magenta {
        background-color: $magenta;
      }
      &.is-full-width {
        width: 100%;
      }
    }

    .no-margin {
      margin: 0;
    }
  }

</style>
