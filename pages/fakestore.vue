<template>
  <div>
    {{ products }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        products : []
      }
    },
    created(){
      this.$axios.$get('https://fakestoreapi.com/products')
      .then((res)=>{
        this.products = res;
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>


