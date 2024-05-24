const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2024-05-24', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: 'Welcome to Blossom Artsy', url: 'https://blossomartsy.com' },
    { title: 'Have a good stay!', url: 'https://blossomartsy.com' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: 'Welcome to',
  HEO_HERO_TITLE_2: 'Blossom Artsy',
  HEO_HERO_TITLE_3: 'BlossomArtsy.com',
  HEO_HERO_TITLE_4: 'Subtitle',
  HEO_HERO_TITLE_5: 'Learn More About Us',
  HEO_HERO_TITLE_LINK: 'https://blossomartsy.com',

// Hero section displays three pinned categories
HEO_HERO_CATEGORY_1: { title: 'Must-Read Selection', url: '/tag/必看精选' },
HEO_HERO_CATEGORY_2: { title: 'Popular Articles', url: '/tag/热门文章' },
HEO_HERO_CATEGORY_3: { title: 'Practical Tutorials', url: '/tag/实用教程' },


 // Hero section right-side recommended article tag, e.g., [Recommended], up to six articles; if left empty '', it will recommend the most recently updated articles
HEO_HERO_RECOMMEND_POST_TAG: 'Recommended',
HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // Recommended articles sort order, when set to `true`, will force sort by last modified time in descending order
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

// Right-side personal profile card welcome messages, click to switch automatically
HEO_INFOCARD_GREETINGS: [
  'Hello! I am...',
  '🔍 Sharing and helpful',
  '🤝 Specialized in interaction and design',
  '🏃 Practical and action-oriented',
  '🏠 Smart home enthusiast',
  '🤖️ Digital technology enthusiast',
  '🧱 Team engine'
],
HEO_INFO_CARD_URL: 'https://blossomartsy.com', // Personal profile bottom button link

// User skill icons
  HEO_GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/images/blossom/1.jpeg',
      color_1: '#989bf8',
      title_2: 'Sketch',
      img_2: '/images/blossom/2.jpeg',
      color_2: '#ffffff'
    },
    {
      title_1: 'Docker',
      img_1: '/images/blossom/3.jpeg',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/images/blossom/4.jpeg',
      color_2: '#4082c3'
    },
    {
      title_1: 'FinalCutPro',
      img_1: '/images/blossom/5.jpeg',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/blossom/6.jpeg',
      color_2: '#ffffff'
    },
    {
      title_1: 'Swift',
      img_1: '/images/blossom/7.jpeg',
      color_1: '#eb6840',
      title_2: 'Principle',
      img_2: '/images/blossom/8.jpeg',
      color_2: '#8f55ba'
    },
    {
      title_1: 'illustrator',
      img_1: '/images/blossom/9.jpeg',
      color_1: '#f29e39',
      title_2: 'CSS3',
      img_2: '/images/blossom/10.jpeg',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/blossom/1.jpeg',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/images/blossom/2.jpeg',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: '/images/blossom/3.jpeg',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: '/images/blossom/4.jpeg',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: 'Communication',
  HEO_SOCIAL_CARD_TITLE_2: 'Join our community discussions...',
  HEO_SOCIAL_CARD_TITLE_3: 'Click to join the community',
  HEO_SOCIAL_CARD_URL: 'https://blossomartsy.com',

// ***** The following configuration is invalid, reserved for development ****
// Menu configuration
HEO_MENU_INDEX: true, // Show Home
HEO_MENU_CATEGORY: true, // Show Categories
HEO_MENU_TAG: true, // Show Tags
HEO_MENU_ARCHIVE: true, // Show Archive
HEO_MENU_SEARCH: true, // Show Search

HEO_POST_LIST_COVER: true, // Show post cover in list
HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // Enlarge cover on hover in list

HEO_POST_LIST_COVER_DEFAULT: true, // Use site background as default cover if cover is empty
HEO_POST_LIST_SUMMARY: true, // Post summary
HEO_POST_LIST_PREVIEW: false, // Read post preview
HEO_POST_LIST_IMG_CROSSOVER: true, // Alternate blog list images left and right

HEO_ARTICLE_ADJACENT: true, // Show previous and next article recommendations
HEO_ARTICLE_COPYRIGHT: true, // Show article copyright statement
HEO_ARTICLE_RECOMMEND: true, // Related article recommendations

HEO_WIDGET_LATEST_POSTS: true, // Show latest posts card
HEO_WIDGET_ANALYTICS: false, // Show analytics card
HEO_WIDGET_TO_TOP: true, // Scroll to top
HEO_WIDGET_TO_COMMENT: true, // Jump to comments section
HEO_WIDGET_DARK_MODE: true, // Dark mode
HEO_WIDGET_TOC: true // Floating table of contents for mobile
}
export default CONFIG
