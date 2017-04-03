import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { IMovie } from './../../common/models/IMovie';
import  Movie  from './../../common/models/movie.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'movie-form',
	templateUrl: './movieForm.component.html',
	styleUrls: ['./movieForm.component.css']
})

export class MovieFormComponent implements OnInit {
	public myForm: FormGroup;
    public submitted: boolean;
    public events: any[] = [];

	private newMovie: Movie;

    @Output()
    private onMovieAdded:EventEmitter<Movie> = new EventEmitter<Movie>();

	constructor(private _fb: FormBuilder) { }

	ngOnInit() {
		this.newMovie = new Movie();

		this.myForm = this._fb.group({
			title: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
			year: ['', [<any>Validators.required, <any>Validators.pattern(`(19\\d{2}|20[01][0-6])`)]],
			posterUrl: ['', [<any>Validators.required, <any>Validators.pattern(`(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))`)]]
		});

        // subscribe to form changes
        this.subcribeToFormChanges();

    }

    subcribeToFormChanges() {
        const myFormStatusChanges$ = this.myForm.statusChanges;
        const myFormValueChanges$ = this.myForm.valueChanges;

        myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    }

	save(model: IMovie, isValid: boolean) {
        this.submitted = true;
        console.log(model, isValid);

        if (isValid){
          this.newMovie = new Movie();
          this.newMovie.title = model.title;
          this.newMovie.year = model.year;
          this.newMovie.poster = model.posterUrl;
          this.newMovie.releaseDate = new Date("1/1/"+ model.year);
          this.onMovieAdded.emit(this.newMovie);
        }
    }
}
