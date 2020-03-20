const deleteById = {
  url: '/sys/warehouse/delete.json',
  method: /post|get/i,
  data: {
    msg: '成功',
    result: {},
    successFlag: 0
  }
}

export default {
  deleteById
}
