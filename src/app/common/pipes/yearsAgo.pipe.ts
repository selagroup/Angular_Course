import {Pipe,PipeTransform} from "@angular/core";
/**
 * Created by nirnoy on 20/11/2016.
 */


@Pipe({
    name:'yearsAgo'
})
export class YearAgoPipe implements PipeTransform{

  private currentYear:number;

  constructor(){
    this.currentYear = new Date().getFullYear();
  }

  transform(year: number): string{
    let yearDiff=this.currentYear- year;
    return `${yearDiff} years ago`;
  }
}
