"use strict";
const path = require("path");

module.exports = {
  // 시작점
  entry: {
    main: ["./src/main.js"],
  },
  // 빌드점
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js",
  },
  // 어떤 것 들을 빌드에 넣을 것 인가 ?
  module: {
    rules: [
      {
        //문자열의 규칙을 정해준다
        test: /\.js$/,
        include: path.resolve(__dirname, "./src"),
        loader: "babel-loader",
      },
    ],
  },
  // 추가 기능
  plugins: [],
  // 어떤 devServer
  devServer: {
    contentBase: "./public",
    host: "localhost",
    port: 3030,
  },
};
