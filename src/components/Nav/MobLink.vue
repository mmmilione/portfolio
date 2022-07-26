<template>
    <p class = "pad20 fadein">
        <router-link :to="to">
            <span>
                <i :class = "icon"></i> {{text}}
            </span>
        </router-link>
    </p>
</template>

<script>
    export default {
        props: ['text', 'icon', 'to']
    }
</script>