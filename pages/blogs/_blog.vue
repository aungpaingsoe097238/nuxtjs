<template>
  <div>
     Blog
  </div>
</template>

<script>
  export default {
    created() {
      console.log(this.$route.params.blog)
    }
  }
</script>

<style lang="scss" scoped>

</style>
