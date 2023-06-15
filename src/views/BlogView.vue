<template>
    <div>
        <h2 class="title">Blog</h2>
        <div class="blog container"
        >
        <PostItem
        v-for="(item, index) in postContent.content" 
        :key="index" 
        :item="item"
        />

        </div>
    </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    data () {
        return {
            
        }
    },
    computed:{
       ...mapGetters('post',['postContent'])
      }, 
    methods: {
      ...mapActions('post',['getData']),
    },
    mounted() {
      this.getData()
    },
    components: {
        PostItem
    }
}
</script>

<style>
.title{
    margin: 50px;
}

</style>