<template>
    <div id="forensics_list">
      <div>
        <h3 class="title">摇号列表</h3>
      </div>
      <div>
        <el-input style="display: inline-block;width: 240px;" v-model="searchVal" placeholder="输入楼盘名、批次备案名"></el-input>
        <el-button plain @click="search">搜索</el-button>
        <span class="title">筛选区域</span>
        <el-select v-model="region" placeholder="请选择">
          <el-option
            v-for="item in regionOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button class="right" type="primary" plain><router-link to="">添加取证</router-link></el-button>
      </div>
      <div class="lists">
        <template>
          <el-table
            :header-cell-style="{textAlign: 'center'}"
            :cell-style="{ textAlign: 'center' }"
            :data="forensics_list"
            style="width: 100%">
            <el-table-column
              prop="id"
              label="楼盘ID">
            </el-table-column>
            <el-table-column
              prop="name"
              label="楼盘名称">
              <template slot-scope="scope">
              <router-link to="/buildArchives" @click.native="edit(forensics_list[scope.$index].id)">{{scope.row.name}}</router-link>
              </template>
            </el-table-column>
            <el-table-column
              prop="batch"
              label="批次">
            </el-table-column>
            <el-table-column
              prop="recordName"
              label="批次备案名">
              <template slot-scope="scope">
                <router-link to="/evidenceHead" @click.native="edit(forensics_list[scope.$index].id,scope.$index)">{{scope.row.recordName}}</router-link>
              </template>
            </el-table-column>
            <el-table-column
              prop="region"
              label="区域">
            </el-table-column>
            <el-table-column
              prop="salesScope"
              label="销售范围">
            </el-table-column>
            <el-table-column
              prop="preSaleNum"
              label="预售证号">
            </el-table-column>
            <el-table-column
              prop="getTime"
              label="取证时间">
            </el-table-column>
            <el-table-column
              prop="openTime"
              label="开盘时间">
            </el-table-column>
            <el-table-column
              prop="plannedHouseholds"
              label="规划总户数">
            </el-table-column>
            <el-table-column
              prop="buildNum"
              label="本次开盘总套数">
            </el-table-column>
            <el-table-column
              prop="canSell"
              label="可售套数">
            </el-table-column>
            <el-table-column
              prop="createTime"
              label="创建时间">
            </el-table-column>
            <el-table-column
              width="120px"
              prop=""
              label="操作">
              <template slot-scope="scope">
                <el-button type="text" @click.native="edit(forensics_list[scope.$index].id,scope.$index)"><router-link to="">编辑</router-link></el-button>
                <el-button type="text" @click="handleDelete(forensics_list[scope.$index].id,scope.$index)">删除</el-button>
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
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'forensics_list',
  data () {
    return {
      currentPage: 10,
      allTotal: 2,
      searchVal: '',
      region: '',
      forensics_list: [{
        id: '1',
        name: '某楼盘',
        batch: '第一批次',
        recordName: '第一批次',
        region: '北京',
        salesScope: '9栋',
        preSaleNum: '11111',
        getTime: '0000-00-00',
        openTime: '0000-00-00',
        plannedHouseholds: '200',
        buildNum: '300',
        canSell: '100',
        createTime: '0000-00-00 00:00:00'
      }],
      regionOptions: [{
        value: '选项1',
        label: '这个区'
      }, {
        value: '选项2',
        label: '那个区'
      }]
    }
  },
  methods: {
    search () {},
    edit (id, index) {
    },
    handleDelete (id, index) {
      let that = this
      this.$confirm('是否确定删除', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let buildList = that.forensics_list
        buildList.splice(index, 1)
        that.forensics_list = buildList
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
    handleSizeChange () {},
    handleCurrentChange () {}
  }
}
</script>

<style scoped>
  #forensics_list {
    padding: 20px;
    display:inline-block;
    height:calc(100% - 70px);
    width:100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    overflow-y: auto;
    border-right: 1px solid #ddd;
  }
  #forensics_list h3.title{
    font-size: 26px;
    display: inline-block;
  }
  #forensics_list>div{
    margin-bottom: 20px;
  }
  span.title{margin-left: 20px}
  .right{float: right}
  .lists{
    padding-bottom: 70px;
  }
  .page{
    position: fixed;
    bottom: 0;
    left: 220px;
    padding-bottom: 20px;
    padding-top: 10px;
    background: #fff;
    width: calc(100% - 240px);
    z-index: 2;
  }
</style>
