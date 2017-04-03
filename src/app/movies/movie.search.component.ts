import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../common/services/movies.service'
import Movie from '../common/models/movie.model';
import { Subject }    from 'rxjs/Subject';
import '../rxjsExtensions';

@Component({
    selector: 'movieSearch',
    template: `
        <div>
            <label>
                Search:<input type="text" (keyup)="Search(search.value)" #search />
            </label>
        </div>
        <div>
            <ul>
                <li *ngFor="let movie of movies">{{movie.title}}</li>
            </ul>
        </div>
    `
})
export class MovieSearchComponent implements OnInit {

    private searchTerms = new Subject<string>();
    private movies:Movie[] =[];

    constructor(private moviesService:MoviesService) {

     }

    ngOnInit() {
        this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((term:string)=>{
                return this.moviesService.search(term);
            })
            .subscribe(movies=>{
                console.log(movies);
                this.movies=movies
            });
    }

    Search(value: string){
        this.searchTerms.next(value);
    }
}
