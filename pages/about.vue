<template>
  <div>
      About Page
  </div>
</template>

<script>
export default {
  middleware : 'test',
  head() {
    return {
      title : 'About Page',
      meta : [{
        hid : 'description',
        name : 'description',
        content : 'My Amazing About Page'
      }]
    }
  }
}
</script>

<style lang="scss" scoped></style>
