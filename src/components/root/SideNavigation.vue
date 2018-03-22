<template>
  <transition
    name="slide"
    appear>
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
          class="side-navigation-link"
          active-class="is-active">
          <img src="./assets/cloud.svg">
          <span class="title is-5 is-size-14">Welcome</span>
        </router-link>
        <router-link
          to="/home"
          class="side-navigation-link"
          active-class="is-active">
          <img src="./assets/home.svg">
          <span class="title is-5 is-size-14">Home</span>
        </router-link>
        <router-link
          to="/groups"
          class="side-navigation-link"
          active-class="is-active">
          <img
            class="is-small"
            src="./assets/caret-right.svg">
          <span class="title is-5 is-size-14 is-uppercase">Groups</span>
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
  $link-height: 38px;
  $image-size: 16px;

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
      height: $link-height;
      padding: 9px 15px;
      border-bottom: 1px solid #CECECE;
      position: relative;
      transition: all .3s;

      img {
        width: $image-size;
        height: $image-size;
        margin-right: 5px;

        &.is-small {
          width: 10px;
          height: 7px;
          margin-right: 11px;
        }
      }

      span {
        line-height: 16px;
      }

      &:before {
        content: '';
        width: 0;
        height: 0;
        border-top: $link-height/2 solid transparent;
        border-bottom: $link-height/2 solid transparent;
        position: absolute;
        left: 0;
        border-left: 0 solid $magenta;
        transition: all .3s;
      }

      &:hover:before {
        border-left: 10px solid $magenta;
      }

      &.is-active {
        background-color: $magenta;
        width: calc(100% - 10px);
        span {
          color: $white;
        }

        &:after {
          content: '';
          width: 0;
          height: 0;
          border-top: $link-height/2 solid transparent;
          border-bottom: $link-height/2 solid transparent;
          position: absolute;
          left: 100%;
          border-left: 10px solid $magenta;
        }
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
