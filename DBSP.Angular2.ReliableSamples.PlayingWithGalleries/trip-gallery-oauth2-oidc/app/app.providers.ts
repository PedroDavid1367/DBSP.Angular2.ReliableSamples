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
import { TripsHomegGuard }                     from "./trips.feature/trips-home.guard";
import { Router }                              from '@angular/router';
import { IHeroService }                        from "./notes.feature/hero.service";

let $ = require("jquery");

//import { FlightService }                       from './services/flight.service';
//import { OAuthService} from "angular2-oauth2/oauth-service";

export const APP_PROVIDERS = [
  // provide(PLATFORM_PIPES, {useValue: CityPipe, multi: true}),
  // provide(PLATFORM_DIRECTIVES, {useValue: FlightCardComponent, multi: true}),
  //FlightService,
  provide("BASE_URL", { useValue: "https://localhost:44315" }), // Gallery REST API Application
  provide("$", { useValue: $ }),
  OidcTokenManagerService,
  HttpExtendedService,           // This is new one
  TripsService,
  IHeroService,
  TripsHomegGuard,         // Not quite sure about this guard.

  // The router dependency could be avoided since actually does nothing in the current service.
  //HttpInterceptorService
  //provide(Http, {
  //  useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router, _oidcToken: OidcTokenManagerService) => {
  //    new HttpInterceptorService(xhrBackend, requestOptions, router, _oidcToken)
  //  },
  //  deps: [XHRBackend, RequestOptions, Router, OidcTokenManagerService]
  //})
];

