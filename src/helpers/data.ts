import { isPlainObject } from './util'

export function transformRequest(data: any): any {
  // data 如果是普通对象需要转换为 json 字符串
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (error) {
      // do nothing
    }
  }
  return data
}
