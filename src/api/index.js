import axios from 'axios'

//全局参数，自定义参数可在发送请求时设置
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//axios.defaults.headers.common['Access-Control-Allow-Credentials']=true;
axios.defaults.timeout = 300000000 //超时时间ms
//axios.defaults.withCredentials = true
// 请求时的拦截
//回调里面不能获取错误信息
axios.interceptors.request.use(
  function (config) {
    // console.log('请求异常：' + JSON.stringify(config));
    //if (config.method === 'post') {
    //  config.data = qs.stringify(config.data)
    //};
    return config;
  },
  function (error) {
    // 当请求异常时做一些处理
    console.log('请求异常：' + JSON.stringify(error));
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(function (response) {
  // Do something with response data
  //console.log('响应拦截：' + JSON.stringify(response));
  return response
}, function (error) {
  // Do something with response error
  console.log('响应出错：' + error)
  return Promise.reject(error)
})


const base = {
  axios: axios,
  baseUrl: 'http://localhost:8080'
}

export default base
