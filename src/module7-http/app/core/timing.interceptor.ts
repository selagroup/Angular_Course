
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {LoggerService} from "./logger.service";
import {Injectable} from "@angular/core";

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  constructor(private logger:LoggerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next
      .handle(req)
      .do(event => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          this.logger.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        }
      });
  }
}
