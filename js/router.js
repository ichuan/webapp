define([
    'jquery', 
    'underscore', 
    'backbone',
    'app'
], function($, _, Backbone, app) {

    var Router = Backbone.Router.extend({
        routes: {
          '': 'main',
          'hello/:val': 'hello'
        },
        
        initialize: function() {},

        main: function() {
            this.navigate('hello/world', {trigger: true, replace: true});
        },

        hello: function(val) {
            app.hello(val);
        }
    });

    var root = location.protocol + "//" + location.host + '/';

    // capture all link clicks and nagigate through routes
    $(document).on('click', 'a[href]:not([data-bypass])', function(e) {
        var me = $(this), prop = me.prop('href'), attr = me.attr('href');

        if (prop.indexOf(root) === 0) {
            e.preventDefault();
            Backbone.history.navigate(attr, {trigger: true});
        }
    });

    return new Router;
});
