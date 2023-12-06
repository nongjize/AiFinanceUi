import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'




import elementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import * as ElIcon from '@element-plus/icons-vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios'

import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

createApp(App).use(store).use(router).use(elementPlus).use(ElIcon).use(VideoPlayer).mount('#app')
createApp(App).prototype.$http=axios;
/*全局注册icon图标 */
const app=createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

