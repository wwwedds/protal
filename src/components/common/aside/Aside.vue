<template>
  <div class="aside" :class="{class_aside:isCollapse}">
    <div class="container">
      <div class="aside-logo">{{ !isCollapse?'logo':'' }}</div>
      <div
        class="change-aside"
        :class="{click_aside:isCollapse}"
       
        @mouseover="changeActive()"
      >click</div>
      <lui-menu
        default-active="1-4-1"
        class="lui-menu-vertical-demo" 
        :collapse="isCollapse"
        :router="true"
        
        @open="handleOpen"
        @close="handleClose">
        <lui-submenu
          index="1"
          @click="handleClickMenu(index)">
          <template slot="title">
            <i class="lui-icon-s-home"></i>
            <span slot="title">导航一</span>
          </template>
          <lui-menu-item-group>
            <!-- <span slot="title">分组一</span>
            <lui-menu-item index="1-1">选项1</lui-menu-item>
            <lui-menu-item index="1-2">选项2</lui-menu-item>
          </lui-menu-item-group>
          <lui-menu-item-group title="分组2"> -->
            <lui-menu-item
              index="1-3"
              @click="handleClickMenu(index)"
            >选项3</lui-menu-item>
          </lui-menu-item-group>
          <lui-submenu
            index="1-4"
            @click="handleClickMenu(index)">
            <span slot="title">选项4</span>
            <lui-menu-item
              index="1-4-1"
              @click="handleClickMenu(index)">选项1</lui-menu-item>
          </lui-submenu>
        </lui-submenu>
        <lui-submenu
          index="1-4"
          @click="handleClickMenu(index)">
          <span slot="title">选项4</span>
          <lui-menu-item
            index="1-4-1"
            @click="handleClickMenu(index)">选项1</lui-menu-item>
        </lui-submenu>
        </lui-submenu>
      </lui-menu>
  
    </div>
  
  
  </div>
</template>
<style lang="stylus">
.aside 
  position: fixed;
  top: 200px;
  left: 0;
  height: 800px;
  width 200px
  background: #ffffff;
  box-shadow: 2px 0 8px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction column
  font-size 30px
  color  red
  &.class_aside
    width 64px
  .container
    position relative
    .aside-logo
     height 50px
    .change-aside
      position absolute
      left  200px
      top   300px
    .click_aside
      left  64px
    

  
  .lui-menu-vertical-demo:not(.lui-menu--collapse) 
    width: 200px;
    min-height: 400px;
  



</style>

<script>
export default {
 
  data() {
    return {
      isCollapse: false,
      openedTab: []
    }
  },
  computed: {
    activeIndex() {
      return this.$route.path
    }
  },
  mounted() {
    console.log(window.screen.width)
    if (window.screen.width * 1 === 1366) {
      this.isCollapse = true
      console.log(this.isCollapse)
    } else if (window.screen.width * 1 === 1920) {
      this.isCollapse = false
    }
    // const _this = this
    // let timeoutId
    // window.addEventListener('resize', () => {
    //   alert(document.documentElement.clientWidth * 1)
    //   // 函数防抖
    //   !!timeoutId && clearTimeout(timeoutId)
    //   timeoutId = setTimeout(() => {
    //     if (document.documentElement.clientWidth * 1 <= 1336) {     
    //       _this.isCollapse = true
       
    //     } else {
    //       _this.isCollapse = false
    //     }
    //   }, 300)
    // })
  },
  
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath)
    },
    changeActive() {
      this.isCollapse = !this.isCollapse
     
    },
    clickMenu(componentName) {
      console.log(this.$store.state)
      this.openedTab = this.$store.state.openedTab
      // tabNum 为当前点击的列表项在openedTab中的index，若不存在则为-1
      const tabNum = this.openedTab.indexOf(componentName)
      if (tabNum === -1) {
        // 该标签当前没有打开
        // 将componentName加入到已打开标签页state.openedTab数组中
        this.$store.commit('addTab', componentName)
      } else {
        // 该标签是已经打开过的，需要激活此标签页
        this.$store.commit('changeTab', componentName)
      }
    }
    // removeActive() {
    //   this.isCollapse = true
     
    // }
  }
}
</script>
