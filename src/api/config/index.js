
import Http from '@/lib/http'

const API = {
  getUserTags: params => Http.post('/result/listPlan.json', ...params),
  bindUserTag: params => Http.post('/car/bindUserTag', ...params),
  unbindUserTag: params => Http.post('/car/unbindUserTag', ...params)
}

export default API
