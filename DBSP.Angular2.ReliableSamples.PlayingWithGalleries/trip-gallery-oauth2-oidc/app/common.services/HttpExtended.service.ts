import { Http, Headers }            from '@angular/http';
import { Injectable, Inject }       from '@angular/core';
import { Observable }               from 'rxjs/Observable';
import { OidcTokenManagerService }  from "./OidcTokenManager.service"

@Injectable()
export class HttpExtendedService {

  //@Inject("BASE_URL") private _baseUrl: string;

  constructor(private _http: Http, private _oidcToken: OidcTokenManagerService,
    @Inject("BASE_URL") private _baseUrl: string) { }

  private checkApiCall(url: string) {
    let apiUrl = this._baseUrl + "/api";

    // TODO: Check if access token is already contained.
    if (RegExp(apiUrl).test(url)) {
      let headers = new Headers();
      headers.set('Accept', 'text/json');
      headers.set('Authorization', 'Bearer ' + this._oidcToken.mgr.access_token)
      return headers;
    } 

    return null;
  }

  public get(url) {
    return this._http.get(url, {
      headers: this.checkApiCall(url)
    });
  }

  public post(url, data) {
    return this._http.post(url, data, {
      headers: this.checkApiCall(url)
    });
  }


  //intercept(observable: Observable<Response>): Observable<Response> {
  //  return observable.catch((err, source) => {
  //    if (err.status == 401 && !_.endsWith(err.url, 'api/auth/login')) {
  //      this._router.navigate(['/login']);
  //      return Observable.empty();
  //    } else {
  //      return Observable.throw(err);
  //    }
  //  });
  //  return observable;
  //}
}
