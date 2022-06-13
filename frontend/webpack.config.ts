import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    hot: false,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-typescript',
              'solid',
            ]
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ],
}
