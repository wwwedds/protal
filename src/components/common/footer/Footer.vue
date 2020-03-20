<template>
  <div class="footer">
    <div class="footer-main">
      测试底部样式
    </div>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "./footer.scss";
</style>
<script type="text/babel">
export default {
  name: 'LayoutFooter',
  props: {
    isCollapse: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>
