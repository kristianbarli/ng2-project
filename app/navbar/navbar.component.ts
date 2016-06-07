import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router'

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {
    
    constructor(private _router:Router){}
    
    setActive(path) {
        if (this._router.urlTree._root.children[0]) {
            return this._router.urlTree._root.children[0].value.segment == path;
        }
    }
}