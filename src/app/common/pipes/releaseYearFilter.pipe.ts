/**
 * Created by nirnoy on 21/11/2016.
 */
import {Pipe, PipeTransform} from "@angular/core";
import Movie from "../models/movie.model";

@Pipe({
  name:'releaseYearFilter'
})
export class ReleaseYearFilterPipe implements PipeTransform{

  constructor(){

  }

  transform(input: Movie[],year: string){
    let _year=parseInt(year);
    if(!isNaN(_year))
      return input.filter( movie => (movie.year == _year) );

    return input;
  }
}
