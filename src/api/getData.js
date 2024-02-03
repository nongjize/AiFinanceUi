import base from './index'
let axios = base.axios
let baseUrl = base.baseUrl
const config = {
  headers: {
    'Content-Type':'application/x-www-form-urlencoded'}
};

// 获取好友
export const getFriend = params => {
    return axios({
      method: 'post',
      baseURL: `${baseUrl}/friend/friendList`,
      data: params
    }).then(res => res.data)
  }

  // 获取聊天信息
export const getChatMsg = params => {
  return axios({
    method: 'post',
    baseURL: `${baseUrl}/friend/chatMsg`,
    data: params
  }).then(res => res.data)
}

  // 获取聊天信息
  export const chatgpt = params => {
    return axios({
      method: 'post',
      url: `https://api.openai.com/v1/completions`,
      data: params,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.VUE_APP_CHATGPT_KEY}`,
      }
    }).then(res => res.data)
  }

  export const chatgpt_1 = params => {
    return axios.post("https://172.247.43.74:5151", { name: params["prompt"] }).then((response) =>response.data)
  }
//header:{'Content-Type':'application/x-www-form-urlencoded'}
  export const sendSms = params => {
    return axios.post(
      "https://admin.ynpygl.cn/api/common/sendSms", 
      { phone: params["phone"],type: "login_sms_code",config}).then((response) =>response.data)
  }

  export const loginBySms = params => {
    return axios.post("https://admin.ynpygl.cn/api/user/login/loginBySms", { phone: params["phone"],code:params["code"] }).then((response) =>response.data)
  }

  export const getdatafromtushare=()=>{
    return axios.post("https://api.tushare.pro",
    {"api_name":"stock_basic",
    "token":"1e313ef75bae8750fac99cd5ad2f9b8da5ad644a4701a2d01fefa6d4",
    "params":{"list_status":"L"},
    "fields":""
  }).then((response)=>response.data)
  }
 
  //指数 数据获取接口 api文档：https://tushare.pro/document/1?doc_id=130
  export const getindex_daily=(params)=>{
    const today = new Date();
    const lastFriday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 4);    
    const dayOfWeek=today.getDay();
    const date = dayOfWeek >= 1 && dayOfWeek <= 5 ? today.toISOString().slice(0, 10) : lastFriday.toISOString().slice(0, 10);
    return axios.post("https://api.tushare.pro",
    {"api_name":"index_daily",
    "token":"1e313ef75bae8750fac99cd5ad2f9b8da5ad644a4701a2d01fefa6d4",
    "params":{"ts_code":params,"start_date":date}
  }).then((response)=>response.data) .catch(error => {
    console.log(error);
  });
  }
  // export function getLastFriday() {
  //   const today = new Date();
  //   const lastFriday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 4);
  //   return lastFriday.toISOString().slice(0, 10);
  // }
  

  //获取新闻数据 api文档：https://tushare.pro/document/1?doc_id=130
  export const getNews = () => {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getTime() - 30 * 60 * 1000); // 当前时间的前30分钟
    const endDate = currentDate; // 当前时间
  
    return axios.post("https://api.tushare.pro", {
      "api_name": "news",
      "token": "1e313ef75bae8750fac99cd5ad2f9b8da5ad644a4701a2d01fefa6d4",
      "params": {
        "src": "sina",
        "start_date": `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')} ${String(startDate.getHours()).padStart(2, '0')}:${String(startDate.getMinutes()).padStart(2, '0')}:${String(startDate.getSeconds()).padStart(2, '0')}`,
        "end_date": `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, '0')}-${String(endDate.getDate()).padStart(2, '0')} ${String(endDate.getHours()).padStart(2, '0')}:${String(endDate.getMinutes()).padStart(2, '0')}:${String(endDate.getSeconds()).padStart(2, '0')}`,
      },
    }).then((response) => response.data); 
  };

  //realtime_list智能推荐
  export const getstockList=()=>{
    const today = new Date();
    const dayOfWeek = today.getDay();
    let date;

  if (dayOfWeek === 0) {
    // 周日，获取本周五的日期
    date = new Date(today.setDate(today.getDate() - 3));
  } else if (dayOfWeek === 1) {
    // 周一，获取上周五的日期
    date = new Date(today.setDate(today.getDate() - 4));
  } else {
    // 其他工作日，获取前一天的日期
    date = new Date(today.setDate(today.getDate() - 1));
  }
    return axios.post("https://api.tushare.pro",
    {"api_name":"top_list",
    "token":"1e313ef75bae8750fac99cd5ad2f9b8da5ad644a4701a2d01fefa6d4",
    "params":{"trade_date":`${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`}//src='sina'
  }).then((response)=>response.data).catch(error => {
    console.log(error);
  });
  }

  //1e313ef75bae8750fac99cd5ad2f9b8da5ad644a4701a2d01fefa6d4

  //通过用户id返回用户信息（用户等级、用户头像url等）
  export const getUserById = userID => {
    return axios({method: "get",url:apiUrl+"?userID="+userID })
    .then((response) =>response.data)
    .catch((err) => {console.log("请求失败：", err);});
  }

  //通过用户id返回用户信息（用户等级、用户头像url等）
  export const getUserById1 = userID => {
    return axios({method: "get",url:apiUrl+"?userID="+userID })
    .then((response) =>response.data)
    .catch((err) => {console.log("请求失败：", err);});
  }



 
