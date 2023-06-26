<template>
<header>
    <div class="container header2">
        <img src="/images/logo.png"/>
    
        <div class="burger-menu" :class="{'opened': menuIsShow}" @click="toggleMenu">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </div>

        <nav :class="{'active': menuIsShow}">
            <template v-for="(item, index) in links">
                <template v-if="!item.routerLol">
                 <a :href="item.url"
                 :key="index"
                 @click.prevent.stop="goToSection(item.url)">{{ item.label }}</a>
                </template>
                
                <template v-else>
                    <router-link :to="item.linkRout"
                    :key="index">{{ item.label }}</router-link>
                </template>

            </template>
           
        </nav>
    </div>
    </header>
</template>

<script>
import {ScrolToElement} from '@/ForScroll/Scroll'

export default {
    name: 'HeaderBlock',
    data: () => {
        return {
            links: [
                {
                    label: 'About',
                    url: '#about',
                    
                },
                
                {
                    label: 'Skills',
                    url: '#skills',
                    
                },
                {
                    label: 'Social',
                    url: '#social',
                    
                },
                {
                    label: 'Coutacts Us',
                    url: '#contact',
                    
                },
                {
                    label: 'Blog',
                    url: 'blog',
                    linkRout: '/blog',
                    routerLol: true
                }
            ],
            menuIsShow: false,
        }
    },
    methods: {
        goToSection(url) {
            this.menuIsShow = false;

            ScrolToElement(url)
        },
        toggleMenu() {
            this.menuIsShow = !this.menuIsShow
        }
    }
}
</script>

<style scoped>
header {
       
        position: sticky;
        top: 0px;
        z-index: 1;
        background-color: #ffffff;
    }

    .header2 {
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .burger-menu {
        display: none;
    }
    a:last-child {
        margin-right: 0;
    }
    
@media screen and (max-width: 980px) {

.burger-menu {
    display: block;
    height: 12px;
    width: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.burger-menu .line {
    width: 100%;
    height: 2px;
    border-radius: 1px;
    background: #5C33B9;
}
.burger-menu .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
}

.burger-menu .line2 {
    transition: transform 0.2s ease-in-out;
}

.burger-menu .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
}
.burger-menu.opened .line1 {
    transform: rotate(45deg);
}
.burger-menu.opened .line2 {
    transform: scaleY(0);
}
.burger-menu.opened .line3 {
    transform: rotate(-45deg);
}

header {
    background: #ffffff;
}
nav {
    display: none;
}
nav.active {
    display: flex;
    flex-direction: column;
    position: fixed;
    background: #ffffff;
    top: 76px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    padding: 15px;
    align-items: center;
}
a {
    margin-bottom: 20px;
}
}
</style>