import { createStore } from 'vuex'

export default createStore({
  //响应组件中的事件
  state: {
    userid:""//如果userid==""表示用户没用登录，是非注册用户
  },
  //用来将
  getters: {
  },
  //操作数据
  mutations: {
    updateUserid(state,newVal){
      state.userid = newVal
    }
  },
  actions: {
    setUserid(context,newVal){
      context.commit('updateUserid',newVal)
    }
  },
  modules: {
  }
})
