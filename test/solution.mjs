function add(...args) { return args.reduce((num, tot) => tot + num) };
module.exports = { add };