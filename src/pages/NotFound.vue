<script>
    export default {
        name: 'NotFound'
    }
</script>

<template>
    <span class="star" v-for="i in 10"></span>
    <div>
        <h1>404 | NOT FOUND</h1>
        <router-link :to="{ name: 'home' } "> torna a casa </router-link>
    </div>
</template>


<style lang="scss" scoped>

</style>