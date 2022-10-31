<template>
    <div>
        <button class="btn btn-primary" @click="submit()">submit</button>
    </div>
</template>

<script>
    export default {
       methods: {
        submit() {
            this.$axios.$get('https://fakestoreapi.com/products/544')
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
       },
    }
</script>

<style lang="scss" scoped>

</style>