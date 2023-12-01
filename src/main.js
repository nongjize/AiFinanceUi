import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'




import elementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import * as ElIcon from '@element-plus/icons-vue'
import axios from 'axios'

createApp(App).use(store).use(router).use(elementPlus).use(ElIcon).mount('#app')
createApp(App).prototype.$http=axios;

