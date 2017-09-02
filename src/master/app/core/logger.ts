import {LoggerService} from "./logger.service";

export class Logger extends LoggerService{

  constructor(_prefix: string = '$$'){
    super();
    this.prefix=_prefix;
  }
}
