<template>
    <div class = "skill-container">
        <p><b>{{text}}</b></p>
        <div class="bar">
            <div class="level" ref="lev"></div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router';

    export default {
        props: ['text', 'value'],
        setup(props){
            
            const lev = ref(null);
            let filling;
            let width = 0;

            const fill = () => {
                if(width >= props.value) return clearInterval(filling);
                width++;
                lev.value.style.width = `${width}%`;
            }

            onMounted(() => filling = setInterval(() => fill(), 20));

            onBeforeRouteLeave(() => {
                if(filling) clearInterval(filling);
            })
            return { lev }
        }
    }
</script>

<style scoped>
    .skill-container{
        padding: 20px;
        padding-bottom: 30px;
    }

    .bar{
        margin: auto;
        width: 100%;
        height: 10px;
        background-color: rgba(169, 169, 169, 0.299);
    }

    .level{
        margin: 0px;
        width: 0%;
        height: 10px;
        background-color: yellowgreen;
    }
</style>