import comp from "G:/Blog/docs/.vuepress/.temp/pages/about/about.html.vue"
const data = JSON.parse("{\"path\":\"/about/about.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"about/about.md\"}")
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
