const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  base: '/docs/guide/',
  dest: './dist',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'SS CMS 7.0 向导',
      description: '超过 50 万网站的选择 — 加入这个大家庭'
    },
    '/en/': {
      lang: 'en-US',
      title: 'SS CMS 7.0 Guide',
      description: 'More than half a million websites using SS CMS - join the big family'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    repo: 'siteserver/docs',
    editLinks: true,
    docsDir: 'guide/docs',
    // #697 Provided by the official algolia team.
    // algolia: ctx.isProd ? ({
    //   apiKey: '3a539aab83105f01761a137c61004d85',
    //   indexName: 'vuepress'
    // }) : null,
    smoothScroll: true,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          // '/api/': getApiSidebar(),
          '/getting-started/': getGuideSidebar('SS CMS 入门', '系统运行配置', '托管和部署'),
          // '/plugin/': getPluginSidebar('插件', '介绍', '官方插件'),
          // '/theme/': getThemeSidebar('主题', '介绍')
        }
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          // '/en/api/': getApiSidebar(),
          '/en/getting-started/': getGuideSidebar('Introduction', 'Configuration', 'Host and deploy'),
          // '/en/plugin/': getPluginSidebar('Plugin', 'Introduction', 'Official Plugins'),
          // '/en/theme/': getThemeSidebar('Theme', 'Introduction')
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
    ['@vuepress/medium-zoom', true],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>'
    }],
    ['flowchart']
  ],
  extraWatchFiles: [
    '.vuepress/nav/zh.js',
    '.vuepress/nav/en.js'
  ]
})

function getApiSidebar () {
  return [
    'cli',
    'node'
  ]
}

function getGuideSidebar (groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: true,
      children: [
        '',
        'using-linux',
        'using-windows',
        'using-osx',
        'directory-structure',
        'glossary',
        // 'easy-start'
      ]
    },
    {
      title: groupB,
      collapsable: true,
      children: [
        'config',
        'config-urls.md',
        'config-database.md',
        'config-cache.md'
      ]
    },
    {
      title: groupC,
      collapsable: true,
      children: [
        'deploy',
        'deploy-linux-nginx',
        'deploy-linux-apache',
        'deploy-windows-iis'
      ]
    }
  ]
}

const officalPlugins = fs
  .readdirSync(path.resolve(__dirname, '../plugin/official'))
  .map(filename => 'official/' + filename.slice(0, -3))
  .sort()

function getPluginSidebar (pluginTitle, pluginIntro, officialPluginTitle) {
  return [
    {
      title: pluginTitle,
      collapsable: true,
      children: [
        ['', pluginIntro],
        'using-a-plugin',
        'writing-a-plugin',
        'life-cycle',
        'option-api',
        'context-api'
      ]
    },
    {
      title: officialPluginTitle,
      collapsable: true,
      children: officalPlugins
    }
  ]
}

function getThemeSidebar (groupA, introductionA) {
  return [
    {
      title: groupA,
      collapsable: true,
      sidebarDepth: 2,
      children: [
        ['', introductionA],
        'using-a-theme',
        'writing-a-theme',
        'option-api',
        'default-theme-config',
        'blog-theme',
        'inheritance'
      ]
    }
  ]
}
