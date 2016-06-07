import {Component} from '@angular/core';
import {UsersService} from '../shared/services/users.service';
import {HTTP_PROVIDERS} from '@angular/http';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {UsersTableComponent} from './users-table.component';
import {UserFormComponent} from './user-form.component';

@Component({
    selector: "users",
    template: '<div class="container"><router-outlet></router-outlet></div>',
    providers: [UsersService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})

@Routes([
    { path: '/', component: UsersTableComponent  },
    { path: '/new', component: UserFormComponent },
    { path: '/:id', component: UserFormComponent }
])

export class UsersComponent {
    
    constructor(private _usersService:UsersService) {
        
        this._usersService.getUsers().subscribe(res => this.users = res)
    }
    users;
   
   
  
}