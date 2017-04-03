import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'movieEditDetails',
    template: `
        <div>
        <a routerLink="edit">Details</a>
        <a routerLink="poster">Poster</a>
        </div>
        <router-outlet></router-outlet>
    `
})
export class MovieEditDetailsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}