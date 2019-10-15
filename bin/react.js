#!/usr/bin/env node
'use strict'

const program = require('commander')
const version = require('../package').version

program.version( version )
program
  .usage('<command>')
  .arguments('<command> [option]')

program
  .command('init')
  .description('Create a new react project')
  .action(() => {
    require('../command/init')()
  })
  
program.parse(process.argv)