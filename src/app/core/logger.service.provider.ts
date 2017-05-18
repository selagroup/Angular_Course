import {LoggerService} from "./logger.service";
import {ConfigService} from "./config.service";
import {Logger} from "./logger";

const loggerServiceFactory = (config: ConfigService): LoggerService =>{

  let prefix = config.getConfigValue('loggerPrefix');

  return new Logger(prefix);

};


export let LoggerServiceProvider = {
  provide: LoggerService,
  useFactory: loggerServiceFactory,
  deps:[ConfigService]
}
