import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';

@Injectable()

export class UsersService {
    private _usersUrl = "http://192.168.1.125:8000/users";

    constructor(private _http: Http) { }


    //Get all users or specific user with id argument.
    getUsers(id?) {
        if (!id) {
            return this._http.get(this._usersUrl)
                .map(res => res.json());
        }

        else {
            return this._http.get(this._usersUrl + "/" + id)
                .map(res => res.json());
        }
    }

    createUser(user) {

        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._usersUrl, body, options);
    }

    editUser(id, user) {

        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = this._usersUrl + "/" + id;
        return this._http.put(url, body, options);
    }

    deleteUser(id) {
        console.log(this._usersUrl + "/" + id)
        return this._http.delete(this._usersUrl + "/" + id)
    }
}