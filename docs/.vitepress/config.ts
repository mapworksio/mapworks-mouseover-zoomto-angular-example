import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  //base: '/~timothy/apidoc-mapworks/',
  title: "Mapworks",
  description: "Mapworks API Documentation",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'API', link: '/api/modules' },
      { text: 'Examples', link: '/examples/' },

    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          {
            text: 'Studio Template',
            link: '/examples/default-studio-template',
          },
          {
            text: 'Mouse',
            link: '/examples/default-mouseclick-template',
          },
          {
            text: 'Large example',
            link: '/examples/README',
          },

        ],
      },
      {
        text: 'API',
        items: [
          {
            text: 'API Reference',
            link: '/api/modules',
          }
        ],
      }
    ],

  socialLinks: [
    { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
  ]
}
})


