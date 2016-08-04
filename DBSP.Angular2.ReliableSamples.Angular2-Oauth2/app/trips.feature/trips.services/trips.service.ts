import { Injectable, Inject}              from '@angular/core';
import { Http, URLSearchParams, Headers}  from '@angular/http';
import { Observable, Observer}            from 'rxjs';
import { OidcTokenManagerService }        from '../../common.services/OidcTokenManager.service';
//import { HttpInterceptorService }         from '../../common.services/HttpInterceptor.service';

@Injectable()
export class TripsService {

  //private _mgr: any;

  constructor(
    private _http: Http,
    private _oidcTokenManager: OidcTokenManagerService,
    @Inject("BASE_URL") private _baseUrl: string) {

    //this._mgr = _oidcTokenManager.mgr;
  }

  //public flights: Flight[] = [];
  public _trips: any; // It's necessary an interface for this.

  //public getTrips() {
  //  let url = this._baseUrl + "/api/trips";

  //  var headers = new Headers();
  //  headers.set('Accept', 'text/json');
  //  headers.set('Authorization', 'Bearer ' + this._mgr.access_token)

  //  return new Observable((observer: Observer<any[]>) => {
  //    this._http
  //      .get(url, { headers })
  //      .map(resp => resp.json())
  //      .subscribe((trips) => {
  //        this._trips = trips;
  //        observer.next(trips);
  //      });
  //  });
  //}

  public getTrips() {
    let url = this._baseUrl + "/api/trips";

    return new Observable((observer: Observer<any[]>) => {
      this._http
        .get(url)
        .map(resp => resp.json())
        .subscribe((trips) => {
          this._trips = trips;
          observer.next(trips);
        });
    });
  }

}