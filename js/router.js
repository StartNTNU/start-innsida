define(function(require) {
    'use strict';

    var _ = require('underscore');
    var $ = require('jquery');
    var Backbone = require('backbone');
    var Regions = require('regions');
    var UsersList = require('views/userslist.view');
    var SearchView = require('views/search.view');
    var UserView = require('views/user.view');
    var HeaderView = require('views/header.view');

    var Router = Backbone.Router.extend({
        routes: {
            '(/)': 'index',
            '(/):userid': 'showUser'
        },

        initialize: function() {
            var self = this;
            this.usersModel = new Backbone.Model();

            $.getJSON('http://innsida.startnorge.no/php/getUsers.php?org=Start%20NTNU', function(response) {
                self.usersModel.set('users', response);
            });

            this.listenTo(this.usersModel, 'change', function() {
                var userlist = new UsersList({model: this.usersModel});

                Regions.search.show(new SearchView({userlist: userlist}));
                Regions.list.show(userlist);
                Regions.header.show(new HeaderView({model: this.usersModel}));
            });
        },

        showUser: function(userid) {
            if(! this.usersModel.hasChanged()) {
                this.listenTo(this.usersModel, 'change', function() {
                    this._injectUser(userid);
                }, this);
            } else {
                this._injectUser(userid);
            }

        },

        _injectUser: function(userid) {
            _.each(this.usersModel.get('users'), function(user){
                if(user.id === userid) {
                    Regions.user.show(new UserView({model: new Backbone.Model(user)}))
                }
            });
        }
    });

    return Router;
});
