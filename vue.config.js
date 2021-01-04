module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://10.10.110.132:3000/User",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#2C8CEC",
          "link-color": "#2C8CEC",
          "border-radius-base": "6px"
        },
        javascriptEnabled: true
      }
    }
  }
};
