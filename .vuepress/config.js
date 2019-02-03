module.exports = {
  title: 'SiteServer CMS 文档中心',
  description: '开源、免费、企业级',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  base: '/docs/',
  themeConfig: {
    home: true,
    nav: [
      { text: '首 页', link: '/' },
      { text: '开 始', link: '/getting-started/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/getting-started/': [
        {
          title: '快速上手',
          collapsable: false,
          children: [
            '',
            'how-to-install-siteserver-cms',
            'how-to-login-cms',
            'how-to-create-website',
            'how-to-switch-website',
            'how-to-add-edit-content',
            'how-to-edit-channel',
            'how-to-edit-website',
            'how-to-build-webpage',
            'how-to-view-webpage',
          ]
        },
        {
          title: '概念',
          collapsable: false,
          children: [
            'what-is-website.md',
            'what-is-channel.md',
            'what-is-content.md',
            'what-is-webpage.md',
            'what-is-template.md',
            'what-is-stl-language.md',
            'what-is-plugin.md',
          ]
        },
        {
          title: '附录',
          collapsable: false,
          children: [
            'what-is-website.md',
            'official-resource',
            'how-to-install-iis',
            'how-to-install-net-framework',
            'how-to-install-sqlserver',
          ]
        }
      ]
    },
    lastUpdated: '上次更新',
    repo: 'siteserver/docs',
    editLinks: true,
    editLinkText: '帮助我们改进此文档',
    algolia: {
      apiKey: '3a539aab83105f01761a137c61004d85',
      indexName: 'vuepress'
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/notification', true]
  ]
}