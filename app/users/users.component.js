System.register(['@angular/core', '../shared/services/users.service', '@angular/http', '@angular/router', './users-table.component', './user-form.component'], function(exports_1, context_1) {
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
    var core_1, users_service_1, http_1, router_1, users_table_component_1, user_form_component_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_table_component_1_1) {
                users_table_component_1 = users_table_component_1_1;
            },
            function (user_form_component_1_1) {
                user_form_component_1 = user_form_component_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_usersService) {
                    var _this = this;
                    this._usersService = _usersService;
                    this._usersService.getUsers().subscribe(function (res) { return _this.users = res; });
                }
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: "users",
                        template: '<div class="container"><router-outlet></router-outlet></div>',
                        providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.Routes([
                        { path: '/', component: users_table_component_1.UsersTableComponent },
                        { path: '/new', component: user_form_component_1.UserFormComponent },
                        { path: '/:id', component: user_form_component_1.UserFormComponent }
                    ]), 
                    __metadata('design:paramtypes', [users_service_1.UsersService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map