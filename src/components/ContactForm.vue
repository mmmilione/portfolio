<template>
    <div class="contact-box pad20">
        <form>
            <Label text="Your Email" icon="fas fa-envelope"/>
            <InputEmail @change="handleEmail" />
            <Label text="Your Message" icon="fas fa-edit"/>
            <TextAreaInput @change="handleMsg"/>

            <p class="right chars-count" v-if="charLeft > 0">
                <span class="accent">{{charLeft}}</span> characters left
            </p>
            <p class="right accent chars-count" v-else>
                Your message is too long
            </p>

            <Feedbacks :isLoading="isLoading" :error="error" :isSuccess="isSuccess" />
            <div class="center">
                <transition name="sub">
                    <BTN 
                        text="Send Message"
                        v-if="isLoading==false && isSuccess==false && charLeft > 0" 
                        @click="send"
                    />
                </transition>
            </div>
        </form>
    </div>
</template>

<script>

    import Label from './Forms/Label.vue';
    import InputEmail from './Forms/InputEmail.vue';
    import TextAreaInput from './Forms/TextAreaInput.vue';
    import Feedbacks from './Forms/Feedbacks.vue';
    import { ref, watch } from 'vue';
    import post from '../helpers/httpCalls';
    import BTN from './UI/BTN.vue';

    export default {

        components: { Label, InputEmail, TextAreaInput, Feedbacks, BTN },

        setup(){

            const charLeft = ref(500);
            let email = ref('');
            let msg = ref('');

            const isLoading = ref(false);
            const isSuccess = ref(false);
            const error = ref('');

            const handleEmail = value => email.value = value;

            const handleMsg = value => msg.value = value;

            const send = async () => {
                
                error.value = '';
                isSuccess.value = false;

                if(email.value == ''){
                    return error.value = "Insert your email";
                }

                if(msg.value == ''){
                    return error.value = "Insert your message";
                }

                isLoading.value = true;
                
                const url = "https://unrealart.io/api/contact";
                const vars = {email: email.value, msg: msg.value};

                try {
                    const res = await post(url, vars);
                    if(res.status == 200){
                        isLoading.value = false;
                        isSuccess.value = true;
                        document.querySelector('form').reset();
                    }else{
                        const errorMSG = await res.text();
                        isLoading.value = false;
                        return error.value = errorMSG ? errorMSG : `Error (${res.status})`;
                    }
                } catch (err) {
                    isLoading.value = false;
                    return error.value = `Error`;
                }


            }

            watch(
                ()=> msg.value, 
                () => {
                    charLeft.value = 500 - msg.value.length
                }
            );

            return { 
                send, handleEmail, handleMsg, 
                isLoading, error, isSuccess, charLeft
            };
        }
        

    }
</script>

<style scoped>
    .contact-box{
        background-color: rgba(169, 169, 169, 0.299);
        border-radius: 10px;
        height: 500px;
        margin: 20px;
    }

    body.light .contact-box{
        background-color: white;
    }

    .chars-count{
        position: relative;
        bottom: 25px;
        right: 10px;
        font-size: 14px;
    }

    .sub-enter-from,
    .sub-leave-to{
        opacity: 0;
    }

    .sub-enter-active,
    .sub-leave-active{
        transition: all 1s ease;
    }

</style>