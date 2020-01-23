import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Movie} from "../../models/movie.model";
import {MoviesService} from "../../core/movies.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new-reactive.component.html',
  styleUrls: ['./movie-new-reactive.component.css']
})
export class MovieNewReactiveComponent implements OnInit {

  private newMovie:Movie;
   newMovieForm:FormGroup;

  @ViewChild("#", {static: true})

  @Output()
  private onMovieAdded: EventEmitter<Movie> = new EventEmitter<Movie>();
  constructor(private moviesService:MoviesService,
              private router:Router,
              private fb:FormBuilder) {

    this.newMovieForm= this.fb.group({
      title: ['',[Validators.required, Validators.minLength(2)]],
      year: ['',[Validators.required, Validators.pattern(/^\d+$/)]],
      poster: ''
    });



  }

  ngOnInit() {
    this.newMovie=new Movie();
  }

  onSubmit(){
    this.moviesService.create(this.newMovieForm.value)
        .subscribe(
          movie => this.router.navigate(['movies']));

  }

  get title() { return this.newMovieForm.get('title') }
  get year() { return this.newMovieForm.get('year') }
}
