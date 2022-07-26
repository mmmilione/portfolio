<template>
    <div class="switch-box center">
        <div 
            class = "center" 
            :class="store.state.theme != 'light' ? 'selected' : 'unselected'" 
            @click="goDark"
        >
            <i class="fas fa-moon"></i>
        </div>
        <div 
            class="center" 
            :class="store.state.theme == 'light' ? 'selected' : 'unselected'"
            @click="goLight"
        >
             <i class="fas fa-sun"></i>
        </div>
    </div>
</template>

<script>

    import store from '../store/state';

    export default {
        setup(){
            const goLight = () => store.state.setTheme('light');
            const goDark = () => store.state.setTheme('dark');
            return { goLight, goDark, store }
        }
    }

</script>

<style scoped>
    .switch-box{
        margin: 5px auto;
        width: 100px !important;
        height: 30px;
        border-radius: 10px;
        background-color: white;
        border: 1px solid black;
        display: grid;
        padding: 1px;
        grid-template-columns: 55fr 45fr;
        transition: all .8s ease;
    }

    body.light .switch-box{
        background-color: white;
        grid-template-columns: 45fr 55fr;
        border: 1px solid green;
        padding: 1px;
        transition: all .8s ease;
    }

    .selected{
        padding-top: 3px;
        display: inline-block;
        border-radius: 7px;
        border: 2px solid white;
        background-color: black;
        color: yellow;
        transition: all .8s ease;
    }

    body.light .selected{
        background-color: lightgreen;
        border: 2px solid white;
        color: green;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        transition: all .8s ease;
    }

    .unselected{
        padding-top: 3px;
        display: inline-block;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        border: none;
        background-color: white;
        color: black;
        cursor: pointer;
    }

    body.light .unselected{
        background-color: white;
        border: transparent;
        color: black;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
    }
</style>