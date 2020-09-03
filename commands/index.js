const init = require('./init');
const dev = require('./dev');
const run = require('./run');
const build = require('./build');
const publish = require('./publish');
const setting = require('./setting');
const plugin = require('./plugin');

module.exports = [
	{
		command: 'init',
		description: 'initial project with wu-cli-config and wu-cli-template',
		action: init,
	},
	{
		command: 'dev',
		options: [
			['-d, --debug', 'dev command with [debug] mode'],
		],
		description: 'develop project with wu-cli-config',
		action: dev,
	},
	{
		command: 'run [script]',
		options: [
			['-d, --debug', 'run customize command  with [debug] mode'],
		],
		description: 'run customize command',
		action: run,
	},
	{
		command: 'build',
		options: [
			['-d, --debug', 'build command with [debug] mode'],
		],
		description: 'build project with wu-cli-config',
		action: build,
	},
	{
		command: 'publish',
		options: [
			['-d, --debug', 'publish command with [debug] mode'],
		],
		description: 'publish project with wu-cli-config',
		action: publish,
	},
	{
		command: 'setting',
		option: ['-h, --help', 'print setting help information'],
		description: 'open the cli setting file',
		action: setting,
	},
	{
		command: 'plugin [command]',
		description: 'wucli plugin manager',
		action: plugin,
	}
];