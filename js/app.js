define([
    'backbone', 
    'underscore', 
    'tpl!templates/index.html',
    'bootstrap', 
], function(Backbone, _, tpl) {
    var App = function() {};

    _.extend(App.prototype, {
        init: function() {
            Backbone.history.start({pushState: true});
        },

        hello: function(val) {
            alert(tpl({name: val}));
        }
    });
    return new App;
});
