import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

import { User } from '@core/models/auth.model'
import { CookieService } from 'ngx-cookie-service'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  user: User | null = null

  public readonly authSessionKey = '_BOOKING_AUTH_SESSION_KEY_'

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {}

  login(email: string, password: string) {
   
    return this.http.post<User>(`/api/login`, { email, password }).pipe(
      map((user) => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          this.user = user
          // store user details and jwt in session
          this.cookieService.set(
            this.authSessionKey,
            JSON.stringify(user.token),
            1,
            '/'
          )
        }
        return user
      })
    )
  }

  signup(name: string, email: string, password: string) {
    return this.http
      .post<User>(`/api/signup`, { name, email, password })
      .pipe(map((user) => user))
  }

  logout(): void {
    // remove user from cookie to log user out
    this.cookieService.delete(this.authSessionKey)
    this.user = null
  }

  get session(): string {
    return this.cookieService.get(this.authSessionKey)
  }

  saveSession(token: string): void {
    this.cookieService.set(this.authSessionKey, token)
  }

  removeSession(): void {
    this.cookieService.delete(this.authSessionKey)
  }
}
