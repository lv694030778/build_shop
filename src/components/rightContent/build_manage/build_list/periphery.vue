<template>
    <div id="periphery">
      <div>
        <h3 class="title">周边配套</h3>
        <el-button @click="preserve" class="right" style="margin-right: 20px" plain size="medium">保 存</el-button>
      </div>
      <div>
        <span class="title">楼盘</span>
        <span>{{build_name}}</span>
        <el-button @click="getPeriphery" class="" plain size="mini">获取周边配套</el-button>
      </div>
      <div>
        <span class="title">楼盘id</span>
        <span>{{build_id}}</span>
      </div>
      <div>
        <span class="title">地铁交通</span>
        <el-input
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 6}"
          placeholder="请输入内容"
          v-model="traffic">
        </el-input>
      </div>
      <div>
        <span class="title">公交站点</span>
        <el-input
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 6}"
          placeholder="请输入内容"
          v-model="station">
        </el-input>
      </div>
      <div>
        <span class="title">学校</span>
        <el-input
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 6}"
          placeholder="请输入内容"
          v-model="school">
        </el-input>
      </div>
      <div>
        <span class="title">医院</span>
        <el-input
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 6}"
          placeholder="请输入内容"
          v-model="hospital">
        </el-input>
      </div>
      <div>
        <span class="title">银行</span>
        <el-input
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 6}"
          placeholder="请输入内容"
          v-model="bank">
        </el-input>
      </div>
      <div>
        <span class="title">美食</span>
        <el-input
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 6}"
          placeholder="请输入内容"
          v-model="fineFood">
        </el-input>
      </div>
      <div>
        <span class="title">购物中心</span>
        <el-input
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 6}"
          placeholder="请输入内容"
          v-model="shoppingMall">
        </el-input>
      </div>
      <div>
        <span class="title">公园</span>
        <el-input
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 6}"
          placeholder="请输入内容"
          v-model="park">
        </el-input>
      </div>
    </div>
</template>

<script>
export default {
  name: 'periphery',
  data () {
    return {
      periphery: false,
      build_name: '帝合御景',
      build_id: '123456',
      traffic: '',
      station: '',
      school: '',
      hospital: '',
      bank: '',
      fineFood: '',
      shoppingMall: '',
      park: ''
    }
  },
  methods: {
    preserve () {
      this.Export.periphery = false
    },
    getPeriphery () {
      this.Export.periphery = false
    }
  },
  watch: {
    traffic (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.periphery = true
      }
    },
    station (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.periphery = true
      }
    },
    school (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.periphery = true
      }
    },
    hospital (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.periphery = true
      }
    },
    bank (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.periphery = true
      }
    },
    fineFood (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.periphery = true
      }
    },
    shoppingMall (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.periphery = true
      }
    },
    park (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.periphery = true
      }
    }
  }
}
</script>

<style scoped>
  #periphery{
    width:calc(100% - 150px);
    position: absolute;
    top: 0;
    left: 150px;
    padding: 20px 20px;
    background: #fff;
  }
  #periphery>div{
    margin-bottom: 20px;
  }
  #periphery h3.title{
    font-size: 26px;
    margin-bottom: 20px;
    display: inline-block;
  }
  #periphery .right{float: right}
  #periphery span.title{
    display: inline-block;
    width: 100px;
  }
  #periphery .el-textarea{display: inline-block;width: 500px;}
</style>
