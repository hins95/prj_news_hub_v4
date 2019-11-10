// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
      ],
    },
  ],
  base: ' /prj_news_hub_v4/dist/',
  publicPath: '/prj_news_hub_v4/dist/',
  manifest: {
    basePath: '/prj_news_hub_v4/dist/',
  },
  plugins: [
    ['babel-plugin-transform-remove-console', { 'exclude': ['error', 'warn'] }],
    [
      'babel-plugin-import',
      {
        'libraryName': '@material-ui/core',
        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
        'libraryDirectory': 'esm',
        'camel2DashComponentName': false,
      },
      'core',
    ],
    [
      'babel-plugin-import',
      {
        'libraryName': '@material-ui/icons',
        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
        'libraryDirectory': 'esm',
        'camel2DashComponentName': false,
      },
      'icons',
    ],
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      pwa: {
        workboxOptions: {
          runtimeCaching: [
            {
              urlPattern: new RegExp('^https://newsapi\.org/'),
              handler: 'networkFirst',
              options: {
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
      },
      dva: {
        immer: true,
      },
      dynamicImport: { webpackChunkName: true },
      title: 'US News',
      dll: true,
      library: 'react',

      // hd: true,
      fastClick: true,
      metas: [
        { charset: 'utf-8' },

        {property: "og:title", content: "US News Hub"},
        {property: "og:type", content: "website"},
        {property: "og:url", content: "https://hins95.github.io/prj_news_hub_v2/dist/index.html#/"},
        {property: "og:image", content: "./assets/images/preview-screens/mobile.png"},
        // {property: "og:image:secure_url", content: "https://dummyimage.com/400x300/000/fff"},
        {property: "og:image:type", content: "image/jpeg"},
        {property: "og:image:width", content: "640"},
        {property: "og:image:height", content: "1216"},
        {property: "og:image:alt", content: "Display 100 news articles from Washington Post and New York Times."},
        {property: "og:image:alt", content: "Display 100 news articles from Washington Post and New York Times."},
        {name: "description", content: "Display 100 news articles from Washington Post and New York Times."},
        {name: "keywords", content: "us news,Washington Post,New York Times"},

      ],
      links: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'apple-touch-icon', href: './assets/images/apple-touch-icon-1024x1024.png' },
        { rel: 'icon', href: './assets/images/favicon.ico', type: 'image/x-icon' },
      ],
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
      // ssr: true,

    }],
  ],
};
