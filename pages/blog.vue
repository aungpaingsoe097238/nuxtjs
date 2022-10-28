<template>
  <div>
    <button class="btn btn-primary" @click="alert()">alert</button>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
  export default {
   layout : 'blog',
   methods: {
    alert(){
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
   },
  }
</script>

<style lang="scss" scoped>

</style>
