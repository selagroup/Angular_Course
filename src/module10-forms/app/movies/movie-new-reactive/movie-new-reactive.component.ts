import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from "../../models/movie.model";
import { MoviesService } from "../../core/movies.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new-reactive.component.html',
  styleUrls: ['./movie-new-reactive.component.css']
})
export class MovieNewReactiveComponent implements OnInit {

  // private newMovie: Movie;
  private newMovieForm: FormGroup

  @Output()
  private onMovieAdded: EventEmitter<Movie> = new EventEmitter<Movie>();
  constructor(private moviesService: MoviesService,
    private router: Router,
    private fb: FormBuilder) {


    this.newMovieForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(4)]),
      year: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
      poster: new FormControl(''),
    })
    // this.newMovieForm= this.fb.group({
    //   title: ['',[Validators.required, Validators.minLength(2)]],
    //   year: ['',[Validators.required, Validators.pattern(/^\d+$/)]],
    //   poster: ''
    // });

  }

  ngOnInit() {
    // this.newMovie = new Movie();
  }
  checkFormStatus() {
    console.log(this.newMovieForm);
  }
  onSubmit() {
    this.moviesService.create(this.newMovieForm.value)
      .subscribe(
        movie => this.router.navigate(['movies']));

  }

  get title() { return this.newMovieForm.get('title') }
  get year() { return this.newMovieForm.get('year') }
}
