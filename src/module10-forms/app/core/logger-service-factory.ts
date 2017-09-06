import {ConfigService} from "./config.service";
import {LoggerService} from "./logger.service";
import {Logger} from "./logger";

export function loggerServiceFactory(config: ConfigService): LoggerService{

  let prefix = config.getConfigValue('loggerPrefix');

  return new Logger(prefix);

};
