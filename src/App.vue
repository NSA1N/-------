<template>
  <div id="app">
    <HeaderBlock/>
    <MainBlock class="main-block" id="about"/>
    <SkillsBlock class="skills-block" id="skills"/>
    <SocialNetworkBlock class="social-block" id="social"/>
    <LastPostsBlock class="last-posts-block"/>
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
  }
}
</script>

<style>
@import "@/css/global.css";

</style>
