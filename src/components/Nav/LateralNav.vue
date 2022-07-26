<template>
    <div class = "nav" >
        <IconBox text="Home" icon="fas fa-home" dest="/" />
        <IconBox text="About Me" icon="fas fa-user" dest="/about"/>
        <IconBox text="Portfolio" icon="fas fa-folder" dest="/portfolio"/>
        <IconBox text="Contact Me" icon="fas fa-envelope" dest="/contacts"/>
        <IconBox text="In The Press" icon="fas fa-newspaper" dest="/press"/>
    </div>
</template>

<script>
    import PickBox from '../PickBox.vue'
    import Empty from '../UI/Empty.vue'
    import IconBox from '../IconBox.vue'

    export default {
        components: { PickBox, Empty, IconBox },
    }
</script>

<style scoped>

    @media screen and (max-width: 749px){
        .nav{
            display: none;
        }
    }

    .nav{
        z-index: 20;
        padding: 20px;
        position: fixed;
        right: 0px !important;
        width: 20%;
    }

</style>