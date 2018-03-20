<template>
  <div class="links">
    <div class="links-title">
      <h5 class="title is-uppercase is-size-16">Schnell links</h5>
    </div>
    <div class="columns is-gapless">
      <a class="links-item is-yellow" href="#">
        <img src="../assets/addPhone.svg">
        <span class="title is-uppercase is-5 is-size-16">Handy hinzufuegen</span>
      </a> 
       <a class="links-item is-purple" href="#">
        <img src="../assets/addPhone.svg">
        <span class="title is-uppercase is-5 is-size-16">Geraet hinzufuegen</span>
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

    &-item{
      width:238px;
      height: 230px;
      text-align: center;
      transition: all .3s;

      &:hover {
        box-shadow: 0 3px 1px 1px rgba(0,0,0,.4);
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
    }
  }

</style>
