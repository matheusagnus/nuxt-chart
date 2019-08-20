<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('getData')
    }
  }
</script>
