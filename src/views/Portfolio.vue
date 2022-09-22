<template>
    <div class="container">
        
        <div class="box">
            <h1 class="center">Portfolio</h1>
            <p class="pad20">
                Find below a few projects of mine that are currenctly running in production. For a deep dive on my code, please <a href="https://github.com/mmmilione" target="_blank" class="accent">visit my Github</a>.
            </p>
            <div class="content">
                
                <Project  
                    v-for="(project, index) in projects"
                    @open="showProjectInModal(project)"
                    :name="project.name"
                    :child="index + 1"
                    :img="project.pic"
                />

            </div>

        </div>

        <teleport to="body">
            <PortfolioModal 
                :project="projectInModal" 
                :isVisible="isVisible" 
                @close="closeModal"
            />
        </teleport>
        
    </div>
    
</template>

<script>

    import { ref } from 'vue';
    import Project from '../components/Project.vue';
    import PortfolioModal from '../components/PortfolioModal.vue';

    import pagocripto from '../assets/images/pagocripto.png'
    import qbita from '../assets/images/qbita.png'
    import portfolio from '../assets/images/portfolio.png'
    import criptolibre from '../assets/images/criptolibre.png'
    import unrealart from '../assets/images/unreal.png'
    import aal from '../assets/images/AAL.png'

    export default {
        components: { Project, PortfolioModal },
        setup(){

            const projects = ref([
                {
                    name: "UnrealArt", 
                    pic: unrealart, 
                    url: "https://unrealart.io",
                    description: "UnrealArt is a 3D art gallery and marketplace where people can mint and trade NFTs of AI generated art.",
                    tech: ['Vue', 'NodeJS', 'ThreeJS', 'Solidity', 'GitHub'],
                    git: "https://github.com/mmmilione/UnrealArt",
                },
                {
                    name: "CriptoLibre", 
                    pic: criptolibre, 
                    url: "https://criptolibre.com",
                    description: "CriptoLibre is a P2P exchange which allows people to exchange Bitcoin, USDT, DAI and nuARS",
                    tech: ['Vue', 'NodeJS', 'Bitcoin', 'Solidity'],
                },

                {
                    name: "PagoCripto", 
                    pic: pagocripto, 
                    url: "https://pagocripto.app",
                    description: "Pagocripto is an over-the-counter money transmitter operating in Argentina, with a strong focus on crypto.",
                    tech: ['HTML', 'CSS', 'Firebase', 'Vue']
                },

                {
                    name: "QBita", 
                    pic: qbita, 
                    url: "https://qbita.org",
                    description: "QBita is a Bitcoin wallet and P2P exchange which allows the Cuban people to bypass the US Embargo",
                    tech: ['HTML', 'CSS', 'NodeJS', 'Vue', 'Bitcoin']
                },

                {
                    name: "AAL Token", 
                    pic: aal, 
                    url: "https://antarctic.antarcticlands.org/",
                    description: "Airdrop and Presale of a crypto token (BEP20) for a low budget client.",
                    tech: ['PHP', 'JS', 'CSS', 'Solidity', 'GitHub'],
                    git: "https://github.com/mmmilione/AAL"
                },

                {
                    name: "Portfolio", 
                    pic: portfolio, 
                    url: "https://mariomazzola-64e1a.web.app",
                    description: "This very portfolio website. Developed entirely in Vue3. It shows my work and points to some crypto articles that covered my projects.",
                    tech: ['HTML', 'CSS', 'Vue', 'Firebase', 'GitHub'],
                    git: "https://github.com/mmmilione/portfolio",
                },
            ]);

            const projectInModal = ref(null);

            const isVisible = ref(false);
            
            const closeModal = () => {
                isVisible.value = false;
                projectInModal.value = null;
            }

            const showProjectInModal = (project) => {
                isVisible.value = true;
                projectInModal.value = project;
            }

            return { projects, showProjectInModal, closeModal, projectInModal, isVisible }
        }
    }
</script>

<style scoped>
    .content{
        margin: auto;
        margin-top: 40px;
        margin-bottom: 40px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 95%;
        grid-gap: 30px;
    }

    h4{margin-top: 60px;}

    @media screen and (max-width: 992px){
        .content{
            display: block;
        }

    }
</style>