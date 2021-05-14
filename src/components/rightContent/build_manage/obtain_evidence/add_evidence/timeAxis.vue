<template>
    <div id="timeAxis">
      <el-row v-for="(item,index) in timer" v-show="item.obtainShow" :key="item.title">
        <el-col :span="12"><div class="grid-content bg-purple-light">
          <span class="title">{{item.title}}</span>
          <el-date-picker
            v-model="item.value"
            type="date"
            @change="timeChange"
            placeholder="选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
          <div class="operation">
            <i class="el-icon-caret-top" @click="upThis(index)"></i>
            <i class="el-icon-caret-bottom" @click="downThis(index)"></i>
          </div>
          <div class="operation">
            <i class="el-icon-delete" @click="handleDelet(index)"></i>
          </div>
        </div></el-col>
      </el-row>
      <div>
        <el-button plain @click="addNode">新增节点</el-button>
      </div>
      <div>
        <el-button plain @click="preserve">保 存</el-button>
        <el-button plain @click="cancel">取 消</el-button>
      </div>
      <el-dialog
        title="保存提示"
        :visible.sync="timeAxis"
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
  name: 'timeAxis',
  data () {
    return {
      timeAxis: false,
      timer: [{
        index: 1,
        title: '取证',
        value: '',
        obtainShow: true
      }, {
        index: 2,
        title: '登记',
        value: '',
        obtainShow: true
      }, {
        index: 3,
        title: '开盘',
        value: '',
        obtainShow: true
      }, {
        index: 4,
        title: '选房',
        value: '',
        obtainShow: true
      }],
      obtain: '',
      register: '',
      opening: '',
      selection: '',
      pickerOptions: {}
    }
  },
  methods: {
    addNode () {
      let timer = this.timer
      for (let i = 0; i < timer.length; i++) {
        if (!timer[i].obtainShow) {
          timer[i].obtainShow = true
          this.$set(this.timer, timer)
          break
        }
      }
    },
    preserve () {
      this.timeAxis = false
      this.Export.timeAxis = false
      history.go(-1)
    },
    notServe () {
      this.timeAxis = false
      this.Export.timeAxis = false
      history.go(-1)
    },
    cancel () {
      if (this.Export.timeAxis) {
        this.timeAxis = true
      }
    },
    handleClose () {
      this.timeAxis = false
    },
    upThis (index) {
      if (index > 0) {
        let newIndex = index - 1
        let timer = this.timer
        let item = timer[index]
        let item2 = timer[newIndex]
        this.$set(this.timer, newIndex, item)
        this.$set(this.timer, index, item2)
      } else {
        this.$message({
          message: '当前时间已在最前',
          type: 'warning'
        })
      }
    },
    downThis (index) {
      if (index < 3) {
        let newIndex = parseInt(index) + 1
        let timer = this.timer
        let item = timer[index]
        let item2 = timer[newIndex]
        this.$set(this.timer, newIndex, item)
        this.$set(this.timer, index, item2)
      } else {
        this.$message({
          message: '当前时间已在最后',
          type: 'warning'
        })
      }
    },
    handleDelet (index) {
      let timer = this.timer[index]
      timer.obtainShow = false
      this.$set(this.timer, index, timer)
    },
    timeChange () {
      this.Export.timeAxis = true
    }
  }
}
</script>

<style scoped>
#timeAxis{
  padding: 20px 0;
}
#timeAxis>div{
  margin-bottom: 20px;
}
#timeAxis .operation{
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px
}
#timeAxis .operation i{
  display: block;
  cursor: pointer;
}
</style>
