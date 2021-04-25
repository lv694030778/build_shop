<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    border: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,body,#app{
    height: 100%;
    overflow: hidden;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
 ul li{
    list-style: none;
  }
a{
  text-decoration: none;
}

</style>
