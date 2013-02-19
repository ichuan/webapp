// https://github.com/requirejs/example-multipage/blob/master/tools/build.js

({
	mainConfigFile: 'main.js',
    optimize: 'uglify',
    //optimize: 'none',
	name: 'main.js',
	exclude: ['jquery'],
	stubModules: ['bootstrap', 'tpl', 'text'],
	// exclude but keep shim define
	rawText: {
		backbone: '',
		underscore: '',
		bootstrap: '',
		json2: ''
	},
	out: '../dist/js/main.js'
})
