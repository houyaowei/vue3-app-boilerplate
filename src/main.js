import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// console.log('env 变量：', import.meta.env)


import App from "./App.vue";
import "lib-flexible/flexible";
import installVant from "./plugins/vant";
import { PullRefresh } from "vant";
// import VueEasytable from "vue-easytable";
// import "vue-easytable/libs/theme-default/index.css";

const app = createApp(App);
installVant(app);

const piniaInstance = createPinia();
piniaInstance.use(piniaPluginPersistedstate);

import router from "./router";

app.use(piniaInstance);
app.use(router);
app.use(PullRefresh); //vant 下拉刷新
// app.use(VueEasytable);


//TODO,vconsole最后上线需要去掉
import vconsole from "@/plugins/vconsole";

app.mount("#app");
