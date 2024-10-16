import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http'
import { Observable } from 'rxjs'

import { AuthenticationService } from '@core/services/auth.service'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  // intercept(
  //   request: HttpRequest<Request>,
  //   next: HttpHandler
  // ): Observable<HttpEvent<Event>> {
  //   // add authorization header with jwt token if available
  //   const token = this.authenticationService.session
  //   if (token) {
  //     request = request.clone({
  //       setHeaders: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //   }
  //
  //   return next.handle(request)
  // }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | null = localStorage.getItem('token');
    if(token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${JSON.parse(token).token}`
        }
      })
    }

    return next.handle(req);
  }


}
