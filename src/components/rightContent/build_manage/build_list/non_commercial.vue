<template>
<div class="main-aside">
  <div class="header">
    <img src="../../../../images/type_icon.png" alt="">
    <span>楼盘列表 /</span>
    <span>非商业</span>
  </div>
  <div class="content">
    <div class="firstLine">
      <h3>楼盘列表</h3>
      <button>创建楼盘</button>
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
          label="楼盘状态">
          <template slot-scope="scope">
          <el-switch
            v-model=scope.buildState
            active-color="#13ce66"
            active-value=1
            inactive-value=0
            @change="buildState(scope.id, scope.$index)"
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
            <el-button
              size="mini"
              @click="handleEdit(scope.id)">编辑</el-button>
            <el-button
              size="mini"
              @click="irrigation(scope.id)">灌水</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
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
        id: 123123, name: '行车自行车行', nick: '行车自', area: '北京', property: '住宅', state: '在售', buildState: 1, num: '222', irrigation: '333', real: '321', time: '1999-09-19 19:19:19'
      }]
    }
  },
  methods: {
    searchList: function () {
      console.log(this.searchVal)
    },
    handleEdit: function (id) {
      console.log('编辑')
    },
    irrigation: function (id) {
      console.log('灌水')
    },
    handleDelete: function (id) {
      console.log('删除')
    },
    buildState: function (id, index) {
      let buildList = this.buildList
      let buildState = buildList[index].buildState
      buildState === 0 ? buildState = 1 : buildState = 0
      this.buildList[index].buildState = buildState
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
    height:calc(100% - 70px);
    width:calc(100% - 200px);
    position: absolute;
    left: 200px;
    top: 70px;
    bottom: 0;
    background: #fff;
    overflow-y: auto;
    border-right: 1px solid #ddd;
  }
  .main-aside>div{
    padding:0 20px;
  }
  .main-aside .header{
    height: 50px;
    line-height: 50px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  .main-aside .header img{
    vertical-align: middle;
    margin-right: 30px;
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
</style>
