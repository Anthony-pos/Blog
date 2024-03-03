import comp from "G:/Blog/docs/.vuepress/.temp/pages/Vue/vue2x/02.html.vue"
const data = JSON.parse("{\"path\":\"/Vue/vue2x/02.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"02\",\"slug\":\"_02\",\"link\":\"#_02\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"Vue/vue2x/02.md\"}")
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
