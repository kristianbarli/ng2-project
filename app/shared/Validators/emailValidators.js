System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmailValidators;
    return {
        setters:[],
        execute: function() {
            EmailValidators = (function () {
                function EmailValidators() {
                }
                EmailValidators.isNotEmail = function (control) {
                    if (control.value) {
                        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (!control.value.match(regex)) {
                            return { isNotEmail: true };
                        }
                    }
                };
                return EmailValidators;
            }());
            exports_1("EmailValidators", EmailValidators);
        }
    }
});
//# sourceMappingURL=emailValidators.js.map