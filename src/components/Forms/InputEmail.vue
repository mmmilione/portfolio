<template>
    <input type="email" placeholder="joe_blogs@gmail.com" v-model="email">
</template>

<script>
    
    import { ref, watch } from 'vue';

    export default {
        emits: ['change'],
        setup(props, context){
            const email = ref();
            watch(()=> email.value, () => context.emit('change', email.value))
            return { email }
        }
    }
</script>

<style scoped>
    input{
        width: 95%;
        height: 30px;
        font-size: 18px !important;
        margin: auto;
        margin-bottom: 20px;
        padding: 5px;
        border-radius: 5px;
        transition: 0.7s;
        font-family: 'Poppins', sans-serif;
    }
    input:focus{
        outline-style: none;
        border: 2px solid yellow;
        transition: 0.7s;
    }

    body.light input:focus{
        border: 2px solid lightgreen;
    }
</style>