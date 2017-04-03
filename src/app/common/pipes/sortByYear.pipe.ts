/**
 * Created by nirnoy on 22/11/2016.
 */
import {Pipe, PipeTransform} from "@angular/core";
import Movie from "../models/movie.model";
@Pipe({
  name:'sortByYear'
})
export class SortByYearPipe implements PipeTransform{
  constructor(){}

  transform(input:Movie[]){


    return input.sort( (movie1,movie2)=> {

      if(movie1.year == movie2.year)
         return 0;
      if(movie1.year < movie2.year)
          return 1;

      return -1;

    });



  }
}
