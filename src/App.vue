<template>
  <div id="app">
    <HeaderBlock/>
    <MainBlock
     v-bind:promo="promo"
      class="main-block" id="about"/>
    <SkillsBlock v-bind:skills="skills" class="skills-block" id="skills"/>
    <SocialNetworkBlock class="social-block" id="social"/>
    <LastPostsBlock v-bind:posts="posts" class="last-posts-block"/>
    <ContactUsBlock class="contact-us-block" id="contact"/>
    <FooterBlock class="footer-block" id="footer"/>
  </div>
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue';
import MainBlock from './components/MainBlock.vue';
import SkillsBlock from '@/components/SkillsBlock.vue';
import SocialNetworkBlock from '@/components/SocialNetworkBlock.vue';
import LastPostsBlock from '@/components/LastPostsBlock.vue';
import ContactUsBlock from '@/components/ContactUsBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';
import axios from 'axios';


export default {
  name: 'App',
  components: {
    HeaderBlock,
    MainBlock,
    SkillsBlock,
    SocialNetworkBlock,
    ContactUsBlock,
    FooterBlock,
    LastPostsBlock,
  },
  data () {
    return {
      // promo: null,
      // skills: null,
      // social: null,
      // posts: null,
    }},
  created() {
    axios
        .get('/API/data.json')
        .then(response => {       
        // this.promo = response.data.promo
        // this.skills = response.data.skills
        // this.social = response.data.social
        // this.posts = response.data.posts
        console.log(response.data)
  })
  }}
</script>

<style>
@import "@/css/global.css";

</style>
