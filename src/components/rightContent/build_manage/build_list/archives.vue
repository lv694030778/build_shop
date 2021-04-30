<template>
  <div id="archives">
    <div>
      <el-row class="tac">
        <el-col style="width: 150px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu v-for="(item,index) in typeData" :index="index" :key="index">
              <template slot="title">
                <h4>{{item.name}}</h4>
              </template>
              <el-menu-item-group>
<!--                <template slot="title">分组一</template>-->
                <el-menu-item v-for="(item_c,index_c) in item.child" :index="index-index_c" :key="index_c">{{item_c.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'archives',
  data () {
    return {
      buildId: '',
      typeData: [{
        'name': '楼盘信息',
        'path': '',
        'child': [{
          'name': '楼盘档案',
          'path': ''
        }, {
          'name': '销售价格',
          'path': ''
        }, {
          'name': '楼盘标签',
          'path': ''
        }, {
          'name': '周边配套',
          'path': ''
        }]
      }, {
        'name': '销售状态',
        'path': '',
        'child': [{'name': '当前状态', 'path': ''}]
      }]
    }
  },
  beforeCreate () {
    let buildId = sessionStorage.getItem('buildId')
    if (buildId) {
      this.buildId = buildId
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
#archives{
  width: 100%;
  height:calc(100% - 50px);
  position: relative;
  padding: 20px 0;
}
#archives .el-submenu .el-menu-item{
  min-width: 100%!important;
  padding-right: 20px;
}
</style>
