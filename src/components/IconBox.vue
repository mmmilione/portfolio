<template>
    <div class="iconContainer">
        
        <p v-if="isOn==true && route.path != dest">
            <span class ="tooltip">{{text}}</span>
        </p>
        
        <router-link :to="{path: dest}">
            <div 
                class = "icon-circle"
                :class="route.path == dest ? 'selected-view' : null"
                @mouseenter="isOn=true"
                @mouseleave="isOn=false"
            >
                <h2 class ="center">
                    <i 
                        :class="icon" 
                    >
                    </i>
                </h2>
        </div>
        </router-link>
        
        
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router';

    export default {
        props: ['text', 'icon', 'dest'],
        setup(){
            const isOn = ref(false);
            const route = useRoute();
            return { isOn, route }
        }
    }
</script>

<style scoped>

    p{
        text-align: center;
        position: absolute; 
        top: -5px; 
        left: -40px;
    }

    .icon-circle{
        background-color: rgba(169, 169, 169, 0.299);
        border: 1px solid rgba(169, 169, 169, 0.299);
        width: 70px !important;
        height: 70px !important;
        border-radius: 50%;
        margin: 20px auto;
        cursor: pointer;
        color: white;
    }

    body.light .icon-circle{
        background-color: white;
        color: black;
    }

    .selected-view{
        border: 2px solid yellow;
    }

    body.light .selected-view{
        border: 2px solid lightgreen;
    }

    .icon-circle:hover{
        background-color: yellow;
        font-size: 15px;
        transition: 1s;
        color: black;
        border-radius: 15px;
    }

    body.light .icon-circle:hover{
        background-color: lightgreen;
        font-size: 15px;
        transition: 1s;
        color: black;
        border-radius: 15px;
    }

    
    .tooltip{
        display: block;
        width: 100px;
        background-color: rgba(169, 169, 169, 0.299);
        color: white;
        font-weight: bolder;
        padding: 7px;
        border-radius: 15px;
        animation: fadeIn 1s;
    }

    body.light .tooltip{
        background-color: black;
    }

    .iconContainer{
        position: relative;
        width: 100%;
        margin: 50px auto 0px auto;
    }
</style>