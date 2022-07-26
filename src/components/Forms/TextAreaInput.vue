<template>
    <textarea v-model="msg" placeholder="Type your message here" cols="30" rows="5"></textarea>
</template>

<script>
    
    import { ref, watch } from 'vue';

    export default {
        emits: ['change'],
        setup(props, context){
            const msg = ref();
            watch(()=> msg.value, () => context.emit('change', msg.value))
            return { msg }
        }
    }
</script>

<style scoped>
    textarea{
        width: 95%;
        height: 100px;
        resize: none;
        font-size: 18px;
        margin: auto;
        margin-bottom: 20px;
        padding: 5px;
        border-radius: 5px;
        transition: 0.7s;
    }
    textarea:focus{
        outline-style: none;
        border: 2px solid yellow;
        transition: 0.7s;
    }

    body.light textarea:focus{
        border: 2px solid lightgreen;
    }
</style>