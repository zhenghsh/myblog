module.exports = {
    title: "我的个人博客",
    description: "正函数的个人博客",
    // 添加浏览器图标
    head : [
        ["link",{rel:"icon",href:"/logo.svg"}]
    ],
    themeConfig: {
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        nav: [
          { text: '首页', link: '/' },
          { text: '基础教程', link: '/basics/' },
          { text: '项目实战', link: '/project/' },
          {text: '语言',
            ariaLabel: 'Language Menu',
            items: [
              { text: '简体中文', link: '/language/chinese/' },
              { text: 'English', link: '/language/english/' }
            ]},
          { text: '页面4', link: '/' },
          { text: '页面5', link: '/' },
          { text: '分享', link: 'https://google.com' },
        ],
        sidebar: {
            "/basics/":[
                '',
                'one',
                'tow'
            ]
        }
      }
    }