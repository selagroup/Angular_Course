import {Pipe,PipeTransform} from "@angular/core";

@Pipe({
  name:'yearsAgo'
})
export class YearsAgoPipe implements PipeTransform{

  private currentYear:number;

  constructor(){
    this.currentYear = new Date().getFullYear();
  }

  transform(year: number): string{
    let yearDiff=this.currentYear- year;
    return `${yearDiff} years ago`;
  }
}
