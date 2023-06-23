<template>
    <div id="app">
      
      <MainBlock class="main-block" id="about"/>
      <SkillsBlock class="skills-block" id="skills"/>
      <SocialNetworkBlock class="social-block" id="social"/>
      <LastPostsBlock  class="last-posts-block"/>
      <ContactUsBlock class="contact-us-block" id="contact"/>
      
    </div>
  </template>
  
  <script>

  import MainBlock from '@/components/MainBlock.vue';
  import SkillsBlock from '@/components/SkillsBlock.vue';
  import SocialNetworkBlock from '@/components/SocialNetworkBlock.vue';
  import LastPostsBlock from '@/components/LastPostsBlock.vue';
  import ContactUsBlock from '@/components/ContactUsBlock.vue';

  
  
  
  export default {
    name: 'App',
    components: {
     
      MainBlock,
      SkillsBlock,
      SocialNetworkBlock,
      ContactUsBlock,
      
      LastPostsBlock,
    },
    data () {
      return {
      }},
    }
  </script>
  
  <style>
  @import "@/css/global.css";
  
  </style>