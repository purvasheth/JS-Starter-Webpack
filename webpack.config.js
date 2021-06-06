const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const webpackConfig = {
	entry: path.resolve(__dirname, "src", "index.js"),

	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
    clean: true
	},

  mode: "development",

  module:{
    rules:[
      {
        test:/\.js$/,
        exclude: /(node_modules)/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use:['style-loader', 'css-loader']
      },{
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset"
      }
    ]
  },

  plugins:[
    new HtmlWebpackPlugin({
      title:'JS Starter with Webpack',
      template: path.resolve(__dirname,"src","index.html")
    })
  ]

};

module.exports = webpackConfig;