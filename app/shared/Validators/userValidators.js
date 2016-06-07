System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserValidators;
    return {
        setters:[],
        execute: function() {
            UserValidators = (function () {
                function UserValidators() {
                }
                UserValidators.spaces = function (control) {
                    if (control.value) {
                        var regex = /\w+ \w+/;
                        if (!control.value.match(regex)) {
                            return { spaces: true };
                        }
                        return null;
                    }
                };
                return UserValidators;
            }());
            exports_1("UserValidators", UserValidators);
        }
    }
});
//# sourceMappingURL=userValidators.js.map