<template>
  <div id="build_archives">
    <div>
      <h3 class="title grid-content">楼盘档案</h3>
      <div class="grid-content">
        <h3 style="display: inline-block;margin-right: 20px">基本信息</h3>
        <router-link to="/buildEdit" tag="el-button" class="el-button--medium">编辑</router-link>
      </div>
      <el-row>
        <el-col :span="12"><div class="grid-content">
          <span>楼盘名：</span>
          <span>啊实打实的</span>
        </div></el-col>
        <el-col :span="12"><div class="grid-content">
          <span>楼盘别名：</span>
          <span>啊实打实的</span>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content">
          <span>物业类型：</span>
          <span>啊实打实的</span>
        </div></el-col>
        <el-col :span="12"><div class="grid-content">
          <span>建筑类型：</span>
          <span>啊实打实的</span>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content">
          <span>区域：</span>
          <span>啊实打实的</span>
        </div></el-col>
      </el-row>

      <el-row>
        <el-col :span="12"><div class="grid-content">
          <span>楼盘封面</span>
          <div>
            <img class="image" src="data:image/jpeg;base64,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" alt="">
          </div>
        </div></el-col>
        <el-col :span="12"><div class="grid-content">
          <el-row>
            <el-col :span="24"><div class="grid-content">
              <span>楼盘地址：</span>
              <span>啊实打实的</span>
            </div></el-col>
            <el-col :span="24"><div class="grid-content">
              <span>售楼地址：</span>
              <span>啊实打实的</span>
            </div></el-col>
            <el-col :span="24"><div class="grid-content">
              <span>开发商：</span>
              <span>啊实打实的</span>
            </div></el-col>
            <el-col :span="24"><div class="grid-content">
              <span>承建商：</span>
              <span>啊实打实的</span>
            </div></el-col>
          </el-row>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content">
          <span>装修标准</span>
          <div>
            <img class="image" src="data:image/jpeg;base64,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" alt="">
          </div>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="24"><div class="grid-content">
          <span>楼盘亮点：</span>
          <span>毫无亮点</span>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="24"><div class="grid-content">
          <span>楼盘简介：</span>
          <span>毫无亮点</span>
        </div></el-col>
      </el-row>
      <div class="grid-content" style="margin-top: 20px">
        <h3 style="display: inline-block;margin-right: 20px">建筑规划</h3>
        <router-link to="/buildEdit" tag="el-button" class="el-button--medium">编辑</router-link>
      </div>
      <el-row>
        <el-col :span="12"><div class="grid-content">
          <span>最小户型面积：</span>
          <span>毫无亮点</span>
        </div></el-col>
        <el-col :span="12"><div class="grid-content">
          <span>最大户型面积：</span>
          <span>毫无亮点</span>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content">
          <span>规划户数：</span>
          <span>毫无亮点</span>
        </div></el-col>
        <el-col :span="12"><div class="grid-content">
          <span>总楼栋数：</span>
          <span>毫无亮点</span>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content">
          <span>建筑结构：</span>
          <span>毫无亮点</span>
        </div></el-col>
        <el-col :span="12"><div class="grid-content">
          <span>产权年限：</span>
          <span>毫无亮点</span>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content">
          <span>楼层状况：</span>
          <span>毫无亮点</span>
        </div></el-col>
        <el-col :span="12"><div class="grid-content">
          <span>梯户比：</span>
          <span>毫无亮点</span>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content">
          <span>户型：</span>
          <span>毫无亮点</span>
        </div></el-col>
        <el-col :span="12"><div class="grid-content">
          <span>装修标准：</span>
          <span>毫无亮点</span>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content">
          <span>容积率：</span>
          <span>毫无亮点</span>
        </div></el-col>
        <el-col :span="12"><div class="grid-content">
          <span>绿化率：</span>
          <span>毫无亮点</span>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content">
          <span>占地面积：</span>
          <span>毫无亮点</span>
        </div></el-col>
        <el-col :span="12"><div class="grid-content">
          <span>建筑面积：</span>
          <span>毫无亮点</span>
        </div></el-col>
      </el-row>
      <div class="grid-content" style="margin-top: 20px">
        <h3 style="display: inline-block;margin-right: 20px">物业信息</h3>
        <router-link to="/buildEdit" tag="el-button" class="el-button--medium">编辑</router-link>
      </div>
      <el-row>
        <el-col :span="12"><div class="grid-content">
          <span>物业费：</span>
          <span>毫无亮点</span>
        </div></el-col>
        <el-col :span="12"><div class="grid-content">
          <span>物业公司：</span>
          <span>毫无亮点</span>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content">
          <span>车位数：</span>
          <span>毫无亮点</span>
        </div></el-col>
      </el-row>
    </div>
    <router-view style="width: 100%;height: 100%"></router-view>
  </div>
</template>

<script>
export default {
  name: 'build_archives',
  data () {
    return {}
  }
}
</script>

<style scoped>
#build_archives{
  width:calc(100% - 150px);
  height: 100%;
  position: absolute;
  top: 20px;
  left: 150px;
  padding: 0 20px;
}
#build_archives h3.title{
  font-size: 26px;
}
#build_archives .grid-content{
  margin-bottom: 20px;
}
#build_archives  .image{
  width: 180px;
  height: 100px;
  margin-top: 20px;
}
</style>
