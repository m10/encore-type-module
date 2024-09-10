
import path from 'path';
import {fileURLToPath} from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: 'production',

  entry: {
    main: path.resolve(dirname, 'src/js/index'),
  },

  output: {
    path: path.resolve(dirname, 'dist'),
    publicPath: '/',
  },

  optimization: {
    runtimeChunk: 'single',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
          presets: [
            ['@babel/preset-env', {
              modules: false,
              useBuiltIns: 'usage',
              corejs: 3,
              shippedProposals: true,
              debug: true,
            }]
          ]
        }
        },
      },
    ]
  }
};
