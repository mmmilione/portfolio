<template>
    <p class = "small"><i :class="icon"></i> {{text}}</p>
</template>

<script>
    export default {
        props: ['text', 'icon']
    }
</script>

<style scoped>
    .small{
        color: white;
        font-size: 12px;
        font-weight: bold;
    }

    body.light .small{
        color: black;
    }
</style>