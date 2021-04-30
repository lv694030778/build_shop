<template>
<div class="main-aside">
  <div class="content">
    <div class="firstLine">
      <h3>楼盘列表</h3>
      <router-link tag="button" to="/buildEdit" >创建楼盘</router-link>
    </div>
    <div class="secondLine">
      <div>
        <span>筛选区域</span>
        <el-select style="width:120px" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>
        <span>筛选物业类型</span>
        <el-select style="width:120px" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>
        <span>筛选销售状态</span>
        <el-select style="width:120px" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>
        <span>筛选楼盘状态</span>
        <el-select style="width:120px" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>
        <input type="text" v-model="searchVal" class="searchVal">
        <button @click="searchList" class="searchBtn">搜索</button>
      </div>
    </div>
    <div class="lists">
      <el-table
        :data="buildList"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="楼盘id">
        </el-table-column>
        <el-table-column
          prop="name"
          label="楼盘名称">
          <template slot-scope="scope">
            <router-link to="/archives" @click.native="handleArchives(scope.row.id)">{{ scope.row.name }}</router-link>
          </template>
        </el-table-column>
        <el-table-column
          prop="nick"
          label="别名">
        </el-table-column>
        <el-table-column
          prop="area"
          label="区域">
        </el-table-column>
        <el-table-column
          prop="property"
          label="物业类型">
        </el-table-column>
        <el-table-column
          prop="state"
          label="销售状态">
        </el-table-column>
        <el-table-column
          prop="buildState"
          width="120px"
          label="楼盘状态">
          <template slot-scope="scope">
          <el-switch
            v-model='buildList[scope.$index].buildState'
            active-color="#13ce66"
            active-value='1'
            inactive-value='0'
            @change="buildState($event, scope.$index)"
            active-text="上架"
            inactive-text="下架">
            inactive-color="rgb(240,240,242)">
          </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop="num"
          sortable
          width="118px"
          label="置业顾问数">
        </el-table-column>
        <el-table-column
          prop="irrigation"
          sortable
          width="118px"
          label="灌水浏览量">
        </el-table-column>
        <el-table-column
          prop="real"
          sortable
          width="118px"
          label="真实浏览量">
        </el-table-column>
        <el-table-column
          prop="time"
          sortable
          width="100px"
          label="创建时间">
        </el-table-column>
        <el-table-column label="操作" width="240px">
          <template slot-scope="scope">
            <router-link tag="el-button" to="/buildEdit" @click.native="handleEdit(scope.row.id)" class="el-button--mini">编辑</router-link>
            <el-button
              size="mini"
              @click="irrigation(scope.$index)">灌水</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
  </div>
  <router-view></router-view>
</div>
</template>
<script>

export default {
  name: 'non_commercial',
  data () {
    return {
      searchVal: '',
      value: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶',
        disabled: true
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      buildList: [{
        id: 1111111, name: '这个是1', nick: '行车自', area: '北京', property: '住宅', state: '在售', buildState: '1', num: '9999', irrigation: '3434', real: '6546', time: '1999-09-19 19:19:19'
      }, {
        id: 2222222, name: '这个是0', nick: '行车自', area: '北京', property: '住宅', state: '在售', buildState: '0', num: '2333', irrigation: '7547', real: '7457', time: '1999-09-19 19:19:00'
      }, {
        id: 3333333, name: '这个是1', nick: '行车自', area: '北京', property: '住宅', state: '在售', buildState: '1', num: '2223', irrigation: '6545', real: '7456', time: '1999-09-19 19:01:19'
      }, {
        id: 4444444, name: '这个是1', nick: '行车自', area: '北京', property: '住宅', state: '在售', buildState: '1', num: '4543', irrigation: '4565', real: '3454', time: '1999-09-19 01:19:19'
      }
      ],
      currentPage: 1,
      allTotal: 1,
      endReason: ''
    }
  },
  methods: {
    searchList: function () {
      console.log(this.searchVal)
    },
    handleEdit: function (id) {
      console.log('编辑')
      sessionStorage.setItem('buildId', id)
    },
    irrigation: function ($index) {
      console.log('灌水')
      this.endReason = ''
      const h = this.$createElement
      this.$msgbox({
        title: '浏览灌水量',
        message: h('p', null, [
          h('div', { style: 'marginBottom:10px' }, '当前灌水浏览量：' + $index + ''),
          h('span', null, '灌水数量'),
          h('input', {
            style: {
              marginLeft: '10px',
              border: '1px solid #ddd',
              height: '26px',
              width: '200px',
              padding: '0 5px'
            },
            attrs: { value: this.endReason, id: 'hinput', placeholder: '单行输入' },
            on: {input: this.handleClick}
          })
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          console.log(this.endReason)
          done()
        }
      }).then(instance => {
        this.$message({
          type: 'info',
          message: 'action: ' + instance
        })
      })
    },
    handleClick: function () {
      let hinput = document.getElementById('hinput').value
      this.endReason = hinput
    },
    handleDelete: function ($index) {
      console.log('删除')
      let that = this
      this.$confirm('是否确定删除', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let buildList = that.buildList
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
    buildState: function ($event, index) {
      let that = this
      let newEvent = ''
      let msg = ''
      let title = ''
      if ($event === '1') {
        newEvent = '0'
        msg = '是否确认上架此楼盘'
        title = '上架提示'
      } else if ($event === '0') {
        newEvent = '1'
        msg = '是否确认下架此楼盘'
        title = '下架提示'
      }
      this.$confirm(msg, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: ''
      }).then(() => {
        let buildList = that.buildList[index]
        buildList.buildState = $event
        that.$set(that.buildList, index, buildList)
      }).catch(() => {
        let buildList = that.buildList[index]
        buildList.buildState = newEvent
        that.$set(that.buildList, index, buildList)
      })
    },
    handleSizeChange (val) {
      console.log(val)
    },
    handleCurrentChange (val) {
      console.log(val)
    },
    handleArchives (id) {
      sessionStorage.setItem('buildId', id)
    }
  },
  onLode: {
  }
}
</script>

<style scoped>
  button{
    cursor: pointer;
  }
  .main-aside {
    display:inline-block;
    height:calc(100% - 50px);
    width:100%;
    position: absolute;
    left: 0;
    top: 60px;
    bottom: 0;
    background: #fff;
    overflow-y: auto;
    border-right: 1px solid #ddd;
  }
  .main-aside>div{
    padding:0 20px;
  }
  .content .firstLine{
    height: 50px;
    line-height: 50px;
    text-align: left;
  }
  .content .firstLine h3{
    font-size: 26px;
    display: inline-block;
  }
  .content .firstLine button{
    float: right;
    background: rgb(32,223,255);
    outline: none;
    padding: 5px 15px;
    border-radius: 2px;
    box-shadow: 0 0 0 2px #ddd;
    margin: 10px 50px  0 0;
  }
  .content .secondLine{
    line-height: 40px;
  }
  .content .secondLine>div{
    line-height: 40px;
    display: inline-block;
    margin-right: 20px;
  }
  .content .secondLine select {
    width: 120px;
    margin-left: 12px;
    padding-left: 12px;
    height: 31px;
    line-height: 31px;
    font-size: 12px;
    color: #333;
    appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    background: url('../../../../images/select_down.png') right center no-repeat;
    background-size: 20px 20px;
    border: 2px solid #ddd;
    overflow: hidden;
    border-radius: 3px;
  }
  .content .secondLine .searchVal{
    display: inline-block;
    width: 200px;
    height: 38px;
    background: rgb(250,250,250) url('../../../../images/search_icon.png') 5px center no-repeat;
    padding: 0 10px 0 30px;
  }
  .content .secondLine .searchBtn{
    display: inline-block;
    padding: 5px 20px;
    background: #fff;
    border: 1px solid #ddd;
    outline: none;
    border-radius: 3px;
  }
  .content table{
    width: 100%;
  }
  .lists{
    padding-bottom: 70px;
  }
  .lists thead td{
    line-height: 45px;
  }
  .lists thead i{
    display: block;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .lists thead a{
    vertical-align: text-bottom;
  }
  .lists thead span{
    display: inline-block;
    width: 20px;
    margin-left: 5px;
  }
  .lists thead .up{
    background: url("../../../../images/sort_up.png") no-repeat;
  }
  .lists thead .down{
    background: url("../../../../images/sort_down.png") no-repeat;
  }
  .lists tbody tr{
    border-top: 1px solid #ddd;
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
