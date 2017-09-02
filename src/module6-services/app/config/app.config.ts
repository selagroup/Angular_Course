import {InjectionToken} from "@angular/core";
export const appConfig = {
  loggerPrefix: '@@'
};

export const APP_CONFIG = new InjectionToken<any>('app.config')
