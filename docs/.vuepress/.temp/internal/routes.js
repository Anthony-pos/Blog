export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"G:/Blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/about/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"G:/Blog/docs/.vuepress/.temp/pages/about/about.html.js"), meta: {"title":""} }],
  ["/about/vuepress.html", { loader: () => import(/* webpackChunkName: "vuepress.html" */"G:/Blog/docs/.vuepress/.temp/pages/about/vuepress.html.js"), meta: {"title":""} }],
  ["/database/MySQL/MySQL.html", { loader: () => import(/* webpackChunkName: "MySQL.html" */"G:/Blog/docs/.vuepress/.temp/pages/database/MySQL/MySQL.html.js"), meta: {"title":""} }],
  ["/database/Redis/Redis.html", { loader: () => import(/* webpackChunkName: "Redis.html" */"G:/Blog/docs/.vuepress/.temp/pages/database/Redis/Redis.html.js"), meta: {"title":""} }],
  ["/database/SQL%20Server/SQL%20Server.html", { loader: () => import(/* webpackChunkName: "SQL Server.html" */"G:/Blog/docs/.vuepress/.temp/pages/database/SQL Server/SQL Server.html.js"), meta: {"title":""} }],
  ["/database/MongoDB/MongoDB.html", { loader: () => import(/* webpackChunkName: "MongoDB.html" */"G:/Blog/docs/.vuepress/.temp/pages/database/MongoDB/MongoDB.html.js"), meta: {"title":""} }],
  ["/Linux/00.Introduction%20to%20Linux.html", { loader: () => import(/* webpackChunkName: "00.Introduction to Linux.html" */"G:/Blog/docs/.vuepress/.temp/pages/Linux/00.Introduction to Linux.html.js"), meta: {"title":"Linux简介"} }],
  ["/Linux/01.Linux%20installation.html", { loader: () => import(/* webpackChunkName: "01.Linux installation.html" */"G:/Blog/docs/.vuepress/.temp/pages/Linux/01.Linux installation.html.js"), meta: {"title":"Linux Ubuntn安装"} }],
  ["/Vue/vue2x/01.html", { loader: () => import(/* webpackChunkName: "01.html" */"G:/Blog/docs/.vuepress/.temp/pages/Vue/vue2x/01.html.js"), meta: {"title":""} }],
  ["/Vue/vue2x/02.html", { loader: () => import(/* webpackChunkName: "02.html" */"G:/Blog/docs/.vuepress/.temp/pages/Vue/vue2x/02.html.js"), meta: {"title":""} }],
  ["/Vue/vue2x/03.html", { loader: () => import(/* webpackChunkName: "03.html" */"G:/Blog/docs/.vuepress/.temp/pages/Vue/vue2x/03.html.js"), meta: {"title":""} }],
  ["/Vue/vue2x/04.html", { loader: () => import(/* webpackChunkName: "04.html" */"G:/Blog/docs/.vuepress/.temp/pages/Vue/vue2x/04.html.js"), meta: {"title":""} }],
  ["/Vue/vue2x/05.html", { loader: () => import(/* webpackChunkName: "05.html" */"G:/Blog/docs/.vuepress/.temp/pages/Vue/vue2x/05.html.js"), meta: {"title":""} }],
  ["/Vue/vue2x/06.html", { loader: () => import(/* webpackChunkName: "06.html" */"G:/Blog/docs/.vuepress/.temp/pages/Vue/vue2x/06.html.js"), meta: {"title":""} }],
  ["/Vue/vue2x/07.html", { loader: () => import(/* webpackChunkName: "07.html" */"G:/Blog/docs/.vuepress/.temp/pages/Vue/vue2x/07.html.js"), meta: {"title":""} }],
  ["/Vue/vue2x/08.html", { loader: () => import(/* webpackChunkName: "08.html" */"G:/Blog/docs/.vuepress/.temp/pages/Vue/vue2x/08.html.js"), meta: {"title":""} }],
  ["/Vue/vue2x/09.html", { loader: () => import(/* webpackChunkName: "09.html" */"G:/Blog/docs/.vuepress/.temp/pages/Vue/vue2x/09.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"G:/Blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
