// generate common model class
// usage:
//      var make = require('models/make'),
//          cls = make('Blog'),
//          model = new cls;
//      model.fetch();

define(['backbone', 'consts'], function(Backbone, consts) {
    var cache = {};
    return function(name) {
        if (!cache[name]) {
            cache[name] = Backbone.Model.extend({
                url: function() {
                    return consts.API_BASE + name + '/' + this.id
                }
            });
        }
        return cache[name];
    };
});
