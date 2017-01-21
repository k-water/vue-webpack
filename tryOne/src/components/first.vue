<template>
  <div id="first">
    <h1>I am a component.</h1>
    <a> written by {{ author }} </a>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        author: "waterlin"
      }
    }
  }
</script>

<style>

</style>