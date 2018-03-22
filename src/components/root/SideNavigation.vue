<template>
  <transition name="slide">
    <div
      v-if="navClosed"
      class="column is-one-fifth side-navigation">
      <div class="logo">
        <img
          class="logo-image"
          src="./assets/cockpit.svg">
        <span class="logo-text is-uppercase title is-5 is-size-16">Cockpit</span>
      </div>
      <div class="side-navigation-links">
        <router-link
          to="/"
          class="side-navigation-link">
          <img src="./assets/cloud.svg">
          <span>Welcome</span>
        </router-link>
        <router-link
          to="/"
          class="side-navigation-link">
          <img src="">
          <span>Home</span>
        </router-link>
      </div>
    </div>
  </transition>
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

  $logo-image-size: 45px;

  .side-navigation {
      background-color: $nav-color;
      box-shadow: 0 0 5px rgba(0,0,0,.3);
      height: 100%;
      width: 230px;
      color: $text-color;

    &-links {

    }

    &-link {
      align-items: center;
      display: flex;
      width: 100%;
      height: 38px;
      padding: 9px 15px;
      border-bottom: 1px solid #CECECE;


      img {
        width: 16px;
        height: 16px;
      }
    }
  }

  .logo {
    display: block;
    height: 100px;
    text-align: center;
    padding: 8px 0;

    &-image, &-text {
      display: block;
    }

    &-image {
      height: $logo-image-size;
      width: $logo-image-size;
      margin: 0 auto;
    }
    &-text {
      color: $magenta;
      margin-top: 7px;
    }
  }

  // animation for side nav
  .slide {
    &-enter-active, &-leave-active{
      transition:  margin-left .5s;
    }

    &-enter, &-leave-to{
      margin-left: -230px !important;
    }
  }

</style>
