const logSymbols = require('./index');

module.exports = {
	log: (...args) => {
		console.log.apply(console, args);
	},
	info: (...args) => {
		console.info.apply(console, [logSymbols.info, ...args]);
	},
	ok: (...args) => {
		console.log.apply(console, [logSymbols.success, ...args]);
	},
	warn: (...args) => {
		console.warn.apply(console, [logSymbols.warning, ...args]);
	},
	error: (...args) => {
		console.error.apply(console, [logSymbols.error, ...args]);
	},
};
