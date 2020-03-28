// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const resolve = dir => path.join(__dirname, dir);
const IS_PROD = ["production"].includes(process.env.NODE_ENV);

module.exports = {
  publicPath: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : "/",
  runtimeCompiler: true,
  productionSourceMap: !IS_PROD,
  lintOnSave: true,
  devServer: {
    open: false,
    host: "0.0.0.0",
    port: 5168,
    https: false,
    historyApiFallback: true,
    proxy: {
      "/api": {
        // target: "http://192.168.58.60:8700", //文登
        // target: "http://192.168.58.70:8700", //金
        // target: "http://cc.proxy.jinyongyang.com", //金
        // target:'http://192.168.58.31:8800', // 一震
        target: "http://192.168.48.57:18701", // 测试
        changeOrigin: true
        // pathRewrite: { "^/api": "/" }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
    // config.resolve.extensions
    //   .add(".vue")
    //   .add(".ts")
    //   .add(".js");
    // config.plugins.delete("prefetch").delete("preload");
    // if (IS_PROD) {
    //   config.module
    //     .rule("images")
    //     .use("image-webpack-loader")
    //     .loader("image-webpack-loader")
    //     .options({
    //       mozjpeg: { progressive: true, quality: 65 },
    //       optipng: { enabled: false },
    //       pngquant: { quality: [0.65, 0.9], speed: 4 },
    //       gifsicle: { interlaced: false }
    //     })
    //     .end();
    // }
  },
  configureWebpack: config => {
    if (IS_PROD) {
      config.plugins.push();
      config.optimization = {
        splitChunks: {
          cacheGroups: {
            vendors: {
              name: "chunk-vendors",
              test: /[\\/]node_modules[\\/]/,
              chunks: "initial",
              priority: 1,
              reuseExistingChunk: true,
              enforce: true
            },
            elementUI: {
              name: "chunk-elementui",
              test: /[\\/]node_modules[\\/]element-ui[\\/]/,
              chunks: "all",
              priority: 2,
              reuseExistingChunk: true,
              enforce: true
            }
          }
        }
      };
      return {
        plugins: [
          new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: "static"
          })
        ]
      };
    } else {
      return {
        plugins: [new HardSourceWebpackPlugin()]
      };
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                @import "@/style/common/mixin.scss";
                @import "@/style/common/_var.scss";
            `
      }
    }
  }
};
