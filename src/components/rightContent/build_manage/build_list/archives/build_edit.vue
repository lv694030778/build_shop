<template>
    <div id="build_edit">
      <div>
        <h3 class="title">创建楼盘</h3>
        <div style="padding: 0 20px">
          <div class="demo-input demo-input-suffix">
            <span class="title"><i class="red">*</i>楼盘名</span>
            <el-input
              placeholder="请输入楼盘名"
              class="build_name"
              v-model="build_name">
            </el-input>
          </div>
          <div class="demo-input demo-input-suffix">
            <span class="title">楼盘别名</span>
            <el-input
              placeholder="请输入楼盘别名"
              class="build_name"
              v-model="build_nick">
            </el-input>
          </div>
          <div class="demo-input">
            <span class="title"><i class="red">*</i>物业类型</span>
            <el-radio v-model="wylx" label="1">住宅</el-radio>
            <el-radio v-model="wylx" label="2">别墅</el-radio>
          </div>
          <div class="demo-input">
            <span class="title">建筑类型</span>
            <el-radio v-model="jzlx" label="1">高层</el-radio>
            <el-radio v-model="jzlx" label="2">小高层</el-radio>
            <el-radio v-model="jzlx" label="3">超高层</el-radio>
            <el-radio v-model="jzlx" label="4">大平层</el-radio>
            <el-radio v-model="jzlx" label="5">洋房</el-radio>
          </div>
          <div class="demo-input">
            <span class="title"><i class="red">*</i>区域</span>
            <el-select v-model="qy" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="demo-input" style="padding:20px 0">
            <el-row>
              <el-col :span="12"><div class="grid-content">
                <span class="title"><i class="red">*</i>楼盘封面</span>
                <el-upload
                  class="avatar-uploader el-upload--picture-card"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccessLpfm"
                  :before-upload="beforeAvatarUploadLpfm">
                  <img v-if="lpfm" :src="lpfm" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div></el-col>
              <el-col :span="12"><div class="grid-content">
                <span class="title">装修标准</span>
                <el-upload
                  class="avatar-uploader el-upload--picture-card"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccessZxbz"
                  :before-upload="beforeAvatarUploadZxbz">
                  <img v-if="zxbz" :src="zxbz" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div></el-col>
            </el-row>
          </div>
          <div class="demo-input">
            <span class="title"><i class="red">*</i>楼盘地址</span>
            <el-input
              placeholder="请输入楼盘地址"
              class="build_address"
              id="build_address"
              v-model="build_address">
            </el-input>
            <el-button type="primary" @click="theLocation">定位</el-button>
            <span class="title" style="width: 64px">经度</span>
            <el-input
              placeholder="请输入经度"
              class="build_address_long"
              v-model="build_address_long">
            </el-input>
            <span class="title" style="width: 64px">纬度</span>
            <el-input
              placeholder="请输入纬度"
              class="build_address_lati"
              v-model="build_address_lati">
            </el-input>
            <!--百度地图-->
            <template>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-card shadow="never" class="mapBox1">
                    <baidu-map :center="{lng: build_address_long,lat: build_address_lati}" :zoom="zoom" @ready="handler"  @click="getLocationPoint" class="map">
<!--                      <el-button class="button" @click="setScreenfull" icon="el-icon-zoom-in" circle></el-button>-->
                      <!-- 控件将定位到地图的右上角 -->
                      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
                      <!-- 平移缩放组件 -->
<!--                      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>-->
                      <!-- 缩略图 -->
<!--                      <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>-->
                      <!-- 定位 -->
<!--                      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_LEFT" :showAddressBar="true"-->
<!--                                      :autoLocation="true"></bm-geolocation>-->
<!--                      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"-->
<!--                                   anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>-->
                      <!-- 示例位置 -->
                      <bm-view style="width: 100%; height:100%; flex: 1"></bm-view>
                      <bm-local-search :keyword="build_address" :auto-viewport="true" style="display: none"></bm-local-search>
                    </baidu-map>
                  </el-card>
                </el-col>
              </el-row>
            </template>
          </div>
          <div class="demo-input">
            <span class="title">售楼地址</span>
            <el-input
              placeholder="请输入售楼地址"
              class="shop_address"
              id="shop_address"
              v-model="shop_address">
            </el-input>
            <el-button type="primary" @click="theLocationShop">定位</el-button>
            <span class="title" style="width: 64px">经度</span>
            <el-input
              placeholder="请输入经度"
              class="shop_address_long"
              v-model="shop_address_long">
            </el-input>
            <span class="title" style="width: 64px">纬度</span>
            <el-input
              placeholder="请输入纬度"
              class="shop_address_lati"
              v-model="shop_address_lati">
            </el-input>
            <!--百度地图-->
            <template>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-card shadow="never" class="mapBox1">
                    <baidu-map :center="{lng: shop_address_long,lat: shop_address_lati}" :zoom="zoom" @ready="handlerShop"  @click="getLocationPointShop" class="map">
<!--                      <el-button class="button" @click="setScreenfull" icon="el-icon-zoom-in" circle></el-button>-->
                      <!-- 控件将定位到地图的右上角 -->
                      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
                      <!-- 示例位置 -->
                      <bm-view style="width: 100%; height:100%; flex: 1"></bm-view>
                      <bm-local-search :keyword="shop_address" :auto-viewport="true" style="display: none"></bm-local-search>
                    </baidu-map>
                  </el-card>
                </el-col>
              </el-row>
            </template>
          </div>
          <div class="demo-input demo-input-suffix">
            <span class="title" style="width: 120px;">楼盘官方电话</span>
            <el-input
              placeholder="请输入楼盘官方电话"
              class="Official_tel"
              v-model="Official_tel">
            </el-input>
          </div>
          <div class="demo-input demo-input-suffix">
            <span class="title" style="width: 120px;">开发商</span>
            <el-input
              placeholder="请输入开发商"
              class="developer"
              v-model="developer">
            </el-input>
          </div>
          <div class="demo-input demo-input-suffix">
            <span class="title" style="width: 120px;">承建商</span>
            <el-input
              placeholder="请输入承建商"
              class="contractor"
              maxlength="20"
              v-model="contractor">
            </el-input>
          </div>
          <div class="demo-input">
            <span class="title" style="width: 120px;">楼盘简介</span>
            <el-input
              style="width: 350px"
              type="textarea"
              placeholder="请输入楼盘简介"
              v-model="build_synopsis"
              maxlength="500"
              show-word-limit
            >
            </el-input>
          </div>
          <div class="demo-input demo-input-suffix">
            <span class="title" style="width: 120px;">楼盘亮点</span>
            <el-input
              placeholder="请输入楼盘亮点"
              class="highlights"
              maxlength="50"
              v-model="highlights">
            </el-input>
          </div>
          <div class="demo-input" style="text-align: center;padding-bottom: 20px">
            <el-button size="medium" @click="cancel">&nbsp;&nbsp;取消&nbsp;&nbsp;</el-button>
            <el-button type="primary" size="medium" @click="preserve">&nbsp;&nbsp;保存&nbsp;&nbsp;</el-button>
          </div>
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="preserve">保 存</el-button>
    <el-button @click="handleClose">不保存</el-button>
    <el-button type="primary" @click="handleClose">取消</el-button>
  </span>
          </el-dialog>
        </div>
      </div>
    </div>
</template>

<script>
// import screenfull from 'screenfull'
import BaiduMap from 'vue-baidu-map'
import Vue from 'vue'
Vue.use(BaiduMap, {
  // 百度地图kye:ak 需要自己申请，我这是网上找到
  ak: 'QFgFQorrB84maOZh0pPGC8kUiP0mGIhx'
})

export default {
  name: 'build_edit',
  data () {
    return {
      build_name: '',
      build_nick: '',
      wylx: '1',
      jzlx: '1',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      qy: '',
      lpfm: '',
      zxbz: '',
      build_address: '',
      build_address_long: '116.399095',
      build_address_lati: '39.916263',
      zoom: 3,
      shop_address: '',
      shop_address_long: '116.399095',
      shop_address_lati: '39.916263',
      Official_tel: '',
      developer: '',
      contractor: '',
      build_synopsis: '',
      highlights: '',
      dialogVisible: false
    }
  },
  methods: {
    handleAvatarSuccessLpfm (res, file) {
      this.lpfm = URL.createObjectURL(file.raw)
    },
    beforeAvatarUploadLpfm (file) {
      // const isJPG = file.type === 'image/jpeg'
      // const isLt2M = file.size / 1024 / 1024 < 2
    },
    handleAvatarSuccessZxbz (res, file) {
      this.zxbz = URL.createObjectURL(file.raw)
    },
    beforeAvatarUploadZxbz (file) {
      // const isJPG = file.type === 'image/jpeg'
      // const isLt2M = file.size / 1024 / 1024 < 2
    },
    // 百度地图
    handler ({BMap, map}) {
      map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
      this.pt = new BMap.Point(this.build_address_long, this.build_address_lati)
      // 中心点
      // this.build_address_long = 117.18
      // this.build_address_lati = 34.27
      this.zoom = 11.5
    },
    getLocationPoint ({BMap, e}) {
      let _this = this
      this.build_address_long = e.point.lng
      this.build_address_lati = e.point.lat
      let point = new BMap.Point(e.point.lng, e.point.lat)
      let gc = new BMap.Geocoder()
      gc.getLocation(point, function (rs) {
        _this.build_address = rs.address
      })
    },
    theLocation () {
      const getLocation = new window.BMap.Geolocation()
      var _this = this
      getLocation.getCurrentPosition((position) => {
        // position中存放所有的定位数据
        console.log(position)
        // 这里获取的是城市和省
        let city = position.address.city
        let province = position.address.province
        _this.build_address = province + city
        _this.build_address_long = position.point.lng
        _this.build_address_lati = position.point.lat
      }, () => {
        _this.$message.error('定位失败')
      }, {provider: 'baidu'})
    },
    // 百度地图
    handlerShop ({BMap, map}) {
      map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
      this.pt = new BMap.Point(this.shop_address_long, this.shop_address_lati)
      this.zoom = 11.5
    },
    getLocationPointShop ({BMap, e}) {
      let _this = this
      this.shop_address_long = e.point.lng
      this.shop_address_lati = e.point.lat
      let point = new BMap.Point(e.point.lng, e.point.lat)
      let gc = new BMap.Geocoder()
      gc.getLocation(point, function (rs) {
        _this.shop_address = rs.address
      })
    },
    theLocationShop () {
      const getLocation = new window.BMap.Geolocation()
      var _this = this
      getLocation.getCurrentPosition((position) => {
        // position中存放所有的定位数据
        console.log(position)
        // 这里获取的是城市和省
        let city = position.address.city
        let province = position.address.province
        _this.shop_address = province + city
        _this.shop_address_long = position.point.lng
        _this.shop_address_lati = position.point.lat
      }, () => {
        _this.$message.error('定位失败')
      }, {provider: 'baidu'})
    },
    cancel () {
      // console.log(this.Export.dialogVisible)
      if (this.Export.dialogVisible) {
        this.dialogVisible = true
      }
    },
    preserve (done) {
      // 保存修改
      if (this.build_name === '' || this.wylx === '' || this.qy === '' || this.lpfm === '' || this.build_address === '' || this.build_address === '') {
        this.$alert('必填项未填', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          callback: action => {
          }
        })
      } else {
        this.Export.dialogVisible = !this.Export.dialogVisible
      }
    },
    handleClose (done) {
      done()
    }
  },
  watch: {
    build_name (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.dialogVisible = true
      }
    },
    build_nick (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.dialogVisible = true
      }
    },
    wylx (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.dialogVisible = true
      }
    },
    jzlx (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.dialogVisible = true
      }
    },
    qy (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.dialogVisible = true
      }
    },
    lpfm (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.dialogVisible = true
      }
    },
    zxbz (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.dialogVisible = true
      }
    },
    build_address (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.dialogVisible = true
      }
    },
    build_address_long (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.dialogVisible = true
      }
    },
    build_address_lati (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.dialogVisible = true
      }
    },
    shop_address (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.dialogVisible = true
      }
    },
    shop_address_long (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.dialogVisible = true
      }
    },
    shop_address_lati (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.dialogVisible = true
      }
    },
    Official_tel (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.dialogVisible = true
      }
    },
    developer (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.dialogVisible = true
      }
    },
    contractor (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.dialogVisible = true
      }
    },
    build_synopsis (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.dialogVisible = true
      }
    },
    highlights (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.dialogVisible = true
      }
    }
  }
}
</script>

<style scoped>

  #build_edit{
    width:100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 20px;
    background: #fff;
  }
  #build_edit h3.title{
    font-size: 26px;
    margin-bottom: 20px;
  }
  #build_archives .build_name{
    width:200px;
  }
  .demo-input span.title{
    display: inline-block;
    width: 100px;
    position: relative;
    padding-left: 16px;
  }
  .demo-input i.red{
    color: red;
    display: inline-block;
    position: absolute;
    top:0;
    left: 0;
    font-size: 20px;
  }
  .el-input{
    width: auto;
    margin-bottom: 20px;
  }
  #build_edit .demo-input{
    margin-bottom: 20px;
  }
  .avatar-uploader{
    display: inline-block;
    text-align: center;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .demo-block {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
  }
  .el-upload--picture-card:hover, .el-upload:focus{
    border-color: #409eff;
    color: #409eff;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100%;
    height: 100%;
    line-height: 100%;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-upload{
    width: 100%;
  }
  .el-card /deep/ .el-card__body {
    padding: 0px;
  }
  .mapBox1 {
    line-height: 200px;
  }
  .map {
    opacity: 0.9;
    margin-right: 10px;
    height: 200px;
    width: 100%;
    padding-left: 100px;
  }
  .button {
    z-index: 2;
    position: absolute;
    top: 30%;
    left: 88%;
  }
</style>
