define(function(require) {
    var Handlebars = require('Handlebars');

    function formatPhone(number) {
        number = number.replace(/ /g, "");
        number = number.replace('+47', '');
        return number;
    }

    Handlebars.registerHelper('formatPhone', formatPhone);
    return formatPhone;
});
