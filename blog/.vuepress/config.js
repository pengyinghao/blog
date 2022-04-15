const isProd = process.env.NODE_ENV === "production";
module.exports = {
  base: isProd ? "/blog/" : "./",
  title: "PengYH",
  description: "一名不爱学习的程序员",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg",
        href: `/img/logo/logo.svg`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/svg",
        href: `/img/logo/logo.svg`,
      },
    ],
    ["meta", { name: "application-name", content: "PengYH" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "PengYH" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "apple-touch-icon", href: `/images/icons/logo.svg` }],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }],
  ],
  bundler: "@vuepress/vite",
  theme: "vuepress-theme-gungnir",
  themeConfig: {
    repo: "Renovamen/renovamen.github.io",
    docsDir: "blog",
    docsBranch: "master",
    hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?
    // personal information
    personalInfo: {
      name: "peng",
      avatar: "/img/avatar.jpg",
      description: "一名不爱学习的程序员",
      sns: {
        github: "pengyinghao",
        zhihu: "https://www.zhihu.com/people/peng-ying-hao-64",
        email: "peng.yh@qq.com",
      },
    },

    // 首页头像
    homeHeaderImages: [
      {
        path: "/img/home-bg/2.jpeg",
      },
      {
        path: "/img/home-bg/3.jpeg",
        mask: "rgba(68, 74, 83, .1)",
      },
      {
        path: "/img/home-bg/4.jpeg",
        mask: "rgba(19, 75, 50, .2)",
      },
      {
        path: "/img/home-bg/5.jpg",
      },
    ],

    // 其他页面
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)",
        },
      },
    },
    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      // giscus: {
      //   repo: "This-is-an-Apple/blog-giscus-comments",
      //   repoId: "R_kgDOGl2SjQ",
      //   category: "Announcements",
      //   categoryId: "DIC_kwDOGl2Sjc4CAcxK",
      //   darkTheme: "https://zxh.io/styles/giscus-dark.css",
      // },
      mdPlus: {
        all: true,
      },
      // ga: "G-HCQSX53XFG", // 谷歌统计
      // ba: "75381d210789d3eaf855fa16246860cc",//百度统计
      // rss: {
      //   siteURL: "https://zxh.io",
      //   copyright: "Renovamen 2018-2022",
      // },
      pwa: false,
    },
    navbar: [
      {
        text: "首页",
        link: "/",
        icon: "fa-fort-awesome",
      },
      {
        text: "关于",
        link: "/about/",
        icon: "fa-paw",
      },
      {
        text: "标签",
        link: "/tags/",
        icon: "fa-tag",
      },
    ],
    footer: `
      &copy; <a href="https://github.com/pengyinghao" target="_blank">peng blog</a> 2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `,
  },

  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5],
    },
    code: {
      lineNumbers: false,
    },
  },
};
