

import {BehaviorSubject, Observable} from "rxjs";
import {Movie} from "../models/movie.model";

export class FavoritesService{

  private favoritesStream$ : BehaviorSubject<Movie[]>;

  constructor(){
    this.favoritesStream$ = new BehaviorSubject<Movie[]>([]);
  }


  AddFavorite(fav :  Movie){
    let last = this.favoritesStream$.getValue();
    this.favoritesStream$.next([...last, fav]);
  }

  removeFavorite(fav: Movie){
    let last = this.favoritesStream$.getValue();
    this.favoritesStream$.next(last.filter((m)=> m.id !== fav.id) );
  }

  getFavoritesStream():Observable<Movie[]> {
    return this.favoritesStream$.asObservable();
  }



}
