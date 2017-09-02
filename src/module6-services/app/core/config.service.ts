import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "../config/app.config";

@Injectable()
export class ConfigService {

  private  defaults={
    loggerPrefix: '**'
  };
  constructor(@Inject(APP_CONFIG) appconfig:any) {
    this.defaults = Object.assign({},this.defaults,appconfig);
  }

  getConfigValue(key) {
    return localStorage.getItem(key) || this.defaults[key];
  }

}
