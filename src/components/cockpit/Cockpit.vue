<template>
  <div class="links">
    <div class="links-title">
      <h5 class="title is-uppercase is-size-16">Schnell links</h5>
    </div>
    <div class="links-wrapper">
      <a class="links-item is-yellow" href="#">
        <img src="../assets/addPhone.svg">
        <span class="title is-uppercase is-5 is-size-16">Handy hinzufuegen</span>
      </a> 
      <a class="links-item is-purple" href="#">
        <img src="../assets/user-plus.svg">
        <span class="title is-uppercase is-5 is-size-16">Benutzer hinzufuegen</span>
      </a>  
      <a class="links-item is-green" href="#">
        <img src="../assets/plug.svg">
        <span class="title is-uppercase is-5 is-size-16">device hinzufuegen</span>
      </a>  
      <a class="links-item is-orange" href="#">
        <img src="../assets/device-management.svg">
        <span class="title is-uppercase is-5 is-size-16">device management</span>
      </a>  
      <a class="links-item is-orange" href="#">
        <img src="../assets/device-management.svg">
        <span class="title is-uppercase is-5 is-size-16">device management</span>
      </a> 
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Cockpit',
    
  });
</script>

<style lang="scss" scoped>
  @import '../../styles/variables';

  .links{

    margin: 20px;
    &-title{
      background-color:  $white;
      padding: 10px;
    }

    &-wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    &-item{
      width:238px;
      height: 230px;
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
    }
  }

</style>
