<template>
    <div class="container">
        <div class="box">
            <h1 class="center">About Me</h1>
            <div class="content">
                <div class = "pad20">
                    <img src="../assets/images/mario.jpeg" class = "profile-pic" alt="Mario's profile picture">
                    <br><br>
                    <p class = "center">
                        <a href="CV.pdf" download>
                            <BTN text = "Download My CV" />
                        </a>
                    </p>
                </div>
                <div class = "pad20">
                    <h2 class="accent">Mario Mazzola</h2>
                    <p>Self-taught programmer, startupper, blockchain developer, Bitcoin maximalist, coder for fun and for profit.</p>
                    <p>Leveraging on the power of blockchain technology, to fight the US Embargo against Cuba since 2019.</p>
                    <br>
                    <h3>Here is my TECH stack:</h3>
                </div>
            </div>
            <div class="skills fadein">
                <Skill 
                    :text="skill.tech" 
                    :value="skill.level"
                    v-for="(skill, index) in skills"
                    :key="index"
                />
            </div>
        </div>
        </div>
</template>

<script>

    import { ref } from 'vue';
    import Skill from '../components/Skill.vue';
    import BTN from '../components/UI/BTN.vue';

    export default {
        components: { Skill, BTN },
        setup(){

            const skills = ref([
                {tech: 'Solidity', level: 80},
                {tech: 'Bitcoin', level: 85},
                {tech: 'NodeJS', level: 90},
                {tech: 'Vue3', level: 85},
                {tech: 'HMTM', level: 90},
                {tech: 'CSS', level: 80},
                {tech: 'Javascript', level: 100},
                {tech: 'Firebase', level: 70},
                {tech: 'Flutter', level: 75},
            ]);

            return { skills }
        }
    }
</script>

<style scoped>
    .profile-pic{
        margin: auto;
        display: block;
        border-radius: 50%;
        max-width: 180px;
    }

    .content{
        margin-top: 40px;
        display: grid;
        grid-template-columns: 2fr 2fr;
    }

    .skills{
        margin-top: 40px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 749px){
        .content{
            display: block;
        }

        .skills{
            margin-top: 0px;
            display: block;
        }
    }

</style>