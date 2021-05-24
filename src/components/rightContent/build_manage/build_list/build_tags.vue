<template>
    <div id="build_tags">
      <div>
        <h3 class="title">楼盘标签 <span class="name">楼盘名称</span></h3>
        <el-button @click="preserve" class="right" style="margin-right: 20px" plain size="medium">保 存</el-button>
      </div>
      <div>
        <p>正在显示的标签，拖动标签可以进行排序，前端最多显示3个标签</p>
        <draggable v-model="nowTag" @update="datadragEnd" :options="{animation:200}">
          <el-tag
            v-for="(tag, index) in nowTag"
            :key="tag.name"
            closable
            @close="tagClose(index, tag.name)"
            type="info">
            {{tag.name}}
          </el-tag>
        </draggable>
      </div>
      <div>
        <span class="title">标签列表</span>
        <el-button class="right" size="small" @click="addType">新增标签类型</el-button>
      </div>
      <div v-for="(item, index) in allTag" :key="index">
        <div>
          <span class="title" >{{item.name}}</span>
          <el-button @click="addTag(index)" style="margin-left: 20px" plain size="mini">新增标签</el-button>
        </div>
        <el-tag
          v-for="(item_c, index_c) in item.tags"
          :key="index_c"
          closable
          @click="select(index, index_c, item_c.type, item_c.name)"
          @close="tagRemove(index, index_c, item_c.name)"
          :type="item_c.type ">
          {{item_c.name}}
        </el-tag>
      </div>
      <el-dialog
      title="新增分类"
      :visible.sync="isaddType"
      width="30%"
      :before-close="closeType">
      <span>分类名称</span>
      <el-input style="display: inline-block;width: 200px" v-model="typeValue" placeholder="请输入内容"></el-input>
      <span slot="footer" class="dialog-footer">
    <el-button @click="closeType">取 消</el-button>
    <el-button type="primary" @click="saveType">确 定</el-button>
  </span>
    </el-dialog>
      <el-dialog
        title="新增标签"
        :visible.sync="isaddTag"
        width="30%"
        :before-close="closeTag">
        <span>标签名称</span>
        <el-input maxlength="6" @input="hasOrNo" show-word-limit style="display: inline-block;width: 200px" v-model="tagValue" placeholder="请输入内容"></el-input>
        <p v-show="hasTag" style="color: red;padding-left: 60px">该标签已存在</p>
        <span slot="footer" class="dialog-footer">
    <el-button @click="closeTag">取 消</el-button>
    <el-button :disabled="isDisabled" type="primary" @click="saveTag">确 定</el-button>
  </span>
      </el-dialog>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'build_tags',
  data () {
    return {
      build_tags: false,
      isaddType: false,
      typeValue: '',
      isaddTag: false,
      tagValue: '',
      tagIndex: 0,
      hasTag: false,
      isDisabled: false,
      nowTag: [{index: '0', name: '南北通透'}, {index: '1', name: '地铁周边'}],
      allTag: [
        {
          name: '价格标签',
          tags: [{
            name: '优惠',
            type: 'info'
          }]
        },
        {
          name: '周边标签',
          tags: [{
            name: '南北通透',
            type: ''
          }, {
            name: '地铁周边',
            type: ''
          }]
        },
        {
          name: '品牌标签',
          tags: [{
            name: '碧桂园',
            type: 'info'
          }]
        }
      ]
    }
  },
  components: {
    draggable
  },
  methods: {
    async datadragEnd (evt) {
      evt.preventDefault()
      // console.log('拖动前的索引 :' + evt.oldIndex)
      // console.log('拖动后的索引 :' + evt.newIndex)
      // 遍历数组,将索引值赋值到对应的sort_order上面,完成排序
      let arr = this.nowTag
      let newArr = await arr.map((item, i) => {
        return {
          index: i,
          name: item.name
        }
      })
      this.nowTag = newArr
    },
    preserve () {},
    tagClose (index, name) {
      let nowTag = this.nowTag
      nowTag.splice(index, 1)
      this.nowTag = nowTag
      let allTag = this.allTag
      let ii = ''
      let jj = ''
      for (let i = 0; i < allTag.length; i++) {
        for (let j = 0; j < allTag[i].tags.length; j++) {
          if (allTag[i].tags[j].name === name) {
            ii = i
            jj = j
            break
          }
        }
      }
      allTag[ii].tags[jj].type = 'info'
      this.$set(this.allTag, allTag)
    },
    addType () {
      this.isaddType = true
    },
    addTag (index) {
      this.tagIndex = index
      this.isaddTag = true
      this.hasTag = false
    },
    select (index, index2, type, name) {
      let nowTag = this.nowTag
      let allTag = this.allTag
      let length = nowTag.length - 1
      if (type === 'info') {
        if (length >= 2) {
          this.$message({
            message: '当前已有3个标签，请删除已有的标签后重新选择需要展示的标签',
            type: 'warning'
          })
        } else {
          nowTag.push({index: length, name: name})
          allTag[index].tags[index2].type = ''
        }
      } else {
        let ii = ''
        for (let i = 0; i < nowTag.length; i++) {
          if (nowTag[i].name === name) {
            ii = i
            break
          }
        }
        if (ii !== '') {
          nowTag.splice(ii, 1)
        }
        allTag[index].tags[index2].type = 'info'
      }
      this.$set(this.nowTag, nowTag)
      this.$set(this.allTag, allTag)
    },
    tagRemove (index, index2, name) {
      this.$confirm('是否确定删除', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let nowTag = this.nowTag
        let allTag = this.allTag
        allTag[index].tags.splice(index2, 1)
        let ii = ''
        for (let i = 0; i < nowTag.length; i++) {
          if (nowTag[i].name === name) {
            ii = i
            break
          }
        }
        if (ii !== '') {
          nowTag.splice(ii, 1)
        }
        this.$set(this.nowTag, nowTag)
        this.$set(this.allTag, allTag)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    closeType () {
      this.typeValue = ''
      this.isaddType = false
    },
    saveType () {
      let allTag = this.allTag
      if (this.typeValue !== '') {
        allTag.push({name: this.typeValue, tags: []})
      }
      this.$set(this.allTag, allTag)
      this.typeValue = ''
      this.isaddType = false
    },
    closeTag () {
      this.tagValue = ''
      this.isaddTag = false
    },
    saveTag () {
      let allTag = this.allTag
      if (this.tagValue !== '') {
        allTag[this.tagIndex].tags.push({name: this.tagValue, type: 'info'})
        this.$set(this.allTag, allTag)
        this.tagValue = ''
        this.isaddTag = false
        this.hasTag = false
      }
    },
    hasOrNo () {
      let allTag = this.allTag
      if (this.tagValue !== '') {
        for (let i = 0; i < allTag[this.tagIndex].tags.length; i++) {
          if (allTag[this.tagIndex].tags[i].name === this.tagValue) {
            this.hasTag = true
            this.isDisabled = true
          } else {
            this.hasTag = false
            this.isDisabled = false
          }
        }
      }
    }
  },
  watch: {
    nowTag (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.build_tags = true
      }
    },
    allTag (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.build_tags = true
      }
    }
  }
}
</script>

<style scoped>
  #build_tags{
    width:calc(100% - 150px);
    position: absolute;
    top: 0;
    left: 150px;
    padding: 20px 20px;
    background: #fff;
  }
  #build_tags h3.title{
    font-size: 26px;
    margin-bottom: 20px;
    display: inline-block;
  }
  #build_tags h3.title .name{
    font-size: 16px;
    font-weight: 500;
  }
  #build_tags .right{float: right}
  .el-tag{
    margin-top: 10px;
  }
  .el-tag+.el-tag {
    margin-left: 10px;
  }
  #build_tags>div{
    margin-bottom: 20px;
  }
  #build_tags span.title{
    font-weight: bold;
    font-size: 20px;
  }
</style>
