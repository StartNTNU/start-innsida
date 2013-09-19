define(function(require) {
    'use strict';

    var _ = require('underscore');
    var $ = require('jquery');
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var template = require('hbs!templates/userslist.tpl');

    var UsersListView = Marionette.ItemView.extend({
        template: template,

        events: {
            'click tr[data-js-user-id]': 'changeUser',
            'click [data-js-sort-name]': 'sortByName',
            'click [data-js-sort-sex]': 'sortBySex'
        },

        initialize: function() {
            var sortedUsers = _.sortBy(this.model.get('users'), function(user){ return user.name; });
            this.model = new Backbone.Model({users: sortedUsers});

            this.fullModel = this.model;

            this.listenTo(this.model, 'change', this.render);
        },

        changeUser: function(e) {
            var userId = $(e.currentTarget).attr('data-js-user-id');
            Backbone.history.navigate('/'+userId, {trigger: true});
        },

        sortBySex: function() {
            if(this.sort === 'sexASC') {
                var sortedUsers = _.sortBy(this.model.get('users'), function(user){ return user.sex; });
                this.model = new Backbone.Model({users: sortedUsers});
                this.sort = 'sexASC';
            }
            // BYTT TIL COLLECTION
            this.render();
        }

    });

    return UsersListView;
});