#!/usr/bin/env node

'use strict';

const { Command } = require('commander');
const { batchRegCommand } = require('a-cli-utils');
const chalk = require('chalk');
const packageJson = require('./package.json');
const cliCommands = require('./commands');

module.exports = function (extraCommands, actionWrap) {
	const program = new Command();

	program
		.name('acli')
		.version(packageJson.version)
		.usage(chalk.greenBright('[command]'))
		.description(packageJson.description);

	let commandList = cliCommands;
	if (Array.isArray(extraCommands)) {
		commandList = commandList.concat(extraCommands);
	}

	if (typeof actionWrap === 'function') {
		commandList = commandList.map((item) => ({
			...item,
			action: actionWrap(item.action),
		}));
	}

	if (cliCommands.length > 0) {
		batchRegCommand(program, commandList);
	}

	program.parse(process.argv);
};