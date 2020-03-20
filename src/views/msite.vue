<template>
  <lui-container>
    <div class="container" :class="{class1366:flag}">
      <div class="container-left">
        <div class="checded-data"> <countTo :start-val="startVal" :end-val="endVal" :duration="duration"></countTo>
        </div>
        <div class="checded-data">e</div>
        <div class="checded-data">e</div>
        <div class="checded-data">e</div>
      </div>
      <div class="container-right">sdfsd</div>
    </div>
  </lui-container>
</template>

<script type="text/ecmascript-6">
import countTo from 'vue-count-to'
export default {
  components: { countTo },
  data() {
    return {
      flag: false,
      duration: 5000,
      // 初始值
      startVal: 0,
      // 最终值
      endVal: 2018  
    }
  },
  mounted() {
    if (window.screen.width * 1 === 1366) {
      this.flag = true
    } else {
      this.flag = false
    }  
  }
   
}
</script>

<style scoped  lang= "stylus" rel="stylesheet/stylus">
  .lui-container
    width 1920px
    .class1366
      color green
    .container
      width 100%
      color red
      display: -webkit-flex; /* Safari */
      display: flex
      flex-direction row
      .container-left
        width 80%
        display: -webkit-flex; /* Safari */
        display: flex
        flex-direction row
        .checded-data
          width 20%
</style>
