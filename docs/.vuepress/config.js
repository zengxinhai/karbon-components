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
      { text: 'Design Tokens', link: '/design-tokens/' },
      { text: 'Elements', link: '/elements/' },
      { text: 'Patterns', link: '/patterns/' },
      { text: 'Templates', link: '/templates/' },
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
    lastUpdated: 'Last Updated'
  }
}
