<template>
    <div class="container">
        <div class="postInfo">
            <div class="postInfoLeftSide">
                <h1>My post</h1>
                <p class="small-paragraph description ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>
            <template class="postInfoRightSide">
                <img class='mainImg' src="/images/me.png" alt="">
            </template>
        </div>


        <div class="form">
            <h2>Title text block</h2>
            <p class="small-paragraph">text block text block text block text block text block</p>
            <p class="small-paragraph">text block text block text block text block text block</p>
            <button><router-link to="/" v-scroll-to="'#contact'">CONTACT US</router-link></button>
        </div>
        <div class="bottomBar">
            <div class="firstBar">
                <img class="imgBottomBar" src="../assets/Star.png" alt="">
                <h6>The first</h6>
                <p class="small-paragraph">Learn To Love Growth And Change And You Will Be A Success</p>
            </div>
            <div class="secondBar">
                <img class="imgBottomBar" src="../assets/Mask.png" alt="">
                <h6>Second</h6>
                <p class="small-paragraph">An Ugly Myspace Profile Will Sure Ruin Your Reputation</p>
            </div>
            <div class="thirdBar">
                <img class="imgBottomBar" src="../assets/Shape.png" alt="">
                <h6>Third</h6>
                <p class="small-paragraph">The Small Change That Creates Massive Results In Your Life</p>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
a{
    color: white;
}
    .form{
        display: flex;
        flex-direction: column;
        width: 940px;
        height: 280px;
        border: 1px solid #E1E5EE;
        align-items: center;
        margin-top: 100px;
    }
    button{
    display: flex;
    width: 160px;
    height: 46px;
    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    background-color: #6E38F7;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 12px;
    margin-top: 40px;
    border-radius: 4px;
    }
    button:hover{
        cursor: pointer;
    }
    h2{
        margin-top: 46px;
        margin-bottom: 20px;
    }
    .bottomBar{
        display: flex;
        flex-direction: row;
        height: 482px;
        margin-top: 100px;
        justify-content: center;
        align-items: center;
    }
    .firstBar, .secondBar, .thirdBar {
        display: flex;
        flex-direction: column;
        width: auto;
        padding-right: 10px;
    }
    h6{
        margin-top: 40px;
        margin-bottom: 20px;
    }
    h1 {
        margin-top: 215px;
        margin-bottom: 100px;
        text-align: start;
    }
    .postInfo {
        display: flex;
        height: 800px;
    }
    .postInfoLeftSid {
        display: flex;
        flex-direction: column;
    }
    .small-paragraph{
        text-align: start;
        margin-top: 0;
        margin-bottom: 0;
    }
    .imgBottomBar{
        width: 40px ;
        height: 38px ;
    }
    .description{
        max-width: 380px;
    }
    .mainImg{
        width: 550px;
        height: 800px;
        position: absolute;
        right: 0;
    }
</style>