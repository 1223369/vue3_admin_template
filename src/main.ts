import { createApp } from 'vue'
//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'

//配置element-plus国际化
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//svg插件需要的配置代码
import 'virtual:svg-icons-register'
//引入自定义插件对象
import gloalComponent from '@/components'

//引入模板的全局样式
import '@/styles/index.scss'
//引入路由
import router from './router'
//引入仓库
import pinia from './store'
//获取应用的实例对象
const app = createApp(App)
//安装仓库
app.use(pinia)
//安装elemen-plu应用
app.use(ElementPlus, {
  locale: zhCn, //国际化配置
})

//安装自定义插件
app.use(gloalComponent);

//注册模板路由
app.use(router);

//将应用挂载到挂载点上
app.mount('#app');
