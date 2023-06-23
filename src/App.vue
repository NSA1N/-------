<template>
  <div id="app">
    <HeaderBlock/>
    <router-view></router-view>
    <FooterBlock class="footer-block" id="footer"/>
  </div>
</template>

<script>

import HeaderBlock from '@/components/HeaderBlock.vue';

import FooterBlock from '@/components/FooterBlock.vue';



export default {
  name: 'App',
  components: {
    HeaderBlock,
   
    FooterBlock,
   
  
},
  data () {
    return {
    }},
  }
</script>

<style>
@import "@/css/global.css";

</style>
