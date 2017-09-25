import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  private  defaults={
    loggerPrefix: '**'
  };
  constructor() { }

  getConfigValue(key) {

    return this.defaults[key];
  }

}
