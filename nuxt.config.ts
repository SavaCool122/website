import type { NitroConfig } from 'nitropack'
import packagesRedirects from './config/packages-redirects'

export default defineNuxtConfig({
  app: {
    head: {
      templateParams: {
        separator: '·',
      },
    },
  },
  modules: [
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxthq/studio',
    '@nuxtjs/plausible',
    'nuxt-payload-analyzer',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
  ],
  css: [
    '~/assets/app.css',
  ],
  ui: {
    icons: ['heroicons', 'simple-icons', 'vscode-icons'],
  },
  nitro: {
    static: true,
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ['/', '/blog', '/packages', '/categories', '/api/search.txt', '/api/content/packages.json', '/rss.xml', '/rss.xml', '/blog/rss.xml', '/learn/rss.xml', '/explore/rss.xml', '/build/rss.xml', '/robots.txt', '/sitemap.xml'],
    },
    routeRules: {
      '/api/content/**': {
        cache: {
          maxAge: 60 * 60 * 24 * 7, // 7 days
        },
      },
      '/api/github/**': {
        cache: {
          maxAge: 60 * 60 * 24 * 7, // 7 days
        },
      },
      '/api/npm/**': {
        cache: {
          maxAge: 60 * 60 * 24 * 7, // 7 days
        },
      },
      // Temporary to have time to create the resources page
      '/resources': {
        redirect: {
          to: '/resources/learn',
          statusCode: 302,
        },
      },
      '/blog/2023-08-25-nitro-2.6': {
        redirect: {
          statusCode: 301,
          to: '/blog/2023-08-25-nitro-2-6',
        },
      },
    },
  },
  content: {
    documentDriven: false,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  colorMode: {
    preference: 'dark',
  },
  fontMetrics: {
    fonts: ['Nunito'],
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Nunito: [300, 400, 500, 600, 700, 800],
    },
  },
  ogImage: {
    fonts: [
      'Nunito:400',
      'Nunito:700',
    ],
  },
  site: {
    defaultLocale: 'en',
    url: 'https://unjs.io',
    separator: '·',
    name: 'UnJS',
    description: 'Agnostic Excellence: JavaScript Libraries, Tools, and Utilities, Crafted to Elevate Your Coding Journey.',
    identity: {
      type: 'Organization',
    },
    trailingSlash: false,
  },
  linkChecker: {
    enabled: false,
  },
  routeRules: {
    ...packagesRedirects as NitroConfig['routeRules'],
  },
  devtools: {
    enabled: true,
  },
})
