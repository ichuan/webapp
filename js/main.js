// http://requirejs.org/docs/api.html#config

require.config({
	paths: {
		jquery: '../vendor/jquery/jquery.min',
		backbone: '../vendor/backbone.min',
		bootstrap: '../vendor/bootstrap/js/bootstrap.min',
		json2: '../vendor/json2',
		underscore: '../vendor/underscore.min',
		tpl: '../vendor/require/tpl',
		text: '../vendor/require/text',
	},
	shim: {
		backbone: {
			deps: ['underscore', 'json2', 'jquery'],
			exports: 'Backbone'
		},
		underscore: {
			exports: '_'
		},
		bootstrap: ['jquery'],
		json2: {
			exports: 'JSON'
		}
	},
	waitSeconds: 10
});

require(['app', 'router'], function(app) {
	app.init();
});
