const sugarss = require('sugarss')
const es2015 = require('babel-preset-es2015')
const stage2 = require('babel-preset-stage-2')
const cssnano = require('cssnano')



module.exports = {
  postcss: {
    plugins: [cssnano],
    parser: sugarss
  },
  babel: { presets: [es2015, stage2] },
  ignore: ['**/layout.jade', '**/_*', '**/.*', 'readme.md', 'views/_includes']
}
