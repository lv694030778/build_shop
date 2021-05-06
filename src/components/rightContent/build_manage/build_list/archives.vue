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
                <router-link tag="h4" :to="item.path">{{item.name}}</router-link>
              </template>
              <el-menu-item-group>
                <router-link data-v-5b13172a="" role="menuitem" tabindex="-1" class="el-menu-item" tag="li" v-for="(item_c,index_c) in item.child" :index="index-index_c" :key="index_c" :to="item_c.path" style="padding-left: 40px;">{{item_c.name}}</router-link>
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
          'path': '/buildArchives'
        }, {
          'name': '销售价格',
          'path': '/sellingPrice'
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
