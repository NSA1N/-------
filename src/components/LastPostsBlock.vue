<template>
    <section class="container">
        <h1>{{title}}</h1>
        <div class="link-wrapper">
            <a class="disabled" href="#">All Posts</a>
        </div>
        <div class="posts-wrapper">
            <PostItem v-for="(item, index) in posts.content" :key="index" :item="item"/>
        </div>
    </section>
</template>

<script>
    import PostItem from '@/components/PostItem.vue';


    export default {
        name: 'LastPostsBlock',
        components: {
            PostItem,
        },
        data: () => {
            return {
            }
        },
        props: {
            posts: {
            type: Object,
            default: () => {
            },
            }
        },
    //     mounted () {
    //             axios
    //             .get('/API/data.json')
    //   .then(response => {
    //     this.info = response.data.posts.content
    //     this.title = response.data.posts.title
    //     console.log(this.info)
    // });
        
            
    //   // eslint-disable-next-line no-undef
      
    //     }
    }
</script>

<style scoped>
    h1 {
        margin-bottom: 52px;
    }
    .link-wrapper {
        display: flex;
        justify-content: end;
        margin-bottom: 48px;
    }

    .posts-wrapper .post-item{
       margin-bottom: 50px; 
    }

    .posts-wrapper .post-item:last-child {
        margin-bottom: 0;
    }

    @media screen and (max-width: 980px) {
        .container {
            display: flex;
            flex-direction: column;
        }
        h1 {
            margin-bottom: 40px;
        }
        .link-wrapper {
            order: 3;
        }
        .posts-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .posts-wrapper .post-item, .posts-wrapper .post-item:last-child {
            margin-bottom: 40px;
        }
        .link-wrapper {
            justify-content: center;
        }
    }
</style>