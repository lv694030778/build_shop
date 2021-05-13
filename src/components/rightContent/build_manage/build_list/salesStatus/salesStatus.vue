<template>
    <div id="salesStatus">
      <div>
        <h3 class="title">楼盘档案-销售状态</h3>
        <el-button @click="preserve" class="right" style="margin-right: 20px" plain size="medium">保 存</el-button>
      </div>
      <div>
        <span class="title"><i class="red">*</i>销售状态</span>
        <template>
          <el-radio v-model="Status" label="待售">待售</el-radio>
          <el-radio v-model="Status" label="即将预售">即将预售</el-radio>
          <el-radio v-model="Status" label="在售">在售</el-radio>
          <el-radio v-model="Status" label="售罄">售罄</el-radio>
        </template>
      </div>
    </div>
</template>

<script>
export default {
  name: 'salesStatus',
  data () {
    return {
      salesStatus: false,
      Status: '售罄'
    }
  },
  methods: {
    preserve () {
      this.Export.salesStatus = false
      this.Export.Status = this.Status
    }
  },
  watch: {
    Status (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.salesStatus = true
      }
    }
  }
}
</script>

<style scoped>
  #salesStatus{
    width:calc(100% - 150px);
    position: absolute;
    top: 0;
    left: 150px;
    padding: 20px 20px;
    background: #fff;
  }
  #salesStatus>div{
    margin-bottom: 20px;
  }
  #salesStatus h3.title{
    font-size: 26px;
    margin-bottom: 20px;
    display: inline-block;
  }
  #salesStatus .right{float: right}
  #salesStatus span.title{
    display: inline-block;
    width: 100px;
  }
</style>
