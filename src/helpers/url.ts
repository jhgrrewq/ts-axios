import { isDate, isPlainObject } from './util'

function encode(val: string): string {
  // 不直接调用 window 的 encode 方法，需要将一些特殊字符转换回来
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+') // 空格替换为 ，
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildURL(url: string, params?: any): string {
  if (!params) {
    // 没有参数直接返回 url
    return url
  }

  const parts: string[] = []

  Object.keys(params).forEach(key => {
    const val = params[key]

    // 1. null 或者 undefined，过滤空值
    if (val === null || typeof val === 'undefined') {
      // 调到下次循环
      return
    }

    // 统一处理为数组格式
    let values = []
    if (Array.isArray(val)) {
      // 2. 数组
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach(val => {
      if (isDate(val)) {
        // 3. 日期对象使用 toISOString 方法转换
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        // 4. 对象转化为 JSON
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  let serializedParams = parts.join('&')

  if (serializedParams) {
    // 去除哈希
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    // 判断 url 之前时候已经有参数
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }

  return url
}
