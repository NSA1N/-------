<template>
    <div class="slider-wrapper">
        <div class="arrow_left"><img src="/images/slider/arrow.png"/></div>

        <swiper class="swiper container" :options="swiperOption">
            
            <swiper-slide
                v-for="(slide, index) in sliderList.content"
                :key="index" 
                >
            
            <a target="_blank" :href="slide.link">
                <img :src="slide.icon"/>
                
            </a>
            
            </swiper-slide>
        </swiper>
        
        <div class="arrow_right"><img src="/images/slider/arrow.png"/></div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'SliderWrapper',
        components: {
            Swiper,
            SwiperSlide
        },
        data: () => {
            return {
                
            }
        },

        mounted() {
        this.getSliderInformation();
    },

        computed: {
            swiperOption() {
                return {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: false,
                    navigation: {
                        nextEl: '.arrow_right',
                        prevEl: '.arrow_left'
                    },
                    breakpoints: {
                        600: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1115: {
                            slidesPerView: 6,
                            spaceBetween: 20
                        }
                    }
                }
            },
            ...mapGetters('slider', ['sliderList'])
        },
        methods: {
             ...mapActions('slider', ['getSliderInformation']),
    },
        props: {
            items: {
                type: Array,
                default: () => ([]),
            }
        },
    }
</script>

<style scoped>
    .slider-wrapper {
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }

    .swiper-button-prev {
        left: 20px
    }
    .swiper-button-next {
        right: 20px
    }
    .swiper-button-next  img {
        transform: rotate(180deg);
    }
    .swiper-button-prev, .swiper-button-next {
        width: 48px;
        height: 48px;
        background: transparent;
    }
    .swiper-button-prev:after, .swiper-button-next:after {
        content: none
    }

    .arrow_left, .arrow_right {
        cursor: pointer;
        border: none;
        background: transparent;
        width: 48px;
        height: 48px;
    }
    .arrow_right img {
        transform: rotate(180deg);
    }
    .swiper-slide img {
        width: 100%;
        margin-top: 40px;
        margin-bottom: 100px;
        width: 100px;
        height: 80px;
    }

    a:hover img {   
  transform: scale(1.2); 
  transition: 3s;
}
</style>