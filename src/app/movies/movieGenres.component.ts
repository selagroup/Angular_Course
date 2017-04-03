import { Component, OnInit, Input } from '@angular/core';
import { MoviesService  } from '../common/services/movies.service';
import Movie from '../common/models/movie.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'movieGenres',
    template: `
        <ul>
            <li *ngFor="let genre in genres" >{{genres}}</li>
        </ul>
    `
})
export class movieGenresComponent implements OnInit {

    @Input()
    private genres:String[] =[];

    constructor() { }

    ngOnInit() { }

}
