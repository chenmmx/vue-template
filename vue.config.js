module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.1.1:10081",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api"
        }
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#5862CB",
          "link-color": "#5862CB",
          "border-radius-base": "5px"
        },
        javascriptEnabled: true
      }
    }
  }
};
