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
                <router-link data-v-5b13172a="" role="menuitem" tabindex="-1" class="el-menu-item" tag="li" v-for="(item_c,index_c) in item.child" :index="index-index_c" :key="index_c" :to="item_c.path" style="padding-left: 40px;">{{item_c.name}} <span v-if="item_c.status">：{{item_c.status}}</span><span v-if="item_c.number">({{item_c.number}})</span></router-link>
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
      Status: '售罄',
      number: '11',
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
          'path': '/buildTags'
        }, {
          'name': '周边配套',
          'path': '/periphery'
        }]
      }, {
        'name': '销售状态',
        'path': '',
        'child': [{'name': '当前状态', 'path': '/salesStatus', status: this.Status}]
      }, {
        'name': '图片信息',
        'path': '',
        'child': [{'name': '户型图', 'path': '/houseLayout', number: this.number}]
      }, {
        'name': '置业顾问',
        'path': '/dynatown',
        'child': []
      }]
    }
  },
  beforeCreate () {
    this.buildId = this.Export.buildId
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
