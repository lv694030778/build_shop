<template>
  <div id="build_plan">
    <div>
      <h3 class="title">楼盘档案-建筑规划</h3>
      <el-button @click="preserve" class="right" plain size="medium">&nbsp;&nbsp;保存&nbsp;&nbsp;</el-button>
      <el-button @click="cancel" class="right" style="margin-right: 20px" plain size="medium">&nbsp;&nbsp;取消&nbsp;&nbsp;</el-button>
      <el-dialog
        title="提示"
        :visible.sync="build_plan"
        width="30%"
        :before-close="handleClose">
        <span>本次有新改动，是否保存</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="preserve">保 存</el-button>
    <el-button @click="notServe">不保存</el-button>
    <el-button @click="handleClose">取消</el-button>
  </span>
      </el-dialog>
    </div>
    <div class="demo-input">
      <span class="title">最小户型面积：</span>
      <el-input
        placeholder="请输入"
        class="minArea"
        v-model="minArea">
      </el-input>
      <span>㎡</span>
      <p class="tips">本次开盘最小户型面积</p>
    </div>
    <div class="demo-input">
      <span class="title">最大户型面积：</span>
      <el-input
        placeholder="请输入"
        class="maxArea"
        v-model="maxArea">
      </el-input>
      <span>㎡</span>
      <p class="tips">本次开盘最大户型面积</p>
    </div>
    <div class="demo-input">
      <span class="title">规划户数：</span>
      <el-input
        placeholder="请输入"
        class="households"
        v-model="households">
      </el-input>
      <span>户</span>
      <p class="tips">原楼盘总户数字段，填写数字即可</p>
    </div>
    <div class="demo-input">
      <span class="title">总楼栋数：</span>
      <el-input
        placeholder="请输入"
        class="allBuilding"
        v-model="allBuilding">
      </el-input>
      <span>栋</span>
      <p class="tips">楼盘总楼栋数，填写数字即可</p>
    </div>
    <div class="demo-input">
      <span class="title">建筑结构：</span>
      <el-radio v-model="structure" label="塔楼">塔楼</el-radio>
      <el-radio v-model="structure" label="板楼">板楼</el-radio>
      <el-radio v-model="structure" label="板塔结合">板塔结合</el-radio>
      <el-radio v-model="structure" label="砖楼">砖楼</el-radio>
    </div>
    <div class="demo-input">
      <span class="title">产权年限：</span>
      <el-radio v-model="fixedYear" label="40">40</el-radio>
      <el-radio v-model="fixedYear" label="45">45</el-radio>
      <el-radio v-model="fixedYear" label="50">50</el-radio>
      <el-radio v-model="fixedYear" label="60">60</el-radio>
      <el-radio v-model="fixedYear" label="65">65</el-radio>
      <el-radio v-model="fixedYear" label="70">70</el-radio>
      <span>年</span>
      <p class="tips">根据物业类型选择对应年限</p>
    </div>
    <div class="demo-input">
      <span class="title">楼层状况：</span>
      <el-input
        placeholder="请输入"
        class="floorFondition"
        v-model="floorFondition">
      </el-input>
      <p class="tips">如11栋23F，6栋28F</p>
    </div>
    <div class="demo-input">
      <span class="title">梯户比：</span>
      <el-input
        placeholder="请输入"
        class="ladderHousehold"
        v-model="ladderHousehold">
      </el-input>
      <p class="tips">输入格式：NTN，可输入多个</p>
    </div>
    <div class="demo-input">
      <span class="title">户型：</span>
      <el-input
        placeholder="请输入"
        class="houseType"
        v-model="houseType">
      </el-input>
      <p class="tips">输入格式：2居/3居/4居</p>
    </div>
    <div class="demo-input">
      <span class="title">装修标准：</span>
      <el-radio v-model="decorationStandard" label="清水">清水</el-radio>
      <el-radio v-model="decorationStandard" label="精装">精装</el-radio>
    </div>
    <div class="demo-input">
      <span class="title">住宅容积率：</span>
      <el-input
        placeholder="请输入"
        class="plotRatio"
        v-model="plotRatio">
      </el-input>
      <p class="tips">最大输入数值不超过15</p>
    </div>
    <div class="demo-input">
      <span class="title">绿化率：</span>
      <el-input
        placeholder="请输入"
        class="greeningRate"
        v-model="greeningRate">
      </el-input>
      <span>%</span>
    </div>
    <div class="demo-input">
      <span class="title">占地面积：</span>
      <el-input
        placeholder="请输入"
        class="areaCovered"
        v-model="areaCovered">
      </el-input>
      <span>㎡</span>
    </div>
    <div class="demo-input">
      <span class="title">建筑面积：</span>
      <el-input
        placeholder="请输入"
        class="buildArea"
        v-model="buildArea">
      </el-input>
      <span>㎡</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'build_plan',
  data () {
    return {
      minArea: '',
      maxArea: '',
      households: '',
      allBuilding: '',
      structure: '板塔结合',
      fixedYear: '70',
      floorFondition: '',
      ladderHousehold: '',
      houseType: '',
      decorationStandard: '精装',
      plotRatio: '',
      greeningRate: '',
      areaCovered: '',
      buildArea: '',
      build_plan: false
    }
  },
  methods: {
    cancel () {
      if (this.Export.build_plan) {
        this.build_plan = true
      }
    },
    preserve (done) {
      // 保存修改
      this.Export.build_plan = false
      this.build_plan = false
    },
    notServe () {
      this.build_plan = false
      this.Export.build_plan = false
      window.history.go(-1)
    },
    handleClose () {
      this.build_plan = false
    }
  },
  watch: {
    minArea (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.build_plan = true
      }
    },
    maxArea (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.build_plan = true
      }
    },
    households (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.build_plan = true
      }
    },
    allBuilding (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.build_plan = true
      }
    },
    structure (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.build_plan = true
      }
    },
    fixedYear (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.build_plan = true
      }
    },
    floorFondition (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.build_plan = true
      }
    },
    ladderHousehold (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.build_plan = true
      }
    },
    houseType (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.build_plan = true
      }
    },
    decorationStandard (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.build_plan = true
      }
    },
    plotRatio (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.build_plan = true
      }
    },
    greeningRate (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.build_plan = true
      }
    },
    areaCovered (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.build_plan = true
      }
    },
    buildArea (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.build_plan = true
      }
    }
  }
}
</script>

<style scoped>
  #build_plan{
    width:calc(100% - 150px);
    position: absolute;
    top: 0;
    left: 150px;
    padding: 20px 20px;
    background: #fff;
  }
  #build_plan h3.title{
    font-size: 26px;
    margin-bottom: 20px;
    display: inline-block;
  }
  #build_plan .right{
    float: right;
  }
  #build_plan .demo-input{
    margin-bottom: 40px;
  }
  .demo-input span.title{
    display: inline-block;
    width: 120px;
    font-weight: bold;
    font-size: 16px;
    position: relative;
    text-align: right;
    color: rgb(96,98,105);
  }
  .demo-input .el-input{
    width: 400px;
  }
  .demo-input p.tips{
    font-size: 14px;
    color: rgb(153,153,153);
    padding-left: 120px;
    margin-top: 10px;
  }
</style>
