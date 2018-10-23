<template>
  <div class="app-header" :class="`flex-item-${span}`">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props:{
      span:{
        type:String,
        default:12
      }
    }
  }
</script>
<style>
.app-header{
  width:100%;
  height:80px;
  background-color:aqua
}
</style>
