module.exports = {
	extends: ['universe', 'universe/shared/typescript-analysis'],
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.d.ts'],
			parserOptions: {
				project: './tsconfig.json',
			},
		},
	],
	rules: {
		'react/react-in-jsx-scope': 0,
		'react/style-prop-object': 0,
		'no-console': 1,
		'no-unused-vars': 1,
		'import/prefer-default-export': 0,
		'react/jsx-indent': [0],
	},
};
