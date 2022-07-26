<template>

    <transition name="modback">

            <div class = "modal-container" v-if="isVisible">

            <transition appear name="mod">
                <div class="modal">

                    <h1 class = "pad20 right close">
                        <i class = "fas fa-times-circle" @click="close"></i>
                    </h1>
                
                    <h2 class="name accent">{{project.name}}</h2>

                    <p class="name">{{project.description}}</p>

                    <div class="modal-grid">

                        <img :src="project.pic" alt="">
                    
                        <div>
                            <div class="tech-grid">
                                <Tech v-for="tech in project.tech"
                                    :name="tech"
                                    :git="project.git"
                                />
                            </div>
                        </div>

                    </div>

                    <div class = "center btn-div">
                        <BTN text="Visit Website" @click="navigate(project.url)"/>
                    </div>
                    
                </div>

            </transition>

        </div>

    </transition>
    
</template>

<script>

    import Tech from './Tech.vue';
    import BTN from './UI/BTN.vue';
    import { navigate } from '../helpers/navigation';

    export default {
        components: { Tech, BTN },
        props: ['isVisible', 'project'],
        emits: ['close'],
        setup(props, context){
            const close = () => context.emit('close');
            return { close, navigate }
        }
    }
</script>

<style scoped>
    .modal-container{
        background-color: rgba(11, 11, 11);
        z-index: 20;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }

    body.light .modal-container{
        background-color: lightgrey;
    }

    .modal{
        position: relative;
        background-color: rgba(169, 169, 169, 0.299);
        margin: 20vh auto;
        width: 60%;
        height: 500px;
        padding: 20px;
        border-radius: 10px;
    }

    body.light .modal{
        background-color: white;
    }

    .close{
        position: absolute;
        top: -20px;
        right: 0px;
        cursor: pointer;
    }

    .name{ padding-left: 30px }

    .modal-grid{
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: minmax(200px, auto);
    }

    img{
        margin: 20px auto;
        width: 90%;
        border-radius: 10px;
        border: 1px solid whitesmoke;
    }

    .tech-grid{
        padding-top: 15px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .btn-div{
        width: 100%;
        position: absolute;
        bottom: 30px;
        left: 0px;
    }

    .mod-enter-from,
    .mod-leave-to{
        opacity: 0;
        transform: scale(0.6);
    }

    .mod-enter-active{
        transition: all 0.9s ease;
    }

    .mod-leave-active{
        transition: all 0.2s ease;
    }

    .modback-leave-to{
        opacity: 0;
        transform: scale(0.6);
    }

    .modback-leave-active{
        transition: all 0.5s ease;
    }

    @media screen and (max-width: 992px){
        .modal-grid{
            display: block;
        }

        img{
            display: block;
            margin: 20px auto;
            width: 90%;
            border-radius: 10px;
        }

        .modal{
            position: relative;
            background-color: rgba(169, 169, 169, 0.299);
            margin: 2vh auto;
            width: 80%;
            height: 90vh;
            padding: 20px;
            border-radius: 10px;
        }

        .tech-grid{
            padding-top: 15px;
            display: block;
        }

        .close{
            position: absolute;
            top: -20px;
            right: -5px;
            cursor: pointer;
            font-size: 22px;
        }
    }

</style>