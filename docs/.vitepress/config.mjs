import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Mermaid 配置
  
    // 禁用默认主题
  

  title: "Notes by 2025",
  description: "个人技术博客 - 记录学习、分享技术、思考生活",
  base: '/notesby2025/',
  

  // SEO 配置
  head: [
    ['meta', { name: 'keywords', content: '技术博客,前端开发,后端技术,DevOps,读书笔记,生活随笔' }],
    ['meta', { name: 'author', content: 'Your Name' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Notes by 2025' }],
    ['meta', { property: 'og:locale', content: 'zh-CN' }],
    ['link', { rel: 'icon', href: 'favicon.ico' }]
  ],

  // 主题配置
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      {
          text: '分类',
          items: [
            { text: '前端开发', link: '/categories/frontend/' },
            { text: '后端技术', link: '/categories/backend/' },
            { text: '工 程 化', link: '/categories/engineering/' },
            { text: 'CSS/HTML', link: '/categories/style/' },
            { text: '项目实战', link: '/categories/projects/' },
            { text: '技术文章', link: '/categories/technology/' },
            { text: 'err报错', link: '/categories/errors/' }
          ]
        },
      { text: '归档', link: '/archives/' },
      { text: '标签', link: '/tags/' },
      { text: '关于', link: '/about' }
    ],

    // 侧边栏
    sidebar: {
      '/categories/frontend/': {
        text: '前端开发',
        link: 'index',
        base: '/categories/frontend/',
        items: [
          {
            text: '前端基础',
            items: [
              { 
                text: 'JavaScript', 
                link: 'jsts/js/',
                items: [
                  { text: '浏览器', link: 'jsts/js/broswer/' },
                  { text: 'Promise', link: 'jsts/js/promise/' },
                  { text:'其他', link:'jsts/js/others/' }
                ]
              },
              { text: 'TypeScript', link: 'jsts/ts/' }
            ]
          },
          {
            text: '前端框架',
            items: [
              { text: 'Vue.js', link: 'frameworks/vue/' },
              { text: 'React', link: 'frameworks/react/' },
              { text: 'Electron', link: 'frameworks/electron/' }
            ]
          },
          {
            text: '前端工具',
            items: [
            ]
          }
        ]
      },
      '/categories/backend/': {
        text: '后端技术',
        link: 'index',
        base: '/categories/backend/',
        items: [
          {
            text:'Python',
            link:'python/'
          },
          {
            text:'Node.js',
            link:'nodejs/'
          },
          {
            text:'数据库',
            link:'database/'
          }
        ]
      },
      '/categories/engineering/': {
        text: '工程化',
        link: 'index',
        base: '/categories/engineering/',
        items: [
          {
            text: '构建工具',
            items: [
              { text: 'Webpack', link: 'build-tools/webpack/' },
              { text: 'Vite', link: 'build-tools/vite/' },
              { text: 'Rollup', link: 'build-tools/rollup/' }
            ]
          }
        ]
      },
      '/categories/projects/': {
        text: '项目实战',
        link: 'index',
        base: '/categories/projects/',
        items: [
          {
            text: '练手DEMO',
            link: 'demos/',
            items: [
              { text: '静态仿王者荣耀网站', link: 'demos/pvp/' },
            ]
          },
          {
            text: '前端项目',
            items: [
              { text: 'React项目', link: 'frontend/react/' },
              { text: 'Vue项目', link: 'frontend/vue/' }
            ]
          }
        ]
      },
      '/categories/technology/': {
        text: '技术文章',
        link: 'index',
        base: '/categories/technology/',
        items: [
          {
            text: '技术分类',
            items: [
              { text: '前沿技术', link: 'latest/' },
              { text: '架构设计', link: 'architecture/' },
              { text: '性能优化', link: 'performance/' }
            ]
          }
        ]
      },
      '/categories/reading/': {
        text: '读书笔记',
        link: 'index',
        base: '/categories/reading/',
        items: [
          {
            text: '技术书籍',
            items: [
              { text: '前端相关', link: 'tech/frontend/' },
              { text: '后端相关', link: 'tech/backend/' },
              { text: '算法相关', link: 'tech/algorithms/' }
            ]
          }
        ]
      },
      '/categories/style/': {
        text: '样 式',
        link: 'index',
        base: '/categories/style/',
        items: [
          {
            text: '样式分类',
            items: [
              { text: 'CSS', link: 'css/' ,
                items: [
                  { text: '基础样式', link: 'css/base' },
                  { text: '页面布局与排版', link: 'css/layout' },
                  { text: '定位与浮动', link: 'css/position' },
                  { text: '场景', link: 'css/use' }
                ]
              },
              { text: 'SCSS', link: 'scss/' },
              { text: 'Tailwind CSS', link: 'tailwind/' }
            ]
          }
        ]
      },
      '/categories/errors/': {
        text: 'err报错',
        link: 'index',
        base: '/categories/errors/',
        items: [
          {
            text: '常见错误',
            items: [
              { text: '前端错误', link: 'frontend/' },
              { text: '后端错误', link: 'backend/' },
              { text: '部署错误', link: 'deployment/' }
            ]
          },
          {
            text: '错误排查',
            items: [
              { text: '调试技巧', link: 'debugging/' },
              { text: '错误日志', link: 'logs/' },
              { text: '性能问题', link: 'performance/' }
            ]
          }
        ]
      }
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sonnenlicht77/notesby2025' }
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Your Name'
    },

    // 搜索
    search: {
      provider: 'local'
    },

    // 最后更新时间
    lastUpdated: true,

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/your-username/notesby2025/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    logo: '/logo.svg',

  },

  // Markdown 配置
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // 可以在这里添加 markdown-it 插件
    },
    mermaid: true,
    image:{
      lazyLoad: true
    }
  },

  // 外观
  appearance: true,

  // 忽略死链接
  ignoreDeadLinks: true
})
