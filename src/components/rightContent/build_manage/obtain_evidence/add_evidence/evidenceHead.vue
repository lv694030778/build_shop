<template>
    <div id="evidenceHead">
      <div class="router">
        <router-link v-for="(item,index) in router" @click.native="routerClick(index)" :class="item.isShow" :to="item.path" :key="item.name">{{item.name}}</router-link>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'evidenceHead',
  data () {
    return {
      isShow: 1,
      router: [
        {
          name: '基本信息',
          path: '/basicInformation',
          isShow: 'isShow'
        },
        {
          name: '时间轴',
          path: '/timeAxis',
          isShow: ''
        },
        {
          name: '购房资料',
          path: '',
          isShow: ''
        },
        {
          name: '一房一价',
          path: '',
          isShow: ''
        }
      ]
    }
  },
  methods: {
    routerClick (index) {
      let router = this.router
      for (let i = 0; i < router.length; i++) {
        router[i].isShow = ''
      }
      router[index].isShow = 'isShow'
      this.router = router
    }
  }
}
</script>

<style scoped>
#evidenceHead{
  width: 100%;
  height: 100%;
  padding: 20px;
}
#evidenceHead .router{
  display: flex;
  width: 450px;
  border: 1px solid #ddd;
}
  #evidenceHead .router a{
    flex:1;
    padding: 5px;
    color: #000000;
    border-right: 1px solid #ddd;
  }
#evidenceHead .router a:last-child{
  border:none;
}
  #evidenceHead .router .isShow{
    color: rgb(10,167,219);
  }
</style>
