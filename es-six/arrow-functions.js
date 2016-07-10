var inputs = process.argv.slice(2);
var results = inputs.map(x => x.slice(0, 1)).reduce((previous, current) => previous + current)

console.log(`[${inputs}] becomes "${results}"`);
