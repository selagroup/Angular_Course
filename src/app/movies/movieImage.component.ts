import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Movie from '../common/models/movie.model';
import { MoviesService  } from '../common/services/movies.service';


@Component({
    selector: 'movieImage',
    styles:[`
        .imgPreview {
            padding:5px;
             border:solid 1px black;
        },
        .imgPreview img{
            width:170px;
            height:250px;
        }
    `],
    template: `
        <div>
            <input type="text" [value]="imageUrl"  (keyup.enter)="imageUrl=$event.target.value" />
        </div>
        <div class="imgPreview">
            <img [src]="imageUrl" />
        </div>
        <div>
            <button (click)="saveImage()" >Save</button>
            <button (click)="goToDetails()">Back</button>
        </div>
    `
})
export class MovieImageComponent implements OnInit {

    private imageUrl:string;
    private movie:Movie;

    constructor(private route:ActivatedRoute,
                private service:MoviesService,
                private router: Router) { }

    ngOnInit() {
        let movie=this.route.parent.snapshot.data['currentMovie']
        this.imageUrl=movie.poster;
        this.movie=movie;
    }

    saveImage(){
          this.movie.poster=this.imageUrl;
          this.service.saveMovie(this.movie)
              .subscribe(() => this.goToDetails())
    }
    goToDetails(){
        this.router.navigate(['/movies/',this.movie.id,'edit']);
    }
}
