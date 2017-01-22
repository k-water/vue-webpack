<template>
  <div id="app">
    <First></First>
  </div>
</template>

<script>
  import First from './components/First'
  export default {
    data() {
      return {

      }
    },
    components: {
      First
    }
  }
</script>

<style lang="scss">
  * {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
</style>