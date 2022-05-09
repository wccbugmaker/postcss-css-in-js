'use strict';

function camelCase(str) {
	return str.replace(/[\w-]+/g, (s) => {
		return /^-?[a-z]+(?:-[a-z]+)+$/.test(s)
			? s
					.replace(/^-(ms|moz|khtml|epub|(\w+-?)*webkit)(?=-)/i, '$1') // eslint-disable-line regexp/no-super-linear-backtracking -- TODO: fix
					.replace(/-\w/g, (uncasedStr) => uncasedStr[1].toUpperCase())
			: s;
	});
}

module.exports = camelCase;
