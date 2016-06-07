import {Component, OnInit} from '@angular/core';
import {ControlGroup, Control, Validators, FormBuilder} from '@angular/common';
import {Router, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {UsersService} from '../shared/services/users.service';
import {User} from './user';
import {UserValidators} from '../shared/validators/userValidators';
import {EmailValidators} from '../shared/validators/emailValidators';

@Component({
    selector: 'add-user',
    templateUrl: 'app/users/user-form.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UsersService]
})

export class UserFormComponent implements OnInit {

    form: ControlGroup;
    title = "Add User"
    id;
    user = new User();

    constructor(fb: FormBuilder,
        private _router: Router,
        private _usersService: UsersService,
        private _routeSegment: RouteSegment) {

        this.form = fb.group({
            name: ['', Validators.compose([
                Validators.required,
                UserValidators.spaces
            ])],
            email: ['', Validators.compose([
                Validators.required,
                EmailValidators.isNotEmail
            ])],
        })
    }

    newUser() {
        this._usersService.createUser(this.form.value)
            .subscribe(res => {
                console.log(res)
                this._router.navigate(['users']);
            });
    }

    editUser() {
        this._usersService.editUser(this.id, this.form.value)
            .subscribe(res => {
                this._router.navigate(['users'])
            });
    }

    ngOnInit() {
        this.id = this._routeSegment.getParam("id");

        this._usersService.getUsers()
            .subscribe(res => {
                let userLength = res.length;

                if (!this.id) {
                    return;
                }
                this._usersService.getUsers(this.id)
                    .subscribe(res => {
                        //If id not valid, return to /users.
                        if (!res[0]) {
                            this._router.navigate(['users'])
                        }
                        this.user = res[0];
                        this.title = "Edit User"
                        return;
                    });
            })
    };

    


}