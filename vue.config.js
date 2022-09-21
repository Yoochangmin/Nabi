const target = "http://127.0.0.1:8080";

module.exports = {
  devServer: {
    port: 8081,
    proxy: {
      //proxy 요청을 보낼 api 시작 부분
      "^/api": {
        target,
        changeOrigin: true,
      },
    },
  },
  transpileDependencies: ["vuetify"],
};
