<template>
  <div id="app">
    <lui-container>
      <lui-aside :width="'auto'" class="aside-wrapper">
        <Aside :isCollapse="isCollapse"></Aside>
      </lui-aside>
      <lui-container>
        <lui-header :style="'left:' + headerWidth">
          <LayoutHeader></LayoutHeader>
        </lui-header>
        <lui-main class="main-wrapper" :style="'margin-left:' + mainWidth">
          <LayoutContent>
            <div slot="content">
              <router-view />
            </div>
          </LayoutContent>
        </lui-main>
      </lui-container>
    </lui-container>
  </div>
</template>

<script>
import LayoutHeader from '@/components/common/header/Header.vue'
import Aside from '@/components/common/aside/Aside.vue'
import LayoutContent from '@/components/common/content/Content.vue'

export default {
  components: {
    LayoutHeader,
    Aside,
    LayoutContent
  },
  data() {
    return {
      isCollapse: false,
      headerWidth: '0',
      mainWidth: '284px',
      footerWidth: '284px'
    }
  },
  watch: {
    isCollapse(newVal, oldVal) {
      if (newVal) {
        // this.headerWidth = '64px;'
        this.mainWidth = '64px;'
        this.footerWidth = '64px;'
      } else {
        // this.headerWidth = '284px;'
        this.mainWidth = '284px;'
        this.footerWidth = '284px;'
      }
    }
  },
  mounted() {
    this.emitEvent()
  },
  methods: {
    emitEvent() {
      this.$bus.on('changeAside', () => {
        this.isCollapse = !this.isCollapse
      })
    }
  }
}
</script>

<style lang="stylus">
@import "./assets/stylus/reset.styl"

.lui-main
  padding: 20px;
.main-wrapper
  margin-top: 60px;
  margin-left: 284px;
  transition: all .3s ease-in-out;
.footer-wrapper
  padding: 0 15px;
  margin-left: 284px;
  transition: all .3s ease-in-out;
  .footer
    padding: 15px;
    background-color: #ffffff;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
</style>
