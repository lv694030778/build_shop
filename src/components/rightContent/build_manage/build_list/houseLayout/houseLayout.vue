<template>
    <div id="houseLayout">
      <div style="margin: 0">
        <h3 class="title">户型图 <span class="name">楼盘名称</span></h3>
      </div>
      <div>
        <el-button @click="addLayout" class="right" style="margin-right: 20px" plain size="mini">添加户型图</el-button>
      </div>
      <div class="lists">
        <template>
          <el-table
            :data="houseLayouts"
            :header-cell-style="{textAlign: 'center'}"
            :cell-style="{ textAlign: 'center' }"
            style="width: 100%">
            <el-table-column
              prop="id"
              label="户型ID">
            </el-table-column>
            <el-table-column
              prop="name"
              label="户型名称">
            </el-table-column>
            <el-table-column
              width="120px"
              prop="picture"
              label="户型图">
              <template slot-scope="scope">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="houseLayouts[scope.$index].picture">
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
            <el-table-column
              prop="area"
              label="建筑面积">
            </el-table-column>
            <el-table-column
              prop="rome"
              label="几室几厅">
            </el-table-column>
            <el-table-column
              prop="building"
              label="户型楼栋">
            </el-table-column>
            <el-table-column
              prop="tag"
              label="户型标签">
              <template slot-scope="scope">
                <p v-for="item in houseLayouts[scope.$index].tag" :key="item.name">{{item.name}}</p>
              </template>
            </el-table-column>
            <el-table-column
              prop="setNew"
              label="设为最新开盘">
              <template slot-scope="scope">
                <el-switch
                  style="padding-left: 16px"
                  v-model="houseLayouts[scope.$index].setNew"
                  active-color="#13ce66"
                  @change="changeNew($event, scope.$index)">
                </el-switch>
              </template>
            </el-table-column>
            <el-table-column
              width="140px"
              prop="sort"
              label="排序值">
              <template slot-scope="scope">
                <el-input style="float: left;width: 40px;" v-model="houseLayouts[scope.$index].sort" :id="'sort'+houseLayouts[scope.$index].id" placeholder="请输入内容"></el-input>
                <el-button size="" @click="setSort(houseLayouts[scope.$index].id,scope.$index)">确定</el-button>
              </template>
            </el-table-column>
            <el-table-column
              prop="grounding"
              label="上架状态">
              <template slot-scope="scope">
                <el-switch
                  style="padding-left: 16px"
                  v-model="houseLayouts[scope.$index].grounding"
                  active-color="#13ce66"
                  @change="changeGrounding($event, scope.$index)">
                </el-switch>
              </template>
            </el-table-column>
            <el-table-column
              width="150px"
              prop=""
              label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(houseLayouts[scope.$index].id,scope.$index)">删除</el-button>
                <el-button
                  size="mini"
                  @click="edit(houseLayouts[scope.$index].id,scope.$index)">编辑</el-button>
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
        <el-dialog title="添加户型图" :before-close="cancel" :visible.sync="outerVisible">
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
              <div>
                <span class="title">添加户型图</span>
              </div>
              <div>
                <span class="title">户型名称</span>
                <el-input
                  placeholder="请输入"
                  class="name"
                  v-model="name">
                </el-input>
              </div>
              <div>
                <span class="title">建筑面积</span>
                <el-input
                  placeholder="请输入"
                  class="area"
                  v-model="area">
                </el-input>
              </div>
              <div class="room">
                <span class="title">几室</span>
                <el-input
                  placeholder="请输入"
                  class="area"
                  v-model="rome">
                </el-input>
                <span class="title">几厅</span>
                <el-input
                  placeholder="请输入"
                  class="area"
                  v-model="living">
                </el-input>
                <span class="title">几卫</span>
                <el-input
                  placeholder="请输入"
                  class="area"
                  v-model="toilet">
                </el-input>
              </div>
              <div>
                <span class="title">销售状态</span>
                <el-select v-model="status" placeholder="请选择">
                  <el-option
                    v-for="item in statusOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div>
                <span class="title">上传户型图</span>
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
              <div>
                <span class="title">户型楼栋</span>
                <el-input
                  placeholder="请输入"
                  class="area"
                  v-model="building">
                </el-input>
              </div>
              <div>
                <span class="title">户型标签</span>
                <div>
                  <el-tag v-for="(item,index) in tag" :type="item.type" :key="item.name" @click="chouseTag(index,item.type)">{{item.name}}</el-tag>
                </div>
              </div>
              <div>
                <span class="title">户型亮点</span>
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 4}"
                  placeholder="请输入内容"
                  v-model="highlights">
                </el-input>
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
  name: 'houseLayout',
  data () {
    return {
      currentPage: 10,
      allTotal: 1,
      outerVisible: false,
      innerVisible: false,
      houseLayout: false,
      name: '',
      area: '',
      rome: '',
      living: '',
      toilet: '',
      status: '',
      imageUrl: '',
      building: '',
      tag: [{
        name: '标签一',
        type: 'info'
      }, {
        name: '标签二',
        type: ''
      }],
      highlights: '',
      statusOptions: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '黄金糕'
      }],
      houseLayouts: [{
        id: '123456',
        name: 'A-1',
        picture: '',
        area: '300㎡',
        rome: '四室两厅两卫',
        building: '3栋/4栋',
        tag: [{index: '0', name: '南北通透'}, {index: '1', name: '地铁周边'}],
        setNew: true,
        sort: '',
        grounding: true
      }, {
        id: '222222',
        name: 'A-1',
        picture: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        area: '',
        rome: '四室两厅两卫',
        building: '3栋/4栋',
        tag: [{index: '0', name: '南北通透'}, {index: '1', name: '地铁周边'}],
        setNew: true,
        sort: '',
        grounding: true
      }
      ]
    }
  },
  methods: {
    addLayout () {
      this.outerVisible = true
    },
    changeGrounding ($event, index) {
      let houseLayouts = this.houseLayouts[index]
      let msg = ''
      let that = this
      let title = ''
      if ($event) {
        title = '上架提示'
        msg = '是否确认上架此户型'
      } else {
        title = '下架提示'
        msg = '是否确认下架此户型'
      }
      this.$confirm(msg, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: ''
      }).then(() => {
        houseLayouts.grounding = $event
        that.$set(that.houseLayouts, index, houseLayouts)
      }).catch(() => {
        houseLayouts.grounding = !$event
        that.$set(that.houseLayouts, index, houseLayouts)
      })
    },
    changeNew ($event, index) {
      let houseLayouts = this.houseLayouts[index]
      let msg = ''
      let that = this
      let title = ''
      if ($event) {
        title = '设为最新开盘提示'
        msg = '是否确认将此户型设为最新开盘'
      } else {
        title = '取消设为最新开盘提示'
        msg = '是否确认取消将此户型设为最新开盘'
      }
      this.$confirm(msg, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: ''
      }).then(() => {
        houseLayouts.setNew = $event
        that.$set(that.houseLayouts, index, houseLayouts)
      }).catch(() => {
        houseLayouts.setNew = !$event
        that.$set(that.houseLayouts, index, houseLayouts)
      })
    },
    setSort (id, index) {
      console.log(id)
      console.log(index)
    },
    handleDelete (id, index) {
      let houseLayouts = this.houseLayouts
      let that = this
      this.$confirm('是否确定删除', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      }).then(() => {
        houseLayouts.splice(index, 1)
        that.$set(that.houseLayouts, houseLayouts)
      }).catch(() => {
      })
    },
    edit (id, index) {
      this.outerVisible = true
    },
    cancel () {
      if (this.Export.houseLayout) {
        this.innerVisible = true
      } else {
        this.outerVisible = false
      }
    },
    preserve () {
      this.innerVisible = false
      this.outerVisible = false
      this.Export.houseLayout = false
    },
    notServe () {
      this.innerVisible = false
      this.outerVisible = false
      this.Export.houseLayout = false
    },
    handleClose () {
      this.innerVisible = false
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    chouseTag (index, type) {
      let tag = this.tag[index]
      if (type === 'info') {
        tag.type = ''
      } else {
        tag.type = 'info'
      }
      this.$set(this.tag, index, tag)
    }
  },
  watch: {
    name (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.houseLayout = true
      }
    },
    area (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.houseLayout = true
      }
    },
    rome (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.houseLayout = true
      }
    },
    living (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.houseLayout = true
      }
    },
    toilet (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.houseLayout = true
      }
    },
    status (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.houseLayout = true
      }
    },
    imageUrl (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.houseLayout = true
      }
    },
    building (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.houseLayout = true
      }
    },
    tag (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.houseLayout = true
      }
    },
    highlights (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.houseLayout = true
      }
    },
    deep: true
  }
}
</script>

<style scoped>
  #houseLayout{
    width:calc(100% - 150px);
    position: absolute;
    top: 0;
    left: 150px;
    padding: 20px 20px;
    background: #fff;
  }
  #houseLayout>div{
    margin-bottom: 20px;
  }
  #houseLayout h3.title{
    font-size: 26px;
    margin-bottom: 20px;
    display: inline-block;
  }
  #houseLayout .right{float: right}
  #houseLayout span.title{
    display: inline-block;
    width: 80px;
  }
  #houseLayout h3.title .name{
     font-size: 16px;
     font-weight: 500;
   }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .dialog-content>div{
    margin-bottom: 20px;
  }
  .el-input{
    width: 200px;
  }
  .room .el-input{
    width: 100px;
    margin-right: 30px;
  }
  .avatar-uploader{
    display: inline-block;
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    cursor: pointer;
    line-height: 146px;
    vertical-align: top;
  }
  .avatar-uploader:hover{
    border-color: #409eff;
    color: #409eff;
  }
  .el-tag{
    margin-right: 10px;
    cursor: pointer;
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
