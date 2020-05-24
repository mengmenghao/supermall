import axios from 'axios'

export function request(config) {
  //1.创建axios的实例
  const instance = new axios.create({
    //baseURL: 'http://adi-v3.dev',
    baseURL:'http://123.207.32.32:8000',
    timeout: 5000
  });

  // 请求拦截器
  instance.interceptors.request.use(config => {
    //拦截后需要将拦截下来的请求数据返回发送
    return config;
  },error => {

  });

  // 响应拦截器
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    return res.data
  },error => {
    console.log(error);
  });

  //3.发送真正的网络请求
  return instance(config);
}