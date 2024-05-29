import { defineConfig } from 'vitepress'
// import { set_sidebar } from "../utils/auto-sidebar.mjs";	// 改成自己的路径
// import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import sidebar from './sidebar.mts';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/pyspt_1/",
  head:[["link",{rel:"icon",href:"/pyspt_1/logo_1.ico"}]],
  title: "PySPT",
  description: "一个专注于Python信号处理的工具箱",
  themeConfig: { 

    outlineTitle:"文章目录",
    outline:[2,6],
    logo:'/public/logo_2.png',
    returnToTopLabel:'返回顶部',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      // {text:"markdown实例",link:"/document/signal"},
      // {buttonText:'信号处理工具箱',link:'https://chatglm.cn/main/gdetail/6621da1f1fbf9e9eacf42551'},
      {text:'🚀信号处理AI助手',link:'https://chatglm.cn/main/gdetail/6621da1f1fbf9e9eacf42551'}
      
      
      

    ],
    docFooter: { 
      prev: '上一篇', 
      next: '下一篇', 
    }, 
    sidebar:sidebar,
  

    // sidebar: {
    //   // "/docs/signal": set_sidebar("docs/signal")
    //   "/docs/Signal_Processing" : set_sidebar("docs/Signal_Processing"),

      

    // },
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/spaitlab/pyspt' }
    ],
    footer:{
      copyright: "Copyright@2024  zhao",
    },
    
    // 搜索框
    search:{
      provider:"local",
      options:{
        translations:{
          button:{
            buttonText:"搜索文档",
            buttonAriaLabel:"搜索电脑",
          },
          modal:{
            noResultsText:"无法找到相关结果",
            resetButtonTitle:"清除查询条件",
            footer:{
              selectText:"选择",
              navigateText:"切换",
            },
          },
        },
      },
    },
    
  }
})


