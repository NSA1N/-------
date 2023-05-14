<template>
<!-- <div class="slide-container container "> -->
                <div>
                    <h1>{{ title }}</h1>
                    <p class="neutral-4-color">{{ subtitle }}</p>
                    <SliderWrapper/>
                </div>
                
                <!-- <div class="slide-content  swiper">
                    <div class="card-wrapper  swiper-wrapper">
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="ovelay"></span>
                                <div class="card-image container">
                                         <img src="/images/slider/1.png" alt="" class="card-img">  
                                         <img src="/images/slider/2.png" alt="" class="card-img">
                                         <img src="/images/slider/3.png" alt="" class="card-img">
                                         <img src="/images/slider/4.png" alt="" class="card-img">
                                         <img src="/images/slider/5.png" alt="" class="card-img">
                                 </div>
                            </div>
                        </div>
                    </div>                                     
                </div>              
            </div> -->
</template>

<script>
import SliderWrapper from '@/components/Slider.vue';
import axios from 'axios';

export default {
    name: 'SocialNetworkBlock',
    components: {
            SliderWrapper
        }, 
        data: () => {
            return {
                info: [],
                title: [],
                subtitle: [],
            }
        },

        mounted () {
                axios
                .get('/API/data.json')
      .then(response => {
        this.info = response.data.social.info
        this.title = response.data.social.title
        this.subtitle = response.data.social.subtitle
        console.log(this.info)
    });
}
    }

</script>

<style>
 h1 {
        margin-top: 100px;
        margin-bottom: 20px;
    }
    p {
        margin-bottom: 40px;
        text-align: center;
    }
/* .slider-txt {
    text-align: center;
    padding-top: 100px;
    padding-bottom: 40px;
} */

/* .card-image {
    position: static;
    margin-top: 40px;
    padding-bottom: 120px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.card-image .card-img {
    height: 80px;
    width: 140px;
    object-fit: contain;
    border-radius: 4px;
    margin: 20px;
    padding-bottom: 120px;
   
} */
</style>