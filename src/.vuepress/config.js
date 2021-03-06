const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Bobby Home',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: 'hsl(220, 93%, 35%)' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'bobby-home/doc.bobby-home.com',
    editLinks: true,
    docsDir: 'src',
    editLinkText: 'Edit this page on GitHub',

    lastUpdated: true,
    displayAllHeaders: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'API',
        link: '/api/',
      },
      {
        text: 'Github',
        link: 'https://github.com/mxmaxime/bobby-home'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      },
    ],
    sidebar: {
      '/api/': [
        {
          title: 'MQTT API',
          collapsable: true,
          children: [
            'mqtt/',
            'mqtt/alarm'
          ]
        },
        {
          title: 'Core',
          collapsable: true,
          children: [
            'core/',
            'core/camera.md'
          ]
        }
      ],
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'setup/',
            'setup/deploy',
            'setup/logs',
            'setup/upgrade',
          ]
        },
        {
          title: 'Core',
          children: [
            // 'core/',
            'core/architecture',
            'core/automations.md',
            'core/alarm.md',
            'core/task-queue',
            'core/tasks',
            'core/telegram',
            'core/monitor-mqtt-services.md',
            'core/dates',
          ]
        },
        {
          title: 'Smart camera',
          children: [
            'smart-camera/',
            'smart-camera/architecture.md',
            'smart-camera/docker.md',
            'smart-camera/tensorflow.md',
            'smart-camera/livestream.md',
          ]
        },
        {
          title: 'Docker',
          children: [
            'docker/',
          ]
        },
        {
          title: 'MQTT',
          children: [
            'mqtt/',
            'mqtt/docker.md',
            'mqtt/troubleshooting.md',
            'mqtt/cli-testing.md'
          ]
        },
        {
          title: 'Logs',
          children: [
            'logs/'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
