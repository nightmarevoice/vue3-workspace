import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;
interface ResponseData<T = any> {
  code: number;
  message: string;
  data: T;
}

export default class HttpRequest {
  private readonly baseURL: string = BASE_URL;
  private readonly timeout: number = 5000;
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: this.baseURL,
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  private interceptorsRequest(): void {
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 请求前的拦截处理
        // 添加token等请求头信息
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = token;
        }else{
          config.headers.Authorization = 'eyJhbGciOiJIUzI1NiJ9.eyJ0ZW5hbnRfaWQiOiIxMCIsInN1YiI6ImFkbWluIiwidXNlcl9pZCI6IjIiLCJleHAiOjE2NzgzMzE2MDgsImlhdCI6MTY3NzcyNjgwOCwicGxhdGZvcm0iOjEsImp0aSI6ImE5NmY5ODMyLTBiNjktNDIzOC04MGRjLThmNjU3OGUwMjgyZSIsInRpbWVzdGFtcCI6MTY3NzcyNjgwODUwMX0.anjlqAL3eKosXuiv8iNmo3nqcgART8lkiqtloeL4th0';
        }
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );
  }

  private interceptorsResponse(): void {
    this.instance.interceptors.response.use(
      (response: AxiosResponse<ResponseData>) => {
        // 请求成功的拦截处理
        if (response.status === 200) {
          return response.data.data;
        } else {
          return Promise.reject(response.data);
        }
      },
      (error: any) => {
        // 请求失败的拦截处理
        if (error && error.response) {
          switch (error.response.status) {
            case 400:
              error.message = '请求错误';
              break;
            case 401:
              error.message = '未授权，请登录';
              break;
            case 403:
              error.message = '拒绝访问';
              break;
            case 404:
              error.message = `请求地址出错: ${error.response.config.url}`;
              break;
            case 408:
              error.message = '请求超时';
              break;
            case 500:
              error.message = '服务器内部错误';
              break;
            case 501:
              error.message = '服务未实现';
              break;
            case 502:
              error.message = '网关错误';
              break;
            case 503:
              error.message = '服务不可用';
              break;
            case 504:
              error.message = '网关超时';
              break;
            case 505:
              error.message = 'HTTP版本不受支持';
              break;
            default:
              break;
          }
        }
        return Promise.reject(error);
      }
    );
  }

  public get<T = any>(parameters:{url: string; params?: any}): Promise<T> {
    const {url,params} = parameters;
    return new Promise((resolve, reject) => {
      this.instance
        .get<ResponseData<T>>(url, { params })
        .then((response:any) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public post<T = any>(parameters:{url: string; data?: any}): Promise<T> {
    const {url,data} = parameters;
    return new Promise((resolve, reject) => {
      this.instance
        .post<ResponseData<T>>(url, data)
        .then((response:any) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
 
