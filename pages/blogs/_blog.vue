<template>
  <div>
     Blog <br>
     {{ slug }}
  </div>
</template>

<script>
  export default {
    validate ({params}) {
      return /^\d+$/.test(params.blog)
    },
    data() {
      return {
        slug: this.$route.params
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
