<template>
    <div id="dynatown">
      <div>
        <h3 class="title">置业顾问 <span class="name">楼盘名称</span></h3>
        <el-button plain size="mini" class="right">发布到前端</el-button>
      </div>
      <div>
        <el-input
          style="display: inline-block;width: 200px"
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="searchVal">
        </el-input>
        <el-button plain @click="search">搜 索</el-button>
        <span class="title">筛选团队类型</span>
        <el-select v-model="teamType" placeholder="请选择">
          <el-option
            v-for="item in teamTypeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="title">筛选状态</span>
        <el-select v-model="state" placeholder="请选择">
          <el-option
            v-for="item in stateOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="lists">
        <template>
          <el-table
            :data="dynatownList"
            :header-cell-style="{textAlign: 'center'}"
            :cell-style="{ textAlign: 'center' }"
            style="width: 100%">
            <el-table-column
              width="76px"
              prop="id"
              label="置业顾问ID">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="showName"
              label="工作展示名">
            </el-table-column>
            <el-table-column
              width="100px"
              sortable
              prop="joinTime"
              label="入住时间">
            </el-table-column>
            <el-table-column
              prop="joinBuild"
              label="入住楼盘">
            </el-table-column>
            <el-table-column
              prop="phone"
              label="手机号">
            </el-table-column>
            <el-table-column
              prop="corporateName"
              label="公司名称">
            </el-table-column>
            <el-table-column
              prop="team"
              label="团队类型">
            </el-table-column>
            <el-table-column
              prop="userId"
              label="用户id">
            </el-table-column>
            <el-table-column
              width="140px"
              prop="sort"
              sortable
              label="排序值">
              <template slot-scope="scope">
                <el-input style="float: left;width: 40px;" v-model="dynatownList[scope.$index].sort" :id="'sort'+dynatownList[scope.$index].id" placeholder="请输入内容"></el-input>
                <el-button size="" @click="setSort(dynatownList[scope.$index].id,scope.$index)">确定</el-button>
              </template>
            </el-table-column>
            <el-table-column
              prop="active"
              width="90px"
              sortable
              label="活跃度">
            </el-table-column>
            <el-table-column
              prop="gold"
              width="90px"
              sortable
              label="金币数">
            </el-table-column>
            <el-table-column
              prop="state"
              label="上架状态">
              <template slot-scope="scope">
                <el-switch
                  style="padding-left: 16px"
                  v-model="dynatownList[scope.$index].state"
                  active-color="#13ce66"
                  @change="changeState($event, scope.$index)">
                </el-switch>
              </template>
            </el-table-column>
            <el-table-column
              prop=""
              label="操作">
              <template slot-scope="scope">
              <el-button type="text" @click="showQr(scope.$index)">查看二维码</el-button>
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
      <el-dialog title="微信二维码" :visible.sync="dialogTableVisible">
        <el-image
          style="width: 100px; height: 100px"
          :src="qrCode"></el-image>
      </el-dialog>
    </div>
</template>

<script>
export default {
  name: 'dynatown',
  data () {
    return {
      dialogTableVisible: false,
      qrCode: '',
      currentPage: 10,
      allTotal: 1,
      searchVal: '',
      teamType: '',
      state: '',
      dynatownList: [{
        id: '123123',
        name: '张三',
        showName: '张三',
        joinTime: '0000-00-00 00:00:00',
        joinBuild: '万达广场',
        phone: '12312312312',
        corporateName: '万达集团',
        team: '自销团队',
        userId: '111111',
        sort: '',
        active: '1000',
        gold: '1000',
        state: true,
        qr: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }],
      stateOptions: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '黄金糕'
      }],
      teamTypeOptions: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '黄金糕'
      }]
    }
  },
  methods: {
    search () {},
    setSort (id, $index) {},
    changeState ($event, index) {
      let dynatownList = this.dynatownList[index]
      let msg = ''
      let that = this
      let title = ''
      if ($event) {
        title = '上架提示'
        msg = '是否确认上架此置业顾问'
      } else {
        title = '下架提示'
        msg = '是否确认下架此置业顾问'
      }
      this.$confirm(msg, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: ''
      }).then(() => {
        dynatownList.state = $event
        that.$set(that.dynatownList, index, dynatownList)
      }).catch(() => {
        dynatownList.state = !$event
        that.$set(that.dynatownList, index, dynatownList)
      })
    },
    showQr (index) {
      this.qrCode = this.dynatownList[index].qr
      this.dialogTableVisible = true
    }
  },
  watch: {}
}
</script>

<style scoped>
  #dynatown{
    width:calc(100% - 150px);
    position: absolute;
    top: 0;
    left: 150px;
    padding: 20px 20px;
    background: #fff;
  }
  #dynatown>div{
    margin-bottom: 10px;
  }
  #dynatown h3.title{
    font-size: 26px;
    margin-bottom: 20px;
    display: inline-block;
  }
  #dynatown .right{float: right}
  #dynatown h3.title .name{
    font-size: 16px;
    font-weight: 500;
  }
  #dynatown span.title{
    display: inline-block;
    margin-left: 20px;
  }
  .lists{
    padding-bottom: 70px;
  }
  .page{
    position: fixed;
    bottom: 0;
    left: 340px;
    padding-bottom: 20px;
    padding-top: 10px;
    background: #fff;
    width: calc(100% - 340px);
    z-index: 2;
  }

</style>
