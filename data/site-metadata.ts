export const SITE_METADATA = {
  title: `李的编码之旅`,
  author: 'dial lee',
  headerTitle: `编码之旅`,
  description: '用键盘述说着工作和生活中的点点滴滴',
  language: 'zh-CN',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.diallee.com',
  siteRepo: 'https://github.com/dial2lee/MyNext2Site',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/portrait.jpg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpg`,
  email: 'diallee@126.com',
  github: 'https://github.com/dial2lee',
  x: '',
  facebook: '',
  youtube: '',
  linkedin: '',
  threads: '',
  instagram: '',
  locale: 'zh-CN',
  stickyNav: true,
  goodreadsBookshelfUrl: '',
  goodreadsFeedUrl: '',
  imdbRatingsList: '',
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl: '',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
  support: {
    buyMeACoffee: '',
    paypal: '',
    kofi: '',
  },
}
