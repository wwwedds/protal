import axios from 'axios'
import qs from 'qs'

let baseContextUrl = '/'
console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)
if (process.env.NODE_ENV === 'mock') {
  baseContextUrl = '/'
} else if (process.env.NODE_ENV === 'production') {
  baseContextUrl = '/'
} else {
  baseContextUrl = 'http://10.170.135.191/'
}

axios.defaults.timeout = 60000
axios.defaults.baseURL = baseContextUrl

// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    // NProgress.start()
    const configInternal = config
    if (configInternal.method === 'post') {
      if (configInternal.data.useRequestBody) {
        // 如果_useRequestBody=true, 支持Request Payload，
        // SpringMVC Controller 中需要使用@RequestBody
        delete configInternal.data.useRequestBody
        configInternal.headers = {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      } else {
        // 如果_useRequestBody=false, 默认支持Form Data
        // SpringMVC Controller 中不需要使用@RequestBody，默认使用@RequestParam

        // qs.stringify({ids: [1, 2, 3]}, { indices: false })
        // //形式： ids=1&ids=2&id=3
        // qs.stringify({ids: [1, 2, 3]}, {arrayFormat: 'indices'})
        // //形式： ids[0]=1&aids1]=2&ids[2]=3
        // qs.stringify({ids: [1, 2, 3]}, {arrayFormat: 'brackets'})
        // //形式：ids[]=1&ids[]=2&ids[]=3
        // qs.stringify({ids: [1, 2, 3]}, {arrayFormat: 'repeat'})
        // //形式： ids=1&ids=2&id=3
        configInternal.data = qs.stringify(config.data, { indices: false })
        configInternal.headers = {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }
    } else if (configInternal.method === 'get') {
      const newParams = {}
      Object.keys(configInternal.params).forEach((key) => {
        Object.defineProperty(newParams, key, encodeURIComponent(configInternal.params[key]))
      })
      configInternal.params = newParams

      configInternal.headers = {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }

    return configInternal
  },
  (error) => Promise.reject(error)
)

// http response 拦截器
axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

const handleResponse = (response, resolve, reject) => {
  const { data } = response
  // 首先判断接口返回的status是否为200,200---成功，否则异常
  if (response.status === 200) {
    // 当前接口返回格式仅限于JSON与非JSON，故此可做以下判断
    // 返回是JSON格式数据时：
    if (response.headers['content-type'] === 'application/json;charset=UTF-8') {
      if (data.successFlag === 1) {
        return resolve(data)
      }
      return reject(new Error(data.msg || '服务端返回错误信息'))
    }
    // 返回的是非JSON格式数据时
    return resolve(data)
  }
  return reject(new Error('服务端返回错误信息'))
}

const get = function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    })
      .then((response) => handleResponse(response, resolve, reject))
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 封装post请求(以formData方式post提交对象)
 * @param url
 * @param params
 * @returns {Promise}
 */
const post = function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then((response) => handleResponse(response, resolve, reject), (err) => {
        resolve(err)
        // reject(err)
      })
  })
}

/**
 * 封装post请求(以payload方式post提交Json对象)
 * @param url
 * @param params
 * @returns {Promise}
 */
const postPayload = function postPayload(url, params = {}) {
  if (params) {
    Object.defineProperty(params, 'useRequestBody', true)
  }
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then((response) => handleResponse(response, resolve, reject), (err) => {
        resolve(err)
        // reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

const patch = function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then((response) => handleResponse(response, resolve, reject), (err) => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

const put = function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then((response) => handleResponse(response, resolve, reject), (err) => {
        reject(err)
      })
  })
}

export default {
  post,
  postPayload,
  get,
  patch,
  put,
  baseContextUrl
}
