import comp from "G:/Blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"hello\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"hello\",\"home\":true,\"heroImage\":\"https://s3.bmp.ovh/imgs/2022/12/02/bc7428e3916c3a4c.jpg\",\"heroText\":\"Hero标题\",\"tagline\":\"Hero副标题\",\"actionText\":\"快速上手→\",\"actionLink\":\"/index.md\",\"features\":[{\"title\":\"简洁至上\",\"details\":\"以Markdown为中心的项目结构，以最少的配置帮助你专注于写作。\"},{\"title\":\"Vue驱动\",\"details\":\"享受Vue+ webpack 的开发体验，在Markdown中使用Vue组件，同时可以使用Vue来开发自定义主题。\"},{\"title\":\"高性能\",\"details\":\"VuePress为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。\"},{\"title\":\"主题\",\"details\":\"提供了一个开箱即用的默认主题。你也可以挑选一个社区主题，或者创建一个你自己的主题。\"},{\"title\":\"插件\",\"details\":\"灵活的插件API，使得插件可以为你的站点提供许多即插即用的功能。\"},{\"title\":\"打包工具\",\"details\":\"默认的打包工具是 Vite ，也同样支持 Webpack 。选一个你喜欢的来使用吧！\"}],\"footer\":\"ISC协议 | 版权所有 Ahthony-pos\"},\"headers\":[],\"git\":{\"updatedTime\":1709480523000,\"contributors\":[{\"name\":\"Anthony-pos\",\"email\":\"1169505302@qq.com\",\"commits\":1}]},\"filePathRelative\":\"index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
