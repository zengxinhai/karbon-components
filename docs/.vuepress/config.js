module.exports = {
  title: 'Karbon Design System',
  description: 'It is a design system for Karbon Products',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      {
        text: 'Design Elements',
        items: [
          { text: 'Tokens', link: '/tokens/' }, 
          { text: 'Components', link: '/components/' }
        ]
      }
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
    lastUpdated: 'Last Updated'
  }
}
