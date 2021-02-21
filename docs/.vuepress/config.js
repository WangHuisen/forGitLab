module.exports = {
  //基础配置
  title: '月河随笔',
  description: '王汇森的个人博客',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', {rel: 'icon', href:'/favicon.ico'}]
  ],
  //多语言支持配置
  // locales: {
  //   '/': {
  //     lang: 'zh-CN'
  //   },
  //   '/en/': {
  //     lang: 'en-US'
  //   }
  // },
  //主题设置
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    //个人信息设置
    author: 'WHS',
    authorAvatar: '/头像.jpg',
    logo: '/logo.jpg',
    //导航栏配置
    nav: [
      { text: '主页', link: '/', icon: 'reco-home'},
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '联系方式', 
      items: [{text: '码云', link: 'https://gitee.com/wanghiusen', icon: 'reco-mayun'}, {text: 'GitHub', link: 'https://github.com/WangHuisen', icon: 'reco-github'}],
      icon: 'reco-message'}
    ],
    //侧边栏
    subSidebar: 'auto',
    //评论区配置
    valineConfig: {
      appId: 'nEc04buX3gtD9zq0vvQ7fscl-9Nh9j0Va',
      appKey: 'lf20xyat64t2nyGJnQIT6Svb',
    },
    //友链配置
    friendLink: [
      {
        title: 'Yharea',
        desc: '小帅哥的博客',
        logo: "https://cdn.jsdelivr.net/gh/wyh2001/wyh2001.github.io/img/favicon.png",
        link: 'https://yharea.com/'
      }
    ],
    //博客配置
    blogConfig: {
      category: {
        location: 2,
        text: '目录'
      },
      tag: {
        location: 3,
        text: '标签'
      },
      socialLinks: [
        { icon: 'reco-github', link: 'https://github.com/recoluan' },
        { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
      ]
    }
  }
}