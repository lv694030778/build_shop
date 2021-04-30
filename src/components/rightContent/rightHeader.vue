<template>
  <div class="main-aside-head">
    <div class="header">
      <img src="../../images/type_icon.png" alt="">
      <el-breadcrumb separator="/" style="display: inline-block">
        <el-breadcrumb-item tag="span"
          v-for='(name,index) in matchedArr'
          :key='index'
        >
          {{name}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'rightHeader',
  data () {
    return {
    }
  },
  computed: {
    matchedArr () {
      let temp = []
      let temps = []
      this.$route.matched.filter((item, index, self) => {
        // if(item.meta.title){
        //     const title = item.meta.title;
        //     temp.push(title);
        // }
        if (item.name) {
          const name = item.name
          temp.push(name)
        }
      })
      temp.filter((item, index, self) => {
        if (!temps.includes(item)) {
          temps.push(item)
        }
      })
      return temps
    }
  }
}
</script>

<style scoped>
  .main-aside-head {
    display:inline-block;
    height:calc(100% - 70px);
    width:calc(100% - 200px);
    position: absolute;
    left: 200px;
    top: 70px;
    bottom: 0;
    background: #fff;
    overflow-y: auto;
    border-right: 1px solid #ddd;
  }
  .main-aside-head .header{
    height: 50px;
    line-height: 50px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    padding:0 20px;
  }
  .main-aside-head .header img{
    vertical-align: middle;
    margin-right: 30px;
  }
</style>
