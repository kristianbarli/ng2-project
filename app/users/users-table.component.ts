import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router, RouteSegment} from '@angular/router';
import {UsersService} from '../shared/services/users.service';
import {SearchPipe} from '../shared/pipes/search.pipe';

@Component({
    selector: 'user-home',
    templateUrl: 'app/users/users-table.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [SearchPipe]
})

export class UsersTableComponent {

    constructor(private _usersService: UsersService, private _router: Router, private _routeSegment: RouteSegment) {

        this._usersService.getUsers().subscribe(res => { this.users = res })
    }
    private users;
    term = "";

    editUser(user) {
        let url = "users/" + user.id;
        this._router.navigate([url])
    }

    deleteUser(user) {
        if (!confirm("Are you sure you want to delete this user?")) {
            return;
        }

        this._usersService.deleteUser(user.id)
            .subscribe(res => {
                console.log("User deleted")
                this._usersService.getUsers().subscribe(res => { this.users = res })
            })

    }
}
