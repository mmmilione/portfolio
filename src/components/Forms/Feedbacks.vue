<template>
    <div class="feeds">

        <transition name="fade">
            <Loader v-if="isLoading == true && error == ''"/>
        </transition>
        
        
        <transition name="err">
            <div v-if="error != '' && isLoading == false">
                <h3 class = "center error" >
                    {{error}}
                </h3>
            </div>
        </transition>
        
        <transition name="succ">
            <h3 class = "center success" v-if="isSuccess==true && isLoading == false">
                <i class = "fas fa-check"></i> <b>Enquiry Sent!</b>
            </h3>
        </transition>
        
        
    </div>
</template>

<script>

    import Loader from '../UI/Loader.vue';

    export default {
        props: ['isLoading', 'error', 'isSuccess'],
        components: { Loader },
    }
</script>

<style scoped>
    .feeds{
        height: 100px;
    }

    .success{
        padding:15px;
        background-color: lightgreen;
        color: green;
        border-radius: 15px;
    }

    .error{
        padding:15px;
        background-color: lightpink;
        color: red;
        border-radius: 15px;
    }

    .succ-enter-active{
        animation: wobble 1s ease;
    }

    .err-enter-active{
        animation: wobble 1s ease;
    }

    .err-leave-to{
        opacity: 0;
    }

    .err-leave-active{
        transition: .5 ease;
    }

    .fade-enter-from{
        opacity: 0;
    }

    .fade-enter-active{
        transition: 1s ease;
    }

    @keyframes wobble{
        0%{
            opacity: 0;
        }
        20%{
            opacity: 0;
            transform: scale(0.6);
        }
        50%{
            opacity: 1;
            transform: scale(1);
        }
        60%{
            transform: translateX(-8px);
        }
        70%{
            transform: translateX(8px);
        }
        80%{
            transform: translateX(-4px);
        }
        90%{
            transform: translateX(4px);
        }
        100%{
            transform: translateX(0);
        }
        
    }

</style>