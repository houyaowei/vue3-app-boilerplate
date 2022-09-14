### vue3-app-new

vue3+router+pinia开发模板，开箱即用。

技术栈情况：
 - Vite@3 
 - Vue3 + router + pinia
 - vant@3
 - axios + less + echarts
 - vite插件实例（ios微信分享需要的文件）



## 项目运行

```sh
yarn install   安装
yarn run dev   开发
yarn run build  构建生产包
yarn run build:test  构建测试包

```

### 环境扩展

自定义环境mode和env文件

如新增灰度环境script 

```shell
"build:gray": "vite build  --mode gray",

```
并在根目录下新增 .env.gray文件

### 组件热拔插

热拔插，即按照标准配置实现router、store。将文件夹拷贝到指定位置、重启服务即可实现服务的注册。反之，删除文件夹即可完成服务删除。

具体实现请参考view/goods或者 view/peoples的实现

### 国际化  

```sh
npm install vue-i18n

script：
import { useI18n } from 'vue-i18n'
const {t} = useI18n()

template： 
$t('login.name')
```



### 跨组件通信

```shell
 mitt
```

