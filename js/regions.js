define(function(require) {
    'use strict';
    var Marionette = require('marionette');

    return {
        search: new Marionette.Region({ el: '#search' }),
        list: new Marionette.Region({ el: '#list' }),
        header: new Marionette.Region({ el: '#header' }),
        user: new Marionette.Region({ el: '#user' }),
        modal: new Marionette.Region({ el: '#myModal' })
    };
});