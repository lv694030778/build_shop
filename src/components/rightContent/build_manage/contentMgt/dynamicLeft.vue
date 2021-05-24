<template>
    <div id="dynamicLeft">
      <div class="leftList">
        <div>
          <span>楼盘名</span>
          <el-input class="searchVal" v-model="searchVal" placeholder="请输入内容"></el-input>
          <el-button plain @click="search">搜索</el-button>
        </div>
        <div style="padding-top: 20px">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo">
                <el-menu-item v-for="(item,index) in buildList" :index="index" :key="item.name">
                  <router-link class="title" tag="p" to="/dynamicRight" @click.native="handleArchives(item.id)">{{item.name}}</router-link>
                  <router-link class="time" tag="p" to="/dynamicRight" @click.native="handleArchives(item.id)">{{item.time}}</router-link>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'dynamicLeft',
  data () {
    return {
      dynamicLeft: false,
      searchVal: '',
      buildList: [{
        id: '11',
        name: '恒大天赋半岛',
        time: '0000-00-00 00:00:00'
      }, {
        id: '12',
        name: '恒大天赋半岛',
        time: '0000-00-00 00:00:01'
      }, {
        id: '13',
        name: '恒大天赋半岛',
        time: '0000-00-00 00:00:02'
      }]
    }
  },
  methods: {
    search () {},
    handleArchives (id) {
      this.Export.buildId = id
    }
  }
}
</script>

<style scoped>
  #dynamicLeft{
    padding: 20px;
  }
  .searchVal{
    display: inline-block;
    width: 70px;
  }
#dynamicLeft .leftList{
  display: inline-block;
  width: 200px;
}
  .el-menu-vertical-demo .time{
    display: block;
  }
  #dynamicLeft .el-menu-vertical-demo i{
    display: none;
  }
  #dynamicLeft .el-menu-vertical-demo p{
    line-height: 28px;
  }
</style>
