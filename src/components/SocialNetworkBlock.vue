<template>
<div class="slide-container container ">
                <div class="slider-txt">
                    <h1>My social networks</h1>
                    <p1>There are many reasons to get down and start to get depressed about your situation.</p1>
                </div>
                
                <div class="slide-content  swiper">
                    <div class="card-wrapper  swiper-wrapper">
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="ovelay"></span>
                                <div class="card-image">
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
            </div>
</template>

<script>
export default {
    name: 'SocialNetworkBlock',
    methods: {
        
        }
    }

</script>

<style>
.slider-txt {
    text-align: center;
    padding-top: 100px;
    padding-bottom: 40px;
}

.card-image {
    height: 80px;
    width: 140px;
    position: static;
    margin-top: 40px;
    padding-bottom: 120px;
    border-radius: 4px;
    display: flex;
    align-items: center;
}

.card-image .card-img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 4px;
    margin: 20px;
    padding-bottom: 120px;
   
}
</style>