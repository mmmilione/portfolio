<template>
    <p>
        <span 
            class="pill" 
            :class="name=='GitHub' ? 'link' : null"
            @click="goGit"
        >
            <i class="fab fa-github" ref="circle" v-if="name=='GitHub'"></i> 
            <i class="fas fa-circle" ref="circle" v-else></i> 
            {{name}}
        </span> 
    </p>
</template>

<script>
import { navigate } from '../helpers/navigation';
import { onMounted, ref } from 'vue'

    export default {
        props: ['name', 'git'],
        setup(props){
            const circle = ref(null);
            const goGit = () => {
                if(props.git == null || props.name != 'GitHub') return false;
                navigate(props.git);
            }
            onMounted(() => {
                let color;
                if(props.name == 'Firebase' || props.name == 'Bitcoin'){
                    color = 'orange';
                }else if(props.name == 'Vue'){
                    color = 'lightgreen';
                }else if(props.name == 'Solidity'){
                    color = 'Indigo';
                }else if(props.name == 'NodeJS'){
                    color = 'green';
                }else if(props.name == 'CSS'){
                    color = 'blue';
                }else if(props.name == 'HTML'){
                    color = 'red'
                }else if(props.name == 'JS'){
                    color = 'yellow';
                }else if(props.name == 'PHP'){
                    color = 'lightblue';
                }else if(props.name == 'ThreeJS'){
                    color = 'pink';
                }else{
                    color = 'white'
                }
                circle.value.style.color = color;
            });

            return { circle, goGit }
        }
    }
</script>

<style scoped>
    .pill{
        background-color: black;
        padding: 10px;
        border-radius: 10px;
    }

    body.light .pill{
        background-color: white;
        border: 1px solid black;
    }

    .link{
        cursor: pointer;
    }

    body.light .fa-github{
        color: black !important;
    }

    @media screen and (max-width: 992px){
        p{
            display: inline-block;
            margin-left: 10px; 
            text-align: center !important;
            text-justify: center;
        }
    }
    
</style>