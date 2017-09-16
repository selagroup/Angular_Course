import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Movie} from "../../models/movie.model";
import {MoviesService} from "../../core/movies.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.css']
})
export class MovieNewComponent implements OnInit {

  private newMovie: Movie;

  @ViewChild('posterRef')
  private preview: ElementRef;

  @Output()
  private onMovieAdded: EventEmitter<Movie> = new EventEmitter<Movie>();
  constructor(private moviesService: MoviesService, private router: Router) { }

  private doShowModal:boolean = false;

  ngOnInit() {
    this.newMovie=new Movie();
  }

  onSubmit(form){
    this.moviesService.create(this.newMovie)
        .subscribe(
          movie => this.router.navigate(['movies']));

  }
  openModal(){
    this.doShowModal= true;
  }

  cancelClicked(){
    this.doShowModal = false;
  }
  getPosterURL(){
    return (this.newMovie && this.newMovie.poster) ? this.newMovie.poster : 'Add';
  }
  updatePoster() {
    this.newMovie.poster = this.preview.nativeElement.value;
    this.doShowModal = false;
  }


}
