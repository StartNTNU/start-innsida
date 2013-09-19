define(function(require) {
    'use strict';

    var Handlebars = require('Handlebars');

    function sexHelper(value) {
        var ret = "";
        var context = ['Mann', 'Kvinne'];

        for(var i = 0; i < context.length; i++) {
            var option = '<option';
            if(value !== null) {
                if (value.toLowerCase() == context[i].toLowerCase()) {
                    option += ' selected';
                }
            }
            option += '>'+ context[i] + '</option>\n';
            ret += option;
        }

        return new Handlebars.SafeString(ret);
    }

    Handlebars.registerHelper('sexHelper', sexHelper);
    return sexHelper;
});