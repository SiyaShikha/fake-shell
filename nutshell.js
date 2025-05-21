let currDir = "~";
const promptText = function() {
  return 'nutshell ' + currDir + " %";
}

const echo = function(args) {
  return args.join(" ");
}

const cd = function([firstArg]) {
  currDir = firstArg;
}

const existsExternalCommand = function(command) {
  // returns a boolean

}

const runExternalCommand = function(command, args) {
  if(existsExternalCommand(command)) {
    // create process with external command and args
    // wait for it to finish and then return
  } else {
    // complain that this command was not found
  }

}

const runCommand = function(commandString) {
  const [command,...args] = commandString.split(" ");
  switch(command) {
    case "echo": return echo(args);
    case "cd": return cd(args);
    case "pwd": return currDir;
    default: return runExternalCommand(command,args);
  }
}

while(true) {
  const commandToRun = prompt(promptText());
  const resultOfRunningCommand = runCommand(commandToRun);
  if(resultOfRunningCommand !== undefined) {
    console.log(resultOfRunningCommand);
  }
}