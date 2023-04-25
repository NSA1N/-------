<template>
<footer>
            <p class="foot-info">Copyright © {{ localeDate }}. All rights reserved.</p>
        </footer>
</template>

<script>
 export default {
        name: 'FooterBlock',
        data: () => ({
        // Дата хранится в виде числа
        date: 1580558031264,
    }),
    
    computed: {
        localeDate() {
            return (new Date(this.date)).getFullYear() 
        },
        
    },
    
    //Таймер для изменения даты в реальном времени
    created() {
        this.intervalId = setInterval(() => this.date = Date.now(), 1000); // Обновление значения раз в секунду
    },

    //Соответсвенно для отключения
    beforeDestroy() {
        if (this.intervalId) clearInterval(this.intervalId)
    },
       
    }
    
</script>

<style>
footer {
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #95A1BB;
    margin-top: 121px;
}
</style>