const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const project = require('../project.config')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const inProject = path.resolve.bind(path, project.basePath)
const inProjectSrc = (file) => inProject(project.srcDir, file)

const __DEV__ = project.env === 'development'
const __PROD__ = project.env === 'production'

const config = {
  entry: {
    main: [
      inProjectSrc(project.main),
    ],
  },
  devtool: project.sourcemaps ? 'source-map' : false,
  output: {
    path: inProject(project.outDir),
    filename: __DEV__ ? '[name].js' : '[name].[chunkhash].js',
    publicPath: project.publicPath,
  },
  resolve: {
    modules: [
      inProject(project.srcDir),
      'node_modules',
    ],
    extensions: ['*', '.js', '.jsx', '.json']
  },
  externals: project.externals,
  module: {
    rules: [],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
    }),
    new webpack.DefinePlugin(Object.assign({
      'process.env': { NODE_ENV: JSON.stringify(project.env) },
      __DEV__,
      __PROD__,
    }, project.globals))
  ],

}

// JavaScript
// ------------------------------------
config.module.rules.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader',
    query: {
      cacheDirectory: true,
      plugins: [
        'babel-plugin-transform-class-properties',
        'babel-plugin-syntax-dynamic-import',
        [
          'babel-plugin-transform-runtime',
          {
            helpers: true,
            polyfill: false, // we polyfill needed features in src/normalize.js
            regenerator: true,
          },
        ],
        [
          'babel-plugin-transform-object-rest-spread',
          {
            useBuiltIns: true // we polyfill Object.assign in src/normalize.js
          },
        ],
      ],
      presets: [
        'babel-preset-react',
        ['babel-preset-env', {
          modules: false,
          targets: {
            ie9: true,
          },
          uglify: true,
        }],
      ]
    },
  }],
})

// Styles
// ------------------------------------
const extractStyles = new ExtractTextPlugin({
  filename: 'styles/style-[name].css',
  allChunks: true,
  disable: false
})

config.module.rules.push({
  test: /\.(sass|scss|css)$/,
  loader: extractStyles.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          sourceMap: project.sourcemaps,
          minimize: {
            autoprefixer: {
              browsers: ['last 2 versions'],
            },
            sourcemap: project.sourcemaps,
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: project.sourcemaps,
          includePaths: [
            inProjectSrc('styles')
          ],
        },
      }
    ],
  })
})
config.plugins.push(extractStyles)

// Images
// ------------------------------------
config.module.rules.push({
  test    : /\.(png|jpg|gif)$/,
  loader  : 'file-loader',
  options : {
    outputPath : 'img/'
  }
})

// Fonts
// ------------------------------------
;[
  ['woff', 'application/font-woff'],
  ['woff2', 'application/font-woff2'],
  ['otf', 'font/opentype'],
  ['ttf', 'application/octet-stream'],
  ['eot', 'application/vnd.ms-fontobject'],
  ['svg', 'image/svg+xml'],
].forEach((font) => {
  const extension = font[0]
  const mimetype = font[1]

  config.module.rules.push({
    test    : new RegExp(`\\.${extension}$`),
    loader  : 'url-loader',
    options : {
      name  : 'fonts/[name].[ext]',
      limit : 10000,
      mimetype,
    },
  })
})

// HTML Template
// ------------------------------------
config.plugins.push(new HtmlWebpackPlugin({
  template: inProjectSrc('index.html'),
  inject: true,
  minify: {
    collapseWhitespace: true,
  },
}))

// Bundle Splitting
// ------------------------------------
if (project.vendors && project.vendors.length) {
  config.entry.vendor = project.vendors
}
config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: 'vendor.js',
  minChunks (module, count) {
    const context = module.context
    return context && context.indexOf('node_modules') >= 0
  },
}))

// Production Optimizations
// ------------------------------------
if (__PROD__) {
  config.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: !!config.devtool,
      comments: false,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
  }),
  new SWPrecacheWebpackPlugin({
     dontCacheBustUrlsMatching: /\.\w{8}\./,
     filename: 'service-worker.js',
     logger(message) {
       if (message.indexOf('Total precache size is') === 0) {
         return;
       }
       console.log(message);
     },
     minify: true,
     maximumFileSizeToCacheInBytes: 10485760,
     navigateFallback: 'index.html',
     navigateFallbackWhitelist: [/^(?!\/__).*/], // Ignores URLs starting from /__ (useful for Firebase)
     staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
   })
  )
}

module.exports = config
