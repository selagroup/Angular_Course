import {Pipe, PipeTransform} from "@angular/core";
import {Movie} from "../models/movie.model";

@Pipe({
  name:'sortByYear',
  pure:false
})
export class SortByYearPipe implements PipeTransform{
  constructor(){}

  transform(input: Movie[]){

    if(input){

      return input.sort( (movie1, movie2)=> {

        if(movie1.year === movie2.year)
          return 0;
        if(movie1.year < movie2.year)
          return 1;

        return -1;

      });
    }
     return input;



  }
}
