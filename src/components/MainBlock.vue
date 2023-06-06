<template>
    <section>
        <div  class="container">
           
            <div class="main-block__name hero">{{promoList.title}}</div>
            <p class="main-block__text neutral-4-color">{{promoList.description}}</p>
            <a href="#skills" @click.prevent.stop="scrollToMore">Scroll to More</a>
        </div>

        <img class="main-image" src="/images/me.png"/>
        
    </section>
</template>

<script>
import {ScrolToElement} from '@/ForScroll/Scroll'
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'MainBlock',
    computed: {
        ...mapGetters('main', ['promoList'])
    },
    methods: {
        scrollToMore() {
            ScrolToElement('#skills')
        },

        ...mapActions('main', ['getPromo']),
    },
    mounted() {
        this.getPromo();
    },
//     props: {
//         promo: {
//       type: Object,
//       default: () => {
//       },
//     }
// }
}
</script>

<style scoped>
section {
        padding: 215px 0 80px;
        position: relative;
    }

    .main-image {
        position: absolute;
        top: 0;
        right: 0;
        width: 550px;
        height: 100%;
        object-fit: cover;
    }

    .main-block__name {
        margin-bottom: 106px;
    }
    .main-block__text {
        margin-bottom: 213px;
    }

    @media screen and (max-width: 980px) {
        section {
            padding: 54px 0 0;
        }
        .main-image {
            position: relative;
            width: calc(100% - 32px);
            height: 413px;
            margin: 26px 16px 0;
        }
        .main-block__name {
            margin-bottom: 15px;
        }
        .main-block__text {
            margin-bottom: 30px;
        }
    }
</style>
