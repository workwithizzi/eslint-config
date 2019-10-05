module.exports = {
	extends: ["@workwithizzi/eslint-config"],
	plugins: ["react", "jsx-a11y"],
	parserOptions: {
		ecmaVersion: 2018,
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		"react": {
			"version": "detect"
		}
	},
	rules: {
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
