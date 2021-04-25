<template>
  <div style="width: 100%;height:calc(100% - 70px) ">
    <aside id="typeList" class="el-aside main-aside">
      <div data-v-be8f7ef4="" class="sidebar sidebar-container">
        <div data-v-be8f7ef4="" class="sidebar-title widgets">
          <div data-cid="iklf5d5n6wlm83w" data-link_cid="" class="widget rich_text hleft vtop auto"
               style="width: 81px; height: 30px; left: 13px; top: 130px; z-index: 29; font-size: 14px; text-align: left; font-weight: normal; font-style: normal; opacity: 1;float: left;margin-left: 20px;">
            <div class="rich-text"><p style="line-height:0; margin-bottom:5px;"><span class="--mb--rich-text"
                                                                                      data-boldtype="0"
                                                                                      style="font-family:SourceHanSansSC; font-weight:400; font-size:18px; color:rgb(255, 255, 255); font-style:normal; letter-spacing:0px; line-height:30px; text-decoration:none;">当前城市</span>
            </p></div>
            <div class="region gesture " style="display: none;"></div>
          </div>
          <div data-cid="iklf5d5n6uk06xb" data-link_cid="" class="widget mselect" style="float:left;">
            <select>
              <option value="0" selected="">南京</option>
              <option value="1">郑州</option>
              <option value="2">苏州</option>
            </select>
            <div class="region gesture " style="display: none;"></div>
          </div>
        </div>
        <ul>
          <li role="menuitem" aria-haspopup="true" class="el-submenu" v-for="(item,index) in typeList" :key="index">
            <div class="el-submenu__title"
                 style="padding-left: 20px;" @click="typeClick(index)">
              <img src="../../images/icon.png" alt="" class="svg-icon">
              <router-link tag="span" :to="item.router" data-v-31ea41b3="">{{item.name}}</router-link>
              <i v-if="item.child.length>0" :class="['el-submenu__icon-arrow',typeIndex==index?'el-icon-arrow-up':'el-icon-arrow-down']"></i>
            </div>
            <ul v-if="item.child.length>0" role="menu" :class="['el-menu','el-menu--inline',typeIndex==index?'active':'']" >
              <div class="nest-menu" v-for="(child_item,child_index) in item.child" :key="child_index">
                <a href="#/permission/page" :class="childIndex==child_index?'active':''" @click="clildClick(child_index)">
                  <li role="menuitem" tabindex="-1" class="el-menu-item" style="">
                    <router-link tag="span" :to="child_item.router">{{child_item.name}}</router-link>
                  </li>
                </a>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
    <router-view></router-view>
  </div>
</template>
@import
<script>export default {
  name: 'typeList',
  data () {
    return {
      typeIndex: 0,
      childIndex: 0,
      typeList: [{name: '楼盘列表', router: '/rightContent/build_manage/non_commercial', child: [{name: '非商业', router: '/rightContent/build_manage/non_commercial'}, {name: '商业', router: ''}]},
        {name: '取证管理', router: '/', child: []},
        {name: '内容管理', router: '/', child: []},
        {name: '图片管理', router: '/', child: []},
        {name: '周边管理', router: '/', child: []},
        {name: '地铁管理', router: '/', child: []},
        {name: '商圈管理', router: '/', child: []},
        {name: '筛选管理', router: '/', child: []}]
    }
  },
  methods: {
    typeClick: function (index) {
      this.typeIndex === index ? this.typeIndex = '-1' : this.typeIndex = index
      this.childIndex = 0
    },
    clildClick: function (index) {
      this.childIndex = index
    }
  }
}
</script>

<style scoped>

  #nprogress .bar {
    background: #f811b2 !important
  }

  .sidebar[data-v-be8f7ef4] {
    width: 100%;
    height: 100%
  }

  .sidebar-title[data-v-be8f7ef4] {
    position: relative;
    width: 100%;
    border-bottom: 1px solid #dcdfe6;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    font-size: 16px;
    overflow: hidden;
    padding: 20px 0;
  }

  .sidebar-box[data-v-be8f7ef4] {
    width: 100%;
    height: calc(100% - 71px);
    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;
    overflow: "-moz-scrollbars-none";
    scrollbar-width: none
  }

  .sidebar-box[data-v-be8f7ef4]::-webkit-scrollbar {
    display: none;
    width: 0 !important
  }

  .el-menu-vertical-demo[data-v-be8f7ef4]:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px
  }

  .breadcrumb-enter-active[data-v-70f7da55], .breadcrumb-leave-active[data-v-70f7da55] {
    -webkit-transition: all .5s;
    transition: all .5s
  }

  .breadcrumb-enter[data-v-70f7da55], .breadcrumb-leave-active[data-v-70f7da55] {
    opacity: 0;
    -webkit-transform: translateX(20px);
    transform: translateX(20px)
  }

  .breadcrumb-move[data-v-70f7da55] {
    -webkit-transition: all .5s;
    transition: all .5s
  }

  .breadcrumb-leave-active[data-v-70f7da55] {
    position: absolute
  }

  .drop[data-v-1ca012af] {
    width: 300px;
    min-height: 65px !important;
    max-height: 87px !important;
    border-bottom: 1px solid #dcdfe6;
    padding: 12px 24px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
  }

  .drop[data-v-1ca012af]:hover {
    background: #e2effd
  }

  .drop:hover .drop-left-icon[data-v-1ca012af] {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
    opacity: 1
  }

  .drop-left[data-v-1ca012af] {
    width: 32px;
    height: 32px;
    background: #deb887;
    border-radius: 16px;
    margin-right: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }

  .drop-left-icon[data-v-1ca012af] {
    width: 20px;
    height: 20px;
    fill: currentColor;
    opacity: .9;
    -webkit-transition: all .5s;
    transition: all .5s
  }

  .drop-right[data-v-1ca012af] {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
  }

  .drop-right p[data-v-1ca012af] {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden
  }

  .drop-right p[data-v-1ca012af]:first-child {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #515a6e;
    margin-bottom: 5px;
    max-height: 44px;
    min-height: 22px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical
  }

  .drop-right p[data-v-1ca012af]:nth-child(2) {
    font-size: 12px;
    color: #808695
  }

  .drop[data-v-6df41b2d] {
    width: 300px;
    min-height: 65px !important;
    max-height: 87px !important;
    border-bottom: 1px solid #dcdfe6;
    padding: 12px 24px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
  }

  .drop[data-v-6df41b2d]:hover {
    background: #e2effd
  }

  .drop:hover img[data-v-6df41b2d] {
    -webkit-transform: scale(1.5) rotate(1turn);
    transform: scale(1.5) rotate(1turn);
    opacity: 1
  }

  .drop-left[data-v-6df41b2d] {
    width: 32px;
    height: 32px;
    background: #deb887;
    border-radius: 16px;
    margin-right: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden
  }

  .drop-left img[data-v-6df41b2d] {
    width: 32px;
    height: 32px;
    -webkit-transition: all .5s;
    transition: all .5s
  }

  .drop-left-icon[data-v-6df41b2d] {
    width: 20px;
    height: 20px;
    fill: currentColor;
    opacity: .9;
    -webkit-transition: all .5s;
    transition: all .5s
  }

  .drop-right[data-v-6df41b2d] {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
  }

  .drop-right p[data-v-6df41b2d] {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden
  }

  .drop-right p[data-v-6df41b2d]:first-child {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #515a6e;
    margin-bottom: 5px;
    max-height: 44px;
    min-height: 22px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical
  }

  .drop-right p[data-v-6df41b2d]:nth-child(2) {
    font-size: 12px;
    color: #808695
  }

  .drop[data-v-094ea6dc] {
    width: 300px;
    min-height: 65px !important;
    max-height: 87px !important;
    border-bottom: 1px solid #dcdfe6;
    padding: 12px 24px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
  }

  .drop[data-v-094ea6dc]:hover {
    background: #e2effd
  }

  .drop:hover img[data-v-094ea6dc] {
    -webkit-transform: scale(1.5) rotate(1turn);
    transform: scale(1.5) rotate(1turn);
    opacity: 1
  }

  .drop-left[data-v-094ea6dc] {
    width: 80px;
    height: 32px;
    border-radius: 16px;
    margin-right: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden
  }

  .drop-left img[data-v-094ea6dc] {
    width: 32px;
    height: 32px;
    -webkit-transition: all .5s;
    transition: all .5s
  }

  .drop-left-icon[data-v-094ea6dc] {
    width: 20px;
    height: 20px;
    fill: currentColor;
    opacity: .9;
    -webkit-transition: all .5s;
    transition: all .5s
  }

  .drop-left-btns[data-v-094ea6dc] {
    height: 20px;
    padding: 0 10px;
    font-size: 12px;
    border-radius: 2px
  }

  .drop-left-btns-primary[data-v-094ea6dc] {
    background: #e8f6fd;
    border: 1px solid #91d5ff
  }

  .drop-left-btns-success[data-v-094ea6dc] {
    background: #f8fdf6;
    border: 1px solid #a2fc76
  }

  .drop-left-btns-warning[data-v-094ea6dc] {
    background: #fdf9f4;
    border: 1px solid #fdc673
  }

  .drop-left-btns-danger[data-v-094ea6dc] {
    background: #fef5f5;
    border: 1px solid #fcbebe
  }

  .drop-left-btns-info[data-v-094ea6dc] {
    background: #fcfcfd;
    border: 1px solid #cdcdcd
  }

  .drop-right[data-v-094ea6dc] {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
  }

  .drop-right p[data-v-094ea6dc] {
    width: 100%
  }

  .drop-right p[data-v-094ea6dc]:first-child {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #515a6e;
    margin-bottom: 5px;
    max-height: 44px;
    min-height: 22px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical
  }

  .drop-right p[data-v-094ea6dc]:nth-child(2) {
    font-size: 12px;
    color: #808695;
    text-overflow: ellipsis;
    overflow: hidden
  }

  .empy[data-v-424e53a5] {
    width: 100%;
    height: 330px;
    padding-top: 70px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  .empy-box[data-v-424e53a5] {
    width: 100%;
    height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }

  .empy-icon[data-v-424e53a5] {
    fill: currentColor;
    color: #dae0e5;
    width: 85px
  }

  .empy p[data-v-424e53a5] {
    color: #8c8c8c;
    font-size: 14px;
    width: 100%;
    text-align: center
  }

  .el-tabs__nav-scroll {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }

  .el-tabs__nav {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important
  }

  .el-tabs__header {
    margin-bottom: 0 !important
  }

  .dropdowns-dropBox {
    width: 100%;
    max-height: 450px;
    overflow: hidden;
    position: relative
  }

  .dropdowns-list-box {
    max-height: 450px;
    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;
    overflow: "-moz-scrollbars-none";
    scrollbar-width: none;
    position: relative;
    padding-bottom: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  .dropdowns-list-box::-webkit-scrollbar {
    display: none;
    width: 0 !important
  }

  .dropdowns-list-box .drop:last-child {
    border-bottom: transparent
  }

  .dropdowns-dropBox-scroll {
    width: 300px
  }

  .happy-scroll-container {
    width: 300px !important
  }

  .happy-scroll-container .happy-scroll-content {
    -webkit-box-sizing: border-box !important;
    box-sizing: border-box !important;
    width: 300px !important
  }

  .happy-scroll-container {
    height: 290px !important
  }

  .dropdowns-more {
    width: 100%;
    height: 30px;
    color: #2d8cf0;
    font-size: 14px;
    text-align: center;
    line-height: 30px
  }

  .dropdowns-foots {
    width: 100%;
    height: 38px;
    background: #f7f7f7;
    font-size: 14px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #515a6e;
    border-top: 1px solid #dcdfe6;
    position: absolute;
    bottom: -2px;
    left: 0
  }

  .dropdowns-foots-iconsClear {
    width: 16px;
    height: 16px;
    margin-right: 5px;
    color: #515a6e;
    fill: currentColor
  }

  .dropdowns-foots:hover {
    background: #e8f6fd
  }

  .disableds {
    pointer-events: none
  }

  .headers[data-v-88e221be] {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
  }

  .headers-left[data-v-88e221be] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
  }

  .headers-left-box[data-v-88e221be] {
    -webkit-transition: all .5s;
    transition: all .5s;
    -webkit-transform-origin: center center;
    transform-origin: center center;
    width: 20px;
    height: 100%;
    margin-right: 15px
  }

  .headers-left-active[data-v-88e221be] {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
  }

  .el-icon-s-fold[data-v-88e221be] {
    width: 20px;
    height: 100%;
    line-height: 50px;
    font-size: 20px;
    cursor: pointer
  }

  .el-breadcrumb[data-v-88e221be] {
    line-height: 50px
  }

  .headers-right[data-v-88e221be] {
    height: 100%
  }

  .headers-right-left[data-v-88e221be], .headers-right[data-v-88e221be] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around
  }

  .headers-right-left[data-v-88e221be] {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 30px;
    font-size: 22px;
    cursor: pointer;
    position: relative
  }

  .headers-right-left-screenIcon[data-v-88e221be] {
    width: 18px;
    height: 18px;
    margin-right: 10px;
    fill: currentColor;
    color: #413a3f
  }

  .headers-right-left-githubIcon[data-v-88e221be] {
    width: 20px;
    height: 20px;
    margin-right: 20px;
    fill: currentColor;
    color: #413a3f
  }

  .header-right-dropdown[data-v-88e221be] {
    width: 300px;
    height: auto;
    position: absolute;
    right: 0;
    top: 60px;
    z-index: 2;
    background: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    overflow: hidden
  }

  .head-screen[data-v-88e221be] {
    margin-right: 15px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
  }

  .head-screen-news[data-v-88e221be] {
    margin-right: 15px
  }

  .headers-right-right[data-v-88e221be] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #666
  }

  .block[data-v-88e221be] {
    margin-right: 15px
  }

  .el-dropdown-link[data-v-88e221be] {
    cursor: pointer
  }

  .focusing[data-v-88e221be] {
    border: none !important
  }

  .theme[data-v-88e221be] {
    height: 100vh;
    overflow: hidden
  }

  .el-drawer__body[data-v-88e221be] {
    height: 100vh !important;
    overflow: hidden
  }

  .theme-title[data-v-88e221be] {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    font-weight: 700;
    padding: 0 15px;
    border-bottom: 1px solid #dcdfe6
  }

  .theme-title-box[data-v-88e221be] {
    padding: 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    height: calc(100vh - 51px);
    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;
    overflow: "-moz-scrollbars-none";
    scrollbar-width: none;
    background: #f5f7f9
  }

  .theme-title-box[data-v-88e221be]::-webkit-scrollbar {
    display: none;
    width: 0 !important
  }

  .theme-title-box-list[data-v-88e221be] {
    width: 180px;
    height: 150px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #999;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
    border: 5px solid transparent
  }

  .theme-title-box-list-left[data-v-88e221be] {
    width: 30px;
    height: 120px
  }

  .theme-title-box-list-right[data-v-88e221be] {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 160px
  }

  .theme-title-box-list-right-top[data-v-88e221be] {
    width: 100%;
    height: 20px;
    background: #fff
  }

  .theme-title-box-list-right-bottom[data-v-88e221be] {
    width: 100%;
    height: 100px
  }

  .theme-active[data-v-88e221be] {
    border: 5px solid #05da89
  }

  .scroll-container[data-v-2197767b] {
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    width: 100%
  }

  .scroll-container .scroll-wrapper[data-v-2197767b] {
    position: absolute
  }

  .tags-view-container .tags-view-wrapper[data-v-475b4aaa] {
    background: hsla(0, 0%, 100%, .8);
    height: 34px;
    border-bottom: 1px solid #d8dce5;
    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04)
  }

  .tags-view-container .tags-view-wrapper .tags-view-item[data-v-475b4aaa] {
    display: inline-block;
    position: relative;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: hsla(0, 0%, 100%, .8);
    padding: 0 10px;
    font-size: 12px;
    margin-left: 7px;
    margin-top: 4px;
    border-radius: 3px
  }

  .tags-view-container .tags-view-wrapper .tags-view-item[data-v-475b4aaa]:first-of-type {
    margin-left: 15px
  }

  .tags-view-container .tags-view-wrapper .tags-view-item.active[data-v-475b4aaa] {
    background-color: #0badf9;
    color: #fff;
    border-color: #0badf9
  }

  .tags-view-container .tags-view-wrapper .tags-view-item.active[data-v-475b4aaa]:before {
    content: "";
    background: #fff;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: relative;
    margin-right: 2px
  }

  .tags-view-container .contextmenu[data-v-475b4aaa] {
    margin: 0;
    background: #fff;
    z-index: 2;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    -webkit-box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3)
  }

  .tags-view-container .contextmenu li[data-v-475b4aaa] {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer
  }

  .tags-view-container .contextmenu li[data-v-475b4aaa]:hover {
    background: #eee
  }

  .tags-view-wrapper .tags-view-item .el-icon-close {
    width: 16px;
    height: 16px;
    vertical-align: 2px;
    border-radius: 50%;
    text-align: center;
    -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    margin-left: 3px
  }

  .tags-view-wrapper .tags-view-item .el-icon-close:before {
    -webkit-transform: scale(.6);
    transform: scale(.6);
    display: inline-block;
    vertical-align: -3px
  }

  .tags-view-wrapper .tags-view-item .el-icon-close:hover {
    background-color: #f9470b;
    color: #fff
  }

  .app-box, .app-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden
  }

  .app-box {
    -webkit-transition: all 2s;
    transition: all 2s
  }

  .heads {
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #dcdfe6
  }

  .main {
    width: 100%;
    height: 100%;
    overflow: hidden !important
  }

  .main-aside {
    display:inline-block;
    height: 100%;
    width: 200px;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    background-color: rgb(71, 68, 91);
  }

  .main-container {
    width: 100%;
    height: 100%;
    padding: 0 !important
  }

  .el-menu {
    border: none;
  }

  .main-container-views {
    width: 100%;
    height: calc(100% - 35px);
    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;
    overflow: "-moz-scrollbars-none";
    scrollbar-width: none;
    background: #f5f7f9;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#1ab8b8), to(#3bb54a));
    background-image: linear-gradient(#1ab8b8, #3bb54a)
  }

  .main-container-views::-webkit-scrollbar {
    display: none;
    width: 0 !important
  }

  .scrollTop {
    height: 100%;
    width: 100%;
    background-color: #f2f5f6;
    -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, .5);
    box-shadow: 0 0 6px rgba(0, 0, 0, .5);
    text-align: center;
    line-height: 40px;
    color: #1989fa;
    font-size: 30px;
    font-weight: bolder
  }

  .nodebook-enter, .nodebook-leave-to {
    -webkit-transform: scale(.9);
    transform: scale(.9);
    opacity: 0
  }

  .nodebook-enter-to, .nodebook-leave {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1
  }

  .nodebook-enter-active, .nodebook-leave-active {
    -webkit-transition: all .3s;
    transition: all .3s
  }

  .rich_text {
    display: flex;
    background: transparent;
    color: #101010;
    overflow: hidden;
    white-space: pre-wrap;
    word-break: break-word;
    word-wrap: break-word;
  }

  .rich_text.auto {
    white-space: pre;
    overflow: visible;
  }

  .rich_text.vtop {
    align-items: flex-start;
  }

  .mb-screen.others .widget {
    cursor: default;
  }

  .rich_text .rich-text {
    width: 100%;
  }

  .mselect {
    z-index: 5;
    color: #888;
    border-color: #bbb;
    border-radius: 6px;
    background: white;
    min-height: 17px;
  }

  .mselect select {
    padding: 0 8px;
    display: block;
    position: absolute;
    left: 100px;
    width: 94px;
    height: 28px;
    font-size: inherit;
    color: inherit;
    border: none;
    border-radius: inherit;
    outline: none;
    background: inherit;
  }
  .el-submenu {
    list-style: none;
    margin: 0;
    padding-left: 0;
    color: #fff;
    line-height: 32px;
  }
  .svg-icon {
    margin-right: 16px;
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .el-submenu__icon-arrow{
    display: inline-block;
    width: 20px;
    height: 16px;
    margin-left: 20px;
  }
  .el-submenu__title{
    cursor: pointer;
    text-align: left;
  }
  .el-menu-item{
    text-align: left;
  }
  .el-submenu .el-menu--inline{
    display: none;
    background: rgb(111,106,138);
    border-top: 2px solid rgb(139,136,156);
    border-bottom: 2px solid rgb(139,136,156);
    color: #fff;
    padding-left: 11px;
  }
  .el-submenu .el-menu--inline.active{
    display: block;
  }
  .el-menu--inline a{
    color: #fff;
  }
  .el-submenu span{
    color: #fff;
  }
  .el-submenu__title:hover {
    background-color: rgb(71,68,91);
  }
  .el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    background-color: rgb(111,106,138);
  }
  .el-submenu ul.active a.active span{
    color: rgb(70,199,236);
  }
</style>
