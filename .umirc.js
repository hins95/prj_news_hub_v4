
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      pwa: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'prj_news_hub_v4',
      dll: true,
      library: 'preact',

      hd: true,
      fastClick: true,
      metas: [{charset: 'utf-8'}],
      links: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
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

      // manifest: {
      //   basePath: '/',
      // },
    }],
  ],
}
