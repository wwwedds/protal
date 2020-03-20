<template>
  <div>
    <lui-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      :type="tag.type"
      @close="handleClose(tag)"
      @click="handleChangeTabs($event)">
      {{ tag.name }}
      <i class="el-icon-refresh-right" @click="handleOnload"></i>
    </lui-tag>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ]
    }
  },
  methods: {
    handleClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    },
    handleOnload() {
      window.location.reload()
    },
    handleChangeTabs($event) {
      console.log($event)
    }
    
  }
}
</script>

<style scoped  lang= "stylus" rel="stylesheet/stylus">
.lui-tag
   width 20%
   text-align center
   &:hover
    background-color red
   &:active
    background-color green

    
 
</style>
