<template>
    <div id="selling_price">
      <div>
        <h3 class="title">物业信息</h3>
        <el-button @click="addPrice" class="right" style="margin-right: 20px" plain size="medium">新增价格</el-button>
      </div>
      <div>
        <div class="show">
          <span class="type">住宅</span>
          <div class="price">
            <span>前端显示</span>
            <span>住宅精装15555元/㎡</span>
            <span>住宅精装15555-16666元/㎡</span>
          </div>
        </div>
      </div>
      <div class="list">
        <template>
          <el-table
            :data="tableData"
            :header-cell-style="{textAlign: 'center'}"
            :cell-style="{ textAlign: 'center' }"
            style="width: 100%;">
            <el-table-column
              prop="number"
              label="编号">
            </el-table-column>
            <el-table-column
              prop="property"
              label="物业类型">
            </el-table-column>
            <el-table-column
              prop="building"
              label="建筑类型">
            </el-table-column>
            <el-table-column
              prop="price"
              label="价格类型">
            </el-table-column>
            <el-table-column
              prop="priceShow"
              label="价格展示">
            </el-table-column>
            <el-table-column
              prop="time"
              width="100px"
              label="创建时间">
            </el-table-column>
            <el-table-column label="设为最新开盘">
              <template slot-scope="scope">
                <el-switch
                  v-model='tableData[scope.$index].new'
                  active-color="#13ce66"
                  active-value='1'
                  inactive-value='0'
                  @change="setNew($event, scope.$index)">
                </el-switch>
              </template>
            </el-table-column>
            <el-table-column label="列表展示">
              <template slot-scope="scope">
                <el-switch
                  v-model='tableData[scope.$index].listShow'
                  active-color="#13ce66"
                  active-value='1'
                  inactive-value='0'
                  @change="listShow($event, scope.$index)">
                </el-switch>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="160px">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index)">删除</el-button>
                <el-button
                  size="mini"
                  @click="edit(scope.$index)">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
      <div class="block page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30,50,100]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="allTotal">
        </el-pagination>
      </div>
      <template>
        <el-dialog title="新增价格" :before-close="cancel" :visible.sync="outerVisible">
          <el-dialog
            title="保存提示"
            :visible.sync="innerVisible"
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
          <template v-slot:title>
            <div slot="content" class="dialog-content">
              <span class="title">新增价格</span>
              <div class="left">
                <div>
                  <span class="title">选择物业类型</span>
                  <el-select v-model="property" placeholder="请选择">
                    <el-option
                      v-for="item in propertyOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div>
                  <span class="title">选择建筑类型</span>
                  <el-select v-model="building" placeholder="请选择">
                    <el-option
                      v-for="item in buildingOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div>
                  <el-checkbox-group v-model="checked" style="display: inline-block">
                  <el-checkbox label="均价"></el-checkbox>
                  </el-checkbox-group>
                  <span> 暂不支持价格区间</span>
                  <span class="absolute">价格预览</span>
                </div>
                <div>
                  <span class="title">价格描述</span>
                  <el-select v-model="averageDescribe" placeholder="请选择">
                    <el-option
                      v-for="item in averageOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div>
                  <span class="title">楼盘价格</span>
                  <el-input
                    placeholder="请输入"
                    class="price"
                    @blur="average"
                    v-model="averagePrice">
                  </el-input>
                  <span>元/㎡</span>
                  <el-input class="absolute" v-model="averagePreview">
                  </el-input>
                </div>
                <div>
                  <el-checkbox-group v-model="checked" style="display: inline-block">
                  <el-checkbox label="单价"></el-checkbox>
                  </el-checkbox-group>
                  <span> 支持价格区间及单个价格</span>
                </div>
                <div>
                  <span class="title">价格描述</span>
                  <el-select v-model="unitDescribe" placeholder="请选择">
                    <el-option
                      v-for="item in unitOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div>
                  <span class="title">楼盘价格</span>
                  <el-input
                    placeholder="请输入"
                    class="price"
                    @blur="unit"
                    v-model="unitPrice1">
                  </el-input>
                  <span>-</span>
                  <el-input
                    placeholder="请输入"
                    class="price"
                    @blur="unit"
                    v-model="unitPrice2">
                  </el-input>
                  <span>元/㎡</span>
                  <el-input class="absolute" v-model="unitPreview">
                  </el-input>
                </div>
                <div>
                  <el-checkbox-group v-model="checked" style="display: inline-block">
                  <el-checkbox label="总价"></el-checkbox>
                  </el-checkbox-group>
                  <span> 支持价格区间及单个价格</span>
                </div>
                <div>
                  <span class="title">价格描述</span>
                  <el-select v-model="totalDescribe" placeholder="请选择">
                    <el-option
                      v-for="item in totalOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div>
                  <span class="title">楼盘价格</span>
                  <el-input
                    placeholder="请输入"
                    class="price"
                    @blur="total"
                    v-model="totalPrice1">
                  </el-input>
                  <span>-</span>
                  <el-input
                    placeholder="请输入"
                    class="price"
                    @blur="total"
                    v-model="totalPrice2">
                  </el-input>
                  <span>万/套</span>
                  <el-input class="absolute" v-model="totalPreview">
                  </el-input>
                </div>
              </div>
            </div>
          </template>
          <div slot="footer" class="dialog-footer" style="text-align: center">
            <el-button @click="cancel">取 消</el-button>
            <el-button @click="preserve">保 存</el-button>
          </div>
        </el-dialog>
      </template>
    </div>
</template>

<script>
export default {
  name: 'selling_price',
  data () {
    return {
      currentPage: 1,
      allTotal: 1,
      tableData: [{
        number: '12312',
        property: '住宅',
        building: '高层',
        price: '单价',
        priceShow: '精装99999元/㎡',
        time: '0000-00-00 00:00:00',
        new: '1',
        listShow: '1'
      }, {
        number: '12112',
        property: '住宅',
        building: '高层',
        price: '单价',
        priceShow: '精装19999元/㎡',
        time: '0000-00-00 00:00:00',
        new: '0',
        listShow: '0'
      }],
      outerVisible: false,
      innerVisible: false,
      isChange: false,
      checked: ['均价', '单价', '总价'],
      property: '',
      propertyOptions: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '黄金糕'
      }],
      building: '',
      buildingOptions: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '黄金糕'
      }],
      averageDescribe: '',
      averageOptions: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '黄金糕'
      }],
      averagePrice: '',
      unitDescribe: '',
      unitOptions: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '黄金糕'
      }],
      unitPrice1: '',
      unitPrice2: '',
      totalDescribe: '',
      totalOptions: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '黄金糕'
      }],
      totalPrice1: '',
      totalPrice2: '',
      averagePreview: '',
      unitPreview: '',
      totalPreview: ''
    }
  },
  methods: {
    addPrice () {
      this.outerVisible = true
    },
    setNew ($event, index) {
      let that = this
      let newEvent = ''
      let msg = ''
      let title = ''
      if ($event === '1') {
        newEvent = '0'
        msg = '是否确认将此价格设为最新开盘'
        title = '设为最新开盘提醒'
      } else if ($event === '0') {
        newEvent = '1'
        msg = '是否确认取消将此价格设为最新开盘'
        title = '取消最新开盘提醒'
      }
      this.$confirm(msg, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: ''
      }).then(() => {
        let buildList = that.tableData[index]
        buildList.new = $event
        that.$set(that.tableData, index, buildList)
      }).catch(() => {
        let buildList = that.tableData[index]
        buildList.new = newEvent
        that.$set(that.tableData, index, buildList)
      })
    },
    listShow ($event, index) {
      let that = this
      let newEvent = ''
      let msg = ''
      let title = ''
      if ($event === '1') {
        newEvent = '0'
        msg = '是否确认将此价格展示在列表'
        title = '列表展示提醒'
      } else if ($event === '0') {
        newEvent = '1'
        msg = '是否确认取消将此价格展示在列表'
        title = '取消列表展示提醒'
      }
      this.$confirm(msg, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: ''
      }).then(() => {
        let buildList = that.tableData[index]
        buildList.listShow = $event
        that.$set(that.tableData, index, buildList)
      }).catch(() => {
        let buildList = that.tableData[index]
        buildList.listShow = newEvent
        that.$set(that.tableData, index, buildList)
      })
    },
    handleDelete ($index) {
      let that = this
      this.$confirm('是否确定删除', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let buildList = that.tableData
        buildList.splice($index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    edit ($index) {
      this.outerVisible = true
    },
    handleSizeChange (val) {
      console.log(val)
    },
    handleCurrentChange (val) {
      console.log(val)
    },
    average () {
      if (this.averagePrice !== '') {
        this.averagePreview = this.building + this.averagePrice + '元/㎡'
      } else {
        this.averagePreview = ''
      }
    },
    unit () {
      if (this.unitPrice1 !== '' && this.unitPrice2 !== '') {
        this.unitPreview = this.building + this.unitPrice1 + '至' + this.unitPrice2 + '元/㎡'
      } else if (this.unitPrice1 !== '' && this.unitPrice2 === '') {
        this.unitPreview = this.building + this.unitPrice1 + '元/㎡起'
      } else {
        this.unitPreview = ''
      }
    },
    total () {
      if (this.totalPrice1 !== '' && this.totalPrice2 !== '') {
        this.totalPreview = this.building + this.totalPrice1 + '至' + this.totalPrice2 + '元/㎡'
      } else if (this.totalPrice1 !== '' && this.totalPrice2 === '') {
        this.totalPreview = this.building + this.totalPrice1 + '万/套起'
      } else {
        this.totalPreview = ''
      }
    },
    cancel () {
      if (this.isChange) {
        this.innerVisible = true
      } else {
        this.outerVisible = false
      }
    },
    preserve (done) {
      // 保存修改
      this.outerVisible = false
      this.innerVisible = false
    },
    notServe () {
      this.innerVisible = false
      this.outerVisible = false
    },
    handleClose () {
      this.innerVisible = false
    }
  },
  watch: {
    checked (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isChange = true
      }
    },
    property (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isChange = true
      }
    },
    building (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isChange = true
      }
    },
    averageDescribe (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isChange = true
      }
    },
    averagePrice (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isChange = true
      }
    },
    unitDescribe (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isChange = true
      }
    },
    unitPrice1 (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isChange = true
      }
    },
    unitPrice2 (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isChange = true
      }
    },
    totalDescribe (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isChange = true
      }
    },
    totalPrice1 (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isChange = true
      }
    },
    totalPrice2 (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isChange = true
      }
    }
  }
}
</script>

<style scoped>
  #selling_price{
    width:calc(100% - 150px);
    position: absolute;
    top: 0;
    left: 150px;
    padding: 20px 20px;
    background: #fff;
  }
  #selling_price h3.title{
    font-size: 26px;
    margin-bottom: 20px;
    display: inline-block;
  }
  #selling_price .right{float: right}
  #selling_price .show{
    border: 1px solid #ddd;
    padding: 10px;
    width: 330px;
  }
  #selling_price .price{
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
    margin-top: 20px;
  }
  #selling_price .price span{
    display: block;
    line-height: 32px;
  }
  .list{
    margin-top: 20px;
    padding-bottom: 70px;
  }
  .page{
    position: fixed;
    bottom: 0;
    left: 370px;
    padding-bottom: 20px;
    padding-top: 10px;
    background: #fff;
    width: calc(100% - 240px);
    z-index: 2;
  }
  .left>div{
    margin-top: 20px;
    position: relative;
  }
  span.title{
    display: inline-block;
    width: 100px;
  }
  .el-input{
    width: 160px;
    border: none!important;
    margin-top: 0!important;
    padding: 0!important;
  }
  #selling_price .absolute{
    position: absolute;
    top:-15px;
    right: 0;
    width: 200px;
  }
  #selling_price span.absolute{
    top:-10px;
    text-align: center;
  }
</style>
