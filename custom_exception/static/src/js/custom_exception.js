odoo.define('custom_exception.UserError', function (require) {
    'use strict';

    var core = require('web.core');

    var UserErrorHandler = core.Class.extend({
        init: function(parent, error) {
            this.error = error

        },
        display: function(error) {
            // Display the Blue Screen of Death.
            var self = this;
            var error = this.error.data.arguments[0];
            var title = this.error.data.arguments[1];
            var icon = this.error.data.arguments[2];
            if (title || icon) {
                swal({
                    title: title,
                    text: error,
                    icon: icon,
                    button: "ok",
                });
            }
            else {
                swal({
                    title: 'error',
                    text: error,
                    icon: "error",
                    button: "ok"
                })

            }
        },
    });

    // Register handler to capture the raised exception
    core.crash_registry.add('odoo.addons.custom_exception.models.exception.UserError',
        UserErrorHandler);

    return UserErrorHandler;
});

