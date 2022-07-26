<template>

    <nav>
        
        <router-link to="/">
            <h2 class ="logo">
                <span class="accent">M</span>ario<span class="accent">M</span>azzola 
            </h2>
        </router-link>
        
        <div class="nav-btn">
            <i class="fas fa-bars accent" id="menu-mob" @click="isOpen = !isOpen"></i>
        </div>

        <div class = "links">

            <p class="right">
                <a href='https://github.com/mmmilione' target='_blank'>
                    <i class="fab fa-github"></i> Github
                </a>
            </p>

            <p class="center">
                <a href='https://it.linkedin.com/in/mario-mazzola-7a711412' target='_blank'>
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
            </p>

            <Switch />

        </div>

    </nav>

    <SideMenu :isOpen="isOpen" @close="isOpen=false"/>

</template>

<script>

    import { ref } from "vue";
    import SideMenu from "./SideMenu.vue";
    import Switch from "../Switch.vue";

    export default {
        components: { SideMenu, Switch },
        setup(){
            const isOpen = ref(false);
            return { isOpen }
        }
    }

</script>

<style scoped>

    nav{
        display: grid;
        grid-template-columns: 2fr 5fr; 
        max-height: 60px;
        background-color: rgba(169, 169, 169, 0.177);
    }

    body.light nav {
        background-color: white;
        border-bottom: 1px solid rgba(169, 169, 169, 0.177);
    }

    .logo{
        padding-left: 20px;
    }

    .links{
        display: grid;
        grid-template-columns: 2fr 2fr 2fr; 
        column-gap: 10px;
        padding-top: 10px;
    }

    .links p span{
        cursor: pointer;
    }

    .nav-btn{
        display: none;
    }

    @media screen and (max-width: 749px){
        .links{
            display: none;
        }

        .nav-btn{
            display: block;
            position: relative;
        }

        #menu-mob{
            position: absolute;
            top: 30px;
            right: 15px;
        }

    }

</style>