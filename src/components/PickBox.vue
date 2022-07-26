<template>
    <div class = "pick-box" @click="goTo">
        <slot></slot>
        <h3 class="center"><b>{{text}}</b></h3>
    </div>
</template>
<script>
    
    import router from '../router';
    
    export default {
        props: ['text', 'dest'],
        setup(props){
            const goTo = () => router.push({name: props.dest})
            return { goTo };
        }
    }
</script>

<style scoped>
    .pick-box{
        width: 50%;
        margin: 10px auto;
        padding: 15px;
        cursor: pointer;
        transition: 0.5s;
    }

    .pick-box:hover{
        width: 60%;
        font-size: 20px;
        font-weight: bolder;
        transform: rotate3d(-1, -1, 1, 10deg);
        transition: 0.5s;
    }
</style>