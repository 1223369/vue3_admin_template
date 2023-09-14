import { createApp } from 'vue'
//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'

//配置element-plus国际化
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

//获取应用的实例对象
const app = createApp(App)
//安装elemen-plu应用
app.use(ElementPlus, {
  locale: zhCn, //国际化配置
})

console.log(import.meta.env);
//svg插件需要的配置代码
import 'virtual:svg-icons-register'

//将应用挂载到挂载点上
app.mount('#app')

