'use strict';

const fs = require('fs');
const syntax = require('../');

describe('javascript tests', () => {
	it('react-emotion', () => {
		const filename = require.resolve('./fixtures/react-emotion.jsx');
		let code = fs.readFileSync(filename);

		const document = syntax.parse(code, {
			from: filename,
		});

		code = code.toString();

		expect(document.toString()).toBe(code);
		expect(document.nodes).toHaveLength(4);

		document.nodes.forEach((root) => {
			expect(typeof root.last.toString()).toBe('string');
			expect(root.source).toHaveProperty('input');

			expect(code).toEqual(expect.stringContaining(root.source.input.css));
			expect(root.source.input.css.length).toBeLessThan(code.length);
			expect(root.source.start.line).toBeGreaterThan(1);

			root.walk((node) => {
				expect(node).toHaveProperty('source');

				expect(node.source.input.css).toBe(root.source.input.css);

				expect(node.source).toHaveProperty('start.line');
				expect(node.source).toHaveProperty('end.line');
			});
		});
	});

	it('emotion-10', () => {
		const filename = require.resolve('./fixtures/emotion-10.jsx');
		let code = fs.readFileSync(filename);

		const document = syntax.parse(code, {
			from: filename,
		});

		code = code.toString();

		expect(document.toString()).toBe(code);
		expect(document.nodes).toHaveLength(6);

		document.nodes.forEach((root) => {
			expect(typeof root.last.toString()).toBe('string');
			expect(root.source).toHaveProperty('input');

			expect(code).toEqual(expect.stringContaining(root.source.input.css));
			expect(root.source.input.css.length).toBeLessThan(code.length);
			expect(root.source.start.line).toBeGreaterThan(1);

			root.walk((node) => {
				expect(node).toHaveProperty('source');

				expect(node.source.input.css).toBe(root.source.input.css);

				expect(node.source).toHaveProperty('start.line');
				expect(node.source).toHaveProperty('end.line');
			});
		});
	});
});
