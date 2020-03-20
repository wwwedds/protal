<template>
  <div class="header-box">
    <div class="header-controller">
      <ul class="hd-ct-left">
        <li class="hd-logo-wrp">
          <div class="logo-img-box">
            <img src="../../../assets/img/LOMIR.png" alt="">
          </div>
          <div class="logo-img-box">
            <img src="../../../assets/img/LOMIR.png" alt="">
          </div>
        </li>
        <li @click="changeAside">
          <a v-if="iconRemember ==='left'" class="iconfont adSys-outdent" href="javascript:;"></a>
          <a v-if="iconRemember ==='right'" class="iconfont adSys-indent" href="javascript:;"></a>
        </li>
        <li>
          <a class="iconfont adSys-reload" href="javascript:;" @click="reloadPage()"></a>
        </li>
      </ul>
      <ul class="hd-ct-right">
        <li>
          <a class="iconfont" href="javascript:;">
            <input class="search-input" type="text" placeholder="搜索...">
          </a>
        </li>
        <li>
          <lui-dropdown class="dropdown-box">
            <span class="lui-dropdown-link">
              <a href="javascript:;">
                <a class="iconfont adSys-user user-li" href="javascript:;"></a>
                <span class="user-name">{{ '登录' }}</span>
                <a class="iconfont adSys-down user-li" href="javascript:;"></a>
              </a>
            </span>
            <lui-dropdown-menu slot="dropdown">
              <lui-dropdown-item>个人中心</lui-dropdown-item>
              <lui-dropdown-item>
                <template>
                  <div @click="logout">
                    退出登录
                  </div>
                </template>
              </lui-dropdown-item>
            </lui-dropdown-menu>
          </lui-dropdown>
        </li>
      </ul>
    </div>
    <!-- <div class="bread-crumb">
      <lui-breadcrumb separator-class="lui-icon-arrow-right">
        <lui-breadcrumb-item :to="{ path: '/' }">首页</lui-breadcrumb-item>
        <lui-breadcrumb-item>{{$route.name}}</lui-breadcrumb-item>
      </lui-breadcrumb>
    </div> -->
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "./header.scss";
</style>
<script type="text/babel">

export default {
  props: {
    isCollapse: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      iconRemember: 'left'
    }
  },
  computed: {

  },
  mounted() {
  },
  methods: {
    changeAside() {
      if (this.iconRemember === 'left') {
        this.iconRemember = 'right'
      } else {
        this.iconRemember = 'left'
      }
      this.$bus.$emit('changeAside')
    },
    reloadPage() {
      this.reload()
    },
    logout() {

    }
  }
}
</script>
