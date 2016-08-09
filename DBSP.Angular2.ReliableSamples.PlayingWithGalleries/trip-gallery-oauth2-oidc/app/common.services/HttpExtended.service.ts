import { Http, Headers }            from '@angular/http';
import { Injectable, Inject }       from '@angular/core';
import { Observable }               from 'rxjs/Observable';
import { OidcTokenManagerService }  from "./OidcTokenManager.service"

@Injectable()
export class HttpExtendedService {

  private _mgr: any;

  constructor(private _http: Http, private _oidcToken: OidcTokenManagerService,
    @Inject("BASE_URL") private _baseUrl: string) {

    this._mgr = _oidcToken.mgr;
  }

  private checkApiCall(url: string) {
    let apiUrl = this._baseUrl + "/api";
    if (RegExp(apiUrl).test(url)) {
      let headers = new Headers();
      headers.set('Accept', 'text/json');
      headers.set('Authorization', 'Bearer ' + this._mgr.access_token);
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
}
