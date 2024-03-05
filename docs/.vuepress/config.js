import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

//引入导航栏
const nav = require('./nav.js')

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        navbar: nav,
        logo: 'https://vuejs.org/images/logo.png',
        logoAlt: null,
        repo: '',
        sidebar: 'auto',
        lastUpdated: '上次更新',
    }),
    pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules'],
    title: 'Anthony'
})