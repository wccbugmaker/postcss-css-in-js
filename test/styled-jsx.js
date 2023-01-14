'use strict';

const syntax = require('../');

describe('styled-jsx', () => {
	it('basic', () => {
		const code = [
			"import * as React from 'react'",
			'',
			'export const App = () => {',
			'	return (',
			'		<div>',
			'			<style jsx>{`',
			'			.test-cls {',
			'				color: #fff;',
			'			}',
			'			`}</style>',
			'		</div>',
			'	)',
			'}',
		].join('\n');
		const document = syntax.parse(code, {
			from: 'before.jsx',
		});

		expect(document.toString()).toBe(code);
		expect(document.source).toHaveProperty('lang', 'jsx');
		expect(document.nodes).toHaveLength(1);
		expect(document.first.nodes).toHaveLength(1);
		expect(document.first.first).toHaveProperty('selector', '.test-cls');
		expect(document.first.first.nodes).toHaveLength(1);
		expect(document.first.first.nodes[0]).toHaveProperty('type', 'decl');
		expect(document.first.first.nodes[0]).toHaveProperty('prop', 'color');
		expect(document.first.first.nodes[0]).toHaveProperty('value', '#fff');
	});

	it('interpolation with identifier', () => {
		const code = [
			"import * as React from 'react'",
			'',
			'const colorVar = "red"',
			'',
			'export const App = (props) => {',
			'	return (',
			'		<div>',
			'			<style jsx global>{`',
			'			.test-cls {',
			'				color: #fff;',
			'				background-color: ${colorVar};',
			'				padding: ${props.large ? "50" : "20"}px;',
			'			}',
			'			`}</style>',
			'		</div>',
			'	)',
			'}',
		].join('\n');
		const document = syntax.parse(code, {
			from: undefined,
		});

		expect(document.toString()).toBe(code);
		expect(document.source).toHaveProperty('lang', 'jsx');
		expect(document.nodes).toHaveLength(1);
		expect(document.first.first.nodes).toHaveLength(3);
		expect(document.first.first.nodes[1]).toHaveProperty('value', '${colorVar}');
		expect(document.first.first.nodes[2]).toHaveProperty('type', 'decl');
	});

	it('external style', () => {
		const code = [
			"import css from 'styled-jsx/css'",
			'',
			'export const button = css`',
			'	button {',
			'		color: hotpink;',
			'	}',
			'`',
			'',
			'export const body = css.global`body { margin: 0; }`',
			'',
			'export const link = css.resolve`a { color: green; }`',
		].join('\n');
		const document = syntax.parse(code, {
			from: undefined,
		});

		expect(document.toString()).toBe(code);
		expect(document.source).toHaveProperty('lang', 'jsx');
		expect(document.nodes).toHaveLength(3);
		expect(document.nodes[0].first).toHaveProperty('type', 'rule');
		expect(document.nodes[0].first).toHaveProperty('selector', 'button');
		expect(document.nodes[0].first.first).toHaveProperty('type', 'decl');
		expect(document.nodes[1].first).toHaveProperty('type', 'rule');
		expect(document.nodes[1].first.first).toHaveProperty('type', 'decl');
		expect(document.nodes[2].first).toHaveProperty('type', 'rule');
		expect(document.nodes[2].first.first).toHaveProperty('type', 'decl');
	});

	it('skip css syntax error', () => {
		const code = [
			"import * as React from 'react'",
			'',
			'const colorVar = "red"',
			'',
			'export const App = () => {',
			'	return (',
			'		<div>',
			'			<style jsx>{`',
			'			.test-cls {',
			'				color: #fff;',
			'				background-color: ${colorVar};',
			'			',
			'			`}</style>',
			'		</div>',
			'	)',
			'}',
		].join('\n');
		const document = syntax({
			css: 'safe-parser',
		}).parse(code, {
			from: 'styled-jsx-safe-parse.js',
		});

		expect(document.source).toHaveProperty('lang', 'jsx');
		expect(document.nodes).toHaveLength(1);
		expect(document.first.nodes).toHaveLength(1);
		expect(document.first.first).toHaveProperty('selector', '.test-cls');
	});

	it('skip jsx syntax error', () => {
		const code = [
			"import * as React from 'react'",
			'',
			'const colorVar = "red"',
			'',
			'export const App = () => {',
			'	return (',
			'		<div>',
			'			<style jsx>{`',
			'			.test-cls {',
			'				color: #fff;',
			'				background-color: ${colorVar};',
			'			}',
			'			`}</s>',
			'		</div>',
			'	)',
			'}',
		].join('\n');
		const document = syntax.parse(code, {
			from: undefined,
		});

		expect(document.source).toHaveProperty('lang', 'jsx');
	});
});
