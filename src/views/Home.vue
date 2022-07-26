<template>
    <div class="container">
        <div class="box" id="animationBox">
            <div class = "scream">
                <h2 class="center" id="title">{{title}}</h2>
                <h1 class="center" id="subtitle">{{subtitle}}</h1>
                <br>
                <p class = "center" v-if="subtitle == 'Let\'s MOON together'">
                    <router-link to="/portfolio">
                        <BTN text = "Check My Work" />
                    </router-link>
                </p>
            </div>
            
        </div>
    </div>
</template>

<script>

    import { onMounted, ref } from 'vue';
    import { onBeforeRouteLeave } from 'vue-router';
    import BTN from '../components/UI/BTN.vue';
    
    import { init3JS } from '../helpers/threeD'

    export default {
        components: { BTN },
        setup(){

            let threeAnimation;

            const title = ref('|');
            const subtitle = ref('');
            const subText = "Let's MOON together";
            const text = "I am a BLOCKCHAIN DEV";

            //Intervals
            let compilation;
            let subCompilation;

            //Compile h2
            const compileSubTitle = () => {
                if(subtitle.value == subText){
                    clearInterval(subCompilation);
                }else if(subtitle.value == subText + "|"){
                    subtitle.value = subtitle.value.replace('|', '');
                }else{
                    const index = subtitle.value.length - 1;
                    subtitle.value = subtitle.value.replace('|', '');
                    subtitle.value = subtitle.value + subText[index] + '|';
                }
            }

            //Compile h1
            const compile = () => {
                if(title.value == text){
                    clearInterval(compilation);
                    const el = document.querySelector('#title');
                    el.classList.add('up');
                    subtitle.value = '|';
                    subCompilation = setInterval(() => compileSubTitle(), 150);
                }else if(title.value == text + "|"){
                    title.value = title.value.replace('|', '');
                }else{
                    const index = title.value.length - 1;
                    title.value = title.value.replace('|', '');
                    title.value = title.value + text[index] + '|';
                }
            }

            
            
            //Trigger animation
            onMounted(() => {
                compilation = setInterval(() => compile(), 150);
                threeAnimation = init3JS();
            });

            //Get rid of intervals before changing route
            onBeforeRouteLeave(()=> {
                if(compilation) clearInterval(compilation);
                if(subCompilation) clearInterval(subCompilation);
                if(threeAnimation) clearInterval(threeAnimation);
            })
            return { title, subtitle }
        }
    }

</script>

<style scoped>
    h2{
        margin-top: 30vh;
    }

    .scream{
        position: relative;
        right: 15vw;
    }

    .up{
        margin-top: 20vh;
        transition: 0.8s ease;
    }
    .canvas-container{
        background-color: yellow;
        position: absolute;
        top: 0px !important;
        left: 0px !important;
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 992px){
        .up{
            margin-top: 10vh;
            transition: 0.8s ease;
        }
        .scream{
            position: unset;
        }
    }
</style>