module.exports = {
	extends: ["eslint:recommended"],
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	parser: "babel-eslint",
	plugins: ["html", "react", "json", "jsx-a11y"],
	parserOptions: {
		ecmaVersion: 2018,
		// Can I remove these now?
		ecmaFeatures: {
			jsx: true,
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
		"react": {
			"version": "detect"
		}
	},
	rules: {
		"no-unused-vars": 0, //2
		// 'no-undef': 0, //2
		// 'no-console': 1,
		"no-var": 2,
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
				maxBOF: 1,
			},
		],
		"max-len": [
			0,
			{
				"ignoreComments": true,
				"ignoreUrls": true,
			}
		],
		// allow mixed when used for alignment
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
		indent: [2, "tab"],
		"no-mixed-spaces-and-tabs": [1,"smart-tabs"],
		"space-before-function-paren": [2, "never"],
		"eol-last": [2, "always"],
		"array-element-newline": [2, "consistent"],
		"linebreak-style": [2, "unix"],
		semi: [2, "never"],
		"no-shadow-restricted-names": 2,

		// * React Plugin
		"react/jsx-uses-vars": 1,
		"react/prefer-stateless-function": 1,
		"react/jsx-filename-extension": [
			1,
			{
				extensions: [ ".jsx" ], //.js
			},
		],
		// * JSX A11Y Plugin
		'jsx-a11y/accessible-emoji': 1,
	},
};
