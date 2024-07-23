const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Вставляет стили в DOM
          "css-loader", // Преобразует CSS в CommonJS
          "sass-loader", // Компилирует Sass в CSS
        ],
      },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src/"),
    },
  },
};
