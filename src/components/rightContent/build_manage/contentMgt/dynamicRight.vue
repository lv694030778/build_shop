<template>
    <div id="dynamicRight">
      <el-button size="mini" plain class="positionRig" @click="release">发布动态</el-button>
      <template>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="已通过" name="first">
            <ul>
              <li v-for="(item,index) in passedList" :key="item.id">
                <div class="time">{{item.time}}</div>
                <div class="user">
                  <div class="head">
                    <el-image :src="item.user.head">
                      <div slot="error" class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                      </div>
                    </el-image>
                  </div>
                  <div class="name">
                    <div><span>{{item.user.name}}</span><span class="identityId" v-if="item.user.identity==='置业顾问'">置业顾问id：{{item.user.identityId}}</span></div>
                    <div> <el-button plain size="mini">{{item.user.identity}}</el-button></div>
                  </div>
                </div>
                <div class="comment">
                  <div class="title">
                    <div class="w60">
                      <span>{{item.comment.title}}</span><el-button style="margin-left: 10px" plain size="mini">楼盘取证</el-button>
                    </div>
                    <el-button class="right" style="margin-left: 10px" plain size="small" @click="handerDelete(item.id,index,passedList)">删除</el-button>
                    <el-button class="right" plain size="small" @click="handerEdit(item.id,index,passedList)">编辑</el-button>
                  </div>
                  <div class="content w60">
                    <div>{{item.comment.content}}</div>
                    <div class="pictures">
                      <img v-for="item_c in item.comment.picture" :src="item_c" alt="" :key="item_c">
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="待审核" name="second">待审核</el-tab-pane>
          <el-tab-pane label="未通过" name="third">未通过</el-tab-pane>
        </el-tabs>
      </template>
    </div>
</template>

<script>
export default {
  name: 'dynamicRight',
  data () {
    return {
      activeName: 'first',
      passedList: [{
        id: 1,
        time: '0000-00-00 00:00:00',
        user: {id: '000001', name: '张三', head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', identity: '置业顾问', identityId: '000002'},
        comment: {title: '标题', content: '动态内容动态内容动态内容动态内容动态内容动态内容动态内容动态内容动态内容动态内容动态内容动态内', picture: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg']}
      }]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    release () {
    },
    handerDelete (id, index, list) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let passedList = this.passedList
        if (list === 'passedList') {
          passedList = this.passedList
        }
        passedList.splice(index, 1)
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
    handerEdit (id, index, list) {
    }
  }
}
</script>

<style scoped>
#dynamicRight{
  width: calc(100% - 220px);
  height: 100%;
  position: absolute;
  top: 70px;
  left: 220px;
  padding: 0 20px;
}
#dynamicRight .positionRig{
    position: absolute;
  right: 20px;
  top: 0;
  }
  .right{
    float: right;
  }
  .user>div{
    display: inline-block;
    vertical-align: middle;
  }
  .user .head .el-image{
    display: inline-block;
    width: 50px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    border: 1px solid #ddd;
    margin-right: 10px;
  }
  .w60{
    display: inline-block;
    width: 60%;
  }
  li>div{
    margin-top: 20px;
  }
  .comment>div{
    margin-bottom: 10px;
  }
  .identityId{
    font-size: 14px;
    margin-left: 10px;
  }
  .user .name{
    line-height: 30px;
  }
.pictures{
  margin-top: 10px;
}
  .pictures img{
    display: inline-block;
    width:120px;
  }
</style>
