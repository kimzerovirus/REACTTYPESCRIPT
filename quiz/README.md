### dependencies
```
npm i -D eslint prettier
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm i -D eslint-config-prettier eslint-plugin-prettier
npm i -D eslint-config-react-app
```

### .eslintrc.js
```
module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended', 'react-app'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true, 
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 100, 
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
	},
};
```

### styled-components
```
npm i styled-components @types/styled-components
```