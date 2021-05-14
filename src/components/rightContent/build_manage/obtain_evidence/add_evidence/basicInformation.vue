<template>
    <div id="information">
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
          <span class="title">楼盘名称</span>
          <el-select v-model="name" placeholder="请选择">
            <el-option
              v-for="item in nameOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">
          <span class="title">选择批次</span>
          <el-select v-model="batch" placeholder="请选择">
            <el-option
              v-for="item in batchOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
          <span class="title">备案名</span>
          <el-input v-model="recordName" placeholder="请输入内容"></el-input>
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">
          <span class="title">取证日期</span>
          <el-date-picker
            v-model="getTime"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1">
          </el-date-picker>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
          <span class="title">预售证号</span>
          <el-input v-model="preSaleNum" placeholder="请输入内容"></el-input>
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">
          <span class="title">预计开盘日期</span>
          <el-date-picker
            v-model="openTime"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
          <span class="title">房屋坐落</span>
          <el-input v-model="location" placeholder="请输入内容"></el-input>
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">
          <span class="title">预计交房时间</span>
          <el-date-picker
            v-model="deliveryTime"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
          <span class="title">预售楼栋</span>
          <el-input v-model="preSale" placeholder="请输入内容"></el-input>
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">
          <span class="title">房源套数</span>
          <el-input v-model="resources" placeholder="请输入内容"></el-input>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
          <span class="title">房屋用途性质</span>
          <el-checkbox-group v-model="purpose">
            <el-checkbox label="住宅"></el-checkbox>
            <el-checkbox label="地下室"></el-checkbox>
            <el-checkbox label="楼阁"></el-checkbox>
          </el-checkbox-group>
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">
          <span class="title">主力户型</span>
          <el-input v-model="resources" placeholder="请输入内容"></el-input>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
          <span class="title">预售总建筑面积</span>
          <el-input v-model="overallFloorage" placeholder="请输入内容"></el-input>
          <span>㎡</span>
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">
          <span class="title">验资金额</span>
          <el-input v-model="verifyCapital" placeholder="请输入内容"></el-input>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
          <span class="title">预售地下室面积</span>
          <el-input v-model="basementArea" placeholder="请输入内容"></el-input>
          <span>㎡</span>
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">
          <span class="title">售楼地址</span>
          <el-input v-model="sellAddress" placeholder="请输入内容"></el-input>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
          <span class="title">预售阁楼面积</span>
          <el-input v-model="loftArea" placeholder="请输入内容"></el-input>
          <span>㎡</span>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
          <span class="title">预售住房价格</span>
          <el-input v-model="homePrices" placeholder="请输入内容"></el-input>
          <span>元/平方米</span>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
          <span class="title">预售地下室价格</span>
          <el-input v-model="basementPrices" placeholder="请输入内容"></el-input>
          <span>元/平方米</span>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
          <span class="title">预售阁楼价格</span>
          <el-input v-model="loftPrices" placeholder="请输入内容"></el-input>
          <span>元/平方米</span>
        </div></el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 20px">
        <el-col :span="12" :offset="6"><div class="grid-content bg-purple">
          <el-button plain @click="preserve">保 存</el-button>
          <el-button plain @click="cancel">取 消</el-button>
        </div></el-col>
      </el-row>
      <el-dialog
        title="保存提示"
        :visible.sync="basicInformation"
        width="30%"
        :before-close="handleClose"
        append-to-body>
        <span>本次有新改动，是否保存</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="preserve">保 存</el-button>
    <el-button @click="notServe">不保存</el-button>
    <el-button @click="handleClose">取消</el-button>
  </span>
      </el-dialog>
    </div>
</template>

<script>
export default {
  name: 'basicInformation',
  data () {
    return {
      basicInformation: false,
      name: '全部',
      batch: '1',
      recordName: '',
      getTime: '',
      preSaleNum: '',
      openTime: '',
      location: '',
      deliveryTime: '',
      preSale: '',
      resources: '',
      purpose: ['住宅', '地下室', '楼阁'],
      overallFloorage: '',
      verifyCapital: '',
      basementArea: '',
      sellAddress: '',
      loftArea: '',
      homePrices: '',
      basementPrices: '',
      loftPrices: '',
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      },
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() > Date.now() - 8.64e6
        }
      },
      nameOptions: [{
        value: '选项1',
        label: '全部'
      }, {
        value: '选项2',
        label: '其他'
      }],
      batchOptions: [{
        value: '选项1',
        label: '1'
      }, {
        value: '选项2',
        label: '2'
      }]
    }
  },
  methods: {
    preserve () {
      this.basicInformation = false
      this.Export.basicInformation = false
      history.go(-1)
    },
    cancel () {
      if (this.Export.basicInformation) {
        this.basicInformation = true
      } else {
        history.go(-1)
      }
    },
    notServe () {
      this.basicInformation = false
      this.Export.basicInformation = false
      history.go(-1)
    },
    handleClose () {
      this.basicInformation = false
    }
  },
  watch: {
    name (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    },
    batch (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    },
    recordName (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    },
    getTime (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    },
    preSaleNum (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    },
    openTime (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    },
    location (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    },
    deliveryTime (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    },
    preSale (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    },
    resources (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    },
    purpose (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    },
    overallFloorage (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    },
    verifyCapital (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    },
    basementArea (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    },
    sellAddress (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    },
    loftArea (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    },
    homePrices (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    },
    basementPrices (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    },
    loftPrices (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.basicInformation = true
      }
    }
  }
}
</script>

<style scoped>
  #information{
    padding: 20px 0;
  }
  #information>div{
    margin-bottom: 20px;
  }
  span.title{
    display: inline-block;
    width: 120px;
    text-align: right;
  }
  .el-input{
    display: inline-block;
    width: 220px;
  }
  .el-checkbox-group{
    display: inline-block;
  }
</style>
