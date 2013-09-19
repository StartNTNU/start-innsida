define(function(require) {
    'use strict';

    var _ = require('underscore');
    var $ = require('jquery');
    var Marionette = require('marionette');
    var template = require('hbs!templates/search.tpl');

    var SearchView = Marionette.ItemView.extend({
        template: template,

        events: {
            'keyup [data-js-search]': 'filterUsers'
        },

        initialize: function(obj) {
            this.userlist = obj.userlist;
            this.allUsers = obj.userlist.model.get('users');
        },

        onShow: function() {
            $('[data-js-search]').focus();
        },

        filterUsers: function(e) {
            var query = $(e.target).val();
            var hits = [];

            _.each(this.allUsers, function(user) {
                if(user.name.toLowerCase().indexOf(query) !== -1) {
                    hits.push(user);
                }
            });

            if(hits.length === 0) {
                this.userlist.model.set('empty', true);
            } else {
                this.userlist.model.set('empty', false);
            }

            this.userlist.model.set('users', hits);
        }

    });

    return SearchView;
})