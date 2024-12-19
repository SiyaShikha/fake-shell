let currentDirectory = '~';

const promptMessage = function () {
  return 'fake shell ' + currentDirectory + ' %';
}

const executeCommand = function (commandAndArg) {
  const [command, ...args] = commandAndArg.split(' ');
  // console.log(command);
  if (command === 'cd') {
    currentDirectory = args.join(' ');
  }
  if (command === 'echo') {
    console.log(args.join(' '));
  }
}

while (true) {
  const command = prompt(promptMessage());
  // console.log('You entered ' + command);
  executeCommand(command);
}