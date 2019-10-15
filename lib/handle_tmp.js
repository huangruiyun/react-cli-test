'use strict'
const Metalsmith = require('metalsmith')
const Handlebars = require('handlebars')

module.exports = (data, src, dist) => {
  return new Promise((resolve, reject) => {
    Metalsmith(process.cwd())
      .metadata(data) //data 为用户输入的内容
      .clean(false)
      .source(src) //模板文件 path
      .destination(dist) //最终编译好的文件存放位置
      .use((files, metalsmith, done) => {
        const metaData = metalsmith.metadata()
      })
  })
}