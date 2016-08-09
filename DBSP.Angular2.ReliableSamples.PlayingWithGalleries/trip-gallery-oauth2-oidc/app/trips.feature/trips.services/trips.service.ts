import { Injectable, Inject}              from '@angular/core';
import { Http }                           from '@angular/http';
import { Observable, Observer}            from 'rxjs';
import { OidcTokenManagerService }        from '../../common.services/OidcTokenManager.service';
import { HttpExtendedService }            from '../../common.services/HttpExtended.service';
//import { HttpInterceptorService }         from '../../common.services/HttpInterceptor.service';

// Don't remove this, it might be necessary for the future.
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/observable/empty";

@Injectable()
export class TripsService {

  //private _mgr: any;

  constructor(
    private _http: HttpExtendedService,
    private _oidcTokenManager: OidcTokenManagerService,
    @Inject("BASE_URL") private _baseUrl: string) {

    //this._mgr = _oidcTokenManager.mgr;
  }

  //public flights: Flight[] = [];
  public _trips: any; // It's necessary an interface for this.

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