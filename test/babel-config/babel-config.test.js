'use strict';

const fs = require('fs');
const syntax = require('../../');

it('works with babel config present', () => {
	const file = require.resolve('./fixtures/styled-components');
	let code = fs.readFileSync(file);

	const document = syntax.parse(code, {
		from: file,
	});

	code = code.toString();
	expect(document.toString()).toBe(code);
	expect(document.source).toHaveProperty('lang', 'jsx');

	expect(document.nodes).toHaveLength(1);
	expect(document.first.nodes).toHaveLength(8);

	expect(document.first.nodes[0]).toHaveProperty('type', 'comment');
	expect(document.first.nodes[1]).toHaveProperty('type', 'decl');
	expect(document.first.nodes[2]).toHaveProperty('type', 'decl');
	expect(document.first.nodes[3]).toHaveProperty('type', 'decl');
	expect(document.first.nodes[4]).toHaveProperty('type', 'decl');
	expect(document.first.nodes[5]).toHaveProperty('type', 'decl');
	expect(document.first.nodes[6]).toHaveProperty('type', 'decl');
	expect(document.first.nodes[7]).toHaveProperty('type', 'decl');
});
