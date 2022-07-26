<template>
    <div id="menuMob">
        <h2 class = "pad20 right accent" @click="close">
            <i class = "fas fa-times-circle"></i>
        </h2>
        
        <transition name="navLinks">
            <section v-if="isOpen">
                <MobLink to="/" icon="fas fa-home" text="Home" />
                <MobLink to="/about" icon="fas fa-user" text="About Me" />
                <MobLink to="/portfolio" icon="fas fa-folder" text="Portfolio" />
                <MobLink to="/contacts" icon="fas fa-envelope" text="Contact Me" />
                <MobLink to="/press" icon="fas fa-newspaper" text="In the Press" />
            </section>
        </transition>

        <transition name="modeSwitch">
            <section v-if="isOpen" class="switch-div">
                 <Switch />
            </section>
        </transition>
        
        <transition name="social">
            <h1 class = "social-container center" v-if="isOpen">
                <span></span>
                <a href='https://github.com/mmmilione' target='_blank'>
                    <i class = "fab fa-github black"></i>
                </a>
                <a href='https://it.linkedin.com/in/mario-mazzola-7a711412' target="_blank">
                    <i class = "fab fa-linkedin black"></i>
                </a>
                <span></span>
            </h1>
        </transition>

    </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router';
import { animateOpen, animateClose } from '../../helpers/menuAnimations';
import MobLink from './MobLink.vue';
import Switch from '../Switch.vue';

    export default {
        components: { MobLink, Switch },
        props: ["isOpen"],
        emits: ["close"],
        setup(props, context) {
            const route = useRoute();
            const isOpen = ref(false);
            
            const close = () => {
                context.emit("close");
            }
            
            watch(() => props.isOpen, () => {
                if (props.isOpen == true) {
                    animateOpen();
                    setTimeout(() => isOpen.value = true, 300);
                }
                else {
                    isOpen.value = false,
                    animateClose();
                }
            });
            watch(() => route.path, () => context.emit("close"));
            return { close, isOpen };
        },
        
    }
</script>

<style scoped>


    #menuMob {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1;
        width: 0px;
        height: 0px;
        display: none;
        background-color: black;
        padding-top: 0px;
    }

    body.light #menuMob{
        background-color: white;
    }

    h2{
        position: absolute;
        top: -20px;
        right: -10px;
        animation: fadeIn 2s;
    }

    .social-container{
        width: 100%;
        background-color: white;
        height: 60px;
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 1fr;
        justify-content: center;
        align-content: center;
    }

    body.light .social-container{
        background-color: whitesmoke;
    }

    .navLinks-enter-from{
        opacity: 0;
        transform: translateX(-100px);
    }

    .modeSwitch-enter-from{
        opacity: 0;
        transform: scale(0.6);
    }

    .social-enter-from{
        opacity: 0;
        transform: translateX(100px);
    }

    .social-enter-active,
    .navLinks-enter-active,
    .modeSwitch-enter-active{
        transition: all 0.4s ease;
    }

    .switch-div{
        display: block;
        width: 100%;
        margin-bottom: 5vh;
        margin-top: 5vh;
    }

</style>