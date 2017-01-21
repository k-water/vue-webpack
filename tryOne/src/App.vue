<template>
  <div id="app">
    <img :src="img">
    <h1>Hello App!</h1>
    <ul>
        <li><router-link to="/first">I am the first page</router-link></li>
        <li><router-link to="/second">I am the second page</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
  import first from './components/first.vue'
  import second from './components/second.vue'
  export default {
    data() {
      return {
        msg: 'Hello Vue!',
        img: require('./assets/logo.png')
      }
    },
    components: {
      first,
      second
    }
  }
</script>



<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    /*display: inline-block;*/
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>