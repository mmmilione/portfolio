<template>
    <div>
        <transition name="fadein">
            <div @click="navigate(url)" class="article" v-if="isVisible">
                <img :src="img" alt="">
                <h3 class = "center">{{publication}}</h3>
            </div>
        </transition>
    </div>
</template>

<script>

    import { onMounted, ref, computed } from 'vue';
    import { navigate } from '../helpers/navigation';

    export default {
        props: ['url', 'publication', 'child', 'img'],
        setup(props){
            const isVisible = ref(false);
            const delay = computed(() => 800 * props.child);
            onMounted(() => setTimeout(() => isVisible.value = true, delay.value))
            return { isVisible, navigate } 
        }
    }
    
</script>

<style scoped>
    .article{
        background-color: rgba(169, 169, 169, 0.299);
        border-radius: 10px;
        cursor: pointer;
        width: 70%;
        height: 290px;
        margin: 10px auto;
        transition: all .5s ease;
        border: 0.5px solid whitesmoke;
    }

    body.light .article{
        background-color: black;
        color: white;
        border: .5px solid white;
    }

    .article:hover{
        font-weight: bolder;
        border: 4px solid whitesmoke;
        transform: scale(1.1);
        transition: all .5s ease;
        border: 0px;
    }

    body.light .article:hover{
        border: none;
    }

    .fadein-enter-from{
        opacity: 0;
        transform: scale(0.6);
    }

    .fadein-enter-active{
        transition: all 1s ease;
    }

    img{
        width: 100%;
        height: 220px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    @media screen and (max-width: 992px){
        .article{
            margin-bottom: 40px;
            width: 98%;
            height: 330px;
        }

        img{
            height: 260px;
        }
    }

    @media screen and (max-width: 600px){
        .article{
            margin-bottom: 40px;
            width: 98%;
            height: 270px;
        }

        img{
            height: 200px;
        }
    }
</style>
