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

  .el-switch{
    width: 100px;
    padding-left: 38px;
  }
  .el-switch__label--right,.el-switch__label--left{
    margin-left: 0;
    position: absolute;
    left: 0;
    display: none;
  }
  .el-switch__label--left.is-active{
    display: block;
  }
  .el-switch__label--right.is-active{
    display: block;
  }
</style>
