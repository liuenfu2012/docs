module.exports = ctx => ({
  base: '/docs/guide/',
  dest: '/dist/docs/guide',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'SiteServer CMS 教程',
      description: '开源、免费、企业级'
    },
    '/en/': {
      lang: 'en-US',
      title: 'SiteServer CMS Guide',
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
    docsDir: 'guide',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/': getSidebar('指南', '命令', '深入')
        }
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/en/': getSidebar('Guide', 'Commands', 'Advanced')
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

function getSidebar (groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'setup'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'install',
        'backup',
        'restore',
        'update',
        'version'
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: [
        'older-version-upgrade',
        'content-split',
        'connection-string',
        'data-translate',
      ]
    }
  ]
}
