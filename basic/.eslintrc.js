module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	extends: [
		// 'airbnb',
		// 'plugin:import/errors',
		// 'plugin:import/warnings',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
		// 'prettier/@typescript-eslint', // rules에 prettier적용시킴
	],
	rules: {
		// 'linebreak-style': 0,
		// 'import/prefer-default-export': 0,
		'prettier/prettier': [
			'error',
			{
				singleQuote: true, // 작은 따옴표
				semi: true, // 세미콜론
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80, // 80자 마다 개행
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
		// 'import/extensions': 0,
		// 'no-use-before-define': 0,
		// 'import/no-unresolved': 0,
		// 'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
		// 'no-shadow': 0,
		// 'react/prop-types': 0,
		// 'react/jsx-filename-extension': [
		// 	2,
		// 	{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		// ],
		// 'jsx-a11y/no-noninteractive-element-interactions': 0,
	},
};
