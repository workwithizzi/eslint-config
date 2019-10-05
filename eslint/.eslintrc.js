module.exports = {
	extends: ["eslint:recommended"],
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	parser: "babel-eslint",
	plugins: ["html", "json"],
	parserOptions: {
		ecmaVersion: 2018,
		ecmaFeatures: {
			impliedStrict: true,
			classes: true,
		},
		sourceType: "module",  //default ("script")
	},
	settings: {
		// specify which file types are html: https://tinyurl.com/y52uataf
		"html/html-extensions": [".html", ".php"],
		// indent one tab in relation to <script>: https://tinyurl.com/y3wnbjdx
		"html/indent": "+tab",
		// "html/report-bad-indent": 1, // Print warning for bad indentation in html
	},
	rules: {
		"no-unused-vars": 0,
		'no-undef': 1, //2
		'no-console': 0, //1
		"no-var": 1,
		"prefer-const": [
			2,
			{
				destructuring: "all", //any
			},
		],
		"no-multiple-empty-lines": [
			2,
			{
				max: 3, // allow up to three lines
				maxBOF: 1, // allow 1 empty line at the beginning
			},
		],
		"eol-last": [2, "always"], // require empty line at end of file
		"max-len": [ // maximum line length
			0,
			{
				"ignoreComments": true,
				"ignoreUrls": true,
			}
		],
		"comma-dangle": [
			2,
			{
				"arrays": "always-multiline",
				"objects": "always-multiline",
				"imports": "always-multiline",
				"exports": "always-multiline",
				"functions": "never",
			}
		],
		quotes: [
			2,
			"double",
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		indent: [2, "tab"], //2, "spaces"
		"no-mixed-spaces-and-tabs": [1,"smart-tabs"],
		"space-before-function-paren": [2, "never"],
		"array-element-newline": [2, "consistent"],
		"linebreak-style": [2, "unix"],
		semi: [2, "always"],
		"no-shadow-restricted-names": 2,
	},
};
