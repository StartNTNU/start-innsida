define(function(require) {
    'use strict';

    var Handlebars = require('Handlebars');

    function activeHelper(value) {
        var ret = "";
        var context = ['Aktiv', 'Inaktiv', 'Permisjon', 'Senior', 'Alumni'];
        var values = ['active', 'inactive', 'leave', 'senior', 'alumni'];

        for(var i = 0; i < context.length; i++) {
            var option = '<option value="'+values[i]+'"';
            if(value !== null) {
                if (value.toLowerCase() == values[i]) {
                    option += ' selected';
                }
            }
            option += '>'+ context[i] + '</option>\n';
            ret += option;
        }

        return new Handlebars.SafeString(ret);
    }

    Handlebars.registerHelper('activeHelper', activeHelper);
    return activeHelper;
});