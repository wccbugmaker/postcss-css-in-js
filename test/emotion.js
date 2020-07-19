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

	it('works with vue-emotion', () => {
		// Related issues:
		// - https://github.com/stylelint/stylelint/issues/4247
		// - https://github.com/gucong3000/postcss-jsx/issues/63
		// - https://github.com/stylelint/postcss-css-in-js/issues/22
		const parsed = syntax.parse(`
			import styled from 'vue-emotion';
			
			const Wrapper = styled('div')\`
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
			\`;
		`);

		expect(parsed.nodes).toHaveLength(1);
	});

	it('works with @emotion/styled', () => {
		const parsed = syntax.parse(`
			import styled from '@emotion/styled';
			
			const Wrapper = styled.div\`
				left: 0;
			\`;
		`);

		expect(parsed.nodes).toHaveLength(1);
	});
});
