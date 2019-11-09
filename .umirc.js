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
  base: '/prj_news_hub_v4/dist/',
  publicPath: '/prj_news_hub_v4/dist/',
  manifest: {
    basePath: '/prj_news_hub_v4/dist/',
  },
  plugins: [
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
      metas: [{ charset: 'utf-8' }],
      links: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        // { rel: 'apple-touch-icon', href: './assets/images/apple-touch-icon-1024x1024.png' },
        // { rel: 'icon', href: './assets/images/favicon.ico', type: 'image/x-icon' },
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
