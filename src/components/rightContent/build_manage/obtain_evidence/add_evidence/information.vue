
<template>
    <div id="information">
      <div>
        <el-upload
          :action="uploadUrl"
          ref="upload"
          :multiple="false"
          :on-change="fileChange"
          :before-upload="beforeUpload"
          :on-success="handleAvatarSuccess"
          :on-preview="file_click"
          class="upload-demo"
          list-type="text"
          accept=".PDF"
          :file-list="personFileList"
          :auto-upload="false">
          <el-button size="small" type="primary">导入pdf文件</el-button>
        </el-upload>
      </div>
      <div>
        <quill-editor ref="text" v-model="content" class="myQuillEditor" :options="editorOption" />
      </div>
      <div>
        <el-button plain @click="preserve">保 存</el-button>
        <el-button plain @click="cancel">取 消</el-button>
      </div>
      <el-dialog
        title="保存提示"
        :visible.sync="information"
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
    </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  name: 'information',
  data () {
    return {
      information: false,
      uploadUrl: '',
      personFileList: [],
      content: '<img style="width: 200px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/> ',
      editorOption: {
        action: 'uploadUrl',
        methods: 'post',
        name: '',
        accept: '.PDF'
      }
    }
  },
  components: {
    quillEditor
  },
  methods: {
    fileChange () {},
    beforeUpload () {},
    handleAvatarSuccess () {},
    file_click () {},
    preserve () {
      this.information = false
      this.Export.information = false
    },
    cancel () {
      if (this.Export.information) {
        this.information = true
      } else {
        history.go(-1)
      }
    },
    notServe () {
      this.information = false
      this.Export.information = false
    },
    handleClose () {
      this.information = false
    }
  },
  watch: {
    uploadUrl (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.information = true
      }
    },
    personFileList (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.information = true
      }
    },
    content (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.Export.information = true
      }
    }
  }
}
</script>

<style scoped>
  #information{
    padding: 20px 0;
  }
  #information>div{
    margin-bottom: 20px;
  }
</style>
