'use strict'

const child_process = require('child_process')

function exec (cmd) {
  return new Promise((resolve, reject) => {
    child_process.exec(cmd, function (error, stdout, stderr) {
      if (error) {
        console.error(stderr)
        reject && reject()
        process.exit()
      }
      resolve && resolve(stdout)
    });
  })
}

module.exports = {
  exec: exec
}