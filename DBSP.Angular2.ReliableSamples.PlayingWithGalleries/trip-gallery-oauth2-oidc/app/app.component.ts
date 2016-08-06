import { Component, OnInit, ElementRef }                  from "@angular/core";
import { Router, ROUTER_DIRECTIVES }  from "@angular/router";
import { OidcTokenManagerService }    from "./common.services/OidcTokenManager.service"
import { MaterializeDirective }       from "angular2-materialize";
//import { OAuthService}                from "angular2-oauth2/oauth-service";
let $ = require("jquery");

/*
 * Currently the main application component (i.e this) has the functionality to login or logout.
 * Nevertheless, this behaviour might/should be in different component, maybe a header.
 */
@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES],
  template: require('./app.component.html')
})
export class AppComponent implements OnInit {

  private _mgr;

  //constructor(private _oidcmanager: OidcTokenManagerService) {
  //  this._mgr = this._oidcmanager.mgr;
  //}

  constructor(private _oidcmanager: OidcTokenManagerService,
    private _elRef: ElementRef,
    private _router: Router) { }

  ngOnInit() {
    $(this._elRef.nativeElement).find(".button-collapse")
      .sideNav({
        closeOnClick: true
      });
  }


  public logOutOfIdSrv() {
    this._mgr.redirectForLogout();
  }

  public logout() {
    this._mgr.removeToken();
    window.location.href = "index.html";
  }

  public login() {
    this._mgr.redirectForToken();
  }
}
