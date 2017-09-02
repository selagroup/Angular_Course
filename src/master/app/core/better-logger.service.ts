import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable()
export class BetterLoggerService extends LoggerService {

  constructor() {
    super();
  }

  log(msg: string){

    console.log(`${new Date()} ${this.prefix} => ${msg}`);
  }




}
