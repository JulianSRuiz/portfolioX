const webpack = require('webpack');
module.exports = {
  entry: './src/app.js',
  output:{
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test:/\.js?$/,
        loader:'babel',
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /\.html$/, loader: "html"},
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=img/[name].[ext]" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=img/[name].[ext]" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=img/[name].[ext]" },
      { test: /\.(woff|woff2)$/, loader:"file-loader?name=img/[name].[ext]" },
      { test: /\.(png|pdf|jpg|jpe?g|svg|pdf)$/, loader: "url-loader?limit<900000"},
      { test: /\.(png|pdf|jpg|jpe?g)$/, loader: 'file-loader?name=img/[name].[ext]'}
    ]
  },
  resolve: {
    extensions:['', '.js', '.jsx']
  },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ]
}
// const webpack = require('webpack');
// module.exports = {
// 	entry: [
// 		, "./src/app.js"
// 	]
// 	, module: {
// 		loaders: [
// 			{
// 				test: /\.js/
// 				, exclude: /node_modules/
// 				, loader: "babel"
// 				, query:{presets:['es2015']}
// 			}
// 			, {
// 				test: /\.css/
// 				, exclude: /node_modules/
// 				, loader: "style!css"
// 			}
// 			, {
// 				test: /\.html$/
// 				, loader: "html"
// 			}
// 			,
//       { test: /\.(woff|woff2)$/, loader:"file-loader?name=img/[name].[ext]" },
//       { test: /\.css$/, loader: 'style-loader!css-loader'},
// 		  { test: /\.(png|jpg|svg|pdf)$/
// 				, loader: "url-loader?limit<900000"
// 			}
// 		]
// 	}
// 	, resolve: {
// 		extensions: [ "", ".js", ]
// 	}
// 	, output: {
// 		path: __dirname + "/dist"
// 		, filename: "bundle.js"
// 	}
// 	, devServer: {
// 		contentBase: "./"
// 	}
// };
