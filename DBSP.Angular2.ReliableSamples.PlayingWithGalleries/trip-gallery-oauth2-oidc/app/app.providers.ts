import {HTTP_PROVIDERS, Http, Request, RequestOptionsArgs, Response, XHRBackend,
  RequestOptions, ConnectionBackend, Headers}  from '@angular/http';
import { provide}                              from '@angular/core';
import { CityPipe}                             from './pipes/city.pipe';
import { PLATFORM_PIPES, PLATFORM_DIRECTIVES}  from '@angular/core'
import { FlightCardComponent}                  from './flight-card/flight-card.component';
import { OidcTokenManagerService }             from "./common.services/OidcTokenManager.service"
//import { HttpInterceptorService }              from "./common.services/HttpInterceptor.service"
import { HttpExtendedService }                 from "./common.services/HttpExtended.service"
import { TripsService }                        from "./trips.feature/trips.services/trips.service";
import { Router }                              from '@angular/router';

//import { FlightService }                       from './services/flight.service';
//import { OAuthService} from "angular2-oauth2/oauth-service";

export const APP_PROVIDERS = [
  // provide(PLATFORM_PIPES, {useValue: CityPipe, multi: true}),
  // provide(PLATFORM_DIRECTIVES, {useValue: FlightCardComponent, multi: true}),
  //FlightService,
  provide("BASE_URL", { useValue: "https://localhost:44315" }), // Gallery REST API Application
  OidcTokenManagerService,
  HttpExtendedService,           // This is new one
  TripsService,
  //provide(Http, {
  //  useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router, _oidcToken: OidcTokenManagerService) => {
  //    new HttpInterceptorService(xhrBackend, requestOptions, router, _oidcToken)
  //  },
  //  deps: [XHRBackend, RequestOptions, Router, OidcTokenManagerService]
  //})
];

