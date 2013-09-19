define(function(require) {
    'use strict';

    var $ = require('jquery');
    var Marionette = require('marionette');
    var template = require('hbs!templates/user.tpl');
    var imageTemplate = require('hbs!templates/image.tpl');
    var Regions = require('regions');
    var Alertify = require('alertify');
    var settings = require('settings');

    require('libs/bootstrap');

    var UserView = Marionette.ItemView.extend({
        template: template,

        events: {
            'click img': 'showBigImage',
            'click [data-js-save-user]': 'updateUser'
        },

        showBigImage: function(e) {
            if(e.shiftKey) {
                $('#myModal').modal('show');
                Regions.modal.show(new ImageView({model: this.model}));
            }
        },

        updateUser: function() {
            var id = this.model.get('id');
            var newMembershipState = $("#memberstatus option:selected").attr('value');
            var newSexState = $("#sex option:selected").text();
            var name = this.model.get('name');

            var url = settings.apiUrl +'/php/updateUser.php?id='+id+'&sex='+newSexState+'&active='+newMembershipState;

            $.ajax({
                url: url,
                success: function(status){
                    if($.trim(status) === "ok") {
                        Alertify.success("Brukerinformasjon for "+name+" er oppdatert")
                    } else {
                        Alertify.error("Noe gikk feil" + status);
                    }
                }
            });

        }
    });

    var ImageView = Marionette.ItemView.extend({
        template: imageTemplate
    });

    return UserView;
});