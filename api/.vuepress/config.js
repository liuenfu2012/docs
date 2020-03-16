module.exports = ctx => ({
  base: '/docs/api/',
  dest: './wwwroot/docs/api',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'SiteServer REST API',
      description: '开源、免费、企业级'
    },
    '/en/': {
      lang: 'en-US',
      title: 'SiteServer REST API',
      description: 'Open Source, Free, Enterprise'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    repo: 'siteserver/cms',
    editLinks: true,
    docsRepo: 'siteserver/docs',
    docsDir: 'api',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/guide/': getGuideSidebar('指南', 'Contents 内容API', 'Channels 栏目API', 'Sites 站点API', 'Administrators 管理员API', 'Users 用户API', 'STL 模板语言API', '其他 API')
        }
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/en/guide/': getGuideSidebar('Guide', 'Commands', 'Advanced')
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true]
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/zh.js',
  ]
})

function getGuideSidebar (group1, group2, group3, group4, group5, group6, group7, group8) {
  return [
    {
      title: group1,
      collapsable: false,
      children: [
        '',
        'authentication',
        'pagination',
        'error'
      ]
    },
    {
      title: group2,
      collapsable: false,
      children: [
        'contents/',
        'contents/list',
        'contents/get',
        'contents/create',
        'contents/update',
        'contents/delete',
        'contents/check'
      ]
    },
    {
      title: group3,
      collapsable: false,
      children: [
        'channels/',
        'channels/create',
        'channels/update',
        'channels/delete',
        'channels/get',
        'channels/listSite',
        'channels/listChannel',
        'channels/search',
      ]
    },
    {
      title: group4,
      collapsable: false,
      children: [
        'sites/',
        'sites/create',
        'sites/update',
        'sites/delete',
        'sites/get',
        'sites/listSite',
        'sites/listChannel',
        'sites/search',
      ]
    },
    {
      title: group5,
      collapsable: false,
      children: [
        'administrators/',
        'administrators/create',
        'administrators/update',
        'administrators/delete',
        'administrators/get',
        'administrators/list',
        'administrators/login',
        'administrators/logout',
        'administrators/resetPassword'
      ]
    },
    {
      title: group6,
      collapsable: false,
      children: [
        'users/',
        'users/create',
        'users/update',
        'users/delete',
        'users/get',
        'users/getAvatar',
        'users/updateAvatar',
        'users/list',
        'users/login',
        'users/logout',
        'users/resetPassword',
        'users/createLog',
        'users/getLogs',
      ]
    },
    {
      title: group7,
      collapsable: false,
      children: [
        'stl/',
        'stl/a',
        'stl/channel',
        'stl/channels',
        'stl/content',
        'stl/contents',
        'stl/site',
        'stl/sites',
        'stl/sqlContent',
        'stl/sqlContents',
      ]
    },
    {
      title: group8,
      collapsable: false,
      children: [
        'other/captchaGet',
        'other/captchaCheck',
        'other/ping',
      ]
    }
  ]
}
