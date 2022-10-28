<template>
  <div>
    This is error page
    {{ error }}
  </div>
</template>

<script>
  export default {
    layout : 'error-layout',
    props : {
      error : {
        type : String
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
