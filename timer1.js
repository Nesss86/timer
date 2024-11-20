const inputArgs = process.argv.slice(2);

if (inputArgs.length === 0) {
  console.log("No alarms provided. Please specify positive numbers as timers.");
  process.exit(); 
}


const validAlarms = [];
const invalidInputs = [];

for (const arg of inputArgs) {
  const time = Number(arg);
  if (isNaN(time)) {
    invalidInputs.push(arg); 
  } else if (time <= 0) {
    invalidInputs.push(arg); 
  } else {
    validAlarms.push(time); 
  }
}


if (invalidInputs.length > 0) {
  console.log(`Invalid inputs ignored: ${invalidInputs.join(", ")}`);
}


if (validAlarms.length === 0) {
  console.log("No valid timers provided. Please provide positive numbers as arguments.");
  process.exit();
}


validAlarms.sort((a, b) => a - b);


for (const time of validAlarms) {
  setTimeout(() => {
    process.stdout.write(`\nBeep! Alarm after ${time} seconds.\x07`);
  }, time * 1000); 
}