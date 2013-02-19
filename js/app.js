define(['bootstrap', 'router', 'tpl!templates/index.html'], function(_, _, tpl) {
	return {
		init: function() {
			alert(tpl({name: 'val'}));
			Backbone.history.start();
		}
	};
});
