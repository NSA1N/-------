<template>
    <section  class="container">
        <h1>{{ skillsList.title }}</h1>
        <div class="skills-wrapper">
            <div 
                :class="['skills-item', {'skills-item_active': index === activeIndex}]"
                v-for="(item, index) in skillsList.content"
                :key="index"
            >
                <div class="skills-item__header">
                    <h6> {{ item.key }}</h6>

                    <button @click="toggleAccordion(index)"><img :src="`/images/${index === activeIndex ? 'minus' : 'plus'}.png`"/></button>
                </div>
                <p v-show="index === activeIndex" class="skills-item__text">{{ item.value }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'SkillsBlock',
        data: () => {
            return {          
                activeIndex: null,
            }
        },
        mounted() {
        this.getSkillsInformation();
    },
    computed: {
        ...mapGetters('skills', ['skillsList'])
    }, 
        methods: {
            toggleAccordion(index) {
                if ( this.activeIndex === index) {
                    this.activeIndex = null
                } else {
                    this.activeIndex = index
                }
            },
            ...mapActions('skills', ['getSkillsInformation']),
        },

        // props: {
        //     skills: {
        //     type: Object,
        //     default: () => {
        //     },
        //     }
        // },

      
            }
            
        
        
            
    
</script>

<style scoped>
    h1 {
        margin-bottom: 40px;
    }

    .skills-item {
        padding: 18px 19px;
        border: 1px solid #E1E5EE;
        border-radius: 4px;
        margin-bottom: 20px;
    }
    .skills-item:last-child {
        margin-bottom: 0;
    }
    .skills-item_active {
        border-color: #6E38F7;
    }

    .skills-item__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button {
        border: none;
        background: transparent;
        cursor: pointer;
    }

    .skills-item__text {
        margin-top: 20px;
    }
</style>