<template>
  <div id="app">
    <img src="./assets/figma_button_esilehepilt (1).jpg">
    <Navbar />
    <div class="container">
    <router-view/>
   </div>
  </div>

</template>

<script>
  import Navbar from './components/Navbar';
  import NewEmployee from './components/NewEmployee';
export default {
  name: 'app',
  components: {
    Navbar,
    NewEmployee
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
nav {
    margin-bottom:10px;
  }
</style>
