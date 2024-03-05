import comp from "G:/Blog/docs/.vuepress/.temp/pages/about/vuepress.html.vue"
const data = JSON.parse("{\"path\":\"/about/vuepress.html\",\"title\":\"vuepress\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"什么是vuepress\",\"slug\":\"什么是vuepress\",\"link\":\"#什么是vuepress\",\"children\":[{\"level\":3,\"title\":\"vuepress的特点\",\"slug\":\"vuepress的特点\",\"link\":\"#vuepress的特点\",\"children\":[]}]},{\"level\":2,\"title\":\"vuepress如何使用\",\"slug\":\"vuepress如何使用\",\"link\":\"#vuepress如何使用\",\"children\":[{\"level\":3,\"title\":\"为什么会有这篇文章\",\"slug\":\"为什么会有这篇文章\",\"link\":\"#为什么会有这篇文章\",\"children\":[]},{\"level\":3,\"title\":\"前置知识\",\"slug\":\"前置知识\",\"link\":\"#前置知识\",\"children\":[]}]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"about/vuepress.md\"}")
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
