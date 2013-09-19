/*global require*/
'use strict';

require.config({
    paths: {
        alertify: 'libs/alertify',
        backbone: 'libs/backbone',
        chart: 'libs/chart',
        marionette: 'libs/backbone.marionette',
        hbs: 'libs/hbs',
        i18nprecompile: 'libs/hbs/i18nprecompile',
        json2: 'libs/hbs/json2',
        Handlebars: 'libs/handlebars',
        jquery: 'libs/jquery',
        underscore: 'libs/underscore'
    },

    hbs: {
        disableI18n: true,
        helperPathCallback: function(name) {
            return 'templates/helpers/' + name;
        }
    },

    shim: {
        'underscore': {
            exports: '_'
        },

        'chart': {
            exports: 'Chart'
        },

        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        'marionette': {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        'Handlebars': {
            exports: 'Handlebars'
        }
    }
});

require(['app'], function (App) {
    App.start();
});

