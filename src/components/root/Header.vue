<template>
  <div class="level header">
    <div class="level-left header-content">
      <button
        class="header-button level-item"
        @click="toggleNav"
        :class="{ 'is-closed': !isOpened }">
        <img
          class="header-button-image is-small"
          src="./assets/caret-square-left.svg">
      </button>
      <div class="level-item">
        <h2 class="title is-size-26">Welcome</h2>
      </div>
    </div>
    <div class="level-right header-content">
      <button class="header-button is-square">
        <img class="header-button-image"
             src="./assets/search.svg">
      </button>
      <button class="header-button is-square">
        <img
          class="header-button-image"
          src="./assets/plus-circle.svg">
      </button>
      <button
        :class="{'is-active': menuToggled}"
        @click="toggleMenu"
        class="header-button is-square">
        <img
          class="header-button-image"
          src="./assets/th.svg">
        <div
          v-if="menuToggled"
          class="menu">
          <router-link
            to="/administration"
            class="menu-link"
            active-class="is-active">
            <img
              src="./assets/administration.svg"
              alt="admin">
            <span class="title is-size-12">Administration</span>
          </router-link>
          <router-link
            to="/"
            class="menu-link"
            active-class="is-active">
            <img
              src="./assets/cockpit.svg"
              alt="admin">
            <span class="title is-size-12">Cockpit</span>
          </router-link>
          <router-link
            to="/devices"
            class="menu-link"
            active-class="is-active">
            <img
              src="./assets/device-management-magenta.svg"
              alt="admin">
            <span class="title is-size-12">Device management</span>
          </router-link>
        </div>
      </button>
      <button class="header-button">
        <span class="title is-5 is-size-14">A.Fedorov</span>
        <img
          class="header-button-image"
          src="./assets/user-circle.svg">
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {NAV_TOGGLED} from '../../store/mutation-types';

  export default Vue.extend({
    name: 'Header',
    data() {
      return {
        isOpened: true,
        menuToggled: false
      };
    },
    methods: {
      toggleNav() {
        this.isOpened = !this.isOpened;
        this.$store.commit(NAV_TOGGLED, this.isOpened);
      },
      toggleMenu() {
        this.menuToggled = !this.menuToggled;
      }
    }
  });
</script>

<style lang="scss" scoped>
  @import '../../styles/variables';

  $header-height: 60px;
  $box-shadow: -3px 8px 16px rgba(0,0,0,.175);
  $hover-color: rgba(73, 89, 91, 0.01);

  .header {
    background-color: $white;
    height: $header-height;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);

    &-content{
      height: 100%;
    }

    &-button {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      height: inherit;
      border: none;
      border-right: 1px solid $body-color;
      border-left: 1px solid $body-color;
      background-color: $white;
      height: 100%;
      outline: none;
      transition: all .3s;

      span{
        margin: 0 5px 0 0;
      }

       &-image {
         width: 35px;
         height: 28px;

          &.is-small {
            height: 14px;
            width: 17px;
          }
       }

       &:hover{
         background-color: $hover-color;
       }

       &.is-active {
         box-shadow: 0px -4px 16px rgba(0,0,0,.175);
       }

       &.is-square {
         width: 65px;
       }

       &.is-closed {
         img {
           transform: rotate(180deg);
         }
       }
    }

    .menu {
      display: flex;
      background-color: $white;
      position: absolute;
      top: 62px;
      right: 30px;
      padding: 10px;
      box-shadow: $box-shadow;
      z-index: 10;

      &-link {
        padding: 5px;
        width: 33%;
        text-align: center;
        min-width: 90px;

        &.is-active {
          border: 1px solid $magenta;
        }

        img {

          height: 36px;
          width: 36px;
        }

        span {
          display: block;
          margin: 5px 0 0 0;
        }
      }
    }
  }


</style>
