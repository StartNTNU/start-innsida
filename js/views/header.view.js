define(function(require) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var Marionette = require('marionette');
    var template = require('hbs!templates/header.tpl');

    var Chart = require('chart');

    var HeaderView = Marionette.ItemView.extend({
        template: template,

        onShow: function() {
            this.showPieChart();
        },

        showPieChart: function() {
            var activeUsers = _.filter(this.model.get('users'), function(user) { return user.active === 'active' });
            var girls = _.filter(activeUsers, function(user) { return user.sex === 'Kvinne'});
            var data = [
                {
                    value: girls.length,
                    color : "#E28964"
                },
                {
                    value: activeUsers.length - girls.length,
                    color:"#89BDFF"
                }
            ];

            var ctx = $("#distribution").get(0).getContext("2d");
            new Chart(ctx).Pie(data, {animation: false});
        },

        serializeData: function() {
            var activeUsers = _.filter(this.model.get('users'), function(user) { return user.active === 'active' });
            var inactiveUsers = _.filter(this.model.get('users'), function(user) { return user.active === 'inactive' });
            var leaveUsers = _.filter(this.model.get('users'), function(user) { return user.active === 'leave' });
            var seniorUsers = _.filter(this.model.get('users'), function(user) { return user.active === 'senior' });
            var alumniUsers = _.filter(this.model.get('users'), function(user) { return user.active === 'alumni' });

            var girls = _.filter(activeUsers, function(user) { return user.sex === 'Kvinne'});

            return {
                active: activeUsers.length,
                inactive: inactiveUsers.length,
                leave: leaveUsers.length,
                senior: seniorUsers.length,
                alumni: alumniUsers.length,
                girls: girls.length,
                boys: activeUsers.length - girls.length
            }
        }
    });

    return HeaderView;
});