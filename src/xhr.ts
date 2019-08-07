import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import { parseHeaders } from './helpers/headers'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType, timeout } = config

    const request = new XMLHttpRequest()

    if (responseType) {
      request.responseType = responseType
    }

    if (timeout) {
      request.timeout = timeout // 单位毫秒 默认为 0 不超时
    }

    request.open(method.toUpperCase(), url, true) // 参数： 方法名、地址、是否异步

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) return

      if (request.status === 0) return // 网络或者超时错误 status 也为 0

      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      // 根据传入 responseType 决定响应数据选取
      const responseData = responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      handleResponse(response)
    }

    // 处理网络错误
    request.onerror = function handleError() {
      reject(new Error('Network Error'))
    }

    // 处理超时错误
    request.ontimeout = function handleTimeout() {
      reject(new Error(`Timeout of ${timeout} ms exceeded`))
    }

    Object.keys(headers).forEach(name => {
      // 不是发送 data 请求体数据，设置 Content-Type 没有意义
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name]) // 设置 headers
      }
    })

    request.send(data)

    // 处理非 200 状态码错误
    function handleResponse(res: AxiosResponse): void {
      if (res.status >= 200 && res.status < 300) {
        resolve(res)
      } else {
        reject(new Error(`Request failed with status code ${res.status}`))
      }
    }
  })
}
