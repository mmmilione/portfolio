<template>
    <div class="bouncer">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .bouncer{
        width: 100px;
        height: 65px;
        margin:  0px auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 5px;
        align-items: end;
    }

    .bouncer div{
        width: 10px;
        height: 10px;
        background-color: yellow;
        border-radius: 50%;
        animation: bouncer 0.4s cubic-bezier(.19, .57, .3, .98) infinite alternate;
    }

    body.light .bouncer div{
        background-color: green;
    }

    .bouncer div:nth-child(2){
        animation-delay: 0.1s;
        opacity: 0.85;
    }

    .bouncer div:nth-child(3){
        animation-delay: 0.2s;
        opacity: 0.95;
    }

    .bouncer div:nth-child(4){
        animation-delay: 0.3s;
        opacity: 0.9;
    }

    @keyframes bouncer {
        from { transform: translateY(0) }
        to { transform: translateY(-20px) }
    }
</style>