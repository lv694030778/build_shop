<template>
    <div id="roomPrice">
      <div>
        <span class="title">预售证号：</span>
        <span class="con">{{preSaleNum}}</span>
        <span class="title">开盘套数：</span>
        <span class="con">{{openNum}}</span>
        <span class="title">本期预售：</span>
        <span class="con">{{preSale}}</span>
        <el-button class="right" style="margin-left: 20px" size="mini" plain>导入一房一价</el-button>
        <el-button class="right" size="mini" plain @click="relation">批量关联户型图</el-button>
      </div>
      <div class="list">
        <template>
          <el-table
            ref="multipleTable,filterTable"
            :data="tableData"
            :header-cell-style="{textAlign: 'center'}"
            :cell-style="{ textAlign: 'center' }"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="房号"
              prop="number">
            </el-table-column>
            <el-table-column
              prop="build"
              label="楼栋"
              :filters="[{ text: '1', value: '1' }, { text: '2', value: '2' }]"
              :filter-method="filterBuild"
              filter-placement="bottom-end">
            </el-table-column>
            <el-table-column
              prop="door"
              label="门牌号"
              :filters="[{ text: '1', value: '1' }, { text: '2', value: '2' }]"
              :filter-method="filterDoor"
              filter-placement="bottom-end">
            </el-table-column>
            <el-table-column
              prop="floor"
              label="楼层"
              :filters="[{ text: '1', value: '1' }, { text: '2', value: '2' }]"
              :filter-method="filterFloor"
              filter-placement="bottom-end">
            </el-table-column>
            <el-table-column
              prop="use"
              label="规划用途"
              :filters="[{ text: '住宅', value: '住宅' }, { text: '公寓', value: '公寓' }]"
              :filter-method="filterUse"
              filter-placement="bottom-end">
            </el-table-column>
            <el-table-column
              prop="state"
              label="销售状态"
              :filters="[{ text: '可售', value: '可售' }, { text: '不可售', value: '不可售' }]"
              :filter-method="filterState"
              filter-placement="bottom-end">
            </el-table-column>
            <el-table-column
              prop="area"
              label="面积"
              :filters="[{ text: '111.11', value: '111.11' }, { text: '150', value: '150' }]"
              :filter-method="filterArea"
              filter-placement="bottom-end">
            </el-table-column>
            <el-table-column
              label="备案单价"
              prop="unitPrice">
            </el-table-column>
            <el-table-column
              label="备案总价"
              prop="totalPrice">
            </el-table-column>
            <el-table-column
              label="户型名称"
              prop="name">
            </el-table-column>
            <el-table-column
              label="户型"
              prop="type">
            </el-table-column>
            <el-table-column label="操作" width="160px">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="text"
                  @click="edit(scope.$index)">编辑</el-button>
                <el-button
                  size="mini"
                  type="text"
                  @click="handleDelete(scope.$index)">删除</el-button>
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
        <el-dialog title="编辑房源信息" :before-close="cancel" :visible.sync="outerVisible">
          <template v-slot:title>
            <div slot="content" class="dialog-content editTem">
              <span class="title">编辑房源信息</span>
              <el-row>
                <el-col :span="12"><div class="grid-content bg-purple-light">
                  <span class="title">房号</span>
                  <el-input v-model="editInput.number" placeholder="请输入内容"></el-input>
                </div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light">
                  <span class="title">销售状态</span>
                  <el-select v-model="editInput.state" placeholder="请选择">
                    <el-option
                      v-for="item in stateOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div></el-col>
              </el-row>
              <el-row>
                <el-col :span="12"><div class="grid-content bg-purple-light">
                  <span class="title">楼栋</span>
                  <el-input v-model="editInput.build" placeholder="请输入内容"></el-input>
                </div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light">
                  <span class="title">面积</span>
                  <el-input v-model="editInput.area" placeholder="请输入内容"></el-input>
                </div></el-col>
              </el-row>
              <el-row>
                <el-col :span="12"><div class="grid-content bg-purple-light">
                  <span class="title">门牌号</span>
                  <el-input v-model="editInput.door" placeholder="请输入内容"></el-input>
                </div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light">
                  <span class="title">备案单价</span>
                  <el-input v-model="editInput.unitPrice" placeholder="请输入内容"></el-input>
                </div></el-col>
              </el-row>
              <el-row>
                <el-col :span="12"><div class="grid-content bg-purple-light">
                  <span class="title">楼层</span>
                  <el-input v-model="editInput.floor" placeholder="请输入内容"></el-input>
                </div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light">
                  <span class="title">备案总价</span>
                  <el-input v-model="editInput.totalPrice" placeholder="请输入内容"></el-input>
                </div></el-col>
              </el-row>
              <el-row>
                <el-col :span="12"><div class="grid-content bg-purple-light">
                  <span class="title">规划用途</span>
                  <el-input v-model="editInput.use" placeholder="请输入内容"></el-input>
                </div></el-col>
              </el-row>
              <el-divider></el-divider>
              <el-row>
                <el-col :span="12"><div class="grid-content bg-purple-light">
                  <span class="title">户型选择</span>
                  <el-select v-model="editInput.type" placeholder="请选择">
                    <el-option
                      v-for="item in typeOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div></el-col>
              </el-row>
              <el-divider></el-divider>
              <template>
                <el-table
                  :data="editList"
                  style="width: 100%">
                  <el-table-column
                    prop="name"
                    label="户型名称">
                  </el-table-column>
                  <el-table-column
                    prop="type"
                    label="户型">
                  </el-table-column>
                  <el-table-column
                    prop="area"
                    label="建筑面积">
                  </el-table-column>
                  <el-table-column
                    prop="picture"
                    label="户型图">
                    <template slot-scope="scope">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="scope.row.picture">
                        <div slot="error" class="image-slot" style="font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #f5f7fa;
    color: #909399;">
                          <i class="el-icon-picture-outline"></i>
                        </div>
                      </el-image>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </div>
          </template>
          <div slot="footer" class="dialog-footer" style="text-align: center">
            <el-button @click="cancel">取 消</el-button>
            <el-button @click="preserve">保 存</el-button>
          </div>
        </el-dialog>
      </template>
      <template>
        <el-dialog title="关联户型图" :before-close="cancel2" :visible.sync="outerVisible2">
          <template v-slot:title>
            <div slot="content" class="dialog-content relationTem">
              <span class="title">关联户型图</span>
              <el-row>
                <el-col :span="12"><div class="grid-content bg-purple-light">
                  <span class="title">户型选择</span>
                  <el-select v-model="relationType" placeholder="请选择">
                    <el-option
                      v-for="item in typeOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div></el-col>
              </el-row>
              <el-divider></el-divider>
              <template>
                <el-table
                  :data="relationList"
                  style="width: 100%">
                  <el-table-column
                    prop="name"
                    label="户型名称">
                  </el-table-column>
                  <el-table-column
                    prop="type"
                    label="户型">
                  </el-table-column>
                  <el-table-column
                    prop="area"
                    label="建筑面积">
                  </el-table-column>
                  <el-table-column
                    prop="picture"
                    label="户型图">
                    <template slot-scope="scope">
                      <el-image
                        style="width: 100px; height: 100px"
                        :src="scope.row.picture">
                        <div slot="error" class="image-slot" style="font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #f5f7fa;
    color: #909399;">
                          <i class="el-icon-picture-outline"></i>
                        </div>
                      </el-image>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </div>
          </template>
          <div slot="footer" class="dialog-footer" style="text-align: center">
            <el-button @click="cancel2">取 消</el-button>
            <el-button @click="preserve2">保 存</el-button>
          </div>
        </el-dialog>
      </template>
    </div>
</template>

<script>
export default {
  name: 'roomPrice',
  data () {
    return {
      outerVisible: false,
      outerVisible2: false,
      roomPrice: false,
      currentPage: 1,
      allTotal: 10,
      preSaleNum: '12123',
      openNum: '300',
      preSale: '200',
      multipleSelection: [],
      tableData: [{
        number: '1234',
        build: '1',
        door: '1',
        floor: '1',
        use: '住宅',
        state: '可售',
        area: '111.11',
        unitPrice: '30000',
        totalPrice: '3000000',
        name: '关山',
        type: '三室一厅'
      }
      ],
      editInput: '',
      relationType: '',
      stateOptions: [{
        value: '可售',
        label: '可售'
      }, {
        value: '不可售',
        label: '不可售'
      }],
      typeOptions: [{
        value: '三室一厅',
        label: '三室一厅'
      }, {
        value: '四室两厅',
        label: '四室两厅'
      }],
      editList: [{
        name: '户型名称',
        type: '三室一厅',
        area: '111',
        picture: ''
      }],
      relationList: [{
        name: '户型名称',
        type: '三室一厅',
        area: '111',
        picture: ''
      }]
    }
  },
  methods: {
    handleSizeChange () {},
    handleCurrentChange () {},
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    filterBuild (value, row) {
      return row.build === value
    },
    filterDoor (value, row) {
      return row.build === value
    },
    filterFloor (value, row) {
      return row.build === value
    },
    filterUse (value, row) {
      return row.build === value
    },
    filterState (value, row) {
      return row.build === value
    },
    filterArea (value, row) {
      return row.build === value
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
      this.editInput = this.tableData[$index]
      this.outerVisible = true
    },
    cancel () {
      this.outerVisible = false
    },
    preserve () {
      this.outerVisible = false
    },
    cancel2 () {
      this.outerVisible2 = false
    },
    preserve2 () {
      this.outerVisible2 = false
    },
    relation () {
      this.outerVisible2 = true
    }
  }
}
</script>

<style scoped>
  #roomPrice{
    padding: 20px 0;
  }
  #roomPrice>div{
    margin-bottom: 20px;
  }
  #roomPrice span.con{
    margin-right: 20px;
  }
  #roomPrice .right{
    float: right;
  }
  .list{
    margin-top: 20px;
  }
  .page{
    position: fixed;
    bottom: 0;
    left: 240px;
    padding-top: 10px;
    background: #fff;
    width: calc(100% - 280px);
    z-index: 2;
  }
  .el-input{
    display: inline-block;
    width: 200px;
  }
  span.title{
    display: inline-block;
    width: 100px;
  }
  .editTem>div{
    margin-top: 20px;
  }
  .relationTem>div{
    margin-top: 20px;
  }
</style>
