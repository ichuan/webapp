// generate common collection class
// usage:
//      var make = require('collections/make'),
//          cls = make('Blogs'),
//          collection = new cls;
//      collection.fetch();

define(['backbone', 'consts', 'models/make'], function(Backbone, consts, make_model) {
    var cache = {};
    return function(name) {
        if (!cache[name]) {
            cache[name] = Backbone.Collection.extend({
                model: make_model(name),
                url: consts.API_BASE + name
            });
        }
        return cache[name];
    };
});
