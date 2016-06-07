System.register(['@angular/core', '@angular/router', '../shared/services/users.service', '../shared/pipes/search.pipe'], function(exports_1, context_1) {
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
    var core_1, router_1, users_service_1, search_pipe_1;
    var UsersTableComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            }],
        execute: function() {
            UsersTableComponent = (function () {
                function UsersTableComponent(_usersService, _router, _routeSegment) {
                    var _this = this;
                    this._usersService = _usersService;
                    this._router = _router;
                    this._routeSegment = _routeSegment;
                    this.term = "";
                    this._usersService.getUsers().subscribe(function (res) { _this.users = res; });
                }
                UsersTableComponent.prototype.editUser = function (user) {
                    var url = "users/" + user.id;
                    this._router.navigate([url]);
                };
                UsersTableComponent.prototype.deleteUser = function (user) {
                    var _this = this;
                    if (!confirm("Are you sure you want to delete this user?")) {
                        return;
                    }
                    this._usersService.deleteUser(user.id)
                        .subscribe(function (res) {
                        console.log("User deleted");
                        _this._usersService.getUsers().subscribe(function (res) { _this.users = res; });
                    });
                };
                UsersTableComponent = __decorate([
                    core_1.Component({
                        selector: 'user-home',
                        templateUrl: 'app/users/users-table.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: [search_pipe_1.SearchPipe]
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService, router_1.Router, router_1.RouteSegment])
                ], UsersTableComponent);
                return UsersTableComponent;
            }());
            exports_1("UsersTableComponent", UsersTableComponent);
        }
    }
});
//# sourceMappingURL=users-table.component.js.map