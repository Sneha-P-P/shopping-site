import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
  <br><br>
              <nav class="navbar navbar-default">
                <div class= "container">
                  <a class = "navbar-brand">{{pageTitle}}</a>
                  <ul class="nav navbar-nav">
                    <li><a [routerLink] = "['/welcome']"> Home </a></li>
                    <li><a [routerLink] = "['/product']" >Product List</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="container">
              <router-outlet></router-outlet>
            </div>`,
  // styleUrls: [' ./app.component.css']
})
export class AppComponent {
  pageTitle: string = "ACME Product Management"
;}
