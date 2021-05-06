<template>
    <div id="property">
      <div>
        <h3 class="title">物业信息</h3>
        <el-button @click="preserve" class="right" plain size="medium">&nbsp;&nbsp;保存&nbsp;&nbsp;</el-button>
        <el-button @click="cancel" class="right" style="margin-right: 20px" plain size="medium">&nbsp;&nbsp;取消&nbsp;&nbsp;</el-button>
        <el-dialog
          title="提示"
          :visible.sync="property"
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
        <span class="title">住宅物业费：</span>
        <el-input
          placeholder="请输入"
          class="propertyFee"
          v-model="propertyFee">
        </el-input>
        <span>元/㎡/月</span>
        <p class="tips">根据楼盘物业类型进行填写，支持多个物业类型进行展示</p>
      </div>
      <div class="demo-input">
        <span class="title">物业公司：</span>
        <template>
          <el-select v-model="propertyCompany" placeholder="请选择">
            <el-option
              v-for="item in propertyOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
        <p class="tips">若出现搜索无匹配结果，可进入机构管理，新增物业公司信息</p>
      </div>
      <div class="demo-input">
        <span class="title">总车位数：</span>
        <el-input
          placeholder="请输入"
          class="parking"
          v-model="parking">
        </el-input>
        <span>个</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'property',
  data () {
    return {
      propertyFee: '',
      propertyCompany: '',
      propertyOptions: [
        {
          value: '选项2',
          label: '双皮奶'
        }
      ],
      parking: '',
      property: false
    }
  },
  methods: {
    cancel () {
      if (this.Export.property) {
        this.property = true
      }
    },
    preserve (done) {
      // 保存修改
      this.Export.property = false
      this.property = false
    },
    notServe () {
      this.property = false
      this.Export.property = false
      window.history.go(-1)
    },
    handleClose () {
      this.property = false
    }
  },
  watch: {
    propertyFee (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.property = true
      }
    },
    propertyCompany (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.property = true
      }
    },
    parking (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.property = true
      }
    }
  }
}
</script>

<style scoped>
  #property{
    width:calc(100% - 150px);
    position: absolute;
    top: 0;
    left: 150px;
    padding: 20px 20px;
    background: #fff;
  }
  #property h3.title{
    font-size: 26px;
    margin-bottom: 20px;
    display: inline-block;
  }
  #property .right{
    float: right;
  }
  #property .demo-input{
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
