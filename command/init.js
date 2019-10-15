'use strict'
const co = require('co');
const path = require('path');
const prompt = require('co-prompt');
const fs = require('fs');
const chalk = require('chalk');
const cmd_exec = require('../lib/cmd_exec');
const handle_tmp = require('../lib/handle_tmp');

module.exports = () => {
  co(function *() {
    // get projectName(获取项目名，如果 init 时候写了直接取，否则询问)
    let projectName;
    if(process.argv.length >= 4) {
      projectName = process.argv[3]
    }else{
      projectName = yield prompt('Please input project name(请输入项目名称): ')
    }
    if(!projectName) {
      console.log(chalk.red("\n input project name please/请输入项目名称"))
      process.exit()
      return
    }
    if (fs.existsSync(projectName)){
      console.log(chalk.red("\ndirectory already created/已创建同名目录"))
      process.exit()
      return
    }
    // create project directory
    fs.mkdirSync(projectName)

    let tmpDir = path.join(projectName, '.tpl')

    let cmd = ''

    if(!fs.existsSync(path.resolve(tmpDir))) {
      console.log("\nDownloading the template...(下载模板...)")
      cmd = 'cd ' + projectName + '&& git clone https://github.com/huangruiyun/react-tpl.git'
    }else {
      console.log("\nUpdating the template...(升级模板...)")
      cmd = 'cd ' + tmpDir + '&& git pull'
    }

    let output = yield cmd_exec.exec(cmd)

  })
}