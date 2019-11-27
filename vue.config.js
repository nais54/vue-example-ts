"use strict";

module.exports = {
  transpileDependencies: ["vuetify"],

  devServer: {
    proxy: {
      // proxyTable 설정
      "/api": {
        target: "http://192.168.1.140:9012/ServiceHost.svc",
        changeOrigin: true,
      },
    },
  },

  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        options.transpileOptions = {
          transforms: {
            dangerousTaggedTemplateString: true,
          },
        };
        return options;
      });

    config.performance.maxEntrypointSize(5000000).maxAssetSize(5000000);
  },
};
