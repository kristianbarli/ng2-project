import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {PdfComponent} from './pdf/pdf.component';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <router-outlet></router-outlet>
    `,
    directives: [HomeComponent, UsersComponent, PostsComponent, NavbarComponent, PdfComponent, ROUTER_DIRECTIVES],
})

@Routes([
    { path: "/", component: HomeComponent },
    { path: "/users", component: UsersComponent },
    { path: "/posts", component: PostsComponent },
    { path: "/pdf", component: PdfComponent }
])

export class AppComponent {
    
    constructor(private _router: Router){}
    
    
}