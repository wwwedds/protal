<template>
  <div class="index">
    <p class="txt"> {{ title }}</p>
    <i class="fa fa-add"></i>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: '首页'
    }
  }
}
</script>

<style lang="stylus">
  .index
    width 100%
    .txt
      font-size 14px
      padding 30px 0
</style>
