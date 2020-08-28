const { std } = require('wu-utils');
const getCommandPath = require('../../utils/getCommandPath');
const getContext = require('../../utils/getContext');

async function run(command) {
  const runCommand = process.argv[3];
  if (!runCommand) {
    return std.error('Please input the customize command you want to run!');
  }

  const commandJsPath = getCommandPath(runCommand);
  if (commandJsPath === false) {
    return;
  }

  const commandJs = require(commandJsPath);
  if (typeof commandJs === 'function') {
    commandJs(getContext(), [`debug=${command.debug}`]);
  } else {
    std.error(`This file is not export a function(${commandJsPath})`);
  }
}

module.exports = run;