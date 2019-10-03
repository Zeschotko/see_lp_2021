const {
	generateTemplateFiles
} = require('generate-template-files');
const path = require('path')

generateTemplateFiles([{
		option: 'Component',
		defaultCase: '(pascalCase)',
		entry: {
			folderPath: path.resolve(__dirname, 'templates/component/'),
		},
		stringReplacers: ['__componentName__'],
		output: {
			path: path.resolve(__dirname, '../../src/components/__componentName__(pascalCase)/'),
			pathAndFileNameDefaultCase: '(pascalCase)',
		},
		onComplete: (results) => {
			console.log(`results`, results);
		}
	},
	{
		option: 'View',
		defaultCase: '(pascalCase)',
		entry: {
			folderPath: path.resolve(__dirname, 'templates/component/'),
		},
		stringReplacers: ['__componentName__'],
		output: {
			path: path.resolve(__dirname, '../../src/views/__componentName__(pascalCase)/'),
			pathAndFileNameDefaultCase: '(pascalCase)',
		},
		onComplete: (results) => {
			console.log(`results`, results);
		}
	},
	{
		option: 'Section',
		defaultCase: '(pascalCase)',
		entry: {
			folderPath: path.resolve(__dirname, 'templates/component/'),
		},
		stringReplacers: ['__componentName__', '__viewName__'],
		output: {
			path: path.resolve(__dirname, '../../src/sections/__viewName__(pascalCase)/__componentName__(pascalCase)'),
			pathAndFileNameDefaultCase: '(pascalCase)',
		},
		onComplete: (results) => {
			console.log(`results`, results);
		}
	}
]);
