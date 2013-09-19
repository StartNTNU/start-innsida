define(function(require) {
    'use strict';

    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Router = require('router');

    var App = new Marionette.Application();

    App.addInitializer(function() {
        new Router();
    });

    App.addInitializer(function() {
        Backbone.history.on('route', function (router, route, params) {
//            console.log('ADD INITIALIZER APPLICATION', arguments);
        });
    });

    App.on('initialize:after', function() {
        if (Backbone.history) {
            Backbone.history.start();
        } else {
            throw new Error('Could not start Backbone history');
        }
    });

    return App;
});
