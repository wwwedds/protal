export default {
  PaginationMixin: {
    data() {
      return {
        queryParam: {
          pageNum: 1, // 起始页
          currentPage: 1, // 起始页
          pageSize: 10 // 每页条数
        }
      }
    },
    methods: {
      queryByPage() {
        // 具有由vue自己定义
      },
      // 分页页面跳转事件
      handleSizeChange(val) {
        this.queryParam.pageSize = val
        this.queryByPage()
      },
      // 每页展示条数修改事件
      handleCurrentChange(val) {
        this.queryParam.pageNum = val
        this.queryParam.currentPage = val
        this.queryByPage()
      }
    }
  }

}
