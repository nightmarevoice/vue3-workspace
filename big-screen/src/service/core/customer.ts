import request from '@/utils/request'
const requestAxios = new request()
/**
 * 测试接口
 */
 
// 测试用Hello World
export async function TestApi (params:Partial<API.CustomerItem>) {
  return requestAxios.get(
    {
      url:'/core/residence/search',
      params,
    }
  )
}

// 测试用Hello World
export async function Te12stApi (params:Partial<API.CustomerItem>) {
  return requestAxios.get(
    {
      url:'/core/residence/search',
      params,
    }
  )
}
