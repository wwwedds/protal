import * as _ from 'lodash'

// 空函数
const emptyFn = () => {}

// 处理经过转义的html字符串
const unescape = (str = '') => str
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&amp;/g, '&')
  .replace(/&#39;/g, '\'')

const htmlDecode = (str = '') => str
  .replace(/&gt;/g, '>')
  .replace(/&lt;/g, '<')
  .replace(/&quot;/g, '"')
  .replace(/&amp;/g, '&')

// 数值精确到几位
const numberFix = (str, fix = 2) => {
  if (typeof str === 'undefined') return str
  if (typeof str === 'string') {
    if (str === '') return str

    const num = parseFloat(str) || 0
    return num.toFixed(fix)
  }
  return str.toFixed(fix)
}

// 空字符串转换为-
const formatEmptyStr = str => (str === '' ? '-' : str)

// 字符串长度大于指定长度，则截取
const ellipse = (str, maxLen = 10) => {
  const len = str ? str.length : 0
  if (len > maxLen) {
    return `${str.substring(0, maxLen)}...`
  }
  return str
}

const isArray = obj => Object.prototype.toString.call(obj) === '[object Array]'

const isString = obj => Object.prototype.toString.call(obj) === '[object String]'

const isNumber = obj => Object.prototype.toString.call(obj) === '[object Number]'

const isFunction = obj => Object.prototype.toString.call(obj) === '[object Function]'

const isObject = obj => Object.prototype.toString.call(obj) === '[object Object]'

// 删除对象中的值为null的属性
const removeNullProperty = function (option) {
  if (!option) {
    return
  }
  const optionInternal = option
  Object.keys(optionInternal).forEach((attr) => {
    if (Object.prototype.hasOwnProperty.call(optionInternal, attr)) {
      if (optionInternal[attr] === null || typeof optionInternal[attr] === 'undefined') {
        delete optionInternal[attr]
        return
      }
      if (typeof (optionInternal[attr]) === 'object') {
        removeNullProperty(optionInternal[attr])
      }
    }
  })
}

// 将颜色转为透明颜色值， 比如： #ff0000 转 rgba(123,123,123, 0.4)
const hexToRgba = (hex, opacity) => (hex && hex.replace(/\s+/g, '').length === 7 ? `rgba(${parseInt(`0x${hex.slice(1, 3)}`, 10)},${
  parseInt(`0x${hex.slice(3, 5)}`, 10)},${
  parseInt(`0x${hex.slice(5, 7)}`, 10)},${opacity})` : '')

// 数组深拷贝
const arrayDeepClone = (arr) => {
  const arrClone = new Array(0)
  arr.forEach((goods) => {
    arrClone.push(_.cloneDeep(goods))
  })
  return arrClone
}

// 腾讯转百度
function TxMapTransBMap(lng, lat) {
  const xpi = 3.14159265358979324 * 3000.0 / 180.0
  const x = lng
  const y = lat
  const z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * xpi)
  const theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * xpi)
  const lngs = z * Math.cos(theta) + 0.0065
  const lats = z * Math.sin(theta) + 0.006
  return {
    lng: lngs,
    lat: lats
  }
}
// 百度转腾讯
function BMapTransTxMap(lng, lat) {
  const xpi = 3.14159265358979324 * 3000.0 / 180.0
  const x = lng - 0.0065
  const y = lat - 0.006
  const z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * xpi)
  const theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * xpi)
  const lngs = z * Math.cos(theta)
  const lats = z * Math.sin(theta)
  return {
    lng: lngs,
    lat: lats
  }
}

export default {
  emptyFn,
  unescape,
  htmlDecode,
  numberFix,
  formatEmptyStr,
  ellipse,
  isArray,
  isString,
  isNumber,
  isFunction,
  isObject,
  removeNullProperty,
  hexToRgba,
  arrayDeepClone,
  TxMapTransBMap,
  BMapTransTxMap,
  _
}
