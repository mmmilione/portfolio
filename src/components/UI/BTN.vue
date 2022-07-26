<template>
    <transition name = "btn" appear>
        <span class = "BTN fadein">{{text}}</span>
    </transition>
</template>

<script>
    export default {
        props: ['text']
    }
</script>

<style scoped>
    .btn-enter-from,
    .btn-leave-to{
        opacity: 0;
    }

    .btn-enter-active,
    .btn-leave-active{
        transition: all 0.8s ease;
    }
</style>