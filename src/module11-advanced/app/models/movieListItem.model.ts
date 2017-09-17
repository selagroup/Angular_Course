import {Movie} from "./movie.model";
export class MovieListItem extends Movie{

  isFavorite:boolean;
  constructor(public id: number = 0,
              public title: string ='',
              public year: number =0,
              public poster: string ='',
              public releaseDate: Date = null,
              public genres :string[]=[]){
    super(id,title,year,poster,releaseDate,genres);
    this.isFavorite = false;
  }
}
