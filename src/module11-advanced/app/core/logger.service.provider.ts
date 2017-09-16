import {LoggerService} from "./logger.service";
import {ConfigService} from "./config.service";
import {loggerServiceFactory} from "./logger-service-factory";



export let LoggerServiceProvider = {
  provide: LoggerService,
  useFactory: loggerServiceFactory,
  deps:[ConfigService]
}
