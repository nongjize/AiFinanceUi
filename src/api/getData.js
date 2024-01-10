import base from './index'
let axios = base.axios
let baseUrl = base.baseUrl

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
        'Authorization': `Bearer ${process.env.VUE_APP_CHATGPT_KEY}`,//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
        //'Authorization':'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',//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
      }
    }).then(res => res.data)
  }

  export const chatgpt_1 = params => {
    return axios.post("http://172.247.43.74:5151", { name: params["prompt"] }).then((response) =>response.data)
  }


 
