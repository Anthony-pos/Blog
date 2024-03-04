import comp from "G:/Blog/docs/.vuepress/.temp/pages/Vue/vue2x/01.html.vue"
const data = JSON.parse("{\"path\":\"/Vue/vue2x/01.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"01\",\"slug\":\"_01\",\"link\":\"#_01\",\"children\":[]}],\"git\":{\"updatedTime\":1709480523000,\"contributors\":[{\"name\":\"Anthony-pos\",\"email\":\"1169505302@qq.com\",\"commits\":1}]},\"filePathRelative\":\"Vue/vue2x/01.md\"}")
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
