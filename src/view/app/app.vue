<template>
  <div >
    <app-header class="header" span="12">
      header...
    </app-header>
    <app-section>
      <app-menu></app-menu>
      <app-section>
         <router-view></router-view>
      </app-section>
    </app-section>
   
  </div>
</template>
<script>
  import {AppHeader,AppSider,AppSection,AppMenu} from '../../componets/index.js';
  export default{
    created(){
      
    },
    components:{
      AppHeader,AppSider,AppSection,AppMenu
    }
  }
</script>
<style>
</style>
