import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  public prefix:string;

  constructor() {
    console.log('LoggerService');
  }

  log(msg){
    console.log(`${this.prefix} => ${msg}`);
  }


}
