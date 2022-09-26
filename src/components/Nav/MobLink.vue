<template>
    <p class = "pad20 fadein">
        <router-link :to="to">
            <span :class="isSelected">
                <i :class = "icon"></i> {{text}}
            </span>
        </router-link>
    </p>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router';
    export default {
        
        props: ['text', 'icon', 'to'],
        
        setup(props){

            const router = useRouter();

            const isSelected = computed(() => {
                router.path == props.to ? 'highlight' : '';
            })

            return { isSelected };
        }

    }

</script>

<style scoped>

    body.light .router-link-active i {
        color: green;
    }

    .router-link-active i {
        color: yellow;
    }
</style>