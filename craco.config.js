/*
 * @Date: 2022-05-01 14:16:00
 * @LastEditors: 熊明祥
 * @LastEditTime: 2022-05-04 16:48:32
 * @Description: 
 */
const CracoLessPlugin = require("craco-less");
const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }
  ],
}