"use strict";

const TemplateSafeParser = require("./template-safe-parser");
const Input = require("postcss/lib/input");

function templateSafeParse (css, opts) {
	const input = new Input(css, opts);
	input.quasis = opts.quasis;
	input.templateLiteralStyles = opts.templateLiteralStyles;
	input.parseOptions = opts
	const parser = new TemplateSafeParser(input);
	parser.parse();

	return parser.root;
}
module.exports = templateSafeParse;
