import { HTTP_PROVIDERS, Http, Request, RequestOptionsArgs, Response, XHRBackend,
  RequestOptions, ConnectionBackend, Headers }         from '@angular/http';
import { Router }                                      from '@angular/router';
import { Injectable, Inject}                           from '@angular/core';
import { LocationStrategy, HashLocationStrategy }      from '@angular/common';
import { Observable }                                  from 'rxjs/Observable';
import { OidcTokenManagerService }                     from "./OidcTokenManager.service"
import * as _                                          from "lodash";

export class HttpInterceptorService extends Http {

  @Inject("BASE_URL") private _baseUrl: string;

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions,
    private _router: Router, private _oidcToken: OidcTokenManagerService) {

    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.request(url, options));
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    debugger;
    let opt = this.checkApiCall(options);
    return this.intercept(super.get(url, opt));
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.post(url, this.checkApiCall(options)));
    //return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.put(url, this.checkApiCall(options)));
    //return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.delete(url, this.checkApiCall(options)));
  }

  //getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
  //  if (options == null) {
  //    options = new RequestOptions();
  //  }
  //  if (options.headers == null) {
  //    options.headers = new Headers();
  //  }
  //  options.headers.append('Content-Type', 'application/json');
  //  return options;
  //}

  checkApiCall(options?: RequestOptionsArgs): RequestOptionsArgs {
    let apiUrl = this._baseUrl + "/api";

    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    if (RegExp(apiUrl).test(options.url)) {
      options.headers.set('Accept', 'text/json');
      options.headers.set('Authorization', 'Bearer ' + this._oidcToken.mgr.access_token)
    }
    return options;
  }

  intercept(observable: Observable<Response>): Observable<Response> {
    //return observable.catch((err, source) => {
    //  if (err.status == 401 && !_.endsWith(err.url, 'api/auth/login')) {
    //    this._router.navigate(['/login']);
    //    return Observable.empty();
    //  } else {
    //    return Observable.throw(err);
    //  }
    //});
    return observable;
  }
}

//bootstrap(MyApp, [
//  HTTP_PROVIDERS,
//  ROUTER_PROVIDERS,
//  provide(LocationStrategy, { useClass: HashLocationStrategy }),
//  provide(Http, {
//    useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router) => new HttpInterceptor(xhrBackend, requestOptions, router),
//    deps: [XHRBackend, RequestOptions, Router]
//  })
//])
//  .catch(err => console.error(err));