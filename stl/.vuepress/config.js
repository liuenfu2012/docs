module.exports = ctx => ({
  base: '/docs/stl/',
  dest: './dist/docs/stl',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'SiteServer STL 语言',
      description: '开源、免费、企业级'
    },
    '/en/': {
      lang: 'en-US',
      title: 'SiteServer STL Language',
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
    docsDir: 'stl',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/guide/': getGuideSidebar('指南', '索引'),
        }
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/en/guide/': getGuideSidebar('Guide', 'Index'),
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

function getGuideSidebar (groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'glossary',
        'elements',
        'entities',
        'include',
        'context',
        'dynamic',
        'list',
        'content',
      ]
    },
    {
      title: groupB,
      collapsable: true,
      children: [
        '../a/',
        '../action/',
        '../audio/',
        '../channel/',
        '../channels/',
        '../container/',
        '../content/',
        '../contents/',
        '../count/',
        '../dynamic/',
        '../each/',
        '../file/',
        '../flash/',
        '../focusViewer/',
        '../if/',
        '../image/',
        '../include/',
        '../itemTemplate/',
        '../loading/',
        '../location/',
        '../marquee/',
        '../navigation/',
        '../no/',
        '../pageChannels/',
        '../pageItem/',
        '../pageItems/',
        '../pageSqlContents/',
        '../player/',
        '../printer/',
        '../queryString/',
        '../rss/',
        '../search/',
        '../select/',
        '../site/',
        '../sites/',
        '../sqlContent/',
        '../sqlContents/',
        '../tabs/',
        '../tags/',
        '../tree/',
        '../value/',
        '../video/',
        '../yes/',
        '../zoom/'
      ]
    }
  ]
}

function getAdvancedSidebar (groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'glossary',
        'elements',
        'entities',
        'include',
        'context',
        'dynamic',
        'list',
        'content',
      ]
    }
  ]
}

function getEntitiesSidebar (groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'glossary',
        'elements',
        'entities',
        'include',
        'context',
        'dynamic',
        'list',
        'content',
      ]
    }
  ]
}