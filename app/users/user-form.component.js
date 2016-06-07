System.register(['@angular/core', '@angular/common', '@angular/router', '../shared/services/users.service', './user', '../shared/validators/userValidators', '../shared/validators/emailValidators'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, users_service_1, user_1, userValidators_1, emailValidators_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (userValidators_1_1) {
                userValidators_1 = userValidators_1_1;
            },
            function (emailValidators_1_1) {
                emailValidators_1 = emailValidators_1_1;
            }],
        execute: function() {
            UserFormComponent = (function () {
                function UserFormComponent(fb, _router, _usersService, _routeSegment) {
                    this._router = _router;
                    this._usersService = _usersService;
                    this._routeSegment = _routeSegment;
                    this.title = "Add User";
                    this.user = new user_1.User();
                    this.form = fb.group({
                        name: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                userValidators_1.UserValidators.spaces
                            ])],
                        email: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                emailValidators_1.EmailValidators.isNotEmail
                            ])],
                    });
                }
                UserFormComponent.prototype.newUser = function () {
                    var _this = this;
                    this._usersService.createUser(this.form.value)
                        .subscribe(function (res) {
                        console.log(res);
                        _this._router.navigate(['users']);
                    });
                };
                UserFormComponent.prototype.editUser = function () {
                    var _this = this;
                    this._usersService.editUser(this.id, this.form.value)
                        .subscribe(function (res) {
                        _this._router.navigate(['users']);
                    });
                };
                UserFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.id = this._routeSegment.getParam("id");
                    this._usersService.getUsers()
                        .subscribe(function (res) {
                        var userLength = res.length;
                        if (!_this.id) {
                            return;
                        }
                        _this._usersService.getUsers(_this.id)
                            .subscribe(function (res) {
                            //If id not valid, return to /users.
                            if (!res[0]) {
                                _this._router.navigate(['users']);
                            }
                            _this.user = res[0];
                            _this.title = "Edit User";
                            return;
                        });
                    });
                };
                ;
                UserFormComponent = __decorate([
                    core_1.Component({
                        selector: 'add-user',
                        templateUrl: 'app/users/user-form.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [users_service_1.UsersService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, users_service_1.UsersService, router_1.RouteSegment])
                ], UserFormComponent);
                return UserFormComponent;
            }());
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});
//# sourceMappingURL=user-form.component.js.map