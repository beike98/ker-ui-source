import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import Baker from './components/Baker.vue'
import Baker2 from './components/Baker2.vue'

//路由配置
const history = createWebHashHistory();
const router = createRouter({
  history,
  routes:[
    {path:'/',component: Baker},
    {path:'/xxx',component: Baker2}
  ]
});

const app = createApp(App)
app.use(router)
app.mount("#app");
