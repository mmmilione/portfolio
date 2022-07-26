<template>
    <div class="container">
        <div class="box">
            <h1 class="center">Contact Me</h1>
            <div class="content">
                <div class = "pad20">

                    <p>Fill up the form to drop me a message. As an alternative, you can contact me through my social media:</p>
                    
                    <ul>
                        <li>
                            <a href="https://github.com/mmmilione" target="_blank" >
                                <i class="fab fa-github"></i> Github
                            </a>
                        </li>

                        <li>
                            <a href="https://it.linkedin.com/in/mario-mazzola-7a711412" target="_blank">
                                <i class="fab fa-linkedin"></i> LinkedIn
                            </a>
                        </li>

                    </ul>
                    
                    <h3 class = "accent">I will reply within 24 hours.</h3>

                </div>
                
                <transition appear name="f">
                    <ContactForm />
                </transition>
                
            </div>
            
        </div>
    </div>
</template>

<script>

    import BTN from '../components/UI/BTN.vue';
    import ContactForm from '../components/ContactForm.vue';

    export default {
        components: { BTN, ContactForm }
    }
</script>

<style scoped>

    li{
        list-style: none;
        margin-bottom: 20px;
        font-weight: bold;
        cursor: pointer;
    }

    .content{
        margin-top: 40px;
        display: grid;
        grid-template-columns: 2fr 2fr;
    }

    @media screen and (max-width: 992px){
        .content{
            display: block;
        }
    }

    .f-enter-from,
    .f-leave-to{
        transform: scale(0.6);
    }

    .f-enter-active,
    .f-leave-active{
        transition: all 0.8s ease;
    }

</style>